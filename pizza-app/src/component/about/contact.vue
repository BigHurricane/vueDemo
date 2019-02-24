<template>
    <div class="card text-dark bg-light mb-3">
      <div class="card-header">联系我们</div>
      <div class="card-body">
        <h4 class="card-title">联系我们</h4>
        <p class="card-text">545454</p>
        <router-link :to="{name: 'personNameLink'}">用户名</router-link>
        <router-link :to="{name: 'phoneNumberLink'}">电话号码</router-link>
        <router-view></router-view>
      </div>

    </div>
</template>

<script>
    export default {
        name: 'contact'
    }
</script>

<style>

</style>
