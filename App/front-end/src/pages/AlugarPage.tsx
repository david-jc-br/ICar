import React from 'react';
import { useParams } from 'react-router';

const Alugar: React.FC = () => {
    const { placa } = useParams<{ placa: string }>();
    return (
        <div>
            <h2>Alugar</h2>
            {placa}
        </div>
    );
};

export default Alugar;