import { auth } from '../firebase';
import { useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';

export const ListPage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
  };
  const handleMap = () => {
    navigate('/map');
  };
  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <h1>リストページ</h1>
        <button onClick={handleLogout}>ログアウト</button>
        <button onClick={handleMap}>マップ画面へ</button>
      </div>
    );
  }
};


