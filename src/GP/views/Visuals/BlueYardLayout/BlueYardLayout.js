import React, {useEffect, useState} from "react";

import GetAssetStatus from "../../../../Axios/GetAssetStatus"
import BlueYardView from "../BlueYardLayout/BlueYardView";


const BlueYardLayout = (props) => {
    const [dockData, setDockData] = useState(null);

  useEffect(() => {
    // Dummy data to replace API call
    const dummyData = [
        {
            id: 1,
            DockTitle: 'Dock 1',
            DockFaceDirection: 'North',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 2,
            DockTitle: 'Dock 2',
            DockFaceDirection: 'North',
            DoorState: 'Closed',
            RestraintState: 'DisEngaged',
          },
          {
            id: 3,
            DockTitle: 'Dock 3',
            DockFaceDirection: 'North',
            DoorState: 'Not-Installed',
            RestraintState: 'Fault',
          },
          {
            id: 4,
            DockTitle: 'Dock 4',
            DockFaceDirection: 'North',
            DoorState: 'Fault',
            RestraintState: 'DisEngaged',
          },
          {
            id: 5,
            DockTitle: 'Dock 5',
            DockFaceDirection: 'North',
            DoorState: 'Closed',
            RestraintState: 'Engaged',
          },
          {
            id: 6,
            DockTitle: 'Dock 6',
            DockFaceDirection: 'North',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 7,
            DockTitle: 'Dock 7',
            DockFaceDirection: 'North',
            DoorState: 'Closed',
            RestraintState: 'DisEngaged',
          },
          {
            id: 8,
            DockTitle: 'Dock 8',
            DockFaceDirection: 'North',
            DoorState: 'Not-Installed',
            RestraintState: 'Fault',
          },
          {
            id: 9,
            DockTitle: 'Dock 9',
            DockFaceDirection: 'North',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 10,
            DockTitle: 'Dock 10',
            DockFaceDirection: 'North',
            DoorState: 'Fault',
            RestraintState: 'DisEngaged',
          },
          {
            id: 11,
            DockTitle: 'Dock 11',
            DockFaceDirection: 'North',
            DoorState: 'Closed',
            RestraintState: 'Engaged',
          },
          {
            id: 12,
            DockTitle: 'Dock 12',
            DockFaceDirection: 'North',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 13,
            DockTitle: 'Dock 13',
            DockFaceDirection: 'North',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 14,
            DockTitle: 'Dock 14',
            DockFaceDirection: 'North',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 15,
            DockTitle: 'Dock 15',
            DockFaceDirection: 'North',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 16,
            DockTitle: 'Dock 16',
            DockFaceDirection: 'South',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 17,
            DockTitle: 'Dock 17',
            DockFaceDirection: 'South',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 18,
            DockTitle: 'Dock 18',
            DockFaceDirection: 'South',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 19,
            DockTitle: 'Dock 19',
            DockFaceDirection: 'South',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 20,
            DockTitle: 'Dock 20',
            DockFaceDirection: 'South',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 21,
            DockTitle: 'Dock 21',
            DockFaceDirection: 'South',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 22,
            DockTitle: 'Dock 22',
            DockFaceDirection: 'South',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 23,
            DockTitle: 'Dock 23',
            DockFaceDirection: 'South',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 24,
            DockTitle: 'Dock 24',
            DockFaceDirection: 'South',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          
          {
            id: 25,
            DockTitle: 'Dock 25',
            DockFaceDirection: 'South',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 26,
            DockTitle: 'Dock 26',
            DockFaceDirection: 'South',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 27,
            DockTitle: 'Dock 27',
            DockFaceDirection: 'South',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 28,
            DockTitle: 'Dock 28',
            DockFaceDirection: 'South',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
            id: 29,
            DockTitle: 'Dock 29',
            DockFaceDirection: 'South',
            DoorState: 'Open',
            RestraintState: 'Engaged',
          },
          {
          id: 30,
          DockTitle: 'Dock 30',
          DockFaceDirection: 'South',
          DoorState: 'Open',
          RestraintState: 'Engaged',
        },

    ];

   
    setDockData(dummyData);

    
    
  }, []); 
      
        // () => {
        //     GetAssetStatus().then(s => {
        //             setDockData(s.data);
        //             console.log(s);
        //         }
        //     );
        // }
        // , []);

    return (
        <>
        {/* <BlueYardView/> */}
                {
                    Array.isArray(dockData) ? <BlueYardView dockData={dockData}/> : <div style={{marginTop:"20px", marginLeft:"20px"}}>Waiting For Data</div>
                }
        </>
    )
}
export default BlueYardLayout;
