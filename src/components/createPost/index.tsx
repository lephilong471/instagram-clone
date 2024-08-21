import {
  MUIBox,
  MUIButton,
  MUICard,
  MUIDialog,
  MUITypography
} from '../MUIComponents';
import SVG from 'react-inlinesvg';
import IconUpload from '@/public/images/posts/UploadMedia.svg';
import { COLORS_BLACK } from '@/config/style';

interface CreatePostProps {
  isOpen?: any;
  isClose?: any;
}

const CreatePost = (props: CreatePostProps) => {
  return (
    <MUIDialog
      open={props.isOpen}
      onClose={props.isClose}
      maxWidth={'sm'}
      sx={{ p: 2 }}
      title="Tạo bài viết mới"
      setOpen={props.isClose}
      isButton={true}>
      <MUICard
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '500px'
        }}>
        <MUIBox sx={{ color: COLORS_BLACK }}>
          <SVG src={IconUpload} title="Upload" />
        </MUIBox>
        <MUITypography sx={{ my: 1.5 }}>Kéo thả ảnh vào đây</MUITypography>
        <MUIButton variant="contained" sx={{ textTransform: 'capitalize' }}>
          Chọn từ máy tính
        </MUIButton>
      </MUICard>
    </MUIDialog>
  );
};

export default CreatePost;
