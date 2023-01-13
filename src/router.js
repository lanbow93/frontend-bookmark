import {createBrowserRouter, createRoutesFromElements , Route} from "react-router-dom"
import App from "./App"
import { bookmarkdLoader } from "./loaders"
import Index from "./pages/Index"

const router = createBrowserRouter(
    createRoutesFromElements (
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={bookmarkdLoader}/>
        </Route>
    )
)

export default router