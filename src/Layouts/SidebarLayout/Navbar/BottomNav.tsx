'use client';
import { ReactElement, useEffect, useState } from 'react';
import { 
  MUICard, 
  MUIPaper,
  MUIBottomNavigation,
  MUIBottomNavigationAction
  } from '@/components/MUIComponents';

import { FC, useContext } from 'react';
import SVG from 'react-inlinesvg'
import SendIcon from '@mui/icons-material/Send'
import styled from 'styled-components';
import { useRouter } from 'next/router'
import { GeneralContext } from '@/contexts/generalContext';


interface MenuProps {
  listIndex: any
}

const BottomNav = (props: MenuProps) => {  
  const router = useRouter()
  const {setContentSidebarItem} = useContext(GeneralContext)

    const ImageStyle = styled.img`
        width: 25px;
        height: 25px;
        border-radius: 50%;
    `

    const changeRoute = (path: string) => {
      setContentSidebarItem(path)
      router.push(path)
    }
  return (
        <>
          <MUIPaper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1 }} elevation={3}>
            <MUIBottomNavigation sx={{
              '.MuiBottomNavigationAction-root':{
                minWidth: 'auto'
              }
            }}>
              {props?.listIndex.map((item: any, index: number) => {
                return(

                    <MUIBottomNavigationAction 
                      onClick={() => changeRoute(item.path)} 
                      key={index}
                      sx={{color: '#000'}} 
                      icon={item.img ?
                        <ImageStyle src='/images/Avatar.jpg'/> 
                        :
                        router.asPath === item.path && item.active ? <SVG src={item.active}/> : <SVG src={item.icon} />
                       }
                    />   
                ) 
              })}
           
            </MUIBottomNavigation>
          </MUIPaper>
       </>
    )
};

export default BottomNav;
