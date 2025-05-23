export default defineAppConfig({
	info: {
		title: "喵落阁",
		author: "克喵爱吃卤面",
		lang: "zh-cn",
		logo: "/kemiao.jpg",
		headLogo: "/kemiao.jpg",
		description: "克喵的博客",
		ogDescription: "愿你看清一切真相后，依旧热爱你的家人和朋友。",
		ogImage: "/background.png",
	},
	page: [
		{ path: "/", name: "关于", icon: "akar-icons:coffee" },
		{ path: "/article", name: "文章", icon: "akar-icons:folder" },
		{ path: "/note", name: "笔记", icon: "akar-icons:comment" },
		{ path: "/tag", name: "标签", icon: "akar-icons:tag" },
		{ path: "/sort", name: "分类", icon: "akar-icons:sort" },
		{ path: "/friend", name: "友链", icon: "akar-icons:paper-airplane" },
	],
	friend: [
		{
			name: "wallleap",
			info: "Luwang's blog",
			url: "https://myblog.wallleap.cn",
			image: "https://gravatar.wallleap.cn/avatar/be1ccdcf025a92b98a92e331e1b3662a?size=256",
		},
	],
	comment: {
		isComment: true,
		serverUrl: "https://waline-cc.kemiaosw.top/",
		emoji: ["https://gcore.jsdelivr.net/gh/sooooooooooooooooootheby/pinkline_commit@v1.0.0/r1999"],
	},
	rss: {
		link: "cc.kemiao.online",
	},
});
