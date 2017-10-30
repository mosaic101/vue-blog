<template>
  <div>
    <nav-menu active-index="activeItem"></nav-menu>
    <div class="container">
      <el-row>
        <el-col class="main" :xs="24" :sm="18">
          <!-- <el-breadcrumb separator="/">
			      <el-breadcrumb-item v-for="(item, index) in $route.meta" key="index">{{item}}</el-breadcrumb-item>
		      </el-breadcrumb> -->
          <slot name="right">no right part</slot>
        </el-col>
        <!-- sidebar < 768px, should auto disappear -->
        <el-col :sm="6">
          <sidebar></sidebar>
        </el-col>
      </el-row>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import navMenu from './navMenu'
import sidebar from './sidebar'
import myFooter from './myFooter'
export default {
  props: ['active-item'],
  data() {
    return {
      // 'active-item': 'topics',
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
    sidebar,
    myFooter
  },
  methods: {
    openDetail(id) {
      this.$router.push('topics/' + id)
    }
  }

}
</script>

<style lang="less" scoped>

.container {
  max-width: 1200px;
  margin: 90px auto 0;
}

.main {
  padding-right: 20px;
}
</style>
