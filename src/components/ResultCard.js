import React,{useState} from 'react'

function ResultCard(props) {
    const [data, setNama,] = useState([])
    return (
        <div className=" d-flex">
            <h1 style={{ marginLeft: "100px" }}>\
                Daftar Kafe
                </h1>
            <div className="row">
                <div className="col-12 mb-5">
                    <div className="result-card flex-wrap d-flex justify-content-center w-100">
                        {
                            data.map(e => (
                                <div class="grid mx-2 mt-4">
                                    <div class="grid-item">
                                        <div class="card">
                                            <img class="card-img" src={props.urlFoto} alt="Upnormal Coffee Roasters" />
                                            <div class="card-content">
                                                <h1 class="card-header">{props.nama}</h1>
                                                <p class="card-text">{props.alamat}</p>
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
    )
}

export default ResultCard