<template>
  <div class="popup" >
    <div class="popup-inner" @click="selectOwlCat">
      <slot name="totem"/>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: ['selectOwlCat']
}
</script>

<style lang="scss">
  .popup{
    position: fixed;
    top: 100px;
    left: 56px;
    right: 56px;
    bottom: 44px;
    z-index: 99;
    background-color: rgba(0,0,0, 0.9);

    display: flex;
    overflow-y: scroll; /* scroll Y direction */
    scrollbar-color: rebeccapurple green;
    scrollbar-width: thin;
    align-items: center;
    justify-content: center;

    .popup-inner{
      display: flex;
      flex-wrap: wrap;
      position: relative;
    }
  }
</style>