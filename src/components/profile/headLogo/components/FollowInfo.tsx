import { MUIBox, MUITypography } from '@/components/MUIComponents';
import Link from 'next/link';

const FollowInfo = () => {
  return (
    <MUIBox
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        my: 1.5
      }}>
      <MUITypography>0 bài viết</MUITypography>
      <Link href={''}>
        <MUITypography>
          <strong>62</strong> người theo dõi
        </MUITypography>
      </Link>

      <Link href={''}>
        <MUITypography>
          Đang theo dõi <strong>2</strong> người dùng
        </MUITypography>
      </Link>
    </MUIBox>
  );
};

export default FollowInfo;
