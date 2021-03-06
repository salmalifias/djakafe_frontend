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
                <h1 style={{ marginLeft: "10%" }}>
                    Daftar Kafe
                </h1>
                <div className="container cards-container ">
                    <div>
                        <div className="row d-flex justify-content-around">
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
    )
}

export default SearchPage

