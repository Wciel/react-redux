import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './test/app'
import {createStore} from './test/ciel-redux'
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
import {Provider} from './test/ciel.react.redux'
import {counter,removeGUN,addGUN} from './test/app.redux'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(counter) //将reducer放到store中
ReactDOM.render(
  <Provider store = {store}>
     <App />
  </Provider>,
  document.getElementById('root'));

//双层return
// function add(x){
//   return function(y) {
//     return x+y+3
//   }
// }
// const  add = x=>y=>x+y+3 ／／上面两种写法相同
// const sum = add(2)(3)
// console.log(sum)

//es6Ｏbject
// const obj = {name:'ciel', 'age':'19', 'sex':'girl'}
// console.log(Object.keys(obj)) //获取对象的key
// console.log(Object.values(obj)) //获取值

//透传
// function sayHello(...args){
//   console.log(args)
// }
// sayHello('hello','xiaofang','mimi')