import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FeatherIcon from "feather-icons-react";
// import AddEarning from "./addEarning";

const Incomedetail = () => {
  const [incomeDetails, setIncomeDetails] = useState({
    Basic: "",
    HouseRent: "",
  });
  const inputEvent = (event) => {
    const { value, name } = event.target;
    setIncomeDetails((preValue) => {
      console.log(preValue);

      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    setIncomeTotal(Total(incomeDetails));
  }, [incomeDetails]);

  const [incomeTotal, setIncomeTotal] = useState(0);

  const Total = (details) => {
    let total = 0;

    Object.values(details).forEach((income) => {
      total += Number(income);
    });

    return total;
  };

  const [deductDetails, setDeductDetails] = useState({
    IncomeTax: "",
    providentFund: "",
  });
  const inputEventOne = (event) => {
    console.log(event.target.value);

    const { value, name } = event.target;

    setDeductDetails((preValue) => {
      console.log(preValue);

      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const [deductTotal, setDeductTotal] = useState(0);

  useEffect(() => {
    setDeductTotal(Total(deductDetails));
  }, [deductDetails]);

  const [TotalNet, setTotalNet] = useState(0);
  useEffect(() => {
    setTotalNet(incomeTotal - deductTotal);
  }, [incomeTotal, deductTotal]);

  return (
    <>
      <Box
        sx={{
          width: "766px",
          height: "24px",
          textAlign: "left",
          padding: "20px",
          fontWeight: 600,
        }}
      >
        Income Details *
      </Box>
      <Box
        sx={{
          height: "236px",
          width: "766px",
          margin: "0px 20px 0px 20px",
          border: " 1px solid #f5f5f8",
          boxShadow: "0 4px 9px 0 rgb(28 29 83 / 4%)",
        }}
      >
        <Box
          sx={{
            width: "766px",
            display: "flex",
          }}
        >
          <TableContainer component={Paper} sx={{ width: "50%" }}>
            <Table
              sx={{ width: "100%", backgroundColor: "" }}
              aria-label="simple table"
            >
              {/* Earning Heading */}
              <TableHead sx={{}}>
                <TableRow>
                  <TableCell
                    sx={{
                      padding: "12px 20px",
                      fontWeight: 600,
                      height: "28px",
                      fontSize: "17px",
                    }}
                  >
                    Earnings
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      padding: "12px 0px",
                      paddingRight: "27px",
                      fontWeight: "600",
                      height: "28px",
                      fontSize: "15px",
                    }}
                  >
                    Amount
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {/* Row 1 */}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* Basic */}
                  <TableCell
                    sx={{
                      border: "none",
                      height: "28px",
                      padding: " 10px 20px 3px 20px",
                      width: "80%",
                    }}
                  >
                    {/* <Typography>Basic</Typography> */}
                    <input
                      style={{
                        display: "block",
                        height: "28px",
                        fontSize: "16px",
                        width: "100%",
                        outline: "none",
                        border: "none",
                      }}
                      type="text"
                      placeholder="Basic"
                      readOnly={true}
                      name="Basic"
                    />
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ border: "none", height: "28px", padding: "0px" }}
                  >
                    <input
                      style={{
                        display: "block",
                        height: "28px",
                        fontSize: "20px",
                        fontWeight: "500",
                        border: "none",
                        borderBottom: "1px dashed #e1ecfd",
                        width: "100%",
                        outline: "none",
                      }}
                      type="number"
                      placeholder="0"
                      name="Basic"
                      onChange={inputEvent}
                      value={incomeDetails.Basic}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "none" }}></TableCell>
                </TableRow>
                {/* Row 2 */}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* House Rent Allowance */}
                  <TableCell
                    sx={{
                      border: "none",
                      height: "28px",
                      padding: " 0px 20px 3px 20px",
                      width: "80%",
                    }}
                  >
                    <input
                      style={{
                        display: "block",
                        height: "28px",
                        fontSize: "16px",
                        width: "100%",
                        outline: "none",
                        border: "none",
                      }}
                      type="text"
                      placeholder="House Rent Allowance"
                      readOnly={true}
                      name="HouseRent"
                    />
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ border: "none", height: "28px", padding: "0px" }}
                  >
                    <input
                      style={{
                        display: "block",
                        height: "28px",
                        fontSize: "20px",
                        fontWeight: "500",
                        border: "none",
                        borderBottom: "1px dashed #e1ecfd",
                        width: "100%",
                        outline: "none",
                      }}
                      type="number"
                      placeholder="0"
                      name="HouseRent"
                      onChange={inputEvent}
                      value={incomeDetails.HouseRent}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "none" }}></TableCell>
                </TableRow>
              </TableBody>
              {/* <AddEarning /> */}

              {/* add another field */}

              <TableBody>
                <TableRow>
                  <TableCell
                    align="right"
                    sx={{ border: "none", height: "28px", padding: "0px" }}
                  >
                    <input
                      style={{
                        display: "block",
                        height: "28px",
                        fontSize: "16px",
                        paddingLeft: "20px",
                        width: "100%",
                        outline: "none",
                        border: "none",
                      }}
                      type="text"
                      placeholder="Earning Name"
                      name="Cname"
                    />
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{ border: "none", height: "28px", padding: "0px" }}
                  >
                    <input
                      style={{
                        display: "block",
                        height: "28px",
                        fontSize: "20px",
                        fontWeight: "500",
                        border: "none",
                        borderBottom: "1px dashed #e1ecfd",
                        width: "100%",
                        outline: "none",
                      }}
                      type="number"
                      placeholder="0"
                      name="Cname"
                      // onChange={inputEvent}
                      //   value={row.value}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "none" }}></TableCell>
                </TableRow>
              </TableBody>

              {/* Add Earning Button */}
              <Box
                sx={{
                  color: "blue",
                  float: "left",
                  padding: " 10px 20px 3px 20px",
                  "&:hover": {
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}
              >
                {" "}
                <FeatherIcon
                  icon="plus-circle"
                  color="blue"
                  size="16px"
                  sx={{}}
                />{" "}
                Add Earnings
              </Box>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ width: "50%" }}>
            <Table
              sx={{ width: "100%", backgroundColor: "" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      padding: "12px 20px",
                      fontWeight: 500,
                      height: "28px",
                      fontSize: "17px",
                    }}
                  >
                    Deductions
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      padding: "12px 0px",
                      paddingRight: "27px",
                      fontWeight: "500",
                      height: "28px",
                      fontSize: "15px",
                    }}
                  >
                    Amount
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      border: "none",
                      height: "28px",
                      padding: " 10px 20px 3px 20px",
                      width: "80%",
                    }}
                  >
                   
                    <input
                      style={{
                        display: "block",
                        height: "28px",
                        fontSize: "16px",
                        width: "100%",
                        outline: "none",
                        border: "none",
                      }}
                      type="text"
                      placeholder="Income Tax"
                      readOnly={true}
                      name="Basic"
                    />
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ border: "none", height: "28px", padding: "0px" }}
                  >
                    <input
                      style={{
                        display: "block",
                        height: "28px",
                        fontSize: "20px",
                        fontWeight: "500",
                        border: "none",
                        borderBottom: "1px dashed #e1ecfd",
                        width: "100%",
                        outline: "none",
                      }}
                      type="number"
                      placeholder="0"
                      name="IncomeTax"
                      onChange={inputEventOne}
                      value={deductDetails.IncomeTax}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "none" }}></TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      border: "none",
                      height: "28px",
                      padding: " 10px 20px 3px 20px",
                      width: "80%",
                    }}
                  >
                    <Typography>provident Fund</Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ border: "none", height: "28px", padding: "0px" }}
                  >
                    <input
                      style={{
                        display: "block",
                        height: "28px",
                        fontSize: "20px",
                        fontWeight: "500",
                        border: "none",
                        borderBottom: "1px dashed #e1ecfd",
                        width: "100%",
                        outline: "none",
                      }}
                      type="number"
                      placeholder="0"
                      name="providentFund"
                      onChange={inputEventOne}
                      value={deductDetails.providentFund}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "none" }}></TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow>
                  <TableCell
                    align="right"
                    sx={{ border: "none", height: "28px", padding: "0px" }}
                  >
                    <input
                      style={{
                        display: "block",
                        height: "28px",
                        fontSize: "16px",
                        paddingLeft: "20px",
                        width: "100%",
                        outline: "none",
                        border: "none",
                      }}
                      type="text"
                      placeholder="Earning Name"
                      name="Cname"
                      // onChange={inputEvent}
                      //   value={row.value}
                    />
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{ border: "none", height: "28px", padding: "0px" }}
                  >
                    <input
                      style={{
                        display: "block",
                        height: "28px",
                        fontSize: "20px",
                        fontWeight: "500",
                        border: "none",
                        borderBottom: "1px dashed #e1ecfd",
                        width: "100%",
                        outline: "none",
                      }}
                      type="number"
                      placeholder="0*"
                      name="Cname"
                      // onChange={inputEvent}
                      //   value={row.value}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "none" }}></TableCell>
                </TableRow>
              </TableBody>

              <Box
                sx={{
                  color: "blue",
                  float: "left",
                  padding: " 10px 20px 3px 20px",
                  "&:hover": {
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}
              >
                {" "}
                <FeatherIcon
                  icon="plus-circle"
                  color="blue"
                  size="16px"
                  sx={{}}
                />{" "}
                Add Deduction
              </Box>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              height: "50px",
              width: "50%",
              backgroundColor: "yellow",
            }}
          >
            <TableHead sx={{ backgroundColor: "#f9f9fb" }}>
              <TableRow>
                <TableCell
                  sx={{
                    padding: "12px 20px",
                    fontWeight: 600,
                    height: "28px",
                    fontSize: "17px",
                    width: "50%",
                  }}
                >
                  Gross Earnings
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    padding: "12px 0px",
                    paddingRight: "27px",
                    fontWeight: "600",
                    height: "28px",
                    fontSize: "15px",
                    width: "50%",
                  }}
                >
                  Rs. <span>{incomeTotal}</span>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
          </Box>
          <Box
            sx={{
              height: "50px",
              width: "50%",
              backgroundColor: "yellow",
            }}
          >
            <TableHead
              sx={{ backgroundColor: "#f9f9fb", borderLeft: "9px solid grey" }}
            >
              <TableRow>
                <TableCell
                  sx={{
                    padding: "12px 20px",
                    fontWeight: 600,
                    height: "28px",
                    fontSize: "17px",
                    width: "100%",
                  }}
                >
                  Total Deduction
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    padding: "12px 0px",
                    paddingRight: "27px",
                    fontWeight: "600",
                    height: "28px",
                    fontSize: "15px",
                  }}
                >
                  Rs.<span>{deductTotal}</span>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "51px",
          width: "714px",
          borderRadius: "10px",
          margin: "60px 20px 0px",
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f9f9fb",
          borderLeft: "6px solid #e3e3eb",
          borderRight: "6px solid #e3e3eb",
        }}
      >
        <Box
          sx={{
            height: "32px",
            width: "714px",
            fontSize: "20px",
          }}
        >
          Total Net Payable : Rs.{TotalNet}
        </Box>
        <Box sx={{ fontSize: "12px", color: "#828284", letterSpacing: ".7px" }}>
          ( Total Net Payable = Gross Earnings - Total Deductions )
        </Box>
      </Box>
    </>
  );
};

export default Incomedetail;
