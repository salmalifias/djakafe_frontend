import React, { useState } from 'react';
import { CustomInput, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../logo/logo.png';
import more from '../logo/more.png';

function Navbar(props) {
  const [search, setSearch] = useState();
  const [snama, setSnama] = useState("");
  const [salamat, setSalamat] = useState("");
  const [sfasilitas, setSfasilitas] = useState("");
  const [smenu, setSmenu] = useState("");
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => { setModal(!modal) };

  const [nama, setNama] = useState(true);
  const checkboxNama = () => { setNama(!nama) };

  const [alamat, setAlamat] = useState(true);
  const checkboxAlamat = () => { setAlamat(!alamat) };

  const [fasilitas, setFasilitas] = useState(true);
  const checkboxFasilitas = () => { setFasilitas(!fasilitas) };

  const [menu, setMenu] = useState(true);
  const checkboxMenu = () => { setMenu(!menu) };

  const onSubmitHandler = () => {
    window.location.href = "/results/?nama=" + snama + "&alamat=" + salamat + "&fasilitas=" + sfasilitas + "&menu=" + smenu
  }

  return (
    <div>
      <nav className="navbar navbar-desktop navbar-expand" style={{ zIndex: "1" }} >
        <div className="d-flex collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className=" navbar-nav justify-content-center d-flex align-items-center">
            <li className="nav-item ">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="DjaKafe" />
              </Link>
            </li>
            <li className="nav-item col-lg-8 col-md-8 col-sm-8">
              <form className="form-inline w-100 my-lg-0">
                <div className="form-group w-100 input-group has-search">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari Kafe (Nama/Alamat/Fasilitas/Menu)"
                    style={{ borderRadius: "40px", fontSize: "15px", padding: "20px", paddingLeft: "6%" }}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Link to={`/result/${search}`}>
                    <button type="submit" className="btn-search">
                      <i className="fa fa-search"></i>
                    </button>
                  </Link>
                  <Button className="btn-more" onClick={toggle} color="">
                    <img src={more} alt="more" width="20px" height="20px" />
                  </Button>
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
              <CustomInput type="checkbox" onClick={checkboxNama} id="exampleCustomCheckbox1" label="Nama">
                <Input type="text" name="Nama" id="searchnama" onChange={(e) => setSnama(e.target.value)} value={snama} placeholder="Nama Kafe" disabled={nama} />
              </CustomInput>
            </FormGroup>
            <FormGroup>
              <CustomInput type="checkbox" onClick={checkboxAlamat} id="exampleCustomCheckbox2" label="Alamat">
                <Input type="text" name="Alamat" id="searchalamat" onChange={(e) => setSalamat(e.target.value)} value={salamat} placeholder="Lokasi Spesifik Kafe" disabled={alamat} />
              </CustomInput>
            </FormGroup>
            <FormGroup>
              <CustomInput type="checkbox" onClick={checkboxFasilitas} id="exampleCustomCheckbox3" label="Fasilitas">
                <Input type="text" name="Fasilitas" id="searchfasilitas" onChange={(e) => setSfasilitas(e.target.value)} value={sfasilitas} placeholder="Fasilitas Tertentu" disabled={fasilitas} />
              </CustomInput>
            </FormGroup>
            <FormGroup>
              <CustomInput type="checkbox" onClick={checkboxMenu} id="exampleCustomCheckbox4" label="Menu">
                <Input type="text" name="Menu" id="searchmenu" onChange={(e) => setSmenu(e.target.value)} value={smenu} placeholder="Makanan atau Minuman" disabled={menu} />
              </CustomInput>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onSubmitHandler}>CARI</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    </div >
  )
}

export default Navbar
