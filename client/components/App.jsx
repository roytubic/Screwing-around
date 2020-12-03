import React from 'react'

import Whales from './Whales'

export class App extends React.Component {

  render () {
    return (
      <div className='app'>
        <h1>Swim with Whales!</h1>
        <Whales />
      </div>
    )
  }
}

