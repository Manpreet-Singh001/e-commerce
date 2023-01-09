<script setup>
import { ref } from "vue";
const hover = ref(false);
</script>
<template>
  <div class="navbar">
    <div class="navbar-item">Icon</div>

    <div class="navbar-item">
      <div @mouseover="hover = true" @mouseleave="hover = false">
        Categories

        <div :class="hover ? 'visible' : 'category-container'">
          <div>Electronics</div>
          <div>Health</div>
          <div>Books</div>
        </div>
      </div>
    </div>

    <div class="navbar-item">Deals</div>
    <div class="navbar-item">What's new</div>
    <div class="navbar-item"><input type="text" /></div>
    <div class="navbar-item">Account</div>
    <div class="navbar-item">Cart</div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
}

.category-container {
  display: none;
}

.visible {
  display: flex;
  visibility: visible;
  position: absolute;
  flex-direction: column;
}
</style>
