import React from 'react';
import './SobreMentoria.css';
import etapas from '../../../../assets/images/etapasMentoria.png';
export default function SobreMentoria() {
    return (
        <div className='divSobreMentoria'>
            <h2 className='tituloSobre'> Programa de Mentoria da BTec</h2>
            <p className='pSobre'>O processo de mentoria de negócios é um processo estruturado, com metodologia consistente, com início, meio e fim, estando distante de ser apenas uma conversa entre um profissional sênior e mentorado. O tempo de duração do programa pode variar entre 4 a 8 sessões, dependendo dos objetivos da mentoria e da necessidade do empreendedor.</p>
            <div className='divImg'><img className="etapasMentoria" src={etapas} alt="Etapas da Mentoria" /></div>
        </div>
    );
};

