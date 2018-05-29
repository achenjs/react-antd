const routes = [
    {
        path: '/statisticsSetting',
        name: '统计设置',
        icon: 'area-chart',
        children: [{
            path: '/statisticsSetting/filterList',
            name: '过滤清单',
        }]
    },
    {
        path: '/orderManage',
        name: '订单管理',
        children: [{
            path: '/orderManage/details',
            name: '订单详情',
        }, {
            path: '/orderManage/statistics',
            name: '订单统计',
        }]
    },
    {
        path: '/buyData',
        name: '购买数据',
        children: [{
            path: '/buyData/account',
            name: '账号统计',
        }, {
            path: '/buyData/client',
            name: '客户统计',
        }, {
            path: '/buyData/renewal',
            name: '续签统计',
        }]
    },
    {
        path: '/financialDataMantain',
        name: '财务数据管理',
        children: [{
            path: '/financialDataMantain/importData',
            name: '导入数据',
        }, {
            path: '/financialDataMantain/price',
            name: '价格表',
        }]
    },
    {
        path: '/saas',
        name: 'SaaS数据指标',
    },
    {
        path: '/logs',
        name: '操作日志',
    }
];

export default routes;
