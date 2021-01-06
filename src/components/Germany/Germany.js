import React from 'react';
import {GeoJSON, MapContainer} from "react-leaflet";
import germanyDis from '../../assets/dist.geo.json'
import goverment from '../../assets/goverment.geo.json'
import Legend from "../Legend/Legend";
import s from './Germany.module.css'
import HamburgRheilandMapColored from "../HamburgRheilandMapColored/HamburgRheilandMapColored";

const gradient = {
    "3.0": "#DEF2FA",
    "3.25": "#76D3E8",
    "3.5": "#128FE8",
    "3.75": "#3226CA",
    "4": "#2D3D68",
    "4.25": "#0D6946",
    "4.5": "#1ABF32",
    "4.75": "#98E90A",
    "5": "#FFF50D",
    "5.25": "#E8A204",
    "5.5": "#FB6009",
    "5.75": "#FB000B",
    "6.5": "#80000B",
}

const testArr = [3.0, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 5, 5.25, 5.5, 5.75, 6.5]

const Germany = () => {

    const onEachCountry = (item, layer,) => {
        item.properties.testN = testArr[Math.floor(Math.random() * testArr.length)]
    }

    const setColor = (feature) => {
        return {
            fillColor: gradient[feature.properties.testN],
            fillOpacity: 1,
            weight: 1,
            color: "rgb(0,0,0)"
        }
    }

    const statement = (item) => {
        return (item.properties.NAME_1 === "Rheinland-Pfalz") || (item.id === 177)
    }

    return (
        <div className={s.wrapp}>

            {/*<MapContainer center={[51.165691, 10.451526]} zoom={6}>*/}
            {/*    <GeoJSON center={[51.165691, 10.451526]} zoom={6}*/}
            {/*             style={setColor}*/}
            {/*             data={germanyDis}*/}
            {/*             onEachFeature={onEachCountry}*/}
            {/*    />*/}
            {/*</MapContainer>*/}
            {/*<Legend arr={gradient}/>*/}

            {/* ---------------------------------------------- */}
            <HamburgRheilandMapColored typ={"Rheinland"} isColored={true}/>
            {/*<HamburgRheilandMapColored isColored={true}/>*/}
            {/*<HamburgRheilandMapColored />*/}
            {/* ---------------------------------------------- */}

        </div>

    );
};

export default Germany;
