import React, { useState } from 'react';
import {
  DeliveredProcedureOutlined,
  DesktopOutlined,
  FileOutlined,
  LoginOutlined,
  OrderedListOutlined,
  PieChartOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import { GiDeliveryDrone } from 'react-icons/gi';
import { CiDeliveryTruck } from 'react-icons/ci';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children, path) {
  return {
    key,
    icon,
    children,
    label: path ? <Link to={path}>{label}</Link> : label, // Using Link for navigation
  };
}

const items = [
  getItem('Add Product', '1', <FileOutlined />, null, '/addproduct'), // Option 1 navigates to /option1
  getItem('All Product', '2', <FileOutlined />, null, '/products'), // Option 1 navigates to /option1
  getItem('Orders', '3', <ShoppingCartOutlined />, null, '/orders'),
  getItem('Cancelled', '3', <ShoppingCartOutlined />, null, '/deleted-orders'),
  getItem('Add Testers', '4', <FileOutlined />, null,'/AddTesters' ),
  // getItem('Orders', 'sub1', <ShoppingCartOutlined />, [
  //   getItem('Confirmed', '5', null, null, '/user/tom'),
  //   getItem('Cancelled', '6', null, null, '/deleted-orders'),
  //   getItem('Ready to ship', '7', null, null, '/user/alex'),
  // ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [
  //   getItem('Team 1', '8', null, null, '/team/team1'),
  //   getItem('Team 2', '9', null, null, '/team/team2'),
  // ]),
  getItem('Deliverd Orders', '10', <CiDeliveryTruck />, null, '/delivered-orders'),
  getItem('Log Out', '11', <LoginOutlined />, null, '/logout'),
];

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate(); // For programmatic navigation if needed

  return (

    <>
    {/* <div className='  h-full'> */}
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'sticky' }}>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          style={{ flex: 1 }} // Ensure the menu takes the available space
        />
       
      </div>
    </Sider>
    {/* </div> */}
            </>
           
  );
};

export default SideMenu;
