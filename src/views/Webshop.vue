<template>
  <div>
    <h1>Webshop</h1>
    <h3>Buy books for your next semester</h3>

    <BookCard v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script>
import BookCard from '@/components/BookCard.vue'
import BookService from '@/services/BookService.js'

export default {
  components: {
    BookCard
  },
  data() {
    return {
      books: []
    }
  },
  created() {
    BookService.getBooks()
      .then(response => {
        this.books = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>

