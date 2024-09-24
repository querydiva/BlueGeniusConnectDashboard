import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import "./../../../../assets/css/facility.css";

import Warehouse from "../../../../assets/img/warehouse.png";
import RoadBackgroundEmpty from "../../../../assets/img/road-background-empty.png";
import TruckEngaged from "../../../../assets/img/notengagedtruck.png";
import TruckNotEngaged from "../../../../assets/img/engagedtruck.png";
import VehicleEngaged from "../../../../assets/img/notengagedtruck1.png";
import EngagedTruck1 from "../../../../assets/img/engagedtruck1.png";
import DoorClosed from "../../../../assets/img/doorclose.png";
import DoorOpen from "../../../../assets/img/dooropen.png";
import DoorNotInstalled from "../../../../assets/img/doornotinstalled.png";
import DoorFault from "../../../../assets/img/doorfault.png";
import VehicleDetected from "../../../../assets/img/symbols.png";
import Vehicleengaged from "../../../../assets/img/symbol1.png";
import EmptyLane from "../../../../assets/img/empty.png";
/**
 * Function to return the max number of lanes to be displayed in 1 direction.
 * Customize dir1 for more directions
 * @param arry  Array of data/JSON objects
 * @returns {number}    number of Lanes
 */
const getRowWidth = (arry) => {
  // Validation for Array
  if (!Array.isArray(arry)) {
    return -1;
  }

  const totalLength = arry.length;
  let dir1Len = arry.reduce((n, obj) => {
    return n + (obj.DockFaceDirection === "North");
  }, 0);

  return totalLength - dir1Len;
};

