<template>
  <div>
    <h1>Keywords & Ratios</h1>
    <section>
      <MeasuringKeyword
        v-for="keyword in keywords"
        :key=keyword.keyword
        :keyword=keyword.keyword
        :ratio=keyword.ratio
        @removeKeyword="removeKeyword"
      />
    </section>
    <KeywordsAdd @addKeywords="addKeywords" />
  </div>
</template>

<script>
import MeasuringKeyword from './MeasuringKeyword.vue'
import KeywordsAdd from './KeywordsAdd.vue'

export default {
  components: {
    MeasuringKeyword,
    KeywordsAdd
  },
  data () {
    return {
      keywords: []
    }
  },
  created () {
    this.$emit('keywordsChanged', this.keywords)
  },
  methods: {
    addKeywords (keywords) {
      keywords
        .split(/[\s　]/).filter((s) => s.length > 0) // eslint-disable-line
        .forEach((k) => {
          this.keywords = this.keywords.concat({ keyword: k, ratio: undefined })
        })

      this.$emit('keywordsChanged', this.keywords)
    },
    removeKeyword (keyword) {
      this.keywords = this.keywords.filter((k) => {
        return k.keyword !== keyword
      })
      this.$emit('keywordsChanged', this.keywords)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
div {
  width: 30vw;

  h1 {
    font-size: 70%;
  }

  section {
    display: table;
  }
}
</style>
