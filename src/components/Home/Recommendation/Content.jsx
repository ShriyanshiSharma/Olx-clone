import './content.css'
import Card from './Card'
import { Link } from 'react-router-dom';
import car1 from '../../../assets/car1.jpg'

const Content = () =>{
    const data = [
        {
            id:1,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}
        },
        {
            id:2,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}},
        {
            id:3,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}},
        {
            id:4,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}},
        {
            id:5,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}},
        {
            id:6,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}},
        {id:7,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}},
        {id:8,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}},
        {id:9,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}},
        {id:10,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}},
        {id:11,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}},
        {id:12,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}},
        {id:13,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}},
        {id:14,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}
        },
        {id:15,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}},
        {id:16,
            pri:"₹ 4,75,000",
            des:"Description",
            loc:"Location",
            date:"AUG 18",
            img:{car1}},

    ]
    return<>

        <div className="rec">
        <div className="fresh">
            <h1>Fresh Recommendations</h1>
        </div>
        <div className='content'>
            {
            data.map((items) => (
                <>
                <Link to={`/product/${items.id}`} style={{textDecoration:"none"}} > 
                    <Card e = {items}/>
                </Link>
                </>
            ))
}
        </div>
    </div>
    
    </>
}

export default Content;