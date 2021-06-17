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
import { KeywordsChangedUsecase } from './lib/keywords_changed_usecase'
import { UpdateDocumentUsecase } from './lib/update_document_usecase'

export default {
  name: 'app',
  created () {
    const docCalculator = new DocCalculator()
    this.keywordsChangedUsecase = new KeywordsChangedUsecase(docCalculator)
    this.updateDocumentUsecase = new UpdateDocumentUsecase(docCalculator)
  },
  components: {
    WritingArea,
    MeasuringKeywords
  },
  methods: {
    docChanged (content, count) {
      this.updateDocumentUsecase.exec(content, count)
    },
    keywordsChanged (keywords) {
      this.keywordsChangedUsecase.exec(keywords)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
div {
  float: left;
}
</style>
