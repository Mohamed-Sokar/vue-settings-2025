<script setup lang="ts">
import { computed } from "vue";
import type { Tab } from "../types";

const props = defineProps<{
  currentTab: string;
  tab: Tab;
}>();

defineEmits<{
  click: [];
}>();

const isActive = computed(() => props.currentTab === props.tab.key);
</script>

<template>
  <button
    :class="{
      'p-4 border-b-2 hover:cursor-pointer hover:bg-gray-100': true,
      'border-b-blue-600 text-blue-600 font-bold': isActive,
      'border-transparent': !isActive,
    }"
    @click="$emit('click')"
  >
    {{ tab.label }}
  </button>
</template>

<style scoped></style>
