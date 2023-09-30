import { useState } from 'react'

import './App.css'
import Blogs from './assets/compnent/Blogs/Blogs'
import Header from './assets/compnent/Header/Header'
import Bookmarks from './assets/compnent/Bookmarks/Bookmarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Header></Header>
      <main className=' flex  md:flex'>
         <Blogs></Blogs>
         <Bookmarks></Bookmarks>
      </main>

    </>
  )
}

export default App
