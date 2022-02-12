import { auth } from '../firebase';
import { useNavigate, Navigate } from "react-router-dom";
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
  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <h1>マップページ</h1>
        <button onClick={handleLogout}>ログアウト</button>
        <button onClick={handleList}>リスト画面へ</button>
      </div>
    );
  }
}
