<template>
  <div id="app">
    <h1>Not 21</h1>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style>
  html{
    font-size: 125%;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body{
    color: #333;
    overflow: hidden;
  }
</style>
