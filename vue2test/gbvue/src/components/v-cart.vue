<template>
  <div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog-cart-link">Back to Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">Cart is empty!</p>
    <VCartItem
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data ="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="v-cart_total">
      <p class="total_name">Total:</p>
      <p>{{cartTotalCost}} P.</p>
    </div>
  </div>
</template>

<script>
import VCartItem from './v-cart-item'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
export default {
  components: { VCartItem },
    name: "v-cart",
    props: {
      cart_data: {
        type: Array, 
        default() {
          return []
        }
      }
    },
    data(){
        return {

        }
    },
    computed: {
      cartTotalCost(){
        let result = []

        if (this.CART.length){
          for (let item of this.CART){
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function(sum, el){
          return sum + el;
        })
        return result;
        }else{
          return 0
        }
      }
        ,
      ...mapGetters([
        'CART'
      ])
        
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
      ]),
      increment(index){
        this.INCREMENT_CART_ITEM(index)
      },
      decrement(index){
        this.DECREMENT_CART_ITEM(index)
      },
      deleteFromCart(index){
        this.DELETE_FROM_CART(index)
      }
    }
}
</script>

<style>
  .v-cart{
    margin-bottom: 100px;
  }
  .v-cart_total{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 16px;
    display:flex;
    justify-content: center;
    background:rgb(184, 228, 184);
    color:#ffff;
    font-size:20px;
  }
  .total_name{
    margin-right: 16;
  }
</style>