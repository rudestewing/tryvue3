<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/todo">todo</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<script>
import useTodo from './compose/useTodo';

export default {
    
}
</script>