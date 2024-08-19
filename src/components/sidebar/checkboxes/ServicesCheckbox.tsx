import React, { useState } from "react";
import useLayer from "../../hooks/useLayer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { Circle, Fill, Stroke, Style, Text } from "ol/style";
import { useHoverAirport } from "../../hooks/useHoverAirport";
import { Cluster } from "ol/source";
import { useHoverCem } from "../../hooks/useHoverCem";
import { useHoverService } from "../../hooks/useHoverService";

function airportStyle() {
  return new Style({
    image: new Circle({
      stroke: new Stroke({ color: "white", width: 1 }),
      fill: new Fill({ color: "gray" }),
      radius: 4,
    }),
  });
}

export const airportSource = new VectorSource({
  url: "/service.json",
  format: new GeoJSON(),
});

export const serviceLayer = new VectorLayer({
  className: "service",
  source: airportSource,
  style: airportStyle,
  maxResolution: 700,
});

export const clusterSource = new Cluster({
  distance: 50,
  minDistance: 0,
  source: airportSource,
});

export const clusterLayer = new VectorLayer({
  source: clusterSource,
  style: (feature) => {
    const size = feature.get("features").length;

    return new Style({
      image: new Circle({
        radius: 10 + size * 0.001,
        stroke: new Stroke({
          color: "#c61d96",
          width: 1,
        }),
        fill: new Fill({
          color: "#c61d96",
        }),
      }),
      text: new Text({
        text: '',
        font: "bold 12px sans-serif",
        fill: new Fill({
          color: "white",
        }),
      }),
    });
  },
});
//485.3
function ServicesCheckbox() {
  const [checked, setChecked] = useState(false);

  useLayer(serviceLayer, checked);
  useLayer(clusterLayer, checked);
  useHoverService(checked);

  return (
    <div className={"checkbox"}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {checked ? "" : ""} Services
      </label>
    </div>
  );
}


export default ServicesCheckbox;
