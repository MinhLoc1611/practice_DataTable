import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataTable from "./pages/DataTable/DataTable";
import { ThemeProvider, createTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette:{
        secondary:deepPurple
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<DataTable />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
