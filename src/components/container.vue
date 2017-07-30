<template>
  <div>
    <nav-menu></nav-menu>

    <div class="container">
      <el-row>
        <el-col :xs="24" :md="18">
        </el-col>
        <el-col :xs="24" :md="6">
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import navMenu from './navMenu'
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
  },
  methods:{
    openDetail(id) {
      this.$router.push('topics/'+ id)
    }
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
