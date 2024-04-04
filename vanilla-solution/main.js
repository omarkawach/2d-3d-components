async function load() {
  // Imports
  const Map = await $arcgis.import("esri/Map");
  const FeatureLayer = await $arcgis.import("esri/layers/FeatureLayer");
  const Basemap = await $arcgis.import("esri/Basemap");

  // Elements
  const timeSlider = document.querySelector("arcgis-time-slider");
  const mapElem = document.querySelector("arcgis-map");
  const sceneElem = document.querySelector("arcgis-scene");
  const toggleMapElem = document.getElementById("2d-3d-toggle-map");
  const toggleSceneElem = document.getElementById("2d-3d-toggle-scene");

  // Set up the map
  const featureLayer = new FeatureLayer({
    portalItem: {
      id: "6b84497d99b74d9e937cd0074f7c7365",
    },
    refreshInterval: 0.1,
  });

  const basemap = new Basemap({
    portalItem: {
      id: "a9c628e802f84ad282f5c72f6354265b",
    },
  });

  const map = new Map({
    basemap: basemap,
    layers: [featureLayer],
  });

  // Assign the map to arcgis-map and arcgis-scene
  mapElem.map = map;
  sceneElem.map = map;

  mapElem.addEventListener("arcgisViewReadyChange", async ({ target }) => {
    const FL = target.map.allLayers.find(
      (layer) => layer.title === "ISS track"
    );

    console.log(await target.whenLayerView(FL));

    timeSlider.fullTimeExtent = FL.timeInfo.fullTimeExtent.expandTo("hours");

    timeSlider.stops = {
      interval: FL.timeInfo.interval,
    };
  });

  sceneElem.addEventListener("arcgisViewReadyChange", async ({ target }) => {
    const FL = target.map.allLayers.find(
      (layer) => layer.title === "ISS track"
    );

    console.log(await target.whenLayerView(FL));

    timeSlider.fullTimeExtent = FL.timeInfo.fullTimeExtent.expandTo("hours");

    timeSlider.stops = {
      interval: FL.timeInfo.interval,
    };
  });

  // Toggle between 3D and 2D
  toggleMapElem.addEventListener("click", function () {
    mapElem.style.display = "none";
    sceneElem.style.display = "block";
    timeSlider.referenceElement = sceneElem;
  });
  
  toggleSceneElem.addEventListener("click", function () {
    mapElem.style.display = "block";
    sceneElem.style.display = "none";
    timeSlider.referenceElement = mapElem;
  });
}
load();
