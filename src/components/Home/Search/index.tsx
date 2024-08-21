import { MUIBox, MUIDrawer, MUITypography } from '@/components/MUIComponents';
import { COLOR_BORDER_CARD, WIDTH_NAVBAR_COLLAPSE } from '@/config/style';
import { GeneralContext } from '@/contexts/generalContext';
import { Divider, TextField } from '@mui/material';
import { useContext } from 'react';

const Search = () => {
  const { isExpand, toggleSidebar, contentSidebarItem } = useContext(GeneralContext);
  return (
    <>
      <MUIDrawer
        open={isExpand && contentSidebarItem === 'search'}
        onClose={toggleSidebar}
        sx={{
          overflow: 'hidden',
          transform: `translateX(${WIDTH_NAVBAR_COLLAPSE})`,
          '.MuiBackdrop-root.MuiModal-backdrop': {
            opacity: '0 !important'
          },
          '.MuiPaper-root.MuiPaper-elevation': {
            boxShadow: 'none',
            border: `1px solid ${COLOR_BORDER_CARD}`,
            borderLeft: '0px',
            borderTopRightRadius: '15px',
            borderBottomRightRadius: '15px',
            overflow: 'hidden'
          }
        }}>
        <MUIBox sx={{ width: '397px', height: '100vh' }}>
          <MUITypography
            variant="h5"
            sx={{ padding: '12px 14px 36px 24px', m: 1 }}>
            Tìm kiếm
          </MUITypography>
          <MUIBox>
            <MUIBox
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: '24px'
              }}>
              <MUIBox sx={{ mx: 2, width: '100%', background: '#efefef' }}>
                <TextField
                  placeholder="Tìm kiếm"
                  sx={{
                    width: '100%',
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    '.Mui-focused': {
                      border: 'none',
                      outline: 'none'
                    },
                    'MuiInputBase-input:focus': {
                      border: 'none',
                      outline: 'none'
                    },
                    '&::before': {
                      content: 'none'
                    }
                  }}
                  size="small"
                />
              </MUIBox>
            </MUIBox>
            <Divider />
            <MUITypography
              variant="h6"
              sx={{ padding: '12px 14px 36px 24px', m: 1 }}>
              Gần đây
            </MUITypography>
            <MUIBox
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}>
              <MUITypography>No data</MUITypography>
            </MUIBox>
          </MUIBox>
        </MUIBox>
      </MUIDrawer>
    </>
  );
};

export default Search;
