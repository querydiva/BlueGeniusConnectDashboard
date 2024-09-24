import React from "react";
import BlueYardLayout from "../BlueYardLayout/BlueYardLayout"
import "assets/css/facility.css"
import { Pie } from "react-chartjs-2";
import {
  DocksUtilzationPieChart
} from "../../../../GP/variables/BlueCharts";
// reactstrap components
import {
   Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
 } from "reactstrap";

const BlueYardLayoutContainer = () => {

   return (
    <>
      <div className="content">
        
        {/* // Top cards */}
        <Row>
          <Col lg="2" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-info">
                      <i className="tim-icons icon-single-copy-04" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Bays</p>
                      <CardTitle tag="h3">27</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center">
                      <i
                        id="occupied-bay-card"
                        className="tim-icons icon-bus-front-12"
                      />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">
                        Occupied Bays/Trailers Detected
                      </p>
                      <CardTitle tag="h3">9</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="2" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-info">
                      <i className="tim-icons icon-simple-add" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Available Docks</p>
                      <CardTitle tag="h3">10</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col lg="2" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-danger">
                      <i className="tim-icons icon-simple-remove" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Faulty Docks</p>
                      <CardTitle tag="h3">4</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="2" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-danger">
                      <i className="tim-icons icon-button-pause" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Uninstalled Docks</p>
                      <CardTitle tag="h3">5</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* // End of top cards */}

        {/* // warehouse layout left side column */}
        <Row>
          <Col lg="9">
          <BlueYardLayout/>
          </Col>
          {/* // End of Warehouse layout */}

          {/* // Pie chart On right side */}
         
          <Col className="mr-auto" md="12" xs="12" lg="3">
            <Card className="card-chart card-chart-pie" 
         >
              <CardHeader>
                <h5 className="card-category">Utilization</h5>
              </CardHeader>
              <CardBody>
                <Row className="center-chart">
                  <Col xs="10">
                    <div className="chart-area">
                      <Pie 
                        data={DocksUtilzationPieChart.data}
                        options={DocksUtilzationPieChart.options}
                      />
                    </div>
                  </Col>
                  </Row>
                  <Row className="center-chart">
                  <Col xs="10" >
                   
                    <h5 className="card-category">
                       This pie chart shows the capacity versus 
                       utilization of the
                       warehouse in real time.</h5>
                   
                  </Col>
                  </Row>
                  </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BlueYardLayoutContainer;



