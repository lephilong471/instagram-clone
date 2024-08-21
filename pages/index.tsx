import Post from '@/components/Home/Post';
import SectionHome from '@/components/Home/Section';
import Story from '@/components/Home/Story';
import { MUIBox, MUIGrid } from '@/components/MUIComponents';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });
const data = [
  {
    username: 'user',
    image: '/images/Avatar.jpg',
    path: ''
  },
  {
    username: 'user',
    image: '/images/Avatar.jpg',
    path: ''
  },
  {
    username: 'user',
    image: '/images/Avatar.jpg',
    path: ''
  },
  {
    username: 'user',
    image: '/images/Avatar.jpg',
    path: ''
  },
  {
    username: 'user',
    image: '/images/Avatar.jpg',
    path: ''
  },
  {
    username: 'user',
    image: '/images/Avatar.jpg',
    path: ''
  }
];

export default function Home() {
  return (
    <>
      <MUIGrid container sx={{ justifyContent: 'center', mt: 3 }}>
        <MUIGrid item xs={12} md={8} sx={{ maxWidth: '630px !important' }}>
          <MUIGrid container spacing={2} sx={{px:5}}>
            {data.map((item, index) => (
              <Story key={index} data={item} />
            ))}
          </MUIGrid>
          <MUIBox
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyItems: 'center',
              alignItems: 'center'
            }}>
            <Post />
          </MUIBox>
        </MUIGrid>
        <MUIGrid
          item
          xs={12}
          md={4}
          sx={{
            maxWidth: '319px !important',
            display: { xs: 'none', sm: 'none', md: 'block' }
          }}>
          <SectionHome />
        </MUIGrid>
      </MUIGrid>
    </>
  );
}
