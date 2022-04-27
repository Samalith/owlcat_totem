<template>
  <div class="order-place">
    <div class="order-place__container">
      <div class="order-place__title">
        <h1>Place Order</h1>
      </div>
      <div class="order-place__inner" @click="openOrder">
        <slot name="forSale" /> <!-- from Catalogue -->
      </div>
      <div class="sell-button">
        <button @click="placeOrder">Sell me</button>
      </div>
      <div class="input-group">
        <input type="number" step="any" class="form-control" v-model="etherPrice">
        <div class="input-group-append">
          <span class="input-group-text">ETH</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order',
  props: ['openOrder', 'tokenId'],
  data(){
    return{
     
    }
  },
  methods:{
    placeOrder(){
      let price = this.$store.getters['bcComm/getItemPriceStr'];

      this.$store.dispatch('bcComm/setOffer', { price: price, tokenId: this.tokenId })
      .then(() => {
        console.log('Set offer', this.$store.getters['bcComm/getItemPriceStr']);
        console.log('Set offer', typeof(this.$store.getters['bcComm/getItemPriceStr']));
        console.log('tokenId item order: ', this.tokenId);
      })
      .catch((err) => {
        console.log('Order page error: ', err);
      }); // payload
    }
  },
  computed: {
    etherPrice: {
      get(){
        return this.$store.getters['bcComm/getItemPrice']; // Number
      },
      set(newPrice){
        this.$store.dispatch('bcComm/setNewPrice', newPrice); // String
      }
    }
  }
}
</script>

<style lang="scss">
  .order-place{
    position: absolute;
    top: 185px;
    left: 88px;
    /* right: 474px; */
    bottom: 89px;
    z-index: 99;
    background-color: #5957bb;
    border: 1px solid #DFE3E3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .order-place__container{
    padding: 11px;

    .order-place__title {
      color: white;
      margin-left: 11%;
      margin-bottom: 12%;
    }
    .order-place__inner{
      display: flex;
      flex-wrap: wrap;
      position: relative;  
      margin-top: -25%;
      margin-left: -6%;
    }
    .input-group{
      display: flex;
      flex-wrap: wrap;
      position: relative;
      margin-top: -12%;
      margin-left: 41%;
      margin-right: 3%;
      width: auto;
    }
    .sell-button{
      display: flex;
      flex-wrap: wrap;
      position: relative;
      margin-top: 38%;
      margin-left: 0%;
    }
  }
</style>