import {createBrowserRouter, createRoutesFromElements , Route,} from "react-router-dom"
import App from "./App"
import { bookmarkdLoader } from "./loaders"
import Index from "./pages/Index"
import { createAction, deleteAction} from "./action"

const router = createBrowserRouter(
    createRoutesFromElements (
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={bookmarkdLoader} />
            <Route path="/create" action={createAction} />
            <Route path="/:id/delete" action={deleteAction} />
        </Route>
    )
)

export default router