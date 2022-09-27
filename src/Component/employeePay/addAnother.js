import { Box } from "@mui/system";
import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";

const Addanother = () => {
  const [inputList, setinputList] = useState([
    {
      name1: "",
      value1: "",
    },
  ]);

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;

    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
  };

  const handleaddclick = () => {
    setinputList([...inputList, { name: "", value: "" }]);
  };

  return (
    <>
      {inputList.map((x, index) => (
        <>
          <Box sx={{ display: "flex", "&:hover": {} }}>
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
              // value={Company.Cname}
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
              // value={Company.Cname}
            />
            <Box
              sx={{
                width: "10%",
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                //   visibility: "hidden",
              }}
            >
              <FeatherIcon icon="minus-circle" color="red" size="16px" />
            </Box>
          </Box>
        </>
      ))}
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
        Add another field{" "}
      </Box>
    </>
  );
};

export default Addanother;
