import React, { useState } from 'react';
import { CustomInput, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../logo/logo.png';
import more from '../logo/more.png';

function Navbar(props) {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);
    return (
        <div>
            <nav
                className="navbar navbar-desktop navbar-expand"
                style={{ zIndex: "2" }}
            >
                <div className="d-flex collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className=" navbar-nav justify-content-center d-flex align-items-center">
                        <li className="nav-item ">
                            <Link className="navbar-brand" to="/">
                                <img src={logo} alt="DjaKafe" />
                            </Link>
                        </li>
                        <li className="nav-item ">

                            <form className="form-inline w-100 my-lg-0">
                                <div className="form-group w-100 input-group has-search">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Cari Kafe"
                                        style={{ borderRadius: "40px", fontSize: "15px", padding: "20px", paddingLeft: "50px", width: "800px" }}
                                        aria-label="Large"
                                        aria-describedby="inputGroup-sizing-sm"
                                        onSubmit={<Link to="/result"></Link>}
                                    />
                                    <button type="submit" className="btn-search">
                                        <i className="fa fa-search"></i>
                                    </button>
                                    <button className="btn-more">
                                        <img src={more} alt="more" width="20px" height="20px" onClick={toggle} />
                                    </button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
            <div>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Pencarian Detail</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <CustomInput type="checkbox" id="exampleCustomCheckbox1" label="Nama">
                                <Input type="text" name="Nama" id="searchnama" placeholder="Nama Kafe" />
                            </CustomInput>
                        </FormGroup>
                        <FormGroup>
                            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Alamat">
                                <Input type="text" name="Alamat" id="searchalamat" placeholder="Lokasi Spesifik Kafe" />
                            </CustomInput>
                        </FormGroup>
                        <FormGroup>
                            <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Fasilitas">
                                <Input type="text" name="Fasilitas" id="searchfasilitas" placeholder="Fasilitas Tertentu" disabled="true"/>
                            </CustomInput>
                        </FormGroup>
                        <FormGroup>
                            <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Menu">
                                <Input type="text" name="Menu" id="searchmenu" placeholder="Makanan atau Minuman" disabled="true"/>
                            </CustomInput>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>CARI</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default Navbar
