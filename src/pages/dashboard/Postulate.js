import React from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import { Header } from "../../components";
import {
  Council,
  ElectoralGroup,
  FacultyCouncil,
  School,
  SchoolCouncil,
  StudentFederationCenter
} from "./postulate";

class DashPostulate extends React.Component {
  state = {
    electoralGroup: false,
    loading: true
  };

  componentDidMount() {
    const _id = setTimeout(() => {
      console.log("api");
      this.setState({ electoralGroup: true, loading: false });
    }, 500);
    console.log(_id);
  }

  onChange = e => {
    e.preventDefault();
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  getBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  onChangeFile = async e => {
    e.preventDefault();
    const state = { ...this.state };
    const file = e.target.files[0];
    const name = e.target.name;
    const base64 = await this.getBase64(file);
    // data:image/
    state[name] = base64;
    this.setState(state);
  };

  render() {
    return (
      <>
        <Header />
        <Container className="mt--7 py-4">
          <Row>
            <Col sm="12">
              {this.state.loading ? (
                <div className="d-flex justify-content-center py-4 card">
                  <Spinner
                    className="m-auto"
                    color="primary"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
              ) : this.state.electoralGroup ? (
                <>
                  <School onChange={this.onChange} />
                  <Council onChange={this.onChange} />
                  <SchoolCouncil onChange={this.onChange} />
                  <FacultyCouncil onChange={this.onChange} />
                  <StudentFederationCenter onChange={this.onChange} />
                </>
              ) : (
                <ElectoralGroup
                  onChange={this.onChange}
                  onChangeFile={this.onChangeFile}
                />
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default DashPostulate;
