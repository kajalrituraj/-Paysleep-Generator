import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FeatherIcon from "feather-icons-react";

const Incomedetail = () => {
  const [incomeDetails, setIncomeDetails] = useState([
    { placeholder: "Basic", value: 0.0 },
    { placeholder: "House Rent Allowance", value: 0.0 },
  ]);

  const [earningTotal, setEarningTotal] = useState(0.0);

  const inputChange = (event, index) => {
    const { name, value } = event.target;

    const list = [...incomeDetails];
    list[index][name] = value;
    setIncomeDetails(list);
  };

  const handleAddNewEarning = () => {
    setIncomeDetails([
      ...incomeDetails,
      { placeholder: "Earning Name", value: 0.0 },
    ]);
  };

  useEffect(() => {
    const list = [...incomeDetails];
    let total = 0;
    list.map((item) => {
      total += parseFloat(item["value"]);
      return total;
    });
    setEarningTotal(total);
  }, [incomeDetails]);

  const [deductDetails, setDeductDetails] = useState([
    { placeholder: "Basic", value: 0.0 },
    { placeholder: "Provident Fund", value: 0.0 },
  ]);

  const [deductionTotal, setDeductionTotal] = useState(0.0);

  const inputChangeDeduction = (event, index) => {
    const { name, value } = event.target;

    const list = [...deductDetails];
    list[index][name] = value;
    setDeductDetails(list);
  };

  const handleAddNewDeduction = () => {
    setDeductDetails([
      ...deductDetails,
      { placeholder: "Deduction Name", value: 0.0 },
    ]);
  };

  useEffect(() => {
    const list = [...deductDetails];
    let total = 0;
    list.map((item) => {
      total += parseFloat(item["value"]);
      return total;
    });
    setDeductionTotal(total);
  }, [deductDetails]);



  const [TotalNet, setTotalNet] = useState(0);
  useEffect(() => {
    setTotalNet(earningTotal - deductionTotal);
  }, [earningTotal, deductionTotal]);


  // create new sytate for net payable and initialize with 0
  // useeffect which changes on earningTotal or deductionTotal
  // In useeffect calculate earning - deductionTotal
  // and then set setnetpayable with calculated value

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
                {incomeDetails.map((item, index) => (
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
                        readOnly={index < 2 ? true : false}
                        placeholder={item["placeholder"]}
                        name="placeholder"
                        onChange={function (event) {
                          inputChange(event, index);
                        }}
                        value={item["placeholder"]}
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
                        placeholder={item["value"]}
                        name="value"
                        onChange={(event) => inputChange(event, index)}
                        value={item["value"]}
                      />
                    </TableCell>
                    <TableCell sx={{ border: "none" }}></TableCell>
                  </TableRow>
                ))}
              </TableBody>

              {/* Add Earning Button */}
              <Box
                onClick={handleAddNewEarning}
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
                <FeatherIcon icon="plus-circle" color="blue" size="16px" /> Add
                Earnings
              </Box>
            </Table>
          </TableContainer>

          <TableContainer component={Paper} sx={{ width: "50%" }}>
            <Table
              sx={{ width: "100%", backgroundColor: "" }}
              aria-label="simple table"
            >
              {/* Deductions Heading */}
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
                {deductDetails.map((item, index) => (
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
                        readOnly={index < 2 ? true : false}
                        placeholder={item["placeholder"]}
                        name="placeholder"
                        onChange={function (event) {
                          inputChangeDeduction(event, index);
                        }}
                        value={item["placeholder"]}
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
                        placeholder={item["value"]}
                        name="value"
                        onChange={(event) => inputChangeDeduction(event, index)}
                        value={item["value"]}
                      />
                    </TableCell>
                    <TableCell sx={{ border: "none" }}></TableCell>
                  </TableRow>
                ))}
              </TableBody>


              <Box
                onClick={handleAddNewDeduction}
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

        {/* Gross Earning Amount  */}

        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              height: "50px",
              width: "50%",
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
                  Rs. <span>{earningTotal}</span>
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
                  Rs.<span>{deductionTotal}</span>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
          </Box>
        </Box>
      </Box>

      {/* Total Net Payable */}
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
