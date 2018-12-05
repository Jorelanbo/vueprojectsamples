<template>
  <div>
    <Header :title="title"></Header>
    <div class="content">
      <Button type="primary" size="large" @click="sayHello">使用混入的方法</Button>
    </div>
  </div>
</template>

<script>
import Header from 'common/header/Header'
import Mixin from './components/Mixin'
export default {
  name: 'UseMixin',
  data () {
    return {
      title: '项目组件的混入'
    }
  },
  mixins: [Mixin],
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>
  .content
    width 100%
    height 100%
    margin-top 1.8rem
    Button
      width 50%
</style>
