import React, { useEffect, useState } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/search.css'
import Navbar from '../components/Navbar'
import ResultCard from '../components/ResultCard'
import axios from 'axios'

function SearchPage(props) {
    const { search } = props.match.params
    const [nama, setNama] = useState([])
    const [alamat, setAlamat] = useState([])
    const [fasilitas, setFasilitas] = useState([])
    const [menu, setMenu] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/djakafe/?nama=${search, nama}`)
            .then((response) => {
                console.log(response)
                setNama(response.data.data)

            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/djakafe/?alamat=${search, alamat}`)
            .then((response) => {
                console.log(response)
                setAlamat(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/djakafe/?fasilitas=${search, fasilitas}`)
            .then((response) => {
                console.log(response)
                setFasilitas(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/djakafe/?menu=${search, menu}`)
            .then((response) => {
                console.log(response)
                setMenu(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [search])

    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid pt-5">
                <div className="container-fluid pt-3 pb-3">
                    <div className="container cards-container">
                        <h5>Menampilkan pencarian {search}</h5>
                        <div>
                            {nama.length || alamat.length || fasilitas.length || menu.length !== 0 ? (
                                <div>
                                    <div>
                                        {nama.length !== 0 ? (
                                            <div>
                                                <p>Menampilkan {search} dalam Nama Kafe</p>
                                                {nama.map((hasil) => (
                                                    <ResultCard nama={hasil.nama} alamat={hasil.alamat} fasilitas={hasil.fasilitas} menu={hasil.menu}></ResultCard>
                                                ))}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div>
                                        {alamat.length !== 0 ? (
                                            <div>
                                                <p>Menampilkan {search} dalam Alamat</p>
                                                {alamat.map((hasil) => (
                                                    <ResultCard nama={hasil.nama} alamat={hasil.alamat} fasilitas={hasil.fasilitas} menu={hasil.menu}></ResultCard>
                                                ))}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div>
                                        {fasilitas.length !== 0 ? (
                                            <div>
                                                <p>Menampilkan {search} dalam Fasilitas</p>
                                                {fasilitas.map((hasil) => (
                                                    <ResultCard nama={hasil.nama} alamat={hasil.alamat} fasilitas={hasil.fasilitas} menu={hasil.menu}></ResultCard>
                                                ))}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div>
                                        {menu.length !== 0 ? (
                                            <div>
                                                <p>Menampilkan {search} dalam Menu</p>
                                                {menu.map((hasil) => (
                                                    <ResultCard nama={hasil.nama} alamat={hasil.alamat} fasilitas={hasil.fasilitas} menu={hasil.menu}></ResultCard>
                                                ))}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <p>Data tidak ditemukan</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage

