import {Outlet,Link} from "react-router-dom";

const Home = () =>{
    return(
        <>

            <h1>Home</h1>

            <a href="/blog">Blog</a>
            <Outlet/>
        </>
    )
}

export default Home;