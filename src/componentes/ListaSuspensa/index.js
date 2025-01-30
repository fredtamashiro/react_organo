import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    const placeholder = `Selecione o seu ${props.name}`;

    return (
      <div className="lista-suspensa">
        <label htmlFor="campo-lista-suspensa">{ props.name }:</label>
        <select 
            name={props.name}
            onChange={props.aoAlterado} 
            className="campo-lista-suspensa"
            value={props.valor}
        >
            <option value="">{placeholder}</option>
            {props.itens.map((item)=> <option key={item.id} value={item.id}>{item.nome}</option>)}
            </select>
      </div>
    );
  }
  
  export default ListaSuspensa;