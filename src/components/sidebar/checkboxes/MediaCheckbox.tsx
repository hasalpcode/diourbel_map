import React, { useState } from "react";
import useLayer from "../../hooks/useLayer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { Circle, Fill, Stroke, Style, Text } from "ol/style";
import { useHoverAirport } from "../../hooks/useHoverAirport";
import { Cluster } from "ol/source";
import { useHoverCem } from "../../hooks/useHoverCem";
import { useHoverEcoleElementaire } from "../../hooks/useHoverEcoleElementaire";
import { useHoverEcolePrivee } from "../../hooks/useHoverEcolePrivee";
import { useHoverEntreprise } from "../../hooks/useHoverEntreprise";
import { useHoverForage } from "../../hooks/useHoverForage";
import { useHoverGare } from "../../hooks/useHoverGare";
import { useHoverMarche } from "../../hooks/useHoverMarche";
import { useHoverMedia } from "../../hooks/useHoverMedia";

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
  url: "/media.json",
  format: new GeoJSON(),
});

export const mediaLayer = new VectorLayer({
  className: "media",
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
          color: "#D223A6",
          width: 1,
        }),
        fill: new Fill({
          color: "#D223A6",
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
function MediaCheckbox() {
  const [checked, setChecked] = useState(false);

  useLayer(mediaLayer, checked);
  useLayer(clusterLayer, checked);
  useHoverMedia(checked);

  return (
    <div className={"checkbox"}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {checked ? "" : ""} Media
      </label>
    </div>
  );
}


export default MediaCheckbox;
