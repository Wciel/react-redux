import React, { Component } from 'react';
// import {connect} from 'react-redux'
import {connect} from './ciel.react.redux'
import {removeGUN,addGUN} from './app.redux'

@connect(
  state => ({num:state}),
  {removeGUN,addGUN}
)
class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props.num)
    return (
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={this.props.addGUN}>增加武器</button>
        <button onClick={ this.props.removeGUN}>减少武器</button>
        {/* <button onClick={this.props.addGunAsync}>过两天再增加</button> */}
      </div>
    );
  }
}
// App = connect(
//   state => ({num:state})
// )(App) 

export default App;
