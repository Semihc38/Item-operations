<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Item Exit</h3>
          <hr />
          <div class="form-group">
            <label>Item name</label>
            <select
              class="form-control"
              v-model="selectedProduct"
              @change="productSelected"
            >
              <option disabled>Please select an item!</option>
              <option
                :disabled="product.count == 0"
                :value="product.id"
                v-for="(product, index) in getProducts"
                :key="index"
              >
                {{ product.title }}
              </option>
            </select>
          </div>
          <transition name="fade" mode="out-in">
            <div class="card mb-2 border border-danger" v-if="product !== null">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge badge-info"
                        >Stock : {{ product.count }}</span
                      >
                      <span class="badge badge-primary"
                        >Price : {{ product.price }}</span
                      >
                    </div>
                    <p class="border border-warning p-2 text-secondary">
                      {{ product.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <div class="form-group">
            <label>Quantity</label>
            <input
              v-model="productCount"
              type="text"
              class="form-control"
              placeholder="Enter Item Quantity.."
            />
          </div>
          <hr />
          <button @click="save" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedProduct: null,
      product: null,
      productCount: null,
      saveButtonClicked:false
    };
  },
  computed: {
    ...mapGetters(["getProducts"]),
  },
  methods: {
    productSelected() {
      console.log(this.selectedProduct);
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
    },
    save() {
      let product = {
        id: this.selectedProduct,
        count: this.productCount,
      };
      this.$store.dispatch("sellProduct", product);
    },
  },
  beforeRouteLeave(to, from, next) {
    if (
      (this.selectedProduct !== null || this.productCount > 0) &&
      this.saveButtonClicked
    ) {
      if (
        confirm(
          "Are you sure you want to leave, you will lose your data if you continue"
        )
      ) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
};
</script>

<style scoped>
.border-danger {
  border-style: dashed !important;
}
</style>