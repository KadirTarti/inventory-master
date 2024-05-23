import { Typography } from "@mui/material";
import React from "react";

const PageHeader = ({ text }) => {
  return (
    <Typography
      align="center"
      variant="h5"
      fontFamily={'monospace'}
      fontWeight={'bold'}
      component={"h1"}
      color={"darkCyan"}
    >
      {text}
    </Typography>
  );
};

export default PageHeader;
