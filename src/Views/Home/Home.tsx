import  { useState,useEffect} from 'react';
import { NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {  Layout, Menu, Switch,Tree } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import './Home.css';
import type { DataNode, TreeProps } from 'antd/es/tree';
import type { MenuTheme } from 'antd/es/menu';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@supermap/iclient-mapboxgl';
const items1 = ['返回', '关于'];

/*const sideItemsSubitems = {
    "地图浏览": { "点击查询": "/home/", "选择查询": "/home/", "地图浏览": "/home" },
    "空间分析": { "缓冲区分析": "", "最短路径": "" },
    "三维分析": { "暂无": "" },
    "可视化": { "核密度分析": "", "热力图": "" },
    "空间分析1": { "缓冲区分析": "", "最短路径": "" },
    "三维分析1": { "暂无": "" },
    "可视化1": { "核密度分析": "", "热力图": "" },
    "空间分析2": { "缓冲区分析": "", "最短路径": "" },
    "三维分析2": { "暂无": "" },
    "可视化2": { "核密度分析": "", "热力图": "" },
};*/
const { Sider, Header, Content } = Layout;
function Home() {
    // const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
    const [theme, setTheme] = useState<MenuTheme>('dark');
    const [treeBgColor, setTreeBgColor] = useState<string>('#001529');
    const [treeColor, setTreeColor] = useState<string>('#fff');
    // const [collapsed, setCollapsed] = useState(false);
    const treeData: DataNode[] = [
        {
            title: <Link to="/home">二维地图服务</Link>,
            key: '0-0',
            icon: <UserOutlined />,
            children: [
                {
                    title: <Link to="/home">地图浏览</Link>,
                    key: '0-0-0',
                },
                {
                    title: <Link to="/">数据查询</Link>,
                    key: '0-0-1',
                    children: [
                        {
                            title: <Link to="/">点击查询</Link>,
                            key: '0-0-1-0',
                        },
                        {
                            title: <Link to="/">选择查询</Link>,
                            key: '0-0-1-1',
                        },
                    ],
                },
                {
                    title: <Link to="/">空间分析</Link>,
                    key: '0-0-2',
                    children: [
                        {
                            title: <Link to="/">缓冲区分析</Link>,
                            key: '0-0-2-0',
                            children: [
                                {
                                    title: <Link to="/">单环缓冲区分析</Link>,
                                    key: '0-0-2-0-0',
                                },
                                {
                                    title: <Link to="/">多环缓冲区分析</Link>,
                                    key: '0-0-2-0-1',
                                },
                            ],
                        },
                        {
                            title: <Link to="/">最短路径</Link>,
                            key: '0-0-2-1',
                        },
                    ],
                },
                {
                    title: <Link to="/home">可视化</Link>,
                    key: '0-0-3',
                    children: [
                        {
                            title: <Link to="/">核密度分析</Link>,
                            key: '0-0-3-0',
                        },
                        {
                            title: <Link to="/">聚合图</Link>,
                            key: '0-0-3-1',
                        },
                        {
                            title: <Link to="/home/heatmap">热力图</Link>,
                            key: '0-0-3-2',
                        },
                    ],
                },
                {
                    title: <Link to="/">数据标绘</Link>,
                    key: '0-0-4',
                    children: [
                        {
                            title: <Link to="/">点标绘</Link>,
                            key: '0-0-4-0',
                        },
                        {
                            title: <Link to="/">线标绘</Link>,
                            key: '0-0-4-1',
                        },
                        {
                            title: <Link to="/">面标绘</Link>,
                            key: '0-0-4-2',
                        },
                        {
                            title: <Link to="/">文本标绘</Link>,
                            key: '0-0-4-3',
                        },
                    ],
                },
                {
                    title: <Link to="/">数据量算</Link>,
                    key: '0-0-5',
                    children: [
                        {
                            title: <Link to="/">几何量算</Link>,
                            key: '0-0-5-0',
                            children: [
                                {
                                    title: <Link to="/">距离量算</Link>,
                                    key: '0-0-5-0-0',
                                },
                                {
                                    title: <Link to="/">面积量算</Link>,
                                    key: '0-0-5-0-1',
                                },
                            ],
                        },
                        {
                            title: <Link to="/">坐标量算</Link>,
                            key: '0-0-5-1',
                            children: [
                                {
                                    title: <Link to="">坐标距离量算</Link>,
                                    key: '0-0-5-1-0',
                                },
                                {
                                    title: <Link to="/">坐标面积量算</Link>,
                                    key: '0-0-5-1-1',
                                },
                                {
                                    title: <Link to="/">坐标方位角量算</Link>,
                                    key: '0-0-5-1-2',
                                },
                                {
                                    title: <Link to="/">坐标定位</Link>,
                                    key: '0-0-5-1-3',
                                },
                                {
                                    title: <Link to="/">坐标反查</Link>,
                                    key: '0-0-5-1-4',
                                },
                                {
                                    title: <Link to="/">坐标转换</Link>,
                                    key: '0-0-5-1-5',
                                },
                                {
                                    title: <Link to="/">坐标拾取</Link>,
                                    key: '0-0-5-1-6',
                                },
                                {
                                    title: <Link to="/">坐标定位</Link>,
                                    key: '0-0-5-1-7',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: <Link to='/'>三维地图服务</Link> ,
            key: '0-1',
            icon: <UserOutlined />,
            children: [
                {
                    title: <Link to="/3">三维地图浏览</Link>,
                    key: '0-1-0',
                },
                {
                    title: <Link to="/">三维分析</Link>,
                    key: '0-1-1',
                    children: [
                        {
                            title: <Link to='/'>暂无</Link> ,
                            key: '0-1-1-0',
                        },
                        {
                            title: <Link to='/'>暂无</Link> ,
                            key: '0-1-1-1',
                        },
                    ],
                },
                {
                    title: <Link to="/">可视化</Link>,
                    key: '0-1-2',
                    children: [
                        {
                            title: <Link to="/">核密度分析</Link>,
                            key: '0-1-2-0',
                        },
                        {
                            title: <Link to="/">聚合图</Link>,
                            key: '0-1-2-1',
                        },
                    ],
                },
            ],
        },
    ];
    const onSelect: TreeProps['onSelect'] = (keys) => {
        console.log(keys[0])

    }
   /* const changeMode = (value: boolean) => {
        setMode(value ? 'vertical' : 'inline');
    };*/
    const changeTheme = (value: boolean) => {
        setTheme(value ? 'dark' : 'light');
        setTreeColor(value? '#fff':'#000');
        setTreeBgColor(value? '#001529':'#fff');
    };

  /*  const toggleCollapsed = () => {
        setCollapsed(!collapsed);
        setMode(collapsed ? 'inline' : 'vertical');
    };*/
    const  initmap=()=>{
    window.map= new mapboxgl.Map({
        container: 'map',
        style: {
            "version": 8,
            "sources": {
                "raster-tiles": {
                    "type": "raster",
                    "tiles": ['https://iserver.supermap.io/iserver/services/map-china400/rest/maps/China/zxyTileImage.png?z={z}&x={x}&y={y}'],
                    "tileSize": 256
                }
            },
            "layers": [{
                "id": "simple-tiles",
                "type": "raster",
                "source": "raster-tiles",
                "minzoom": 0,
                "maxzoom": 22
            }]
        },
        center: [116.46, 39.92],
        zoom: 3
    });
    window.map.addControl(new mapboxgl.NavigationControl(), 'top-left');
    }
    useEffect(() => {
        initmap();
        return () => {
            window.map.remove();
        };
    },[])
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header className={`header-${theme}`} style={{height:'48px',position: 'sticky', top: 0, zIndex: 1, width: '100%', display: 'flex', alignItems: 'center' }}>
                <Menu theme={theme} mode="horizontal" className="custom-menu">
                    {items1.map((item) => (
                        <Menu.Item className="menu"  key={item}>
                            {item}
                        </Menu.Item>
                    ))}
                </Menu>
                <div style={{ marginLeft: 'auto', marginRight: '20px' }}>
                    <div className="toolbar">
                    </div>
                    <NotificationOutlined
                        style={{ fontSize: '24px', marginRight: '20px', cursor: 'pointer' }}
                    />
                    <UserOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
                </div>
            </Header>
            <Layout>
                {/*collapsible*/}
                {/*collapsed={collapsed}*/}
                {/*onCollapse={toggleCollapsed}*/}
                {/*trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}*/}
                <Sider
                        theme={theme}
                        width={'auto'}
                        style={{ background: " colorBgContainer",maxHeight:'calc(100vh-64px)' }}
                      >
                    <Switch
                        checked={theme === 'dark'}
                        onChange={changeTheme}
                        checkedChildren="暗色"
                        unCheckedChildren="亮色"
                        style={{margin:'0 auto'}}
                    />
                    {/*
                    <Switch
                        checked={mode === 'vertical'}
                        onChange={changeMode}
                        checkedChildren="内联"
                        unCheckedChildren="垂直"
                        style={{margin:'0 20px 0 20px'}}
                    />
                    <Menu mode={mode} theme={theme} style={{ borderRight: 0, height: '100%' }}>
                        {Object.entries(sideItemsSubitems).map(([subMenuItem, subMenuItems]) => (
                            <Menu.SubMenu key={subMenuItem} title={subMenuItem}>
                                {Object.entries(subMenuItems).map(([item, link]) => (
                                    <Menu.Item key={`${subMenuItem}-${item}`}>
                                        {link ? (
                                            <Link to={link}>{item}</Link>
                                        ) : (
                                            <span>{item}</span>
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.SubMenu>
                        ))}
                    </Menu>*/}
                    <Tree
                        style={{width: '100%',background:treeBgColor,color:treeColor}}
                        height={600}
                        showLine
                        showIcon
                        onSelect={onSelect}
                        treeData={treeData}
                    />

                </Sider>
                <Layout>
                    <Content id='map' style={{ display:'flex',position:'fixed',
                        background:'wheat',
                        width:'100%',
                        height: 'calc(100vh - 48px)'}}>
                    </Content>
                    <Outlet ></Outlet>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Home;
