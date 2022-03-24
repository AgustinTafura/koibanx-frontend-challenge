import { Link } from "react-router-dom"

const Home = () => {


    return (
        <div className='container-fluid'>
            <h1>HOME</h1>

            <button  type='button' className="btn btn-dark" >
                <Link to='/stores' style={{color:'white', textDecoration: 'none'}}>STORES</Link>
            </button>
        </div>
    )
}   

export default Home
