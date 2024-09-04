import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PaginaChatBot from "./pages/PaginaChatBot/PaginaChatBot";
import PaginaErro from "./pages/PaginaErro/PaginaErro";
import PaginaFAQ from "./pages/PaginaFAQ/PaginaFAQ";
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import PaginaNovidades from "./pages/PaginaNovidades/PaginaNovidades";
import PaginaRegistroLogin from "./pages/PaginaRegistroLogin/PaginaRegistroLogin";
import PaginaSuaConta from "./pages/PaginaSuaConta/PaginaSuaConta";
import PaginaDosParticipantes from "./pages/PaginaDosParticipantes/PaginaDosParticipantes";

export const routes = createBrowserRouter([
    {
      path:'/',element:<App/>, errorElement:<PaginaErro/>,children:[
        {path:'/',element:<PaginaRegistroLogin/>},
        {path:'/pages/PaginaInicial/PaginaInicial',element:<PaginaInicial/>},
        {path:'/pages/PaginaFAQ/PaginaFAQ',element:<PaginaFAQ/>},
        {path:'/pages/PaginaNovidades/PaginaNovidades',element:<PaginaNovidades/>},
        {path:'/pages/PaginaChatBot/PaginaChatBot',element:<PaginaChatBot/>},
        {path:'/pages/PaginaSuaConta/PaginaSuaConta',element:<PaginaSuaConta/>},
        {path:'/pages/PaginaDosParticipantes/PaginaDosParticipantes',element:<PaginaDosParticipantes/>}
      ]
    }
  ])
  