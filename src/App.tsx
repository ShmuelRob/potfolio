import {AnimatePresence} from 'framer-motion';
import {RouterProvider} from "react-router";
import router from "./pages/router.tsx";
import LayoutPage from "./pages/layoutPage.tsx";

function App() {

    return (
      <>
        <LayoutPage>
          <AnimatePresence>
            <RouterProvider router={router}/>
          </AnimatePresence>
        </LayoutPage>
        </>
    )
}

export default App
