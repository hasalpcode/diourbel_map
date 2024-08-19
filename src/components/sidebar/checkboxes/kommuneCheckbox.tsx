import React, { useState } from "react";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import useLayer from "../../hooks/useLayer";
import useClickKommune from "../../hooks/useClickKommune";

export const kommuneLayer = new VectorLayer({
  className: "kommuner",
  source: new VectorSource({
    url: "/kommuner.json",
    format: new GeoJSON(),
  }),
});

function KommuneCheckbox() {
  const [checked, setChecked] = useState(false);

  useLayer(kommuneLayer, checked);
  useClickKommune(checked);

  return (
    <div className={"checkbox"}>
      {/* <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {checked ? "Hide" : "Show"} Kommuner
      </label> */}
    </div>
  );
}

export default KommuneCheckbox;
