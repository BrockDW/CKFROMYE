<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html, body, #app {
  margin: 0;
  height: 100%;
  font-family: 'pingfang';
}
:focus {
  outline: none;
}
</style>
