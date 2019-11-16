<template>
  <div class="canvas">
    <div class="section-title justify-content-center MB-1 wow fadeInUp">
      <span class="shape shape-left bg-info"></span>
      <h2 class="text-danger">Maze</h2>
      <span class="shape shape-right bg-info"></span>
    </div>
    <h2>Lead the blue circle to the purple square. </h2>
    <!-- These are the custom components we'll create -->
    <!-- Values for `my-box` are percentages of the width of the canvas. -->
    <!-- Each bar will take up an equal space of the canvas. -->
    <div class="range_bar">
      <div>left and right </div>
      <div><input type="range" name="points" min="20" max="2000" v-model="circleValues[0].x"> </div>
      <div>up and down</div>
      <div><input type="range" name="points" min="20"  max="970"  v-model="circleValues[0].y"></div>
    </div>
<!--     <input type="range" name="points" min="50" max="1400" v-model="rectangleValues[0].x"> --> 
    <!-- <p>body up and down<input type="range" name="points" min="290"  max="300"  v-model="rectangleValues[0].y"></p> -->
    <!-- <input type="range" name="points" min="50" max="1400" v-model="stickraValues[0].x"> -->
    <!-- <input type="range" name="points" min="50" max="1400" v-model="stickrlValues[0].x"> -->
    <!-- <input type="range" name="points" min="50" max="1400" v-model="sticklaValues[0].x"> -->
    <!-- <input type="range" name="points" min="50" max="1400" v-model="stickllValues[0].x"> -->
    <my-canvas style="width: 100%; height: 1000px;">
      <my-circle
        v-for="circle in circleValues"
        :x="parseInt(circle.x)"
        :y="parseInt(circle.y)"
        :r="parseInt(circle.r)"
        :color="circle.color"
      >
      </my-circle>
      <my-rectangle
        v-for="rectangle in rectangleValues"
        :x="rectangle.x"
        :y="rectangle.y"
        :w="rectangle.w"
        :h="rectangle.h"
        :color="rectangle.color"
      >
      </my-rectangle>
      <my-stickrua
        v-for="stickrua in stickruaValues"
        :x="stickrua.x"
        :y="stickrua.y"
        :w="stickrua.w"
        :h="stickrua.h"
        :color="stickrua.color"
      >
      </my-stickrua>
      <my-sticklua
        v-for="sticklua in stickluaValues"
        :x="sticklua.x"
        :y="sticklua.y"
        :w="sticklua.w"
        :h="sticklua.h"
        :color="sticklua.color"
      >
      </my-sticklua>
      <my-stickrul
        v-for="stickrul in stickrulValues"
        :x="stickrul.x"
        :y="stickrul.y"
        :w="stickrul.w"
        :h="stickrul.h"
        :color="stickrul.color"
      >
      </my-stickrul>
      <my-sticklul
        v-for="sticklul in sticklulValues"
        :x="sticklul.x"
        :y="sticklul.y"
        :w="sticklul.w"
        :h="sticklul.h"
        :color="sticklul.color"
      >
      </my-sticklul>
      <my-stickrla
        v-for="stickrla in stickrlaValues"
        :x="stickrla.x"
        :y="stickrla.y"
        :w="stickrla.w"
        :h="stickrla.h"
        :color="stickrla.color"
      >
      </my-stickrla>
      <my-sticklla
        v-for="sticklla in stickllaValues"
        :x="sticklla.x"
        :y="sticklla.y"
        :w="sticklla.w"
        :h="sticklla.h"
        :color="sticklla.color"
      >
      </my-sticklla>
      <my-stickrll
        v-for="stickrll in stickrllValues"
        :x="stickrll.x"
        :y="stickrll.y"
        :w="stickrll.w"
        :h="stickrll.h"
        :color="stickrll.color"
      >
      </my-stickrll>
      <my-sticklll
        v-for="sticklll in sticklllValues"
        :x="sticklll.x"
        :y="sticklll.y"
        :w="sticklll.w"
        :h="sticklll.h"
        :color="sticklll.color"
      >
      </my-sticklll>
      <my-stickqaz
        v-for="stickqaz in stickqazValues"
        :x="stickqaz.x"
        :y="stickqaz.y"
        :w="stickqaz.w"
        :h="stickqaz.h"
        :color="stickqaz.color"
      >
      </my-stickqaz>
      <my-stickgondor
        v-for="stickgondor in stickgondorValues"
        :x="stickgondor.x"
        :y="stickgondor.y"
        :w="stickgondor.w"
        :h="stickgondor.h"
        :color="stickgondor.color"
      >
      </my-stickgondor>
    </my-canvas>
      <p>exit</p>
  </div>
