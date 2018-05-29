import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import EcMenu from './components/layout/EcMenu';
import EcHeader from './components/layout/EcHeader';

import styles from './App.less';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false,
        };
    }

    render() {
        return (
            <div className={styles.App}>
                {
                    this.state.initDone
                        ? <div className={styles.ec__container}>
                            <EcMenu />
                            <div className={styles.ec__Main}>
                                <EcHeader />
                                <div className={styles.ec__content}>
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                        : <div>正在加载...</div>
                }
            </div>
        );
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                initDone: true
            })
        }, 10);
    }

    componentWillUnmount() {
        this.timer = null;
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
