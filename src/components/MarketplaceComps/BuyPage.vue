<template>
  <div class="buy-place">
    <div class="buy-place__container">
      <div class="buy-place__title">
        <h1>Purchase Totem</h1>
      </div>
      <div class="buy-place__inner" @click="openPurchase">
        <slot name="forBuying" /> <!-- from Marketplace -->
      </div>
      <div class="ether-price">
        <label class="label-price"><strong>{{ totemPrice }} ETH</strong></label>
      </div>
      <div class="control-group">
        <div class="buy-button">
          <button @click="placePurchase">Buy me</button>
        </div>
        <div class="cancel-button">
          <button @click="cancelPurchase">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buy-page',
  props: ['openPurchase','totemPrice', 'tokenId'],
  methods: {
    placePurchase(){
      this.$store.dispatch('bcComm/buyOwlCat', this.tokenId);
    },
    cancelPurchase(){
      this.$store.dispatch('bcComm/removeOffer', this.tokenId);
    }
  }
}
</script>

<style lang="scss">
  .buy-place{
    position: absolute;
    top: 185px;
    left: 88px;
    /* right: 474px; */
    bottom: 89px;
    z-index: 99;
    background-color: #5957bb;
    /* opacity: 0.5; */
    border: 1px solid #DFE3E3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buy-place__container{
    padding: 11px;

    .buy-place__title {
      color: white;
      margin-left: 0%;
      margin-bottom: 148%;
    }
    .buy-place__inner{
      display: flex;
      flex-wrap: wrap;
      position: relative;  
      margin-top: -154%;
      margin-left: -6%;
    }
    .control-group {
      display: flex;
      flex-wrap: wrap;
      position: relative;

      .buy-button{        
        margin-top: 10%;
        margin-left: 5%;
        
      }
      .cancel-button{        
        margin-top: 10%;
        margin-left: 16%;
      }
    }
    .ether-price{       
      display: flex;
      flex-wrap: wrap;
      position: relative;
      margin-top: 35%;
      margin-left: -1%;
      color: white;
      background: #177c7c;
      justify-content: center;
      border: 11px solid #DFE3E3;

      .label-price{
        display: initial;
        margin-bottom: 0rem;
      }
    }
  }
</style>