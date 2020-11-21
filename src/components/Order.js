import React, { Component } from 'react'

export default class Order extends Component {
    constructor(props){
        super(props);
        this.state={
            order:props.details
        }
    }
    render() {
        const {details}=this.state
        return (
            <div>
             <h2>My Orders :</h2>   
             {details.total}

            </div>
        )
    }
}
