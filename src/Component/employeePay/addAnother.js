import { Box } from "@mui/system";
import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";

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
          width: "100%",
          textAlign: "left",
          // backgroundColor: "yellow",
        }}
      >
        <Box sx={{  display: "flex", '&:hover': {
           
        }, }}>
          {/* <lable style={{ width: "50%",float:"left",padding:"10px 0px 10px 0px"}}>Emalpoyee Name {" "}:</lable>  */}
          <input
            style={{
              width: "45%",
              display: "block",
              fontSize: "14px",
              fontWeight: "400",
              border: "none",
              borderBottom: "1px dashed #e1ecfd",
              padding: "10px 0px 10px 0px",
            }}
            type="text"
            placeholder="Eg: Krishnan"
            name="Cname"
            // onChange={inputEvent}
            // value={Company.Cname}
          />
          <input
            style={{
              width: "45%",
              display: "block",
              fontSize: "14px",
              fontWeight: "400",
              border: "none",
              borderBottom: "1px dashed #e1ecfd",
              padding: "10px 0px 10px 0px",
            }}
            type="text"
            placeholder="Eg: Krishnan"
            name="Cname"
            // onChange={inputEvent}
            // value={Company.Cname}
          />
          <Box
            sx={{
              width: "10%",
              // backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            //   visibility: "hidden",
            
            }}
          >
            {" "}<FeatherIcon icon="minus-circle" color="red" size="16px"/>
           
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Addanother;
