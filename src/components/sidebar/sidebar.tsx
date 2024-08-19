import React from "react";
import KommuneCheckbox from "./checkboxes/kommuneCheckbox";
import AirportCheckbox from "./checkboxes/santeCheckbox";
import LayerDropdown from "./LayerDropdown";
import LineStringCheckbox from "./checkboxes/LineStringCheckbox";
import EducationCheckbox from "./checkboxes/CemCheckbox";
import CformationCheckbox from "./checkboxes/CformationCheckbox";
import Multiselect from "multiselect-react-dropdown";
import Dropdown from "./checkboxes/Dropdown";
import CultureCheckbox from "./checkboxes/CultureCheckbox";
import EcoleElmCheckbox from "./checkboxes/EcoleElmCheckbox";
import EcolePriveeCheckbox from "./checkboxes/EcolePriveCheckbox";
import EntrepriseCheckbox from "./checkboxes/EntrepriseCheckbox";
import ForageCheckbox from "./checkboxes/ForageCheckbox";
import FrancoArabeCheckbox from "./checkboxes/FrancoArabeCheckbox";
import GareCheckbox from "./checkboxes/GareCheckbox";
import GmosqueCheckbox from "./checkboxes/GmosqueCheckbox";
import HotelerieCheckbox from "./checkboxes/HotelerieCheckbox";
import InstFinancierCheckbox from "./checkboxes/InstFinancierCheckbox";
import LoisirCheckbox from "./checkboxes/LoisirCheckbox";
import MarcheCheckbox from "./checkboxes/MarcheCheckbox";
import MediaCheckbox from "./checkboxes/MediaCheckbox";
import OngCheckbox from "./checkboxes/OngCheckbox";
import PlacePubliqueCheckbox from "./checkboxes/PlacePubliqueCheckbox";
import PcourantCheckbox from "./checkboxes/PcourantCheckbox";
import PrescolaireCheckbox from "./checkboxes/PrescolaireCheckbox";
import PuitsCheckbox from "./checkboxes/PuitsCheckbox";
import ReligionCheckbox from "./checkboxes/ReligionCheckbox";
import RestoCheckbox from "./checkboxes/RestoCheckbox";
import RobinetsCheckbox from "./checkboxes/RobinetsCheckbox";
import ServicesCheckbox from "./checkboxes/ServicesCheckbox";
import UnivCheckbox from "./checkboxes/UniversiteCheckbox";
import AdministrationCheckbox from "./checkboxes/AdministrationCheckbox";
import BoulangerieCheckbox from "./checkboxes/BoulangerieCheckbox";
import CentreSocialCheckbox from "./checkboxes/CentreSocialCheckbox";
import SsecuriteCheckbox from "./checkboxes/SsecuriteCheckbox";
import SportCheckbox from "./checkboxes/SportCheckbox";
import StationPrelevCheckbox from "./checkboxes/StationPrelevCheckbox";
import StationServiceCheckbox from "./checkboxes/StationServiceCheckbox";
import QuartCheckbox from "./checkboxes/QuartCheckbox";
import QuartMadinatoulCheckbox from "./checkboxes/QuartMadinatoulCheckbox";
import QuartCantaCheckbox from "./checkboxes/QuartCantaCheckbox";
import QuartCibraCheckbox from "./checkboxes/QuartCibraCheckbox";

function Sidebar() {
  
  return (
    //sidebar
    <div className={"sidebar"}>
      <LayerDropdown />
      {/* <LayerDropdown />
      <KommuneCheckbox />
      <AirportCheckbox />
      <EducationCheckbox />
      <CformationCheckbox />
      <LineStringCheckbox />
  */}
 
      <Dropdown title="Autres">
        <AirportCheckbox />
        <EntrepriseCheckbox />
        <GareCheckbox />
        <HotelerieCheckbox />
        <InstFinancierCheckbox />
        <MarcheCheckbox />
        <MediaCheckbox />
        <OngCheckbox />
        <PcourantCheckbox />
        <RestoCheckbox />
        
        <AdministrationCheckbox />
        <BoulangerieCheckbox />
        
      </Dropdown>
      <Dropdown title="Centres & services">
      <ServicesCheckbox />
      <CentreSocialCheckbox />
        <SsecuriteCheckbox />
        <StationPrelevCheckbox />
        <StationServiceCheckbox />
      </Dropdown>
      <Dropdown title="Education">
        <EducationCheckbox />
        <CformationCheckbox />
        <EcoleElmCheckbox />
        <EcolePriveeCheckbox />
        <FrancoArabeCheckbox />
        <PrescolaireCheckbox />
        <UnivCheckbox />
      </Dropdown>
      <Dropdown title="Culture">
        <CultureCheckbox />
        <LoisirCheckbox />
        <PlacePubliqueCheckbox />
        <SportCheckbox />
      </Dropdown>
      <Dropdown title="Religion">
        <GmosqueCheckbox />
        <ReligionCheckbox />
      </Dropdown>
      <Dropdown title="Eaux">
        <ForageCheckbox />
        <PuitsCheckbox />
        <RobinetsCheckbox />
      </Dropdown>

      <Dropdown title="Quartier">
        <QuartCheckbox />
        <QuartMadinatoulCheckbox />
        <QuartCantaCheckbox />
        <QuartCibraCheckbox />
       
      </Dropdown>
    </div>
  );
}

export default Sidebar;
