import React, { useEffect, useState } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/search.css'
import Navbar from '../components/Navbar'
import ResultCard from '../components/ResultCard'
import axios from 'axios'

function SearchPage(props) {
    const { search } = props.match.params
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/djakafe`)
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
                <h1 style={{ marginLeft: "100px" }}>
                    Daftar Kafe
                </h1>
                <div className="container-fluid pt-3 pb-3">
                    <div className="container cards-container">
                        <div className="d-flex">
                            <div className="row">
                                {data.length !== 0 ? (
                                        data.map((hasil) => (
                                            <ResultCard id={hasil.id} foto={hasil.urlFoto} nama={hasil.nama} alamat={hasil.alamat} ></ResultCard>
                                        ))
                                    
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage

