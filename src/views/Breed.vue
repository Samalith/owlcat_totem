<template>
  <div class="breed-zone">
    <div class="tittle">
      <h1>OwlCats breeding</h1>
    </div>
    <div class="parents-container-labels">
      <div><label class="label-1" for="dame"><strong>Dame</strong></label></div>
      <div><label class="label-2" for="sire"><strong>Sire</strong></label></div>
    </div>
    <div class="parents-container">
      <div
        @click="updateCatalogue(); selectMamOwlCat();"
        id="dame"
        class="select-panel select-panel-1"
      >
      <div class="select-panel-text">
        <img id="symbol" src="../assets/Interrogation.png" v-if="selectItemMam">
        <h6 v-if="selectItemMam">Select an OwlCat as Dame</h6>
        <div class="item-popup item-popup-mam" v-for="totemComp in owlCatMam" :key="totemComp.id">
          <!-- ********* OwlCat Image *********** -->
          <div class="cat">
              <div
                class="head-cat"
                :class="{ movingHead: totemComp.animation == 2, nodingHead: totemComp.animation == 6 }"
                :style="{ background: totemComp.headColor }"
                style="z-index: 3"
              >
                <div class="ears" style="z-index: 1">
                  <div
                    class="ear left-ear"
                    :style="{ background: totemComp.earsColor }"
                  >
                    <div class="ear-inside"></div>
                  </div>
                  <div
                    class="ear right-ear"
                    :style="{ background: totemComp.earsColor }"
                  >
                    <div class="ear-inside"></div>
                  </div>
                </div>
                <div class="eyes" style="z-index: 1">
                  <div class="eye left-eye">
                    <div
                      class="pupils"
                      :style="{ background: totemComp.eyesColor }"
                    >
                      <div class="iris"></div>
                      <div class="eyelidUp" style="z-index: 2" v-if="totemComp.eyesShape == 2" ></div>
                      <div class="eyelidUp" style="z-index: 2" v-if="totemComp.eyesShape == 4" ></div>
                      <div class="eyelidDown" style="z-index: 2" v-if="totemComp.eyesShape == 3"></div>
                      <div class="eyelidDown" style="z-index: 2" v-if="totemComp.eyesShape == 6" ></div>
                    </div>
                  </div>
                  <div class="eye right-eye">
                    <div
                      class="pupils"
                      :style="{ background: totemComp.eyesColor }"
                    >
                      <div class="iris"></div>
                      <div class="eyelidUp" style="z-index: 2" v-if="totemComp.eyesShape == 2"></div>
                      <div class="eyelidUp" style="z-index: 2" v-if="totemComp.eyesShape == 5"></div>
                      <div class="eyelidDown" style="z-index: 2" v-if="totemComp.eyesShape == 3"></div>
                      <div class="eyelidDown" style="z-index: 2" v-if="totemComp.eyesShape == 7"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="nose"
                  :style="{ background: totemComp.decorationNoseColor }"
                  :class="{ movingNose: totemComp.animation == 7 }"
                  style="z-index: 2"
                />
                <div class="mouth" style="z-index: 2">
                  <div
                    :class="{ movingTonge: totemComp.animation == 5 }"
                    class="tongue"
                    style="z-index: 2"
                  />
                </div>
                <div
                  class="cat__mouth-contour"
                  style="z-index: 1"
                  :style="{ background: totemComp.mouthColor }"
                />
                <div class="furs" v-if="totemComp.decorationPattern == 4" >
                  <div class="fur left-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                  <div class="fur right-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                </div>
                <div class="furs" v-else-if="totemComp.decorationPattern == 6" >
                  <div class="fur left-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                  <div class="fur right-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                </div>
                <div class="furs" v-else-if="totemComp.decorationPattern == 7" >
                  <div class="fur left-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                  <div class="fur right-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                </div>
                <!-- v-else-if="totemComp.DecorationDex'] == 2" -->
                <div class="fangs" v-if="totemComp.decorationPattern == 2"  style="z-index: 2">
                  <div class="fang left-fang"></div>
                  <div class="fang right-fang"></div>
                </div>
                <div class="fangs" v-else-if="totemComp.decorationPattern == 5" style="z-index: 2">
                  <div class="fang left-fang"></div>
                  <div class="fang right-fang"></div>
                </div>
                <div class="fangs" v-else-if="totemComp.decorationPattern == 6"   style="z-index: 2">
                  <div class="fang left-fang"></div>
                  <div class="fang right-fang"></div>
                </div>
              </div>
              <div class="body-cat" style="z-index: 2" :style="{ background: totemComp.headColor }">
                <div class="breast-cat" :style="{ background: totemComp.mouthColor }"/>
                <div class="paws left-paw" :style="{ background: totemComp.earsColor }"/>
                <div class="paws right-paw" :style="{ background: totemComp.earsColor }"/>
                <!-- <div class="paws right-paw" style="left: 148px;"></div></div>  like this as well -->
              </div>
              <div
                class="tail"
                :class="{ movingTail: totemComp.animation == 3 }"
                :style="{ background: totemComp.mouthColor }"
                style="z-index: 1"
              />
              <div
                class="wings"
                v-if="totemComp.decorationPattern == 3"
                :class="{ movingWings: totemComp.animation == 4 }"
                style="z-index: 1"
              >
                <div
                  class="wing left-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
                <div
                  class="wing right-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
              </div>
              <div
                class="wings"
                v-else-if="totemComp.decorationPattern == 5"
                :class="{ movingWings: totemComp.animation == 4 }"
                style="z-index: 1"
              >
                <div
                  class="wing left-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
                <div
                  class="wing right-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
              </div>
              <div
                class="wings"
                v-else-if="totemComp.decorationPattern == 7"
                :class="{ movingWings: totemComp.animation == 4 }"
                style="z-index: 1"
              >
                <div
                  class="wing left-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
                <div
                  class="wing right-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
              </div>
          </div>
          <!-- ******************** -->
          <div class="owlcat-item__label-dnaB" :style="{ color: 'black'}">
            <strong>DNA: {{ totemComp.itemsInfo.genes }}</strong>
          </div>
          <div class="owlcat-item__label-genB" :style="{ color: 'black' }">
            <strong>Gen: {{ totemComp.itemsInfo.generation }}</strong>
          </div>
        </div>
      </div>  
      </div>
      <div
        @click="updateCatalogue(); selectDadOwlCat();"
        id="sire"
        class="select-panel select-panel-2"
      >
      <div class="select-panel-text">
        <img id="symbol" src="../assets/Interrogation.png" v-if="selectItemDad">
        <h6 v-if="selectItemDad">Select an OwlCat as Sire</h6>
        <div class="item-popup item-popup-dad" v-for="totemComp in owlCatDad" :key="totemComp.id">
          <!-- ********* OwlCat Image *********** -->
          <div class="cat">
              <div
                class="head-cat"
                :class="{ movingHead: totemComp.animation == 2, nodingHead: totemComp.animation == 6 }"
                :style="{ background: totemComp.headColor }"
                style="z-index: 3"
              >
                <div class="ears" style="z-index: 1">
                  <div
                    class="ear left-ear"
                    :style="{ background: totemComp.earsColor }"
                  >
                    <div class="ear-inside"></div>
                  </div>
                  <div
                    class="ear right-ear"
                    :style="{ background: totemComp.earsColor }"
                  >
                    <div class="ear-inside"></div>
                  </div>
                </div>
                <div class="eyes" style="z-index: 1">
                  <div class="eye left-eye">
                    <div
                      class="pupils"
                      :style="{ background: totemComp.eyesColor }"
                    >
                      <div class="iris"></div>
                      <div class="eyelidUp" style="z-index: 2" v-if="totemComp.eyesShape == 2" ></div>
                      <div class="eyelidUp" style="z-index: 2" v-if="totemComp.eyesShape == 4" ></div>
                      <div class="eyelidDown" style="z-index: 2" v-if="totemComp.eyesShape == 3"></div>
                      <div class="eyelidDown" style="z-index: 2" v-if="totemComp.eyesShape == 6" ></div>
                    </div>
                  </div>
                  <div class="eye right-eye">
                    <div
                      class="pupils"
                      :style="{ background: totemComp.eyesColor }"
                    >
                      <div class="iris"></div>
                      <div class="eyelidUp" style="z-index: 2" v-if="totemComp.eyesShape == 2"></div>
                      <div class="eyelidUp" style="z-index: 2" v-if="totemComp.eyesShape == 5"></div>
                      <div class="eyelidDown" style="z-index: 2" v-if="totemComp.eyesShape == 3"></div>
                      <div class="eyelidDown" style="z-index: 2" v-if="totemComp.eyesShape == 7"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="nose"
                  :style="{ background: totemComp.decorationNoseColor }"
                  :class="{ movingNose: totemComp.animation == 7 }"
                  style="z-index: 2"
                />
                <div class="mouth" style="z-index: 2">
                  <div
                    :class="{ movingTonge: totemComp.animation == 5 }"
                    class="tongue"
                    style="z-index: 2"
                  />
                </div>
                <div
                  class="cat__mouth-contour"
                  style="z-index: 1"
                  :style="{ background: totemComp.mouthColor }"
                />
                <div class="furs" v-if="totemComp.decorationPattern == 4" >
                  <div class="fur left-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                  <div class="fur right-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                </div>
                <div class="furs" v-else-if="totemComp.decorationPattern == 6" >
                  <div class="fur left-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                  <div class="fur right-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                </div>
                <div class="furs" v-else-if="totemComp.decorationPattern == 7" >
                  <div class="fur left-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                  <div class="fur right-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                </div>
                <!-- v-else-if="totemComp.DecorationDex'] == 2" -->
                <div class="fangs" v-if="totemComp.decorationPattern == 2"  style="z-index: 2">
                  <div class="fang left-fang"></div>
                  <div class="fang right-fang"></div>
                </div>
                <div class="fangs" v-else-if="totemComp.decorationPattern == 5" style="z-index: 2">
                  <div class="fang left-fang"></div>
                  <div class="fang right-fang"></div>
                </div>
                <div class="fangs" v-else-if="totemComp.decorationPattern == 6"   style="z-index: 2">
                  <div class="fang left-fang"></div>
                  <div class="fang right-fang"></div>
                </div>
              </div>
              <div class="body-cat" style="z-index: 2" :style="{ background: totemComp.headColor }">
                <div class="breast-cat" :style="{ background: totemComp.mouthColor }"/>
                <div class="paws left-paw" :style="{ background: totemComp.earsColor }"/>
                <div class="paws right-paw" :style="{ background: totemComp.earsColor }"/>
                <!-- <div class="paws right-paw" style="left: 148px;"></div></div>  like this as well -->
              </div>
              <div
                class="tail"
                :class="{ movingTail: totemComp.animation == 3 }"
                :style="{ background: totemComp.mouthColor }"
                style="z-index: 1"
              />
              <div
                class="wings"
                v-if="totemComp.decorationPattern == 3"
                :class="{ movingWings: totemComp.animation == 4 }"
                style="z-index: 1"
              >
                <div
                  class="wing left-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
                <div
                  class="wing right-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
              </div>
              <div
                class="wings"
                v-else-if="totemComp.decorationPattern == 5"
                :class="{ movingWings: totemComp.animation == 4 }"
                style="z-index: 1"
              >
                <div
                  class="wing left-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
                <div
                  class="wing right-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
              </div>
              <div
                class="wings"
                v-else-if="totemComp.decorationPattern == 7"
                :class="{ movingWings: totemComp.animation == 4 }"
                style="z-index: 1"
              >
                <div
                  class="wing left-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
                <div
                  class="wing right-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
              </div>
          </div>
          <!-- ******************** -->
          <div class="owlcat-item__label-dnaB" :style="{ color: 'black' }">
            <strong>DNA: {{ totemComp.itemsInfo.genes }}</strong>
          </div>
          <div class="owlcat-item__label-genB" :style="{ color: 'black' }">
            <strong>Gen: {{ totemComp.itemsInfo.generation }}</strong>
          </div>
        </div>
      </div>
      </div>
    </div>
    <button id="proceed-button" @click="breedOwlCats">
      Proceed
    </button>
    <popup-window v-if="trigger" :selectOwlCat="selectOwlCat" >
      <template v-slot:totem >
        <div
          v-for="totemComp in catalogueState"
          :key="totemComp.id"
          :totemComp="totemComp"
          @click="selectTotem(totemComp.id)"
          class="item-popup"
        >
          <div class="owlcat-item__label owlcat-item__label-dna">
            <strong>DNA: {{ totemComp.itemsInfo.genes }}</strong>
          </div>
          <!-- ********* OwlCat Image *********** -->
          <div class="cat">
              <div
                class="head-cat"
                :class="{ movingHead: totemComp.animation == 2, nodingHead: totemComp.animation == 6 }"
                :style="{ background: totemComp.headColor }"
                style="z-index: 3"
              >
                <div class="ears" style="z-index: 1">
                  <div
                    class="ear left-ear"
                    :style="{ background: totemComp.earsColor }"
                  >
                    <div class="ear-inside"></div>
                  </div>
                  <div
                    class="ear right-ear"
                    :style="{ background: totemComp.earsColor }"
                  >
                    <div class="ear-inside"></div>
                  </div>
                </div>
                <div class="eyes" style="z-index: 1">
                  <div class="eye left-eye">
                    <div
                      class="pupils"
                      :style="{ background: totemComp.eyesColor }"
                    >
                      <div class="iris"></div>
                      <div class="eyelidUp" style="z-index: 2" v-if="totemComp.eyesShape == 2" ></div>
                      <div class="eyelidUp" style="z-index: 2" v-if="totemComp.eyesShape == 4" ></div>
                      <div class="eyelidDown" style="z-index: 2" v-if="totemComp.eyesShape == 3"></div>
                      <div class="eyelidDown" style="z-index: 2" v-if="totemComp.eyesShape == 6" ></div>
                    </div>
                  </div>
                  <div class="eye right-eye">
                    <div
                      class="pupils"
                      :style="{ background: totemComp.eyesColor }"
                    >
                      <div class="iris"></div>
                      <div class="eyelidUp" style="z-index: 2" v-if="totemComp.eyesShape == 2"></div>
                      <div class="eyelidUp" style="z-index: 2" v-if="totemComp.eyesShape == 5"></div>
                      <div class="eyelidDown" style="z-index: 2" v-if="totemComp.eyesShape == 3"></div>
                      <div class="eyelidDown" style="z-index: 2" v-if="totemComp.eyesShape == 7"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="nose"
                  :style="{ background: totemComp.decorationNoseColor }"
                  :class="{ movingNose: totemComp.animation == 7 }"
                  style="z-index: 2"
                />
                <div class="mouth" style="z-index: 2">
                  <div
                    :class="{ movingTonge: totemComp.animation == 5 }"
                    class="tongue"
                    style="z-index: 2"
                  />
                </div>
                <div
                  class="cat__mouth-contour"
                  style="z-index: 1"
                  :style="{ background: totemComp.mouthColor }"
                />
                <div class="furs" v-if="totemComp.decorationPattern == 4" >
                  <div class="fur left-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                  <div class="fur right-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                </div>
                <div class="furs" v-else-if="totemComp.decorationPattern == 6" >
                  <div class="fur left-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                  <div class="fur right-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                </div>
                <div class="furs" v-else-if="totemComp.decorationPattern == 7" >
                  <div class="fur left-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                  <div class="fur right-fur" :style="{ background: totemComp.decorationFringeColor }"></div>
                </div>
                <!-- v-else-if="totemComp.DecorationDex'] == 2" -->
                <div class="fangs" v-if="totemComp.decorationPattern == 2"  style="z-index: 2">
                  <div class="fang left-fang"></div>
                  <div class="fang right-fang"></div>
                </div>
                <div class="fangs" v-else-if="totemComp.decorationPattern == 5" style="z-index: 2">
                  <div class="fang left-fang"></div>
                  <div class="fang right-fang"></div>
                </div>
                <div class="fangs" v-else-if="totemComp.decorationPattern == 6"   style="z-index: 2">
                  <div class="fang left-fang"></div>
                  <div class="fang right-fang"></div>
                </div>
              </div>
              <div class="body-cat" style="z-index: 2" :style="{ background: totemComp.headColor }">
                <div class="breast-cat" :style="{ background: totemComp.mouthColor }"/>
                <div class="paws left-paw" :style="{ background: totemComp.earsColor }"/>
                <div class="paws right-paw" :style="{ background: totemComp.earsColor }"/>
                <!-- <div class="paws right-paw" style="left: 148px;"></div></div>  like this as well -->
              </div>
              <div
                class="tail"
                :class="{ movingTail: totemComp.animation == 3 }"
                :style="{ background: totemComp.mouthColor }"
                style="z-index: 1"
              />
              <div
                class="wings"
                v-if="totemComp.decorationPattern == 3"
                :class="{ movingWings: totemComp.animation == 4 }"
                style="z-index: 1"
              >
                <div
                  class="wing left-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
                <div
                  class="wing right-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
              </div>
              <div
                class="wings"
                v-else-if="totemComp.decorationPattern == 5"
                :class="{ movingWings: totemComp.animation == 4 }"
                style="z-index: 1"
              >
                <div
                  class="wing left-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
                <div
                  class="wing right-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
              </div>
              <div
                class="wings"
                v-else-if="totemComp.decorationPattern == 7"
                :class="{ movingWings: totemComp.animation == 4 }"
                style="z-index: 1"
              >
                <div
                  class="wing left-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
                <div
                  class="wing right-wing"
                  :style="{ background: totemComp.earsColor }"
                >
                  <div class="wing-inside1"></div>
                  <div class="wing-inside2"></div>
                  <div class="wing-inside3"></div>
                </div>
              </div>
          </div>
          <!-- ******************** -->
          <div class="owlcat-item__label owlcat-item__label-gen">
            <strong>Gen: {{ totemComp.itemsInfo.generation }}</strong>
          </div>
        </div>    
      </template>
    </popup-window>
    <!-- <div>
      Mam: {{ owlCatMam }}
    </div>
    <div>
    Dad: {{ owlCatDad }}
    </div> -->
  </div>
