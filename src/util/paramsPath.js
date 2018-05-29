import routes from '@/config/routes';

export default location => {
    //  当前访问路由pathname
    const { pathname } = location;

    const newArr = routes.filter(item => {
        if (pathname.indexOf(item.path) > -1) {
            return item;
        } else {
            return false;
        }
    });

    return newArr;
}
