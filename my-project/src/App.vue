<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单 / 易用 / 便捷</h5>
    <translatefrom @formSubmit='fromTitle'></translatefrom>
    <Translateoutput v-text="translateText"></Translateoutput>
  </div>
</template>

<script>
import Translatefrom  from './components/translatefrom.vue';
import Translateoutput  from './components/translateoutput.vue';

export default {
  name: 'App',
  data(){
   return {
     translateText: ''
   }
  },
  components: {
    Translatefrom,
    Translateoutput
  },
  methods: {
    fromTitle(title,language) {
       this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate' +
         '?key=trnsl.1.1.20190213T161156Z.1a08a585b6445fb5.82eb54d7e6f5987117bc868be547c1af44cf6927' +
         '&lang='+language+'&text='+title)
         .then((response) => {
            this.translateText = response.body.text[0];
         })


    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
