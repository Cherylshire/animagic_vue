<template>
  <section class="rearranging pt-9 pb-6 py-md-7">
    <div class="container"> <!--contain everthing in this page -->
      <div class="headline"> <!-- the div class of game title and instructions. -->
        <div class="section-title justify-content-center MB-5 wow fadeInUp">
          <span class="shape shape-left bg-info"></span>
          <h2 class="text-danger">Rearranging</h2>
          <span class="shape shape-right bg-info"></span>
        </div>
        <h2>Here are 10 sequence images in random positions.
        Your jobs is to re-order them into their rightful positions,
        so they will actually look like sequence images. </h2>
      </div>  <!-- the end div class of game title and instructions. -->

      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      <form v-on:submit.prevent="submit()"> <!-- rearranging number will be typed in here. With the go button. -->
        <div>
          <div class="rearrange-box" v-for="placement_hash in placements"> <!-- this is like a each loop. go through images id 1-9. --> 
            <div class="letter-rearrange-box">  <!-- label A-J box -->
              {{ placement_hash.label }}
            </div>
            <div class="select-placement">  <!--rearranging A-J to 1-9. -->
              <input type="number" v-model="placement_hash.placement">
            </div>
          </div>
        </div>
        <input class="btn btn-lg" type="submit" value="go"> <!-- submit button -->
        <router-link to="/animated"><h2>Animated</h2></router-link>
      </form>

      <div>
        <div class="row"> <!-- Go beck to backend and retrive the images. -->
          <div class="col-md-6" v-for="imageOrder in imageOrders">
            {{ imageOrder.image.label }}
            <img class="images" v-bind:src="imageOrder.image.url" >
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style>
  h1 {
    font-style: bold;
    font-kerning: 2px;
    text-align: center;
    color: #abbb55;
    }

  h2 {
    font-style: bold;
    text-align: center;
    }

  .row {
    max-width: 1200px;
    margin: auto 5px;
    font-size: 20px;
      }

  .images {
    max-width: 400px;
    position: relative;
  }

  .rearrange-box {
    display: inline-block;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    padding: 2px 2px;
    font-style: bold;
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
      imageOrders: [],
      errors: []
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
          this.imageOrders = response.data;
          this.errors = [];
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};

</script>