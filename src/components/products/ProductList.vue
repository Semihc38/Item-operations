<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mb-5 card mt-5 shadow">
                <div class="card-body">
                    <h3>Item List</h3>
                    <hr>
                    <table class="table table-hover table-striped table-bordered">
                        <thead>
                        <th>Id</th>
                        <th>Item name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Description</th>
                        </thead>
                        <tbody>
                        <tr v-for="(product,index) in getProducts" :key="index">
                            <td class="align-middle text-center"><span class="badge badge-info"> {{product.id}} </span></td>
                            <td class="align-middle text-center"> {{product.title}} </td>
                            <td class="align-middle text-center " :class="getCountClass(product.count)" >{{product.count}} </td>
                            <td style="width: 120px;">{{product.price | currency}} </td>
                            <td class="align-middle"> {{product.description}}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="alert alert-warning" >
                        <strong>There is no saving item yet!</strong>
                        <br>
                        <small>To add a new item, you can use Item Operation
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    computed:{
    ...mapGetters([
        "getProducts"
    ])
    },
    methods:{
         getCountClass(count){
        return{
            'btn-danger text-white': count==0 || count==null,
            'btn-success text-white':count>0,
        }
    }
    }
   
}
</script>

<style>

</style>