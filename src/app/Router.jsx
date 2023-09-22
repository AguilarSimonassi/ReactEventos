import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { EventDetailsPage } from "../pages/EventDetails/EventDetails";
import { NotFound } from "../pages/NotFound/NotFound";

/* criar uma pagina 404 com o path="*" que contenha um botão
para voltar para a pagina inicial */

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route /* index */ path="/" element={<Home />} />
                <Route path="/eventos/:id" element={<EventDetailsPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}