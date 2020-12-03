import React from 'react'
import { connect } from 'react-redux'
import Whale from './Whale'
import { fetchWhales } from '../apis/whales'

class Whales extends React.Component {
  componentDidMount () {
    fetchWhales(this.props.dispatch)
  }

  render () {
    return (
      <ul>
        {this.props.whales.map((whale) => {
          return <Whale key={whale.id} whale={whale} />
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    whales: state.whales
  }
}

export default connect(mapStateToProps)(Whales)