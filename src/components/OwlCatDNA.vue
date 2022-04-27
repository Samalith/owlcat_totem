<template>
  <div class="dnaDiv" id="catDNA">
    <b>
      DNA:
      <!-- Colors -->
      <span id="dnabody">{{ $store.getters['owlCatDesign/getHeadColorDex'] }} </span>
      <span id="dnamouth">{{ $store.getters['owlCatDesign/getMouthColorDex'] }} </span>
      <span id="dnaeyes">{{ $store.getters['owlCatDesign/getEyesColorDex'] }} </span>
      <span id="dnaears">{{ $store.getters['owlCatDesign/getEarsColorDex'] }} </span>
    
      <!-- Cattributes -->
      <span id="dnashape">{{ $store.getters['owlCatDesign/getEyesShapeDex'] }}</span>
      <span id="dnadecoration">{{ $store.getters['owlCatDesign/getDecorationDex'] }} </span>
      <span id="dnadecorationNose">{{ $store.getters['owlCatDesign/getNoseColorDex'] }} </span>
      <span id="dnadecorationFringe">{{ $store.getters['owlCatDesign/getFringeColorDex'] }} </span>
      <span id="dnadanimation">{{ $store.getters['owlCatDesign/getAnimationDex']}}</span>
      <span id="dnaspecial">{{ $store.getters['owlCatDesign/getLastNum'] }}</span>
    </b>
  </div>
</template>

<script>
export default {
  name:'owlcat-dna'

}
</script>

<style lang="scss" scoped>
  .dnaDiv {
    position: absolute;
    left:20px;
    bottom: 50px;
  }
</style>