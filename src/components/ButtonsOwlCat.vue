<template>
  <div class="cat-generators">
    <div class="row">
      <button class="column" @click="setRandomNumber">Random OwlCat</button>
      <button class="column" @click="$store.dispatch('owlCatDesign/defaultOwlCat')">Default OwlCat</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'owlcat-buttons',
  data(){
    return { 
      randomNumber: 1
    }
  },
  methods: {    
    setRandomNumber(){
      this.randomNumber = Math.floor(Math.random() * 79) + 10; // 10-89 to avoid BigNumber
      this.$store.dispatch('owlCatDesign/setNewHeadColor', this.randomNumber);
      this.randomNumber = Math.floor(Math.random() * 89) + 10;
      this.$store.dispatch('owlCatDesign/setNewMouthColor', this.randomNumber);
      this.randomNumber = Math.floor(Math.random() * 89) + 10;
      this.$store.dispatch('owlCatDesign/setNewEyesColor', this.randomNumber);
      this.randomNumber = Math.floor(Math.random() * 89) + 10;
      this.$store.dispatch('owlCatDesign/setNewEarsColor', this.randomNumber);
      this.randomNumber = Math.floor(Math.random() * 7) + 1;
      this.$store.dispatch('owlCatDesign/setNewEyesShape', this.randomNumber);
      this.randomNumber = Math.floor(Math.random() * 7) + 1;
      this.$store.dispatch('owlCatDesign/setNewDecoration', this.randomNumber);
      this.randomNumber = Math.floor(Math.random() * 89) + 10;
      this.$store.dispatch('owlCatDesign/setNewNoseColor', this.randomNumber);
      this.randomNumber = Math.floor(Math.random() * 89) + 10;
      this.$store.dispatch('owlCatDesign/setNewFringeColor', this.randomNumber);
      this.randomNumber = Math.floor(Math.random() * 7) + 1;
      this.$store.dispatch('owlCatDesign/setNewAnimation', this.randomNumber);
    }
  }
}
</script>

<style lang="scss" scoped>
  .cat-generators{
    line-height: 28px;
    top: 0px;
    left: 74px;
    width: 40%;
  
    .column {
      float: left;
      width: 38%;
      padding: 5px;
    }
  
    .row:after {
      display: flex;
      clear: both;
    }
  }
  
</style>