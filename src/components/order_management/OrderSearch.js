/**
 * Created by 18829 on 2017/10/10.
 */
import React, {Component} from 'react';

import {Input} from 'antd';
const Search = Input.Search;

class OrderSearch extends Component {
    render() {
        return (
            <div className="order-search">
                <Search placeholder="订单号/商品名称/商品编码/客户" style={{width: 220}}
                        onSearch={value => console.log(value)}/>
            </div>
        )
    }
}

export default OrderSearch;