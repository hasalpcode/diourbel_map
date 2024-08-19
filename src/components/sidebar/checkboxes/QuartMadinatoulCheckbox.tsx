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
import { useHoverOng } from "../../hooks/useHoverOng";
import { useHoverQuartier } from "../../hooks/useHoverQuartier";
import { Polygon } from "ol/geom";
import { useHoverQuartierMadinatoul } from "../../hooks/useHoverQuartierMadinatoul";

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
  url: "/quartier_Madinatoul.json",
  format: new GeoJSON(),
});

export const quartierMadinatoulLayer = new VectorLayer({
  className: "quartier",
  source: airportSource,
  style: airportStyle,
  maxResolution: 700,
  
});

export const clusterSource = new Cluster({
  distance: 150,
  minDistance: 0,
  
  source: airportSource,
});

export const clusterLayer = new VectorLayer({
  source: clusterSource,
  style: (feature) => {
    return new Style({
      image: new Circle({
        radius: 200, // Définir ici le rayon fixe que vous souhaitez
        stroke: new Stroke({
          color: "#53CE72",
          width: 1,
          
        }),
        fill: new Fill({
          color: "rgba(83, 206, 114, 0.3)",

        }),
      }),
    });
  },
});


//485.3
function QuartMadinatoulCheckbox() {
  const [checked, setChecked] = useState(false);
  const airportClassName = checked ? "airport-selected" : "airport-default";


  useLayer(quartierMadinatoulLayer, checked);
  useLayer(clusterLayer, checked);
  useHoverQuartierMadinatoul(checked);

  return (
    <div className={"checkbox"}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {checked ? "" : ""} Quartier Madinatoul
      </label>
    </div>
  );
}


export default QuartMadinatoulCheckbox;
