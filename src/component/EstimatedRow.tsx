import { Box } from "@mui/material";

interface Props {
  low: number;
  medium: number;
  high: number;
}

const MyBox = {
  mx: 0.2,
  borderRadius: 2,
};

export default function EstimatedRow({ low, medium, high }: Props) {
  const perLow = (low * 100) / (low + medium + high);
  const perMedium = (medium * 100) / (low + medium + high);
  const perHigh = (high * 100) / (low + medium + high);
  return (
    <>
      {low === 0 ? (
        <Box sx={{width:150, height:10, borderRadius:2, bgcolor:'#4C557333'}}></Box>
      ) : (
        <Box display={"flex"} width={"150px"} height={"10px"}>
          <Box sx={MyBox} width={`${perLow}%`} bgcolor={"#61A9FF"}></Box>
          <Box sx={MyBox} width={`${perMedium}%`} bgcolor={"#D6FF60"}></Box>
          <Box sx={MyBox} width={`${perHigh}%`} bgcolor={"#8960FF"}></Box>
        </Box>
      )}
    </>
  );
}
