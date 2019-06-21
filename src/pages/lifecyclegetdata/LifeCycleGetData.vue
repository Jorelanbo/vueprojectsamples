<template>
  <div>
    <Header :title="title"></Header>
    <div class="content">
      <div v-for="(person, index) in persons" :key="index" ref="item" class="item">
        <p><span>姓名：</span>{{person.name}}</p>
        <p><span>年龄：</span>{{person.age}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from 'common/header/Header'
export default {
  name: 'LifeCycleGetData',
  data () {
    return {
      title: '查看渲染数据的生命周期钩子',
      persons: []
    }
  },
  components: {
    Header
  },
  beforeCreate () {
    if (this.$refs.item != null) {
      let html = this.$refs.item[1].innerHTML
      console.log('beforeCreate', html)
    }
  },
  created () {
    if (this.$refs.item != null) {
      let html = this.$refs.item[0].innerHTML
      console.log('created', html)
    }
  },
  beforeMount () {
    if (this.$refs.item != null) {
      let html = this.$refs.item[0].innerHTML
      console.log('beforeMount', html)
    }
  },
  mounted () {
    for (let i = 0; i < 10; i++) {
      this.persons.push({
        name: 'wang' + i + 'xiao',
        age: 2 + 'i'
      })
    }
    if (this.$refs.item != null) {
      let html = this.$refs.item[0].innerHTML
      console.log('mounted', html)
    }
  },
  beforeUpdate () {
    if (this.$refs.item != null) {
      let html = this.$refs.item[0].innerHTML
      console.log('beforeUpdate', html)
    }
  },
  updated () {
    if (this.$refs.item != null) {
      let html = this.$refs.item[0].innerHTML
      console.log('updated', html)
    }
  },
  beforeDestroy () {
    if (this.$refs.item != null) {
      let html = this.$refs.item[0].innerHTML
      console.log('beforeDestroy', html)
    }
  },
  destroyed () {
    if (this.$refs.item != null) {
      // destroy 之后item数组被清除，获取不到
      // let html = this.$refs.item[0].innerHTML
      // console.log('destroyed', html)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    width 100%
    height 100%
    margin-top 1.8rem
    .item
      margin-bottom .5rem
</style>
