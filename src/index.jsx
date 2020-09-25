import React from 'react'
import ReactDOM from 'react-dom'

import '@/styles/style.scss'

const App = () => {
    return (
        <h1>Webpack And React!!!</h1>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

console.log('hi')
