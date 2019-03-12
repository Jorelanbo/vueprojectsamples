<template>
  <div>
    <home-header></home-header>
    <div class="button-list">
      <Button type="primary" size="large" @click="toWatch">侦听器</Button>
      <Button type="primary" size="large" @click="toUseMixin">项目组件的混入</Button>
      <Button type="primary" size="large" @click="toLifeCycleGetData">测试渲染数据的生命周期钩子</Button>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  },
  methods: {
    toWatch () {
      this.$router.push('Watcher')
    },
    toUseMixin () {
      this.$router.push('UseMixin')
    },
    toLifeCycleGetData () {
      this.$router.push('LifeCycleGetData')
    }
  }
}
</script>

<style lang="stylus" scoped>// 要使用stylus 需要安装两个第三方插件：stylus、stylus-loader
.button-list
  width 100%
  margin-top 1.8rem;
  Button
    width 50%;
    margin-bottom .5rem
</style>
