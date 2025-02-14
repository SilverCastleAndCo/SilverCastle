import "ol/ol.css";
import "rlayers/control/layers.css";

import {fromLonLat} from "ol/proj";
import {RControl, RLayerTileWebGL, RMap} from "rlayers";

// import UsersLocationLayer from "./layers/instamcesLocation/instancesLocation";
import {useEffect} from 'react';

const ISRAEL_CENTER_COORDS = fromLonLat([35.0818155, 31.4117257]);
const ISRAEL_DEFAULT_ZOOM = 0;

interface Props {
    width: string;
    height: string;
}

const mapLayers = 'https://{a-d}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.pn'
const Map = ({height, width}: Props) => {

    useEffect(() => {
        const viewport = document.querySelector('.ol-viewport') as HTMLElement;
        if (viewport) {
            viewport.style.borderRadius = '15px';
            viewport.style.overflow = 'hidden';
        }
    }, []);

    return (
        <RMap
            width={width}
            height={height}
            initial={{
                center: ISRAEL_CENTER_COORDS,
                zoom: ISRAEL_DEFAULT_ZOOM,
            }}
            noDefaultControls
            className="h-full"
        >
            <RLayerTileWebGL
                url={mapLayers}
                zIndex={1}
                opacity={1}
                wrapX={true}
            />
            <RControl.RScaleLine/>
            <RControl.RZoom/>
            <RControl.RZoomSlider/>
            {/*<UsersLocationLayer />*/}
        </RMap>
    );
};

export default Map;
