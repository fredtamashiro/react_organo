import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { listaTimes } from './data/Times';

function App() {

    const [colaboradores, setColaboradores] = useState([]);

    const aoNovoColaboradorAdicionado = (colaborador) => {
        // debugger
        setColaboradores([
            ...colaboradores,
            colaborador
        ]);
    }

    return (
        <div className="App">
            <Banner />
            <Formulario aoColaboradorSalvo={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
            {listaTimes.map(listaTimes => 
                <Time 
                    id={listaTimes.id}
                    nome={listaTimes.nome}
                    corPrimaria={listaTimes.corPrimaria}
                    corSecundaria={listaTimes.corSecundaria}
                    colaboradores={colaboradores.filter(colaborador => Number(colaborador.times) === listaTimes.id)}
                />
            )}
        </div>
    );
}

export default App;
