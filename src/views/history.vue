<template>
  <section class="rearranging pt-9 pb-6 py-md-7">
    <div class="container">
      <div class="headline">
        <br>
        <h1>The History of Animation</h1>
        <h2>On Thursday, September, 12 1940, in Lascaux, France, 4 French boys find themselves standing inside a cave full with pre-historical marking and was amazed by how newly it still looked. </h2>
      </div> 
      <div>
        These markings surrounded the length of the cave, as well as corridors that were in various parts of the cave. These markings included animals, hunts, and wars. These markings were like animation because the hunts were drawn on the wall in a way that was like a comic strip. They started at the left, and continued the story of the hunt to the right, until the prey was captured. These pictures were used to tell stories. They are an early form on animation. In addition to cave drawings, stories have been told through pictures in other ways. Sometime after 3100 B.C., drawing were used in Egypt in the tombs of their pharaohs. These pictures, as described in Mathews, told the life that the pharaoh lived, as well as the life he was about to enter. These pharaohs of ancient Egypt, had pictures drawn on many of their important buildings as a constant reminder of the law. These pictures depicted right and wrong, and what the punishment could be. From ancient Egypt, to modern-day times, many forms of animation have been used. The messages might have changed over time, but they, like the cave and Egyptian drawings are all forms of animation.
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

export default {

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
