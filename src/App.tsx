import {AnimatePresence} from 'framer-motion';
import {RouterProvider} from "react-router";
import router from "./pages/router.tsx";
import LayoutPage from "./pages/layoutPage.tsx";
import {ThemeProvider} from "@mui/styles";
import theme from "./theme.ts";

function App() {

    return (
        <LayoutPage>
          <ThemeProvider theme={theme}>
            <AnimatePresence>
              <RouterProvider router={router}/>
            </AnimatePresence>
          </ThemeProvider>
        </LayoutPage>
    )
}

export default App
