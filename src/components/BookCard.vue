<template>
  <router-link class="book-link" :to="{ name: 'show-book', params: { id: book.id } }">
    <div class="book-card">
      <img class="book-image" :src="book.image" :alt="book.title" />
      <h1>{{ book.title }}</h1>
      <h2>{{book.subtitle}}</h2>
      <p>Author: {{book.author}}</p>
      
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    book: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(163, 150, 150, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.book-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.book-image {
  height: 300px;
}

.book-link {
  color: black;
  text-decoration: none;
}
</style>
