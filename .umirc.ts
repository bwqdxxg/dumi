import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'dumi',
  mode: 'site',
  styles: [
    `.__dumi-default-layout[data-site-mode='true'] .__dumi-default-layout-toc {width: 185px !important; top: 52px !important; max-height: calc(100% - 52px) !important;}`,
    `.__dumi-default-layout[data-site-mode='true'] {padding-top: 65px !important;}`,
    `.__dumi-default-navbar {height: 50px !important; box-shadow: 0 3px 5px 1px rgb(0 0 0 / 5%) !important}`,
    `.__dumi-default-navbar >nav {height: 100% !important; display: flex; align-items: center;}`,
    `.__dumi-default-navbar >nav >a {height: 100% !important; line-height: 50px !important;}`,
    `.markdown table {font-size: 12px;}`,
    `.markdown table th, .markdown table td {padding: 6px 5px !important;}`,
    `.markdown table th {white-space: nowrap;}`,
    `.markdown table td:nth-child(1) {width:30%; font-weight: bold !important;}`,
    `.markdown table td:nth-child(2) {width:30%;}`,
    `.markdown table td:nth-child(3) {width:30%; color: #c41d7f;}`,
    `.markdown table td:nth-child(4) {width:5%;}`,
    `.markdown table td:nth-child(5) {width:5%;}`,
    `body::-webkit-scrollbar {width: 5px;}`,
    `body::-webkit-scrollbar-thumb {background: dodgerblue;}`,
    `body::-webkit-scrollbar-track {background: white;}`,
    `.__dumi-default-navbar >nav >a[href="/editor"] {display: none !important;}`,
    `.__dumi-default-navbar >nav >a[href="/wavefrom"] {display: none !important;}`,
    `.__dumi-default-layout {padding-bottom: 0 !important;}`,
    `.__dumi-default-layout-footer-meta {margin-top: 20px !important;}`,
    // `.__dumi-default-menu { width: 150px !important; }`,
    // `.__dumi-default-menu[data-mode='site'] .__dumi-default-menu-list > li > a {padding-left: 28px !important;}`,
    // `.__dumi-default-layout[data-site-mode='true'][data-show-sidemenu='true'] {padding-left: 160px !important;}`,
    // `.__dumi-default-layout[data-site-mode='true'][data-show-slugs='true'] {padding-right: 165px !important;}`,
    // `.__dumi-default-previewer {height: 100%}`,
    // `.__dumi-default-previewer-demo {padding: 0 0 5px 0 !important;display: flex;justify-content: center;height: 100%}`,
    // `.__dumi-default-previewer-demo>div {width:100%; height: 100%}`,
    // `.__dumi-default-navbar {display: none !important;}`,
    // `.__dumi-default-menu {display: none !important;}`,
    // `.__dumi-default-layout-toc {display: none !important;}`,
    // `.__dumi-default-layout-content {width: 100%;height: 100%;position: absolute;top: 0;left: 0}`,
    // `.markdown {display: none !important;}`,
    // `.__dumi-default-previewer {border: 0 !important;}`,
    // `.__dumi-default-previewer-actions {display: none !important;}`,
    // `.__dumi-default-layout-footer-meta {display: none !important;}`
  ],
  // more config: https://d.umijs.org/zh-CN/config
});
