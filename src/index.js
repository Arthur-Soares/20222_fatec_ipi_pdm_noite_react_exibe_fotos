import React from 'react' //imr
import ReactDOM from 'react-dom'  //imrd
import App from './components/App'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/md-dark-indigo/theme.css'

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)