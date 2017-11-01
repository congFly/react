/**
 * Created by 18829 on 2017/10/10.
 */
import React, {Component} from 'react';


class OrderHeader extends Component {
    render() {
        return (
            <div className="order-header">
                <h1>订单管理</h1>
                <ul className="breadcrumb">
                    <li>
                        <a href="">首页</a>
                    </li>
                    <li>
                        <a href="">商品管理</a>
                    </li>
                    <li>
                        订单管理
                    </li>

                </ul>
            </div>
        )
    }
}

export default OrderHeader;