<template>
  <div id="app" class="container">
    <AppHeader></AppHeader>
    <AppProgress :quotesCount="quotesCount()"></AppProgress>
    <AppQuoteForm :quotesCount="quotesCount()"></AppQuoteForm>
    <AppQuotes :quotes="quotes"></AppQuotes>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppProgress from './components/AppProgress.vue';
import AppQuoteForm from './components/AppQuoteForm.vue';
import AppQuotes from './components/AppQuotes.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  name: 'app',
  data: () => {
    return {
      quotes: ['Hello', 'World', 'Lol']
    }
  },
  methods: {
    quotesCount() {
      return this.quotes.length;
    }
  },
  components: {
    AppHeader,
    AppProgress,
    AppQuoteForm,
    AppQuotes,
    AppFooter
  }
}
</script>

<style>
</style>
