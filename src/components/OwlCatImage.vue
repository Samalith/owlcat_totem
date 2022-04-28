<template>
  <div class="container p-5" style="margin-top: 0vh;margin-bottom: 10vh;">
    <div align="center">
      <h1 class="c-white">OwlCats' Factory</h1>
      <p class="c-white">Create your custom OwlCat totem</p>
    </div>
    <div class="row">
      <div class="col-lg-4 catBox m-2 light-b-shadow">
        <!-- ********* OwlCat Image *********** -->
        <div class="cat">
          <div
            class="head-cat" 
            :class="{ movingHead: $store.getters['owlCatDesign/getAnimationDex'] == 2, nodingHead: $store.getters['owlCatDesign/getAnimationDex'] == 6 }"
            :style="{ background: $store.getters['owlCatDesign/getHeadColor'] }"
            style="z-index: 3"
          >
            <div class="ears" style="z-index: 1">              
              <div
                class="ear left-ear"
                :style="{ background: $store.getters['owlCatDesign/getEarsColor'] }"
              >
                <div class="ear-inside"></div>
              </div>
              <div
                class="ear right-ear"
                :style="{ background: $store.getters['owlCatDesign/getEarsColor'] }"
              >
                <div class="ear-inside"></div>
              </div>             
            </div>
            <div class="eyes" style="z-index: 1">              
              <div class="eye left-eye">
                <div
                  class="pupils"
                  :style="{ background: $store.getters['owlCatDesign/getEyesColor'] }"
                >
                  <div class="iris"></div>
                  <div class="eyelidUp" style="z-index: 2" v-if="$store.getters['owlCatDesign/getEyesShapeDex'] == 2" ></div>
                  <div class="eyelidUp" style="z-index: 2" v-if="$store.getters['owlCatDesign/getEyesShapeDex'] == 4" ></div>
                  <div class="eyelidDown" style="z-index: 2" v-if="$store.getters['owlCatDesign/getEyesShapeDex'] == 3"></div>
                  <div class="eyelidDown" style="z-index: 2" v-if="$store.getters['owlCatDesign/getEyesShapeDex'] == 6" ></div>
                </div>
              </div>
              <div class="eye right-eye">
                <div
                  class="pupils"
                  :style="{ background: $store.getters['owlCatDesign/getEyesColor'] }"
                >
                  <div class="iris"></div>
                  <div class="eyelidUp" style="z-index: 2" v-if="$store.getters['owlCatDesign/getEyesShapeDex'] == 2"></div>
                  <div class="eyelidUp" style="z-index: 2" v-if="$store.getters['owlCatDesign/getEyesShapeDex'] == 5"></div>
                  <div class="eyelidDown" style="z-index: 2" v-if="$store.getters['owlCatDesign/getEyesShapeDex'] == 3"></div>
                  <div class="eyelidDown" style="z-index: 2" v-if="$store.getters['owlCatDesign/getEyesShapeDex'] == 7"></div>
                </div>
              </div>                      
            </div>
            <div
              class="nose"
              :style="{ background: $store.getters['owlCatDesign/getNoseColor'] }"
              :class="{ movingNose: $store.getters['owlCatDesign/getAnimationDex'] == 7 }"
              style="z-index: 2"
            />
            <div class="mouth" style="z-index: 2">
              <div
                :class="{ movingTonge: $store.getters['owlCatDesign/getAnimationDex'] == 5 }"
                class="tongue"
                style="z-index: 2"
              />
            </div>
            <div
              class="cat__mouth-contour"
              style="z-index: 1"
              :style="{ background: $store.getters['owlCatDesign/getMouthColor'] }"
            />
            <div class="furs" v-if="$store.getters['owlCatDesign/getDecorationDex'] == 4" >
              <div class="fur left-fur" :style="{ background: $store.getters['owlCatDesign/getFringeColor'] }"></div>
              <div class="fur right-fur" :style="{ background: $store.getters['owlCatDesign/getFringeColor'] }"></div>
            </div>
            <div class="furs" v-else-if="$store.getters['owlCatDesign/getDecorationDex'] == 6" >
              <div class="fur left-fur" :style="{ background: $store.getters['owlCatDesign/getFringeColor'] }"></div>
              <div class="fur right-fur" :style="{ background: $store.getters['owlCatDesign/getFringeColor'] }"></div>
            </div>
            <div class="furs" v-else-if="$store.getters['owlCatDesign/getDecorationDex'] == 7" >
              <div class="fur left-fur" :style="{ background: $store.getters['owlCatDesign/getFringeColor'] }"></div>
              <div class="fur right-fur" :style="{ background: $store.getters['owlCatDesign/getFringeColor'] }"></div>
            </div>
            <!-- v-else-if="$store.getters['owlCatDesign/getDecorationDex'] == 2" -->
            <div class="fangs" v-if="$store.getters['owlCatDesign/getDecorationDex'] == 2"  style="z-index: 2">
              <div class="fang left-fang"></div>
              <div class="fang right-fang"></div>
            </div>
            <div class="fangs" v-else-if="$store.getters['owlCatDesign/getDecorationDex'] == 5" style="z-index: 2">
              <div class="fang left-fang"></div>
              <div class="fang right-fang"></div>
            </div>
            <div class="fangs" v-else-if="$store.getters['owlCatDesign/getDecorationDex'] == 6"   style="z-index: 2">
              <div class="fang left-fang"></div>
              <div class="fang right-fang"></div>
            </div>            
          </div>
          <div class="body-cat" style="z-index: 2" :style="{ background: $store.getters['owlCatDesign/getHeadColor'] }">
            <div class="breast-cat" :style="{ background: $store.getters['owlCatDesign/getMouthColor'] }"/>
            <div class="paws left-paw" :style="{ background: $store.getters['owlCatDesign/getEarsColor'] }"/>
            <div class="paws right-paw" :style="{ background: $store.getters['owlCatDesign/getEarsColor'] }"/>
            <!-- <div class="paws right-paw" style="left: 148px;"></div></div>  like this as well -->
          </div>
          <div
            class="tail"
            :class="{ movingTail: $store.getters['owlCatDesign/getAnimationDex'] == 3 }"
            :style="{ background: $store.getters['owlCatDesign/getMouthColor'] }"
            style="z-index: 1"
          />
          <div
            class="wings"
            v-if="$store.getters['owlCatDesign/getDecorationDex'] == 3"
            :class="{ movingWings: $store.getters['owlCatDesign/getAnimationDex'] == 4 }"
            style="z-index: 1"
          >
            <div
              class="wing left-wing"
              :style="{ background: $store.getters['owlCatDesign/getEarsColor'] }"
            >
              <div class="wing-inside1"></div>
              <div class="wing-inside2"></div>
              <div class="wing-inside3"></div>
            </div>
            <div
              class="wing right-wing"
              :style="{ background: $store.getters['owlCatDesign/getEarsColor'] }"
            >
              <div class="wing-inside1"></div>
              <div class="wing-inside2"></div>
              <div class="wing-inside3"></div>
            </div>
          </div>
          <div
            class="wings"
            v-else-if="$store.getters['owlCatDesign/getDecorationDex'] == 5"
            :class="{ movingWings: $store.getters['owlCatDesign/getAnimationDex'] == 4 }"
            style="z-index: 1"
          >
            <div
              class="wing left-wing"
              :style="{ background: $store.getters['owlCatDesign/getEarsColor'] }"
            >
              <div class="wing-inside1"></div>
              <div class="wing-inside2"></div>
              <div class="wing-inside3"></div>
            </div>
            <div
              class="wing right-wing"
              :style="{ background: $store.getters['owlCatDesign/getEarsColor'] }"
            >
              <div class="wing-inside1"></div>
              <div class="wing-inside2"></div>
              <div class="wing-inside3"></div>
            </div>
          </div>
          <div
            class="wings"
            v-else-if="$store.getters['owlCatDesign/getDecorationDex'] == 7"
            :class="{ movingWings: $store.getters['owlCatDesign/getAnimationDex'] == 4 }"
            style="z-index: 1"
          >
            <div
              class="wing left-wing"
              :style="{ background: $store.getters['owlCatDesign/getEarsColor'] }"
            >
              <div class="wing-inside1"></div>
              <div class="wing-inside2"></div>
              <div class="wing-inside3"></div>
            </div>
            <div
              class="wing right-wing"
              :style="{ background: $store.getters['owlCatDesign/getEarsColor'] }"
            >
              <div class="wing-inside1"></div>
              <div class="wing-inside2"></div>
              <div class="wing-inside3"></div>
            </div>
          </div>
        </div>
        <!-- ******************** -->        
        <br>
        <!-- ********* OwlCat DNA *********** -->
        <owlcat-dna />
        <!-- ******************** -->
      </div>
        <!-- ********** OwlCat Color ********** -->
        <owlcat-color />
        <!-- ******************** -->
    <br>
    </div>
    <div>
      <div>
        <owlcat-buttons/>
        <bc-buttons/>
      </div>
      <div class="cat-information" v-if="$store.getters['bcComm/getShowLabel']">
        <strong>
          Owner: <br> {{ $store.getters['bcComm/getCreationLabel'].owner }} <br>
          OwlCatId: {{ $store.getters['bcComm/getCreationLabel'].owlCatId }},
          MumId: {{ $store.getters['bcComm/getCreationLabel'].mumId }},
          DadId: {{ $store.getters['bcComm/getCreationLabel'].dadId }} <br>
          Genes: {{ $store.getters['bcComm/getCreationLabel'].genes }}
        </strong>
      </div>  
    </div>
  </div>
