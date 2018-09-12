<template>
  <section class="row">
    <AppQuote v-for="(quote, index) in quotes" :key="index" @click.native="removeQuote(index)">
      {{quote}}
    </AppQuote>
  </section>
</template>

<script>
import AppQuote from './AppQuote.vue';

export default {
  props: ['quotes', 'removeQuote'],
  components: {
    AppQuote
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
