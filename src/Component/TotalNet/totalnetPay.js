import React from 'react'
import { Box } from "@mui/system";


const TotalnetPay = () => {
  return (
    <Box
    sx={{
      height: "51px",
      width: "714px",
      borderRadius:"10px",
      margin:"60px 20px 0px",
      textAlign:"center",
      padding:"20px",
      backgroundColor: "#f9f9fb",
      borderLeft:"6px solid #e3e3eb",
      borderRight:"6px solid #e3e3eb",
    }}>
        <Box  sx={{
      height: "32px",
      width: "714px",
       fontSize:"20px"}}>Total Net Payable : Rs.0</Box>
      <Box sx={{    fontSize: "12px",
    color: "#828284",
    letterSpacing: ".7px",}}>
              ( Total Net Payable = Gross Earnings - Total Deductions )
            </Box>
      </Box>
  )
}

export default TotalnetPay
