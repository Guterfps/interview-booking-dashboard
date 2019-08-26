import React, { Component } from 'react';
import axios from 'axios'
import env from '../env'

class Employestats extends Component {
    constructor() {
        super()
        this.state = {
            booking: []
        }
    }
    async componentDidMount() {
        let response = await axios.get(`http://${env.API_URL}/bookings`)
        this.setState({
            booking: response.data
        })
    }

    topEmployess() {
    
        let data = this.state.booking
        let employesstas = {}
        let employessArry = data.map(d => d.employee)
        
        for (let employee of employessArry) {
            if(employee!==undefined){
            let bookings = data.filter(d =>d.employee!==undefined && d.employee.id === employee.id)
            let sumofhours=0
            for (let booking of bookings){
            const date1 = new Date(booking.checkInDate.substr(3, 2)+"/"+booking.checkInDate.substr(0, 2)+"/"+booking.checkInDate.substr(6, 4));
            const date2 = new Date(booking.checkOutDate.substr(3, 2)+"/"+booking.checkOutDate.substr(0, 2)+"/"+booking.checkOutDate.substr(6, 4));
                
            const diffTime = Math.abs(date2.getTime() - date1.getTime());
            const diffhours = Math.ceil(diffTime / (1000 * 60 * 60 ));
            
           sumofhours+=diffhours
            }
            
                employesstas[employee.id]={
                    employee:employee.firstName+' '+employee.lastName.slice(0,1),
                    numofhours:sumofhours,
                    profileImageUrl:employee.profileImageUrl
                }
        
    }
    }
    
    let topEmployessarr=[]
    for (let employee in employesstas){
        topEmployessarr.push(employesstas[employee])
    }

        return topEmployessarr.sort(function(a, b){return a.numofhours-b.numofhours}).slice(-4,-1).reverse()
    
    
    }

    render() {
        return (
            <div >
                <h4 className='left-align'>Employee stats</h4>
                {this.topEmployess().map(E=><div className="row emp" key={E.employee}> <img alt="" className="circle responsive-img col s1 img" src={E.profileImageUrl}></img> <div className="col s2 name"> {E.employee}.</div><div className="col s1"> {E.numofhours}  hours </div> </div>)}
            </div>
        )
    }
}

export default Employestats 