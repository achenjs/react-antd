import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import StatisticsSetting from '../pages/StatisticsSetting';             //  统计设置页
import OrderManage from '../pages/OrderManage';                         //  订单管理页
import BuyData from '../pages/BuyData';                                 //  购买数据页
import FinancialDataMaintain from '../pages/FinancialDataMaintain';     //  财务数据管理
import NotFound from '../pages/NotFound';                               //  404
import Account from '../pages/BuyData/Account';
import Client from '../pages/BuyData/Client';
import Renewal from '../pages/BuyData/Renewal';
class RouteMap extends Component {
    render() {
        return (
            <HashRouter>
                <Route component={props => (
                    <App {...props}>
                        <Switch>
                            <Route path="/" exact component={StatisticsSetting} />
                            <Route path="/statisticsSetting" component={StatisticsSetting} />
                            <Route path="/orderManage" component={OrderManage} />
                            <Route path="/buyData" render={() => (
                                <BuyData>
                                    <Route path="/buyData/account" component={Account} />
                                    <Route path="/buyData/client" component={Client} />
                                    <Route path="/buyData/renewal" component={Renewal} />
                                </BuyData>
                            )} />
                            <Route path="/financialDataMantain" component={FinancialDataMaintain} />
                            <Route component={NotFound} />
                        </Switch>
                    </App>
                )} />
            </HashRouter>
        );
    }
}

export default RouteMap;