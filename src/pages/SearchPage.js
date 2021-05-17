import React, { useState } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/search.css'
import Navbar from '../components/Navbar'

function SearchPage() {
    const [data, setData] = useState([{}, {}, {}, {}, {}, {}])
    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid pt-5">
                <h1 style={{ marginLeft: "100px" }}>
                    Daftar Kafe
                </h1>
                <div className="row">
                    <div className="col-12">
                        <div className="result-card flex-wrap d-flex justify-content-center w-100">
                            {
                                data.map(e => (
                                    <div class="grid mx-2 mt-5">
                                        <div class="grid-item">
                                            <div class="card">
                                                <img class="card-img" src="https://assets-pergikuliner.com/-L-CiR5fUr7YUgmChSPP10LjgNU=/286x192/smart/https://assets-pergikuliner.com/uploads/image/picture/1150812/picture-1542231670.jpg" alt="Upnormal Coffee Roasters" />
                                                <div class="card-content">
                                                    <h1 class="card-header">Upnormal Coffee Roasters</h1>
                                                    <p class="card-text">Jl. Raden Saleh No. 47, Cikini, Menteng, Jakarta Pusat</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage

