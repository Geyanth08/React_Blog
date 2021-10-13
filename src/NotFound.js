import { Link } from "react-router-dom";

function NotFound() {
    return ( 
        <div className="not-found">
            <h2>SORRY!</h2>
            <p>Page is Not Found....</p>
            <Link to="/" className="error">Back To Home page</Link>
        </div>
     );
}

export default NotFound;