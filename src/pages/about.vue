<template>
  <div>
    <container>
      <div slot="right">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
          <!-- <li><a href="#/nav">nav</a></li> -->
          <router-link to="/">content</router-link>
          <router-link to="/login">login</router-link>
          <router-link to="/nav">nav</router-link>
        </ul>
      </div>
    </container>
  </div>
</template>

<script>
import container from '../components/container'

export default {
  data() {
    return {
      msg: 'this is a introducation page about me'
    }
  },
  components: {
    container
  },
  methods: {
    openDetail(id) {
      this.$router.push('topics/' + id)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.topic {
  background: #ffffff;
  margin-bottom: 20px;
  padding: 15px;
}

.page {
  margin-bottom: 20px;
}
</style>
