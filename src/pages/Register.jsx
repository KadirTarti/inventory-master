import LockIcon from "@mui/icons-material/Lock";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import AuthHeader from "../components/Commons/AuthHeader";
import AuthImage from "../components/Commons/AuthImage";
import RegisterForm, { SignupSchema } from "../components/Forms/RegisterForm";
import useAuthCall from "../hooks/useAuthCall";
import logo from "../assets/inventoryMaster2.png";
import AuthLogo from "../components/Commons/AuthLogo";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Margin } from "@mui/icons-material";

const Register = () => {
  const { register } = useAuthCall();
  return (
    <Container maxWidth="lg">
      <Grid 
        container
        justifyContent="center"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "80vh",
          p: 2,
          columnGap: 4,
        }}
        
      >
        <AuthHeader/> 
      <img src={logo} alt="Logo" style={{ width: '30%', height: 'auto', objectFit: 'contain'}}/>

        <Grid item xs={12} sm={10} md={6}
        sx={{boxShadow:'1px 1px 10px black', mt:1, p:2,
        display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
        }}>


          <Avatar
            sx={{
              backgroundColor: "primary.main",
              m: "auto",
              width: 50,
              height: 50,
            }}
          >
            <HowToRegIcon size="30" />
        
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            mt={1}
            color="primary.main"
            fontFamily={"monospace"}
          >
            Register
          </Typography>
          
          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword:""
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>
          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main", textDecoration:'underLine', fontSize:'16px' }}>
            <Link to="/" >Already have an account? Sign in</Link>
          </Box>
        </Grid>

      
      </Grid>
    </Container>
  );
};

export default Register;
