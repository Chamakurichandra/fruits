import React, { Component } from 'react';
export default class Info extends Component {
    constructor(props){
        super(props);
        this.state={
            data:1,
            details:props.details
        }
    }
    Order=(information)=>{
        this.setState({
            details:information
        })
    }
Remove=()=>{
   if(this.state.data===1){
       this.setState({
           data:this.state.data
       })
   }else{
       this.setState({
           data:this.state.data-1
       })
   }
}
Add =()=>{
    if(this.state.data<=4){
        this.setState({
            data:this.state.data+1
        })
    }
}

    render() {
        const {details}=this.state
        return (
            <div className="card">
                <div className="row">
                    <div className="col">
                    <img className="img" src={details.picture} alt=""></img>
                    </div>
                    <div className="col-8">
           <span style={{fontWeight:"bolder"}}> {details.name}</span>-{details.price}
            <p>{details.about}</p>
            <div>
            <div className="flex">
              <button className="mainBtn">
              <button onClick={this.Remove} type="button" className="btn">-</button>
             <button type="button"  className="btn">{this.state.data}</button>
              <button onClick={this.Add} type="button" className="btn">+</button>
              </button>
            </div>
           <div className="flex"><button className="btn1" style={{border:"1px solid black"}}>{this.state.data}{details.quantity}</button></div>
           <button onClick={this.Order} type="button" className="btn btn-outline-warning place">Place Order</button>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col">
            <img className="img-2" src={details.picture} alt=""></img>
            </div>
            <div className="col">
            <img className="img-2" src={details.picture} alt=""></img>
            </div>
            <div className="col">
            <img className="img-2" src={details.picture} alt=""></img>
            </div>
            <div className="col">
            <img className="img-2" src={details.picture} alt=""></img>
            </div>
            <div className="col">
            <img className="img-2" src={details.picture} alt=""></img>
            </div>
            </div>
            <h2 className="items">Review</h2>
               <p className="para"> {details.info}</p>
            </div>
        )
    }
}
