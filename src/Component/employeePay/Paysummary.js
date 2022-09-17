import { Box } from "@mui/system";
import React, { useState } from "react";
import Addanother from "./addAnother";
const Paysummary = () => {
  // const [Company, setCompany] = useState({
  //   Cname: "",
  //   Caddress: "",
  //   Citypin: "",
  // });
  // const inputEvent = (event) => {
  //   console.log(event.target.value);

  //   const { value, name } = event.target;

  //   setCompany((preValue) => {
  //     if (name === "Cname") {
  //       return {
  //         Cname: value,
  //         Caddress: preValue.Caddress,
  //         Citypin: preValue.Citypin,
  //       };
  //     } else if (name === "Caddress") {
  //       return {
  //         Cname: preValue.Cname,
  //         Caddress: value,
  //         Citypin: preValue.Citypin,
  //       };
  //     } else if (name === "Citypin") {
  //       return {
  //         Cname: preValue.Cname,
  //         Caddress: value.Caddress,
  //         Citypin: value,
  //       };
  //     }
  //   });
  // };

  return (
    <Box
      sx={{
        height: "236.20px",
        width: "766px",
        // backgroundColor: "purple",
        padding: "20px",
      }}
    >
      <span style={{ fontWeight: 600, float: "left", marginBottom: "10px" }}>
        Employee Pay Summary *
      </span>

      <Box
        sx={{
          height: "114px",
          width: "766px",
          display: "flex",
          marginBottom: " 15px",
          paddingTop: "20px",
          borderTop: "1px solid #f3f3f6",
        }}
      >
        <Box
          sx={{
            height: "114px",
            width: "50%",
            textAlign: "left",
          }}
        >
          <Box sx={{ width: "100%", display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <lable
                style={{
                  padding: "10px 0px 10px 0px",
                }}
              >
                Emalpoyee Name :
              </lable>
            </Box>
            <Box sx={{ width: "50%" }}>
              <input
                style={{
                  width: "100%",
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
            </Box>
          </Box>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <lable
                style={{
                  padding: "10px 0px 10px 0px",
                }}
              >
                Pay Period:
              </lable>
            </Box>
            <Box sx={{ width: "50%" }}>
              <input
                style={{
                  width: "100%",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "400",
                  border: "none",
                  borderBottom: "1px dashed #e1ecfd",
                  padding: "10px 0px 10px 0px",
                }}
                type="date"
                placeholder="Eg: Krishnan"
                name="Cname"
                // onChange={inputEvent}
                // value={Company.Cname}
              />
            </Box>
          </Box>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <lable
                style={{
                  padding: "10px 0px 10px 0px",
                }}
              >
                Loss of pay Days :
              </lable>
            </Box>
            <Box sx={{ width: "50%" }}>
              <input
                style={{
                  width: "100%",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "400",
                  border: "none",
                  borderBottom: "1px dashed #e1ecfd",
                  padding: "10px 0px 10px 0px",
                }}
                type="number"
                placeholder="0"
                name="Cname"
                // onChange={inputEvent}
                // value={Company.Cname}
              />
            </Box>
          </Box>
        </Box>

        {/* <Addanother/> */}

        <Box sx={{ height: "114px", width: "50%", textAlign: "left" }}>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <lable
                style={{
                  padding: "10px 0px 10px 0px",
                }}
              >
                Emalpoyee ID :
              </lable>
            </Box>
            <Box sx={{ width: "50%" }}>
              <input
                style={{
                  width: "100%",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "400",
                  border: "none",
                  borderBottom: "1px dashed #e1ecfd",
                  padding: "10px 0px 10px 0px",
                }}
                type="text"
                placeholder="Eg: 1234"
                name="Cname"
                // onChange={inputEvent}
                // value={Company.Cname}
              />
            </Box>
          </Box>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <lable
                style={{
                  padding: "10px 0px 10px 0px",
                }}
              >
                Paid Days:
              </lable>
            </Box>
            <Box sx={{ width: "50%" }}>
              <input
                style={{
                  width: "100%",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "400",
                  border: "none",
                  borderBottom: "1px dashed #e1ecfd",
                  padding: "10px 0px 10px 0px",
                }}
                type="number"
                placeholder="Eg:22"
                name="Cname"
                // onChange={inputEvent}
                // value={Company.Cname}
              />
            </Box>
          </Box>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <lable
                style={{
                  padding: "10px 0px 10px 0px",
                }}
              >
                Pay Dates :
              </lable>
            </Box>
            <Box sx={{ width: "50%" }}>
              <input
                style={{
                  width: "100%",    
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "400",
                  border: "none",
                  borderBottom: "1px dashed #e1ecfd",
                  padding: "10px 0px 10px 0px",
                }}
                type="date"
                placeholder="0"
                name="Cname"
                // onChange={inputEvent}
                // value={Company.Cname}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Paysummary;
