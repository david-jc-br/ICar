import React from 'react';
import { useParams } from 'react-router';

const Alugar: React.FC = () => {
    const { placa } = useParams<{ placa: string }>();
    return (
        <div>
            {/* {placa} */}
            <div className="form-container">
                <h2>Alugar</h2>
                <div className="form-group">
                    <label>
                        Placa:
                        <input type="text" value={placa}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        CPF do cliente:
                        <input type="text" value=""/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Valor:
                        <input type="text" value=""/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Data locação:
                        <input type="date" value=""/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Data devolução
                        <input type="date" value=""/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Valor:
                        <input type="text" value=""/>
                    </label>
                </div>
                <button type="submit">Confirmar</button>
            </div>
        </div>
    );
};

export default Alugar;
