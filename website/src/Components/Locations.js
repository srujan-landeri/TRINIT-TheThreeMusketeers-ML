import React,{useRef,useState,useEffect} from "react";
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import * as tt from "@tomtom-international/web-sdk-maps";

const fetchedImageData= require('../data/images/random_coords_with_images.json');
const MAX_ZOOM = 17;

export function Locations(props) {
    const mapElement = useRef();
    const [mapLatitude, setMapLatitude] = useState(17.351395);
    const [mapLongitude, setMapLongitude] = useState(78.418934);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});
  const [imageData, setImageData] = useState({});


  useEffect(() => {
    setImageData(fetchedImageData); //!! change this to 
  });


  useEffect(() => {
    let map = tt.map({
     key: "PTjG7SqhY4KvAtoCVvtVi1X0lxKMqhKF",
     container: mapElement.current,
     center: [mapLongitude, mapLatitude],
     zoom: mapZoom
    });

    setMap(map);

    // const markerInstance = new tt.Marker(<div style={{backgroundColor:"red", height:"50px",width:"50px"}}>HELLOOOOOOOOOO</div>).setLngLat([mapLongitude, mapLatitude]).addTo(map);

    // const popupInstance = new tt.Popup({ offset: 35 }).setHTML("<h1>This is a custom popup!</h1>");
    // markerInstance.setPopup(popupInstance);

    const makeMarker=(lat,long,text,img)=>{
        const markerInstance = new tt.Marker().setLngLat([long,lat]).addTo(map);
        
        const popupInstance = new tt.Popup({ offset: [5, -35] }).setHTML(`<p>${text}</p> &nbsp; <img src=data:image/png;base64,${img} alt="" style="width:200px;height:200px;"/>`);
        markerInstance.setPopup(popupInstance);
    }

    //adding markers..
    for (let label in imageData) {
        for (let image of imageData[label]) {
            makeMarker(image.latitude, image.longitude, label,image.image);
        }
    }
    
    return () => map.remove();
  }, [imageData]);

  const defaultProps = {
    center: {
      lat: 17.351395,
      lng: 78.418934,
    },
    zoom: 11,
  };

  const { data } = props;
  console.log(data);



  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "78vh", width: "100%" }}>
      <div ref={mapElement} style={{ height: "100%", width: "100%" }} className="mapDiv" />
    </div>
  );
}