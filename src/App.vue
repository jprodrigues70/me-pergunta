<script setup>
import Phrase from "./components/Phrase.vue";
import PhraseList from "./components/PhraseList.vue";
</script>
<script>
import { randomizeArray } from "@/helpers/randomize.js";
import phrases from "@/contents/phrases.js";

export default {
  data() {
    return {
      topFivePhrases: [],
      lastPhrase: null,
      times: 0,
    };
  },
  computed: {
    identifiedPhrases() {
      return phrases.map((i, index) => {
        return {
          id: index + 1,
          text: i,
        };
      });
    },
  },
  created() {
    this.randomize();
  },
  methods: {
    randomize() {
      this.topFivePhrases = randomizeArray(
        this.identifiedPhrases,
        5,
        this.lastPhrase,
        this.times
      );
      this.times++;
      this.lastPhrase = this.topFivePhrases[0];
    },
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <Phrase :msg="topFivePhrases[0]" @randomize="randomize" />
    </div>
  </header>
  <PhraseList :list="topFivePhrases" />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
