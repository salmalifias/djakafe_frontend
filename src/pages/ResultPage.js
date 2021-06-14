import React, { useEffect, useState } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/search.css'
import Navbar from '../components/Navbar'
import ResultCard from '../components/ResultCard'
import axios from 'axios'

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
                <h1 style={{ marginLeft: "10%" }}>
                    Daftar Kafe
                </h1>
                <div className="container cards-container">
                    <div>
                        <div className="row d-flex justify-content-around">
                            {data.length !== 0 ? (
                                data.map((hasil) => (
                                    <ResultCard id={hasil.id} foto={hasil.urlFoto} nama={hasil.nama} alamat={hasil.alamat} ></ResultCard>
                                ))

                            ) : (<div><img style={{paddingTop:"100px"}} src="data:image/png;base64,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"></img></div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultPage

