import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function ResultCard(props) {
    const [data, setNama] = useState([])
    return (
        <div className=" d-flex">
            <div className="row">
                <div className="col-12 mb-5">
                    <div className="result-card flex-wrap d-flex justify-content-center w-100">
                        <div class="grid mx-2 mt-4">
                            <div class="grid-item">
                                <Link to={`/detail/${props.id}`}>
                                    <div class="card" style={{height:"350px"}}>
                                        <img class="card-img" src={props.foto} alt={props.nama} />
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
    )
}

export default ResultCard