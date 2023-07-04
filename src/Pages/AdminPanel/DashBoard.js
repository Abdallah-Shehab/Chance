import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

const Dash = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "7%",
          right: "10%",
          padding: "30px",
          height: "100%",
          zIndex: "-1000",
        }}
      >
        <SideNav
          expanded="True"
          style={{ backgroundColor: "#3b3b3b", paddingTop: "30px" }}
        >
          {/* <SideNav.Toggle
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        /> */}
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>

              <NavText>
                <a
                  href="/dashboard/manageposts"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Manage Posts
                </a>
              </NavText>
            </NavItem>

            <NavItem eventKey="placed orders">
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>placed orders</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    </>
  );
};

// const DashBoard = withRouter(Dash);
export default Dash;
