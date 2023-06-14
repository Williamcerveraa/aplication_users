import './App.css'
import {ContenedorUsuarios} from './componentes/ContenedorUsuarios';
import { MostrarUsuario } from './componentes/MostrarUsuario';


const App = () => {
    return(
        <ContenedorUsuarios> 
            <div>
                <MostrarUsuario/> 
            </div>
        </ContenedorUsuarios>
    )
}

export default App