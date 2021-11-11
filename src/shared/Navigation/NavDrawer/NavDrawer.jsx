import "./NavDrawer.css";
import NavItems from "../NavItems/NavItems";

const listStyleOveride = {
  display: "block",
  marginLeft: "0"
};

const listItemStyleOveride = {
  marginTop: "3rem",
  fontSize: "1.4rem",
};

const NavDrawer = (props) => {
  return (
    <div className="nav-drawer">
      <div className="nav-drawer-content-wrapper">
        <div className="nav-drawer-content">
          <NavItems
            listStyle={listStyleOveride}
            listItemStyle={listItemStyleOveride}
          />
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
