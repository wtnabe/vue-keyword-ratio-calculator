<template>
  <div id="app">
    <WritingArea @docChanged="docChanged" />
    <MeasuringKeywords @keywordsChanged="keywordsChanged" />
  </div>
</template>

<script>
import WritingArea from './components/WritingArea.vue'
import MeasuringKeywords from './components/MeasuringKeywords.vue'
import DocCalculator from './lib/doc_calculator.js'

export default {
  name: 'app',
  created() {
    this.docCalculator = new DocCalculator(this)
  },
  components: {
    WritingArea,
    MeasuringKeywords
  },
  methods: {
    docChanged(content, count) {
      this.$emit('docChanged', content, count)
    },
    keywordsChanged(keywords) {
      this.$emit('keywordsChanged', keywords)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
div {
  float: left;
}
</style>
