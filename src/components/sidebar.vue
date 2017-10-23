<template>
  <div class="sidebar">
    <div class="widget">
      <h4 class="title">联系方式</h4>
      <div class="content community">
        <!-- <p>QQ群：45691985</p> -->
        <p>
          <a href="https://www.github.com/mosaic101" title="Ghost中文网问答社区" target="_blank" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '问答社区'])">
            <i class="el-icon-fa-github"></i> github</a>
        </p>
        <p>
          <a href="https://weibo.com/mosaic101" title="Ghost中文网官方微博" target="_blank" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '官方微博'])">
            <i class="el-icon-fa-weibo"></i> weibo</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: 'xxx'
        },
        {
          id: 2,
          name: 'wwww'
        }
      ]
    }
  },
  methods: {
    openDetail(id) {
      this.$router.push('topics/' + id)
    }
  }

}
</script>

<style lang="less" scoped>

.sidebar  {
  background: #ffffff;
  padding: 15px;
  margin-bottom: 20px;
}

// display none
@media screen and (max-width:768px) {
.sidebar {display: none;}
}

</style>
