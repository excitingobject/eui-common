
import '@/src/assets/styles/eui-common.scss'

import { createRoot } from 'react-dom/client';
import MainView from './views/MainView';


const root = createRoot(document.getElementById('root'));
root.render(<MainView/>);