import React from 'react'
import TextGenerator from './generator/TextGenerator'
import { Toaster } from 'react-hot-toast'
import "./generator/style.css"
const App = () => {
  return (
    <>
      <TextGenerator />
          <Toaster />
    </>
  )
}

export default App