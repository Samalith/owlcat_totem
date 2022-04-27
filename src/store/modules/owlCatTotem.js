import palette from '../palette.json';

export const owlCatTotem = {
  namespaced: true,
  state:{   
    palette: palette.palette,
    headColor: 12,
    mouthColor: 13,
    eyesColor: 96,
    earsColor: 20,   
    eyesShape: 2,
    decorationPattern: 3,
    decorationNoseColor: 71,
    decorationFringeColor: 20,
    animation: 3,
    lastNum: 1,

    itemsLegend: {
      eyes: '',
      decoration: '',
      animation:''
    },
    
    itemsInfo: {
      tokenId: 0,
      order: false,
      generation: 0,
      genes: 0
    }   
  },
  mutations: {
    PRINT_OWLCAT(state, arrItems){
      let _tokenId = arrItems.tokenId;
      let _order = arrItems.order;
      let _generation = arrItems.generation;
      let _genes = arrItems.genes;

      state.itemsInfo.tokenId = parseInt(_tokenId);
      state.itemsInfo.order = _order;
      state.itemsInfo.generation = parseInt(_generation);
      state.itemsInfo.genes = parseInt(_genes);

      state.headColor = parseInt(_genes[0] + _genes[1]);
      state.mouthColor = parseInt(_genes[2] + _genes[3]);
      state.eyesColor = parseInt(_genes[4] + _genes[5]);
      state.earsColor = parseInt( _genes[6] + _genes[7]);
      state.eyesShape = parseInt(_genes[8]);
      switch (state.eyesShape) {
        case 1 : 
          state.itemsLegend.eyes = 'hypnotic';
          break;
        case 2 : 
          state.itemsLegend.eyes = 'sleepy';
          break;
        case 3 : 
          state.itemsLegend.eyes = 'ungry';
          break;
        case 4 : 
          state.itemsLegend.eyes = 'a right sleepy';
          break;
        case 5 : 
          state.itemsLegend.eyes = 'a left sleepy';
          break;
        case 6 : 
          state.itemsLegend.eyes = 'a right ungry';
          break;
        case 7 : 
          state.itemsLegend.eyes = 'a left ungry';
          break;
      }
      state.decorationPattern = parseInt(_genes[9]);
      switch (state.decorationPattern) {
        case 1 : 
          state.itemsLegend.decoration = 'basic';
          break;
        case 2 : 
          state.itemsLegend.decoration = 'fangs';
          break;
        case 3 : 
          state.itemsLegend.decoration = 'wings';
          break;
        case 4 : 
          state.itemsLegend.decoration = 'fringe';
          break;
        case 5 : 
          state.itemsLegend.decoration = 'fangs and wings';
          break;
        case 6 : 
          state.itemsLegend.decoration = 'fangs and fringe';
          break;
        case 7 : 
          state.itemsLegend.decoration = 'wings and fringe';
          break;
      }
      state.decorationNoseColor = parseInt(_genes[10] + _genes[11]);
      state.decorationFringeColor = parseInt(_genes[12] + _genes[13]);
      state.animation = parseInt(_genes[14]);
      switch (state.animation) {
        case 1 : 
          state.itemsLegend.animation = 'cosmos';
          break;
        case 2 : 
          state.itemsLegend.animation = 'head';
          break;
        case 3 : 
          state.itemsLegend.animation = 'tail';
          break;
        case 4 : 
          state.itemsLegend.animation = 'wings';
          break;
        case 5 : 
          state.itemsLegend.animation = 'tonge';
          break;
        case 6 : 
          state.itemsLegend.animation = 'head up and down';
          break;
        case 7 : 
          state.itemsLegend.animation = 'nose';
          break;
      }
      state.lastNum = parseInt(_genes[15]);
      console.log('TOTEM: ', state.itemsInfo.genes);
    }
  }, 
  actions:{
    printOwlcat({ commit }, arrItems){
      commit('PRINT_OWLCAT', arrItems);     
    }
  },   
  getters: {
    getHeadColor(state){ 
      return state.palette[state.headColor];
    },
    getMouthColor(state){
      return state.palette[state.mouthColor];
    },
    getEyesColor(state){
      return state.palette[state.eyesColor];
    },
    getEarsColor(state){
      return state.palette[state.earsColor];
    },
    getEyesShapeDex(state){
      return state.eyesShape;
    },
    getDecorationDex(state){
      return state.decorationPattern;
    },
    getNoseColor(state){
      return state.palette[state.decorationNoseColor];
    },
    getFringeColor(state){
      return state.palette[state.decorationFringeColor];
    },
    getAnimationDex(state){
      return state.animation;
    },
    getLastNum(state){
      return state.lastNum;
    },
    getTokenId(state){ //
      return state.itemsInfo.tokenId;
    },
    getOrder(state){
      return state.itemsInfo.order;
    },
    getGeneration(state){
      return state.itemsInfo.generation;
    },
    getGenes(state){
      return state.itemsInfo.genes;
    },
    getEyesShape(state){ 
      return state.itemsLegend.eyes;
    },
    getDecoration(state){
      return state.itemsLegend.decoration;
    },
    getAnimation(state){
      return state.itemsLegend.animation;
    }
  }
}