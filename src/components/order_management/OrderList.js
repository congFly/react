/**
 * Created by 18829 on 2017/10/10.
 */
import React, {Component} from 'react';
import {Row, Col, Button} from 'antd';
import fetch from 'isomorphic-fetch';
import PropTypes from 'prop-types'

class OrderList extends Component {

    constructor() {
        super();
        this.state = {
            orders: [],
            product: [],
            confirm_status: []
        };
        this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        this.getData();
    }

//获取数据
    getData() {
        let opts = {
            method: "GET",
        };
        let selfthis = this;
        let url = 'http://192.168.1.161:8000/api/v1/';
        fetch(url, opts)
            .then(function (response) {
                return response.json();
            }).then(function () {
            fetch(url + 'ec_orders/', opts)
                .then(function (response) {
                    return response.json();
                }).then(function (jsonData) {
                console.log(jsonData.results);
                selfthis.setState({
                    orders: jsonData.results,
                });
            });
            fetch(url + 'ec_orders/?status=0', opts)
                .then(function (response) {
                    return response.json();
                }).then(function (jsonData) {
                selfthis.setState({
                    confirm_status: jsonData.results
                })
            });
        }).catch(function (error) {
            alert(error);
        });
    }

    render() {
        return (
            <div className="order-lists">
                <div className="order-list">
                    {this.state.orders.map((order, index) => {
                        return (
                            <div className="order-list" key={index}>
                                <Row className="order-head" gutter={16}>
                                    <Col span={4}>
                                        <input type="checkBox"/>
                                        创建日期:{new Date(order.create_time).getFullYear() + '年'
                                    + new Date(order.create_time).getMonth() + '月'
                                    + new Date(order.create_time).getDate() + '日'}
                                    </Col>
                                    <Col span={4}>订单号:{order.sn}</Col>
                                    <Col span={4}>订单金额:{order.items.map((item) => {
                                        return item.quantity * item.all_cost
                                    })}</Col>
                                    <Col span={4}>客户:{order.buyer_partner}</Col>
                                    <Col span={4}>收货地址:{order.address}</Col>
                                    <Col span={4}>需求日期:{order.required_date}</Col>
                                </Row>
                                {order.items.map((item, index) => {
                                    return (
                                        <Row className="order-item" key={index} gutter={16}>
                                            <Col span={2}>
                                                <div className="image-item">
                                                    <img src={item.image_url} style={{width: "100px", height: "100px"}}
                                                         alt="商品图片"></img>
                                                </div>
                                            </Col>
                                            <Col span={5} className="goods-info">
                                                <div>{item.product_name}</div>
                                                <div>商品编码：{item.slug}</div>
                                                <div>物料编码：{item.material_no}</div>
                                            </Col>
                                            <Col span={3} className="goods-unit">
                                                <span>数量:{item.quantity}</span>
                                                <span>(单位:{item.unit})</span>
                                            </Col>
                                            <Col span={4} className="goods-memo">备注：{item.memo}</Col>
                                            <Col span={4} className="goods-status">
                                                {item.delivery_item.map((each_item, index) => {

                                                    if (each_item.delivery.status == 0) {
                                                        return (
                                                            <div>
                                                                <span className="goods-count">{each_item.count}</span>
                                                                <span className="goods-count">待收货
                                                                    <a className="" href="/xxx">查看详情</a>
                                                            </span>
                                                            </div>
                                                        )
                                                    } else if (each_item.delivery.status == 1) {
                                                        return (
                                                            <div>
                                                                <span className="goods-count">{each_item.count}</span>
                                                                <span className="goods-count">待开发票
                                                                    <a className="" href="/xxx">查看详情</a>
                                                            </span>
                                                            </div>
                                                        )
                                                    } else {
                                                        return (
                                                            <div>
                                                                <span className="goods-count">{each_item.count}</span>
                                                                <span>拒收</span>
                                                                <a className="" href="/xxx">查看详情</a>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                            </Col>
                                            <Col span={3} className="money">金额：{item.all_cost}</Col>
                                            <Col span={3} className="delivery-status">
                                                <Button>接单</Button>
                                                <span style={{display: "block"}}><a
                                                    href="/111">订单详情</a></span>
                                            </Col>
                                        </Row>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default OrderList;
