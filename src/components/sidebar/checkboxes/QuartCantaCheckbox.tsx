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
import { useHoverQuartierCibra } from "../../hooks/useHoverQuartierCibra";
import { useHoverQuartierCanta } from "../../hooks/useHoverQuartierCanta";

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
  url: "/quartier_cANTA.json",
  format: new GeoJSON(),
});

export const quartiercantaLayer = new VectorLayer({
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
        radius: 170, // Définir ici le rayon fixe que vous souhaitez
        stroke: new Stroke({
          color: "#D6904B",
          width: 1,
          
        }),
        fill: new Fill({
          color: "rgba(214,144,75, 0.3)",
        }),
      }),
    });
  },
});


//485.3
function QuartCantaCheckbox() {
  const [checked, setChecked] = useState(false);
  const airportClassName = checked ? "airport-selected" : "airport-default";


  useLayer(quartiercantaLayer, checked);
  useLayer(clusterLayer, checked);
  useHoverQuartierCanta(checked);

  return (
    <div className={"checkbox"}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {checked ? "" : ""} Quartier Cheikh.Anta
      </label>
    </div>
  );
}


export default QuartCantaCheckbox;
