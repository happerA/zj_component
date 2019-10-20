import React from 'react'
import {render} from 'react-dom'

import ReactDemo from '../../src'

const App = () => <div style={{height: '1000px'}}><ReactDemo/></div>
render(<App/>, document.getElementById('root'))