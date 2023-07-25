import React from 'react';
import { useParams } from 'react-router';

const MeusAlugueis: React.FC = () => {
    const { placa } = useParams<{ placa: string }>();
    return (
        <div>
            <h2>Meus Aluguéis</h2>
            {placa}
        </div>
    );
};

export default MeusAlugueis;
