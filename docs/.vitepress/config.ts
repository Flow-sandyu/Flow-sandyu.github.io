import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";
import nav from './nav'
import taskLists from 'markdown-it-task-lists';
import { createRssFile } from "./utils/rss";

export default {
  lang: "zh-CN",
  title: "Flowsand Cabin",
  description: "Just do it",
  titleTemplate: true,
  abstract: "心怀好奇心，每日冥想、运动、学英语和写代码的人，写一些想写的东西",
  base: "/",
  themeConfig: {
    nav,
    footer: {
      copyright: "Copyright© 2024-present flowsand",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Flow-sandyu" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.17157 2.75737L10.414 5.99948H13.585L16.8284 2.75737C17.219 2.36685 17.8521 2.36685 18.2426 2.75737C18.6332 3.1479 18.6332 3.78106 18.2426 4.17158L16.414 5.99948L18.5 6.00001C20.433 6.00001 22 7.56701 22 9.50001V17.5C22 19.433 20.433 21 18.5 21H5.5C3.567 21 2 19.433 2 17.5V9.50001C2 7.56701 3.567 6.00001 5.5 6.00001L7.585 5.99948L5.75736 4.17158C5.36684 3.78106 5.36684 3.1479 5.75736 2.75737C6.14788 2.36685 6.78105 2.36685 7.17157 2.75737ZM18.5 8.00001H5.5C4.7203 8.00001 4.07955 8.5949 4.00687 9.35555L4 9.50001V17.5C4 18.2797 4.59489 18.9205 5.35554 18.9931L5.5 19H18.5C19.2797 19 19.9204 18.4051 19.9931 17.6445L20 17.5V9.50001C20 8.67158 19.3284 8.00001 18.5 8.00001ZM8 11C8.55228 11 9 11.4477 9 12V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V12C7 11.4477 7.44772 11 8 11ZM16 11C16.5523 11 17 11.4477 17 12V14C17 14.5523 16.5523 15 16 15C15.4477 15 15 14.5523 15 14V12C15 11.4477 15.4477 11 16 11Z"></path></svg>',
        },
        link: "https://space.bilibili.com/172483360",
        ariaLabel: "bilibili",
      },
      {
				icon: {
					svg: '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>RSS订阅</title><path d="M108.56,342.78a60.34,60.34,0,1,0,60.56,60.44A60.63,60.63,0,0,0,108.56,342.78Z"/><path d="M48,186.67v86.55c52,0,101.94,15.39,138.67,52.11s52,86.56,52,138.67h86.66C325.33,312.44,199.67,186.67,48,186.67Z"/><path d="M48,48v86.56c185.25,0,329.22,144.08,329.22,329.44H464C464,234.66,277.67,48,48,48Z"/></svg>',
				},
				link: "/feed.xml",
			},
    ],
    search: {
      provider: "local",
    },
    outline: {
      level: 'deep'
    }
  },
  lastUpdated: true,
  vite: {
    plugins: [
      // https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar
      AutoSidebar({
        ignoreIndexItem: true,
        ignoreList: ["FILES", "aboutme"]
      }),
    ],
  },
  markdown: {
    config: (md) => {
      md.use(taskLists, {labelAfter: true})
    },
    image: {
      lazyLoading: true,
    },
    lineNumbers: true
  },
  cleanUrls: true,
  buildEnd: createRssFile,
};