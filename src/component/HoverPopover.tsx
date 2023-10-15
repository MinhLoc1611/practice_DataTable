import React from "react";
import { Box, IconButton, Popover, Typography } from "@mui/material";

const TypoPopover = {
    p: 1,
    bgcolor: "secondary.main",
    color: "secondary.contrastText"
}

interface TypeProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any,
    name: string
}

export default function ButtonPopover({icon, name}:TypeProps) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Box>
          <IconButton
            sx={{ mx: 2 }}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            {icon}
          </IconButton>
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography sx={TypoPopover}>{name}</Typography>
          </Popover>
        </Box>
  )
}
