import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Label
} from "reactstrap";
import { Navbar } from "../components";

const majors = [
  "Ingenieria de Sistemas",
  "Ingenieria Quimica",
  "Ingenieria Electrica",
  "Ingenieria civil",
  "Ingenieria Mecanica",
  "Ingenieria de Produccion",
  "Otro"
];

const Home = props => {
  useEffect(() => {
    document.body.classList.add("bg-default");
    return function cleanup() {
      document.body.classList.remove("bg-default");
    };
  }, []);
  return (
    <>
      <div className="main-content">
        <Navbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Bienvenido!</h1>
                  <p className="text-lead text-light">
                    Vota Unimet es un proyecto piloto, unico en su clase en
                    Venezuela{" "}
                    <span aria-label="venezuela flag" role="img">
                      🇻🇪
                    </span>
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
          <Container>
            <Row>
              <Col sm="12" md="6" lg="4">
                <Card>
                  <CardHeader className="p-3">
                    <div className="text-muted text">
                      <h2>Como funciona</h2>
                    </div>
                  </CardHeader>
                  <CardBody>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatum aspernatur nihil, assumenda est sequi corporis
                    suscipit in veritatis quod natus!
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" md="6" lg="4">
                <Card>
                  <CardHeader className="p-3">
                    <div className="text-muted text">
                      <h2>Como funciona</h2>
                    </div>
                  </CardHeader>
                  <CardBody>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatum aspernatur nihil, assumenda est sequi corporis
                    suscipit in veritatis quod natus!
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" md="6" lg="4">
                <Card>
                  <CardHeader className="p-3">
                    <div className="text-muted text">
                      <h2>Como funciona</h2>
                    </div>
                  </CardHeader>
                  <CardBody>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatum aspernatur nihil, assumenda est sequi corporis
                    suscipit in veritatis quod natus!
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container className="py-5">
            <Row className="justify-content-center">
              <Col sm="12" className="text-center">
                <h2 className="text-white">Consultar el Registro Electoral</h2>
              </Col>
              <Col sm="12" md="7" lg="5">
                <FormGroup>
                  <Label for="dni" className="text-white">
                    Cedula de Identidad
                  </Label>
                  <Row>
                    <Col sm="12" md="9">
                      <Input
                        className="form-control-alternative"
                        type="number"
                        name="dni"
                        id="dni"
                        placeholder="cedula de identidad"
                      />
                    </Col>
                    <Col sm="12" md="3">
                      <Button>Consultar</Button>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
          </Container>
          <Container className="pb-5">
            <Row className="justify-content-center">
              <Col sm="12" md="8" lg="6">
                <Card style={{ backgroundColor: "#f5f7f9" }}>
                  <CardHeader
                    className="p-3"
                    style={{ backgroundColor: "#f5f7f9" }}
                  >
                    <h2 className="text-center">Contacto!</h2>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row className="justify-content-center">
                        <Col sm="12">
                          <FormGroup>
                            <Label for="name">Nombre y Apellido</Label>
                            <Input
                              className="form-control-alternative"
                              type="text"
                              name="name"
                              id="name"
                              required={true}
                              placeholder="Nombre y Apellido"
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="12">
                          <FormGroup>
                            <Label for="email">Correo Electronico</Label>
                            <Input
                              className="form-control-alternative"
                              type="email"
                              name="email"
                              id="email"
                              required={true}
                              placeholder="Correo Electronico"
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="12">
                          <Label for="major">Carrera</Label>
                          <Input
                            className="form-control-alternative"
                            type="select"
                            name="major"
                            id="major"
                            required={true}
                          >
                            <option selected="selected" disabled="disabled">
                              Seleccionar un Carrera
                            </option>
                            {majors.map(major => (
                              <option value={major}>{major}</option>
                            ))}
                          </Input>
                        </Col>
                        <Col sm="12">
                          <Label for="message">Mensaje</Label>
                          <Input
                            className="form-control-alternative"
                            type="textarea"
                            name="message"
                            id="message"
                          />
                        </Col>
                        <Button color="primary" className="mt-3">
                          Enviar
                        </Button>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
