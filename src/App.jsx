import './App.css'
import {ContenedorUsuarios} from './componentes/ContenedorUsuarios';
import { MostrarUsuario } from './componentes/MostrarUsuario';
import { Navegacion } from './componentes/Navegacion';


const App = () => {
    return(
        <div>
            <Navegacion />
            <ContenedorUsuarios>
            <div>
                <MostrarUsuario/> 
            </div>
        </ContenedorUsuarios>
        </div>
        
    )
}

export default App