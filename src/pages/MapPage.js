import { auth } from '../firebase';
import { useNavigate, Navigate } from "react-router-dom";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";

import { useAuthContext } from '../context/AuthContext';
import { Search } from "../components/Search";

export const MapPage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
  };
  const handleList = () => {
    navigate('/List');
  };

  // const containerStyle = {
  //   height: "90vh",
  //   width: "100%",

  // };

  // const center = {
  //   lat: 35.69575,
  //   lng: 139.77521,
  // };

  // var service = new google.maps.places.PlacesService(map);
  // service.textSearch({
  //   location: new google.maps.LatLng(35.70, 139.70),
  //   radius: 500,
  //   query: 'レストラン'
  // }, function (results, status) {
  //   if (status == google.maps.places.PlacesServiceStatus.OK) {
  //     for (var i = 0; i < results.length; i++) {
  //       var place = results[i];
  //       console.log(place);
  //     }
  //   }
  // });

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return (
      <>
        <div>
          <h1>マップページ</h1>
          <button onClick={handleLogout}>ログアウト</button>
          <button onClick={handleList}>リスト画面へ</button>
        </div>
        {/* <LoadScript googleMapsApiKey="AIzaSyAv4dUsvYxraYG8qB1cd94NCoE4iB8rTAo">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
          ></GoogleMap>
        </LoadScript> */}
        <Search></Search>
      </>
    );
  }
}
