import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactCard from './containers/contact-card'
import EditContactCard from './containers/edit-contact-card'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ContactCard} />
      <Route path="/edit/:id" component={EditContactCard} />
    </Switch>
  </Router>
)

ReactDOM.render(<AppRouter />, document.getElementById('app'))
