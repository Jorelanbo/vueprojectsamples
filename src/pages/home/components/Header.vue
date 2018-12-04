<template>
  <div class="header">测试用例</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
  position fixed;
  top 0;
  left 0;
  right 0;
  width 100%;
  height 1rem;
  line-height 1rem;
  text-align center;
  color white
  font-size .4rem
  background $headerBg
</style>
