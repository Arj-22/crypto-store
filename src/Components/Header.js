import Navbar from './Navbar.js'
import React, {Component} from 'react';

class Header extends Component {
    render(){
    return(
    <header>
        <h1 className='title'>{this.props.title}</h1>
        <Navbar/>
    </header>
    )
    }
}

Header.defaultProps = {
    title: 'Crypto Commerse',
}

export default Header