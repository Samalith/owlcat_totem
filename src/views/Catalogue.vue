<template>
  <div class="catalogue-zone">
    <div class="catalogue-tittle">
      <h1>Catalogue</h1> 
    </div>    
    <button id='breed-button' @click="goToBreedSection" v-if="$store.getters['bcComm/getStockStatus']">Breed</button>
    <!-- <button id='update-catalogue' >Help</button> -->
    <!-- ROUTER LINK -->
    <div>
      <router-link :to="{ name: 'Breed' }" />
    </div>
    <router-view/> 
    <!-- *********** -->
    <div class="catalogue-items" >
      <div class="catalogue-items__image" v-if="$store.getters['bcComm/getStockStatus'] && showItem" >          
        <owlcat-item
          v-for="totem in catalogueState"
          :key="totem.id"
          :totemComp="totem"
          @openOrderItem="openOrder"
        />       
      </div>
      <!-- <div class="catalogue-items__inner" v-if="$store.getters['bcComm/getStockStatus'] && showItem">
        <div>
          {{ $store.getters['bcComm/getArrayItems'] }}
        </div>
        <div>
          {{ catalogueState }}
        </div>
      </div> -->
    </div>    
    <order-page
      v-if="trigger"
      :openOrder="openOrder"
      :tokenId="tokenId"
    >
      <template v-slot:forSale > <!-- order page -->
        <div class="item-ordered"> <!-- MarketItem -->
          <market-item
            v-for="itemOrdered in owlCatOrder"
            :key="itemOrdered.id"
            :totemComp="itemOrdered"
          />
        </div>
      </template>
    </order-page>
  </div>  
</template>

<script>
export default {
  name:'Catalogue',
  data(){
    return {
      showItem: false, // Show items
      trigger: false, // Order card action 
      catalogueState: [], // OwlCat presentation card
      owlCatOrder: [], // OwlCat order card
      tokenId: 0 // to OrderPage props
    }
  },
  methods:{
    openOrder(id){ 
      console.log('OpenOrder: ', id); 
      if(typeof(id) === 'number')    
        this.orderItem(id);  
      if(this.trigger)
        this.owlCatOrder = []; // to avoid polution
      return this.trigger = !this.trigger;
    },
    goToBreedSection(){
      this.$router.push({ name: 'Breed'});
    },
    updateCatalogue(_arrayItems){
      if(this.$store.getters['bcComm/getConnectionStatus'])
        if(this.$store.getters['bcComm/getStockStatus']){   
          var _itemsFamily = _arrayItems.length;
          for(let i = 0; i < _itemsFamily; i++){
            this.$store.dispatch('owlCatTotem/printOwlcat', _arrayItems[i]);            
            this.catalogueState.push({
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
                order: this.$store.getters['owlCatTotem/getOrder'],
                generation: this.$store.getters['owlCatTotem/getGeneration'],
                genes: this.$store.getters['owlCatTotem/getGenes']
              }
            });
            this.showItem = true;
          }
        }
    },
    familyCatalogue(){ 
      if(this.$store.getters['bcComm/getConnectionStatus']){
        this.$store.dispatch('bcComm/totalSupply')        
        .then(() => {
          this.$store.dispatch('bcComm/balanceAccount')
          .then(() => {
            if(this.$store.getters['bcComm/getStockStatus']){
              var _totalSupply = this.$store.getters['bcComm/getTotalSupply'];
              var _balance = this.$store.getters['bcComm/getBalanceItems'];    
              var _itemsFamily = this.$store.getters['bcComm/getArrayItems'].length;
              console.log('Items Family: ', _itemsFamily);
              if(_balance == 0){
                alert("You don't have any OwlCat, go to the Factory.");
                this.showItem = false;
              }
              else if(_balance > _itemsFamily ){ 
                if(_itemsFamily !== 0)
                  _itemsFamily++;   
                for(let i = _itemsFamily; i < _totalSupply; i++){
                  this.$store.dispatch('bcComm/totemOffer', i);
                  this.$store.dispatch('bcComm/putOwlCatInCatalogue', i)
                  .then(() => {
                    if (_balance === _itemsFamily)
                      this.updateCatalogue(this.$store.getters['bcComm/getArrayItems']);                    
                  })
                  .catch((err) => {
                    console.log('Setting Array Items error: ', err);
                  });
                }
              }
              else
                this.updateCatalogue(this.$store.getters['bcComm/getArrayItems']);             
            }
          })
          .catch((err) => {
            console.log('Family Catalogue balance error: ', err);
          });
        });
      }          
    },
    orderItem(id){ 
      this.$store.dispatch('bcComm/putOrderToOwlcat', id); //arrayItems[_id]
      this.$store.dispatch('owlCatTotem/printOwlcat', this.$store.getters['bcComm/getOrderToOwlCat']);
      this.owlCatOrder.push({
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
      this.tokenId = this.owlCatOrder[0].itemsInfo.tokenId;      
    },
  },
  components:{
    'owlcat-item': require('@/components/CatalogueComps/OwlCatItem.vue').default,
    'market-item': require('@/components/MarketplaceComps/MarketItem.vue').default,
    'order-page': require('@/components/CatalogueComps/OrderPage.vue').default
  },
  mounted(){    
    this.familyCatalogue();
  }
}
</script>

<style lang="scss">
  .catalogue-zone{
    margin-top: 5px;

    .catalogue-tittle {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      display: flex;
      justify-content: center; 
      font-weight: bold;
      font-size: 24px;
      color: white;
    }
    #breed-button {
      margin-top: -1px;
      margin-bottom: -47px;
      margin-left: 80px;
      position: relative;
      width: 137px;
      height: 48px;
    }

    #update-catalogue {
      margin-top: 56px;
      position: relative;
      width: 137px;
      margin-left: 79px;
      height: 26px;
      color: blue;
    }

    .catalogue-items{
      display: flex;
      flex-direction: column;
      position: relative;
      margin-top: 10px;
      height: auto;
      top: 50px;

      .catalogue-items__image{
        display: flex;
        flex-wrap: wrap;
        position: relative;
      }

      .catalogue-items__inner{
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