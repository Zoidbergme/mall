// export const clickAFn = (state,name) =>{
    // state.resturantName = name
// }
export const clickAFn = (state,obj) =>{
    state.resturantName = obj.str
    state = {...state,aaa:'aaa'}
    // Vue.set(state,"baz",'21534541431')
    // state = {...state,aaaa:'wdjwhdjhajklkdjla'}
}
export const clickBFn = (state,name) =>{
    state.resturantName = name
}