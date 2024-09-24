// create application
import * as React from 'react'
const MainView: React.FC = () => {
    return <div>Main View!</div>
}

// render application
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container) if you don't use TypeScript
root.render(<MainView/>);