import React from "react";
import { Box, Typography } from "@mui/material";

const Logoupload = () => {
  return (
    <Box
      sx={{
        width: "801px",
      }}
    >
      <Box
        sx={{
          height: "117px",
          width: "781px",
          padding: "10px 10px 0px",
          margin: "10px auto 5px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            height: "56px",
            width: "109.9px",
            backgroundColor: "#fbfcff",
            border: "1px dashed #5b9aff",
            padding: "20px 20px 15px",
            marginBottom: "20px",
            borderRadius: "6px",
            textAlign: "center",
          }}
        >
          <input
            type="file"
            onChange={(e) => this.uplod(e.target.value)}
            name="img"
          />
        </Box>
        <Box
          sx={{
            height: "87px",
            width: "187.5px",
            backgroundColor: "#fff",
            margin: "15px 20px",
            textAlign: "left",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: "14px", fontWeight: "500", display: "block" }}
          >
            Upload Logo
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "10px", display: "block", paddingTop: "5px" }}
          >
            240 x 240 pixels @ 72 DPI,
            <br />
            Maximum size of 1MB.
          </Typography>
        </Box>
        <Box
          sx={{
            height: "110px",
            width: "393px",
            textAlign: "right",
          }}
        >
          <Box
            sx={{
              height: "24px",
              width: "393px",
              margin: "10px 0px 5px 0px",
              color: "#676767",
            }}
          >
            <Typography sx={{ fontSize: "15px" }}>
              Payslip For the Month
            </Typography>
          </Box>
          <Box
            sx={{
              height: "20px",
              width: "393px",
            }}
          >
            {" "}
            <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
              September 2022
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Logoupload;
