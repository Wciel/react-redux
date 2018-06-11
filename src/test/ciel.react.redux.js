import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from './ciel-redux';

//第一个参数告诉connet需要state里的什么属性
// export function connect(mapStateToProps,mapDispatchToProps){
//   return function(wrapComponent){
//     return class ConnectComponent extends React.Component{

//     }
//   }
// }
//这个写法和下面的写法是一样的
//这个是高阶组建的写法，传进去一个commpoent，再返回另一个commpoent
export const connect = (mapStateToProps=state=>state,mapDispatchToProps={})=>(WrapComponent)=>{

  return class ConnectComponent extends React.Component{
    static contextTypes = {
      store:PropTypes.object
    }
    constructor(props,context){
      super(props,context)
      this.state = {
        props:{}
      }
    }
    componentDidMount(){
      // const {store} = this.store
      const {store} = this.context
      store.subscribe(()=>this.update())//监听操作变化
      this.update() //把值放到组件里面的方法
    }
    update(){
      //获取mapStateToProps和mapDispatchToProps
       const {store} = this.context
       const stateProps = mapStateToProps(store.getState()) //获取到我们redux里面的state值
  　　 //方法不能直接给，因为需要dispatch
      //直接执行　addGun()毫无意义，要执行store.dispatch(addGun)才有意义
      //const addGun＝()=>{store.dispatch(addGun)} 其实就是用dispatch把actionCreactors包了一层
      const dispatchProps = bindActionCreators(mapDispatchToProps,store.dispatch) 
      this.setState({
         props:{
          ...this.state.props,
          ...stateProps,
          ...dispatchProps,
         }
       })　//将redux里面的状态和组件本身的状态合并了
    }

    render(){
      return <WrapComponent {...this.state.props}></WrapComponent>;　//注意啊，传进来的组件参数开头也要是大写的
    }
  }
}

export class Provider extends React.Component {
  static childContextTypes = {
        store :PropTypes.object
      }
      constructor(props,context){
        super(props,context)
        this.store = props.store
      }
      getChildContext(){
        return {store:this.store}
      }
  render() {
    return this.props.children
  }
}