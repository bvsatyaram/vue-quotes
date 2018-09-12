<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Quotes Added</h5>
      <div class="progress">
        <div class="progress-bar" role="progressbar" :style="widthStyle()" :aria-valuenow="quotesCount" aria-valuemin="0" aria-valuemax="10">
          {{quotesCount}} / 10
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quotesCount: {
      type: Number,
      default: 0
    }
  },
  methods: {
    widthStyle() {
      return {
        width: `${this.quotesCount * 10}%`
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
