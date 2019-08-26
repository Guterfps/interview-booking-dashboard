import React, { Component } from 'react';
import axios from 'axios'
import env from '../env'

class Genralstats extends Component{
    constructor(){
        super()
        this.state={
            stats:{}
        }
    }
async componentDidMount(){
let response=await axios.get(`http://${env.API_URL}/booking-snapshot`)

this.setState({
    stats:response.data
})
}
    render(){
        return(
            <div className="row">
                <div className="col s4 ">
               <h1 className='name'>{this.state.stats.availableRooms}</h1>
               Rooms available
               </div>
               <div className="col s4">
               <h1 className='name'>{this.state.stats.reservedRooms}</h1>
               Rooms reserved
               </div>
               <div className="col s4">
               <h1 className='name'>{this.state.stats.checkedIn}</h1>
               checked In
               </div>
            </div>
        )
    }
}

export default Genralstats