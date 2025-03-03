import React, {useEffect, useState} from "react";

import GetAssetStatus from "../../../../../src/Axios/GetAssetStatus"
import {Card, CardBody, CardHeader, CardTitle, Col, Form, Row} from "reactstrap";
import Select from "react-select";
import DocksPositionForEquipment from "../DockAssetEquipmentSummary/DockPositionForEquipment"


export const DockInformationforEqupment = () => {
    const [dockData, setDockData] = useState();
    const [singleSelect, setsingleSelect] = React.useState(null);

    useEffect(() => {
        GetAssetStatus().then((s) => {
            setDockData(s.data);
            console.log(s);
        });
    }, []);

    return (
        <div className="content">
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                        </CardHeader>
                        <CardBody>
                            <Form action="#">
                                <Row>
                                    <Col md="2" lg="1">
                                        <label style={{marginTop: "5px", fontSize: "14px", marginLeft: '30px'}}>Search
                                            By...</label>
                                    </Col>
                                    <Col md="3 " lg="2">
                                        <Select
                                            style={{width: "200px", marginTop: "2px", color: "#005896"}}
                                            className="react-select info"
                                            classNamePrefix="react-select"
                                            name="All Docks"
                                            value={singleSelect}
                                            onChange={(value) => setsingleSelect(value)}
                                            options={[
                                                {
                                                    value: "",
                                                    label: "North Facing Docks",
                                                    // isDisabled: true,
                                                },
                                                {value: "2", label: "South Facing Docks"},
                                                {value: "3", label: "Active Docks"},
                                                {value: "3", label: "InActive Docks"},
                                            ]}
                                            placeholder="Select Docks"
                                        />

                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>

                    </Card>
                </Col></Row>


            {/*// Mapping All cards information*/}
            <Row>
                <Col lg="12">
                    <Card>
                        <CardHeader>
                            <h4 className="card-category">Docks/ Assets Equipment Summary  </h4>
                            <CardTitle tag="h3">
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Row style={{marginTop: "15px"}}>
                                {Array.isArray(dockData) ? (
                                    dockData.map((item, index) => (
                                        <DocksPositionForEquipment
                                            title={item.DockTitle}
                                            desc={item.Desc}
                                            msg={item.LastMess}
                                            time={item.MessTime}
                                            status={item.CurrentState}
                                        />
                                    ))
                                ) : (
                                    <div>Waiting For Data</div>
                                )}
                            </Row>
                            {/*</Card>*/}

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default DockInformationforEqupment;
