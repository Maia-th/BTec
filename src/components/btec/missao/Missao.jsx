import React from 'react';
import "./Missao.css";
import '../../../styles/global.css';

function Missao() {
    return (
        <div className='divContainer'>
            <div className='divMissao'>
                <h7 className='num' >01</h7>
                <h3>Nossa Missão</h3>
                <p>Nossa missão consiste em apoiar o desenvolvimento de novos negócios de base tecnológica por meio da trilha do empreendedor com foco na geração de resultados inovadores e atendimento das demandas locais.</p>
            </div>
            <div className='divMissao' >
                <h7 className='num' >02</h7>
                <h3>Nossa Visão</h3>
                <p>Ser uma incubadora de referência em gerar e consolidar negócios de base tecnológica (não escaláveis e escaláveis), integrando todos os ambientes de inovação e colaboradores, desenvolvendo os projetos com tecnologias inovadoras e sustentáveis. </p>
            </div>
            <div className='divMissao' >
                <h7 className='num' >03</h7>
                <h3>Nossos Valores</h3>
                <p><strong>Agilidade:</strong> Conectar a comunidade acadêmica ao ramo tecnológico.<br/>
                <strong>Impacto:</strong> Fomentar o desenvolvimento de novos negócios tecnológicos.<br/>
                <strong>Inovação:</strong> Incentivar a criação de novas tecnologias.<br/>
                <strong>Tecnologia:</strong> Propor a solução de problemas usando tecnologia.<br/>
                <strong>Mão na massa:</strong> Auxiliar o desenvolvimento de soluções.</p>
            </div>
        </div>
    );
}

export default Missao;