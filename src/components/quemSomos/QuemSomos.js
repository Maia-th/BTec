import React from 'react';
import './QuemSomos.css';

function QuemSomos() {
    return (
        <div className='divSomos'>
            <h1>Quem Somos</h1>
            <div className='divVideo'>
                <iframe className='videoBtec' src="https://www.youtube.com/embed/CTAtcs8fAhQ?si=z0KrCR3USeIyPQ85" title='video' allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className='textoVideo'>Buscamos promover o empreendedorismo por meio do incentivo à inovação, com a transformação de ideias em produtos e serviços tecnológicos com valor para o mercado.</p>
            </div>
            
        </div>
    );
}

export default QuemSomos;