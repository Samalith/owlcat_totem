<template>
  <div class="cat-tokenization">
    <div class="row">
      <button @click="createOwlCatComp">Create OwlCat</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bc-buttons',
  methods:{
    createOwlCatComp(){

      var dnaStr = this.$store.getters['owlCatDesign/getHeadColorDex'].toString() +
          this.$store.getters['owlCatDesign/getMouthColorDex'].toString() +
          this.$store.getters['owlCatDesign/getEyesColorDex'].toString() +
          this.$store.getters['owlCatDesign/getEarsColorDex'].toString() +
          this.$store.getters['owlCatDesign/getEyesShapeDex'].toString() +
          this.$store.getters['owlCatDesign/getDecorationDex'].toString() +
          this.$store.getters['owlCatDesign/getNoseColorDex'].toString() +
          this.$store.getters['owlCatDesign/getFringeColorDex'].toString() +
          this.$store.getters['owlCatDesign/getAnimationDex'].toString() + 
          this.$store.getters['owlCatDesign/getLastNum'].toString();

      var dnaNum = parseInt(dnaStr);
      
      //console.log('dnaStr ', dnaStr);
      //console.log('dnaOwlCat ', dnaNum);

      if(this.$store.getters['bcComm/getConnectionStatus']){
        this.$store.dispatch('bcComm/createOwlcat', dnaNum); // namespaced, promise       
      }
      else{        
        alert('Please press the "Connect" button first. If the problem persists reset your metamask account and try again.');
        //console.log('ConStatus: ', this.$store.getters['bcComm/getConnectionStatus']);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .cat-tokenization{
      position: relative;
      float: right;
      top: -38px;
      right: 56px;
      line-height: 34px;
  }
</style>