import { Box, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { EditText } from "react-edit-text";
// import data from "../country/country (1)"
// import data from "/data/country";
import data from "../data/country";

const styles = {
  display: "block",
  height: "28px",
  fontSize: "20px",
  fontWeight: "500",
  border: "none",
  borderBottom: "1px dashed #e1ecfd",
  width: "50%",
  outline: "none",
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
          style={{ ...styles, fontSize: "12px" }}
          type="text"
          placeholder="Company Address"
          name="Caddress"
          onChange={inputEvent}
          value={Company.Caddress}
        />
        <input
          style={{ ...styles, fontSize: "12px" }}
          type="text"
          placeholder="City,pincode"
          name="Citypin"
          onChange={inputEvent}
          value={Company.Citypin}
        />
        <Select
          sx={{ float: "left" }}
          variant="standard"
          style={{
            backgroundColor: "transparent",
            outline: "none",
            color: "#444",
            border: "none",
            height: "30px",
            fontSize: "14px",
          }}
          defaultValue={data.Country[100].code}
          name="companyCountry"
          // onChange={companyInputEvent}
          // value={company.companyCountry}
        >
          {data.Country.map((items) => (
            <MenuItem value={items.code}>{items.name}</MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

export default Firstinput;
