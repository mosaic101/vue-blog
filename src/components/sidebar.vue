<template>
  <div class="sidebar">
    <div class="widget">
      <h4 class="title">社区</h4>
      <div class="content community">
        <p>QQ群：277327792</p>
        <p>
          <a href="http://wenda.ghostchina.com/" title="Ghost中文网问答社区" target="_blank" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '问答社区'])">
            <i class="fa fa-comments"></i> 问答社区</a>
        </p>
        <p>
          <a href="http://weibo.com/ghostchinacom" title="Ghost中文网官方微博" target="_blank" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '官方微博'])">
            <i class="fa fa-weibo"></i> 官方微博</a>
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