</template>

<script>
export default {
  name:'Breed',
  data(){
    return {
      selectItemMam: true,
      selectItemDad: true,
      trigger: false,
      owlCatMam: [],
      owlCatDad: [],
      catalogueState: []
    }
  },
  methods:{
    breedOwlCats(){ 
      if (this.owlCatMam[0].id != this.owlCatDad[0].id){
        console.log(`Mam is ${ this.owlCatMam[0].itemsInfo.tokenId } and Dad is ${ this.owlCatDad[0].itemsInfo.tokenId }`);
        //console.log('type', typeof(this.owlCatMam[0].id));
        this.$store.dispatch('bcComm/breedOwlCat',{ dadId: this.owlCatDad[0].itemsInfo.tokenId, mamId: this.owlCatMam[0].itemsInfo.tokenId })
        .then(() => {
          this.$router.push("/catalogue"); // go to the catalogue
        })
        .catch((err) => {
          console.log(err);
        });
        //console.log('Breed the cats !');
      }
      else 
        alert('OwlCats are not hermaphrodites. Try again !');
      
      this.owlCatMam = []; // Erase the arrays to avoid polution copies
      this.owlCatDad = [];
      
    },
    selectOwlCat(){ // trigger the popUp window through props
      this.catalogueState = []; // Erase the array to avoid polution copies 
      return this.trigger = !this.trigger;
    },
    selectMamOwlCat(){
      this.selectItemMam = false;
      //console.log('SelectMam');
      return this.trigger = !this.trigger;
    },
    selectDadOwlCat(){
      this.selectItemDad = false;
      //console.log('SelectDad');
      return this.trigger = !this.trigger;
    },
    selectTotem(id){ // cambiar aqui por la verdadera
      //console.log('OwlCatID in:', id);
      if(!this.selectItemMam && this.owlCatMam.length == 0)
        this.selectMam(id);
      else if (!this.selectItemDad && this.owlCatDad.length == 0)
        this.selectDad(id);      
    },
    selectMam(id){
      this.selectItemMam = false; 

      this.$store.dispatch('bcComm/putOwlcatToBreed', id)
      .then(() => {
        this.$store.dispatch('owlCatTotem/printOwlcat', this.$store.getters['bcComm/getOwlcatToBreed']);
        this.owlCatMam.push({
          id: id,
          headColor: this.$store.getters['owlCatTotem/getHeadColor'],
          mouthColor: this.$store.getters['owlCatTotem/getMouthColor'],
          eyesColor: this.$store.getters['owlCatTotem/getEyesColor'],
          earsColor: this.$store.getters['owlCatTotem/getEarsColor'],   
          eyesShape: this.$store.getters['owlCatTotem/getEyesShapeDex'],
          decorationPattern: this.$store.getters['owlCatTotem/getDecorationDex'],
          decorationNoseColor:this.$store.getters['owlCatTotem/getNoseColor'],
          decorationFringeColor: this.$store.getters['owlCatTotem/getFringeColor'],
          animation: this.$store.getters['owlCatTotem/getAnimationDex'],
          lastNum: this.$store.getters['owlCatTotem/getLastNum'],
          itemsLegend: {
            eyes: this.$store.getters['owlCatTotem/getEyesShape'],
            decoration: this.$store.getters['owlCatTotem/getDecoration'],
            animation:this.$store.getters['owlCatTotem/getAnimation']
          },
          itemsInfo: {
            tokenId: this.$store.getters['owlCatTotem/getTokenId'],
            generation: this.$store.getters['owlCatTotem/getGeneration'],
            genes: this.$store.getters['owlCatTotem/getGenes']
          }
        });
      });
    },
    selectDad(id){
      this.selectItemDad = false;

      this.$store.dispatch('bcComm/putOwlcatToBreed', id)
      .then(() => {
        this.$store.dispatch('owlCatTotem/printOwlcat', this.$store.getters['bcComm/getOwlcatToBreed']);
        this.owlCatDad.push({
          id: id,
          headColor: this.$store.getters['owlCatTotem/getHeadColor'],
          mouthColor: this.$store.getters['owlCatTotem/getMouthColor'],
          eyesColor: this.$store.getters['owlCatTotem/getEyesColor'],
          earsColor: this.$store.getters['owlCatTotem/getEarsColor'],   
          eyesShape: this.$store.getters['owlCatTotem/getEyesShapeDex'],
          decorationPattern: this.$store.getters['owlCatTotem/getDecorationDex'],
          decorationNoseColor:this.$store.getters['owlCatTotem/getNoseColor'],
          decorationFringeColor: this.$store.getters['owlCatTotem/getFringeColor'],
          animation: this.$store.getters['owlCatTotem/getAnimationDex'],
          lastNum: this.$store.getters['owlCatTotem/getLastNum'],
          itemsLegend: {
            eyes: this.$store.getters['owlCatTotem/getEyesShape'],
            decoration: this.$store.getters['owlCatTotem/getDecoration'],
            animation:this.$store.getters['owlCatTotem/getAnimation']
          },
          itemsInfo: {
            tokenId: this.$store.getters['owlCatTotem/getTokenId'],
            generation: this.$store.getters['owlCatTotem/getGeneration'],
            genes: this.$store.getters['owlCatTotem/getGenes']
          }
        });
      });
    },
    updateCatalogue(){
      if(this.$store.getters['bcComm/getConnectionStatus'])
        if(this.$store.getters['bcComm/getStockStatus']){    
          var _itemsFamily = this.$store.getters['bcComm/getArrayItems'].length;
            for(let i = 0; i < _itemsFamily; i++){ 
              this.$store.dispatch('owlCatTotem/printOwlcat', this.$store.getters['bcComm/getArrayItems'][i]);          
              this.catalogueState.push({
                id: i,
                headColor: this.$store.getters['owlCatTotem/getHeadColor'],
                mouthColor: this.$store.getters['owlCatTotem/getMouthColor'],
                eyesColor: this.$store.getters['owlCatTotem/getEyesColor'],
                earsColor: this.$store.getters['owlCatTotem/getEarsColor'],   
                eyesShape: this.$store.getters['owlCatTotem/getEyesShapeDex'],
                decorationPattern: this.$store.getters['owlCatTotem/getDecorationDex'],
                decorationNoseColor:this.$store.getters['owlCatTotem/getNoseColor'],
                decorationFringeColor: this.$store.getters['owlCatTotem/getFringeColor'],
                animation: this.$store.getters['owlCatTotem/getAnimationDex'],
                lastNum: this.$store.getters['owlCatTotem/getLastNum'],
                itemsLegend: {
                  eyes: this.$store.getters['owlCatTotem/getEyesShape'],
                  decoration: this.$store.getters['owlCatTotem/getDecoration'],
                  animation:this.$store.getters['owlCatTotem/getAnimation']
                },
                itemsInfo: {
                  tokenId: this.$store.getters['owlCatTotem/getTokenId'],
                  generation: this.$store.getters['owlCatTotem/getGeneration'],
                  genes: this.$store.getters['owlCatTotem/getGenes']
                }
              });
            }              
        }
    }
  },
  components: {
    'popup-window':require('@/components/CatalogueComps/PopupWindow.vue').default
  }
}
</script>

