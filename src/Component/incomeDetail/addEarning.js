import React from "react";
import { Box } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const AddEarning = () => {
  return (
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
  );
};

export default AddEarning;
