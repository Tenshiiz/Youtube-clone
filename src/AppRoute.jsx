import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./Paginas/PaginaBase/App";
import PaginaVideos from "./Paginas/PaginaVideos";
import PageNotFound from "./Paginas/PageNotFound";


function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="videos/:id" element={<PaginaVideos />} />
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute;