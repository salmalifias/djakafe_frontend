import React, { useState, useEffect } from 'react'
import '../assets/css/result.css'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'
import '../assets/css/search.css'
import Navbar from '../components/Navbar'
import axios from 'axios'

function DetailPage(props) {
    const { id } = props.match.params
    const [data, setData] = useState(false)
    const [fasilitas, setFasilitas] = useState([])
    const [dummy, setDummy] = useState(false)

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/djakafe/${id}`)
            .then((response) => {
                console.log(response.data)
                setData(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
        axios
            .get(`http://localhost:5000/api/recommendation/?fasilitas=${data.fasilitas}`)
            .then((response) => {
                console.log(response)
                setFasilitas(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id, data.fasilitas])

    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid pt-5">
                {
                    data ?
                        <div>
                            <h1 style={{ marginLeft: "10%" }}>
                                {data.nama}
                            </h1><br></br>
                            <div className="row">
                                <div className="d-flex flex-wrap w-100">
                                    <div>
                                        <img style={{ width: "370px", height: "350px", borderRadius: "20px", marginLeft: "45%" }} src={data.urlFoto} alt="" />
                                    </div>
                                    <table className="col-1" />
                                    <table className="col-6" style={{ fontSize: "15px", marginLeft: "90px" }}>
                                        <tr>
                                            <td style={{ width: "100px" }}>
                                                <strong>Nama</strong>
                                            </td>
                                            <td style={{ width: "600px" }}>
                                                {data.nama}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "100px" }}>
                                                <strong>Alamat</strong>
                                            </td>
                                            <td style={{ width: "600px" }}>
                                                {data.alamat}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "100px" }}>
                                                <strong>Rating</strong>
                                            </td>
                                            <td style={{ width: "600px" }}>
                                                {data.rating}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "100px" }}>
                                                <strong>Fasilitas</strong>
                                            </td>
                                            <td style={{ width: "600px" }}>
                                                {data.fasilitas}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "100px" }}>
                                                <strong>Menu</strong>
                                            </td>
                                            <td style={{ width: "600px" }}>
                                                {data.menu}
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="pt-5">
                                <h1 style={{ marginLeft: "10%", marginTop:"40px", marginBottom:"25px" }}>
                                    Kafe Dengan Fasilitas Serupa
                                </h1>
                                <div className="container cards-container ">
                                    <div>
                                        <div className="row d-flex justify-content-around">

                                            {
                                                fasilitas.map(props => (
                                                    props.id !== data.id ?
                                                        <div>
                                                            <div className="container cards-container">
                                                                <div>
                                                                    <div className="row d-flex justify-content-around">
                                                                        <div>
                                                                            <div className=" d-flex">
                                                                                <div className="row">
                                                                                    <div className="col-12 mb-5">
                                                                                        <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                                                                            <div class="grid mx-2 mt-4">
                                                                                                <div class="grid-item">
                                                                                                    <Link to={`/detail/${props.id}`}>
                                                                                                        <div class="card" style={{ height: "350px" }}>
                                                                                                            <img class="card-img" src={props.urlFoto} alt={props.nama} />
                                                                                                            <div class="card-content">
                                                                                                                <h1 class="card-header">{props.nama}</h1>
                                                                                                                <p class="card-text">{props.alamat}</p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> : null
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : null
                }
            </div>
        </div >
    )
}

export default DetailPage