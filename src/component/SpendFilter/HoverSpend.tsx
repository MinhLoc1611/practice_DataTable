import React from "react";
import { Box, Button, Popover, Typography } from "@mui/material";

export default function HoverSpend({
  handleClick,
  name,
}: {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClick: any;
  name: string;
}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <Box onClick={handleClick}>
      <Button
        sx={{
          color: "black",
          textTransform: "capitalize",
        }}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {name}
      </Button>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography
          sx={{
            p: 0.5,
            bgcolor: "secondary.main",
            color: "secondary.contrastText",
          }}
        >
          Filter
        </Typography>
      </Popover>
    </Box>
  );
}
