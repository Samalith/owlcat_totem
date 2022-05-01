<template>
  <div class="marketplace-zone">
    <div class="marketplace-tittle">
      <h1>Marketplace</h1> 
    </div>
    <!-- *********** -->
    <div class="marketplace-items" >
      <div class="marketplace-items__image" v-if="showItem" >          
        <market-card
          v-for="totem in itemsMarkeplace"
          :key="totem.id"
          :totemComp="totem"
          @openPurchaseItem="openPurchase"
        />       
      </div>
      <!-- <div class="marketplace-items__inner" v-if="showItem">
        <div>
          {{ $store.getters['bcComm/getArrayOrders'] }} <br>
          {{ $store.getters['bcComm/getArrayItemsMarketplace'] }}
        </div>
      </div> -->
    </div>
    <buy-page
      v-if="trigger"
      :openPurchase="openPurchase"
      :totemPrice="totemPrice"
      :tokenId="tokenId"
    >
      <template v-slot:forBuying> <!-- to buy page -->
        <div class="item-bought">
          <owlcat-market
            v-for="itemBought in owlCatPurchase"
            :key="itemBought.id"
            :totemComp="itemBought"
          />
        </div>
      </template>
    </buy-page>    
  </div>
</template>

<script>
import marketCard from '@/components/MarketplaceComps/MarketCard.vue';
import owlcatMarket from '@/components/MarketplaceComps/OwlCatMarket.vue';
import buyPage from '@/components/MarketplaceComps/BuyPage.vue';

