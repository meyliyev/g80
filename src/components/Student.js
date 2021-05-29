import React, {Component} from 'react';


class Student extends Component {

    render() {
        return (
<div>
    <div className="row mt-3">
<div className="col-12 d-flex">
            <div  className="col-22 border d-flex align-items-center">{this.props.bosh} <img className="ml-1" src="img/3.png" alt=""/></div>
    <div className="col-33 border d-flex align-items-center p-lg-1"><div className="pous"><i className="fas fa-search pr-2"></i><input  type="text"  className=" border-0" placeholder="Search by Artist or Song"/></div></div>
            <div className="col-77 border d-flex align-items-center justify-content-sm-end" ><span>30 Result Show:</span><input type="number" className="fa ml-2 mr-2 border form-control"  placeholder="15"/><span > 1  2 ... 5  6</span> <span className="ml-4">Jump to:<input type="number" className="fa ml-2 mr-2 border form-control "  placeholder="1"/></span></div>

</div>
    </div>
                        <table className="table table-striped">
                            <tr>
                                <td className="border td-1"><div className="katak "></div></td>
                                <td  className="border">{this.props.Name} <i className="icon  "> <img src="img/2.png" alt=""/></i></td>
                                <td  className="border">{this.props.Email}<i className="icon "> <img src="img/2.png" alt=""/></i></td>
                                <td  className="border">{this.props.Date}<i className="icon "> <img src="img/2.png" alt=""/></i></td>
                                <td  className="border">{this.props.Record}<i className="icon "> <img src="img/2.png" /></i></td>
                                <td  className="border">{this.props.Lacation}<i className="icon "> <img src="img/2.png" /></i></td>
                                <td  className="border">{this.props.Best}<i className="icon "> <img src="img/2.png" alt=""/></i></td>
                                <td  className="border" >{this.props.Action}<i className="icon "> <img src="img/2.png" alt=""/></i></td>
                            </tr>
                            <tbody>
                            <tr>
                                <td className="border td-1 "><div className="katak "></div></td>
                                <td className="border">{this.props.name}</td>
                                <td className="border"><div className="d-flex align-items-center justify-content-between email">{this.props.email}<img src="img/5.png" alt=""/></div></td>
                                <td className="border">{this.props.sana}</td>
                                <td className="border">{this.props.rec}</td>
                                <td className="border">{this.props.lac}</td>
                                <td className="border">{this.props.son}</td>
                                <td className="border  "><a type="button" className="btnn border-0 d-flex align-items-center justify-content-center "><img src="img/4.png" alt=""/></a></td>
                            </tr>
                            </tbody>

                        </table>
</div>




            







        );
    }
}






export default Student;