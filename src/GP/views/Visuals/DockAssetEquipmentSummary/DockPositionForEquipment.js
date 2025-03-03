import React from "react";
import {Card, CardFooter,} from "reactstrap";
import DocksEquipmentSummaryModal from "../DockAssetEquipmentSummary/DocksEquipmentSummaryModal"

// import DocksDetailsButtonAndModal from "./DocksDetailsButtonAndModal";


const DockPositionCard1 = {
    width: "300px",
    height: "140px",
    backgroundColor: "#f8fafc",
    boxSizing: "border-box",
    borderRadius: "5px",
    marginLeft: "26px",
    marginBottom: "60px",
    textAlign: "center"
}

const DockPositionCardStatusLineRed = {
    borderTop: "5px solid #fd1212",
}

const DockPositionCardStatusLineGreen = {
    borderTop: "5px solid green",
}

const DockTitle = {
    marginTop: "10px",
    paddingLeft: "10px",
    fontWeight: "Bold",
}

const DockDesc = {
    paddingLeft: "10px",
    fontSize: "small",
}

const DockMsg = {
    marginTop: "30px",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontWeight: "Bold",
    fontSize: "x-small",
}

const MsgTime = {
    marginTop: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontSize: "x-small",
}


const DocksPositionForEquipment = (props) => {
    return (
        <>
            <Card style={DockPositionCard1}>

                <div style={DockTitle}>
                    {props.title ? props.title : "No Title"}
                </div>

                <div style={MsgTime}>
                    {props.time ? props.time : "-"}
                </div>
                <CardFooter>
                    <DocksEquipmentSummaryModal obj={props}/>
                </CardFooter>
            </Card>
        </>
    )
}
export default DocksPositionForEquipment;
