<template>
  <div class="header">
    <img src="../../assets/images/back.png" alt="" @click="back">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
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
    img
      display block
      float left
      width .5rem
      height .5rem
      margin-top .25rem
</style>
