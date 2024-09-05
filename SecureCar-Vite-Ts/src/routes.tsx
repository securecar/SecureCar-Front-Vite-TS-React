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
import Blog from "./pages/Blog/Blog";
import SinglePost from "./pages/Blog/SinglePost/SinglePost";


export const routes = createBrowserRouter([
    {
      path:'/',element:<App/>, errorElement:<PaginaErro/>,children:[
        {path:'/login',element:<PaginaRegistroLogin/>},
        {path:'/',element:<PaginaInicial/>},
        {path:'/faq',element:<PaginaFAQ/>},
        {path:'/novidades',element:<PaginaNovidades/>},
        {path:'/chatbot',element:<PaginaChatBot/>},
        {path:'/conta',element:<PaginaSuaConta/>},
        {path:'/participantes',element:<PaginaDosParticipantes/>},
        {path: '/blog', element: <Blog/>},
        {path: '/blog/:idPost', element: <SinglePost />}
      ],
    },
      
  ])
  