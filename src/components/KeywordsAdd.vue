<template>
  <div>
    <input type="text" v-model="keywords">
    <button @click="addKeywords(keywords)">+</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keywords: undefined
    }
  },
  methods: {
    addKeywords (keywords) {
      this.$emit('addKeywords', keywords)
      this.keywords = undefined
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
div {
  margin-top: 1em;

  input {
   font-size: 101%;
   width:     70%;
  }
}
</style>
