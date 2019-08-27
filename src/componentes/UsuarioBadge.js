import React from 'react';
import '../style/Badge.css'
import Usuario from '../imagen/Usuario-logo.svg'

class UsuarioBadge extends React.Component {

    state = {
        na: "", email: ""
    }

    handleClick = e => { console.log('Se hizo click') }
    handleChange = e => {
        console.log({
            na: e.target.name,
            email: e.target.value
        })
    }

    render() {

        return (
            <div className="Badge">
                <form>
                    <div className="form-group">
                        <div>
                            <img className="Badge__avatar mb-4" src={Usuario} alt="Usuario" />
                        </div>

                        <div >
                            <label>Nombre y Apellido: </label>
                            <input onChange={this.handleChange} type="text" className="form-control" name="na" />
                            <label>Email: </label>
                            <input onChange={this.handleChange} type="email" className="form-control" name="email" />
                        </div>

                    </div>

                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Ir</button>

                </form>
            </div>
        );
    }

}

export default UsuarioBadge; 