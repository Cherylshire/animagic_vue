<template>
  <section class="rearranging pt-9 pb-6 py-md-7">
    <div class="container">
      <div class="headline">
        <br>
        <h1>The 12 Principles of Animation</h1>
        <h2>Ollie Johnston and Frank Thomas first introduced “The 12 Basic Principles of Animation” in their 1981 book The Illusion of Life: Disney Animation. And while their primary motive was to help traditional animators create worlds and characters that more convincingly uphold the laws of physics, the dozen tenets set forth in the tome have also profoundly influenced contemporary 3D and computer animation. </h2>
      </div> 
      <div>
        In this book, Johnston and Thomas examine the work of leading Disney animators from the 1930s and onwards, and boil their approach down to 12 basic principles of animation.
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
    max-width: 800px;
    margin: auto 5px;
      }

  .images {
    max-width: 250px;
    position: relative;
  }

  .rearrange-box {
    display: inline-block;
    margin: 0 auto;
    text-align: center;
    color: #00bb55;
    padding: 2px 2px;
    font-style: bold;
    }


</style>

<script>
import axios from "axios";

// export default {

//   data: function() {
//     return {
//       placements: [
//         {label: "A", image_id: 1, placement: ""},
//         {label: "B", image_id: 2, placement: ""},
//         {label: "C", image_id: 3, placement: ""},
//         {label: "D", image_id: 4, placement: ""},
//         {label: "E", image_id: 5, placement: ""},
//         {label: "F", image_id: 6, placement: ""},
//         {label: "G", image_id: 7, placement: ""},
//         {label: "H", image_id: 8, placement: ""},
//         {label: "I", image_id: 9, placement: ""},
//         {label: "J", image_id: 10, placement: ""}
//       ],
//       imageOrders: []
//     };
//   },
//   created: function() {
//     axios
//       .get("/api/image_orders") 
//       .then(response => {
//         this.imageOrders = response.data;
//       });
//   },
//   methods: {
//     submit: function() {
//       axios
//         .post("/api/image_orders", {placements: this.placements})
//         .then(response => {
//           console.log(response.data)
//           this.imageOrders = response.data;
//         });
//     }
//   }
};

</script>