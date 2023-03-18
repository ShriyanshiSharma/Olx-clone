import './product.css'
import car from '../../../assets/car1.jpg'
import {Link} from 'react-router-dom'
const Product = () => {
    return <>
    <div className="whole">
        <div className="header">
            <Link to="/" style={{textDecoration:"none"}}>
            <p>Home</p>
            </Link>
        </div>
        <div className="row-1-2">
            <img src={car}/>
        </div>
        <div className="row-2-2">
            <div className="col-1">
                <div className="rox-col-1 first">
                    <div className="head">
                    <h2>Name</h2>
                    <p>Model</p>
                    </div>
                    <div className="base">
                        <p>DES</p>
                        <p>|</p>
                        <p>DES</p>
                        <p>|</p>
                        <p>DES</p>
                    </div>
                </div>
                <div className="rox-col-1">
                    <div className="over">
                        <h2 className='new'>Overview</h2>
                    </div>
                        <hr></hr>
                    <div className="detail">
                        <p>Owner</p>
                        <p>Location</p>
                        <p>Posting Date</p>
                    </div>
                </div>
                <div className="rox-col-1">
                    <div className="full">
                        <h2>Description</h2>
                        <p>nfsdjkfnkj</p>
                        <p>nfsdjkfnkj</p>
                        <p>nfsdjkfnkj</p>
                        <p>nfsdjkfnkj</p>
                        <p>nfsdjkfnkj</p>
                        <p>nfsdjkfnkj</p>
                        <p>nfsdjkfnkj</p>
                        <p>nfsdjkfnkj</p>

                    </div>
                </div>
                <div className="rox-col-1">
                    <div className="related"></div>
                </div>

                
            </div>
            <div className="col-2">
                <div className="rox-col-2">
                    <div className="price">
                        <p>₹ 4,75,000</p>
                        <button >Make Offer</button>
                    </div>
                </div>
                <div className="rox-col-2">
                    <div className="onwer">
                        <div className="own-d">
                        <img src={car} width="60px"/>
                        <p>Name</p>
                        </div>
                        <button className='btn-own'>Chat with seller</button>
                        <div className='blank'></div>
                    </div>
                </div>
                <div className="rox-col-1 extra"></div>
        </div>
        </div>
    </div>
    </>
}

export default Product;