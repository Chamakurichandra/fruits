import React, { Component } from 'react';
import axios from "axios";
import "./App.css";
import Info from "./components/Info";
import Order from "./components/Order";
import Footer from "./components/Footer";
export default class App extends Component {
  constructor(){
    super();
    this.state={
      fruits:[],
      details:"",
      data:1,
      cart:null
    }
  }

 changeState=()=>{
            this.setState({
                cart:this.state.cart+1
            })
            console.log("added")
        };
  Show=(acive)=>{
    this.setState({
      details:acive
    })
  }
  componentDidMount(){
    axios.get("http://localhost:3000/fruits")
    .then((posRes)=>{
      this.setState({
        fruits:posRes.data
      })
    },(errRes)=>{
      console.log(errRes);
    })
  }
  render() {
    const {fruits,details}=this.state
    return (
      <div className="container">
        {this.state.details===""?<div>
        <img src="https://i.postimg.cc/sx6bMRQ7/banner.jpg" alt="" width="100%" height="100px"></img>
        <img src="https://i.postimg.cc/jdmw0wgQ/banner1.jpg"alt="" width="100%" height="130px"></img> 
            <h2 className="items">Most popular items :</h2> 
             {this.state.fruits.map((element,index)=>(
          <div className="row">
            <div className="col" onClick={()=>this.Show(element)}> 
            <img className="img" src={element.picture} alt=""></img>
            </div>
            <div className="col-8">
           <span style={{fontWeight:"bolder"}}> {element.name}</span>-{element.price}
            <p>{element.about}</p>
            <div>
            <div className="flex"> <button onClick={this.changeState} className="btn1">Add to cart</button></div>
            <div className="flex" ><button className="btn1" style={{border:"1px solid black"}}>{this.state.data} {element.quantity} </button></div>
            </div>
            </div>
          </div>
        ))}</div>:<Info fruits={fruits} details={details}/>||<Order  fruits={fruits} details={details}/>}
        <Footer cart={this.state.cart}/>
      </div>
    )
  }
}
