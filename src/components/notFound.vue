<template>
  <div class="not-found">
    <h1>{{ 'url: ' + $route.params[0] }}</h1>
    <h1>{{ 'message: 404' }}</h1>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: '404'
    }
  }
}
</script>

<style lang="less" scoped>
.not-found {
  margin: 30px;
}
</style>
