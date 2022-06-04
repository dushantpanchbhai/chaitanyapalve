import './App.css';
import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink , Button, Modal,ModalBody,ModalHeader} from 'reactstrap';
function NavBar(props){
    
    const [isOpen, setIsOpen] = React.useState(false);
    
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [form, setForm] = useState({ name: '', amount: '' })
    const toggle = () => { setModalOpen(!isModalOpen) }
    const handleFormChange = (e) => {
        let formData = { ...form };
        formData[e.target.name] = e.target.value;
        setForm(formData);
    }
    const submit = (e) => {
        e.preventDefault();
        toggle();
    }
    return(
        <>
        <Navbar className="nbar" expand="md">
            <NavbarBrand href="/" ><img className="logonav"src='./assets/anubhutilogo.webp' alt="A N U B H U T I "/></NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem className="ms-auto">
                        <NavLink className="nlink" href="#">Login</NavLink>
                    </NavItem>
                    <NavItem className="ms-auto">
                        <NavLink className="nlink" href="#">Signup</NavLink>
                    </NavItem>
                    <NavItem className="ms-auto">
                        <Button className="nlinkbtn"onClick={toggle}>Donate</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        <Modal isOpen={isModalOpen} toggle={toggle}>
                <div className='m-3'>
                    <ModalHeader toggle={toggle} className="">Donate</ModalHeader>
                    <ModalBody className=''>
                        <div className='d-flex flex-column my-2'>
                            <label htmlFor="name">Name</label>
                            <input onChange={handleFormChange} value={form.name} className='appearance-none border border-1 w-100 px-2 py-1' name='name' id='name' />
                        </div>
                        <div className='d-flex flex-column my-2'>
                            <label htmlFor="amount">Amount</label>
                            <input type='number' onChange={handleFormChange} value={form.amount} className='appearance-none border border-1 w-100 px-2 py-1' name='amount' id='amount' />
                        </div>
                        <button type='submit' onClick={submit} className='btn modalbtn btn-primary text-white mx-auto d-block mt-3'>Submit</button>
                    </ModalBody>
                </div>
            </Modal>
        </>
    )
}
export default NavBar;