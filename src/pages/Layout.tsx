import { Outlet } from "react-router-dom";
import useToken from "../hooks/useToken";
import Header from "../components/Header";
import { Box } from "@chakra-ui/react";

function Layout() {
  const [token, setToken] = useToken();
  return (
    <Box bg="gray.100">
      <Header token={token} />
      <Outlet context={[token, setToken]} />
    </Box>
  );
}

export default Layout;
