import React, {Component} from 'react';

class State extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:"PDP",
            son:0
        }

    }

    render() {

        const Add =() =>{
            this.setState({
                title:"PDP Academy"
            })
        }
        const plus = () =>{
            if(this.state.son <10){
            this.setState({
                son:this.state.son +1
            })
        }}
        const minus = () => {
            if (this.state.son > 0) {
                this.setState({
                    son: this.state.son - 1
                })
            }
        }


        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    <h3>{this.state.title }</h3>
                    <button type="button" onClick={Add }>Add</button>
                </div>
                    <div className="col-3 d-flex justify-content-between align-items-center">
                        <button type="button" className="btn btn-danger" onClick={minus}>-</button>
                        <h2>{this.state.son}</h2>
                        <button type="button" className="btn btn-success " onClick={plus}>+</button>
                    </div>
                </div>



            </div>
        );
    }
}

export default State;