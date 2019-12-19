export default {
    state:{
        category:''
    },
    getters:{
        getcatgetters(state){
            return state.category
        }
    },
    actions:{
        getAllCat(context){
            axios.get('/listCat')
                .then((response)=>{
                    //
                    console.log(response)
                })
        }
    },
    mutations:{
        catCommit(state,data){
            return state.category=data
        }
    }
}
