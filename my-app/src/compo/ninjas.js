import React, { Component } from 'react';

class Ninjas extends Component {
    render() {
        // console.log(this.props)
        const { ninjas } = this.props;
        const ninjasList = ninjas.map(ninja => {
            return  (
                <div className='Ninjas' key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
            </div>
            )
        })
        return(
         <div className='ninja-lst'>{ ninjasList }</div>
        )
    }
}

export default Ninjas;