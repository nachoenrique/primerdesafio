import React from 'react'
import '../style/Badges.css'
import '../style/Badge.css'
import Usuario from '../imagen/Usuario-logo.svg'
import ReactDOM from 'react-dom'
import UsuarioBadge from './UsuarioBadge';

class UsuarioBadgeView extends React.Component {

    datos = this.props.data

    handleClick = e => {
        ReactDOM.render(<UsuarioBadge />, document.getElementById('root'));
    }

    render() {



        return (
            <div className="container">
                <div className="Badges__hero">
                    <img className="Badges__container mb-4" src={Usuario} alt="Usuario" />
                </div>

                <div className="Badge__section-name">
                    <h1>{this.datos.na}</h1>
                </div>

                <div className="Badge__section-info mb-4">
                    <h3>{this.datos.email}</h3>
                </div>

                <div>
                    <button type="button" onClick={this.handleClick} className="btn btn-primary ">Volver</button>
                </div>

            </div>
        )
    }
}

export default UsuarioBadgeView