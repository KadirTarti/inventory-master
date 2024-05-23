import LockIcon from "@mui/icons-material/Lock";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import logo from "../assets/inventoryMaster2.png";
import AuthHeader from "../components/Commons/AuthHeader";
import AuthImage from "../components/Commons/AuthImage";
import LoginForm, { loginScheme } from "../components/Forms/LoginForm";
import useAuthCall from "../hooks/useAuthCall";
import AuthLogo from "../components/Commons/AuthLogo";
import zIndex from "@mui/material/styles/zIndex";

const Login = () => {
  const { login } = useAuthCall();
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginBottom: "16px" }}>
        <AuthLogo logo={logo} />
      </Box>
      {/* <AuthHeader /> */}
      <Box
        sx={{
          boxShadow: "1px 1px 6px black",
          mt: 2,
          p: 2,
          width: "50%",
          margin: "auto",
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "primary.main",
              m: "auto",
              width: 50,
              height: 50,
              mb: "10px",
            }}
          >
            <LockPersonIcon size="30" />
          </Avatar>
          <Typography
            variant="h5"
            align="center"
            mb={4}
            color="primary.main"
            fontFamily={"monospace"}
          >
            SIGN IN
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginScheme}
            onSubmit={(values, actions) => {
              login(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          ></Formik>
          <Box
            sx={{
              textAlign: "center",
              mt: 2,
              color: "secondary.main",
              textDecoration: "underline",
              fontSize: "16px",
            }}
          >
            <Link to="/register">Don't have an account? Sign Up Here</Link>
          </Box>
        </Grid>
      </Box>

      {/* <AuthImage image={image} /> */}
    </Container>
  );
};

export default Login;
