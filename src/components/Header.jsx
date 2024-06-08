import { Typography, Box, useTheme } from "@mui/material";

import { useStateContext } from "../context/ContextProvider";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
const {currentColor}=useStateContext()
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={currentColor}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={currentColor}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;