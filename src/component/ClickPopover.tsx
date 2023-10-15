import * as React from "react";
import {
  Box,
  IconButton,
  Paper,
  Popover,
  Typography
} from "@mui/material";
import { Merge } from "@mui/icons-material";

const TypoHover = {
    p: 2,
    cursor:'pointer',
    borderRadius:2,
    ":hover": {
      bgcolor: "#F0EEFD",
    }
}

export default function DataPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <Merge sx={{ transform: "rotate(180deg)" }} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Paper sx={{ borderRadius: 2, p: 1 }}>
          <Typography sx={TypoHover}>View cohort</Typography>
          <Typography sx={TypoHover}>Save cohort</Typography>
          <Typography sx={TypoHover}>Export cohort</Typography>
        </Paper>
      </Popover>
    </Box>
  );
}
