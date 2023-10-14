// import Header from "../components/Header";
// import Fonts from "../Fonts";
import { Outlet } from "react-router-dom";
import useToken from "../hooks/useToken";

function Layout() {
  const [token, setToken] = useToken();
  return (
    <>
      {/* <Fonts /> */}
      {/* <Header token={token} /> */}
      <Outlet context={[token, setToken]} />
    </>
  );
}

export default Layout;
