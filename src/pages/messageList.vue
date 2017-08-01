<template>
  <div>
    <container>
      <div slot="right">
      <h1>{{ msg }}</h1>
      </div>
    </container>
  </div>
</template>

<script>
import container from '../components/container'

export default {
  data() {
    return {
      msg: 'this is a message board'
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


</style>
