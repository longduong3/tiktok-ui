import { Headerr } from '~/Components/Layout';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/upload', component: Upload, layout: Headerr },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
