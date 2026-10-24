import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const BookContext = createContext()

export function BookProvider({ children }) {
  const [books, setBooks] = useLocalStorage('buku-kecil-data', [])
  const addBook = book => setBooks(oldBooks => [...oldBooks, { ...book, id: Date.now() }])
  const updateBook = updated => setBooks(oldBooks => oldBooks.map(book => book.id === updated.id ? updated : book))
  const deleteBook = id => setBooks(oldBooks => oldBooks.filter(book => book.id !== id))

  return <BookContext.Provider value={{ books, addBook, updateBook, deleteBook }}>{children}</BookContext.Provider>
}

export function useBooks() {
  return useContext(BookContext)
}
