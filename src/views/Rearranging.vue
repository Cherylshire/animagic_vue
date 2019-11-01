<template>
  <div class="rearranging">
    <div class="container"> <!--contain everthing in this page -->
      <div class="headline"> <!-- the div class of game title and instructions. -->
        <h1>The Rearranging Game</h1>
        <h2>Here are 9 sequence images in random positions.
        <br> 
        Your jobs is to re-order them into their rightful positions,
        <br> 
        so they will actually look like sequence images.</h2>
      </div>  <!-- the end div class of game title and instructions. -->
      <form v-on:submit.prevent="submit()"> <!-- rearranging number will be typed in here. With the go button. -->
        <div>
          <div class="rearrange-box" v-for="placement_hash in placements"> <!-- this is like a each loop. go through images id 1-9. --> 
            <div class="letter-rearrange-box">  <!-- label A-I box -->
              {{ placement_hash.label }}
            </div>
            <div class="select-placement">  <!--rearranging A-I to 1-9. -->
              <input type="number" v-model="placement_hash.placement">
            </div>
          </div>
        </div>
        <input class="btn btn-lg" type="submit" value="go"> <!-- submit button -->
      </form>

    <div>
      <div class="row"> <!-- Go beck to backend and retrive the images. -->
        <div class="col-md-4" v-for="imageOrder in imageOrders">
          {{ imageOrder.image.label }}
          <img class="images" v-bind:src="imageOrder.image.url" >
        </div>
      </div>
    </div>

    </div>
  </div>
</template>

<style>
  h1 {
    font-style: bold;
    font-kerning: 2px;
    text-align: center;
    }

  h2 {
    font-style: bold;
    text-align: center;
    }

  .row {
    max-width: 800px; 
    max-height: 350px;
  }
  .images {
    max-width: 250px; 
    max-height: 150px;
  }

  .rearrange-box {
    display: inline-block;
    /*width: 30px;*/
    /*margin: auto;
    text-align: center;
    font-style: italic;
    color: #009966;
    font-size: 25px;
    background-color: #4C8F90;*/ /* Green 
/*    color: white;
    padding: 10px 10px;
    text-decoration: overline;*/
    }


</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      placements: [
        {label: "A", image_id: 1, placement: ""},
        {label: "B", image_id: 2, placement: ""},
        {label: "C", image_id: 3, placement: ""},
        {label: "D", image_id: 4, placement: ""},
        {label: "E", image_id: 5, placement: ""},
        {label: "F", image_id: 6, placement: ""},
        {label: "G", image_id: 7, placement: ""},
        {label: "H", image_id: 8, placement: ""},
        {label: "I", image_id: 9, placement: ""},
        {label: "J", image_id: 10, placement: ""}
      ],
      imageOrders: []
    };
  },
  created: function() {
    axios
      .get("/api/image_orders") 
      .then(response => {
        this.imageOrders = response.data;
      });
  },
  methods: {
    submit: function() {
      axios
        .post("/api/image_orders", {placements: this.placements})
        .then(response => {
          console.log(response.data)
          this.imageOrders = response.data;
        });
    }
  }
};

</script>