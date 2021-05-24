import React, {useState, useEffect} from 'react'
import '../assets/css/result.css'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'
import '../assets/css/search.css'
import Navbar from '../components/Navbar'
import axios from 'axios'

function DetailPage(props) {
const {id} = props.match.params
const [detail, setDetail] = useState(null)
useEffect(() => {
    axios
        .get(`http://localhost:5000/api/djakafe/${id}`)
        .then((response) => {
            console.log(response.data)
            setDetail(response.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
}, [id])

    return (
        <div>
        <Navbar></Navbar>
        <div className="container-fluid pt-5">
        {
            detail ? 
            <div>
            <h1 style={{marginLeft:"100px"}}>
            {detail.nama}
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
                        <div>{detail.alamat}</div><br></br>
                        <div>{detail.rating}</div><br></br>
                        <div>{detail.fasilitas}</div><br></br>
                        <div>{detail.menu}</div><br></br>
                    </div>
                </div>
                </div>: null
        }
        </div>
        </div>
    )
}

export default DetailPage
