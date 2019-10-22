import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Conent-Type': 'application/json'
  }
})

export default {
  getBooks() {
    return apiClient.get('/books')
  },
  getBook(id) {
    return apiClient.get('/books/' + id)
  },
  getBook(price) {
    return apiClient.get('/books/' + price)
  }
}
