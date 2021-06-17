<template>
  <div>
    <span class="keyword">{{ keyword }}</span>
    <span class="ratio">{{ percent }}%</span>
    <span class="button"><button @click="$emit('removeKeyword', keyword)">x</button></span>
  </div>
</template>

<script>
import { sprintf } from 'sprintf-js'

export default {
  props: ['keyword', 'ratio'],
  computed: {
    percent () {
      return (this.ratio) ? sprintf('%02.2f', this.ratio * 100) : 0
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
div {
  display: table-row;

  span {
    display: table-cell;
  }
}
</style>
