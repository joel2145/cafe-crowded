import { auth } from '../firebase';
import { useNavigate, Navigate } from "react-router-dom";
import { Box, Image } from '@chakra-ui/react'

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

  const property = {
    imageUrl: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
    imageAlt: 'スタバの写真',
    title: 'スターバックス コーヒー 静岡中原店',
    crowded: '通常に比べて混んでいます',
    crowdedGraph: "https://images.unsplash.com/photo-1592495989226-03f88104f8cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1824&q=80",
    crowdedGraphAlt: "混雑具合のグラフ",
  }

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return (
      <>
        <div>
          <h1>リストページ</h1>
          <button onClick={handleLogout}>ログアウト</button>
          <button onClick={handleMap}>マップ画面へ</button>
        </div>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={property.imageUrl} alt={property.imageAlt} />

          <Box p='6'>
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              {property.title}
            </Box>
          </Box>
          <Image src={property.crowdedGraph} alt={property.crowdedGraphAlt} />
        </Box>
      </>
    );
  }
};


