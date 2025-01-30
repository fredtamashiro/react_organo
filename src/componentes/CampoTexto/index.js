import './CampoTexto.css';

const CampoTexto = (props) => {

    const placeholder = `Digite o seu ${props.name}`;
    return (
        <div className="campo-texto">
            <label htmlFor="campo-texto">{props.name}:</label>
            <input
                onChange={props.aoAlterado}
                value={props.valor}
                type="text"
                className="campo-texto"
                name={props.name}
                id={props.name}
                placeholder={placeholder}
                required={props.obrigatorio}
            />
        </div>
    );
}

export default CampoTexto;