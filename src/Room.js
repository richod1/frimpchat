import React from "react"
import {useParams} from "react-router-dom"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room=()=>{
    const { roomID } = useParams();
    const meeting = async (element) => {
      const appID = 1170198223;
      const serverSecret = "5048cfc8b578905bef03db2300cbf9e0";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        "DEGRAFT"
      );
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
      });
    }
    return <div ref={meeting} style={{ width: "100vw", height: "100vh" }}></div>;
        
    
}

export default Room