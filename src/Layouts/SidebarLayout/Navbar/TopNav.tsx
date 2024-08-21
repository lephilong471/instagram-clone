'use client';
import React, { useEffect, useState } from 'react';
import { 
  MUICard, 
  MUIPaper,
  MUIBottomNavigation,
  MUIBottomNavigationAction,
  MUIBox,
  MUIMenu,
  MUIButton,
  MUIMenuItem,
  } from '@/components/MUIComponents';

import { FC, useContext } from 'react';
import SVG from 'react-inlinesvg'
import SendIcon from '@mui/icons-material/Send'
import Logo from '@/public/images/iconMenu/Logo.svg';
import Notification from '@/public/images/iconMenu/Notification.svg';
import { TextField } from '@mui/material';
import ArrowDown from '@/public/images/iconMenu/ArrowDown.svg'
import Follow from '@/public/images/iconMenu/Follow.svg'
import Favorite from '@/public/images/iconMenu/Favorite.svg'

const TopNav: FC = () => {  
    const [menu, setMenu] = useState<null | HTMLElement>(null)

    const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenu(event.currentTarget)
    }

    return (
        <>
            <MUIPaper sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1 }} elevation={1}>
                <MUIBox sx={{
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                    px: 2,
                    py: 1,
                    '.MuiTextField-root':{
                        borderRadius:2
                    }
                }}>
                    <MUIButton 
                        onClick={openMenu}
                        endIcon={<SVG src={ArrowDown} />}
                        color='inherit'
                        className='max-[250px]:hidden'
                    >
                        <SVG src={Logo}/>
                    </MUIButton>
                    <TextField placeholder='Search' size="small" className='max-[250px]:w-full bg-neutral-200 text-black mx-2' name="search" />
                    <SVG src={Notification} className='max-[250px]:hidden' />
                    <MUIMenu 
                        anchorEl={menu} 
                        open={Boolean(menu)} 
                        onClose={() => setMenu(null)}
                        >
                        <MUIMenuItem>Đang theo dõi <SVG src={Follow} className="ms-4"/></MUIMenuItem>
                        <MUIMenuItem>Mục yêu thích <SVG src={Favorite} className="ms-4"/></MUIMenuItem>
                    </MUIMenu>
                </MUIBox>
            </MUIPaper>
       </>
    )
};

export default TopNav;
