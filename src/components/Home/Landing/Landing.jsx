import {Link}  from "react-router-dom";
import './landing.css'

const Landing = () =>{ 
    return<>
    <div className='top'>
        <div className='drop-down'>
            <select className='catego'>
                <option>ALL CATEGORIES</option>
            </select>
        </div>
        <div className='tags-div'>
            <ul className='tag'>
                <li className="link"><Link to= "/"style={{ textDecoration: 'none' , color : 'rgb(1,39,1' }}>Cars</Link></li>
                <li className="link"><Link to= "/" style={{ textDecoration: 'none' , color : 'rgb(1,39,1' }}>Motorcycles</Link></li>
                <li className="link"><Link to= "/" style={{ textDecoration: 'none' , color : 'rgb(1,39,1' }}>Mobile Phones</Link></li>
                <li className="link"><Link to= "/" style={{ textDecoration: 'none' , color : 'rgb(1,39,1' }}>For Sale: Houses & Apartments</Link></li>
                <li className="link"><Link to= "/" style={{ textDecoration: 'none' , color : 'rgb(1,39,1' }}>Scooters</Link></li>
                <li className="link"><Link to= "/" style={{ textDecoration: 'none' , color : 'rgb(1,39,1' }}>Commercial & Other Vehicles</Link></li>
                <li className="link"><Link to= "/" style={{ textDecoration: 'none' , color : 'rgb(1,39,1' }}>For Rent: Houses & Apartments</Link></li>
            </ul>
        </div>
    </div>
    </>
}

export default Landing;