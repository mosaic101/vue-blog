<template>
  <div>
    <container active-item="topics">
      <div slot="right">
        <article id="88" class="topic">

          <header class="topic-header">
            <h1 class="topic-title">{{topic.title}}</h1>
            <section class="topic-meta">
              <span class="author">作者：
                <a href="/author/wangsai/">{{topic.createdBy}}</a>
              </span> •
              <time class="topic-date">{{topic.createdDate}}</time>
            </section>
          </header>
          <hr>

          <div class="tag">
             <el-tag>标签一</el-tag>
            <el-tag type="gray">标签二</el-tag>
            <el-tag type="primary">标签三</el-tag>
            <el-tag type="success">标签四</el-tag>
            <el-tag type="warning">标签五</el-tag>
            <el-tag type="danger">标签六</el-tag>
          </div>
          <!-- content insert -->
          <section class="topic-content" v-html="topic.html">
          </section>

          <footer class="topic-footer clearfix">
            <div class="pull-left tag-list">
              <i class="fa fa-folder-open-o"></i>
              <a href="/tag/about-ghost/">Ghost</a>,
              <a href="/tag/release/">新版本发布</a>
            </div>
          </footer>

        </article>
      </div>
    </container>

  </div>
</template>

<script>
import container from '../components/container'
import { BASE_URL } from '@/config/env'
export default {
  data() {
    return {
      topic: {}
    }
  },
  created() {
    this._initData()
  },
  components: {
    container
  },
  methods: {
    async _initData() {
      let url = BASE_URL + '/topics/' + this.$route.params.id
      let response = await this.$http.get(url)
      this.topic = response.data.data
    },
    openDetail(id) {
      this.$router.push('topics/' + id)
    }
  }

}
</script>

<style lang="less" scoed>

.topic {
  background: #ffffff;
  padding: 15px;
  margin-bottom: 20px;
}

.topic-header {
  text-align:center;
}

.tag {
  text-align:right;
}
// .topic-content img {
//   max-width: 100%;
//   height: auto;
//   margin: 0.2em 0;
// }
</style>
