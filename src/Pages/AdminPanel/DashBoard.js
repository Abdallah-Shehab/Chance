/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

const Dash = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      {/* Sidebar */}
      <div
        style={{
          // backgroundColor: "#ddd",
          // color: "#000",

          padding: "10px",

          zIndex: "-100",
        }}
      >
        {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            navigate(itemId);
          }}
          items={[
            {
              title: "Manage",

              // Optional
              itemId: "/dashboard/manageposts",

              elemBefore: () => <ManageSearchIcon />,
            },
            {
              title: "Add new Job",
              itemId: "/Jobs/addjob",
              // Optional

              elemBefore: () => <ManageSearchIcon />,
            },
            // {
            //   title: "About",

            //   elemBefore: () => <Icon name="user" />,
            //   subNav: [
            //     {
            //       title: "Projects",
            //       itemId: "/about/projects",
            //       // Optional
            //       elemBefore: () => <Icon name="cloud-snow" />,
            //     },
            //     {
            //       title: "Members",
            //       itemId: "/about/members",
            //       elemBefore: () => <Icon name="coffee" />,
            //     },
            //   ],
            // },
            // {
            //   title: "Another Tab",
            //   itemId: "/another",
            //   subNav: [
            //     {
            //       title: "Teams",
            //       itemId: "/another/teams",
            //       // Optional
            //       // elemBefore: () => <Icon name="calendar" />
            //     },
            //   ],
            // },
          ]}
        />

        <div className="absolute bottom-0 w-full my-8">
          {/* <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "Settings",
                itemId: "/settings",
                elemBefore: () => <Icon name="activity" />,
              },
            ]}
            // onSelect={({ itemId }) => {
            //   history.push(itemId);
            // }}
          /> */}
        </div>
      </div>
    </>
  );
};
export default Dash;
