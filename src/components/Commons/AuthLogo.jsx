import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const AuthLogo = ({ logo }) => {
  return (
    <Grid item display={{ xs: "none",sm:"block" }} sm={10} md={6}>
      <Container>
        <img src={logo} alt="img" style={{ width: "25%", margin:'auto' }} />
      </Container>
    </Grid>
  );
};

export default AuthLogo;
