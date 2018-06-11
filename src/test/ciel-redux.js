
//迷你redux
import React from 'react'

export function createStore(reducer){
  let currentState = {}//当前状态　react状态树
  let currentListeners = [] //好几个监听器　//状态变化的时候要调用什么函数
  function getState(){
    return currentState
  }　//获取当前状态
  function subscribe(listener){
    currentListeners.push(listener)
  }
  //发起修改的一个方法
  function dispatch(action){
    currentState = reducer(currentState,action)
    currentListeners.forEach(v=>v())
    return action
  }
  dispatch({type:'@IMCIEL-REDUXTEXT'})//这个是redux初始化，所以的定义的特殊一些
  return {getState,subscribe,dispatch}
}

//creators操作函数，其实就是我们redux里面的 {removeGUN,addGUN} 
function bindActionCreator(creator,dispatch){
  return (...args) => dispatch(creator(...args)) //透传
}
export function bindActionCreators(creators,dispatch){
  // let bound = {}
  // Object.keys(creators).forEach(v=>{
  //   let creator = creators[v]
  //   bound[v] = bindActionCreator(creator,dispatch)
  // })
  // return bound
  return Object.keys(creators).reduce((ret,item)=>{
    ret[item] = bindActionCreator(creators[item],dispatch)
    return ret
  },{})
}