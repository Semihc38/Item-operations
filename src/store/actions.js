import Vue from "vue"


export const setTradeResult=({state,commit}, tradeResult)=>{
commit("updateTradeResult",tradeResult);
let result={
    purchase:state.purchase,
    sale:state.sale,
}
Vue.http.put("https://urun-islemleri-b7cc9-default-rtdb.firebaseio.com/trade-result.json",result)
    .then((response)=>{
      
    })
}
export const getTradeResult=({commit})=>{
    Vue.http.get("https://urun-islemleri-b7cc9-default-rtdb.firebaseio.com/trade-result.json")
    .then(response=>{
        console.log(response);
        commit("updateTradeResult",response.data)
    })

}