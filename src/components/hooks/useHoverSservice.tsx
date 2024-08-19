import { Feature, MapBrowserEvent, Overlay } from "ol";
import { map } from "../map/mapContext";
import { useEffect, useState } from "react";
import { Point } from "ol/geom";
import { FeatureLike } from "ol/Feature";
import { educationLayer } from "../sidebar/checkboxes/CemCheckbox";
import { sPrelevLayer } from "../sidebar/checkboxes/StationPrelevCheckbox";
import { stServiceLayer } from "../sidebar/checkboxes/StationServiceCheckbox";

type AirportProperties = {
  id: string;
  name: string;
  
};

type AirportFeature = { getProperties(): AirportProperties } & Feature<Point>;
const overlayElement = document.createElement("div");
overlayElement.className = "hover-overlay";
const overlay = new Overlay({
  element: overlayElement,
  positioning: "bottom-center",
  offset: [0, -10],
});

map.addOverlay(overlay);

export function useHoverSservice(checked: boolean) {
  const [activeFeature, setActiveFeature] = useState<AirportFeature>();

  function handlePointerMove(e: MapBrowserEvent<PointerEvent>) {
    const features: FeatureLike[] = [];

    map.forEachFeatureAtPixel(
      e.pixel,
      (f) => {
        features.push(f);
      },
      { hitTolerance: 10, layerFilter: (l) => l === stServiceLayer  },
    );

    if (features.length === 1 && checked) {
      setActiveFeature(features[0] as AirportFeature);
      overlayElement.innerHTML = `<div>${features[0].getProperties().name}</div>`;
      overlay.setPosition(e.coordinate);
    } else {
      overlayElement.innerHTML = ``;
      overlay.setPosition(undefined);
    }
  }

  useEffect(() => {
    if (checked) {
      map?.on("pointermove", handlePointerMove);
    }

    return () => {
      map?.un("pointermove", handlePointerMove);
    };
  }, [checked]);
}