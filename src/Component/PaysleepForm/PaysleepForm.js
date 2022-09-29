import React from "react";
import Paycard from "../Card/Card";
import { Box } from "@mui/material";

const PaysleepForm = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            backgroundColor: "#fff4ef",
            height: "535px",
            width: " 100%",
            zIndex: "0",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            margin: "auto",
            height: "1500px",
            width: "868px",
            zIndex: "1000",
            padding: "0px 30px",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              height: "115px",
              padding: "0px 30px",
            }}
          >
            <Box
              sx={{
                height: "51px",
                width: "806px",
                fontSize: "32px",
                fontWeight: 600,
                color: "#e53333",
              }}
            >
              Free Payslip Generator
            </Box>
            <Box
              sx={{
                height: "51px",
                width: "806px",
                fontSize: "16px",
                // fontWeight: 600,
                color: "#000",
                margin: "10px auto 40px",
              }}
            >
              With Zoho Payroll, create top-notch payslips for your employees
              right away! Easy to use and <br /> customisable, this free tool
              will make payroll smoother for you.
            </Box>

            <Paycard />
            
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PaysleepForm;
