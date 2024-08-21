import {
  MUIButton,
  MUIBox,
  MUITypography,
  MUIIconButton
} from '@/components/MUIComponents';
import SVG from 'react-inlinesvg';
import Option from '@/public/images/profile/Option.svg';
import { COLORS_BLACK } from '@/config/style';

const HeaderAction = () => {
  return (
    <MUIBox
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px'
      }}>
      <MUITypography sx={{ fontSize: '20px' }}>sont.thed</MUITypography>
      <MUIButton
        sx={{
          background: '#efefef',
          '&:hover': {
            background: '#dbdbdb'
          }
        }}>
        <MUITypography
          sx={{
            fontSize: '14px',
            textTransform: 'capitalize',
            color: COLORS_BLACK
          }}>
          Chỉnh sửa trang cá nhân
        </MUITypography>
      </MUIButton>
      <MUIButton
        sx={{
          background: '#efefef',
          '&:hover': {
            background: '#dbdbdb'
          }
        }}>
        <MUITypography
          sx={{
            fontSize: '14px',
            textTransform: 'capitalize',
            color: COLORS_BLACK
          }}>
          Xem kho lưu trữ
        </MUITypography>
      </MUIButton>
      <MUIIconButton>
        <SVG src={Option} width="100%" title="option" />
      </MUIIconButton>
    </MUIBox>
  );
};

export default HeaderAction;