<style lang="scss">
  .breed-zone{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .tittle {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    display: flex;
    justify-content: center; 
    font-weight: bold;
    font-size: 24px;
    color: white;
  }

  .parents-container {
    display: flex;
    background-color: deepskyblue;
    padding: 5px;
    justify-content: center;
    position: relative;
    grid-gap: 5px;
    height: 430px;
    width: 42%;
    left: 27.5%;
     
    
    .select-panel {
      display:flex;
      flex: 1 0 205px;
      width: 568px;
      justify-content: center;
      background-color: #bfa5a5;
      border-radius: 5px;
      align-content: center;
      border: 1px solid #DFE3E3;
      box-sizing: border-box;

      .select-panel-1{
        flex-grow: 1;
      }

      .select-panel-2{
        flex-grow: 1;
      }

      #symbol{
        position:relative;
        margin-bottom: 8px;
        width: 25%;
        height: 25%;
        top:24%;
        left: 38%
      }

      h6 {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 15px;
        position:relative;
        text-align: center;
        width: 64%;
        top: 43%;
        left: 19%;
      }

      .item-popup-mam{
        transform: scale(0.6);
        margin-left: -106px;
        margin-top: -58px;
        font-size: 25px;
      }

      .item-popup-dad{
        transform: scale(0.6);
        margin-left: -106px;
        margin-top: -58px;
        font-size: 25px;        
      }

      .owlcat-item__label-dnaB{
        position: relative;
        left: -44px;
        top: -64px;
      }

      .owlcat-item__label-genB{
        position: relative;
        left: -44px;
        top: -64px;
      }
    }
  }


  .parents-container-labels {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 36%;
    color:white;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 20px;
    position:relative;
    width: 51%;
    left: 23%;

    .label-1{
      flex-grow: 1;
    }
    
    .label-2{
      flex-grow: 2;
    }
  }

  #proceed-button {
    margin-top:26px;
    position: relative;
    left: 38%;
    width: 20%;    
  }

  .item-popup{
    transform: scale(0.4);
    margin-right: -170px;
    margin-left: -40px;
    margin-top: -179px;
    margin-bottom: -210px;

    .owlcat-item__label{
      position: relative;
      padding: 5px;
      color: white;
      font-size: 35px;
    }

    .owlcat-item__label-dna{
      left: -115px;
      top: -20px;
    }

    .owlcat-item__label-gen{
      left: 40px;
      top: -131px;
    }
  }
  
</style>