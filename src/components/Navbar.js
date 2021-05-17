import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom'
import logo from '../logo/logo.png'
import more from '../logo/more.png'

function Navbar(props) {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

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
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default Navbar
