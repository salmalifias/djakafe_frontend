import React, { useEffect, useState } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/search.css'
import Navbar from '../components/Navbar'
import ResultCard from '../components/ResultCard'
import axios from 'axios'
import { ResponsiveEmbed } from 'react-bootstrap'

function ResultPage(props) {
    const { search } = props.match.params
    const [data, setData] = useState([])
    const [dummy, setDummy] = useState(false)

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/djakafe/?nama=${search}`)
            .then((response) => {
                console.log(response)
                if (response.data.message === 'Data tidak ditemukan') {
                    setDummy(response.data.data)
                }
                else {
                    setData(response.data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/djakafe/?alamat=${search}`)
            .then((response) => {
                console.log(response)
                if (response.data.message === 'Data tidak ditemukan') {
                    setDummy(response.data.data)
                }
                else {
                    setData(response.data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/djakafe/?fasilitas=${search}`)
            .then((response) => {
                console.log(response)
                if (response.data.message === 'Data tidak ditemukan') {
                    setDummy(response.data.data)
                }
                else {
                    setData(response.data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/djakafe/?menu=${search}`)
            .then((response) => {
                console.log(response)
                if (response.data.message === 'Data tidak ditemukan') {
                    setDummy(response.data.data)
                }
                else {
                    setData(response.data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [search])

    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid pt-5">
                <h1 style={{ marginLeft: "100px" }}>
                    Daftar Kafe
                </h1>
                <div>
                    <div className="container cards-container">
                        <h5>Menampilkan pencarian {search}</h5>
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

