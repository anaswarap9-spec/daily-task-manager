
import './App.css'
import EditTask from './pages/EditTask';
import AddTask from './pages/AddTask'
import Home from './pages/Home'

import { Routes , Route } from 'react-router-dom'





function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-task" element={<AddTask />} />
      
   
      <Route path="/edit-todo/:id" element={<EditTask />} />
      
  
    </Routes>
    
    </>
    
   
      
           
      
    
  )
}

export default App
