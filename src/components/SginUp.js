import React, {Component} from 'react';
import Siginin from "./Siginin";

class SginUp extends Component {
    constructor(props) {
        super(props);
        this.state={
            chiqar:true
        }
    }

    render() {
        const chopQilish = () =>{
            this.setState({
                chiqar:!this.state.chiqar

            })
        }
        return (
            <div>

                { this.state.chiqar?
                    <div className="render">
                    <div className="wel">
                        <h3>Welcome</h3>
                        <p>Signup into your account</p>
                    </div>

                    <div className="box-in">
                        <h3 className="bosh">Sign Up</h3>

                        <div className="E-mail">
                            <div className="icon"><i className="fas fa-user "></i></div>
                            <input type="text"   placeholder="Full Nmae" className="inpu"/>
                        </div>
                        <div className="E-mail">
                            <div className="icon"><i className="fas fa-envelope "></i></div>
                            <input type="text" placeholder="E-mail" className="inpu"/>
                        </div>

                        <div className="E-mail">
                            <div className="icon"><i className="fas fa-lock "></i></div>
                            <input type="text" placeholder="Password" className="inpu"/>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="buton">SIGN UP</button>
                        </div>

                    </div>
                    <div className="lin">
                        <p>Don't have an account tet?</p><a href="#" onClick={chopQilish}>Log in</a>
                    </div>

                    <div className="prof">
                        <div className="prof-img"><i className="fas fa-camera f"></i></div>
                    </div>

                </div>:<Siginin/>
                }
            </div>
        );
    }
}

export default SginUp;