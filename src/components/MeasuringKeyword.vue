<template>
  <div>
    <span class="keyword">{{ keyword }}</span>
    <span class="ratio">{{ ratio | percent }}%</span>
    <span class="button"><button @click="$emit('removeKeyword', keyword)">x</button></span>
  </div>
</template>

<script>
import {sprintf} from 'sprintf-js'

export default {
  props: ['keyword', 'ratio'],
  filters: {
    percent(value) {
      return (value) ? sprintf('%02.2f', value * 100 ) : 0
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
