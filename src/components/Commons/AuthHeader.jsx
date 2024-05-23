import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const AuthHeader = () => {
  return (
    <Grid item xs={12}>
      <Typography variant="inherit" color="error" align="center" fontWeight={'bold'} fontFamily={'monospace'} margin={'10px'} fontSize={'1rem'}>
      Please sign in to view and edit stock information
      </Typography>
    </Grid>
  );
};

export default AuthHeader;
