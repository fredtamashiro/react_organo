import './Colaborador.css';
import { FaCircleXmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

export default function Colaborador({ times, id, nome, cargo, imagem, corDeFundo, aoDeletar, favorito = false, aoFavoritar }) {
    function favoritar() {
        aoFavoritar(id);
    }

    return (
        <div className="colaborador">
            <div>
                <FaCircleXmark size={30} className="deletar" onClick={() => aoDeletar(id)} />
            </div>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src="https://github.com/fredtamashiro.png" alt={imagem} />
            </div>
            <div className='rodape'>
                <h4>{times}.{id}.{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favoritar'>
                    {favorito
                        ?
                        <FaHeart size={30} onClick={favoritar} />
                        :
                        <FaRegHeart size={30} onClick={favoritar} />}
                </div>
            </div>
        </div>
    );
}
