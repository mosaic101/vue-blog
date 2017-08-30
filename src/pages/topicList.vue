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
              <time class="topic-date">{{item.createdDate}}</time>
            </div>
          </div>
          <div class="topic-content" v-html="item.html">
          </div>
          <div class="topic-link">
            <router-link class="btn btn-default" :to="{ name: 'topicDetail', params: { id: item._id } }">阅读全文</router-link>
          </div>
        </article>
        <!-- 分页 -->
        <div class="pagination">
            <el-pagination
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :total="count">
          </el-pagination>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import container from '../components/container'
import pagination from '../components/pagination'
import { BASE_URL } from '@/config/env'
import getData from '@/api/getData'
export default {
  data() {
    return {
      count: 33,
      list: []
    }
  },
  created() {
    // this.$loading({ fullscreen: true })
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this._initData()
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      this._initData(to.query.page)
    }
  },
  components: {
    container,
    pagination
  },
  methods: {
    async _initData(page) {
      let url = page ? '/topics?page=' + page
        : '/topics'
      this.list = await getData({url})
      this.count = await getData({url: '/topics/count'})
    },
    handleCurrentChange(page) {
      let url = '/topics?page=' + page
      this.$router.push(url)
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

.pagination {
  text-align: center;
}
</style>
