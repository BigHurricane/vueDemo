<template>
  <div class="admin">
    admin
  </div>
</template>

<script>
    export default {
        name: 'admin',
        data() {
          return {
            msg: 'kity'
          }
      },
        beforeRouteEnter: (to, from, next) => {
         /* alert('hello' + this.msg);
          next();*/    //这样取到的msg值是undefined

          next(vm => {
            alert('hello' + vm.msg);
            next();
          })
        },
        beforeRouteLeave: (to, from, next) => {
          if(confirm('你确定要离开吗？') === true){
            next();
          }else{
            next(false);
          }
      }
    }
</script>

<style>

</style>
