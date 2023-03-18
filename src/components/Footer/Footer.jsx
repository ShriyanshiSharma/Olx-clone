import './footer.css'
import { Link } from 'react-router-dom'
import fb from '../../assets/facebook.svg'
import insta from '../../assets/instagram.svg'
import twi from '../../assets/square-twitter.svg'
import u from '../../assets/youtube.svg'

const Footer = () =>{
    return<>
    <div className='footer'>  
    <div className="row-1">

        <div className='col'>
            <h4>POPULAR LOCATIONS</h4>
            <p>Kolkata</p>
            <p>Mumbai</p>
            <p>Chennai</p>
            <p>Pune</p>
        </div>
        <div className='col'>
            <h4>TRENDING LOCATIONS</h4>
            <p>Bhubaneshwar</p>
            <p>Hyderabad</p>
            <p>Chandigarhi</p>
            <p>Nashik</p>
        </div>
        <div className='col'>
            <h4>ABOUT US</h4>
            <p>About OLX Group</p>
            <p>Careers</p>
            <p>Contact Usi</p>
            <p>OLXPeople</p>
            <p>Waah Jobs</p>
        </div>
        <div className='col'>
            <h4>OLX</h4>
            <p>Help</p>
            <p>Sitemap</p>
            <p>Legal & Privacy informationi</p>
            <p>Blog</p>
            <p>OLX Autos Sell Car</p>
        </div>
        <div className='col'>
            <h4>FOLLOW US</h4>
            <div className='social'>
                <Link to="/">
                    <img src={fb} alt="social"/>
                </Link>
                <Link to="/">
                    <img src={insta} alt="social"/>
                </Link>
                <Link to="/">
                    <img src={twi} alt="social"/>
                </Link>
                <Link to="/">
                    <img src={u} alt="social"/>
                </Link>
            </div>
        </div>
    </div>
        <div className='row-2'> 
            <div className='col-ro-1'>
                <p>Other countries</p>
                <p>Indonesia - Pakistan - South Africa</p>
            </div>
            <div className='col-ro-2'>
                <p>All rights reserved © 2006-2023 OLX</p>
            </div>
        </div>
    </div>
    </>
}

export default Footer;