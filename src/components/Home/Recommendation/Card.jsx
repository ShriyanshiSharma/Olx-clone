import car1 from '../../../assets/car1.jpg'
import {Link} from 'react-router-dom'

import './card.css'

const Card = (props) => {
    return<>
    <div className="card" >
        <div className="image">
            <img src={car1} />
        </div>
        <div className="details">
            <div className="prices">
                <p>{props.e.pri}</p>
            </div>
            <div className="des">
                <p>{props.e.des}</p>
            </div>
            <div className="end">
                <div className="location">
                    <p>{props.e.loc}</p>
                </div>
                <p>{props.e.date}</p>
            </div>
        </div>
    </div>
    </>
}

export default Card;