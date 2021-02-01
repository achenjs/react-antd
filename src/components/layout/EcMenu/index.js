import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { routes } from '@/config/routes';
import MenuItem from './MenuItem';

import styles from './style.less';

@withRouter
class EcMenu extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className={styles.ec__menu}>
                <div className={styles.logo}>
                    <img src="https://biz.staticec.com/comm/public/images/ec-logo.png" alt="logo" />
                    <p className={styles.title}>财务系统</p>
                </div>
                <ul>
                    {routes.map((item, index) => 
                        <MenuItem item={item} key={index} />
                    )}
                </ul>
            </div>
        );
    }
}

export default EcMenu;
