import { createStore, combineReducers } from "redux"
import dessertlerReducer from "./dessertlerReducers"
import istiqReducer from "./istiqReducer"
import avadanliqlarReducer from "./avadanliqlarReducers"
import bucketReducer from "./bucketReducer"
import dataReducers from "./dataReducer"
import mehsullarReducer from "./mehsullarReducer"
import bloqReducer from "./bloqReducer"
import qelyanaltiReducer from "./qelyanaltiReducer"
import isticReducer from "./isticReducer"
import qarisiqReducer from "./qarisiqReducer"
import soyuqqReducer from "./soyuqqReducer"
import soyuqcReducer from "./soyuqcReducer"
import boxReducer from "./boxReducer"
import heartReducer from './heartReducer'


const reducers = combineReducers({
    heartReducer,
    istiqReducer,
    isticReducer,
    qarisiqReducer,
    soyuqqReducer,
    soyuqcReducer,
    boxReducer,
    dessertlerReducer,
    avadanliqlarReducer,
    bucketReducer,
    dataReducers,
    mehsullarReducer,
    bloqReducer,
    qelyanaltiReducer
})

export default function configureStore() {
    return createStore(reducers)
}
