<template>
  <div class="home">
    <div class="instruction">
      <br>
      <h1>{{ message }}</h1>
      <h2>Animagic is an unique app,<br>
      it will show you some of the most basic animation,<br> 
      how they work and what it takes to do it, <br>
      you can also play a game within the app to interact and try it yourslef.</h2>
    </div>
    <div class="start">
      <router-link to="/signup"><h2>Sign up</h2></router-link> |||| 
      <router-link to="/login"><h2>Log in</h2></router-link> ||||
      <router-link to="/rearranging"><h2>Rearranging</h2></router-link>
      <router-link to="/animated"><h2>Animated</h2></router-link>
    </div>
  </div>
</template>

<style>
  .instruction{
    text-align: center;
    font-variant: small-caps;
  }
  h2 {
    font-style: oblique;
    text-align: center;
  }
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
