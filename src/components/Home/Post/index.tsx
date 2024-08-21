import {
  MUIBox,
  MUIButton,
  MUICard,
  MUIGrid,
  MUIIconButton,
  MUITypography
} from '@/components/MUIComponents';
import Image from 'next/image';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, TextField, Tooltip } from '@mui/material';
import Like from '@/public/images/posts/Like.svg';
import Comment from '@/public/images/posts/Comment.svg';
import Share from '@/public/images/posts/Share.svg';
import Save from '@/public/images/posts/Save.svg';
import SVG from 'react-inlinesvg';
import { COLORS_BLACK } from '@/config/style';
import MUIDialog from '@/components/MUIComponents/MUIDialog';
import { MenuActionPost } from '@/config/menus/indexMenu';
import { useState } from 'react';
import Link from 'next/link';
import Textarea from '@mui/joy/Textarea';

export default function Post() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (type: any) => {
    switch (type) {
      case 'cancel':
        setIsOpen(false);
      default:
        setIsOpen(false);
    }
  };
  return (
    <>
      <MUICard
        sx={{
          border: 'none',
          boxShadow: 'none',
          width: '468px',
          mt: 2,
          position: 'relative'
        }}>
        <MUIBox className="flex justify-between items-center">
          <MUIBox className="flex justify-start items-center gap-2">
            <img
              src="/images/Avatar.jpg"
              style={{
                borderRadius: '50%',
                height: '32px',
                width: '32px'
              }}
              alt="avt"
            />
            <MUITypography sx={{ fontWeight: 'bold' }}>username</MUITypography>
            <MUITypography> 1 giờ</MUITypography>
          </MUIBox>
          <MUIIconButton
            sx={{
              pr: 0,
              background: 'transparent',
              '&:hover': {
                background: 'transparent'
              }
            }}
            onClick={() => setIsOpen(true)}>
            <MoreHorizIcon />
          </MUIIconButton>
        </MUIBox>
        <MUIBox sx={{ mt: 1 }} className="w-full">
          <img
            src="/images/Avatar.jpg"
            style={{
              width: '100% ',
              height: '100% ',
              objectFit: 'cover'
            }}
            alt="avt"
          />
        </MUIBox>
        <MUIBox
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            my: 1
          }}>
          <MUIBox
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              gap: '10px'
            }}>
            <Tooltip title="Like">
              <MUIIconButton sx={{ color: COLORS_BLACK }}>
                <SVG src={Like} width="100%" title="Like" />
              </MUIIconButton>
            </Tooltip>
            <Tooltip title="Comment">
              <MUIIconButton sx={{ color: COLORS_BLACK }}>
                <SVG src={Comment} width="100%" title="comment" />
              </MUIIconButton>
            </Tooltip>
            <Tooltip title="Share Post">
              <MUIIconButton sx={{ color: COLORS_BLACK }}>
                <SVG src={Share} width="100%" title="share" />
              </MUIIconButton>
            </Tooltip>
          </MUIBox>
          <MUIBox>
            <Tooltip title="Lưu">
              <MUIIconButton sx={{ color: COLORS_BLACK }}>
                <SVG src={Save} width="100%" title="save" />
              </MUIIconButton>
            </Tooltip>
          </MUIBox>
        </MUIBox>
        <MUIBox>
          <MUITypography>11 like</MUITypography>
        </MUIBox>
        <MUIBox>
          <span className="font-bold">user</span>
          <span>
            {' '}
            Một tác giả từng nói: “Đi tắm , ngắm hoa, ăn cơm, nếu bạn cảm thấy
            hạnh phúc, nó không phải vì bạn tắm rất sạch, hoa nở rất đẹp hay nấu
            cơm rất hợp khẩu vị của bạn, mà chủ yếu là bởi trong lòng bạn không
            có phiền muộn.”
          </span>
        </MUIBox>
        <Link href={''}>
          <MUITypography sx={{ color: '#737373', fontSize: '14px', mt: 1 }}>
            Xem tất cả 3 bình luận
          </MUITypography>
        </Link>

        <MUIGrid container>
          <MUIGrid item xs={9}>
            <Textarea
              size="sm"
              placeholder="Thêm bình luận"
              sx={{
                width: '100%',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                '&:focus': {
                  border: 'none',
                  outline: 'none'
                },
                '&::before': {
                  content: 'none'
                }
              }}
            />
          </MUIGrid>
          <MUIGrid
            item
            xs={3}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <MUIButton sx={{ p: 0 }} title="ĐĂNG">
              Đăng
            </MUIButton>
            <MUIBox>icon</MUIBox>
          </MUIGrid>
        </MUIGrid>
      </MUICard>
      <MUIDialog
        open={isOpen}
        setOpen={setIsOpen}
        noTitleDivider={true}
        maxWidth={'xs'}
        sx={{ p: 0 }}>
        <MUICard
          className="divide-y"
          sx={{ boxShadow: 'none', border: 'none' }}>
          {MenuActionPost.map((item, index) => (
            <MUIBox
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '48px',
                color: `${item.colors}`,
                fontWeight: `${item.colors}` ? '700' : '400',
                cursor: 'pointer'
              }}
              onClick={() => handleClick(item.handle)}>
              {item.title}
            </MUIBox>
          ))}
        </MUICard>
      </MUIDialog>
    </>
  );
}
