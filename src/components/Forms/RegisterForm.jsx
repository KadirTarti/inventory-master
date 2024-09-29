import { Padding } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import * as Yup from "yup";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//! Yup ile istediğimiz alanlara istediğimiz validasyon koşullarını
//  oluşturuyoruz. Sonra oluşturduğumuz bu şemayı formike tanımlayarak
//  kullanıyoruz. Böylelikle formik hem formumuzu yönetiyor hem de verdiğimiz
//  validationSchema yı uyguluyor. Dikkat edilmesi gereken husus; formikte
//  tanımladığımız initialValues daki keylerle, Yupta tanımladığımız keylerin
//  aynı olması. Eğer bir harf bile farklı olsa o alanla ilgili yazdığınız
//  validation çalışmaz.
export const SignupSchema = Yup.object().shape({
  username: Yup.string().min(3).max(15).required("Username is required!"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required!"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required!"),
  email: Yup.string().email("Invalid email").required("Email is required!"),
  password: Yup.string()
    .min(8, "It must be at least 8 characters long!")
    .max(50, "It can be a maximum of 50 characters long!")
    .matches(/\d+/, "Must contain at least one digit!")
    .matches(/[a-z]/, "Must contain at least one lowercase letter!")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter!")
    .matches(
      /[@$?!%&*]+/,
      "Must contain at least one special character (@$!%*?&)!"
    )
    .required("Password is required!"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required("Passwords must match!")
});

const SignUpForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
 };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", width:'100%', margin:'auto'}}>
          <TextField
            id="username"
            name="username" //formik name attributedından eşleştirme yapıyor.
            label="Username*"
            inputProps={{
              autoComplete: "off"  // Burada "autoComplete" kullanılmalıdır.
            }}
            style={{fontFamily:'monospace'}}
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur} // kullanıcının input alanından ayrıldığını yaklayan event
            // helperText={touched.username && errors.username} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için errors dan gelen mesajı yakalıyoruz.
            // error={touched.username && Boolean(errors.username)} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için error attribute ı benden false/true degeri bekliyor ondan dolayı daha sağlıklı olması için boolean deger döndürüyoruz.
            // touched da kullanıcının inputa tıklayıp tıklamadığını yakalıyor
          />
           <Box sx={{ minHeight: '24px', color: '#e61919', fontSize: '12px' }}>
  {touched.username && errors.username ? errors.username : " "}
</Box>

          <TextField
            label="First Name*"
            name="firstName"
            id="firstName"
            inputProps={{
              autoComplete: "off"  // Burada "autoComplete" kullanılmalıdır.
            }}
            type="text"
            variant="outlined"
            style={{fontFamily:'monospace'}}
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            // helperText={touched.firstName && errors.firstName}
            // error={touched.firstName && Boolean(errors.firstName)}
          />
          <Box sx={{ minHeight: '24px', color: '#e61919', fontSize: '12px' }}>
  {touched.firstName && errors.firstName ? errors.firstName : " "}
</Box>


          <TextField
            label="Last Name*"
            name="lastName"
            id="lastName"
            type="text"
            variant="outlined"
            style={{fontFamily:'monospace'}}
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            // helperText={touched.lastName && errors.lastName}
            // error={touched.lastName && Boolean(errors.lastName)}
          />
                    <Box sx={{ minHeight: '24px', color: '#e61919', fontSize: '12px' }}>
  {touched.lastName && errors.lastName ? errors.lastName : " "}
</Box>

          <TextField
            label="Email*"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            style={{fontFamily:'monospace'}}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            // helperText={touched.email && errors.email}
            // error={touched.email && Boolean(errors.email)}
          />
            <Box sx={{ minHeight: '24px', color: '#e61919', fontSize: '12px' }}>
  {touched.email && errors.email ? errors.email : " "}
</Box>
          <TextField
            label="Password*"
            name="password"
            id="password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            style={{fontFamily:'monospace'}}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            // helperText={touched.password && errors.password}
            // error={touched.password && Boolean(errors.password)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                 >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                 </IconButton>
                </InputAdornment>),
            }}      
          /> 
                <Box sx={{ minHeight: '24px', color: '#e61919', fontSize: '12px' }}>
  {touched.password && errors.password ? errors.password : " "}
</Box>
          
           {/* <IconButton onClick={handleClickShowPassword}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton> */}

          <TextField
            label="Confirm Password*"
            name="confirmPassword"
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            variant="outlined"
            style={{fontFamily:'monospace'}}
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            // helperText={touched.confirmPassword && errors.confirmPassword}
            // error={touched.confirmPassword && Boolean(errors.confirmPassword)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                 >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                 </IconButton>
                </InputAdornment>),
            }}  
          />
          <Box sx={{ minHeight: '24px', color: '#e61919', fontSize: '12px' }}>
  {touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : " "}
</Box>
          

          <Button
            type="submit"
            variant="contained"
            size="large"
            style={{fontFamily:'monospace'}}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Sign Up"}
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default SignUpForm;
