import React, { Component } from 'react'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LockIcon from '@material-ui/icons/Lock';
import "./login.css"
import PassUser from '../undraw_authentication_fsn5.svg'
import { Button,  Container, Row, Col, Form } from "react-bootstrap"

const Checkbox = props => (
    <input type="checkbox" {...props} />
)

export class login extends Component {

    constructor(props) {
        super(props);
        this.state = {value1: 'Email', 
        value2: "Password",
        checked: false,};
      }
    
    handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })


    render() {
        return (
<div>

        <Container className="form-contents">
 
        
        <Row className=" pb-5 justify-content-md-center">
            <Col md={6} className="form-items"> 
            
                        <div className="authUser pt-4">
                            <img className="auth-Image" alt="" src={PassUser} />
                        </div>
                 <Form>
                    <Form.Group controlId="formBasicEmail">
                        <div className="d-flex align-items-center">
                            <Form.Label><PermIdentityIcon className="icon"/></Form.Label>
                        <Form.Control className="" type="email" placeholder="Email" style={{paddingRight:"16rem"}} />
                        </div>
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <div className="d-flex align-items-center">
                                    <Form.Label><LockIcon className="icon"/></Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </div>
                            </Form.Group>
                                <Form.Group controlId="formBasicCheckbox" className="ml-5">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>

                </Form>
                <Button className="mb-3 pl-5 pr-5" style={{borderRadius:"1rem"}}> Login </Button>
                {/* <Button className="mb-3 pl-5 pr-5"> Login </Button> */}
                <Button variant="danger" className="mb-3 pl-5 pr-5" style={{borderRadius:"1rem"}}> Sign Up </Button>
            
            </Col>
        </Row>
</Container>

</div>
        )
    }
}

export default login
