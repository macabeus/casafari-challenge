import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactList from './components/contact-list'

const App = () => <ContactList />

ReactDOM.render(<App />, document.getElementById('app'))
