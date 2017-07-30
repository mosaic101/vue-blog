<template>
  <div class="about">
    <nav-menu activeIndex="about"></nav-menu>

    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <!-- <li><a href="#/nav">nav</a></li> -->
      <router-link to="/">content</router-link>
      <router-link to="/login">login</router-link>
      <router-link to="/nav">nav</router-link>
    </ul>
  </div>
</template>

<script>
import navMenu from '../components/navMenu'

export default {
  name: 'hello',
  data () {
    return {
      msg: '很高兴认识你'
    }
  },
  components: {
    navMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
