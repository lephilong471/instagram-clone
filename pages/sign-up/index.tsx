import {
  MUIBox,
  MUIButton,
  MUICard,
  MUIGrid,
  MUITypography,
  MUIAlert,
} from '@/components/MUIComponents';
import { ReactElement, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { store } from '@/store';
import { useRouter } from 'next/router';
import { registerUser } from '@/slices/auth/authThunk';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import Link from 'next/link';
import { PATH } from '@/config/router/routerConfig';
import Logo from '@/public/images/iconMenu/Logo.svg';
import SVG from 'react-inlinesvg';
import { COLOR_AUTH_BORDER, COLOR_WATER} from '@/config/style';
import * as Yup from 'yup';

const SignUp = () => {
  // const dispatch = useDispatch();
  const router = useRouter()

  const [backgroundIndex, setBackgroundIndex] = useState<number>(0)
  const [alert, setAlert] = useState<{state: string, message:string}>({
    state: '',
    message: '',
  })

  const errorMessage = Yup.object().shape({
    fullname: Yup.string().max(255, 'Maximum 255 characters').required('Required'),
    username: Yup.string()
                .matches(/^[\S]*$/,'Must not have spaces')
                .max(255, 'Maximum 255 characters')
                .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
                .matches(/^[\S]*$/, 'Must not have spaces')
                .min(8, 'Password must greater than 8 characters')
                .required('Required'),
  });

  const myForm = useFormik({
    initialValues: {
      fullname: '',
      username: '',
      email: '',
      password: '',
      submit: null,
    },
    validationSchema: errorMessage,
    onSubmit: (values, helpers) => {
      store
      .dispatch(
        registerUser({
          fullname: values.fullname,
          username: values.username,
          email: values.email,
          password: values.password
        })
      )
      .unwrap()
      .then(() => {
        setAlert({
          state: 'success',
          message: 'Register Successfully!'
        })
        router.push(PATH.HOME);
      })
      .catch(err => {
        setAlert({
          state:'error',
          message:'Invalid Register Information!'
        })
        setTimeout(()=> setAlert({
          state:'',
          message:''
        }),2500)
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      })
      .finally(() => { })
    }})

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
          top:10,
          zIndex:1,
          display:'flex',
          justifyContent:'center'
        }} >
          <MUIAlert sx={{
            fontSize:20,
            display:'flex',
            alignItems:'center'
          }}
          severity= {alert.state === 'success' ? 'success' : 'error'}>
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
              {/* <MUIBox sx={{backgroundImage: `url(/images/auth/content.png)`, 
                position:'absolute',
                backgroundRepeat: 'no-repeat', 
                height: '',  
                width: '100%',}}>
              </MUIBox> */}
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
                p: 4
              }}>
          
              <SVG src={Logo} width="100%" height="51px" title="Logo" />
        
            </MUIBox>
                  <form onSubmit={myForm.handleSubmit}>
                    <MUIBox sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                      <TextField
                        id="fullname"
                        name="fullname"
                        sx={{ width: '80%'}}
                        label="Fullname"
                        variant="outlined"
                        size="small"
                        onBlur={myForm.handleBlur}
                        onChange={myForm.handleChange}
                        error={myForm.touched.fullname && Boolean(myForm.errors.fullname)}
                        helperText={myForm.touched.fullname && myForm.errors.fullname}
                      />
                    
                      <TextField
                        id="email"
                        name="email"
                        sx={{ width: '80%', my: 1 }}
                        label="Email"
                        variant="outlined"
                        size="small"
                        onBlur={myForm.handleBlur}
                        onChange={myForm.handleChange}
                        error={myForm.touched.email && Boolean(myForm.errors.email)}
                        helperText={myForm.touched.email && myForm.errors.email}
                      />

                      <TextField
                        id="username"
                        name="username"
                        sx={{ width: '80%'}}
                        label="Username"
                        variant="outlined"
                        size="small"
                        onBlur={myForm.handleBlur}
                        onChange={myForm.handleChange}
                        error={myForm.touched.username && Boolean(myForm.errors.username)}
                        helperText={myForm.touched.username && myForm.errors.username}
                      />
                    
                      <TextField
                        id="password"
                        name="password"
                        type="password"
                        sx={{ width: '80%', my: 1}}
                        label="Password"
                        variant="outlined"
                        size="small"
                        onBlur={myForm.handleBlur}
                        onChange={myForm.handleChange}
                        error={myForm.touched.password && Boolean(myForm.errors.password)}
                        helperText={myForm.touched.password && myForm.errors.password}
                      />
              
                      <MUIButton sx={{width: '80%', 
                                      borderRadius: '8px',
                                      mb:2
                                    }} 
                                // disabled={errors.disabled === undefined ? true : errors.disabled ? true : false} 
                                variant="contained" 
                                type="submit">
                                  Sign Up
                      </MUIButton>
                    </MUIBox>
                  </form>
          </MUIBox>
          <MUIBox sx={{ 
                border: `1px solid ${COLOR_AUTH_BORDER}`, 
                mx: 2, my:1, p: 3,
                textAlign:'center'}}>

              Already have access? Login{' '}
                
                  <MUITypography sx={{display:'inline', fontWeight:'bold', color: COLOR_WATER}}>
                    <Link href={PATH.SIGNIN}>
                      here
                    </Link>
                  </MUITypography>
            </MUIBox>
            <MUIBox sx={{textAlign: 'center'}}>
            <MUITypography sx={{my:3}}> 
              Download app.
            </MUITypography>
           <MUIGrid container sx={{justifyContent:'center'}}>
              <MUIGrid item xs={5} sx={{display:'flex', justifyContent:'end', mr:0.5}}>
                <Link target='_blank' href="https://play.google.com/store/search?q=Instagram&c=apps">
                  <img src='/images/auth/google-play.png' width="140" alt=''/>
                </Link>

              </MUIGrid>
              <MUIGrid item xs={5} sx={{display:'flex', justifyContent:'start', ml:0.5}}>
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

export default SignUp;

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
