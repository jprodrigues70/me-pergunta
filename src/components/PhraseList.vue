<script setup>
import PhraseListItem from "./PhraseListItem.vue";

import HeartIcon from "./icons/HeartIcon.vue";

defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <template v-for="(item, index) in list">
      <PhraseListItem v-if="index > 0" :key="item.id">
        <template #icon>
          <HeartIcon />
        </template>
        <template #heading>#{{ index + 1 }}</template>

        {{ item.text }}
      </PhraseListItem>
    </template>
  </div>
</template>
