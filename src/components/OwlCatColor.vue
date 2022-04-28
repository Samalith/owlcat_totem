<template>
  <div class="col-lg-7 cattributes m-2 light-b-shadow">
    <page-buttons/>
    <!-- Cat colors -->
    <div class="catColors" v-if="$store.getters['owlCatDesign/getPageColors']">
      <div class="form-group">
        <!-- Head | Body -->
        <label for="formControlRange">
          <b>Head | Body</b>
          <span class="badge badge-dark ml-2" id="headcode">
            CODE: {{ $store.getters['owlCatDesign/getHeadColorDex'] }}
          </span>
        </label>
        <vue-numeric-input
          class="form-control-range"          
          :min="10"
          :max="89"
          :step="1"
          align="center"
          size="small"
          v-model.number="newColorHead"          
        />
        <input 
          class="form-control-range" 
          type="range"
          min="10"
          max="89"
          step="1"
          v-model.number="newColorHead"          
        >
        <!-- Mouth | Belly | Tail -->
        <label for="formControlRange">
          <b>Mouth | Belly | Tail</b>
          <span class="badge badge-dark ml-2" id="mouthcode">
            CODE: {{ $store.getters['owlCatDesign/getMouthColorDex'] }}
          </span>
        </label>
       <vue-numeric-input
          class="form-control-range"          
          :min="10"
          :max="98"
          :step="1"
          align="center"
          size="small"
          v-model.number="newColorMouth"
        />
        <input 
          class="form-control-range" 
          type="range"
          min="10"
          max="98"
          step="1"
          v-model.number="newColorMouth"
        >
        <!-- Eyes Color -->
        <label for="formControlRange">
          <b>Eyes Color</b>
          <span class="badge badge-dark ml-2" id="eyescode">
            CODE: {{ $store.getters['owlCatDesign/getEyesColorDex'] }}
          </span>
        </label>
        <vue-numeric-input
          class="form-control-range"          
          :min="10"
          :max="98"
          :step="1"
          align="center"
          size="small"
          v-model.number="newColorEyes"
        />
        <input 
          class="form-control-range" 
          type="range"
          min="10"
          max="98"
          step="1"
          v-model.number="newColorEyes"
        >
        <!-- Ears | Paw -->
        <label for="formControlRange">
          <b>Ears | Paw | Wings</b>
          <span class="badge badge-dark ml-2" id="earscode">
            CODE: {{ $store.getters['owlCatDesign/getEarsColorDex'] }}
          </span>
        </label>
        <vue-numeric-input
          class="form-control-range"          
          :min="10"
          :max="98"
          :step="1"
          align="center"
          size="small"
          v-model.number="newColorEars"
        />
        <input 
          class="form-control-range" 
          type="range"
          min="10"
          max="98"
          step="1"
          v-model.number="newColorEars"
        >
      </div>
    </div>
    <div class="catAttributes" v-if="$store.getters['owlCatDesign/getPageCattributes']">
      <div class="form-group">
        <!-- Eyes Shape -->
        <label for="formControlRange">
          <b>Eyes Shape</b>
          <span class="badge badge-dark ml-2" id="eyesShape">
            CODE: {{ $store.getters['owlCatDesign/getEyesShape'] }}
          </span>
        </label>
        <vue-numeric-input
          class="form-control-range"          
          :min="1"
          :max="7"
          :step="1"
          align="center"
          size="small"
          v-model.number="newEyesShape"
        />
        <input 
          class="form-control-range" 
          type="range"
          min="1"
          max="7"
          step="1"
          v-model.number="newEyesShape"
        >
        <!-- Decoration Pattern -->
        <label for="formControlRange">
          <b>Decoration Pattern</b>
          <span class="badge badge-dark ml-2" id="decorationPattern">
            CODE: {{ $store.getters['owlCatDesign/getDecoration'] }}
          </span>
        </label>
        <vue-numeric-input
          class="form-control-range"          
          :min="1"
          :max="7"
          :step="1"
          align="center"
          size="small"
          v-model.number="newDecoration"
        />
        <input 
          class="form-control-range" 
          type="range"
          min="1"
          max="7"
          step="1"
          v-model.number="newDecoration"
        >
        <div class="row">
          <div class="column">
            <!-- Fang's Color -->
            <label for="formControlRange">
              <b>Nose's Color</b>
              <span class="badge badge-dark ml-2" id="NoseColor">
                CODE: {{ $store.getters['owlCatDesign/getNoseColorDex'] }}
              </span>
            </label>
            <vue-numeric-input
              class="form-control-range"
              :min="10"
              :max="98"
              :step="1"
              align="center"
              size="small"
              v-model.number="newNoseColor"
            />
            <input
              class="form-control-range"
              type="range"
              min="10"
              max="98"
              step="1"
              v-model.number="newNoseColor"
            >
          </div>
          <div class="column">
            <!-- Fringe's Color -->
            <label for="formControlRange">
              <b>Fringe's Color</b>
              <span class="badge badge-dark ml-2" id="FringeColor">
                CODE: {{ $store.getters['owlCatDesign/getFringeColorDex'] }}
              </span>
            </label>
            <vue-numeric-input
              class="form-control-range"
              :min="10"
              :max="98"
              :step="1"
              align="center"
              size="small"
              v-model.number="newFringeColor"
            />
            <input
              class="form-control-range"
              type="range"
              min="10"
              max="98"
              step="1"
              v-model.number="newFringeColor"
            >
          </div>
        </div>
        <!-- Animation -->
        <label for="formControlRange">
          <b>Animation</b>
          <span class="badge badge-dark ml-2" id="animation">
            CODE: {{ $store.getters['owlCatDesign/getAnimation'] }}
          </span>
        </label>
        <vue-numeric-input
          class="form-control-range"
          :min="1"
          :max="7"
          :step="1"
          align="center"
          size="small"
          v-model.number="newAnimation"
        />
        <input
          class="form-control-range"
          type="range"
          min="1"
          max="7"
          step="1"
          v-model.number="newAnimation"
        >
      </div>
    </div>
  </div>
