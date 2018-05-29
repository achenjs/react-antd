import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Icon } from 'antd';

import styles from './style.less';

@withRouter
class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const { item, location } = this.props;

        return (
            <li className={`${styles.ec__menuItem} ${location.pathname.indexOf(item.path) > -1 ? styles.active : ''}`}>
                <Icon type={item.icon} />
                <Link to={item.path} replace>{item.name}</Link>
            </li>
        );
    }
}

export default MenuItem;
