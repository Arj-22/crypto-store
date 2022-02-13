import React, {Component} from 'react';

class Navbar extends Component{
    render(){
        return(
            <nav>
            <ul className="navbar">
                <li className='item'>Home</li>
                <li className='item'>Basket</li>
                <li className='item'>Checkout</li>
                <li className='balance'>Balance:</li>
            </ul>
            </nav>
        )
    }

}
export default Navbar; 