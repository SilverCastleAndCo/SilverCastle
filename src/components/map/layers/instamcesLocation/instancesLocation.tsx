// import { Point } from "ol/geom";
// import { fromLonLat } from "ol/proj";
// import { useAppSelector } from "../../../../redux/store";
// import { RFeature, RFeatureUIEvent, RLayerCluster} from "rlayers";
// import { Feature } from 'ol';
// import { useState } from "react";
// import { Instance, Region } from '@admin-types';
// import { zoomInLocation } from '../../../../utils/zoomLocation';
//
// import clusterStyle from "./instancesLocationLayerStyles";
//
// const Z_INDEX = 10;
// const DISTANCE = 50;
//
// const UsersLocationLayer = () => {
//   const regions = useAppSelector((state) => state.regions.regions);
//   const [selectInstance, setSelectInstance] = useState<Instance | undefined>(undefined);
//
//   const handlePointerEnter = ({ map, target }: RFeatureUIEvent<Feature>) => {
//     map.getViewport().style.cursor = "pointer";
//   };
//
//   const handlePointerLeave = ({ map }: RFeatureUIEvent<Feature>) => {
//     map.getViewport().style.cursor = "";
//   };
//
//   const handleClickFeature = (event: RFeatureUIEvent<Feature>) => {
//     const features = event.target.get("features");
//     if (features.length > 1) {
//       return zoomInLocation(event, 5);
//     } else {
//       const selectedUserId = event.target.get('features')[0]['values_']['ip'];
//       setSelectInstance(
//           regions
//               .flatMap((region) => region.instances)
//               .find((instance: Instance) => instance.ip === selectedUserId)
//       );
//       return zoomInLocation(event, 10);
//     }
//   };
//
//   return (
//       <div>
//         <RLayerCluster
//             zIndex={Z_INDEX}
//             distance={DISTANCE}
//             style={(feature) => clusterStyle(feature)}
//             onPointerEnter={handlePointerEnter}
//             onPointerLeave={handlePointerLeave}
//             onClick={handleClickFeature}
//         >
//           {regions.length > 0 &&
//               regions.map((region: Region) => (
//                   <div key={region.location}>
//                     {region.instances.map((instance, index) => (
//                         <RFeature
//                             key={instance.ip}
//                             geometry={new Point(fromLonLat([Number(instance.position.lon), Number(instance.position.lat)]))}
//                             properties={{ ip: instance.ip, status: instance.status}}
//                         >
//                         </RFeature>
//                     ))}
//                   </div>
//               ))}
//         </RLayerCluster>
//       </div>
//   );
// };
//
// export default UsersLocationLayer;
