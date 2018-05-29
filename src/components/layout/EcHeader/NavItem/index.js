import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link, withRouter } from 'react-router-dom';

import styles from './style.less';

@withRouter
class NavItem extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const { itemInfo, location } = this.props;
        //  FIXME 应该比较之后赋值给某个变量
        return (
            <div className={`${styles.navItems} ${itemInfo.path === location.pathname ? styles.active : ''}`}>
                <Link to={itemInfo.path} replace>{itemInfo.name}</Link>
            </div>
        );
    }
}

export default NavItem;
