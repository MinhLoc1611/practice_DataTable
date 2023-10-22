/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Popover,
  OutlinedInput,
  Typography,
  InputAdornment,
} from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import HoverSpend from "./HoverSpend";

const ButtonStyle = {
  color: "#808192",
  bgcolor:'#F3F3F8',
  borderColor:'transparent',
  textTransform: "capitalize",
  mx: 0.5,
  p:0.9
};

const ButtonActive = {
  color: "secondary.main",
  bgcolor:'#F3F3F8',
  borderColor:'transparent',
  textTransform: "capitalize",
  mx: 0.5,
  p:0.9
};

export default function SpendFilter({
  name,
  setSearch,
  setSorting
}: {
  name: string;
  setSearch: any;
  setSorting: any;
}) {
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

  const [field, setField] = useState<string>("get");
  const [value, setValue] = useState<string>('');

  return (
    <Box>
      <HoverSpend
        handleClick={handleClick}
        name={name}
      />
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
          <Box p={1}>
            <Box mb={1}>
              <Button onClick={()=>{
                setSorting([{ columnName: 'spend', direction: 'asc' }])
              }} sx={{ color: "black" }}>
                ASC <ArrowUpward sx={{ ml: 1 }} />
              </Button>
              <Button onClick={()=>{
                setSorting([{ columnName: 'spend', direction: 'desc' }])
              }} sx={{ color: "black" }}>
                DSC <ArrowDownward sx={{ ml: 1 }} />
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography mr={1}>{name}</Typography>
              <Button
                variant="outlined"
                sx={field === 'exactly' ? ButtonActive : ButtonStyle}
                onClick={() => {
                  setField("exactly");
                }}
              >
                exactly
              </Button>
              <Button
                variant="outlined"
                sx={field === 'more' ? ButtonActive : ButtonStyle}
                onClick={() => {
                  setField("more");
                }}
              >
                more than
              </Button>
              <Button
                variant="outlined"
                sx={field === 'less' ? ButtonActive : ButtonStyle}
                onClick={() => {
                  setField("less");
                }}
              >
                less than
              </Button>
              <OutlinedInput
                sx={{ width: "25%", bgcolor:'#F3F3F8' }}
                size="small"
                type="number"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                onChange={(e) => setValue(e.target.value)}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Button onClick={()=>{
                setSearch({name: 'get', value: null})
                setSorting([])
              }}>Cancel</Button>
              <Button onClick={()=>{
                setSearch({name: field, value: value})
              }}>
                Apply
              </Button>
            </Box>
          </Box>
        </Paper>
      </Popover>
    </Box>
  );
}
