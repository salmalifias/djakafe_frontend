import React from 'react'
import '../assets/css/result.css'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'
import '../assets/css/search.css'
import Navbar from '../components/Navbar'

function ResultPage() {
    return (
        <div>
        <Navbar></Navbar>
        <div className="container-fluid pt-5">
        <h1 style={{marginLeft:"100px"}}>
                    Kopi Cerita
                </h1><br></br>
                <div className="row">
                    <div className="col-4" style={{marginLeft:"100px"}}>
                    <img style={{width:"350px", height:"350px", borderRadius:"20px", boxShadow:"20px"}}class="card-img" src="https://assets-pergikuliner.com/-L-CiR5fUr7YUgmChSPP10LjgNU=/286x192/smart/https://assets-pergikuliner.com/uploads/image/picture/1150812/picture-1542231670.jpg" alt="Upnormal Coffee Roasters" />
                    </div>
                    <div className="col-1" style={{fontSize:"15px"}}>
                        <strong>Alamat</strong><br></br><br></br>
                        <strong>Rating</strong><br></br><br></br>
                        <strong>Fasilitas</strong><br></br><br></br>
                        <strong>Menu</strong><br></br><br></br>
                    </div>
                    <div className="col-5" style={{fontSize:"15px"}}>
                        <div>Jl. Otto Iskandardinata No.125-127, RT.7/RW.8Jl. Otto Iskandardinata</div><br></br>
                        <div>8/10</div><br></br>
                        <div>Free Wifi, Outdoor</div><br></br>
                        <div>Bakso, Mie Ayam, Kangkung</div><br></br>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default ResultPage
