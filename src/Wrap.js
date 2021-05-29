import ProductData from "./components/ProductData";
import React from 'react';

function Wrap() {
    return (
        <div className="container">
            <div className="row mt-3">



                <div className="col-12  d-flex">
                    <div  className="col-22 border d-flex align-items-center"> Filter Results<img className="ml-1" src="img/3.png" alt=""/></div>
                    <div className="col-33 border d-flex align-items-center p-lg-1"><div className="pous"><i className="fas fa-search pr-2"></i><input  type="text"  className=" border-0" placeholder="Search by Artist or Song"/></div></div>
                    <div className="col-77 border d-flex align-items-center justify-content-sm-end" ><span>30 Result Show:</span><input type="number" className="fa ml-2 mr-2 border form-control"  placeholder="15"/><span  className="text-info"> 1 2 . . . 5  6</span> <span className="ml-4">Jump to:<input type="number" className="fa ml-2 mr-2 border form-control "  placeholder="1"/></span></div>
                </div>


                <div className="col-12 ">
            <table className="table  ">
                <tr>
                    <td className="border "><div className="katak "/></td>
                    <td  className="border pl-3">Name <i className="icon  "> <img src="img/2.png" alt=""/></i></td>
                    <td  className="border pl-4">Email<i className="icon "> <img src="img/2.png" alt=""/></i></td >
                    <td  className="border pl-3">Date<i className="icon "> <img src="img/2.png" alt=""/></i></td>
                    <td  className="border pl-3">Record<i className="icon "> <img src="img/2.png" /></i></td>
                    <td  className="border pl-3">Lacation<i className="icon "> <img src="img/2.png" /></i></td>
                    <td  className="border pl-3">Best<i className="icon "> <img src="img/2.png" alt=""/></i></td>
                    <td  className="border pl-3" >Action<i className="icon "> <img src="img/2.png" alt=""/></i></td>
                </tr>



                <tbody>
                {ProductData.map((props) =>{
                    return(
                        <tr>
                            <td className="border text-center td-1 "><div className="katak "></div></td>
                            <td className="border pl-3">{props.Name}</td>
                            <td className="border "><div className="d-flex align-items-center justify-content-between email text-info img ">
                                <input type="text"className="text-info form-control border-0 input" defaultValue={props.Email}/><img   src="img/5.png" alt=""/></div></td>

                            <td className="border pl-3">{props.Data}</td>
                            <td className="border pl-3">{props.Record}</td>
                            <td className="border pl-3">{props.Lacation}</td>
                            <td className="border pl-3">{props.Best}</td>
                            <td className="border pl-3 "><a type="#" className="btnn border-0  d-flex align-items-center justify-content-center "> <img src="img/4.png" alt=""/></a></td>
                        </tr>
                    )})}
                </tbody>



            </table>
          </div>


                <div className="col-12 margin mb-3 ">
                    <div className="col-12 border d-flex align-items-center justify-content-sm-end p-lg-1" ><span>30 Result Show:</span><input type="number" className="fa ml-2 mr-2 border form-control"  placeholder="15"/><span  className="text-info"> 1  2 ... 5  6</span> <span className="ml-4">Jump to:<input type="number" className="fa ml-2 mr-2 border form-control "  placeholder="1"/></span></div>
                </div>

            </div>
        </div>
    );
}

export default Wrap;