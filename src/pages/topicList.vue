<template>
  <div>
    <container active-item="topics">
      <div slot="right">
      <article :id="item.id" class="topic" v-for="(item, index) in list">
        <div class="topic-head">
          <h1 class="topic-title">
            <a @click="openDetail(item.id)">Ghost 1.0 RC1 发布，可用于生产环境</a>
          </h1>
          <div class="topic-meta">
            <span class="author">作者：
              <a href="/author/wangsai/">{{item.name}}</a>
            </span> •
            <time class="topic-date" datetime="2017年7月13日星期四中午12点12分" title="2017年7月13日星期四中午12点12分">2017年7月13日</time>
          </div>
        </div>
        <div class="topic-content">
          <p>今天，我们正式发布了首个 Ghost 1.0 RC 版本，希望这是到达最终版本的最后一步。你可以通过 Ghost-CLI 安装此最新版本，并且可以使用到 生产环境中！！！如果你需要从 LTS (0.11) 版本迁移到 1.0 版本，请阅读迁移指南。 同时，下面列出从上一个 bet</p>
        </div>
        <div class="topic-permalink">
          <a href="/ghost-1-0-rc1/" class="btn btn-default">阅读全文</a>
        </div>
      </article>
      </div>
    </container>
  </div>
</template>

<script>
import container from '../components/container'

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
  created () {
    // this.$loading({ fullscreen: true })
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  components: {
    container
  },
  methods: {
    fetchData() {
      // GET /someUrl
      this.$http.get('http://localhost:5757/v1/tickets').then(response => {

        // get body data
        this.someData = response.body;
        console.log(response);

      }, response => {
        // error callback
        console.log(response);
      });
    },
    openDetail(id) {
      this.$router.push({ name: 'topicDetail', params: {  id: id }})
    }
  }

}
</script>

<style lang="less">
.container {
  max-width: 1360px;
  margin: 30px auto; // padding: 0 15px;
}

.el-col {
  padding: 0 15px;
}

.topic {
  background: #ffffff;
  margin-bottom: 20px;
  padding: 15px;
}

.topic-head {
  text-align: center;
}

.page {
  margin-bottom: 20px;
  text-align: center;
}
</style>
