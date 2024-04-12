import { Link } from "react-router-dom";
import './component.css';


const My404 = () => {
    return ( <>
    <div className="html">
        <div className="wrapper">
    <div className="mt-bluesky"></div>
		
		<div className="mt-sun"></div>
		
		<div className="mt-sun2"></div>
		
		<div className="mt-cloud"></div>
		
		<div className="mt-base"></div>
    <div className="base-overlay"></div>

    <div className="night"></div>
    <div className="stars"></div>
    <div className="moon"></div>
		
		<div className="hock"></div>
		
		<span className="title"><span>404</span></span>
		
		<span className="oh">oh no</span>
		
		<div className="txt">
			<p>We're sorry, but something went wrong.</p>
            <Link className="btn" to='/'>Go Home</Link>
			
		</div>
        </div>
    </div>
    </> );
}
 
export default My404;