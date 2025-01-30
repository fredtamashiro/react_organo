import './Colaborador.css';

export default function Colaborador({nome, imagem, cargo, times, corDeFundo}) { 
  return (
    <div className="colaborador">
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src="https://github.com/fredtamashiro.png" alt={imagem} />
        </div>
        <div className='rodape'>
            <h4>{times}.{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
  );
}
