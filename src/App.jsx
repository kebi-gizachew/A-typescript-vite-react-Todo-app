import { useState} from 'react'
import PropContext from './Hooks/PropContext'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Edit from './Pages/Edit'
import Store from './Typescript_file/Store.js'
function App() {
  const [edit,setEdit]=useState({})
  const [todo,setTodo]=useState([...Store])
  return(
    <PropContext.Provider value={{edit,setEdit, Store, todo, setTodo}}>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/edit" element={<Edit />}/>
  </Routes>
  </BrowserRouter>
  </PropContext.Provider>
  )
}

export default App