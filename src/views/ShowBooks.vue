<template>
  <div>
    <h1>Title {{ book.title }}</h1>
     <h2>{{book.subtitle}}</h2>
    <p>Author: {{book.author}}</p>
    <img class="book-image" :src="book.image" :alt="book.title" />
    <p>{{book.description}}</p>
    <p>{{book.published}}</p>
    <p>${{book.price}}</p>

    <p>ISBN: {{book.isbn}}</p>
    <p>Pages: {{book.pages}}</p>
    <p>Published by: {{book.publisher}}</p>
    <button ><p>ADD TO CART</p></button>
  </div>
</template>

<script>
import BookService from '@/services/BookService.js'

export default {
  props: ['id'],
  data() {
    return {
      book: {}
    }
  },
  created() {
    BookService.getBook(this.id)
      .then(response => {
        this.book = response.data
        console.log(this.book)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>

<style scoped>
img {
  width: 300px; 
}
</style>