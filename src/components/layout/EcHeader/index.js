import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { withRouter } from 'react-router-dom'; 
import paramsPath from '@/util/paramsPath';

import NavItem from './NavItem';

import styles from './style.less';

@withRouter
class EcHeader extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            NavArr: []
        };
    }

    componentWillMount() {
        this.parseNavArr();
    }

    componentWillReceiveProps(nextProps) {
        //  FIXME  这里应该和之前的路由比较，相等的话不需要重新render
        this.parseNavArr(nextProps);
    }

    //  获取header菜单的信息
    parseNavArr = nextProps => {
        let location;
        if (nextProps) {
            location = nextProps.location;
        } else {
            location = this.props.location;
        }

        const NavArr = paramsPath(location);
        if (NavArr.length) {
            //  children即为header nav二级菜单
            if (NavArr[0].children) {
                this.setState({
                    NavArr: NavArr[0].children
                });
            } else {
                this.setState({
                    NavArr: []
                });
            }
        } else {
            this.setState({
                NavArr: []
            });
        }
    }

    render() {
        const { NavArr } = this.state;

        return (
            <div className={styles.ec__header}>
                <div className={styles.ec__nav}>
                    {
                        NavArr.map((item, index) => 
                            <NavItem itemInfo={item} key={index} />
                        )
                    }
                </div>
                <div className={styles.user__container}>
                    <img className={styles.avatar} alt="头像" />
                    <div className={styles.userInfo}>
                        <p className={styles.name}>王文琛</p>
                        <p className={styles.phone}>15011220004</p>
                    </div>
                    <div className={styles.loginup}>
                        退出
                    </div>
                </div>
            </div>
        );
    }
}

export default EcHeader;