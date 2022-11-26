import { Fragment } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Background from "./../../assets/background.jpg";

const Layout = (props) => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100vh",

          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
