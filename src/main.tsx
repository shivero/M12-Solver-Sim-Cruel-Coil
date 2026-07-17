import { render } from 'preact';
// import { createRoot } from 'react-dom/client';
// import { createRoot } from 'preact/compat/client';
import './index.css';
import App from './App.tsx';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
render(<App />, document.getElementById('app')!);
