import Feature, { FeatureLike } from 'ol/Feature';
import { Stroke, Circle, Fill, Icon, Style, Text } from 'ol/style';
import {getMapIconByStatus, getMostFrequentStatus} from "../../../../utils/mappers/mapIconsMapper";
import {VpnStatus} from "../../../../models/enums/vpnStatus";

const clusterStyle = (feature: FeatureLike) => {
  const features: Feature[] = feature.get('features');

  const size: number = feature.get('features').length;
  const status = feature.get('features')[0]['values_']['status'];
  const style =
    size === 1
      ? new Style({
        image: new Icon({
          src: status!== VpnStatus.Initiating && status!== VpnStatus.Terminated ? getMapIconByStatus(status) : '',
          scale: 1.2,
        }),
        zIndex: 1000,
      })
      : [
        new Style({
          image: new Icon({
            src: getMostFrequentStatus(features).group,
            scale: 0.8,
          }),
          zIndex: 1001,
        }),
        new Style({
          image: new Circle({
            radius: 10,
            displacement: [13, 14],
            fill: new Fill({
              color:getMostFrequentStatus(features).circle,
            }),
            stroke: new Stroke({
              color: '#ffffff',
              width: 1,
            }),
          }),
          text: new Text({
            text: size.toString(),
            offsetY: -13,
            offsetX: 14,
            scale: 1.1,
            fill: new Fill({ color: 'white' }),
          }),
          zIndex: 1002,
        }),

      ];

  return style;
};

export default clusterStyle;
