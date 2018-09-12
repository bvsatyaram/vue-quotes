<template>
  <div class="card my-4">
    <div class="card-body">
      <h5 class="card-title">Add a Quote</h5>
      <form @submit="handleSumbit($event)">
        <div class="form-row">
          <div class="col-9">
            <input type="text" v-model="quoteText" class="form-control" placeholder="Enter a Quote">
          </div>
          <div class="col-3">
            <button type="submit" class="btn btn-dark btn-block">Add Quote</button>
          </div>
        </div>
      </form>
      <small class="form-text text-muted">You can add upto a maximum of 10 quotes.</small>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      quoteText: ""
    }
  },
  props: {
    addQuote: Function
  },
  methods: {
    handleSumbit(ev) {
      ev.preventDefault();

      if (this.quoteText && this.addQuote(this.quoteText)) {
        this.quoteText = '';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
