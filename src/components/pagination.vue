<template>
  <div class="pagination">
    <el-pagination layout="prev, pager, next" :total="count">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 66
    }
  },
  methods: {

  }

}
</script>

<style lang="less" scoped>

</style>
