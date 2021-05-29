import React, {Component} from 'react';
import SginUp from "./SginUp";

class Siginin extends Component {
    constructor(props) {
        super(props);
        this.state={
            chiqar:true,
            email:"Email",
            password:"password"
        }
    }

    render() {
        const chopQilish = () =>{
            this.setState({
                chiqar:!this.state.chiqar
            })
        }


        const onchage = (e) =>{
            this.setState({
            [e.target.name]:e.target.value,
            })
        }
        return (
<div>
        {this.state.chiqar? <div className="render">
                <div className="wel">
                    <h3>Welcome Back</h3>
                    <p>Loginback into your account</p>
                </div>

                <div className="box-in">
                    <h3 className="bosh">Log In</h3>

                    <div className="E-mail">
                        <div className="icon"><i className="fas fa-envelope "></i></div>
                        <input type="text"  name="email" onChange={onchage} placeholder="E-mail" className="inpu"/>
                    </div>

                    <div className="E-mail">
                        <div className="icon"><i className="fas fa-lock "></i></div>
                        <input type="text" name="password" onChange={onchage} placeholder="Password" className="inpu"/>
                    </div>

                    <h6 className="pos">Forgot Password?</h6>
                    <div className="d-flex justify-content-center">
                        <button  className="buton">LOGIN</button>
                    </div>

                </div>
                <div className="lin">
                    <p>Don't have an account tet?</p><a href="#" onClick={chopQilish}>Join Now</a>
                </div>

                <div className="profil"></div>
            </div>

            :<SginUp/>
        }
</div>




        );
    }
}

export default Siginin;