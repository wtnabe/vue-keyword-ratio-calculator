export default class {
  constructor () {
    this.doc = undefined
    this.count = 0
    this.keywords = undefined
  }

  /**
   * @param {Array} keywords
   */
  updateKeywords (keywords) {
    this.keywords = keywords
  }

  /**
   * @param {string} doc
   * @param {number} count
   */
  updateDoc (doc, count) {
    this.doc = doc
    this.count = count
  }

  calculate () {
    if (this.keywords && this.keywords.length > 0 && this.count > 0) {
      this.keywords.forEach((k) => {
        const parts = this.doc.split(k.keyword)
        const count = k.keyword.length * ((parts.length > 1) ? parts.length - 1 : 0)
        k.ratio = count / this.count

        this.keywords[k] = k
      })
    }
  }
}