</template>

<script>
import owlcatColor from '@/components/OwlCatColor.vue';
import owlcatDna from '@/components/OwlCatDNA.vue';
import owlcatButtons from '@/components/ButtonsOwlCat.vue';
import bcButtons from '@/components/ButtonsBC.vue';

export default {
  name: 'owlcat-image',
  components: {
    'owlcat-color': owlcatColor,
    'owlcat-dna': owlcatDna,
    'owlcat-buttons': owlcatButtons,
    'bc-buttons': bcButtons
    //'owlcat-color': require('@/components/OwlCatColor.vue').default,
    //'owlcat-dna': require('@/components/OwlCatDNA.vue').default,
    //'owlcat-buttons': require('@/components/ButtonsOwlCat.vue').default,
    //'bc-buttons': require('@/components/ButtonsBC.vue').default
  }
}
</script>

<style lang="scss" scoped>
  .m-2 {
    margin: 0.5rem !important;
  }

  .c-white {
    color: white;
  }

  .catBox {
      background: #e2efff;
      border-radius: 10px;
      padding-top: 50px;
      padding-left: 75px;
      padding-bottom: 0px;
  }

  .head-cat{
    position: relative;
    background:#FFE07A;
    width: 198px;
    height: 177px;
    border-radius: 40% 40% 74% 71%;
  }

  .eyes{
    position: relative;

    .eye{
      border-radius: 50%;
      background: orange;
      width: 50px;
      height: 50px;
      position: absolute;
      top: 55px;

      &.left-eye{
        transform: scale(1, 1) rotate(0deg);
        left:24px;
      }

      &.right-eye{
        left: 122px;
      }
    }

    .pupils{
      background: deepskyblue;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      position: absolute;
      top: 7px;
      left: 8px;
    }

    .iris{
      background: darkblue;
      width: 15px;
      height: 35px;
      border-radius: 50%;
      position: absolute;
      top: 0px;
      left: 9px;
    }

    .eyelidUp{
      background: orange;
      width: 35px;
      height: 19px;
      border-radius: 40%;
      position: absolute;
      top: 0px;
      left: 0px;
    }

    .eyelidDown{
      background: orange;
      width: 38px;
      height: 18px;
      border-radius: 40%;
      position: absolute;
      top: 17px;
      left: -2px;
    }
  }

  .ears{
    position: relative;

    .ear{
      border-radius: 90% 0 90% 0;
      background:#C99942;
      height: 100px;
      width: 100px;
      position: absolute;

      &.left-ear{
        transform: scale(1, -1) rotate(0deg);
        left: 0;
      }

      &.right-ear{
        left: 100px;
      }
    }

    .ear-inside{
      border-radius: 90% 0 90% 0;
      background: black;
      height: 85px;
      width: 64px;
      position: absolute;
      top: 8px;
      left: 16px;
    }    
  }

  .cat__mouth-contour {
    position: relative;
    top: 124px;
    left: 33px;
    background: #575757;
    height: 47px;
    width: 130px;
    border-radius: 55% 55% 60% 60%;
  }
  
  .mouth{
    background: black;
    border-radius: 30% 30% 80% 80%;
    width: 62px;
    height: 30px;
    margin: 25px;
    position: absolute;
    top: 109px;
    left: 43px;

    .tongue{
      background: deeppink;
      border-radius: 25% 25% 80% 80%;
      width: 38px;
      height: 30px;
      margin: 25px;
      position: absolute;
      top: -18px;
      left: -13px;
    }
  }

  .nose{
    background: black;
    border-radius: 25% 25% 80% 80%;
    width: 30px;
    height: 30px;
    margin: 25px;  
    position: absolute;
    top: 75px;
    left: 59px;
  }

  .body-cat{
    background:#FFE07A;
    width: 200px;
    height: 200px;
    border-radius: 100% 100% 50% 50%;
    position: relative;
    top: -47px;
    left: -1px;
    display:flex;

    .breast-cat{
      background: #575757;
      width: 150px;
      height: 100px;
      border-radius: 100% 100% 50% 50%;
      position: relative;
      top: 93px;
      left: 42px;
    }

    .paws{
      background: #C99942;
      width: 47px;
      height: 126px;
      border-radius: 50% 50% 100% 100%;
      position: relative;
      top: 74px;

      &.left-paw{
        left: -62px;
      }

      &.right-paw{
        left: -54px;
      }
    }
  }

  .tail{
    background: #575757;
    width: 18px;
    height: 100px;
    border-radius: 100% 100% 50% 50%;
    position: relative;
    top: -165px;
    left: 198px;
    transform: scale(1, 1) rotate(41deg);
  }

  .wings {
    position: relative;

    .wing{
      background:#C99942;
      height: 100px;
      width: 100px;
      border-radius: 90% 0 90% 0;
      position: absolute;
      top: -358px;

      &.left-wing {
        transform: scale(1, -1) rotate(0deg);
        left: -38px;

        .wing-inside1{
          border-radius: 90% 0 90% 0;
          background: black;
          height: 12px;
          width: 86px;
          position: relative;
          top: 39px;
          left: -43px;
          transform: rotate(68deg);
        }

        .wing-inside2{
          border-radius: 90% 0 90% 0;
          background: black;
          height: 12px;
          width: 66px;
          position: relative;
          top: 23px;
          left: -19px;
          transform: rotate(68deg);
        }

        .wing-inside3{
          border-radius: 90% 0 90% 0;
          background: black;
          height: 12px;
          width: 44px;
          position: relative;
          top: 1px;
          left: 3px;
          transform: rotate(68deg);
        }
      }

      &.right-wing {
        left: 136px;

        .wing-inside1{
          border-radius: 90% 0 90% 0;
          background: black;
          height: 12px;
          width: 86px;
          position: relative;
          top: 49px;
          left: 58px;
          transform: rotate(68deg);
        }

        .wing-inside2{
          border-radius: 90% 0 90% 0;
          background: black;
          height: 12px;
          width: 66px;
          position: relative;
          top: 41px;
          left: 55px;
          transform: rotate(68deg);
        }

        .wing-inside3{
          border-radius: 90% 0 90% 0;
          background: black;
          height: 12px;
          width: 44px;
          position: relative;
          top: 38px;
          left: 55px;
          transform: rotate(68deg);
        }
      }
    }
  }

  .furs{
    position: relative;

    .fur {
      background: #C99942;
      height: 40px;
      width: 10px;
      border-radius: 50% 50% 100% 100%;
      position: absolute;
      top: -46px;

      &.left-fur{
        left: 102px;
      }

      &.right-fur{
        left: 89px;
      }
    }
  }
  
  .fangs{
    position: relative;

    .fang {
      background: white;
      height: 12px;
      width: 5px;
      border-radius: 50% 50% 100% 100%;
      position: absolute;
      top: 92px;

      &.left-fang{
        left: 79px;
      }

      &.right-fang{
        left: 114px;
      }
    }
  }

  .cat-information{
      position: relative;
      left: -0.6%;
      margin-top: 9px;
      width: 95.9%;
      padding: 20px;  
      background-color: white;
      border-radius: 5px;
      border: 1px solid #DFE3E3;
      box-sizing: border-box;
      font-size: 12px;
      
  }

  @keyframes moveRound {
    0% {
      transform: rotate(0deg);
    }
    
    30% {
      transform: rotate(5deg);
    }

    60% {
      transform: rotate(-5deg);
    }

    100% {
      transform: rotate(0deg);
    }

  }
  /* Tail */
  @keyframes moveRound_I {
    0% {
      transform: rotate(41deg);
    }
    
    30% {
      transform: rotate(51deg);
    }

    60% {
      transform: rotate(71deg);
    }

    100% {
      transform: rotate(41deg);
    }

  }

  @keyframes moveUpDown {
    0% {
      transform: translate(0px,0px);
    }
    
    30% {
      transform: translate(0px,15px);
    }

    60% {
      transform: translate(0px,-15px);
    }

    100% {
      transform: translate(0px,0px);
    }
  }
  /* Tonge */
  @keyframes moveUpDown_I {
    0% {
      transform: translate(0px,0px);
    }
    
    30% {
      transform: translate(0px,5px);
    }

    60% {
      transform: translate(0px,-5px);
    }

    100% {
      transform: translate(0px,0px);
    }
  }

  @keyframes moveLeftRight {
    0% {
      transform: translate(0px,0px);
    }
    
    30% {
      transform: translate(-3px,-1px);
    }

    60% {
      transform: translate(-1px,-3px);
    }

    100% {
      transform: translate(0px,0px);
    }
  }

  .movingHead {
    animation: moveRound 5s infinite;
  }

  .movingTail {
    animation: moveRound_I 5s infinite;
  }

  .movingTonge {
    animation: moveUpDown_I 5s infinite;
  }

  .movingWings {
    animation: moveUpDown 5s infinite;
  }

  .nodingHead {
    animation: moveUpDown 5s infinite;
  }

  .movingNose {
    animation: moveLeftRight 1s infinite;
  }

</style>