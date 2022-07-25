import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import imgs  from './img/MERN-logo.png'

function BrandExample() {
  return (
    <>
      {/* <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar> */}
      {/* <br />
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar> */}
      {/* <br />
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./component/img/MERN-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar> */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={imgs}
              alt="error"
              width="150"
              height="30"
            />{' '}
            
           <h5> REACT JSX</h5>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;