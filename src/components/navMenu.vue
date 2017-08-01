<template>
  <div class="nav-menu">
      <el-menu theme="dark" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="topics">
          <i class="el-icon-message"></i>博客
        </el-menu-item>
        <el-menu-item index="messages">
          <i class="el-icon-message"></i>留言
        </el-menu-item>
        <el-menu-item index="about">
          <i class="el-icon-message"></i>关于
        </el-menu-item>
      </el-menu>
      <el-dropdown v-if="isMobile" @command="handleCommand" menu-align='start'>
        <!-- <img src="favicon.ico" class="avator"> -->
        <span class="el-dropdown-link">
          <i class="el-icon-caret-bottom el-icon-menu"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="topics">博客</el-dropdown-item>
          <el-dropdown-item command="messages">留言</el-dropdown-item>
          <el-dropdown-item command="about">关于</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
        case 'messages':
          this.$router.push('/messages')
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

<style scoped>

.nav-menu {
  position: fixed;
  top: 0;
  width: 100%;
  min-width: 320px;
  /* height: 70px; */
  z-index: 1;
}



</style>

