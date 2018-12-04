<template>
  <div>
    <Header></Header>
    <div class="content">
      <!--TODO 引入 Lodash 库，实现侦听功能 -->
      aaa
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'Watcher',
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
</style>
