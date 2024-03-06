import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Home, Create, AccountCircle, Mail, Instagram, Twitter, LinkedIn, Facebook } from '@mui/icons-material';
import { AppBar, BottomNavigation, BottomNavigationAction, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Container, Grid, IconButton, Link, Menu, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Menu as MenuIcon } from '@mui/icons-material';

function BlogHome() {

  const router = useRouter(); // useRouter 훅을 사용하여 router 객체를 생성합니다.

  const posts = [
    {
      id: 1,
      title: '선준의 취미',
      content: '영차',
      categories: ['클라이밍'],
      imageUrl: '/images/다운로드2.jpg'
    },
    {
      id: 2,
      title: ' 선준의 취미2',
      content: '영차~',
      categories: ['클라이밍'],
      imageUrl: '/images/다운로드 (1).jpg'
    },
    {
      id: 3,
      title: '선준의 취미3',
      content: '영영차~',
      categories: ['클라이밍'],
      imageUrl: '/images/다운로드3.jpg'
    },
    {
      id: 4,
      title: '선준의 취미4',
      content: '호호',
      categories: ['여행'],
      imageUrl: '/images/다운로드4.jpg'
    },
    {
      id: 5,
      title: '선준의 취미5',
      content: '호롤로~',
      categories: ['여행'],
      imageUrl: '/images/다운로드5.jpg'
    },
    {
      id: 6,
      title: '선준의 취미6',
      content: '호호롤로~',
      categories: ['여행'],
      imageUrl: '/images/다운로드6.jpg'
    },
    {
        id: 7,
        title: '선준의 취미7',
        content: '영차',
        categories: ['클라이밍'],
        imageUrl: '/images/다운로드2.jpg'
      },
      {
        id: 8,
        title: ' 선준의 취미8',
        content: '영차~',
        categories: ['클라이밍'],
        imageUrl: '/images/다운로드 (1).jpg'
      },
      {
        id: 9,
        title: '선준의 취미9',
        content: '영영차~',
        categories: ['클라이밍'],
        imageUrl: '/images/다운로드3.jpg'
      },
      {
        id: 10,
        title: '선준의 취미10',
        content: '호호',
        categories: ['여행'],
        imageUrl: '/images/다운로드4.jpg'
      },
      {
        id: 11,
        title: '선준의 취미11',
        content: '호롤로~',
        categories: ['여행'],
        imageUrl: '/images/다운로드5.jpg'
      },
      {
        id: 12,
        title: '선준의 취미12',
        content: '호호롤로~',
        categories: ['여행'],
        imageUrl: '/images/다운로드6.jpg'
      },
      {
        id: 13,
        title: '선준의 취미13',
        content: '영차',
        categories: ['클라이밍'],
        imageUrl: '/images/다운로드2.jpg'
      },
      {
        id: 14,
        title: ' 선준의 취미14',
        content: '영차~',
        categories: ['클라이밍'],
        imageUrl: '/images/다운로드 (1).jpg'
      },
      {
        id: 15,
        title: '선준의 취미15',
        content: '영영차~',
        categories: ['클라이밍'],
        imageUrl: '/images/다운로드3.jpg'
      },
      {
        id: 16,
        title: '선준의 취미16',
        content: '호호',
        categories: ['여행'],
        imageUrl: '/images/다운로드4.jpg'
      },
      {
        id: 17,
        title: '선준의 취미17',
        content: '호롤로~',
        categories: ['여행'],
        imageUrl: '/images/다운로드5.jpg'
      },
      {
        id: 18,
        title: '선준의 취미18',
        content: '호호롤로~',
        categories: ['여행'],
        imageUrl: '/images/다운로드6.jpg'
      },

    // TODO: API에서 게시물 데이터 가져오기
  ];

  const [appBarHeight, setAppBarHeight] = useState(0);

  useEffect(() => {
    // AppBar 요소를 선택합니다.
    const appBar = document.querySelector('.MuiAppBar-root');
    if (appBar) {
      // AppBar의 높이를 상태에 저장합니다.
      setAppBarHeight(appBar.clientHeight);
    }
  }, []); // 의존성 배열이 빈 배열이므로, 컴포넌트 마운트 시에만 실행됩니다.

  // board/[id] 경로로 라우팅합니다.
  const handlePostClick = (post) => {
    router.push(`/board/${post.id}`);
  };

  // 새 글 작성 페이지로 이동하는 함수
  const handleCreatePost = () => {
    router.push('/board/create/CreatePostPage');
  };


  return (
    <div>

      {/* app bar */}
      <AppBar position="fixed">
        <Toolbar>
          <Grid container spacing={1} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={true}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                선준's 블로그
              </Typography>
            </Grid>
            <Grid item xs={12} sm={true} container justifyContent="center">
              <Button color="inherit">홈</Button>
              <Button color="inherit">클라이밍</Button>
              <Button color="inherit">여행</Button>
            </Grid>
            <Grid item>
              <Button color="inherit" onClick={handleCreatePost}>
                새 글 작성
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

    <div style={{ paddingTop: appBarHeight,  paddingBottom: appBarHeight }}>
      <Container>
        <Grid container spacing={3}>
          {posts.map(post => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
              <CardActionArea onClick={() => handlePostClick(post)}>
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <CardMedia
                    component="img"
                    alt="미리보기 이미지"
                    height="140"
                    image={post.imageUrl}
                    sx={{ objectFit: 'cover' }} // 이미지가 카드 크기에 맞게 채워지도록 조정합니다.
                  />
                  <Box flexGrow={1} display="flex" flexDirection="column">
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">{post.title}</Typography>
                      <Typography variant="body2" color="textSecondary" component="p">{post.content}</Typography>
                    </CardContent>
                    <Box p={1} display="flex" justifyContent="flex-start" flexWrap="wrap">
                      {post.categories.map(category => (
                        <Chip label={category} key={category} sx={{ m: 0.5 }} />
                      ))}
                    </Box>
                  </Box>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>

      <footer style={{ textAlign: 'center', padding: '2em 0', background: '#333', color: 'white' }}>
  <Container>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6" gutterBottom>회사 정보</Typography>
        <Typography>주소: 서울특별시 강남구 </Typography>
        <Typography>전화: 02-1234-5678</Typography>
        <Typography>Email: info@myblog.com</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6" gutterBottom>링크</Typography>
        <Link href="#" color="inherit">홈</Link><br />
        <Link href="#" color="inherit">블로그</Link><br />
        <Link href="#" color="inherit">포트폴리오</Link><br />
        <Link href="#" color="inherit">연락처</Link>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6" gutterBottom>소셜 미디어</Typography>
        <IconButton color="inherit">
          <Facebook />
        </IconButton>
        <IconButton color="inherit">
          <Instagram />
        </IconButton>
        <IconButton color="inherit">
          <Twitter />
        </IconButton>
        <IconButton color="inherit">
          <LinkedIn />
        </IconButton>
      </Grid>
    </Grid>
    <Box mt={3}>
      <Typography variant="body2">© 2023 나의 블로그. 모든 권리 보유.</Typography>
    </Box>
  </Container>
</footer>
    </div>
  );
}

export default BlogHome;
