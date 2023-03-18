import './auth.css';
import logo from '../../assets/olx.png'
import x from '../../assets/x.svg'


const Auth = ({show:show ,setShow:setShow}) => {
    const notshow = (e) => {
        setShow(e);
    }
    return <>{
    <div className="auth">
    <div className="center">
        <img className='x' src={x} width="18px" onClick={() => notshow(0)}/>
        <div className="display">
            <img src={logo} width="100px"/>
            <p>Enter your email to login</p>
        </div>
        <div className='login'>
            <input type="text" placeholder='Email'/>
            <p>If you are a new user please select any other login option from previous page.</p>
            <button>Next</button>
            <p>Your email is never shared with external parties nor do we use it to spam you in any way.</p>
            <button>Signup</button>
        </div>
    </div>
    </div>}
    </>
}

export default Auth;