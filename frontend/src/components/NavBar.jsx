import { Layout, Menu } from "antd";
import Home from "../pages/Home";
const { Header } = Layout;

const NavBar = () => {
  const items = [
    {
      label: "Home",
      key: "home",
    },
  ];
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" items={items} />
        </Header>
      </Layout>
    </>
  );
};

export default NavBar;
