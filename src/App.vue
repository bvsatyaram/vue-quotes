<template>
  <div id="app" class="container">
    <AppHeader></AppHeader>
    <AppProgress :quotesCount="quotesCount()"></AppProgress>
    <AppQuoteForm :addQuote="addQuote"></AppQuoteForm>
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
      quotes: []
    };
  },
  methods: {
    quotesCount() {
      return this.quotes.length;
    },
    addQuote(quote) {
      if (this.quotes.length < 10) {
        this.quotes.push(quote);
        return true;
      } else {
        alert('You have 10 quotes already. Please delete a quote to add another.');
        return false;
      }
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
