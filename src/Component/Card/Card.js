import React from "react";
import { Box } from "@mui/material";
import Logoupload from "../uploadlogo/Logoupload";
import Paysummary from "../employeePay/Paysummary";
import Firstinput from "../inputFirst/firstinput";
import TotalnetPay from "../TotalNet/totalnetPay";
import  Button from "../Button/button";
import Incomedetail from "../incomeDetail/incomedetail";
const Paycard = () => {
  return (
      <Box
        sx={{
          height: "1259px",
          width: "806px",
          margin: "16px 0px",
          padding: "30px",
          border: "1px solid #f5eeeb",
          backgroundColor: "#fff",
          boxShadow: "0 4px 9px 0 rgb(28 29 83 / 4%)",
          borderRadius: "10px",
        }}
      >
        <Logoupload />
                <Firstinput />
        <Paysummary />
        <Incomedetail/>
        <TotalnetPay/>
        <Button/>
      </Box>
  );
};

export default Paycard;
