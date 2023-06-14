import  ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElememt = document.querySelector('#root');

const root = ReactDOM.createRoot(rootElememt);

root.render(
    <App/>
);