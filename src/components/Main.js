/**
 * Created by 18829 on 2017/10/10.
 */
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import '../css/main.css'
//订单管理
import OrderHeader from './Order_management/OrderHeader';
import OrderSearch from './Order_management/OrderSearch';
import OrderStatus from './Order_management/OrderStatus';
import OrderList from './Order_management/OrderList';


class Main extends Component {
    render() {
        return (
            <div>
                <OrderHeader/>
                <OrderSearch/>
                <OrderStatus/>
                <OrderList />
            </div>

        )
    }
}

export default Main;
