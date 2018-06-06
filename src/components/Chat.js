import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavText,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Chat extends React.Component {
    /**
     * Constructor.
     *
     * @param props
     */
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    /**
     * Check whether the user is logged in and redirect
     * him to the login page if he is not.
     */
    componentWillMount() {
        fetch('http://localhost:1337/user/check', {
            method: 'PUT'
        }).then(response => {
            return response.json();
        }).then(data => {console.dir(data);
            if (!data.session) {
                this.props.history.push('/login');
            }
        });
    }

    render() {
        return (
            <Container className="h-100">
                <Row>
                    <Col>
                        <Navbar color="dark" dark expand="md">
                            <NavbarBrand href="/">theChat</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                        <span className="navbar-text">
                                            Hello, <span className="font-weight-bold">eugenics</span>
                                        </span>
                                <Button color="danger">Log out</Button>
                            </Collapse>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <ListGroup>
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Morbi leo risus</ListGroupItem>
                            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col>
                        <Row className="h-75">Row 1</Row>
                        <Row>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                </FormGroup>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Chat;