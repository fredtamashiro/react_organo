import Colaborador from '../Colaborador';
import './Time.css';

export default function Time (props){

    return (
        props.colaboradores.length === 0 ? null :
        <div className="time" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.id}.{props.nome}</h3>
            <div className="colaboradores">
            {props.colaboradores.map(colaborador => (
                <Colaborador 
                    key={colaborador.id}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} 
                    times={colaborador.times}
                    corDeFundo={props.corPrimaria}
                />
            ))}
            </div>
        </div>
    );
}
