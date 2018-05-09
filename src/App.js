import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
// import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks.js'
import ListBooks from './ListBooks.js'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearch: false
  }

  toggleDiv = () => {
    this.setState((state) => (
      state.showSearch = !state.showSearch
    ));
    console.log()
  }

  render() {
    return (
      <div className="app">
          <Route
             path="/search"
             component={SearchBooks}
          />
          <Route exact
            path="/"
            component={ListBooks}
          />
      </div>
    )
  }
}

export default BooksApp
