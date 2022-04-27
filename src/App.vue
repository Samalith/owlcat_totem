<template>
  <div id="app">
    <nav>
      <div class="navigation__logo">
        OwlCats
        <div class="navigation__user">
          By {{ user.username }}{{ user.trademark }}
        </div>
      </div>
      <div>
        <button id="connection__button" @click="reloadPage">Connect</button>
      </div>      
    </nav>
      <div class="navigation__menu">
        <router-link to="/">Home</router-link> |
        <router-link :to="{ name: 'Factory' }">O-Factory</router-link> |
        <router-link :to="{ name: 'Catalogue' }">Catalogue</router-link> |
        <router-link :to="{ name: 'Marketplace' }">Marketplace</router-link> 
      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      user: {
        username: '_Nandorphis',
        trademark: '®'
      }
    }
  },
  methods: {
    reloadPage(){
      location.reload(); //reload page
    },
    metamaskSetup(){
      this.$store.dispatch('bcComm/setMetamaskCommunication')
      .then(() => {
        this.$store.dispatch('bcComm/balanceAccount');
      }) // namespaced
      .catch((err) => {
        alert('Click on the Metamask browser icon to unlock your wallet. Then click on "Connect"');
      });
    }
  },
  mounted(){    
    this.metamaskSetup();
  }
}
</script>

<style lang="scss">
@import "@/scss/variables";
@import "@/styles/base.scss";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    justify-content: center; 

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 5%;
      background-color:deeppink;
      color: white;

      .navigation__logo {
        font-weight: bold;
        font-size: 20px;
      }

      .navigation__user {
        font-weight: bold;
        font-size: 10px;
        float:right;
      }
    }
    
  }
  
  .navigation__menu {
    display: flex;
    justify-content: space-around;
    padding: 10px 5%;
    font-size: 20px;
    color:deepskyblue;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: deeppink;
    font-weight: bold;
    color: white;
    padding: 2px 18px;
    margin: auto 8px;
    border-radius: 5px;
    border: none;          
  }

  button:hover {
    transform: scale(1.02);
  }

  #connection__button {
    background-color: teal;
  }  

</style>
