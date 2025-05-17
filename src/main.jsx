import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import imagenDeBlog from './images/imagen-de-blog.png';
import imagenDeAvatar from './images/image-avatar.webp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