const BlueYardView = (props) => {
  const lanes = [];
  // for (let i = 0; i < getRowWidth(props.dockData); i++) {
  //     lanes.push(<img src={RoadBackgroundEmpty} alt="Empty lane"/>);
  // }

  const northLanes = [];
  const southLanes = [];
  props.dockData.map((i, k) => {
    if (i.DockFaceDirection === "North") {
      northLanes.push(i);
    } else {
      southLanes.push(i);
    }
    return 0;
  });

  return (
    <>
      <Row>
        <Card>
          <CardHeader>
            <CardTitle tag="h4">
              Current Warehouse Status on date at Time
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Table responsive>
              <thead className="text-primary">
                <tr>
                  <th className="text-center">
                    <div>
                      <img alt="test" src={DoorClosed} className="symbols" />
                      Open Door
                    </div>
                  </th>
                  <th>
                    <div>
                      <img alt="test" src={DoorOpen} className="symbols" />
                      Closed Door
                    </div>
                  </th>
                  <th>
                    {" "}
                    <div>
                      <img
                        alt="test"
                        src={DoorNotInstalled}
                        className="symbols"
                      />
                      Door Not Installed
                    </div>
                  </th>
                  <th className="text-center">
                    <div>
                      <img alt="test" src={DoorFault} className="symbols" />
                      Fault Door
                    </div>
                  </th>
                  <th className="text-right">
                    {" "}
                    <div>
                      <img
                        alt="test"
                        src={VehicleDetected}
                        className="symbols"
                      />
                      Vehicle Detected
                    </div>
                  </th>
                  <th className="text-right">
                    <div>
                      <img
                        alt="test"
                        src={Vehicleengaged}
                        className="symbols"
                      />
                      Vehicle-Engaged
                    </div>
                  </th>
                  <th className="text-right">
                    <div>
                      <img alt="test" src={EmptyLane} className="symbols" />
                      No-Vehicle
                    </div>
                  </th>
                </tr>
              </thead>
            </Table>
          </CardBody>
        </Card>
      </Row>
      {/* // End of top cards */}

      <Row>
        <Card>
          <CardBody>
            <Row >
              <Col xs="12" md="12" lg="12">
                <Table
                  responsive
                  >
                  {/*Render Truck Lanes*/}
                  <tbody>
                    <tr className="road-background">
                      {northLanes.map((i, k) => (
                        <td
                          key={k}
                          className="vertical-lane-boundary-dashes truck-cell"
                        >
                          {i.RestraintState === "DisEngaged" ? (
                            <img
                              alt="Truck Not Engaged"
                              src={TruckNotEngaged}
                            />
                          ) : i.RestraintState === "Engaged" ? (
                            <img alt="Truck Engaged" src={TruckEngaged} />
                          ) : (
                            <img
                              alt="Road Background Empty"
                              src={RoadBackgroundEmpty}
                            />
                          )}
                        </td>
                      ))}
                    </tr>

                    <tr>
                      {northLanes.map((item, k) => (
                        <td key={k} className="yard-layout-image-cell">
                          {item.DoorState === "Open" ? (
                            <img alt="Door Closed" src={DoorClosed} />
                          ) : item.DoorState === "Not-Installed" ? (
                            <img
                              alt="Door Not Installed"
                              src={DoorNotInstalled}
                            />
                          ) : item.DoorState === "Fault" ? (
                            <img alt="Door Fault" src={DoorFault} />
                          ) : (
                            <img alt="Door Open" src={DoorOpen} />
                          )}
                        </td>
                      ))}
                    </tr>

                    <tr style={{ height: "1vh" }}>
                      {northLanes.map((item, k) => (
                        <td key={k} className="table-heading">
                          {item.DockFaceDirection === "North"
                            ? item.DockTitle
                            : "No Dock"}
                        </td>
                      ))}
                    </tr>
                    <tr className="section-warehouse-cell ">
                      <td colspan="10">
                        <div className="row-with-gif-background-warehouse">
                          <span>
                            Dry Goods
                          </span>
                          </div>
                          </td>
                      <td colspan="5">
                      <div className="row-with-gif-background-warehouse">
                          <span>
                          Frozen Goods
                          </span>
                          </div>
                          </td>
                    </tr>
                  </tbody>
                </Table>

                <div>
                  <Table responsive>
                    <tbody>
                    <tr className="road-background  section-warehouse-cell">
                      <td colspan="5">
                      <div className="parallax-row">
                      <span>Liquid Goods</span></div></td>
                      <td colspan="10">
                       <div className="parallax-row">
                          <span>Goods</span></div></td>
                    </tr>
                      <tr style={{ height: "1vh" }}>
                        {southLanes.map((item, k) => (
                          <td
                            key={k}
                            className="table-heading"
                            style={{ font: "#ffffff" }}
                          >
                            {item.DockFaceDirection === "South"
                              ? item.DockTitle
                              : "No Dock"}
                          </td>
                        ))}
                      </tr>

                      <tr>
                        {southLanes.map((item, k) => (
                          <td key={k} className="yard-layout-image-cell">
                            {item.DoorState === "Open" ? (
                              <img alt="Door Closed" src={DoorClosed} />
                            ) : item.DoorState === "Not-Installed" ? (
                              <img
                                alt="Door Not Installed"
                                src={DoorNotInstalled}
                              />
                            ) : item.DoorState === "Fault" ? (
                              <img alt="Door Fault" src={DoorFault} />
                            ) : (
                              <img alt="Door Open" src={DoorOpen} />
                            )}
                          </td>
                        ))}
                      </tr>

                      <tr className="road-background">
                        {southLanes.map((i, k) => (
                          <td
                            key={k}
                            className="vertical-lane-boundary-dashes truck-cell"
                          >
                            {i.RestraintState === "DisEngaged" ? (
                              <img alt="Engaged Truck 1" src={EngagedTruck1} />
                            ) : i.RestraintState === "Engaged" ? (
                              <img alt="Vehicle Engaged" src={VehicleEngaged} />
                            ) : (
                              <img
                                alt="Road Background Empty"
                                src={RoadBackgroundEmpty}
                              />
                            )}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Row>
    </>
  );
};

export default BlueYardView;
