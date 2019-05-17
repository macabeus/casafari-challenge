import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactCard from './containers/contact-card'

const App = () => <ContactCard />

ReactDOM.render(<App />, document.getElementById('app'))
