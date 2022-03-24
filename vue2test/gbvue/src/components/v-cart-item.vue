<template>
  <div class="v-cart-item">
      <img class="v-cart-item__image" :src="require('../assets/images/' + cart_item_data.image) " alt="">
      <div class="v-cart-item__info">
          <p>{{cart_item_data.name}}</p>
          <p>{{cart_item_data.price}}</p>
          <p>{{cart_item_data.article}}</p>
      </div>
      <div class="v-cart-item__quantity">
          <p>Quantity</p>
          <span class="quantity_button" @click="decrementItem">
              -
          </span>
          {{this.cart_item_data.quantity}}
          <span class="quantity_button" @click="incrementItem">
              +
          </span>
          </div>
      <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "v-cart-item",
    props: {
        cart_item_data: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        
        deleteFromCart(){
            this.$emit('deleteFromCart')
        },
        ...mapGetters([
        'CART'
      ]),
        decrementItem(){
            this.$emit('decrement')
        },
        incrementItem(){
            this.$emit('increment')
        },
    },
    mounted() {
        this.CART['quantity'] = 1
    }
}
</script>

<style>
    .v-cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
    }

    .v-cart-item__image {
        max-width: 50%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 16px;
        margin-bottom: 16px;
        background-color: rgb(255, 255, 255);
    }

    .quantity_button {
        cursor: pointer;
        padding: 16px;
        background: rgb(103, 231, 225);
        color: white;
    }
</style>