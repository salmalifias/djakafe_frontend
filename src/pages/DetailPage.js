import React, { useState, useEffect } from 'react'
import '../assets/css/result.css'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'
import '../assets/css/search.css'
import Navbar from '../components/Navbar'
import ResultCard from '../components/ResultCard'
import axios from 'axios'

function DetailPage(props) {
    const { id } = props.match.params
    const [detail, setDetail] = useState(null)
    // const [fasilitas, setFasilitas] = useState([])
    const [dummy, setDummy] = useState(false)

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
        // axios
        //     .get(`http://localhost:5000/api/recommendation/djakafe/?fasilitas=${detail.fasilitas}`)
        //     .then((response) => {
        //         console.log(response)
        //         setFasilitas(response.data.data)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }, [id]) 
    // detail.fasilitas

    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid pt-5">
                {
                    detail ?
                        <div>
                            <h1 style={{ marginLeft: "100px" }}>
                                {detail.nama}
                            </h1><br></br>
                            <div className="row">
                                <div className="d-flex flex-wrap w-100">
                                    <div>
                                        <img style={{ width: "370px", height: "350px", borderRadius: "20px", marginLeft: "100px" }} src={detail.urlFoto} alt="" />
                                    </div>
                                    <table className="col-6" style={{ fontSize: "15px", marginLeft: "50px" }}>
                                        <tr>
                                            <td style={{ width: "100px" }}>
                                                <strong>Nama</strong>
                                            </td>
                                            <td style={{ width: "600px" }}>
                                                {detail.nama}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "100px" }}>
                                                <strong>Alamat</strong>
                                            </td>
                                            <td style={{ width: "600px" }}>
                                                {detail.alamat}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "100px" }}>
                                                <strong>Rating</strong>
                                            </td>
                                            <td style={{ width: "600px" }}>
                                                {detail.rating}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "100px" }}>
                                                <strong>Fasilitas</strong>
                                            </td>
                                            <td style={{ width: "600px" }}>
                                                {detail.fasilitas}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "100px" }}>
                                                <strong>Menu</strong>
                                            </td>
                                            <td style={{ width: "600px" }}>
                                                {detail.menu}
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                {/* <id style={{ fontSize: "20px", marginLeft: "100px" }}>
                                    <br></br><br></br><strong>Kafe Dengan Fasilitas Serupa</strong>
                                </id>
                                <div className="row">
                                    <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                        {
                                            fasilitas.map(props => (
                                                props.id !== detail.id ?
                                                    <div>
                                                        <div className="container cards-container">
                                                            <div>
                                                                <div className=" d-flex">
                                                                    <div className="row">
                                                                        {
                                                                            detail ? detail.map(hasil => (
                                                                                <ResultCard id={hasil.id} foto={hasil.urlFoto} nama={hasil.nama} alamat={hasil.alamat} ></ResultCard>
                                                                            )) : dummy
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> : null
                                            ))
                                        }
                                    </div>
                                </div> */}
                            </div>
                        </div> : null
                }
            </div>
        </div>
    )
}

export default DetailPage
