<template>
  <div>
    <container active-item="topics">
      <div slot="right">
        <article :id="item._id" class="topic" v-for="(item, index) in list">
          <div class="topic-head">
            <h1 class="topic-title">
              <router-link :to="{ name: 'topicDetail', params: { id: item._id } }">{{item.title}}</router-link>
            </h1>
            <div class="topic-meta">
              <span class="author">作者：
                <a href="/author/wangsai/"></a>
                <router-link :to="{ path: 'about' }">{{item.createdBy}}</router-link>
              </span> •
              <time class="topic-date" :datetime="item.createdAt" :title="item.createdAt">{{item.createdAt}}</time>
            </div>
          </div>
          <div class="topic-content" v-html="item.html">
          </div>
          <div class="topic-link">
            <router-link class="btn btn-default" :to="{ name: 'topicDetail', params: { id: item._id } }">阅读全文</router-link>
          </div>
        </article>

        <div class="page-footer">
          <el-pagination layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>

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
      list: []
    }
  },
  created() {
    // this.$loading({ fullscreen: true })
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  components: {
    container
  },
  methods: {
    async fetchData() {
      let url = BASE_URL + '/topics'
      let response = await this.$http.get(url)
      this.list = response.data.data
    }
  }

}
</script>

<style lang="less" scoped>
.topic {
  background: #ffffff;
  padding: 15px;
  margin-bottom: 20px;
}

.topic-head {
  text-align: center;
}

.page {
  margin-bottom: 20px;
  text-align: center;
}

.page-footer {
  text-align: center;
}
</style>
