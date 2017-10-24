<template>
  <div>
    <container active-item="topics">
      <div slot="right">
        <article id="88" class="topic">

          <header class="topic-header">
            <h1 class="topic-title">{{topic.title}}</h1>
            <section class="topic-meta">
              <span class="author">作者：
                <a href="/about">{{topic.createdBy}}</a>
              </span> •
              <time class="topic-date">{{topic.createdDate}}</time>
            </section>
          </header>
          <hr>
          <!-- content insert -->
          <section class="topic-content" v-html="topic.html" v-highlight>
          </section>

          <footer class="tag">
            <i class="el-icon-fa-tags"></i>&nbsp;
            <span class="tag-list"  v-for="(item, index) in topic.tags">
              {{item}},
            </span>
          </footer>
        </article>
      </div>
    </container>

  </div>
</template>

<script>
import container from '../components/container'
import getData from '@/api/getData'
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
      let url = '/topics/' + this.$route.params.id
      this.topic = await getData({url})
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

.tag .tag-list{
  // float: left;
}

// .topic-content img {
//   max-width: 100%;
//   height: auto;
//   margin: 0.2em 0;
// }
</style>
