import React from 'react';
import s from './HamburgRheilandMap.module.css'
import germanyDis from '../../assets/goverment.geo.json'
import {GeoJSON, MapContainer} from "react-leaflet";
import NewLegend from "../NewLabel/NewLabel";


const gradient = {
    "3.0": "#D9F5FB",
    "3.25": "#AAE5FA",
    "3.5": "#64CDF8",
    "3.75": "#3AC0F7",
    "4": "#00AEF5",
    "4.25": "#009DF4",
    "4.5": "#008DEF",
    "4.75": "#007FD7",
    "5": "#0071BF",
    "5.25": "#0063AB",
    "5.5": "#005797",
    "5.75": "#174C84",
    "6.5": "#283D6C",
}

const testArr = ["3.0", "3.25", "3.5", "3.75", "4", "4.25", "4.5", "5", "5.25", "5.5", "5.75", "6.5"]


const HamburgRheilandMapColored = ({typ, isColored}) => {

    const getCenter = () => {
        if (typ === "Rheinland") {
            return [50.165691, 8.451526]
        } else {
            return [51.165691, 10.451526]
        }
    }

    const getZoom = () => {
        if (typ === "Rheinland") {
            return 7
        } else {
            return 6
        }
    }

    const onEachCountry = (item, layer,) => {

        if (typ === "Rheinland") {
            layer.options.color = "transparent"

            if (item.id === 314) {
                layer.bindTooltip("Rheinland", {permanent: true, offset: [40, 0], className: s.toolTip})
            }
        } else {
            layer.options.color = "#E2EAF1"
        }

        if (item.properties.ID_1 === 6) {
            if (isColored) {
                item.properties.testN = testArr[Math.floor(Math.random() * testArr.length)]
                layer.options.fillColor = gradient[item.properties.testN]
                layer.options.color = "#5B839B"
            } else {
                layer.options.fillColor = "#FDFFFF"
                layer.bindTooltip("Hamburg", {permanent: true, offset: [20, 0], className: s.toolTip})
            }
        }

        if (item.properties.ID_1 === 11) {
            if (isColored) {
                item.properties.testN = testArr[Math.floor(Math.random() * testArr.length)]
                layer.options.fillColor = gradient[item.properties.testN]
                layer.options.color = "#5B839B"
            } else {
                layer.options.fillColor = "#FDFFFF"
                layer.options.color = "transparent"
                if (item.id === 314) {
                    layer.bindTooltip("Rheinland", {permanent: true, offset: [20, 20], className: s.toolTip})
                }
            }
        }

    }

    const setColor = () => {
        return {
            fillColor: "#ECF4FB",
            fillOpacity: 1,
            weight: 1,
        }
    }

    return (
        <div className={s.wrapp}>
            <MapContainer center={getCenter()} zoom={getZoom()}>
                <GeoJSON center={getCenter()} zoom={getZoom()}
                         style={setColor}
                         data={germanyDis}
                         onEachFeature={onEachCountry}
                />
                {isColored && <NewLegend arr={gradient}/>}
            </MapContainer>

        </div>
    );
};

export default HamburgRheilandMapColored;
