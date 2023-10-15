import {
  Add,
  ArrowDownward,
  ArrowOutward,
  Cached,
  FilterAltOutlined,
  Link,
  MoreHoriz,
} from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import ButtonPopover from "../../component/HoverPopover";
import ReactGrid from "./ReactGrid/ReactGrid";

const BoxCenter = {
  display: "flex",
  alignItems: "center",
};

export default function DataTable() {
  return (
    <Box p={2}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Box sx={BoxCenter}>
          <Typography>
            <b>Cross-channel analysis</b>
          </Typography>
          <ButtonPopover
            icon={<Link sx={{ transform: "rotate(45deg)" }} />}
            name={"Copy Link"}
          />
          <IconButton>
            <ArrowOutward />
          </IconButton>
        </Box>
        <Box sx={BoxCenter}>
          <ButtonPopover icon={<Cached />} name={"Refresh"} />
          <IconButton sx={{ mx: 2 }}>
            <ArrowDownward />
          </IconButton>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Box>
      </Box>
      <Box sx={BoxCenter}>
        <FilterAltOutlined />
        <Add sx={{ ml: 3, mr: 1 }} />
        <Typography>Filter</Typography>
      </Box>
      <Typography sx={{ mt: 3, mb: 2, color: "grey.700" }}>
        Showing <b>198</b> from <b>893</b> results
      </Typography>
      <ReactGrid/>
    </Box>
  );
}
