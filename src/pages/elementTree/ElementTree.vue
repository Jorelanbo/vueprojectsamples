<template>
  <div>
    <Header :title="title"/>
    <div class="content">
      <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        :props="defaultProps"
        @node-click="onNodeClick"
        ref="tree"
      >
      </el-tree>
    </div>
  </div>
</template>

<script>
import Header from 'common/header/Header'
export default {
  name: 'ElementTree',
  data () {
    return {
      title: 'Element tree 用例',
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  components: {
    Header
  },
  methods: {
    onNodeClick (data) {
      console.log(data)
      let id = data.id
      var node = this.$refs.tree.getNode(id)
      console.log(node)
      if (node.checked) {
        this.$refs.tree.setChecked(node, false, true)
      } else {
        this.$refs.tree.setChecked(node, true, true)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    width 100%
    height 100%
    margin-top 1.8rem
</style>
