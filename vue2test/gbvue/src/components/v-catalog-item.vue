<template>
  <div class="v-catalog-item">
      <img class="catalog_img" :src=" require('../assets/images/' + product_data.image) " alt="img">
      <p class="item_name">{{product_data.name}}</p>
      <p class="item_price">Price: {{product_data.price}} Р</p>
      <button 
      class="add_to_cart_button btn" 
      @click="addToCart">add to cart</button>
  </div>
</template>

<script>
export default {
    name: "v-catalog-item",
    props: {
        product_data: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        addToCart(){
            this.$emit('addToCart', this.product_data)
        }
    },
    mounted() {
        this.product_data['quantity'] = 1
    }
}
</script>

<style>
    .v-catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 16px;
        margin-bottom: 16px;
        background-color: rgb(255, 255, 255);
        opacity: 0.9;
    }
    .catalog_img {
        width: 100px;
    }
    

</style>