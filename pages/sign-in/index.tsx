import {
  MUIBox,
  MUIButton,
  MUICard,
  MUIGrid,
  MUITypography,
  MUIAlert
} from '@/components/MUIComponents';
import { ReactElement, useState, useEffect } from 'react';
import { Formik } from 'formik';
// import { useDispatch } from '@/store';
import { store } from '@/store';
import { TextField } from '@mui/material';
import Link from 'next/link';
import { PATH } from '@/config/router/routerConfig';
import { loginUser } from '@/slices/auth/authThunk';
import { useRouter } from 'next/router';
import Logo from '@/public/images/iconMenu/Logo.svg';
import SVG from 'react-inlinesvg';
import {COLOR_AUTH_BORDER, COLOR_WATER} from '@/config/style';

const SignIn = () => {
  // const dispatch = useDispatch();
  const router = useRouter();

  const [alert, setAlert] = useState<{state: string, message: string}>
  ({
    state: '',
    message: ''
  })

  const [backgroundIndex, setBackgroundIndex] = useState<number>(0)

  useEffect(() => {
    setTimeout(() => {
      if(backgroundIndex === 3) setBackgroundIndex(0)
      else{
        let index: number = backgroundIndex
        setBackgroundIndex(index+1)
      }
    }, 5000)
  }, [backgroundIndex])

  return (
    <>
      {/* <MUICard> */}
      {alert.state && alert.message &&(
        <MUIBox sx={{
          width:'100%',
          position:'fixed',
          top:20,
          zIndex:1,
          display:'flex',
          justifyContent:'center'
        }} >
          <MUIAlert sx={{
            fontSize:18,
            display:'flex',
            alignItems:'center'
          }}
          severity= {alert.state === 'success' ? alert.state: 'error'}>
            {alert.message}
          </MUIAlert>
      </MUIBox>
      )}
      <MUIGrid
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          overflow: 'scroll'
        }}>
        <MUIGrid item xs={4} className="max-lg:hidden">
          <MUIBox
            sx={{
              backgroundImage: `url(/images/auth/home-phones.png)`,
              width: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '100vh',
              position: 'relative'
            }}>
               <MUIBox sx={{
                position:'absolute', 
                backgroundImage: `url(/images/auth/content-${backgroundIndex}.png)` ,
                width:'100%',
                height:'100vh',
                backgroundRepeat:'no-repeat',
                backgroundPosition: 'center',
                transition:'background-image 2s ease-in-out',
                left:48,
                top:-20,
              }}>
                {/* <img height="100px" src='/images/auth/content.png' className="absolute height-[100px]" alt=''/> */}
              </MUIBox>
            </MUIBox>
        </MUIGrid>
        <MUIGrid item xs={10} sm={8}  md={6} lg={4} xl={4}>
          <MUIBox sx={{ border: `1px solid ${COLOR_AUTH_BORDER}`, mx: 2 }}>
            <MUIBox
              sx={{
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 5
              }}>

              <SVG src={Logo} width="100%" height="51px" title="Logo" />

            </MUIBox>
            <Formik
              initialValues={{
                email: '',
                password: '',
                submit: null
              }}

              onSubmit={(values, helpers) => {
                store
                  .dispatch(
                    loginUser({
                      email: values.email,
                      password: values.password
                    })
                  )
                  .unwrap()
                  .then(() => {
                    setAlert({
                      state:'success',
                      message:'Login successfully!'
                    })
                    router.push(PATH.HOME);
                  })
                  .catch(err => {
                    setAlert({
                      state:'error',
                      message:'Unauthorized!'
                    })
                    setTimeout(()=> setAlert({
                        state:'',
                        message:''
                    }), 2500)
                    helpers.setStatus({ success: false });
                    helpers.setErrors({ submit: err.message });
                    helpers.setSubmitting(false);
                  })
                  .finally(() => { });
              } }>
              {({ handleSubmit, handleChange}) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <MUIBox sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                      <TextField
                        name="email"
                        sx={{ width: '80%' }}
                        label="Email"
                        variant="outlined"
                        size="small"
                        onChange={val => {
                          handleChange('email')(val);
                        } } />

                      <TextField
                        name="password"
                        type="password"
                        sx={{ width: '80%', my: 1 }}
                        label="Password"
                        variant="outlined"
                        size="small"
                        onChange={val => {
                          handleChange('password')(val);
                        } } />
                      
                      <MUIButton
                        sx={{
                          width: '80%',
                          borderRadius: '8px',
                          mb:2
                        }}
                        variant="contained" 
                        type="submit">
                        Sign In
                      </MUIButton>
                    </MUIBox>
                  </form>
                );
              } }
            </Formik>
          </MUIBox>
          <MUIBox sx={{
            border: `1px solid ${COLOR_AUTH_BORDER}`,
            mx: 2, my: 1, p: 3,
            textAlign: 'center'
          }}>
              Do not have an accounts? Register{' '}
              <MUITypography sx={{ display: 'inline', fontWeight: 'bold', color: COLOR_WATER }}>
                <Link href={PATH.SIGNUP}>
                  here
                </Link>
              </MUITypography>
          </MUIBox>

          <MUIBox sx={{ textAlign: 'center' }}>
            <MUITypography sx={{ my: 3 }}>
              Download app.
            </MUITypography>
            <MUIGrid container sx={{ justifyContent: 'center' }}>
              <MUIGrid item xs={5} sx={{ display: 'flex', justifyContent: 'end', mr: 0.5 }}>
                <Link target='_blank' href="https://play.google.com/store/search?q=Instagram&c=apps">
                  <img src='/images/auth/google-play.png' width="140" alt=''/>
                </Link>

              </MUIGrid>
              <MUIGrid item xs={5} sx={{ display: 'flex', justifyContent: 'start', ml: 0.5 }}>
                <Link target='_blank' href="https://apps.microsoft.com/detail/9nblggh5l9xt?hl=vi-vn&gl=VN">
                  <img src='/images/auth/microsoft-store.png' width="120" alt=''/>
                </Link>
              </MUIGrid>
            </MUIGrid>
          </MUIBox>
        </MUIGrid>
      </MUIGrid>
    {/* </MUICard> */}
    </>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
