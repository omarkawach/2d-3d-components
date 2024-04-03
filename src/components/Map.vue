<script setup>
/*
 * Imports
 */
import { ref, watchEffect } from "vue";
import WebMap from "@arcgis/core/WebMap";

/*
 * Reactive data and methods
 */
const is2D = ref(true);
const timeSliderRef = ref(null);
const mapRef = ref(null);
const sceneRef = ref(null);

const toggleView = () => {
  is2D.value = !is2D.value;
  console.log("Toggle view", is2D.value);
};

watchEffect(() => {
  if (mapRef.value) {
    timeSliderRef.value.referenceElement = "#mapElem";
  } else if (sceneRef.value) {
    timeSliderRef.value.referenceElement = "#sceneElem";
  }
});

// Stream layer not included!
const map = new WebMap({
  portalItem: {
    // autocasts as new PortalItem()
    id: "bf804b52e86f46518703c2196488dc76",
  },
});

/*
 * Functions
 */
async function onReady(event) {
  await event.target.whenLayerView(featureLayer);

  const timeSlider = timeSliderRef.value;

  timeSlider.fullTimeExtent =
    featureLayer.timeInfo.fullTimeExtent.expandTo("hours");

  timeSlider.stops = {
    interval: featureLayer.timeInfo.interval,
  };
}
</script>

<template>
  <calcite-shell class="calcite-mode-dark">
    <calcite-navigation slot="header">
      <calcite-navigation-logo
        heading="Track the International Space Station"
        slot="logo"
        target="_blank"
      />
    </calcite-navigation>
    <arcgis-map
      v-if="is2D"
      ref="mapRef"
      v-bind:map="map"
      @arcgisViewReadyChange="onReady"
      id="mapElem"
    >
      <arcgis-search position="top-right" />
      <arcgis-legend position="top-right" />
      <arcgis-placement position="top-left">
        <div id="toggle">
          <calcite-icon
            icon="globe"
            id="2d-3d-toggle"
            @click="toggleView"
          ></calcite-icon>
        </div>
      </arcgis-placement>
    </arcgis-map>
    <arcgis-scene
      v-else
      ref="sceneRef"
      v-bind:map="map"
      @arcgisViewReadyChange="onReady"
      id="sceneElem"
    >
      <arcgis-search position="top-right" />
      <arcgis-legend position="top-right" />
      <arcgis-placement position="top-left">
        <div id="toggle">
          <calcite-icon
            icon="globe"
            id="2d-3d-toggle"
            @click="toggleView"
          ></calcite-icon>
        </div>
      </arcgis-placement>
    </arcgis-scene>
    <arcgis-time-slider
      ref="timeSliderRef"
      loop
      time-visible
      reference-element="#mapElem"
    ></arcgis-time-slider>
  </calcite-shell>
</template>
