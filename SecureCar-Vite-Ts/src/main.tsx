import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PaginaErro from './pages/PaginaErro/PaginaErro.tsx';
import PaginaRegistroLogin from './pages/PaginaRegistroLogin/PaginaRegistroLogin.tsx';
import PaginaInicial from './pages/PaginaInicial/PaginaInicial.tsx';
import PaginaFAQ from './pages/PaginaFAQ/PaginaFAQ.tsx';
import PaginaNovidades from './pages/PaginaNovidades/PaginaNovidades.tsx';
import PaginaChatBot from './pages/PaginaChatBot/PaginaChatBot.tsx';
import PaginaSuaConta from './pages/PaginaSuaConta/PaginaSuaConta.tsx';




const routes = createBrowserRouter([
  {
    path:'/',element:<App/>, errorElement:<PaginaErro/>,children:[
      {path:'/',element:<PaginaRegistroLogin/>},
      {path:'/pages/PaginaInicial/PaginaInicial',element:<PaginaInicial/>},
      {path:'/pages/PaginaFAQ/PaginaFAQ',element:<PaginaFAQ/>},
      {path:'/pages/PaginaNovidades/PaginaNovidades',element:<PaginaNovidades/>},
      {path:'/pages/PaginaChatBot/PaginaChatBot',element:<PaginaChatBot/>},
      {path:'/pages/PaginaSuaConta/PaginaSuaConta',element:<PaginaSuaConta/>}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
