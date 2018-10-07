// HTML's
import './index.html';

// CSS
import swiper from "./styles/swiper.min.css";
import main from "./styles/main.css";
import style from "./styles/style.scss";
import demo from "./styles/demo.styl";

// JS
import './scripts/swiper.min';
import './scripts/script';

// React
// import React from 'react';
// import ReactDOM from 'react-dom';

// React Component
// import App from "./Components/App.jsx";

// Vue
import Vue from 'vue';

// Vue Component
import ModalApp from './Components/Modal.vue';
new Vue({
  	el: '#app',
  	render: h => h(ModalApp)
});