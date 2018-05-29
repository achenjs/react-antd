import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ImportData from './ImportData';
import Price from './Price';

class FinancialDataMantain extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <Route path="/financialDataMantain/importData" component={ImportData} replace />
                <Route path="/financialDataMantain/price" component={Price} replace />
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
)(FinancialDataMantain);
