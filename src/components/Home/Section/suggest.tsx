import { MUIBox, MUICard, MUITypography } from '@/components/MUIComponents';
import { ACTION_COLOR_PRIMARY, COLORS_BLACK } from '@/config/style';
import Image from 'next/image';
import Link from 'next/link';

const Suggest = () => {
  return (
    <>
      <MUICard sx={{ border: 'none', boxShadow: 'none' }}>
        <MUIBox
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            my: 3
          }}>
          <MUITypography
            sx={{ fontSize: '14px', color: '#737373', fontWeight: '600' }}>
            Gợi ý cho bạn
          </MUITypography>
          <Link href={''}>
            <MUITypography
              sx={{ color: COLORS_BLACK, fontSize: '12px', fontWeight: '600' }}>
              Xem tất cả
            </MUITypography>
          </Link>
        </MUIBox>

        <MUICard
          sx={{
            border: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: 'none',
            mt: 2
          }}>
          <MUIBox
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              gap: '10px'
            }}>
            <MUIBox>
              <img
                src="/images/Avatar.jpg"
                style={{
                  borderRadius: '50%',
                  height: '44px',
                  width: '44px'
                }}
                alt="avt"
              />
            </MUIBox>
            <MUIBox>
              <Link href={''}>
                <MUITypography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                  sont.thed
                </MUITypography>
              </Link>
              <MUITypography sx={{ fontSize: '12px', color: '#737373' }}>
                Gợi ý cho bạn
              </MUITypography>
            </MUIBox>
          </MUIBox>
          <Link href={''}>
            <MUITypography
              sx={{
                fontWeight: 'bold',
                color: ACTION_COLOR_PRIMARY,
                fontSize: '12px'
              }}>
              Theo dõi
            </MUITypography>
          </Link>
        </MUICard>
      </MUICard>
    </>
  );
};

export default Suggest;
