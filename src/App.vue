<script setup>
import Map from "@/components/Map.vue";

import { defineCustomElements as defineCalciteComponents } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineMapComponents } from "@arcgis/map-components/dist/loader";

defineCalciteComponents(window, { resourcesUrl: "https://js.arcgis.com/calcite-components/2.4.0/calcite.css" });
defineMapComponents(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets" });
</script>

<template>
  <Map />
</template>