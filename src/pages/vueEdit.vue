<template>
    <div>
        <nav-menu></nav-menu>
        <div class="edit-container">
        	<quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @ready="onEditorReady($event)">
  			</quill-editor>
        </div>
        <div class="submit_btn">
  			<el-button type="primary" @click="submit">提交</el-button>
        </div>
    </div>
</template>

<script>
    import navMenu from '../components/navMenu'
    import { quillEditor } from 'vue-quill-editor'

    export default {
        data(){
            return {
                content: '<h3>文本编辑</h3>',
			    editorOption: {

		        }
            }
        },
    	components: {
        quillEditor,
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
		    submit(){
                console.log(this.content);
                this.$message.success('提交成功！');
            }
        },
    }
</script>

<style lang="less" scoped>
	@import '../style/mixin';
	.edit-container{
		padding: 40px;
		margin-top: 80px;
	}
	.quill-editor{
		height: 350px;
	}
	.submit_btn{
		text-align: center;
	}
</style>
