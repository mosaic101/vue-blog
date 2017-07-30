<template>
  <div>
    <nav-menu active-index="activeItem"></nav-menu>
    <div class="container">
      <el-row>
        <el-col :xs="24" :md="18">
          <slot name="right">no right part</slot>
        </el-col>
        <el-col :xs="24" :md="6">
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
      'active-item': 'topics',
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
