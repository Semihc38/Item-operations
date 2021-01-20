<template>
  <div class="container">
    
    <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
            <div class="card-body">
                <h3>Item Operation</h3>
                <hr>
                <div class="form-group">
                    <label>Item name</label>
                    <input v-model="product.title" type="text" class="form-control" placeholder="Item title..">
                </div>
                <div class="form-group">
                    <label>Quantity</label>
                    <input v-model="product.count" type="number" class="form-control" placeholder="Item quantity..">
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input v-model="product.price" type="number" class="form-control" placeholder="Item price..">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea v-model="product.description" cols="30" rows="5" placeholder="Item description..."
                              class="form-control"></textarea>
                </div>
                <hr>
                <button class="btn btn-primary" :disabled="saveEnable" @click="saveProduct">Save</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
data(){
    return{
        product:{
            title:'',
            count:null,
            price:null,
            description:'',
            

        },
        saveButtonClicked:false
    }
},
methods:{
    saveProduct(){
        this.saveButtonClicked=true;
        this.$store.dispatch("saveProduct",this.product)
    }
},
computed:{
    saveEnable(){
        if(this.product.title.length>0 && this.product.count >0 && this.product.price>0 && this.product.description.length>0){
            return false;
        }else{
            return true;
        }
    },
    
},
beforeRouteLeave:function(to,from,next){
   if((this.product.title.length>0 || this.product.count >0 || this.product.price>0 || this.product.description.length>0)&& !this.saveButtonClicked){
       if(confirm("Are you sure you want to leave, you will lose your data if you continue")){
           next();
       }else{
           next(false);
       }
   }else{
    next();
   }
           
 

}
}
</script>

<style>

</style>