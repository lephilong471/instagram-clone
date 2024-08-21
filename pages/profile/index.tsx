import { MUIBox, MUICard } from '@/components/MUIComponents';
import HeadLogo from '@/components/profile/headLogo';
import FollowInfo from '@/components/profile/headLogo/components/FollowInfo';
import HeaderAction from '@/components/profile/headLogo/components/HeaderAction';
import Note from '@/components/profile/headLogo/components/Note';

const Profile = () => {
  return (
    <>
      <MUICard
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          background: 'transparent',
          boxShadow: 'none',
          py: 3
        }}>
        <MUICard
          sx={{
            maxWidth: '935px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            width: 'calc(100% - 40px)',
            background: 'transparent',
            boxShadow: 'none'
          }}>
          <MUIBox
            display={'flex'}
            justifyContent={'space-around'}
            alignItems={'center'}
            gap={'30px'}>
            <HeadLogo />
            <MUIBox>
              <HeaderAction />
              <FollowInfo />
              <Note />
            </MUIBox>
          </MUIBox>
        </MUICard>
      </MUICard>
    </>
  );
};

export default Profile;