</template>

<script>
import VueNumericInput from 'vue-numeric-input';
import pageButtons from '@/components/ButtonsPage.vue';

export default {
  name:'owlcat-color',
  computed: {
    newColorHead: {
      get(){
        return this.$store.getters['owlCatDesign/getHeadColorDex'];
      },
      set(newColorHead){
        this.$store.dispatch('owlCatDesign/setNewHeadColor', newColorHead);
      }
    },
    newColorMouth: {
      get(){
        return this.$store.getters['owlCatDesign/getMouthColorDex'];
      },
      set(newColorMouth){
        this.$store.dispatch('owlCatDesign/setNewMouthColor', newColorMouth);
      }
    },
    newColorEyes: {
      get(){
        return this.$store.getters['owlCatDesign/getEyesColorDex'];
      },
      set(newColorEyes){
        this.$store.dispatch('owlCatDesign/setNewEyesColor', newColorEyes);
      }
    },
    newColorEars: {
      get(){
        return this.$store.getters['owlCatDesign/getEarsColorDex'];
      },
      set(newColorEars){
        this.$store.dispatch('owlCatDesign/setNewEarsColor', newColorEars);
      }
    },
    newEyesShape: {
      get(){
        return this.$store.getters['owlCatDesign/getEyesShapeDex'];
      },
      set(newEyesShape){
        this.$store.dispatch('owlCatDesign/setNewEyesShape', newEyesShape);
      }
    },
    newDecoration: {
      get(){
        return this.$store.getters['owlCatDesign/getDecorationDex'];
      },
      set(newDecoration){
        this.$store.dispatch('owlCatDesign/setNewDecoration', newDecoration);
      }
    },
    newNoseColor: {
      get(){
        return this.$store.getters['owlCatDesign/getNoseColorDex'];
      },
      set(newNoseColor){
        this.$store.dispatch('owlCatDesign/setNewNoseColor', newNoseColor);
      }
    },
    newFringeColor: {
      get(){
        return this.$store.getters['owlCatDesign/getFringeColorDex'];
      },
      set(newFringeColor){
        this.$store.dispatch('owlCatDesign/setNewFringeColor', newFringeColor);
      }
    },
    newAnimation: {
      get(){
        return this.$store.getters['owlCatDesign/getAnimationDex'];
      },
      set(newAnimation){
        this.$store.dispatch('owlCatDesign/setNewAnimation', newAnimation);
      }
    }
  },
  components:{
    VueNumericInput,
    'page-buttons': pageButtons
    //'page-buttons': require('@/components/ButtonsPage.vue').default
  }
}
</script>

<style lang="scss" scoped>
  .col-lg-7 {
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
  }

  .cattributes {
      padding: 25px;
      background-color: #ededed;
      border-radius: 10px;
  }

  .m-2 {
    margin: 0.5rem !important;
  }

  .light-b-shadow {
    box-shadow: 0px 5px 7px 0px #444444;
  }

  .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, 
    background-color 0.15s ease-in-out, 
    border-color 0.15s ease-in-out, 
    box-shadow 0.15s ease-in-out;
    width: 97px;
    height: 18px;
  }

  .badge-dark {
    color: #fff;
    background-color: #343a40;
  }

  .ml-2 {
    margin-left: 0.5rem !important;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-control-range {
    display: block;
    width: 100%;
  }
  /* Create two equal columns that floats next to each other */
  .column {
    float: left;
    width: 50%;
    padding: 10px;
  }
  /* Clear floats after the columns */
  .row:after {
    display: table;
    clear: both;
  }
</style>