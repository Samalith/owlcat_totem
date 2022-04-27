<template>
  <div class="home">
    <label id="tittle">
      <strong>Welcome to the OwlCat's World</strong>
    </label>
    <div id="motivation">
      Connect your wallet,  customized your totems, breed new ones and sell them for fun.
    </div>
    <img id="collage" src="../assets/HomeImage.png">
  </div>
</template>

<script>
export default {
  name:'Home'
}
</script>

<style lang="scss">
#tittle {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  justify-content: center; 
  font-weight: bold;
  font-size: 30px;
  color: white;
  display: flex;
}

#motivation {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  justify-content: center; 
  font-weight: normal;
  font-size: 18px;
  color: white;
  display: flex;
}

#collage {
  justify-content: center;
  position: relative;
  border-radius: 174px;
  left: 25%;
  top: 3%;
  display: flex;
  width: 50%;
  padding: 2.5%;
}
</style>