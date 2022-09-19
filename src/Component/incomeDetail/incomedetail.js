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

const Incomedetail = () => {
  const [incomeDetails, setIncomeDetails] = useState({
    Basic: "",
    HouseRent: "",
  });
  const inputEvent = (event) => {
    console.log(event.target.value);

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
    Total(incomeDetails);
  }, [incomeDetails]);

  const [incomeTotal, setIncomeTotal] = useState(0);

  const Total = (details) => {
    let total = 0;

    Object.values(details).forEach((income) => {
      total += Number(income);
    });

    setIncomeTotal(total);
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
            height: "185.6px",
            width: "766px",
            // backgroundColor: "yellow",
            display: "flex",
          }}
        >
          <TableContainer component={Paper} sx={{ width: "50%" }}>
            <Table
              sx={{ width: "100%", backgroundColor: "" }}
              aria-label="simple table"
            >
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
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {/* Row 1 */}
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
                    <Typography>Basic</Typography>
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
                  <TableCell
                    sx={{
                      border: "none",
                      height: "28px",
                      padding: " 10px 20px 3px 20px",
                      width: "80%",
                    }}
                  >
                    <Typography>House Rent Allowance</Typography>
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
                Add Earning
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
                    <Typography>Income Tax</Typography>
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
                  Rs.<span>0</span>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Incomedetail;
