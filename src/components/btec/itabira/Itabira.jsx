import React from 'react';
import fotoItabira from './fotoItabira.png';
import './Itabira.css';
class Itabira extends React.Component {
    render() {
        return (
            <div className='itabira'>
                {/* <img className='foto' src={fotoItabira} alt='fotoItabira' /> */}
                <h2 className='daIdeia'>DA IDEIA AO SUCESSO</h2>
            </div>
        );
    }
}

export default Itabira;