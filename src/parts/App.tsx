import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import './App.css';
import { Home } from '../pages/Home';
import { Chart1 } from '../pages/Chart1';
import { Map1 } from '../pages/Map1';

const { Header, Footer, Sider, Content } = Layout;

@observer
class App extends React.Component {
  @observable collapsed = false;

  render() {
    let obj = JSON.parse(sessionStorage.getItem('currentCrumb') || 'null');

    return (
      <Router>
        <Layout className='ant-layout-has-sider container'>
          <Sider trigger={null} collapsible={true} collapsed={this.collapsed} style={{ height: '100vh' }}>
            <Menu theme='dark' mode='inline'
              defaultOpenKeys={(obj && obj.openKeys) || []}
              selectedKeys={(obj && obj.selectedKeys) || []}
              onClick={this.onClick}
              style={{ paddingTop: 10 }}>
              <Menu.Item key='dashboard'>
                <Link to={'/'}><Icon type='dashboard' /><span>Home</span></Link>
              </Menu.Item>
              <Menu.Item key='list'>
                <Link to={'/list'}><Icon type='table' /><span>List</span></Link>
              </Menu.Item>
              <Menu.SubMenu key='map' title={<span><Icon type='global' /><span>Maps</span></span>}>
                <Menu.Item key='map1'><Link to={'/maps/1'}>Map 1</Link></Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key='charts' title={<span><Icon type='area-chart' /><span>Charts</span></span>}>
                <Menu.Item key='chart1'><Link to={'/charts/1'}>Chart 1</Link></Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: '0 24px' }}>
              <Icon className='trigger' type={this.collapsed ? 'menu-unfold' : 'menu-fold'} style={{ cursor: 'pointer' }} onClick={this.onToggle} />
            </Header>
            <Content style={{ margin: '24px 16px', padding: '24px', backgroundColor: '#fff', minHeight: 280 }}>
              <Route exact path='/' component={Home} />
              <Route path='/maps/1' component={Map1} />
              <Route path='/charts/1' component={Chart1} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Created by 🐱🐷</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }

  onClick = () => {
    console.log('hi');
  }

  onToggle = () => {
    this.collapsed = !this.collapsed;
  }
}

export default App;
