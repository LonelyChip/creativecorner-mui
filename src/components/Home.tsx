import React, { useState } from "react";
import Add from "./Add";
import Feed from "./Feed";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

import {
  Box,
  createTheme,
  PaletteMode,
  Stack,
  ThemeProvider,
} from "@mui/material";

function Home() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode as PaletteMode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default Home;
