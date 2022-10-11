<script setup>
defineProps({
  msg: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">#1 - {{ msg && msg.text }}</h1>
    <h3>
      If you don't like this question
      <button class="as-a" @click="$emit('randomize')">
        click here to see another
      </button>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.as-a {
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
