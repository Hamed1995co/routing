import {Outlet,Link} from "react-router-dom";

const NoPage = () =>{
    return(
        <>
            <h1>NoPage</h1>
            <Outlet/>

        </>
    );
}

export default NoPage;