import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../images/logo.svg'
import './Header.css';
function Header() {
    return (
        <Navbar bg="light" expand="lg" >
            <div className="container-fluid">
                <div className="row m-0 p-0 justify-content-start w-100" >
                    <div className="col-4">
                        <Navbar.Brand href="#home" className="m-lg-2">
                            <img
                                src={logo}
                                className="d-inline-block align-center "
                                id='Logo'
                            />
                        </Navbar.Brand>

                    </div>
                    <div className="col-2 offset-4 d-lg-none d-flex align-content-center justify-content-center">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                    <div className="col-lg-6 col-12 offset-lg-0 offset-1 d-flex align-content-center ">
                       
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav >
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <Nav.Link href="#home">Home</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>

                    </div>
                    
                    
                   
                </div>
            </div>
          


        </Navbar>
    )
}

export default Header;