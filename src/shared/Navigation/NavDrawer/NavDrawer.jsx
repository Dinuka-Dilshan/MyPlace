import "./NavDrawer.css";
import NavItems from "../NavItems/NavItems";
import Logo from "../Logo/Logo";

const listStyleOveride = {
  display: "block",
  marginLeft:'0'
};

const listItemStyleOveride = {
  marginTop: "3rem",
  fontSize: "1rem"
  
};

const logoWrapperOverride = {
    marginLeft:'1.5rem'
}

const NavDrawer = (props) => {
  return (
    <div className="nav-drawer">
      <Logo logoWrapper={logoWrapperOverride}/>
      <NavItems
        listStyle={listStyleOveride}
        listItemStyle={listItemStyleOveride}
      />
    </div>
  );
};

export default NavDrawer;
