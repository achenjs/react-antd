import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Account from './Account';
import Client from './Client';
import Renewal from './Renewal';

class BuyData extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <Route path="/buyData/account" component={Account} />
                <Route path="/buyData/client" component={Client} />
                <Route path="/buyData/renewal" component={Renewal} />
            </div>
        );
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
)(BuyData);
