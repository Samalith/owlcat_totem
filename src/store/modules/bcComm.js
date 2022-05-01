import detectEthereumProvider from '@metamask/detect-provider';
import contractObject from '@/contracts/OwlCatContract.json';
import contractMarket from '@/contracts/OwlCatMarketPlace.json';
import router from '@/router';
import Web3 from 'web3/dist/web3.min.js';

//var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider);

export const bcComm = {
  namespaced: true,
  state: {
    contract: {
      instance: null,
      marketInstance: null,
      userBC: '',
      abi: contractObject.abi,
      abiMarket: contractMarket.abi,
      //contractAddress: contractObject.networks[5777].address, // Ganache
      //contractAddressMarket: contractMarket.networks[5777].address  // Ganache
      contractAddress: '0xb36bc2CCc4188B8A2123562Adf1BdD9Ce3c37DbF', // Rinkeby
      contractAddressMarket: '0x9231208f84EE5f9109A1a734C8A0Ed488aa90B38' // Rinkeby
    },
    status: {
      isConnected: false,
      isStocked: false,
      isOrdered: false,
      showLabel: false, // O-Factory label
    },
    owlCatsFamily: {
      creationLabel: {},
      balanceItems: 0,
      arrayItems: [], // Array OwlCats genes ... for catalogue
      owlcatToBreed: {},
      ownerAddress: '',
      totalSupply: 0
    },
    marketPlace: {
      approvedLabel: {}, // market init
      orderLabel: {}, // place order
      purchaseLabel: {}, // to buy or cancel
      price: 0, // in wei
      priceStr: '2.5', 
      inventory: false,
      balanceOrders: 0,
      arrayOrders: [], // Array tokensId for order
      arrayItemsMarket: [], // Array OwlCats genes ... for marketplace
      orderToOwlCat: {}
    }
  },
  mutations: {
    SET_METAMASK_COMMUNICATION(state, accounts){
      // *** const text = eval(state.contract.contractAddress); -> eval as JSON.parse()
      // *** contractObject.networks[5777].address -> special name treatment in JSON object
      console.log('Contract address', state.contract.contractAddress);
      console.log('MarketContract address', state.contract.contractAddressMarket);
      state.contract.instance = new web3.eth.Contract(state.contract.abi, state.contract.contractAddress, {from: accounts[0]});
      state.contract.userBC = Web3.utils.toChecksumAddress(accounts[0]);
      console.log('User: ', state.contract.userBC);
      console.log('User type: ', typeof(state.contract.userBC));
      state.contract.marketInstance = new web3.eth.Contract(state.contract.abiMarket, state.contract.contractAddressMarket, {from: accounts[0]});
      state.status.isConnected = true;
      console.log('OC instance: ', state.contract.instance); // 'til here for each browser refresh
      console.log('Mkt instance: ', state.contract.marketInstance);
    },
    CREATE_OWLCAT(state, receipt){ // only for the creation label
      let txHash = receipt.transactionHash;
      console.log(`Tx done with hash: ${txHash}`);
      /****** How to treat EVENTS ******/
      let _Birth = receipt.events.Birth;
      
      state.status.isStocked = true;
      state.status.showLabel = true;        
      console.log('Gen0: ',_Birth);
      let owner = _Birth.returnValues.owner;
      let owlCatId = _Birth.returnValues.owlCatId;
      let mumId = _Birth.returnValues.mumId;
      let dadId = _Birth.returnValues.dadId;
      let genes = _Birth.returnValues.genes;
      state.owlCatsFamily.creationLabel = { 
        owner, owlCatId, mumId, dadId, genes
      }     
    },
    BREED_OWLCAT(state, receipt){
      let txHash = receipt.transactionHash;
      console.log(`Tx done with hash: ${txHash}`);
      
      let _Birth = receipt.events.Birth;
      
      state.status.isStocked = true;
      state.status.showLabel = true;        
      console.log('Breeded ',_Birth);
    },
    BALANCE_ACCOUNT(state, _balanceItems){
      state.owlCatsFamily.balanceItems = parseInt(_balanceItems);
      console.log('balance: ', state.owlCatsFamily.balanceItems);
    },
    TOTAL_SUPPLY(state, _totalSupply){
      state.owlCatsFamily.totalSupply = _totalSupply;
      console.log('TotalSupply: ', state.owlCatsFamily.totalSupply);
    },
    TOKEN_OWNER(state, _ownerAddress){
      state.owlCatsFamily.ownerAddress = _ownerAddress;
    },
    PUT_OWLCAT_IN_CATALOGUE(state){
      state.status.isStocked = true;
      console.log('PUT_BC',state.owlCatsFamily.arrayItems);
      console.log('ArrayItems',state.owlCatsFamily.arrayItems.length);
    },
    PUT_OWLCAT_TO_BREED(state, _id){
      state.status.isStocked = true;
      state.owlCatsFamily.owlcatToBreed = state.owlCatsFamily.arrayItems[_id];
      console.log('OwlCatToBreed', state.owlCatsFamily.owlcatToBreed);
    },
    MARKETPLACE_INIT(state, tokensOnSale){
      state.marketPlace.arrayOrders = tokensOnSale.map(Number);
    },
    SET_APPROVAL_FOR_ALL(state, receipt){
      let txHash = receipt.transactionHash;
      console.log(`Init Market done with hash: ${txHash}`);

      let _ApprovalForAll = receipt.events.ApprovalForAll;

      let owner = _ApprovalForAll.returnValues.owner;
      let operator = _ApprovalForAll.returnValues.operator;
      let approved = _ApprovalForAll.returnValues.approved;
      state.marketPlace.approvedLabel ={
        owner, operator, approved
      }
    },
    PUT_OWLCAT_IN_MARKETPLACE(state){
      console.log('PUT_BC',state.marketPlace.arrayItemsMarket);
      console.log('ArrayItemsMarket',state.marketPlace.arrayItemsMarket.length);
    },
    PUT_ORDER_TO_OWLCAT(state, _id){
      state.marketPlace.orderToOwlCat = state.owlCatsFamily.arrayItems[_id];
      console.log('OrderToOwlCat', state.marketPlace.orderToOwlCat);
    },
    SET_NEW_ITEM_PRICE(state, newItemPrice){ //String input set()
      state.marketPlace.priceStr = newItemPrice; // String setOffer
      state.marketPlace.price = parseFloat(newItemPrice); // Number input get()
    },
    SET_OFFER(state, receipt){
      let txHash = receipt.transactionHash;
      console.log(`SetOfferTx done with hash: ${txHash}`);
      
      let _MarketTx = receipt.events.MarketTransaction;

      let _TxType = _MarketTx.returnValues.TxType;
      let _owner = _MarketTx.returnValues.owner;
      let _tokenId = _MarketTx.returnValues.tokenId;

      console.log('Set offer type: ', _TxType);
    },
    TOTEM_OFFER(state, result){
      state.marketPlace.priceStr = result.price; // String in wei
      console.log('Price: ', result.price);
      //console.log('Active: ', result.active);
    },
    REMOVE_OFFER(state, receipt){
      let txHash = receipt.transactionHash;
      console.log(`CancelOwlCatTx done with hash: ${txHash}`);

      let _MarketTx = receipt.events.MarketTransaction;

      let _TxType = _MarketTx.returnValues.TxType;
      let _owner = _MarketTx.returnValues.owner;
      let _tokenId = _MarketTx.returnValues.tokenId;

      console.log('Set offer type: ', _TxType);

    },
    BUY_OWLCAT(state, receipt){
      let txHash = receipt.transactionHash;
      console.log(`BuyOwlCatTx done with hash: ${txHash}`);

      let _MarketTx = receipt.events.MarketTransaction;

      let _TxType = _MarketTx.returnValues.TxType;
      let _owner = _MarketTx.returnValues.owner;
      let _tokenId = _MarketTx.returnValues.tokenId;

      console.log('Set offer type: ', _TxType);

    }
  },
  actions: {
    setMetamaskCommunication({ commit }){
      return new Promise((res,rej) => {
        detectEthereumProvider().then((provider) => { 
          if(provider){
            console.log('Ethereum successfully detected!');
            ethereum.request({ method: 'eth_requestAccounts' })
            .then((accounts) => {
              res(commit('SET_METAMASK_COMMUNICATION', accounts));
            })
            .catch((error) => {
              rej(console.log('Request error: ', error));
            });
          }
        });
      });
    },
    createOwlcat({ state, commit }, dnaNum){  
      state.contract.instance.methods.createOwlCatGen0(dnaNum).send({}) // return a promise, not new Promise necessary
      .then((receipt) => { 
        commit('CREATE_OWLCAT', receipt);
        //return receipt.events.Birth; 
      })
      .catch((err) => {
        alert('Owlcat not created ! If the problem persists reset your Metamask account.');
        console.log(err);
        location.reload();
      });
    },
    breedOwlCat({ state, commit }, { dadId, mamId } ){
      return new Promise ((res, rej) => {
        state.contract.instance.methods.breed(dadId, mamId).send({})
        .then((receipt) => {
          res(commit('BREED_OWLCAT', receipt));
        })
        .catch((err) => {
          rej(alert('Owlcat not created ! If the problem persists reset your Metamask account.'));
          console.log(err);
          location.reload();
        });
      });
    },
    balanceAccount({ state, commit }){
      return new Promise(res => {
        state.contract.instance.methods.balanceOf(state.contract.userBC).call({})
        .then((result) => {
          res(commit('BALANCE_ACCOUNT', result));
        })
        .then(() => {
          let balance = state.owlCatsFamily.balanceItems;        
          
          if (balance > 0){
            state.status.isStocked = true;
            console.log('isStocked', state.status.isStocked);
          }
          else{
            state.status.isStocked = false;
            console.log('isStocked', state.status.isStocked);
          }
        })        
        .catch((err) => {
          console.log('Balance account error: ', err);
        });
      });
    },
    totalSupply({state, commit}){
      return new Promise(res => {
        state.contract.instance.methods.totalSupply().call({})
        .then((result) => {
          res(commit('TOTAL_SUPPLY', result));
        })
        .catch((err) => {
          console.log('Total supply error: ', err);
        });
      })
    },
    putOwlcatToBreed({ commit }, id){ //GET_OWLCAT //cambiar aqui por la verdadera 
      commit('PUT_OWLCAT_TO_BREED', id);            
    },
    putOwlCatInCatalogue({ state, commit }, _tokenId){
      /**EL ARRAY YA ESTA EN LA BC TOCA SACARLO Y ARMAR EL OTRO PROMISE.ALL MAP */
      return new Promise(res => {
        state.contract.instance.methods.ownerOf(_tokenId).call({})
        .then((tokenOwner) => {
          console.log('Put token id: ', _tokenId);
          console.log('OwlCat Owner put', tokenOwner);
          //if(state.status.isStocked)
            if(tokenOwner === state.contract.userBC){
              console.log('OwlCat Owner print', tokenOwner); // getOrder aqui
              state.contract.marketInstance.methods.getOffer(_tokenId).call({})
              .then((result) => {
                state.contract.instance.methods.getOwlCat(_tokenId).call({}) // Se queda aqui 
                .then((owlCat) => {
                  state.owlCatsFamily.arrayItems.push({ 
                    tokenId: _tokenId,
                    order: result.active,
                    genes: owlCat.genes, 
                    generation: owlCat.generation
                  });
                  //console.log('Put OwlCat: ', owlCat);
                  res(commit('PUT_OWLCAT_IN_CATALOGUE', owlCat));
                })
                .catch((err) => {
                  console.log('Get owlcat in put_catalogue error: ', err);
                });              
              })
              .catch((err) => {
                console.log('Get Offer in put_catalogue error: ', err);
              });
            }
          /* else  
            alert("Click O-Factory and again Catalogue to see your Totems."); */            
        });
      });
    },
    putOwlCatInMarketplace({ state, commit }, _tokenId){
      /**EL ARRAY YA ESTA EN LA BC TOCA SACARLO Y ARMAR EL OTRO PROMISE.ALL MAP */
      return new Promise(res => {
        state.contract.instance.methods.getOwlCat(_tokenId).call({}) // Se queda aqui 
        .then((owlCat) => {
          state.marketPlace.arrayItemsMarket.push({ // meter el order.active
            tokenId: _tokenId,
            genes: owlCat.genes, 
            generation: owlCat.generation
          });
          //console.log('Put OwlCat: ', owlCat);
          res(commit('PUT_OWLCAT_IN_MARKETPLACE', owlCat));
        })
        .catch((err) => {
          console.log('Put in marketplace error: ', err);
        });                      
      });
    },
    tokenOwner({state, commit}, tokenId){
      return new Promise(res => {
        state.contract.instance.methods.ownerOf(tokenId).call({})
        .then((response) => {
          res(commit('TOKEN_OWNER', Web3.utils.toChecksumAddress(response)));
        })
        .catch((err) => {
          console.log('Token owner error: ', err);
        });
      });
    },
    initMarketplace({ state, commit }){
      let marketAddress = state.contract.contractAddressMarket;
      let userAddress = state.contract.userBC;

      return new Promise(res => {
        state.contract.instance.methods.isApprovedForAll(userAddress, marketAddress).call({})
        .then((result) => {
          state.status.isOrdered = result;

          if (result){ // boolean
            state.contract.marketInstance.methods.getAllTokenOnSale().call({})
            .then((tokensOnSale) => {
              res(commit('MARKETPLACE_INIT', tokensOnSale)); // Array tokensOnSale
            })
            .catch(err => {
              console.log('Marketplace init error: ', err);
            });
          }
          else{
            state.contract.instance.methods.setApprovalForAll(marketAddress, true).send({})
            .then((receipt) => {
              commit('SET_APPROVAL_FOR_ALL', receipt);
            })
            .then(() => {
              state.contract.marketInstance.methods.getAllTokenOnSale().call({})
              .then((tokensOnSale) => {
                res(commit('MARKETPLACE_INIT', tokensOnSale)); // Array tokensOnSale
              });
            })
            .catch((err) => {
              console.log('Marketplace init error: ', err);
            });
          }
        });
      });
    },
    putOrderToOwlcat({ commit }, _id){ 
      commit('PUT_ORDER_TO_OWLCAT', _id);        
    },
    setNewPrice({ commit }, newItemPrice){
      commit('SET_NEW_ITEM_PRICE', newItemPrice);
    },
    setOffer({state, commit}, { price, tokenId }){ // price String ETH
      let weiPrice = Web3.utils.toWei(price, 'ether'); //weiPrice is String
      state.contract.marketInstance.methods.setOffer(weiPrice, tokenId).send({})
      .then((receipt) => {
        commit('SET_OFFER', receipt);
        router.push({ name: 'Home'});
        location.reload();
      })
      .catch((err) => {
        console.log('Set offer error: ', err);
      });
    },
    totemOffer({ state, commit }, tokenId){
      return new Promise(res => {
        state.contract.marketInstance.methods.getOffer(tokenId).call({})
        .then((result) => {
          res(commit('TOTEM_OFFER', result));
        })
        .catch((err) => {
          console.log('Get offer central error: ', err);
        })
      });
    },
    removeOffer({state, commit}, tokenId){
      state.contract.marketInstance.methods.removeOffer(tokenId).send({})
      .then((receipt) => {
        commit('BUY_OWLCAT', receipt);
      })
      .then(() => {
        console.log('Cancel Order label');
        router.push({ name: 'Home'});
        location.reload();
      })
      .catch((err) => {
        console.log('Set offer error: ', err);
      });
    },
    buyOwlCat({state, commit}, tokenId){
      state.contract.marketInstance.methods.buyOwlCat(tokenId).send({value: state.marketPlace.priceStr})
      .then((receipt) => {
        commit('BUY_OWLCAT', receipt);
      })
      .then(() => {
        console.log('Purchase totem label');
        router.push({ name: 'Home'});
        location.reload();
      })
      .catch((err) => {
        console.log('Set offer error: ', err);
      });
    }
  },
  getters:{
    getConnectionStatus(state){
      return state.status.isConnected;
    },
    getStockStatus(state){
      return state.status.isStocked;
    },
    getShowLabel(state){
      return state.status.showLabel;
    },
    getCreationLabel(state){
      return state.owlCatsFamily.creationLabel;
    },
    getBalanceItems(state){ //balanceOf
      return state.owlCatsFamily.balanceItems;
    },
    getArrayItems(state){ //Array of objects
      return state.owlCatsFamily.arrayItems;
    },
    getArrayItemsMarketplace(state){
      return state.marketPlace.arrayItemsMarket;
    },
    getOwlcatToBreed(state){ // single object
      return state.owlCatsFamily.owlcatToBreed;
    },
    getMarketplaceInstance(state){
      return state.contract.marketInstance;
    },
    getMarketplaceAddress(state){
      return state.contract.contractAddressMarket;
    },
    getArrayOrders(state){
      return state.marketPlace.arrayOrders;
    },
    getIsOrdered(state){
      return state.status.isOrdered;
    },
    getItemPrice(state){
      return state.marketPlace.price;
    },
    getItemPriceStr(state){ // String wei
      return state.marketPlace.priceStr;
    },
    getItemPriceEth(state){ // To get the eth price for front-end buy owlcat
      let priceEth = Web3.utils.fromWei(state.marketPlace.priceStr, 'ether'); // String
     //priceEth = parseInt(priceEth).toFixed(3);
      
      return priceEth;
    },
    getOrderToOwlCat(state){ // Single object
      return state.marketPlace.orderToOwlCat;
    },
    getTotalSupply(state){
      return state.owlCatsFamily.totalSupply;
    },
    getOwnerAddress(state){ //**** */
      return state.owlCatsFamily.ownerAddress;
    },
    getUserAddress(state){
      return state.contract.userBC;
    },
  }
};
