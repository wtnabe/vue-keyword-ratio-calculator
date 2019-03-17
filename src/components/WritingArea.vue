<template>
  <section>
    <h1>Writing Area</h1>
    <textarea v-model="doc" placeholder="Writing Area"></textarea>
    <div class="counter">{{count}} chars.</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      doc: undefined
    }
  },
  computed: {
    count() {
      return this.doc ? this.rmWhitespace(this.doc).length : 0
    }
  },
  watch: {
    doc(newValue) {
      this.$emit('docChanged', this.rmWhitespace(newValue), this.count)
    }
  },
  methods: {
    rmWhitespace(str) {
      return str.replace(/[\s　]/g, '') // eslint-disable-line
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
section {
  float:        left;
  width:        63vw;
  margin-right: 1em;

  h1 {
    line-height: 1;
    font-size:   110%;
    margin-top:  0;
  }

  textarea {
    width: 100%;
    height:       90vh;
    font-size:    101%;
  }
}
.counter {
  text-align: right;
  font-size:  70%;
}
</style>
