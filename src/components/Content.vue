<template>
  <div>
    <nav-menu></nav-menu>

    <div class="container">
      <el-row>
        <el-col :xs="24" :md="18">

          <article id="105" class="post">
            <div class="post-head">
              <h1 class="post-title">
                <a href="/ghost-1-0-rc1/">Ghost 1.0 RC1 发布，可用于生产环境</a>
              </h1>
              <div class="post-meta">
                <span class="author">作者：
                  <a href="/author/wangsai/">王赛</a>
                </span> •
                <time class="post-date" datetime="2017年7月13日星期四中午12点12分" title="2017年7月13日星期四中午12点12分">2017年7月13日</time>
              </div>
            </div>
            <div class="post-content">
              <p>今天，我们正式发布了首个 Ghost 1.0 RC 版本，希望这是到达最终版本的最后一步。你可以通过 Ghost-CLI 安装此最新版本，并且可以使用到 生产环境中！！！如果你需要从 LTS (0.11) 版本迁移到 1.0 版本，请阅读迁移指南。 同时，下面列出从上一个 bet</p>
            </div>
            <div class="post-permalink">
              <a href="/ghost-1-0-rc1/" class="btn btn-default">阅读全文</a>
            </div>
          </article>

<footer class="page">
  <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</footer>

        </el-col>

        <el-col :xs="24" :md="6">
          <div class="post">
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

        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import NavMenu from './NavMenu'
export default {
  data() {

  },
  components: {
    NavMenu,
  }
}
</script>

<style lang="less">
.container {
  max-width: 1360px;
  margin: 30px auto;
  // padding: 0 15px;
}

.el-col {
  padding: 0 15px;
}

.post {
  background: #ffffff;
  padding: 15px;
}

.post-head {
  text-align: center;
}

.page {
  margin:20px;
  text-align: center;
}

</style>
