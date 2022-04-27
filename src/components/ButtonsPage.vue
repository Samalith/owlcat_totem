<template>
  <div class="page-buttons">
    <div class="row">
      <div><button class="column" @click="$store.dispatch('owlCatDesign/setPageColors')">Color</button></div>
      <div><button class="column" @click="$store.dispatch('owlCatDesign/setPageCattributes')">OwlCattributes</button></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .page-buttons{
    position: relative;
    top: -14px;
    left: 2px;
  
    .column {
      float: left;
      width: 90%;
      padding: 5px;
    }
  
    .row:after {
      display: table;
      clear: both;
    }
  }
</style>