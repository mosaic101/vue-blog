<template>
  <div id="test">
  <h1>{{ message }}</h1>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="text">文字按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      message: 'test '
    }
  }
}
</script>
