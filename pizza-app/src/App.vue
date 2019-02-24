<template>
  <div id="app">
     <div class="container">
       <app-Header></app-Header>
     </div>
    <div class="container">
      <router-view></router-view>
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderGide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './component/header.vue';
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    'app-Header': Header,
  }
}

</script>

<style>

</style>
