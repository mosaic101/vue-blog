<template>
  <div class="message">
    <nav-menu activeIndex="messages"></nav-menu>

    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
import navMenu from '../components/navMenu'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'message page'
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
