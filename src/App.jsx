import './App.css'
import PetCard from "./components/PetCard"


function App() {
 // parte logica 
 let nombre = "Rafa" 

  return ( 
    // parte visual
    <>
      <h1>{nombre}</h1>
      <h2>{"error " + (400 + 4) + ": page not found"}</h2>
      
    <PetCard>
      {/* fragmento */}


    </PetCard>
    </>


  )
}

export default App
