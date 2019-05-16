import React from 'react'
import ReactDOM from 'react-dom'
import { Alert } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => <Alert>Hello React!</Alert>

ReactDOM.render(<App />, document.getElementById('app'))
