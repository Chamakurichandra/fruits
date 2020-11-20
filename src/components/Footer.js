import React, { Component } from 'react'
import "./Style.css";
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <div className="row">
            <div className="col">
            <i className="fa fa-home"></i>  
            </div>
            <div className="col">
            <i className="fa fa-windows"></i>
            </div>
            <div className="col">
            <i className="fa fa-shopping-cart"></i>  
            </div>
            <div className="col">
            <i className="fa fa-search"></i>   
            </div>
            <div className="col">
            <i className="fa fa-user"></i>  
            </div>
            </div> 
            </div>
        )
    }
}
