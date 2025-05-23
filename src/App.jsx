// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import imagenDeBlog from './images/imagen-de-blog.png';
import imagenDeAvatar from './images/image-avatar.webp';


function App() {
  return(
    <div className='cuadro-blog'>
      <img className='imagen-blog' src={imagenDeBlog} alt='Imgaen de blog12'></img>
      <div className='cuadro-learning'>
        Leraning
      </div>
      <div className='cuadro-publicado'>
        Published 21 Dec 2023
      </div>
      <div className='cuadro-HTML'>
        HTML & CSS foundations
      </div>
      <div className='cuadro-texto'>
        These languages are the backbone of every website, defeting structure, context, and presentatios
      </div>
      <div className='cuadro-perfil'>
        <img src={imagenDeAvatar} alt="imagen avatar2" />
        <div>
          Greg Hooper
        </div>
      </div>
    </div>

  )
  
}

export default App
