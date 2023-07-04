import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";
const HomePage = () => {
  const defaultTheme = createTheme();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
    </Container>
  );
};

export default HomePage;
