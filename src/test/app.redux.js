const ADD_GUN = 'ADD_GUN'
const REMOVE_GUN = 'REMOVE_GUN'
// const addGunAsync = 'addGunAsync'

//关于gun
export function counter(state=0,action){
  switch(action.type){
      case ADD_GUN:
          return state+1;
      case REMOVE_GUN:
          return state-1;
      default:
          return 10;
  }
}
//加枪还是减枪action
export function addGUN(){
  return {type:ADD_GUN}
}
export function removeGUN(){
  return {type:REMOVE_GUN}
}
//添加了thunk之后，之前只能return 一个对象，现在可以return 一个函数了
// export function addGunAsync(){
//   return dispatch=>{
//       setTimeout(() => {
//           dispatch(addGUN())
//       }, 2000);
//   }
// }