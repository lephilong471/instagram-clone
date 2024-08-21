import React, { useState } from 'react';
import { 
    MUIBox,
    MUIList, 
    MUIListItem, 
    MUIListItemButton,
    MUIListItemIcon,
    MUIListItemText,
    MUIMenu,
    MUIMenuItem,
    MUIButton,
    MUITypography,
    MUISwitch
} from '@/components/MUIComponents';

import { COLOR_BORDER_CARD, WIDTH_NAVBAR_COLLAPSE } from '@/config/style';
import { GeneralContext } from '@/contexts/generalContext';
import { Divider, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import { logOutUser } from '@/slices/auth/authThunk';
import { store } from '@/store';
import { COLOR_AUTH_BORDER } from '@/config/style';

import SVG from 'react-inlinesvg'
import Option from '@/public/images/profile/Option.svg'
import Activity from '@/public/images/iconMenu/Activity.svg'
import Saved from '@/public/images/iconMenu/Saved.svg'
import Report from '@/public/images/iconMenu/Report.svg'
import Theme from '@/public/images/iconMenu/Theme.svg'
import Threads from '@/public/images/iconMenu/Threads.svg'
import ArrowLeft from '@/public/images/iconMenu/ArrowLeft.svg'

const More = () => {
  const { isExpand, toggleSidebar, anchorEl, setAnchorEl } = useContext(GeneralContext); 
  const [openThemeMenu, setOpenThemeMenu] = useState<null | HTMLElement>(null)

  const handleOpenThemeMenu = () => {
    setOpenThemeMenu(anchorEl)
    setAnchorEl(null)
  }

  const handleCloseThemeMenu = () => {
    setAnchorEl(openThemeMenu)
    setOpenThemeMenu(null)
  }

  return (
    <>
     <MUIMenu 
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={toggleSidebar}
        sx={{
            top: -20,
            left: 50,
            '.MuiPaper-root':{
                width: '250px !important',
                borderRadius: '10px !important',
            },
            '.MuiButtonBase-root':{
                p:2
            },
        }}
      >
        <MUIMenuItem>
            <MUIBox sx={{
                
                display: 'flex',
                alignItems:'center',
                px:1,
            }}>
                <SVG src={Option} color="#000" width="20" title="icon"/> 
                <MUITypography sx={{mx:2, fontSize:14}}>Cài đặt</MUITypography>
            </MUIBox>
        </MUIMenuItem>

        <MUIMenuItem>
            <MUIBox sx={{
                
                display: 'flex',
                alignItems:'center',
                px:1
            }}>
                <SVG src={Activity} color="#000" width="20" title="icon"/> 
                <MUITypography sx={{mx:2, fontSize:14}}>Hoạt động của bạn</MUITypography>
            </MUIBox>
        </MUIMenuItem>
        
        <MUIMenuItem>
            <MUIBox sx={{
                
                display: 'flex',
                alignItems:'center',
                px:1
            }}>
                <SVG src={Saved} color="#000" width="20" title="icon"/> 
                <MUITypography sx={{mx:2, fontSize:14}}>Đã lưu</MUITypography>
            </MUIBox>
        </MUIMenuItem>

        <MUIMenuItem>
            <MUIBox sx={{
                display: 'flex',
                alignItems:'center',
                px:1
            }}          
            onClick={handleOpenThemeMenu}>
                <SVG src={Theme} color="#000" width="20" title="icon"/> 
                <MUITypography sx={{mx:2, fontSize:14}}>Chuyển chế độ</MUITypography>
            </MUIBox>
        </MUIMenuItem>

        <MUIMenuItem>
            <MUIBox sx={{
                
                display: 'flex',
                alignItems:'center',
                px:1
            }}>
                <SVG src={Report} color="#000" width="20" title="icon"/> 
                <MUITypography sx={{mx:2, fontSize:14}}>Báo cáo sự cố</MUITypography>
            </MUIBox>
        </MUIMenuItem>
        <MUIMenuItem sx={{
            borderTop: `8px solid #DBDBDB4D`,
            borderBottom: `8px solid #DBDBDB4D`
        }}>
            <MUIBox sx={{
                
                display: 'flex',
                alignItems:'center',
                px:1
            }}>
                <SVG src={Threads} color="#000" width="20" title="icon"/> 
                <MUITypography sx={{mx:2, fontSize:14}}>Threads</MUITypography>
            </MUIBox>
        </MUIMenuItem>
    
        <MUIMenuItem>
            <MUIBox sx={{
                
                display: 'flex',
                alignItems:'center',
                px:1
            }}>
                <MUITypography sx={{fontSize:14}}>Chuyển tài khoản</MUITypography>
            </MUIBox>
        </MUIMenuItem>
            
        <MUIMenuItem onClick={() => store.dispatch(logOutUser())}>
            <MUIBox sx={{
                
                display: 'flex',
                alignItems:'center',
                px:1
            }}>
                <MUITypography sx={{fontSize:14}}>Đăng xuất</MUITypography>
            </MUIBox>
        </MUIMenuItem>
      </MUIMenu>
      {/* {contentSidebarItem === 'more' && (
        <MUIBox sx={{
            
            boxShadow:'2px 2px 10px grey',
            borderRadius: 4,
            position:'fixed',
            bottom: 25,
            left: 60,
            background: '#ffffff'
        }}>
            <MUIList>
                <MUIListItem>  
                    <MUIListItemButton>
                        <MUIListItemIcon>
                            <SVG src={Option} color="#000" width="25" title="icon"/>
                        </MUIListItemIcon>
                        <MUIListItemText primary="Cài đặt"/>
                    </MUIListItemButton>
                </MUIListItem>
                <MUIListItem>  
                    <MUIListItemButton>
                        <MUIListItemIcon>
                            <SVG src={Activity} color="#000" width="25" title="icon" />
                        </MUIListItemIcon>
                        <MUIListItemText primary="Hoạt động của bạn"/>
                    </MUIListItemButton>
                </MUIListItem>
                <MUIListItem>  
                    <MUIListItemButton>
                        <MUIListItemIcon>
                            <SVG src={Saved} color="#000" width="25" title="icon"/>
                        </MUIListItemIcon>
                        <MUIListItemText primary="Đã lưu"/>
                    </MUIListItemButton>
                </MUIListItem>
                <MUIListItem>  
                    <MUIListItemButton>
                        <MUIListItemIcon>
                            <SVG src={Theme} color="#000" width="25" title="icon"/>
                        </MUIListItemIcon>
                        <MUIListItemText primary="Chuyển chế độ"/>
                    </MUIListItemButton>
                </MUIListItem>
                <MUIListItem>  
                    <MUIListItemButton>
                        <MUIListItemIcon>
                            <SVG src={Report} color="#000" width="25" title="icon"/>
                        </MUIListItemIcon>
                        <MUIListItemText primary="Báo cáo sự cố"/>
                    </MUIListItemButton>
                </MUIListItem>
            </MUIList>
            <MUIList>
                <MUIListItem>
                    <MUIListItemButton>
                        <MUIListItemIcon>
                            <SVG src={Threads} color="#000" width="25" title="icon"/>
                        </MUIListItemIcon>
                        <MUIListItemText primary="Threads"/>
                    </MUIListItemButton>
                </MUIListItem>
            </MUIList>
            <MUIList>
                <MUIListItem>  
                    <MUIListItemButton>
                        <MUIListItemText primary="Chuyển tài khoản"/>
                    </MUIListItemButton>
                </MUIListItem>
                <MUIListItem>  
                    <MUIListItemButton onClick={() => store.dispatch(logOutUser())}>
                        <MUIListItemText primary="Đăng xuất"/>
                    </MUIListItemButton>
                </MUIListItem>
            </MUIList>
        </MUIBox>
     
      )} */}
      <MUIMenu 
        anchorEl={openThemeMenu} 
        open={Boolean(openThemeMenu)} 
        sx={{   
            top: -20,
            left: 50,
            '.MuiMenuItem-root':{
                width: 266,
                display: 'flex',
                justifyContent: 'space-around'
            }
        }}
      >
        <MUIMenuItem onClick={handleCloseThemeMenu}>
            <SVG src={ArrowLeft} />            
            <MUITypography>Chuyển chế độ</MUITypography>
            <SVG src={Theme} />
        </MUIMenuItem>
        <MUIMenuItem>
            <MUITypography>Chế độ tối</MUITypography>
            <MUISwitch color="default" />
        </MUIMenuItem>
        

      </MUIMenu>
    </>
  );
};

export default More;
