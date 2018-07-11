import React from 'react'
import ReactDom from 'react-dom'
import AppRouter from './routers/AppRouter'
import './styles/styles.scss'

ReactDom.render(<AppRouter />, document.getElementById('app'))