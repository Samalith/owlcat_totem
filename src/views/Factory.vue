<template>
  <div class="factory">
    <owlcat-image />
  </div>
</template>

<script>
import owlcatImage from '@/components/OwlCatImage.vue';

export default {
  name: 'Factory',
  components: {
    'owlcat-image': owlcatImage
    //'owlcat-image': require('@/components/OwlCatImage.vue').default
  }
}
</script>

<style lang="scss" scoped>

</style>