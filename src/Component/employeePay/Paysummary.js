import { Box } from "@mui/system";
import React, { useState } from "react";
// import Addanother from "./addAnother";
import FeatherIcon from "feather-icons-react";
import { Grid } from "@mui/material";

const Paysummary = () => {
  const [PaySummary, setPaySummary] = useState({
    Ename: "",
    PayPeriod: "",
    LossPayDays: "",
    EId: "",
    paidDays: "",
    PayDates: "",
  });
  const inputEvent = (event) => {
    console.log(event.target.value);

    const { value, name } = event.target;

    setPaySummary((preValue) => {
      if (name === "Ename") {
        return {
          Ename: value,
          PayPeriod: preValue.PayPeriod,
          LossPayDays: preValue.LossPayDays,
          Eid: preValue.Eid,
          paidDays: preValue.PaidDays,
          PayDates: preValue.PayDates,
        };
      } else if (name === "PayPeriod") {
        return {
          Ename: preValue.Ename,
          PayPeriod: value,
          LossPayDays: preValue.LossPayDays,
          Eid: preValue.Eid,
          paidDays: preValue.PaidDays,
          PayDates: preValue.PayDates,
        };
      } else if (name === "LossPayDays") {
        return {
          Ename: preValue.Ename,
          PayPeriod: value.PayPeriod,
          LossPayDays: value,
          Eid: preValue.Eid,
          paidDays: preValue.PaidDays,
          PayDates: preValue.PayDates,
        };
      } else if (name === "Eid") {
        return {
          Ename: preValue.Ename,
          PayPeriod: value.PayPeriod,
          LossPayDays: preValue.Loss,
          Eid: value,
          paidDays: preValue.PaidDays,
          PayDates: preValue.PayDates,
        };
      } else if (name === "paidDays") {
        return {
          Ename: preValue.Ename,
          PayPeriod: value.PayPeriod,
          LossPayDays: preValue.LossPayDays,
          Eid: preValue.Eid,
          paidDays: value,
          PayDates: preValue.PayDates,
        };
      } else if (name === "PayDates") {
        return {
          Ename: preValue.Ename,
          PayPeriod: value.PayPeriod,
          LossPayDays: preValue.LossPayDays,
          Eid: preValue.Eid,
          paidDays: preValue.paidDays,
          PayDates: value,
        };
      }
    });
  };

  const [inputList, setinputList] = useState([]);

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;

    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
  };

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleaddclick = () => {
    setinputList([...inputList, { name: "", value: "" }]);
  };

  return (
    <Box
      sx={{
        // height: "236.20px",
        width: "766px",
        // backgroundColor: "purple",
        padding: "20px",
      }}
    >
      <span style={{ fontWeight: 600, float: "left", marginBottom: "10px" }}>
        Employee Pay Summary *
      </span>

      <Box
        sx={{
          height: "114px",
          width: "766px",
          display: "flex",
          marginBottom: " 15px",
          paddingTop: "20px",
          borderTop: "1px solid #f3f3f6",
          // backgroundColor:"red"
        }}
      >
        <Box
          sx={{
            height: "114px",
            width: "50%",
            textAlign: "left",
          }}
        >
          <Box sx={{ width: "100%", height: "calc(100%/3)", display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <lable
                style={{
                  padding: "10px 0px 10px 0px",
                }}
              >
                Empolyee Name
              </lable>
              <span style={{ float: "right", paddingRight: "10px" }}>:</span>
            </Box>
            <Box sx={{ width: "50%" }}>
              <input
                style={{
                  width: "100%",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "400",
                  border: "none",
                  borderBottom: "1px dashed #e1ecfd",
                  padding: "6px 0px 10px 0px",
                }}
                type="text"
                placeholder="Eg: Krishnan"
                name="Ename"
                onChange={inputEvent}
                value={PaySummary.Ename}
              />
            </Box>
          </Box>
          <Box sx={{ width: "100%", height: "calc(100%/3)", display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <lable
                style={{
                  padding: "10px 0px 10px 0px",
                }}
              >
                Pay Period
              </lable>
              <span style={{ float: "right", paddingRight: "10px" }}>:</span>
            </Box>
            <Box sx={{ width: "50%" }}>
              <input
                style={{
                  width: "100%",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "400",
                  border: "none",
                  borderBottom: "1px dashed #e1ecfd",
                  padding: "6px 0px 10px 0px",
                }}
                type="date"
                placeholder="Eg: Krishnan"
                name="PayPeriod"
                onChange={inputEvent}
                value={PaySummary.PayPeriod}
              />
            </Box>
          </Box>
          <Box sx={{ width: "100%", height: "calc(100%/3)", display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <lable
                style={{
                  padding: "10px 0px 10px 0px",
                }}
              >
                Loss of pay Days
              </lable>
              <span style={{ float: "right", paddingRight: "10px" }}>:</span>
            </Box>

            <Box sx={{ width: "50%" }}>
              <input
                style={{
                  width: "100%",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "400",
                  border: "none",
                  borderBottom: "1px dashed #e1ecfd",
                  padding: "6px 0px 10px 0px",
                }}
                type="number"
                placeholder="0"
                name="LossPayDays"
                onChange={inputEvent}
                value={PaySummary.LossPayDays}
              />
            </Box>
          </Box>
          {/* <Box
                sx={{
                  color: "blue",
                  float: "left",
                  padding: " 10px 20px 3px 0px",
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
                Add another field
              </Box> */}
        </Box>

        <Box
          sx={{
            height: "114px",
            width: "50%",
            textAlign: "left",
            marginLeft: "80px",
          }}
        >
          <Box sx={{ width: "100%", height: "calc(100%/3)", display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <lable
                style={{
                  padding: "10px 0px 10px 0px",
                }}
              >
                Employee ID
              </lable>
              <span style={{ float: "right", paddingRight: "10px" }}>:</span>
            </Box>
            <Box sx={{ width: "50%" }}>
              <input
                style={{
                  width: "100%",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "400",
                  border: "none",
                  borderBottom: "1px dashed #e1ecfd",
                  padding: "6px 0px 10px 0px",
                }}
                type="text"
                placeholder="Eg: 1234"
                name="Eid"
                onChange={inputEvent}
                value={PaySummary.Eid}
              />
            </Box>
          </Box>
          <Box sx={{ width: "100%", height: "calc(100%/3)", display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <lable
                style={{
                  padding: "10px 0px 10px 0px",
                }}
              >
                Paid Days
              </lable>
              <span style={{ float: "right", paddingRight: "10px" }}>:</span>
            </Box>
            <Box sx={{ width: "50%" }}>
              <input
                style={{
                  width: "100%",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "400",
                  border: "none",
                  borderBottom: "1px dashed #e1ecfd",
                  padding: "6px 0px 10px 0px",
                }}
                type="number"
                placeholder="Eg:22"
                name="paidDays"
                onChange={inputEvent}
                value={PaySummary.paidDays}
              />
            </Box>
          </Box>
          <Box sx={{ width: "100%", height: "calc(100%/3)", display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <lable
                style={{
                  padding: "10px 0px 10px 0px",
                }}
              >
                Pay Dates
              </lable>
              <span style={{ float: "right", paddingRight: "10px" }}>:</span>
            </Box>
            <Box sx={{ width: "50%" }}>
              <input
                style={{
                  width: "100%",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "400",
                  border: "none",
                  borderBottom: "1px dashed #e1ecfd",
                  padding: "6px 0px 10px 0px",
                }}
                type="date"
                placeholder="0"
                name="PayDates"
                onChange={inputEvent}
                value={PaySummary.PayDates}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ height: "30px" }}></Box>

      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ width: "100%", display: "flex" }}>
          {/* <Addanother /> */}
          <Grid container>
            {inputList.map((x, index) => (
              <Grid xs={6} sx={{ display: "flex", "&:hover": {} }}>
                <input
                  style={{
                    width: "45%",
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "400",
                    border: "none",
                    borderBottom: "1px dashed #e1ecfd",
                    padding: "10px 0px 10px 0px",
                  }}
                  type="text"
                  placeholder="Eg: Krishnan"
                  name="Cname"
                  onChange={(e) => handleinputchange(e, index)}
                />
                <input
                  style={{
                    width: "45%",
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "400",
                    border: "none",
                    borderBottom: "1px dashed #e1ecfd",
                    padding: "10px 0px 10px 0px",
                  }}
                  type="text"
                  placeholder="Eg: Krishnan"
                  name="Cname"
                  onChange={(e) => handleinputchange(e, index)}
                />
                {/* {inputList.length!==1 && */}
                <Box
                  // onClick={()=>handleremove(index)}
                  sx={{
                    width: "10%",
                    // backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FeatherIcon icon="minus-circle" color="red" size="16px" />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* 
      {inputList.length -1=== index && */}

      <Box
        onClick={handleaddclick}
        sx={{
          color: "blue",
          float: "left",
          padding: " 10px 20px 3px 0px",
          "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
          },
        }}
      >
        <FeatherIcon icon="plus-circle" color="blue" size="16px" sx={{}} />
        Add another field
      </Box>

      <Box sx={{ width: "50%" }}></Box>
    </Box>
  );
};

export default Paysummary;
