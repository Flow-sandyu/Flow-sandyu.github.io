import path from "path";
import { writeFileSync } from "fs";
import { Feed } from "feed";
import { createContentLoader, type SiteConfig } from "vitepress";

const hostname = "https://flow-sandyu.github.io/";

export async function createRssFile(config: SiteConfig) {
    const feed = new Feed({
        title: "Flowsand Cabin",
        description: "心怀好奇心，每日冥想、运动、学英语和写代码的人",
        id: hostname,
        link: hostname,
        language: "zh-CH",
        copyright: "Copyright© 2024-present flowsand",
    });


    const posts = await createContentLoader(["posts/*/*.md", "posts/*/*/*.md", "posts/*/*/*/*.md"], {
        excerpt: true,
        render: true,
    }).load();


    posts.sort((a, b) => Number(b.frontmatter.date - a.frontmatter.date));

    for (const { frontmatter, url, excerpt, html } of posts) {

        // 仅保留最近3篇文章
        if (feed.items.length >= 3) {
            break;
        }
        const title = frontmatter.title
        feed.addItem({
            title,
            id: `${hostname}${url}`,
            link: `${hostname}${url}`,
            description: excerpt,
            content: html,
            author: [
                {
                    name: "flowsand",
                    email: "flowsandyu@qq.com",
                    link: "https://flow-sandyu.github.io/",
                },
            ],
            date: frontmatter.date,
        });
    }

    writeFileSync(path.join(config.outDir, "feed.xml"), feed.rss2(), "utf-8");
}
