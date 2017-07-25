<template>
  <div>
    <nav-menu></nav-menu>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">2222</div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">11111</div>
      </el-col>
    </el-row>
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
	@import '../style/mixin';
	.data_section{
		padding: 20px;
		margin-bottom: 40px;
		.section_title{
			text-align: center;
			font-size: 30px;
			margin-bottom: 10px;
		}
		.data_list{
			text-align: center;
			font-size: 14px;
			color: #666;
            border-radius: 6px;
            background: #E5E9F2;
            .data_num{
                color: #333;
                font-size: 26px;

            }
            .head{
                border-radius: 6px;
                font-size: 24px;
                padding: 0 10px;
                color: #fff;
            }
        }
        .today_head{
            background: #FF9800;
        }
        .all_head{
            background: #20A0FF;
        }
	}
    .wan{
        .sc(16px, #333)
    }
</style>
