import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './css/main.css'
//订单管理
import OrderHeader from './components/order_management/OrderHeader';
import OrderSearch from './components/order_management/OrderSearch';
import OrderStatus from './components/order_management/OrderStatus';
import OrderList from './components/order_management/OrderList';
import OrderControl from './components/order_management/OrderControl';

class App extends Component {
    render() {
        return (
            <div>
                <OrderHeader/>
                <OrderControl/>
                <OrderSearch/>
                <OrderStatus/>
                <OrderList />
            </div>

        );
    }
}

export default App;