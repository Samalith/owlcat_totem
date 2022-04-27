import Vue from 'vue';
import Vuex from 'vuex';
import { bcComm } from './modules/bcComm';
import { owlCatDesign } from './modules/owlCatDesign';
import { owlCatTotem } from './modules/owlCatTotem';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    bcComm,
    owlCatDesign,
    owlCatTotem
  }
});

