import { useGeographic } from "ol/proj";
import { Map, View } from "ol";
import React, { Dispatch, SetStateAction } from "react";
import { Layer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import VectorLayer from "ol/layer/Vector";
import { Fill, Stroke, Style } from "ol/style";
import Feature from "ol/Feature";
import Polygon from "ol/geom/Polygon";

// Assurez-vous d'utiliser le système de projection géographique
useGeographic();

interface MapContext {
  map: Map;
  setLayers: Dispatch<SetStateAction<Layer[]>>;
  layers: Layer[];
  setBaseLayer: (layer: Layer) => void;
}

// Définir les coordonnées du polygone en EPSG:4326
const coordinates = [
  [
    [-16.233, 14.654],
    [-16.231, 14.654],
    [-16.231, 14.652],
    [-16.233, 14.652],
    [-16.233, 14.654]  // Fermeture du polygone
  ]
];

// Créer le polygone avec le bon format
const polygonFeature = new Feature({
  geometry: new Polygon(coordinates)  // `coordinates` est un tableau de tableaux de coordonnées
});

// Créer une source de vecteur pour le polygone
const vectorSource = new VectorSource({
  features: [polygonFeature]
});

// Créer une couche de vecteur pour le polygone
const vectorLayer = new VectorLayer({
  source: vectorSource,
  style: new Style({
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.6)'
    }),
    stroke: new Stroke({
      color: '#ffcc33',
      width: 2
    })
  })
});

// Créer la carte et ajouter la couche de vecteur
export const map = new Map({
  target: 'map',  // Assurez-vous que cet ID correspond à l'élément HTML dans votre projet
  view: new View({
    center: [-16.2324499, 14.653465],
    zoom: 14.5,
    minZoom: 14.5,
    maxZoom: 15
  }),
  layers: [vectorLayer] // Ajout de la couche de vecteur à la carte
});

export const MapContext = React.createContext<MapContext>({
  map,
  setLayers: () => {},
  layers: [vectorLayer], // Initialiser avec la couche de vecteur
  setBaseLayer: () => {},
});
