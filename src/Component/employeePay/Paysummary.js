import { Box } from "@mui/system";
import React, { useState } from "react";
const Paysummary = () => {
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
    <Box
      sx={{
        height: "236.20px",
        width: "766px",
        // backgroundColor: "purple",
        padding: "20px",
      }}
    >
      <span style={{ fontWeight: 600, float: "left",marginBottom:"10px" }}>
        Employee Pay Summary *
      </span>

      <Box
        sx={{
          height: "114px",
          width: "766px",
        //   backgroundColor: "cyan",
          display: "flex",
          marginBottom: " 15px",
          paddingTop:"20px",
          borderTop:"1px solid #f3f3f6"
          
        //   margin:"10px",
        }}
      >
          <Box
          sx={{
            height: "114px",
            width: "50%",
            // backgroundColor: "green",
            textAlign:"left",
          }}>
           
            <lable style={{ width: "100%",float:"left",padding:"10px 0px 10px 0px"}}>Emalpoyee Name {" "}:</lable> 
            <lable style={{ width: "100%",float:"left",paddingBottom:"10px"}}>Pay Period {" "}:</lable> 
            <lable style={{ width: "100%",float:"left",}}>Loss of Pay Days{" "}:</lable> 
          </Box>
        <Box
          sx={{
            height: "114px",
            width: "50%",
            // backgroundColor: "yellow",
          }}
          

        >
          <Box sx={{}}>
            <input
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "400",
                border: "none",
                borderBottom: "1px dashed #e1ecfd",
                width: "100%",
                padding:"10px 0px 10px 0px",
                
             
              }}
              type="text"
              placeholder="Eg:Meera Krishnan"
              name="Cname"
              onChange={inputEvent}
              value={Company.Cname}
            />
            <input
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: 400,
                border: "none",
                borderBottom: "1px dashed #e1ecfd",
                width: "100%",paddingBottom:"12px"
              }}
              type="date"
              placeholder=""
              name="Caddress"
              onChange={inputEvent}
              value={Company.Caddress}
            />
            <input
              style={{
                display: "block",
                paddingBottom:"10px",
                
                fontSize: "14px",
                fontWeight: "400",
                border: "none",
                borderBottom: "1px dashed #e1ecfd",
                width: "100%",
              }}
              type="number"
              placeholder="0"
              name="Citypin"
              onChange={inputEvent}
              value={Company.Citypin}
            />
           
          </Box>
        </Box>

        <Box
          sx={{ height: "114px", width: "100%", backgroundColor: "red", }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Paysummary;
