import React from "react";
import { Box } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const AddEarning = () => {
  const rows = [{ earningType: "Basic", amount: "5" }];
  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.earningType}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell
            component="th"
            scope="row"
            sx={{
              border: "none",
              height: "28px",
              paddingBottom: "0px",
              paddingLeft: "20px",
            }}
          >
            {row.earningType}
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
                width: "50%",
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
      ))}
    </TableBody>
  );
};

export default AddEarning;