export default {
  name:'Marketplace',
  data(){
    return{
      showItem: false,
      trigger: false,
      marketplaceState: [], // Array tokens ID
      itemsMarkeplace: [], // Array OwlCats
      owlCatPurchase: [],
      totemPrice: '',
      tokenId: 0
    }
  },
  methods: {
    openPurchase(id){
      console.log('Purchase: ', id);
      if(typeof(id) === 'number'){
        this.purchaseItem(id);
        this.owlCatOffer();
      }
      if(this.trigger)
        this.owlCatPurchase = []; // to avoid polution
      return this.trigger = !this.trigger;
    },
    owlCatOffer(){
      this.tokenId = this.owlCatPurchase[0].itemsInfo.tokenId;
      console.log('getOffer tokenId :', this.tokenId);
      this.$store.dispatch('bcComm/totemOffer', this.tokenId)
      .then(() => {
        this.totemPrice = this.$store.getters['bcComm/getItemPriceEth'];
        console.log('getOffer totemPrice :', typeof(this.totemPrice));
        console.log('getOffer totemPrice :', this.totemPrice);
      })
      .catch((err) => {
        console.log('Get offer error: ', err);
      }); // arreglar el precio
      
    },
    familyMarketplace(){
      this.itemsMarkeplace = [];
      if(this.$store.getters['bcComm/getConnectionStatus']){
        this.$store.dispatch('bcComm/initMarketplace');
        if(this.$store.getters['bcComm/getIsOrdered']){ // Init Market ok
          this.marketplaceState = this.$store.getters['bcComm/getArrayOrders'];
          let _balance = this.marketplaceState.length;
          let _itemsFamily = this.$store.getters['bcComm/getArrayItemsMarketplace'].length; 
          console.log('Array Orders', _balance); // tokensId Number no volatil
          console.log('Array Items market', _itemsFamily); // volatil
          if(_balance == 0){
            alert('There is no orders. Wait or set an offer.');
            this.showItem = false;
          }
          else if(_balance > _itemsFamily){
            let i = 0;
            if(_itemsFamily !== 0)
              i = _itemsFamily;
            for(i; i < _balance; i++)
              this.$store.dispatch('bcComm/putOwlCatInMarketplace', this.marketplaceState[i])
              .then(() => {
                if(_balance === _itemsFamily)
                  this.updateMarketplace(this.$store.getters['bcComm/getArrayItemsMarketplace']);
              })
              .catch((err) => {
                console.log('Setting Array Items Marketplace error: ', err);
              });
          }
          else
            this.updateMarketplace(this.$store.getters['bcComm/getArrayItemsMarketplace']);
        }
      }
    },
    updateMarketplace(_arrayItemsMarket){
      this.itemsMarkeplace = [];
      if(this.$store.getters['bcComm/getConnectionStatus'])   
        var _itemsFamily = _arrayItemsMarket.length;
        for(let i = 0; i < _itemsFamily; i++){ 
          this.$store.dispatch('owlCatTotem/printOwlcat', _arrayItemsMarket[i]);  
          if(this.$store.getters['owlCatTotem/getTokenId'] != 0)          
            this.itemsMarkeplace.push({
              id: i,
              headColor: this.$store.getters['owlCatTotem/getHeadColor'],
              mouthColor: this.$store.getters['owlCatTotem/getMouthColor'],
              eyesColor: this.$store.getters['owlCatTotem/getEyesColor'],
              earsColor: this.$store.getters['owlCatTotem/getEarsColor'],   
              eyesShape: this.$store.getters['owlCatTotem/getEyesShapeDex'],
              decorationPattern: this.$store.getters['owlCatTotem/getDecorationDex'],
              decorationNoseColor:this.$store.getters['owlCatTotem/getNoseColor'],
              decorationFringeColor: this.$store.getters['owlCatTotem/getFringeColor'],
              animation: this.$store.getters['owlCatTotem/getAnimationDex'],
              lastNum: this.$store.getters['owlCatTotem/getLastNum'],
              itemsLegend: {
                eyes: this.$store.getters['owlCatTotem/getEyesShape'],
                decoration: this.$store.getters['owlCatTotem/getDecoration'],
                animation:this.$store.getters['owlCatTotem/getAnimation']
              },
              itemsInfo: {
                tokenId: this.$store.getters['owlCatTotem/getTokenId'],
                generation: this.$store.getters['owlCatTotem/getGeneration'],
                genes: this.$store.getters['owlCatTotem/getGenes']
              }
            });
          this.showItem = true;
        }
    },
    purchaseItem(id){ 
      this.$store.dispatch('owlCatTotem/printOwlcat', this.$store.getters['bcComm/getArrayItemsMarketplace'][id]);
      this.owlCatPurchase.push({
        id: id,
        headColor: this.$store.getters['owlCatTotem/getHeadColor'],
        mouthColor: this.$store.getters['owlCatTotem/getMouthColor'],
        eyesColor: this.$store.getters['owlCatTotem/getEyesColor'],
        earsColor: this.$store.getters['owlCatTotem/getEarsColor'],   
        eyesShape: this.$store.getters['owlCatTotem/getEyesShapeDex'],
        decorationPattern: this.$store.getters['owlCatTotem/getDecorationDex'],
        decorationNoseColor:this.$store.getters['owlCatTotem/getNoseColor'],
        decorationFringeColor: this.$store.getters['owlCatTotem/getFringeColor'],
        animation: this.$store.getters['owlCatTotem/getAnimationDex'],
        lastNum: this.$store.getters['owlCatTotem/getLastNum'],
        itemsLegend: {
          eyes: this.$store.getters['owlCatTotem/getEyesShape'],
          decoration: this.$store.getters['owlCatTotem/getDecoration'],
          animation:this.$store.getters['owlCatTotem/getAnimation']
        },
        itemsInfo: {
          tokenId: this.$store.getters['owlCatTotem/getTokenId'],
          generation: this.$store.getters['owlCatTotem/getGeneration'],
          genes: this.$store.getters['owlCatTotem/getGenes']
        }
      });
    },
  },
  components:{
    'market-card': marketCard,
    'owlcat-market': owlcatMarket,
    'buy-page': buyPage
    //'market-card': require('@/components/MarketplaceComps/MarketCard.vue').default,//
    //'owlcat-market': require('@/components/MarketplaceComps/OwlCatMarket.vue').default,
    //'buy-page': require('@/components/MarketplaceComps/BuyPage.vue').default
  },
  mounted(){
    this.familyMarketplace();
  }
}
</script>

<style lang="scss" scoped>
  .marketplace-zone{
    margin-top: 5px;

    .marketplace-tittle {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      display: flex;
      justify-content: center; 
      font-weight: bold;
      font-size: 24px;
      color: white;
    }
    .marketplace-items{
      display: flex;
      flex-direction: column;
      position: relative;
      margin-top: 10px;
      height: auto;
      top: 50px;
      
      .marketplace-items__image{
        display: flex;
        flex-wrap: wrap;
        position: relative;
      }
      
      .marketplace-items__inner{
        display: flex;
        position: relative;
        left:3%;
        margin-top: 9px;
        width: 95.9%;
        padding: 20px;  
        background-color: #bfa5a5;
        border-radius: 5px;
        border: 1px solid #DFE3E3;
        box-sizing: border-box;
        font-size: 12px;
        font-weight: bold;
      }          
    }
  }
</style>