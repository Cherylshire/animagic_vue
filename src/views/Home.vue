<template>
  <div class="my-home">
    <!-- Elements Card -->
    <div class="py-5" id="card">
      <div class="">
        <div class="section-title justify-content-center MB-1 wow fadeInUp">
          <span class="shape shape-left bg-info"></span>
          <h2 class="text-danger">ANIMAGIC</h2>
          <span class="shape shape-right bg-info"></span>
        </div>
        <p class="mb-5 font-size-20">Animagic is an unique app,
        it will show you some of the most basic animation, 
        how they work and what it takes to do it, 
        you can also play a game within the app to interact and try it yourself.</p>
      </div>

      <div class="row">
        <div class="col"></div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img class="card-img-top" src="https://images.squarespace-cdn.com/content/v1/5b846691aa49a1b7c058ef56/1572320326677-FBH7PQR1E9V4UECH5GT7/ke17ZwdGBToddI8pDm48kG0D7cEoqoIrj_LzBsytZPQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcembaqQOQGuOOwh0LY1bIax1URXEywDaweDF_ceec6ysQnzkkLhxox6s2e7vPsuh7/6.png?format=1000w">
            <div class="card-body">
              <h5 class="card-title">Rearranging</h5>
              <p class="card-text">Reordering a series of still images into sequence.</p>
              <a href="/rearranging" class="btn btn-primary">play game</a>
            </div>
          </div>
        </div>
        <div class="col"></div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img class="card-img-top" src="https://images.squarespace-cdn.com/content/v1/5b846691aa49a1b7c058ef56/1573510310679-NTFI5OATRK8ZGH04PJ8T/ke17ZwdGBToddI8pDm48kG0D7cEoqoIrj_LzBsytZPQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcembaqQOQGuOOwh0LY1bIax1URXEywDaweDF_ceec6ysQnzkkLhxox6s2e7vPsuh7/Screen+Shot+2019-11-11+at+4.10.25+PM.png?format=1000w">
            <div class="card-body">
              <h5 class="card-title">Maze</h5>
              <p class="card-text">Come inside a maze and find the exit.</p>
              <a href="/canvas" class="btn btn-primary">play game</a>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<style>
/*  .instruction{
    text-align: left;
    font-variant: small-caps;
  }
  h2 {
    font-style: oblique;
    text-align: left;
  }*/
</style>

<script>
export default {
  data: function() {
    return {
      message: "ANIMAGIC"
    };
  },
  created: function() {},
  methods: {}
};
</script>
