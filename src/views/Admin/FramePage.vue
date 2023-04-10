<template>
  <div>url: {{ url }}</div>
  <div>props: {{ $props }}</div>
  <iframe :src="url"></iframe>
  <!-- <HelloWorld /> -->
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
window.route = route;
console.log("route", route.fullPath, route);
const url = computed(() => {
  const { url } = route.params;
  return url || "";
});
</script>

<style lang="scss" scoped></style>
