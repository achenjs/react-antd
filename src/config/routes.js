import React from 'react';
import { Route } from 'react-router-dom';

import StatisticsSetting from '../pages/StatisticsSetting';             //  统计设置页
import OrderManage from '../pages/OrderManage';                         //  订单管理页
import BuyData from '../pages/BuyData';                                 //  购买数据页
import FinancialDataMaintain from '../pages/FinancialDataMaintain';     //  财务数据管理
import NotFound from '../pages/NotFound';                               //  404

import Details from '../pages/OrderManage/Details';
import Statistics from '../pages/OrderManage/Statistics';

import Account from '../pages/BuyData/Account';
import Client from '../pages/BuyData/Client';
import Renewal from '../pages/BuyData/Renewal';

export const routes = [
    {
        path: '/statisticsSetting',
        name: '统计设置',
        icon: 'area-chart',
        component: StatisticsSetting,
        children: [
            {
                path: '/statisticsSetting/filterList',
                name: '过滤清单'
            }
        ]
    }, {
        path: '/orderManage',
        name: '订单管理',
        component: OrderManage,
        children: [
            {
                path: '/orderManage/details',
                name: '订单详情',
                component: Details
            }, {
                path: '/orderManage/statistics',
                name: '订单统计',
                component: Statistics
            }
        ]
    }, {
        path: '/buyData',
        name: '购买数据',
        component: BuyData,
        children: [
            {
                path: '/buyData/account',
                name: '账号统计',
                component: Account
            }, {
                path: '/buyData/client',
                name: '客户统计',
                component: Client
            }, {
                path: '/buyData/renewal',
                name: '续签统计',
                component: Renewal
            }
        ]
    }, {
        path: '/financialDataMantain',
        name: '财务数据管理',
        component: FinancialDataMaintain,
        children: [
            {
                path: '/financialDataMantain/importData',
                name: '导入数据'
            }, {
                path: '/financialDataMantain/price',
                name: '价格表'
            }
        ]
    }, {
        path: '/saas',
        name: 'SaaS数据指标'
    }, {
        path: '/logs',
        name: '操作日志'
    }, {
        path: '*',
        component: NotFound
    }
];

export const RouteWithSubRoutes = function (route) {
    return (
        <Route
            path={route.path}
            render={props => (<route.component {...props} routes={route.routes}/>)}/>
    );
}
