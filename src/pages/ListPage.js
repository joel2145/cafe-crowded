import { auth } from '../firebase';
import { useNavigate, Navigate } from "react-router-dom";
import { Box, Image, Button } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

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
        <Box>
          <h1>リストページ</h1>
          <Button colorScheme='teal' onClick={handleLogout} size='sm' marginTop={5} marginBottom={5} marginRight={5}>ログアウト</Button>
          <Button colorScheme='blue' onClick={handleMap} size='sm' marginTop={5} marginBottom={5}>マップ画面へ</Button>
        </Box>

        {/* お気に入りリスト */}
        <Grid
          h='200px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
          marginTop={5} marginBottom={5}
        >
          <GridItem rowSpan={2} colSpan={1}  >
            <Image src={property.imageUrl} alt={property.imageAlt} boxSize='150px' borderRadius='md' />
            <Button colorScheme='blue' onClick={handleMap} size='sm' marginTop={5} marginBottom={5}>GoogleMap</Button>
          </GridItem>


          <GridItem colSpan={4}  >
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              {property.title}
            </Box>
          </GridItem>
          <GridItem colSpan={4} height={20} width={40} bgColor="teal">
            <Image src={property.crowdedGraph} alt={property.crowdedGraphAlt} />
          </GridItem>
        </Grid>

        <Grid
          h='200px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
          marginTop={5} marginBottom={5}
        >
          <GridItem rowSpan={2} colSpan={1}  >
            <Image src={property.imageUrl} alt={property.imageAlt} boxSize='150px' borderRadius='md' />
            <Button colorScheme='blue' onClick={handleMap} size='sm' marginTop={5} marginBottom={5}>GoogleMap</Button>
          </GridItem>


          <GridItem colSpan={4}  >
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              {property.title}
            </Box>
          </GridItem>
          <GridItem colSpan={4} height={20} width={40} bgColor="teal">
            <Image src={property.crowdedGraph} alt={property.crowdedGraphAlt} />
          </GridItem>
        </Grid>

        <Grid
          h='200px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
          marginTop={5} marginBottom={5}
        >
          <GridItem rowSpan={2} colSpan={1}  >
            <Image src={property.imageUrl} alt={property.imageAlt} boxSize='150px' borderRadius='md' />
            <Button colorScheme='blue' onClick={handleMap} size='sm' marginTop={5} marginBottom={5}>GoogleMap</Button>
          </GridItem>


          <GridItem colSpan={4}  >
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              {property.title}
            </Box>
          </GridItem>
          <GridItem colSpan={4} height={20} width={40} bgColor="teal">
            <Image src={property.crowdedGraph} alt={property.crowdedGraphAlt} />
          </GridItem>
        </Grid>
      </>
    );
  }
};


