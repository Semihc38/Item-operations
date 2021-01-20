import Vue from "vue"
import { router } from "../../router"

const state = {
    products: [

    ]
}
const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {
        return id => state.products.filter(element => {
            return element.id == id;
        })

    }
}
const mutations = {
    updateProductList(state, product) {
        state.products.push(product);

    }

}
const actions = {
    initApp({ commit }) {
        Vue.http.get("https://urun-islemleri-b7cc9-default-rtdb.firebaseio.com/products.json")
            .then((response) => {
                let data = response.body;
                for (let id in data) {
                    data[id].id = id;
                    commit("updateProductList", data[id])
                }

            })

    },
    saveProduct({ dispatch, commit, state }, product) {
        Vue.http.post("https://urun-islemleri-b7cc9-default-rtdb.firebaseio.com/products.json", product)
            .then((response) => {
                product.id = response.body.name
                commit("updateProductList", product)
                console.log(state.products);
                let tradeResult = {
                    purchase: product.price,
                    sale: 0,
                    count: product.count,

                }
                dispatch("setTradeResult", tradeResult)
                router.replace("/")

            })
    },
    sellProduct({state, commit,dispatch }, payload) {
        let product = state.products.filter(element=>{
            return element.id==payload.id;
        })
       
   if(product){
       let totalCount =product[0].count-payload.count;
       Vue.http.patch("https://urun-islemleri-b7cc9-default-rtdb.firebaseio.com/products/" +payload.id +".json",{count:totalCount})
       .then((response)=>{
           product[0].count=totalCount;
           let tradeResult={
               purchase:0,
               sale:product[0].price,
               count:payload.count
           }
           dispatch("setTradeResult", tradeResult)
           router.replace("/")

       })
   }
    }

}
export default {
    state,
    getters,
    mutations,
    actions
}