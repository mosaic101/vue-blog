<template>
  <div class="sidebar">
    <div class="widget">
      <h3 class="title">联系方式</h3>
      <div class="content communication">
        <p>
          <a href="https://www.github.com/mosaic101" title="github">
            <i class="el-icon-fa-github"></i> github</a>
        </p>
        <p>
          <a href="https://weibo.com/mosaic101" title="weibo">
            <i class="el-icon-fa-weibo"></i> weibo</a>
        </p>
      </div>
    </div>

    <div class="widget">
      <h3 class="title">标签云</h3>
      <div class="content tag-cloud">
        <span class="tag" v-for="item in tags">
          <router-link :to="{ name: 'topicTag', params: { tag: item } }">{{item}}(2)</router-link>
        </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ['html', 'css', 'node', 'javaScript', 'golang']
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

.widget  {
  background: #ffffff;
  padding: 15px;
  margin-bottom: 20px;
}

.title {
  margin-top: 0;
  padding-bottom: 7px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 21px;
  // position: relative;
}

.tag-cloud  .router-link {
  // display: inline-block;
  // float: left;
  // padding-right: 8px;
}

.tag {
  display: inline-block;
  // float: left;
  padding-right: 18px;
}

// display none
@media screen and (max-width:768px) {
.sidebar {display: none;}
}

</style>
