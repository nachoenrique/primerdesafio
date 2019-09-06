import React from 'react';
import '../style/Badge.css'
import '../style/Badges.css'
import Usuario from '../imagen/Usuario-logo.svg'
import ReactDOM from 'react-dom'
import UsuarioBadgeView from './UsuarioBadgeView';


class UsuarioBadge extends React.Component {

    state = {
        data: { na: "", email: "", password: "" },
        submited: false
    }

    handleClick = e => {
        // if ((this.state.data.na === "" || this.state.data.email === "" || this.state.data.password === "")) {
        //     alert('¡Falta completar algún campo!')
        // }
        // else { ReactDOM.render(<UsuarioBadgeView data={this.state.data} />, document.getElementById('root')); }
        if ((this.state.data.na === "" || this.state.data.email === "" || this.state.data.password === "")) {
            alert('¡Falta completar algún campo!')
        } else {
            this.setState({ submited: true })
        }
    }


    handleChange = e => {
        this.setState({

            data: { ... this.state.data, [e.target.name]: e.target.value }

        })
    }


    render() {

        return (
            <div className="container">
                {!this.state.submited ? (<form>
                    <div className="form-group">
                        <div className="Badges__hero">
                            <img className="Badges__container mb-4" src={Usuario} alt="Usuario" />
                        </div>

                        <div >
                            <label>Nombre y Apellido: </label>
                            <input onChange={this.handleChange} type="text" className="form-control" name="na" />
                            <label>Email: </label>
                            <input onChange={this.handleChange} type="email" className="form-control" name="email" />
                            <label>Contraseña: </label>
                            <input onChange={this.handleChange} type="password" className="form-control" name="password" />
                        </div>

                    </div>
                    <div>
                        <button type="button" onClick={this.handleClick} className="btn btn-primary">Ir</button>
                    </div>

                </form>) : <UsuarioBadgeView data={this.state.data} />}
            </div >
        );
    }

}

export default UsuarioBadge; 