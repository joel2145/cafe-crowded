import { auth } from '../firebase';
import { useNavigate, Navigate } from "react-router-dom";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

import { useAuthContext } from '../context/AuthContext';

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

  const containerStyle = {
    height: "90vh",
    width: "100%",

  };

  const center = {
    lat: 35.69575,
    lng: 139.77521,
  };

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
        <LoadScript googleMapsApiKey="AIzaSyAv4dUsvYxraYG8qB1cd94NCoE4iB8rTAo">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
          ></GoogleMap>
        </LoadScript>
      </>
    );
  }
}
