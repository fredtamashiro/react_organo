import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador';
import './Time.css';

export default function Time ({id, nome, cor, colaboradores ,aoDeletar,mudarCor, aoFavoritar}){

    const handleColorChange = (event) => {
        mudarCor(event.target.value, id);
    };



    return (
        colaboradores.length === 0 ? null :
        <div className="time" style={{ backgroundColor: hexToRgba(cor, 0.4) }}>
            <input 
                value={cor} 
                type="color" 
                className="input-cor" 
                onChange={handleColorChange} 
            />
            <h3 style={{ borderColor: cor }}>{id}.{nome}</h3>
            <div className="colaboradores">
            {colaboradores.map((colaborador,indice) => (
                <Colaborador 
                    key={indice}
                    id={colaborador.id}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} 
                    times={colaborador.times}
                    corDeFundo={cor}
                    aoDeletar={aoDeletar}
                    favorito={colaborador.favorito} 
                    aoFavoritar={aoFavoritar}
                />
            ))}
            </div>
        </div>
    );
}
