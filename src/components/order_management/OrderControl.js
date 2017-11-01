/**
 * Created by 18829 on 2017/10/17.
 */
import React, {Component} from 'react';
import {Button} from 'antd';

class OrderControl extends React.Component {
    state = {
        size: 'large',
    };

    render() {
        const size = this.state.size;
        return (
            <div>
                <Button value="default">批量发货</Button>
            </div>
        );
    }
}

export default OrderControl;