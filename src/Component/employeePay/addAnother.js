
import { Box } from "@mui/system";
import React, { useState } from "react";

const Addanother = () => {
    const [Company, setCompany] = useState({
        Cname: "",
        Caddress: "",
        Citypin: "",
      });
      const inputEvent = (event) => {
        console.log(event.target.value);
    
        const { value, name } = event.target;
    
        setCompany((preValue) => {
          if (name === "Cname") {
            return {
              Cname: value,
              Caddress: preValue.Caddress,
              Citypin: preValue.Citypin,
            };
          } else if (name === "Caddress") {
            return {
              Cname: preValue.Cname,
              Caddress: value,
              Citypin: preValue.Citypin,
            };
          } else if (name === "Citypin") {
            return {
              Cname: preValue.Cname,
              Caddress: value.Caddress,
              Citypin: value,
            };
          }
        });
      };
  return (
    <>
    <Box
    sx={{
      height: "114px",
      width: "100%",
      textAlign:"left",
      backgroundColor:"yellow",
    }}>
      
     <Box sx={{ backgroundColor:"cyan", display:"flex"}}>
      {/* <lable style={{ width: "50%",float:"left",padding:"10px 0px 10px 0px"}}>Emalpoyee Name {" "}:</lable>  */}
      <input
        style={{
          width: "50%",
          display: "block",
          fontSize: "14px",
          fontWeight: "400",
          border: "none",
          borderBottom: "1px dashed #e1ecfd",
          padding:"10px 0px 10px 0px",
        }}
        type="text"
        placeholder="Eg: Krishnan"
        name="Cname"
        // onChange={inputEvent}
        // value={Company.Cname}
      />
      <input
        style={{
          width: "50%",
          display: "block",
          fontSize: "14px",
          fontWeight: "400",
          border: "none",
          borderBottom: "1px dashed #e1ecfd",
          padding:"10px 0px 10px 0px",
        }}
        type="text"
        placeholder="Eg: Krishnan"
        name="Cname"
        // onChange={inputEvent}
        // value={Company.Cname}
      />
      </Box>
      </Box>
      </>
  )
}

export default Addanother
