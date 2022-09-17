import { Box } from "@mui/system";
import React, { useState } from "react";
import { EditText } from "react-edit-text";

const styles = {
  display: "block",
  height: "28px",
  fontSize: "20px",
  fontWeight: "500",
  border: "none",
  borderBottom: "1px dashed #e1ecfd",
  width: "50%",
  outline:"none"
};

const Firstinput = () => {
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
        height: "132px",
        width: "781px",
        padding: "0px 10px 20px",
        margin: "5px auto ",
        display: "block",
      }}
    >
      <Box sx={{}}>
        <input
          style={styles}
          type="text"
          placeholder="Company Name*"
          name="Cname"
          onChange={inputEvent}
          value={Company.Cname}
        />
        <input
          style={{...styles, fontSize:"12px"}}
          type="text"
          placeholder="Company Address"
          name="Caddress"
          onChange={inputEvent}
          value={Company.Caddress}
        />
        <input
          style={{...styles, fontSize:"12px"}}
          type="text"
          placeholder="City,pincode"
          name="Citypin"
          onChange={inputEvent}
          value={Company.Citypin}
        />
        <input
          style={{...styles, fontSize:"12px"}}
          type="text"
          placeholder="Country"
          //   name="Citypin"
          //   onChange={inputEvent}
          //   value={Company.Citypin}
        />
      </Box>
    </Box>
  );
};

export default Firstinput;
