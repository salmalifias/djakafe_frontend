import React, { useEffect, useState } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/search.css'
import Navbar from '../components/Navbar'
import ResultCard from '../components/ResultCard'
import axios from 'axios'
import { ResponsiveEmbed } from 'react-bootstrap'
import queryString from "query-string";

function ResultPage(props) {
    const { search } = props.match.params
    const [data, setData] = useState([])
    const [dummy, setDummy] = useState(false)

    useEffect(() => {
        let path = props.location.search;
        let params = queryString.parse(path);
        axios
            .get(`http://localhost:5000/api/djakafe/?nama=${params.nama}&alamat=${params.alamat}&fasilitas=${params.fasilitas}&menu=${params.menu}`)
            .then((response) => {
                console.log(response)
                    setData(response.data.data)
                })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid pt-5">
                <h1 style={{ marginLeft: "10%" }}>
                    Daftar Kafe
                </h1>
                <div>
                    <div className="container cards-container">
                        <div>
                            <div className=" d-flex">
                                <div className="row">
                                    {
                                        data ? data.map(hasil => (
                                            <ResultCard id={hasil.id} foto={hasil.urlFoto} nama={hasil.nama} alamat={hasil.alamat} ></ResultCard>
                                        )) : dummy
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultPage

