import {createBrowserRouter, createRoutesFromElements , Route} from "react-router-dom"
import App from "./App"

const router = createBrowserRouter(
    createRoutesFromElements (
        <Route path="/" element={<App/>}>
            <Route path="" element={<h1>Router has been connected </h1>}/>
        </Route>
    )
)

export default router