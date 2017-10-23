<template>
  <div class="nav">
    <ul class="nav-collapse">
      <li class="logo">
        <img src="favicon.ico" alt="logo">
      </li>
      <li class="active">
          <a href="/topic"><i class="glyphicon glyphicon-home"></i>&nbsp;首页</a>
      </li>
      <li>
          <a href="/about"><i class="glyphicon glyphicon-user"></i>&nbsp;关于</a>
      </li>
    </ul>
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

.nav {
  position: fixed;
  top: 0;
  width: 100%;
  // background-color:#f8f8f8;
 background-color:#324157;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  z-index: 1;
}

.nav ul {
  width: 1200px;
  margin: 0 auto;
  list-style: none;
}

.nav ul li {
  float: left;
  width: 10%;
  height: 58px;
  border-left: 1px solid #252947;
}

.nav ul li.last {
  border-right: 1px solid #252947;
}

.nav ul li a {
  display: block;
  text-align: center;
  line-height: 58px;
  color: #bfcbd9;
  text-decoration: none;
  font-size: 16px;
}


// .nav ul li a:hover {
// background-color: #252947;
// color: #E2E4ED;
// }

// .nav ul li.current a {
// background-color: #252947;
// color: #E2E4ED;
// }


// .nav {
//   height: 70px;
//   width: 100%;
//   ul {
//     list-style: none;
//     li {
//       float: left;
//     }
//   }
// }

// .nav {
//   position: fixed;
//   top: 0;
//   width: 100%;
//   // min-width: 320px;
//   height: 70px;
//   background-color:#324157; // #101010;
//   z-index: 1;
//   .nav-menu {
//     width: 1200px;
//     margin: 0 auto;
//   }
// }

// .nav-collapse {
//   border-radius: 2px;
//   list-style: none;
//   position: relative;
//   margin: 0;
//   padding-left: 0;
// }

// .el-dropdown {
//   display:none;
// }

// @media screen and (max-width:768px) {
// .el-dropdown {display:block;}
// .el-menu {display:none;}
// }

// .nav-collapse {
//   display:none;
// }
</style>
