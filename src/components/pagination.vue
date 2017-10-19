<template>
  <div class="pagination">
    <el-pagination
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :total="count">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 33
    }
  },
  created() {
    this._initData()
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log(1111,to);
      console.log(2222,from);
    }
  },
  methods: {
    async _initData() {
      let url = '/topics?count=true'
      let response = await this.$http.get(url)
      this.count = response.data.data
    },
    handleCurrentChange(page) {
      let url = '/topics?page=' + page
      this.$router.push(url)
    }
  }

}
</script>

<style lang="less" scoped>

</style>
