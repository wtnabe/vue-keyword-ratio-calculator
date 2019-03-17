export default class {
  constructor(vue) {
    this.vm       = vue
    this.doc      = undefined
    this.count    = 0
    this.keywords = undefined

    this.initListeners()
  }

  initListeners() {
    this.vm.$on('keywordsChanged', (keywords) => {
      this.updateKeywords(keywords)
      this.calculate()
    })
    this.vm.$on('docChanged', (doc, count) => {
      this.updateDoc(doc, count)
      this.calculate()
    })
  }

  updateKeywords(keywords) {
    this.keywords = keywords
  }

  updateDoc(doc, count) {
    this.doc   = doc
    this.count = count
  }

  calculate() {
    if ( this.keywords && this.keywords.length > 0 && this.count > 0 ) {
      this.keywords.forEach((k) => {
        const parts = this.doc.split(k.keyword)
        const count = k.keyword.length * ((parts.length > 1) ? parts.length - 1 : 0)
        k.ratio = count / this.count

        this.keywords[k] = k
      })
    }
  }
}
