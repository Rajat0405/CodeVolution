
const redux = require('redux');


const createStore = redux.createStore

const bindActionCreators = redux.bindActionCreators

const combineReducers = redux.combineReducers

const applyMiddleWare = redux.applyMiddleware

const createLogger = require('redux-logger')
const Logger = createLogger.createLogger()



const CAKE_ORDERED = 'Cake_ORDERED'
const CAKE_RESTORED = 'CAKE_RESTORED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const iCECREAM_RESTORED = 'ICECREAM_RESTORED'

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1

    }
}

function restoreCake(qty = 1) {
    return {
        type: CAKE_RESTORED,
        payload: qty

}

    }

  function orderIcream(qty = 1) {

    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }

  }

  function restoreIcream(qty =1) {
    return {
        type: iCECREAM_RESTORED,
        payload: qty
    }
  }

    
// (prevState, action) => newState

// const initialState = {
//     numberOfCakes: 10,
//     numberOficecream : 10,
   
// }

const initialCakeState = {
    numberOfCakes: 10,

}

const initialIcereamState = {
    numberOficecream : 20,

}

 const IcecreamReducer= (state = initialIcereamState, action) => {
    switch(action.type) {
        
            case ICECREAM_ORDERED:
                return {
                   ...state,
                    numberOficecream : state.numberOficecream  -1
                }
            case iCECREAM_RESTORED:
                return { 
                    ...state,
                    numberOficecream : state.numberOficecream + action.payload
                }       
            default : 
            return state
    }
 }



 const CakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
               ...state,
                numberOfCakes : state.numberOfCakes  -1
            }
        case CAKE_RESTORED:
            return { 
                ...state,
                numberOfCakes : state.numberOfCakes + action.payload
            }   
            
            default : 
            return state
    }
 }

 const rootReducer = combineReducers({
    cake: CakeReducer,
    icecream: IcecreamReducer,
 })

 const Store = createStore(rootReducer,applyMiddleWare(Logger))

 console.log('initial state', Store.getState())


 const unsuscribe  = Store.subscribe(()=> {
    
 })

//  Store.dispatch(orderCake())
//  Store.dispatch(orderCake())
//  Store.dispatch(orderCake())
//  Store.dispatch(restoreCake(3))
//  Store.dispatch(orderCake())

const actions = bindActionCreators( { orderCake, restoreCake, orderIcream, restoreIcream}, Store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restoreCake(3)
actions.orderIcream()
actions.orderIcream()
actions.orderIcream()
actions.restoreIcream(3)


 
unsuscribe()




 



