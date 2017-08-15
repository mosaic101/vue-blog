<template>
  <footer class="my-footer">
    <section class="copyright">
      <router-link to="/">吴建金 | </router-link>
      <span>© 2015 - 2017 by mosaic</span>
      <router-link :to="{path: 'admin'}"> | 后台管理</router-link>
    </section>
  </footer>
</template>

<<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
.my-footer {
  text-align: center;
}
</style>


