import { Fragment } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <NavBar />
        <main>{props.children}</main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
