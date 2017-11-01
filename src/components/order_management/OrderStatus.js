/**
 * Created by 18829 on 2017/10/10.
 */
import React, {Component} from 'react';
import {Tabs, Tag} from 'antd';
import {Link} from 'react-router';
const TabPane = Tabs.TabPane;


class OrderStatus extends Component {
    render() {
        return (
            <div className="order-status">
                <Tabs>
                    <TabPane tab={<span>全部订单<sup><Tag color="#f50">1</Tag></sup></span> } key="1"></TabPane>
                    <TabPane tab={<span>待确认<sup><Tag color="purple">2</Tag></sup></span> } key="2"></TabPane>
                    <TabPane tab={<span>代发货<sup><Tag color="#2db7f5">3</Tag></sup></span> } key="3"></TabPane>
                    <TabPane tab={<span>待收货<sup><Tag color="red">4</Tag></sup></span> } key="4"></TabPane>
                    <TabPane tab={<span>代开发票<sup><Tag color="orange">5</Tag></sup></span> } key="5"></TabPane>
                    <TabPane tab={<span>代收款<sup><Tag color="green">4</Tag></sup></span> } key="6"></TabPane>
                    <TabPane tab={<span>已完成<sup><Tag color="pink">3</Tag></sup></span> } key="7"></TabPane>
                </Tabs>
            </div>
        )
    }
}

export default OrderStatus;