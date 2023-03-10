import './App.css'
import Card from "./components/Card.jsx";
import {dados} from "./components/Dados.jsx";

function App() {
    return (
        <div className="App">
            <Card
                nome={dados.nome}
                idade={dados.idade}
                foto={dados.foto}
                github={dados.github}
                linkedin={dados.linkedin}
            />

        </div>
    )
}

export default App
