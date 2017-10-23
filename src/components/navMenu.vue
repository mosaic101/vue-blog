<template>
  <div class="nav-menu">
    <el-menu theme="dark" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <div class="">
        <el-menu-item index="topics">
          <i class="el-icon-fa-home"></i>首页
        </el-menu-item>
        <el-menu-item index="about">
          <i class="el-icon-message"></i>关于
        </el-menu-item>
      </div>
    </el-menu>

    <!-- <div class="nav">
      <ul>
        <li class="current">
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">博雅游戏</a>
        </li>
        <li class="xiaoming">
          <a href="#">博雅新闻</a>
        </li>
        <li>
          <a href="#">关于我们</a>
        </li>
        <li>
          <a href="#">客服中心</a>
        </li>
        <li class="last">
          <a href="#">投资者关系</a>
        </li>
      </ul>
    </div> -->
    <el-dropdown @command="handleCommand" menu-align='start'>
      <img src="favicon.ico" class="avator">
      <span class="el-dropdown-link">
        <i class="el-icon-caret-bottom el-icon-menu"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="topics">首页</el-dropdown-item>
        <el-dropdown-item command="about">关于</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="nav-collapse">
      <a>
        <i class="el-icon-caret-bottom el-icon-menu"></i>
      </a>
      <div class="mini-nav-menu">
        <ul>
          <li>2222</li>
          <li>2222</li>
          <li>2222</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

//TODO: rebuild
export default {
  props: ['activeIndex'],
  data() {
    return {
      // activeIndex: 'topics',
      isMobile: false
    };
  },
  watch: {

  },
  methods: {
    handleSelect(key, keyPath) {
      // this.activeIndex = key
      switch (key) {
        case 'topics':
          this.$router.push('/topics')
          break
        case 'about':
          this.$router.push('/about')
          break
        default:
          this.$router.push('/topics')
      }
    },
    handleCommand(command) {
      console.log(command);
    }
  }
}
</script>

<style lang="less" scoped>

.nav-menu {
  position: fixed;
  top: 0;
  width: 100%;
  background-color:#324157;
  min-width: 320px;
  /* height: 70px; */
  z-index: 1;
}

.el-menu {
  width: 1200px;
  margin: 0 auto;
}
.el-dropdown {
  display:none;
}

@media screen and (max-width:768px) {
.el-dropdown {display:block;}
.el-menu {display:none;}
}

.nav-collapse {
  display:none;
}
</style>
