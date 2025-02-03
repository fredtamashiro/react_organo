import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import useTimes from './data/Times';


function App() {

    const [colaboradores, setColaboradores] = useState([]);
    const [listaTimes,setTimes] = useTimes();
    const aoNovoColaboradorAdicionado = (colaborador) => {
        // debugger
        setColaboradores([
            ...colaboradores,
            colaborador
        ]);
    }

    function deletarColaborador(id){
        console.log('Deletando colaborador...',id);
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
    }

    function mudarCorDoTime(cor,id){
        console.log('Mudando cor do time...');
        setTimes(listaTimes.map(time => {    
            if(time.id === id){
                time.cor = cor;
            }
            return time;
        }))
    }

    function resolverFavorito(id){
        console.log('Favoritando colaborador...',id);
        setColaboradores(colaboradores.map(colaborador => {
            if(colaborador.id === id){
                colaborador.favorito = !colaborador.favorito;
            }
            return colaborador;
        }));
    }

    return (
        <div className="App">
            <Banner />
            <Formulario aoColaboradorSalvo={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
            {listaTimes.map((listaTimes, indice) => 
                <Time 
                    key={indice}
                    id={listaTimes.id}
                    nome={listaTimes.nome}
                    cor={listaTimes.cor}
                    colaboradores={colaboradores.filter(colaborador => Number(colaborador.times) === listaTimes.id)}
                    aoDeletar={deletarColaborador}
                    mudarCor={mudarCorDoTime}
                    aoFavoritar={resolverFavorito}
                />
            )}
        </div>
    );
}

export default App;
