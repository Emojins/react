import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(Boolean)

  return (
    <div className="App">
      <h1>Botón Count</h1>
      <h3>Contador: {count}</h3>
      <div className="card">
        <button 
        onClick={() => setCount((count) => count + 1)}
        placeholder = "incrementar"
        >
          Incrementar
        </button>
        <button 
        onClick={() => setCount((count) => count - 1)}
        placeholder = "decrementar"
        >
        Decrementar
        </button>
      </div>
    
    <div>
       <h1>Botón Condicional</h1>
        <h3> {count ? "True" : "False"}</h3>
        <div className="card">
        <button onClick={() => setCount(!count)}>
          Change State
        </button>
      </div>

    </div>
    </div> 
  )
}

export default App
