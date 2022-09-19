import React from "react";
import { Box } from "@mui/system";
import FeatherIcon from "feather-icons-react";

const Button = () => {
  return (
    <Box
      sx={{
        height: "50px",
        width: "806px",
        margin: "80px 0px 50px 0px",
        // backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          height: "50px",
          color: " #fff",
          background: "#f0483e",
          fontSize: "20px",
          padding: "8px 10px",

          cursor: "pointer",
          borderColor: "#fff",
          borderWidth: 0,
          borderRadius: "8px",
          width: "250px",
        }}
      >
        Generate Payslip
      </button>
      <button
        style={{
          height: "50px",
          fontSize: "20px",
          borderRadius: "8px",
          padding: "8px 10px",
          cursor: "pointer",
          background: "#fff",
          border: " 1px solid #e5e5ec",
          color: "#333",
          width: "150px",
          marginLeft: "60px",
        }}
      >
        <FeatherIcon icon="refresh-ccw" color="black" size="16px" />
        {"  "}Reset
      </button>
    </Box>
  );
};

export default Button;