</template>

<style>
  .range_bar {
    margin-left: 500px;
  }
  canvas {
    border: 5px solid teal;
    margin-left: 200px;
    margin-top: 0px;
    height: 700px;
    width: 700px;
  }
</style>

<script>
  import MyCanvas      from '../components/MyCanvas.vue';
  import MyBox         from '../components/MyBox.vue';
  import MyCircle      from '../components/MyCircle.vue';
  import MyRectangle   from '../components/MyRectangle.vue';
  import MyStickrua    from '../components/MyStickrua.vue';
  import MySticklua    from '../components/MySticklua.vue';
  import MyStickrul    from '../components/MyStickrul.vue';
  import MySticklul    from '../components/MySticklul.vue';
  import MyStickrla    from '../components/MyStickrla.vue';
  import MySticklla    from '../components/MySticklla.vue';
  import MyStickrll    from '../components/MyStickrll.vue';
  import MySticklll    from '../components/MySticklll.vue';
  import MyStickqaz    from '../components/MyStickqaz.vue';
  import MyStickgondor    from '../components/MyStickgondor.vue';

  export default {
    components: {
      MyCanvas,
      MyBox,
      MyCircle,
      MyRectangle,
      MyStickrua,
      MySticklua,
      MyStickrul,
      MySticklul,
      MyStickrla,
      MySticklla,
      MyStickrll,
      MySticklll,
      MyStickqaz,
      MyStickgondor
    },
    data: function() {
      return {
        rectangleValues: [
          {color: 'green', x: 90, y: 0, w: 15, h: 900}
        ],
        stickruaValues: [
          {color: 'green', x: 210, y: 100, w: 15, h: 900}
        ],
        stickluaValues: [
          {color: 'green', x: 210, y: 100, w: 500, h: 15}
        ],
        stickrulValues: [
          {color: 'green', x: 900, y: 0, w: 15, h: 900}
        ],
        sticklulValues: [
          {color: 'green', x: 350, y: 900, w: 565, h: 15}
        ],
        stickrlaValues: [
          {color: 'green', x: 1020, y: 100, w: 15, h: 900}
        ],
        stickllaValues: [
          {color: 'green', x: 410, y: 250, w: 500, h: 15}
        ],
        stickrllValues: [
          {color: 'green', x: 210, y: 400, w: 500, h: 15}
        ],
        sticklllValues: [
          {color: 'green', x: 410, y: 550, w: 500, h: 15}
        ],
        stickqazValues: [
          {color: 'green', x: 210, y: 725, w: 500, h: 15}
        ],
        stickgondorValues: [
          {color: 'purple', x: 1070, y: 940, w: 50, h: 50}
        ],
        circleValues: [
          {color: 'navy', x: 20, y: 20, r: 20}
        ]
      }
    },
  }
</script>



<!-- 
    // Randomly selects a value to randomly increment or decrement every 16 ms.
    // Not really important, just demonstrates that reactivity still works.
    // mounted: function() {
    //   let dir = 1;
    //   let selectedVal = Math.floor(Math.random() * this.shapeValues.length);

    //   setInterval(() => {
    //     if (Math.random() > 0.995) dir *= -1;
    //     if (Math.random() > 0.99) selectedVal = Math.floor(Math.random() * this.shapeValues.length);

    //     this.shapeValues[selectedVal].val = Math.min(Math.max(this.shapeValues[selectedVal].val + dir * 0.5, 0), 100);
    //   }, 16);
    // } -->


<!-- ctx.moveTo(300, 0); // pick up "pen," reposition at 300 (horiz), 0 (vert)
    ctx.lineTo(300, 200); // draw straight down (from 300,0) to 200px
    ctx.lineTo(500, 100); // draw up toward right (100 half of 200)
    ctx.fill(); // connect and fill -->