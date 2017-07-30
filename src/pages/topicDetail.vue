<template>
  <div>
    <nav-menu></nav-menu>

    <div class="container">
      <el-row>
        <el-col :xs="24" :md="18">

          <article id="88" class="topic">
            <header class="post-head">
              <h1 class="post-title">Ghost 0.7 版本将会带来哪些惊喜</h1>
              <section class="post-meta">
                <span class="author">作者：
                  <a href="/author/wangsai/">王赛</a>
                </span> •
                <time class="post-date" datetime="2015年8月13日星期四晚上11点59分" title="2015年8月13日星期四晚上11点59分">2015年8月13日</time>
              </section>
            </header>

            <section class="post-content">
              <h2 id="">后台界面</h2>

              <p>首当其冲的就是后台 UI 的改变。</p>

              <p>从 Ghost 0.3.0 第一个公开发布的版本至今，Ghost 的后台 UI 一直都很简洁，顶部是一个黑底的导航条，三四个菜单项，底部是标签输入框，中间全是内容区域。如下图：</p>

              <p>
                <a href="http://static.ghostchina.com/image/0/65/f0f540f80304ce8c740ea37876e73.png" class="mfp-zoom" style="display:block;">
                  <img src="http://static.ghostchina.com/image/0/65/f0f540f80304ce8c740ea37876e73.png" alt="">
                </a>
              </p>

              <p>但是随着 Ghost 功能越来越完善，越来越多，好多东西就“放不下了”，因此急需改变一下后台界面的布局，以便为将来的插件系统留出足够的扩展空间。</p>

              <p>“Zelda” － 这就是新 UI 的开发代号。长得怎么样？咱们先上图一窥究竟：</p>

              <p>
                <a href="http://static.ghostchina.com/image/3/fe/b65dad5d1fe4d42f43daeeadf7e76.png" class="mfp-zoom" style="display:block;">
                  <img src="http://static.ghostchina.com/image/3/fe/b65dad5d1fe4d42f43daeeadf7e76.png" alt="">
                </a>
              </p>

              <p>Zelda 将后台布局分成了三列，最左侧是功能列表或者叫菜单列表，最右侧是内容，中间是内容列表。这样布局很明显就是让将来新增的扩展在左侧一直往下排下去，根据每个扩展所对应的功能，右侧可以放置相应的内容。</p>

              <p>总的来说，和 Wordpress 正在趋同，越长越像了。下面我们看看 WP 4.2 系列的后台长相吧：</p>

              <p>
                <a href="http://static.ghostchina.com/image/2/40/dc7bfcf99aa6781fdbb348fbfc426.png" class="mfp-zoom" style="display:block;">
                  <img src="http://static.ghostchina.com/image/2/40/dc7bfcf99aa6781fdbb348fbfc426.png" alt="">
                </a>
              </p>

              <p>呵呵，Ghost 和 Wordpress 都是博客（最后演变为全功能的 CMS）系统，因为功能趋同，很多操作方式、布局排布自然也会向 Wordpress 致敬。就像 Android 和 iOS 之间的关系。</p>

              <h2 id="api">开放的 API</h2>

              <p>凡是用过 Ghost，或者制作过模版的同学都体会到：Ghost 目前提供的 API 太少，可扩展性太低。的确是这样，Ghost 很多东西不完善，尤其是没有插件系统，直接导致很多功能不能由第三方来开发、完善，只能等 Ghost 官方来搞定。</p>

              <p>比如，
                <a href="http://www.ghostchina.com/">Ghost 中文网</a>所维护的
                <a href="http://www.ghostchina.com/download/">中文版</a>，为了支持第三方云存储，不得不修改 Ghost 内核；为了能够做一个“标签云”的功能，不得不自己开发一个 handlebars 助手。</p>

              <p>说了这些，你也别高兴太早哦，即将到来的 0.7 版本仍然没有完善插件系统，但是，这个版本将会提供一些公开访问的 API 出来，比如这次开放了一个功能更强的
                <code>xxxx xxx </code> 助手，能够自由调取博文列表，以后展示最新博之类的功能就方便了一些。</p>

              <h2 id="">最后</h2>

              <p>上面说的是 0.7 版本中比较突出的变化，当然，还有很多变化即将到来，有兴趣的同学可以看这里：
                <a href="https://github.com/TryGhost/Ghost/issues/5503">https://github.com/TryGhost/Ghost/issues/5503</a>
              </p>

              <p>Ghost 0.7 仍然是值得期待的，我们也会看到 Ghost 变的越来越强大。</p>
            </section>

            <footer class="post-footer clearfix">
              <div class="pull-left tag-list">
                <i class="fa fa-folder-open-o"></i>
                <a href="/tag/about-ghost/">Ghost</a>,
                <a href="/tag/release/">新版本发布</a>
              </div>

              <div class="pull-right share">
                <div class="bdsharebuttonbox share-icons bdshare-button-style0-24" data-bd-bind="1501338968511">
                  <a href="#" class="bds_more" data-cmd="more"></a>
                  <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
                  <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                  <a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
                  <a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
                  <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
                </div>
              </div>
            </footer>

          </article>

        </el-col>
        <el-col :xs="24" :md="6">
          <sidebar></sidebar>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import navMenu from '../components/navMenu'
import sidebar from '../components/sidebar'

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
  components: {
    navMenu,
    sidebar
  },
  methods: {
    openDetail(id) {
      this.$router.push('topics/' + id)
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

.post-content img {
  max-width: 100%;
  height: auto;
  margin: 0.2em 0;
}


</style>
