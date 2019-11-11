<template>
  <section class="animated pt-9 pb-6 py-md-7">
    <div class="container"> <!--contain everthing in this page -->
      <div class="headline"> <!-- the div class of game title and instructions. -->
        <br>
        <h1>The Animated Sequence</h1>
        <h2>Here are the 10 sequence images in the positions you put in.
        Watch them animate as the sequence goes on.</h2>
      </div>  <!-- the end div class of game title and instructions. -->

      <div>
        <span v-for="(imageOrder, index) in imageOrders"> <span v-bind:class="{'current-label': index === currentImageIndex}">{{ imageOrder.image.label }}</span> - </span>
        <div class="row"> <!-- Go beck to backend and retrive the images. -->
          <div class="col-md-4">
            {{ imageOrders[currentImageIndex].image.label }}
            <img class="images" v-bind:src="imageOrders[currentImageIndex].image.url" >
          </div>
        </div>
      </div>
      <button v-on:click="stopAnimation()">Stop</button>

    </div>
  </section>
</template>

<style>
/*.current-label {
  color: navy;
  font-size: 20px;
}*/
</style>

<script>
import axios from "axios";

export default {

  data: function() {
    return {
      imageOrders: [
        {
          image: {
            label: "",
            url: ""
          }
        }
      ],
      currentImageIndex: 0,
      animationInterval: ""
    };
  },
  created: function() {
    axios
      .get("/api/image_orders") 
      .then(response => {
        this.imageOrders = response.data;

        this.animationInterval = setInterval(() => { 

          if (this.currentImageIndex < this.imageOrders.length ) {
            this.currentImageIndex++;
          } else {
            this.currentImageIndex = 0;
          }

        }, 500);
      });
  },
  methods: {
    stopAnimation: function() {
      clearInterval(this.animationInterval);
    }
  }
};

</script>