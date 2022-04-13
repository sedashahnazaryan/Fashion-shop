import React from "react";
import { createMedia } from "@artsy/fresnel";
import {Container,Icon,Image,Menu,Sidebar,Dropdown,} from "semantic-ui-react";
import { Outlet, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState,useEffect } from "react";
import "./Header.css";
import { nanoid } from "nanoid";
import logo from "../../img/img6.jpg";

             //     img dnelu
// import mainLogo from'./logoWhite.png';
//then in the render function of Jsx insert the mainLogo variable
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="nav" style={nbStyle}>
//         <div className="container">
//           //right below here
//           <img  src={mainLogo} style={nbStyle.logo} alt="fireSpot"/>
//         </div>
//       </nav>
//     );
//   }
// }


const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920,
  },
});
const { Media, MediaContextProvider } = AppMedia;

const NavBarMobile = (props) => {
  const { children, leftItems, onPusherClick, onToggle, rightItems, visible } =
    props;

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        items={leftItems}
        inverted
        vertical
        visible={visible}
        key={nanoid()}
      />
      <Sidebar.Pusher dimmed={visible} onClick={onPusherClick}>
        <Menu fixed="top" inverted>
          <Menu.Item key={nanoid()}>
          <Image as={Link} to="/" size="mini"  src={logo} className="logoIcon" />
            {/* <Image size="mini" src="https://react.semantic-ui.com/logo.png" /> */}
          </Menu.Item>
          <Menu.Item onClick={onToggle} key={nanoid()}>
            <Icon name="sidebar" />
          </Menu.Item>

          <Menu.Menu position="right" key="rightItems">
            {rightItems.map((item, index) => {
              if (item.children) {
                return (
                  <Menu.Item key={`rightParams${index}`}>
                    {item.children}
                  </Menu.Item>
                );
              }
              return <Menu.Item key={index} {...item.link} />;
            })}
          </Menu.Menu>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const NavBarDesktop = (props) => {
  const { leftItems, rightItems } = props;

  return (
    <Menu fixed="top" inverted>
      <Menu.Item key={nanoid()}>
      <Image as={Link} to="/" size="mini" src={logo} className="logoIcon" />
        {/* <Image size="mini"src="https://freedesignfile.com/upload/2020/03/Fashion-shop-logo-vector.jp" */}
        {/* /> */}
      </Menu.Item>

      {leftItems.map((item, index) => (
        <Menu.Item {...item} key={index} />
      ))}

      <Menu.Menu position="right" key="rightItems">
        {rightItems.map((item, index) => {
          if (item.children) {
            return (
              <Menu.Item key={`rightParams${index}`}>{item.children}</Menu.Item>
            );
          }
          return <Menu.Item key={index} {...item.Link} />;
        })}
      </Menu.Menu>
    </Menu>
  );
};


// class NavBar extends React.Component {
//   state = {
//     visible: false,
//   };

//   handlePusher = () => {
//     const { visible } = this.state;

//     if (visible) this.setState({ visible: false });
//   };

//   handleToggle = () => this.setState({ visible: !this.state.visible });

//   render() {
//     const { leftItems, rightItems } = this.props;
//     const { visible } = this.state;

//     return (
//       <div className="customHeader">
//         <Media at="mobile">
//           <NavBarMobile
//             leftItems={leftItems}
//             onPusherClick={this.handlePusher}
//             onToggle={this.handleToggle}
//             rightItems={rightItems}
//             visible={visible}
//           ></NavBarMobile>
//         </Media>

//         <Media greaterThan="mobile">
//           <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
//         </Media>
//       </div>
//     );
//   }
// }

function NavBar({ leftItems, rightItems }) {
  const [visible, setVisible] = useState(false);

  const handlePusher = () => {
    if (visible) setVisible(false);
  };
  const handleToggle = () => setVisible(!visible);

  return (
    <div className="customHeader">
      <Media at="mobile">
        <NavBarMobile
          leftItems={leftItems}
          onPusherClick={handlePusher}
          onToggle={handleToggle}
          rightItems={rightItems}
          visible={visible}
        ></NavBarMobile>
      </Media>

      <Media greaterThan="mobile">
        <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
      </Media>
    </div>
  );
}

const leftItems = [
  { as: Link, to: "/", content: "Home", key: "home" },
  { as: Link, to: "/products", content: "Products", key: "products" },
];

const rightItems = [
];

function Header() {
  const { user, isAuthenticated, logout } = useAuth0();
  rightItems.length = 0;
  if (isAuthenticated) {
    rightItems.push({
      children: [
        <Image avatar spaced="right" src={user.picture} key={nanoid()}/>,
        <Dropdown className="drop-down" pointing="top left" key="userDropdown">
          <Dropdown.Menu key="userDropdownMenu">
            <Dropdown.Item text={user.name} />
            <Dropdown.Item as={Link} to="/dashboard" text="Dashboard"  key="userDashboard"/>
            <Dropdown.Item onClick={logout} text="Sign out" icon="power"               key="userSignout"
/>
          </Dropdown.Menu>
        </Dropdown>,
      ],
    });
  } else {
    rightItems.push({
      Link: { as: Link, to: "/login", content: "Login", key: "login" },
    });
  }
  return (
    <MediaContextProvider>
      <NavBar leftItems={leftItems} rightItems={rightItems}>
        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </NavBar>
    </MediaContextProvider>
  );
}

export default Header;
