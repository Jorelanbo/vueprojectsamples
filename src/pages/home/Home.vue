<template>
  <div>
    <home-header></home-header>
    <div class="button-list">
      <Button type="primary" size="large" @click="toWatch">侦听器</Button>
      <Button type="primary" size="large" @click="toUseMixin">项目组件的混入</Button>
      <Button type="primary" size="large" @click="toLifeCycleGetData">测试渲染数据的生命周期钩子</Button>
      <Button type="primary" size="large" @click="toElementTree">使用ELEMENT Tree组件</Button>
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
    },
    toElementTree () {
      this.$router.push('ElementTree')
    },
    checkVersion () {
      var dtask = {}
      console.log('version')
      if (window.plus) {
        dtask = window.plus.downloader.createDownload(
          'https://nodejs.org/dist/v8.7.0/node-v8.7.0-x64.msi',
          {},
          function (d, status) {
            if (status === 200) {
              alert('Download success: ' + d.filename)
            }
          }
        )
      }
      console.log(dtask)
    }
  },
  mounted () {
    this.checkVersion()
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
