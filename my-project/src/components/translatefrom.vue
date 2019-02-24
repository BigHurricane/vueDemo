<template>
    <div id="translatefrom" class="row">
      <div class="col-md-6 col-md-offset-3">
        <form @submit="formSubmit" class="well form-inline">
          <input class="form-control" type="text" placeholder="请输入需要翻译的内容" v-model="toInputMsg">
          <select v-model="language" class="form-control">
            <option value="en">English</option>
            <option value="ru">Russian</option>
            <option value="ko">Korea</option>
            <option value="ja">Janpenese</option>
          </select>
          <input type="submit" value="翻译">
        </form>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'translatefrom',
        data() {
          return {
              toInputMsg: '',
              language: ''
          }
        },
      methods: {
        formSubmit(e) {
//          alert(this.toInputMsg);
          this.$emit('formSubmit', this.toInputMsg, this.language);
          e.preventDefault();   //阻止页面刷新
        }
      },
      created() {
          this.language = 'en';
      }
    }
</script>

<style>
</style>
