import { MUIBox, MUIButton, MUIDrawer, MUITypography } from '@/components/MUIComponents';
import { COLOR_BORDER_CARD, WIDTH_NAVBAR_COLLAPSE } from '@/config/style';
import { GeneralContext } from '@/contexts/generalContext';
import { COLOR_WATER } from '@/config/style';
import { useContext } from 'react';
import HeartCircle from '@/public/images/notification/HeartCircle.svg';
const Notification = () => {
  const { isExpand, toggleSidebar, contentSidebarItem } = useContext(GeneralContext);

  let hint = []
  for(let i=0; i<10; i++){
    hint.push({
        username: 'son.thed',
        fullname: 'Nguyễn Thế Sơn'
    })
  }
  return (
    <>
      <MUIDrawer
        open={isExpand && contentSidebarItem === 'notification'}
        onClose={toggleSidebar}
        sx={{
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
            overflow: 'auto'
          }
        }}>
        <MUIBox sx={{ width: '397px', height: '100vh' }}>
          <MUITypography
            variant="h5"
            sx={{ padding: '12px 14px', m: 1, fontWeight: 'bold' }}>
            Thông báo
          </MUITypography>
          <MUIBox>
            <MUIBox
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection:'column',
                alignItems: 'center',
                px:2,
              }}>
       
                <img src={HeartCircle} width={60} alt=''/>
                <MUITypography sx={{my: 1, fontSize:14}}>Hoạt động trên bài viết của bạn</MUITypography>
                <MUITypography sx={{my: 1, fontSize:14, textAlign: 'center'}}>
                    Khi có người thích hoặc bình luận về một trong những bài viết của bạn,
                    bạn sẽ nhìn thấy nó ở đây
                </MUITypography>
            </MUIBox>

            <MUITypography
              sx={{ padding: '12px 14px', m: 1, fontWeight:600 }}>
              Gợi ý cho bạn
            </MUITypography>
            {Object.keys(hint).length > 0 && hint.map((item, index) => {
                return (
                    <MUIBox  key={index} 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        mb:1
                    }}>

                    <MUIBox sx={{
                        display:'flex',
                        justifyContent:'space-between',
                        width:'100%',
                        px:2
                      }}>
                        <MUIBox sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            <img
                                src="/images/Avatar.jpg"
                                style={{
                                    width: '45px',
                                    height: '45px',
                                    objectFit: 'cover',
                                    borderRadius: '50%'
                                }}
                                alt="avt"
                            />
                            <MUIBox sx={{
                                mx:1
                            }}>
                                <MUITypography sx={{fontSize:13, fontWeight:'bold'}}>{item.username}</MUITypography>
                                <MUITypography sx={{fontSize:13, color:"grey"}}>{item.fullname}</MUITypography>
                                <MUITypography sx={{fontSize:12, color:"grey"}}>Gợi ý cho bạn</MUITypography>
                            </MUIBox>
                      </MUIBox>
                      <MUIBox sx={{display:'flex', alignItems:'center'}}>
                        <MUIButton sx={{borderRadius:2, fontSize:14, textTransform:'none', background:COLOR_WATER, px:2}} size="small" variant="contained">Theo dõi</MUIButton>
                      </MUIBox>
                    </MUIBox>
                    </MUIBox>
                )
              })}
              <MUIBox sx={{
                display:'flex',
                justifyContent: 'center'
              }}>
                <MUITypography sx={{color:COLOR_WATER, fontSize: 14}}>Xem tất cả gợi ý</MUITypography>
              </MUIBox>
          </MUIBox>
        </MUIBox>
      </MUIDrawer>
    </>
  );
};

export default Notification;
