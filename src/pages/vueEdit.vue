<template>
  <div>
    <nav-menu></nav-menu>
    <div class="editor">
      标题:
      <el-input type="text" autosize :maxlength=12 placeholder="请输入标题" v-model="title">
      </el-input>
      摘要:
      <el-input type="text" autosize :maxlength=12 placeholder="请输入摘要" v-model="abstract">
      </el-input>
      标签:
      <el-input type="text" autosize placeholder="请输入标签,以','隔开.例如: js,css" v-model="tags">
      </el-input>
      <div style="margin: 20px 0;"></div>
      <mavon-editor v-model="content" @change="change" />
    </div>
    <div class="submit">
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import navMenu from '../components/navMenu'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  data() {
    return {
      content: 'show time...',
      title: '',
      abstract: '',
      tags: ''
    }
  },
  components: {
    mavonEditor,
    navMenu
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    onEditorReady(editor) {
      console.log('editor ready!', editor)
    },
    change(value, render) {
      this.markdown = value
      this.html = render
    },
    async submit() {
      let title = this.title.trim()
      if (!title) return this.$message.warning('标题为必填项!')
      if (!this.tags) return this.$message.warning('标签为必填项!')
      let topic = await api.addTopic({
        title: title,
        abstract: this.abstract,
        content: this.content,
        html: this.html,
        tags: this.tags.split(',')
      })
      this.$message.success('提交成功!')
      // let url = `/topics/${topic._id}`
      // this.$router.push(url)
    },
  }
}
</script>

<style lang="less" scoped>
@import '../style/mixin';

.editor {
  padding: 40px;
  margin-top: 80px;
}

.submit {
  text-align: center;
}
</style>
