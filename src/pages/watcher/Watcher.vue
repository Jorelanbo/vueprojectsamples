<template>
  <div>
    <Header></Header>
    <div class="content">
      <p class="ask">
        Ask a yes/no question:
      </p>
      <p>
        <label>
          <input v-model="question">
        </label>
      </p>
      <p class="answer">{{answer}}</p>
      <p class="picture">
        <img :src="img" alt="">
      </p>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'
import Header from './components/Header'
// var _ = require('lodash')
export default {
  name: 'Watcher',
  data () {
    return {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      img: ''
    }
  },
  components: {
    Header
  },
  watch: {
    question (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.img = ''
      this.debouncedGetAnswer()
    }
  },
  created () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
          vm.img = response.data.image
        })
        .catch(function (error) {
          vm.answer = 'Error: Could not reach the API. ' + error
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  width 100%
  height 100%
  margin-top 1.8rem
  .ask
    margin .3rem auto
    color cadetblue
  .answer
    margin .3rem auto
    color brown
input
  height .6rem
  width 50%
  background beige
</style>
