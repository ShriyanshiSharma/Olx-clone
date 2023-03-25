import './navbar.css';
import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/olx.png'
import search from "../../assets/search.svg"
import add from '../../assets/add.svg';
import not from '../../assets/not.svg';
import down from '../../assets/down.svg';
import mess from '../../assets/mess.svg';
import Auth from '../Auth/Auth';

const Navbar = () => {
    const user = null;
    const [show,setShow] = useState(0);
    const showLogin = (e) => {
        setShow(e)
    }

    return <>
    <div className='navbar'>
        <div className='main'>
        <div className='logo'>
            <Link to="/">
            <img src={logo} alt='logo' width="45px"/>
            </Link>
        </div>

        <div className='location'>
            <select className='choose'>
                <option className='mark'>India</option>
                <option className='mark'>Mumbai</option>
                <option className='mark'>Delhi</option>
                <option className='mark'>Kerala</option>
                <option className='mark'>Kanpur</option>
                <option className='mark'>Lucknow</option>
                <option className='mark'>Bihar</option>
            </select>
        </div>

        <div className='search'>
            <input type="text" placeholder='     Find Cars,Mobile Phones and more...'/>
            <div className='icon'>

                <img src={search} alt='' width="20px"/>
            </div>
        </div>

        <div className='lang'>
            <select>
                <option>ENGLISH</option>
                <option>हिंदी</option>
            </select>
        </div>

        {(user === null) ?<button className='btn' onClick={() =>showLogin(1)}>Login</button >        
        :
        <>
        <div className="noti">
            <img src={not}/>
            <img src={mess}/>
            <img src={down}/>
              {/* <button className='btn'>Logout</button> */}
        </div>
        </>}
        <button className='sell'><img src={add} width="17px"/>  SELL</button>
        </div>
    </div>
    <div>
        {show == 1 ? <Auth show={show} setShow={setShow}/>: <></>}
    </div>
    </>
}

export default Navbar;