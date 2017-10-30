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
      <h3 class="title">热门文章</h3>
      <div class="content tag-cloud">
        <div class="topic-list" v-for="item in hotTopics">
          <router-link :to="{ name: 'topicDetail', params: { id: item.id } }">{{item.title}}</router-link>
        </div>
      </div>
    </div>

    <div class="widget">
      <h3 class="title">分类</h3>
      <div class="content tag-cloud">
        <div class="catalog-list" v-for="item in catalogs">
          <router-link :to="{ name: 'topicDetail', params: { id: item } }">{{item}}(2)</router-link>
        </div>
      </div>
    </div>

    <div class="widget">
      <h3 class="title">标签云</h3>
      <div class="content tag-cloud">
        <div class="tag-list" v-for="item in tags">
          <router-link :to="{ name: 'topicDetail', params: { id: item } }">{{item}}</router-link>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import api from '@/api'
export default {
  data() {
    return {
      hotTopics: [],
      catalogs: ['html', 'css', 'node', 'javaScript', 'linux', 'c++'],
      tags: ['html', 'css', 'node', 'javaScript', 'golang']
    }
  },
  created() {
    this._initData()
  },
  methods: {
    async _initData() {
      this.hotTopics = await api.getHotTopics()
    },
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
}

.tag-list {
  display: inline-block;
  padding-right: 18px;
  a {
    border: 1px solid #ebebeb;
    line-height: 1.5em;
    padding:2px 7px;
  }
}


// display none
@media screen and (max-width:768px) {
.sidebar {display: none;}
}

</style>
