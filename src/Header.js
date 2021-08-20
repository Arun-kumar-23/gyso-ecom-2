import React,{useState} from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './Header.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';




function Header() {
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
    
        const classes = useStyles();
        const [state, setState] = useState({});

      
        const handleChange = (event) => {
          const name = event.target.value;

          if(name=="Grocery")
          {
            window.location.href = '/grocery'
          }
          else if(name == 'Furniture')
          {
            window.location.href = '/furniture'
          }
          else if(name == 'Clothing')
          {
            window.location.href = '/clothing'
          }
          else if(name == 'Medicine')
          {
            window.location.href = '/medicine'
          }
          else if(name == 'Makeup')
          {
            window.location.href = '/makeup'
          }
          
        };
    return (
        <div className="header">
                    <Navbar className="header__navbar" bg="light" variant="light">
                        <Container>
                            <div className="left">
                        <Navbar.Brand className="header__brand" href="#home">Pick<span className="span">Bazar</span></Navbar.Brand>
                      
                            <InputLabel htmlFor="age-native-simple"></InputLabel>
                            <Select
                            native
                            value={state.select}
                            onChange={handleChange}
                            >
                              <option aria-label="None" value="" selected="selected" />
                              <option value='' selected='selected' >Categories</option>
                              <option value='Furniture'>Furniture</option>
                              <option value='Makeup'>Makeup</option>
                              <option value='Clothing'>Clothing</option>
                              <option value='Grocery' >Grocery</option>
                              <option value='Medicine'>Medicine</option>
                            </Select>
                        </div>

                        <div className="right">
                        <Nav className="me-auto">
                        <Nav.Link href="#home" style={{color:"black",fontWeight:700}}>Offer</Nav.Link>
                        <Nav.Link href="#features" style={{color:"black",fontWeight:700}}>Need Help</Nav.Link>
                        <Button className="header__button" variant="contained" color="primary">
                        Join
                        </Button>
                        </Nav>
                        </div>
                        
                        </Container>
                     </Navbar>
          
        </div>
    )
}

export default Header
