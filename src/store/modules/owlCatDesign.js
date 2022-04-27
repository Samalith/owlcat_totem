import palette from '../palette.json';

export const owlCatDesign = {
  namespaced: true,
  state: {
    palette: palette.palette,
    dnaOwlCat: {
      color: { 
        headColor: 71,
        mouthColor: 13,
        eyesColor: 96,
        earsColor: 20,
      },
      attributes: {
        eyesShape: 'Normal',
        decorationPattern: 'Basic',
        decorationNoseColor: 13,
        decorationFringeColor: 20,
        animation: 'None',
        lastNum: 1
      }
    },
    setEyeshape: {
      sleepy: false, 
      ungry: false,
      sleepyL: false, // sleepy and ungry FALSE
      ungryL: false, // sleepy and ungry FALSE
      sleepyR: false, // sleepy and ungry FALSE
      ungryR: false, // sleepy and ungry FALSE
    },
    setDecoration: {
      fangs : false,
      wings : false,
      fringe : false
    },
    setAnimation: {
      moveHead: false,
      moveTail: false,
      moveWings: false,
      moveTonge: false,
      nodHead: false,
      moveNose: false
    },
    pageSelector: {
      pageColors: true,
      pageCattributes: false
    }   
  },
  mutations: {
    SET_NEW_HEADCOLOR(state, newColor){
      state.dnaOwlCat.color.headColor = newColor;
    },
    SET_NEW_MOUTHCOLOR(state, newColor){
      state.dnaOwlCat.color.mouthColor = newColor;
    },
    SET_NEW_EYESCOLOR(state, newColor){
      state.dnaOwlCat.color.eyesColor = newColor;
    },
    SET_NEW_EARSCOLOR(state, newColor){
      state.dnaOwlCat.color.earsColor = newColor;
    },
    SET_NEW_EYESSHAPE(state, newEyesShape){
      switch (newEyesShape) {
        case 1 : 
          state.setEyeshape.sleepy = false; 
          state.setEyeshape.ungry = false;
          state.setEyeshape.sleepyL = false; // sleepy and ungry FALSE
          state.setEyeshape.ungryL = false; // sleepy and ungry FALSE
          state.setEyeshape.sleepyR = false; // sleepy and ungry FALSE
          state.setEyeshape.ungryR = false; // sleepy and ungry FALSE
          //console.log('Normal');
          state.dnaOwlCat.attributes.eyesShape = 'Normal';
          break;
        case 2 :
          state.setEyeshape.sleepy = true; 
          state.setEyeshape.ungry = false;
          state.setEyeshape.sleepyL = false; // sleepy and ungry FALSE
          state.setEyeshape.ungryL = false; // sleepy and ungry FALSE
          state.setEyeshape.sleepyR = false; // sleepy and ungry FALSE
          state.setEyeshape.ungryR = false; // sleepy and ungry FALSE
          //console.log('Sleepy');
          state.dnaOwlCat.attributes.eyesShape = 'Sleepy';
          break;
        case 3 :
          state.setEyeshape.sleepy = false; 
          state.setEyeshape.ungry = true;
          state.setEyeshape.sleepyL = false; // sleepy and ungry FALSE
          state.setEyeshape.ungryL = false; // sleepy and ungry FALSE
          state.setEyeshape.sleepyR = false; // sleepy and ungry FALSE
          state.setEyeshape.ungryR = false; // sleepy and ungry FALSE
          //console.log('Ungry');
          state.dnaOwlCat.attributes.eyesShape = 'Ungry';
          break;
        case 4 :
          state.setEyeshape.sleepy = false; 
          state.setEyeshape.ungry = false;
          state.setEyeshape.sleepyL = true; // sleepy and ungry FALSE
          state.setEyeshape.ungryL = false; // sleepy and ungry FALSE
          state.setEyeshape.sleepyR = false; // sleepy and ungry FALSE
          state.setEyeshape.ungryR = false; // sleepy and ungry FALSE
          //console.log('Left Sleepy');
          state.dnaOwlCat.attributes.eyesShape = 'Right Sleepy';
          break;
        case 5 :
          state.setEyeshape.sleepy = false; 
          state.setEyeshape.ungry = false;
          state.setEyeshape.sleepyL = false; // sleepy and ungry FALSE
          state.setEyeshape.ungryL = false; // sleepy and ungry FALSE
          state.setEyeshape.sleepyR = true; // sleepy and ungry FALSE
          state.setEyeshape.ungryR = false; // sleepy and ungry FALSE
          //console.log('Right Sleepy');
          state.dnaOwlCat.attributes.eyesShape = 'Left Sleepy';
          break;
        case 6 :
          state.setEyeshape.sleepy = false; 
          state.setEyeshape.ungry = false;
          state.setEyeshape.sleepyL = false; // sleepy and ungry FALSE
          state.setEyeshape.ungryL = true; // sleepy and ungry FALSE
          state.setEyeshape.sleepyR = false; // sleepy and ungry FALSE
          state.setEyeshape.ungryR = false; // sleepy and ungry FALSE
          //console.log('Left Ungry');
          state.dnaOwlCat.attributes.eyesShape = 'Right Ungry';
          break;
        case 7 :
          state.setEyeshape.sleepy = false; 
          state.setEyeshape.ungry = false;
          state.setEyeshape.sleepyL = false; // sleepy and ungry FALSE
          state.setEyeshape.ungryL = false; // sleepy and ungry FALSE
          state.setEyeshape.sleepyR = false; // sleepy and ungry FALSE
          state.setEyeshape.ungryR = true; // sleepy and ungry FALSE
          //console.log('Right Ungry');
          state.dnaOwlCat.attributes.eyesShape = 'Left Ungry';
          break;
      }
    },
    SET_NEW_DECORATION(state, newDecoration){
      switch (newDecoration) {
        case 1 :
          state.setDecoration.fangs = false;
          state.setDecoration.wings = false;
          state.setDecoration.fringe = false;
          //console.log('Basic');
          state.dnaOwlCat.attributes.decorationPattern = 'Basic'
          break;
        case 2 :
          state.setDecoration.fangs = true;
          state.setDecoration.wings = false;
          state.setDecoration.fringe = false;
          //console.log('Fangs');
          state.dnaOwlCat.attributes.decorationPattern = 'Fangs'
          break;
        case 3 :
          state.setDecoration.fangs = false;
          state.setDecoration.wings = true;
          state.setDecoration.fringe = false;
          //console.log('Wings');
          state.dnaOwlCat.attributes.decorationPattern = 'Wings'
          break;
        case 4 :
          state.setDecoration.fangs = false;
          state.setDecoration.wings = false;
          state.setDecoration.fringe = true;
          //console.log('Fringe');
          state.dnaOwlCat.attributes.decorationPattern = 'Fringe'
          break;
        case 5 :
          state.setDecoration.fangs = true;
          state.setDecoration.wings = true;
          state.setDecoration.fringe = false;
          //console.log('Fangs-Wings');
          state.dnaOwlCat.attributes.decorationPattern = 'Fangs-Wings'
          break;
        case 6 :
          state.setDecoration.fangs = true;
          state.setDecoration.wings = false;
          state.setDecoration.fringe = true;
          //console.log('Fangs-Fringe');
          state.dnaOwlCat.attributes.decorationPattern = 'Fangs-Fringe'
          break;
        case 7 :
          state.setDecoration.fangs = false;
          state.setDecoration.wings = true;
          state.setDecoration.fringe = true;
          //console.log('Fangs-Fringe');
          state.dnaOwlCat.attributes.decorationPattern = 'Wings-Fringe'
          break;
      }
    },
    SET_NEW_NOSE_COLOR(state, newNoseColor){
      state.dnaOwlCat.attributes.decorationNoseColor = newNoseColor;
    },
    SET_NEW_FRINGE_COLOR(state, newFringeColor){  
      state.dnaOwlCat.attributes.decorationFringeColor = newFringeColor;
    },
    SET_NEW_ANIMATION(state, newAnimation){
      switch (newAnimation) {
        case 1 : 
          state.setAnimation.moveHead = false; 
          state.setAnimation.moveTail = false;
          state.setAnimation.moveWings = false; 
          state.setAnimation.moveTonge = false; 
          state.setAnimation.nodHead = false; 
          state.setAnimation.moveNose = false; 
          state.dnaOwlCat.attributes.animation = 'None';
          break;
        case 2 :
          state.setAnimation.moveHead = true; 
          state.setAnimation.moveTail = false;
          state.setAnimation.moveWings = false; 
          state.setAnimation.moveTonge = false; 
          state.setAnimation.nodHead = false; 
          state.setAnimation.moveNose = false; 
          state.dnaOwlCat.attributes.animation = 'Head';
          break;
        case 3 :
          state.setAnimation.moveHead = false; 
          state.setAnimation.moveTail = true;
          state.setAnimation.moveWings = false; 
          state.setAnimation.moveTonge = false; 
          state.setAnimation.nodHead = false; 
          state.setAnimation.moveNose = false;  
          state.dnaOwlCat.attributes.animation = 'Tail';
          break;
        case 4 :
          state.setAnimation.moveHead = false; 
          state.setAnimation.moveTail = false;
          state.setAnimation.moveWings = true; 
          state.setAnimation.moveTonge = false; 
          state.setAnimation.nodHead = false; 
          state.setAnimation.moveNose = false; 
          state.dnaOwlCat.attributes.animation = 'Wings';
          break;
        case 5 :
          state.setAnimation.moveHead = false; 
          state.setAnimation.moveTail = false;
          state.setAnimation.moveWings = false; 
          state.setAnimation.moveTonge = true; 
          state.setAnimation.nodHead = false; 
          state.setAnimation.moveNose = false; ;
          state.dnaOwlCat.attributes.animation = 'Tonge';
          break;
        case 6 :
          state.setAnimation.moveHead = false; 
          state.setAnimation.moveTail = false;
          state.setAnimation.moveWings = false; 
          state.setAnimation.moveTonge = false; 
          state.setAnimation.nodHead = true; 
          state.setAnimation.moveNose = false;            
          state.dnaOwlCat.attributes.animation = 'Nod';
          break;
        case 7 :
          state.setAnimation.moveHead = false; 
          state.setAnimation.moveTail = false;
          state.setAnimation.moveWings = false; 
          state.setAnimation.moveTonge = false; 
          state.setAnimation.nodHead = false; 
          state.setAnimation.moveNose = true;  
          state.dnaOwlCat.attributes.animation = 'Nose';
          break;
      }
    },
    SET_PAGE_COLORS(state){
      state.pageSelector.pageColors = true;
      state.pageSelector.pageCattributes = false;
    },
    SET_PAGE_CATTRIBUTES(state){
      state.pageSelector.pageColors = false;
      state.pageSelector.pageCattributes = true;
    },
    DEFAULT_OWLCAT(state){
      state.dnaOwlCat.color.headColor = 71;
      state.dnaOwlCat.color.mouthColor = 13;
      state.dnaOwlCat.color.eyesColor = 96;
      state.dnaOwlCat.color.earsColor = 20;

      state.dnaOwlCat.attributes.eyesShape = 'Normal';
      state.dnaOwlCat.attributes.decorationPattern = 'Basic';
      state.dnaOwlCat.attributes.decorationNoseColor = 13;
      state.dnaOwlCat.attributes.decorationFringeColor = 20;
      state.dnaOwlCat.attributes.animation = 'None';
      state.dnaOwlCat.attributes.lastNum = 1;
    }
  },
  actions: {
    setNewHeadColor({ commit }, newColor){
      commit('SET_NEW_HEADCOLOR', newColor);
    },
    setNewMouthColor({ commit }, newColor){
      commit('SET_NEW_MOUTHCOLOR', newColor);
    },
    setNewEyesColor({ commit }, newColor){
      commit('SET_NEW_EYESCOLOR', newColor);
    },
    setNewEarsColor({ commit }, newColor){
      commit('SET_NEW_EARSCOLOR', newColor);
    },
    setNewEyesShape({ commit }, newEyesShape){
      commit('SET_NEW_EYESSHAPE', newEyesShape );
    },
    setNewDecoration({commit}, newDecoration){
      commit('SET_NEW_DECORATION', newDecoration);
    },
    setNewNoseColor({ commit }, newNoseColor){
      commit('SET_NEW_NOSE_COLOR', newNoseColor);
    },
    setNewFringeColor({ commit }, newFringeColor){
      commit('SET_NEW_FRINGE_COLOR', newFringeColor);
    },
    setNewAnimation({ commit }, newAnimation){
      commit('SET_NEW_ANIMATION', newAnimation);
    },
    setPageColors({ commit }){
      commit('SET_PAGE_COLORS');
    },
    setPageCattributes({ commit }){
      commit('SET_PAGE_CATTRIBUTES');
    },
    defaultOwlCat({ commit }){
      commit('DEFAULT_OWLCAT');
    }
  },
  getters: {
    getHeadColor(state){ //
       return state.palette[state.dnaOwlCat.color.headColor];
    },
    getMouthColor(state){
      return state.palette[state.dnaOwlCat.color.mouthColor];
    },
    getEyesColor(state){
      return state.palette[state.dnaOwlCat.color.eyesColor];
    },
    getEarsColor(state){
      return state.palette[state.dnaOwlCat.color.earsColor];
    },
    getHeadColorDex(state){ //
      return state.dnaOwlCat.color.headColor;
    },
    getMouthColorDex(state){
      return state.dnaOwlCat.color.mouthColor;
    },
    getEyesColorDex(state){
      return state.dnaOwlCat.color.eyesColor;
    },
    getEarsColorDex(state){
      return state.dnaOwlCat.color.earsColor;
    },
    getEyesShapeDex(state){
      switch (state.dnaOwlCat.attributes.eyesShape) {
        case 'Normal' : 
          return 1;
        case 'Sleepy' : 
          return 2;
        case 'Ungry' : 
          return 3;
        case 'Right Sleepy' : 
          return 4;
        case 'Left Sleepy' : 
          return 5;
        case 'Right Ungry' : 
          return 6;
        case 'Left Ungry' : 
          return 7;
      }
    },
    getEyesShape(state){
      return state.dnaOwlCat.attributes.eyesShape;
    },
    getDecorationDex(state){
      switch (state.dnaOwlCat.attributes.decorationPattern) {
        case 'Basic' : 
          return 1;
        case 'Fangs' : 
          return 2;
        case 'Wings' : 
          return 3;
        case 'Fringe' : 
          return 4;
        case 'Fangs-Wings' : 
          return 5;
        case 'Fangs-Fringe' : 
          return 6;
        case 'Wings-Fringe' : 
          return 7;
      }
    },
    getDecoration(state){
      return state.dnaOwlCat.attributes.decorationPattern;
    },
    getNoseColorDex(state){
      return state.dnaOwlCat.attributes.decorationNoseColor;
    },
    getNoseColor(state){
      return state.palette[state.dnaOwlCat.attributes.decorationNoseColor];
    },
    getFringeColorDex(state){
      return state.dnaOwlCat.attributes.decorationFringeColor;
    },
    getFringeColor(state){
      return state.palette[state.dnaOwlCat.attributes.decorationFringeColor];
    },
    getAnimationDex(state){
      switch (state.dnaOwlCat.attributes.animation) {
        case 'None' : 
          return 1;
        case 'Head' : 
          return 2;
        case 'Tail' : 
          return 3;
        case 'Wings' : 
          return 4;
        case 'Tonge' : 
          return 5;
        case 'Nod' : 
          return 6;
        case 'Nose' : 
          return 7;
      }
    },
    getAnimation(state){
      return state.dnaOwlCat.attributes.animation;
    },
    getLastNum(state){
      return state.dnaOwlCat.attributes.lastNum;
    },
    getPageColors(state){
      return state.pageSelector.pageColors;
    },
    getPageCattributes(state){
      return state.pageSelector.pageCattributes;
    }
  }
};