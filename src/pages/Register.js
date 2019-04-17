import React, { useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { Navbar } from "../components";

const Register = props => {
  useEffect(() => {
    document.body.classList.add("bg-default");
    return function cleanup() {
      document.body.classList.remove("bg-default");
    };
  }, []);
  return (
    <div className="main-content">
      <Navbar />
      <div className="header bg-gradient-info py-7 py-lg-8">
        <Container>
          <Row className="justify-content-center">
            <Col sm="12" md="7" lg="5">
              <Card style={{ backgroundColor: "#f5f7f9" }}>
                <CardHeader>
                  <h3>Registrarse</h3>
                </CardHeader>
                <CardBody className="p-3">
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label for="name">Nombre y Apellido</Label>
                        <Input
                          className="form-control-alternative"
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Pedro Perez"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label for="dni">Cedula de Identidad</Label>
                        <Input
                          className="form-control-alternative"
                          type="number"
                          name="dni"
                          id="dni"
                          placeholder="00000000"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label for="email">Correo Electronico</Label>
                        <Input
                          className="form-control-alternative"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="email@correo.unimet.edu.ve"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label for="password">Contrasena</Label>
                        <Input
                          className="form-control-alternative"
                          type="password"
                          name="password"
                          id="password"
                          placeholder="********"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label for="password-2">Repita la Contrasena</Label>
                        <Input
                          className="form-control-alternative"
                          type="password"
                          name="password-2"
                          id="password-2"
                          placeholder="********"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12 d-flex justify-content-center">
                      <Button color="success" className="my-auto">
                        Registrarse
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Register;
