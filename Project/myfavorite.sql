/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.7.1-m11 : Database - myfavorite
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`myfavorite` /*!40100 DEFAULT CHARACTER SET utf8 */;

/*Table structure for table `fans` */

DROP TABLE IF EXISTS `fans`;

CREATE TABLE `fans` (
  `username` varchar(100) NOT NULL COMMENT '被关注的人',
  `followuser` varchar(100) NOT NULL COMMENT '粉丝'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `fans` */

insert  into `fans`(`username`,`followuser`) values ('郝天恒','崔宫健'),('崔宫健','郝天恒'),('崔宫健1','郝天恒'),('崔宫健2','郝天恒');

/*Table structure for table `login` */

DROP TABLE IF EXISTS `login`;

CREATE TABLE `login` (
  `uid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `role` int(1) DEFAULT '0' COMMENT '管理者',
  `userimg` varchar(100) DEFAULT 'http://loaclhost:1234/static/uploaduserimg/timg.jpg' COMMENT '用户头像',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `passwd` varchar(100) NOT NULL COMMENT '密码',
  `fansnumber` int(11) DEFAULT '0' COMMENT '粉丝数量',
  `followusernumber` int(11) DEFAULT '0' COMMENT '关注的人数',
  `ctime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`,`username`,`passwd`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

/*Data for the table `login` */

insert  into `login`(`uid`,`role`,`userimg`,`username`,`passwd`,`fansnumber`,`followusernumber`,`ctime`) values (1,1,'http://loaclhost:1234/static/uploaduserimg/timg.jpg','admin','123',0,0,'2020-11-19 08:34:47'),(2,1,'http://loaclhost:1234/static/uploaduserimg/timg.jpg','admin123','123',0,0,'2020-11-19 08:43:26'),(3,1,'http://loaclhost:1234/static/uploaduserimg/timg.jpg','admin2','password123',0,0,'2020-11-19 08:43:52'),(26,0,'http://loaclhost:1234/static/uploaduserimg/timg.jpg','郝天恒','123',1,0,'2020-11-26 22:56:02'),(41,0,'http://loaclhost:1234/static/uploaduserimg/timg.jpg','崔宫健','123',0,1,'2020-12-02 21:13:36'),(42,0,'http://loaclhost:1234/static/uploaduserimg/timg.jpg','郝天恒1','123',0,0,'2020-12-04 14:19:54'),(43,0,'http://loaclhost:1234/static/uploaduserimg/timg.jpg','郝天恒2','123',0,0,'2020-12-04 14:20:04'),(44,0,'http://loaclhost:1234/static/uploaduserimg/timg.jpg','郝天恒3','123',0,0,'2020-12-04 14:20:15'),(45,0,'http://loaclhost:1234/static/uploaduserimg/timg.jpg','崔宫健1','123',0,0,'2020-12-04 14:20:23'),(46,0,'http://loaclhost:1234/static/uploaduserimg/timg.jpg','崔宫健2','123',0,0,'2020-12-04 14:20:31'),(47,0,'http://loaclhost:1234/static/uploaduserimg/timg.jpg','崔宫健3','123',0,0,'2020-12-04 14:20:41');

/*Table structure for table `save` */

DROP TABLE IF EXISTS `save`;

CREATE TABLE `save` (
  `username` varchar(100) NOT NULL,
  `textid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `save` */

insert  into `save`(`username`,`textid`) values ('郝天恒',1),('郝天恒',2),('郝天恒',3),('郝天恒',4);

/*Table structure for table `text` */

DROP TABLE IF EXISTS `text`;

CREATE TABLE `text` (
  `textid` int(11) NOT NULL AUTO_INCREMENT,
  `titleimg` varchar(100) DEFAULT 'http://loaclhost:1234/static/uploadtextimg/timg.jpg' COMMENT '文章标题图片',
  `userimg` varchar(100) DEFAULT 'http://loaclhost:1234/static/uploadusertimg/timg.jpg' COMMENT '作者头像',
  `username` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `text` text NOT NULL,
  `savenumber` int(11) NOT NULL DEFAULT '0',
  `ctime` datetime DEFAULT CURRENT_TIMESTAMP,
  KEY `id` (`textid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Data for the table `text` */

insert  into `text`(`textid`,`titleimg`,`userimg`,`username`,`type`,`title`,`text`,`savenumber`,`ctime`) values (1,'http://loaclhost:1234/static/uploadtextimg/timg.jpg','http://loaclhost:1234/static/uploadusertimg/timg.jpg','郝天恒','text','第一篇文章','这是第一篇文章',1,'2020-11-27 16:45:26'),(2,'http://loaclhost:1234/static/uploadtextimg/timg.jpg','http://loaclhost:1234/static/uploadusertimg/timg.jpg','郝天恒','html','第二篇文章','这是第二篇文章',1,'2020-11-28 15:06:26'),(3,'http://loaclhost:1234/static/uploadtextimg/timg.jpg','http://loaclhost:1234/static/uploadusertimg/timg.jpg','郝天恒1','css','第三篇文章','这是第三篇文章',1,'2020-11-30 10:10:21'),(4,'http://loaclhost:1234/static/uploadtextimg/timg.jpg','http://loaclhost:1234/static/uploadusertimg/timg.jpg','郝天恒2','综合','第四篇文章','这是第四篇文章',1,'2020-11-30 10:11:26'),(5,'http://loaclhost:1234/static/uploadtextimg/timg.jpg','http://loaclhost:1234/static/uploadusertimg/timg.jpg','崔宫健','js','第五篇文章','这是第五篇文章',0,'2020-12-03 20:24:31'),(6,'http://loaclhost:1234/static/uploadtextimg/timg.jpg','http://loaclhost:1234/static/uploadusertimg/timg.jpg','崔宫健1','综合','第六篇文章','这是第六篇文章',0,'2020-12-03 20:25:04'),(8,'http://loaclhost:1234/static/uploadtextimg/timg.jpg','http://loaclhost:1234/static/uploadusertimg/timg.jpg','郝天恒','js','我从2019年开始的十大JavaScript文章','javascript文章\r\n\r\n自从它作为笨拙的前端脚本语言开始以来，JavaScript已经走了很长一段路。 我们在2019年看到了JavaScript领域的一些重大发展，包括React钩子和函数式编程概念的广泛采用，向TypeScript的稳定转换以及前端框架生态系统中React的持续统治。\r\n\r\n在取得所有这些进步的同时，可能很难跟上这些变化。 因此，我整理了一份清单，列出了我在过去一年中阅读的十大JavaScript文章。\r\n\r\n我相信这些文章对于开发人员来说很重要。 其中许多是由有影响力JavaScript开发人员和思想领袖编写的； 其他人只是有很棒的内容。 我是根据内容和质量选择它们的，并且未按任何特定顺序列出它们。\r\n\r\n1. JavaScript状态2019\r\nJavaScript 2019状态是描述2019年JavaScript世界的统计数据和事实的集合。\r\n\r\n不将Sacha Greif和RaphaëlBenitte的作品包括在2019年有影响力JavaScript出版物清单中将是一个巨大的疏忽。 2019年JavaScript状态描述了JavaScript的所有内容：\r\n\r\nReact在前端框架生态系统中的持续流行\r\nTypeScript在数量上的兴起\r\nJavaScript的受众特征\r\n新的后端框架\r\n和更多\r\n对于希望掌握最抢手技能的新开发人员和经验丰富的专业人士（招聘人员通常称为“ JS忍者”）而言，这是一年一度的必读内容。\r\n\r\n2. useEffect完整指南\r\n完整的useEffect指南是Dan Abramov对如何正确使用功能性React.js中的useEffect钩子的看法。\r\n\r\n如果不引用Dan Abramov的工作，那也将是一个不完整的清单。 从2019年开始在useEffect（）上的这篇文章只是必读。 Dan描述了为什么以及如何将类组件和生命周期方法（例如componentDidMount）重构为带有挂钩的功能组件。 除了官方的React.js文档之外，如果您有兴趣并通过钩子学习现代React，这也是一个不错的起点。\r\n\r\n3.在React Hook中思考\r\n在React Hooks中思考，描述了如何改变使用现代功能模式编写React.js的方式。\r\n\r\n本篇和下一篇文章延续了函数式编程的主题以及2019年React钩子的出现。Amelia Wattenberger的文章更广泛地讲解了React.js和JavaScript中函数式编程模式的“为什么”。\r\n\r\n4.为什么X不是钩子？\r\n为什么X不是钩子？ 让您深入了解React.js钩子实现和模式背后的动机。\r\n\r\n丹·阿布拉莫夫（Dan Abramov）在2019年入选该榜单的第二篇文章是对React.js钩子开发基础哲学的讨论。 Hooks席卷了React.js社区，并且无疑是2019年的亮点之一; 本文说明了从事这些工作的人们背后的一些动机。\r\n\r\n5.功能性JavaScript：使用递归约简遍历树\r\n功能性JavaScript：使用递归约简遍历树是一个有关如何使用JavaScript中的功能性编程解决现实问题的案例研究。\r\n\r\n詹姆斯·辛克莱（James Sinclair）在2019年进行的有关功能JavaScript的公共工作是社区的真正财富。 他的所有文章都很棒，但是这篇文章因其在前端Web开发中的优雅性和实用性而对我脱颖而出。 如果您不熟悉Scala之类的功能语言，那么其中的某些概念一开始似乎很难掌握，但对于编写可测试，可扩展和可组合JavaScript至关重要。 对于希望编写更多功能JS的开发人员来说，这是另一本必读的文章。\r\n\r\n6. JavaScript Clean Code：最佳做法\r\nJavaScript Clean Code-Best Practices是一个很好的资源，可帮助您使用JS最佳实践来提高代码质量。\r\n\r\n在阅读了Milos Protic的这篇文章并吸收了它的智慧之后，您的同事会惊叹于您新发现的编写干净JS的能力。 这部分内容很多，都是适用，可行和正确的。 请在2020年这样编写JavaScript代码！\r\n\r\n7.期权链\r\n自异步/等待以来， 选项链接是JavaScript的最佳补充。\r\n\r\n我包含了此文档在MDN上发布的关于选项链的文档，因为我认为该功能是（如果不是）2019年对香草JavaScript的最重要的新增功能之一。选项链和无效合并是惊人的生活质量改善，我认为所有JavaScript开发人员应该使用。 我个人每天会多次使用此语言功能，这使我的JS代码更简洁，更易读。\r\n\r\n8.我忘记JavaScript比大多数人学到的更多\r\n我忘了JavaScript比大多数人都学到的东西吸引了社区思想领袖的大脑。\r\n\r\n大多数JavaScript开发人员都会对Kyle Simpson进行有见地的采访，这是一个有趣的读物，他对Kyle Simpson的采访是“活着JavaScript经典，是开源精神的最真实体现”。 通过阅读原始JS代码，这是一个值得的间歇，而Simpson对语言的过去和未来的见解十分深刻。\r\n\r\n9.现代JavaScript开发中的设计模式\r\n现代JavaScript开发中的设计模式具有来自JS上下文的Singleton，Observer和Facade模式。\r\n\r\n克里斯蒂安·波斯莱克（Kristian Poslek）关于设计模式的热门文章在2019年脱颖而出。尽管他没有提供具体的示例和代码，但我认为他的见解足够有价值，可以列入此列表。 对于那些想知道学术设计模式如何在现实世界中的JS实现中占有一席之地的人来说，这是一个有趣的读物。\r\n\r\n10.解决内存问题\r\n修复内存问题可帮助我们使用Chrome devtools调试Node.js / JavaScript内存泄漏。\r\n\r\nKayce Basques讨论了开发人员如何使用Google Chrome浏览器快速调试JavaScript和Node.js内存问题。 我之所以写这篇技术文章，是因为考虑到Chrome在消费市场上的主导地位以及作为Web开发者选择的浏览器的优势，我认为此处讨论的工具非常重要且很有帮助。 （请参阅JavaScript 2019的状态 。）在大型JavaScript代码库中，通常很难诊断内存泄漏，并且这些工具过去对我有帮助。\r\n\r\n希望您花一些时间阅读上面列出的文章。 我发现这些文章是JavaScript领域2019年最具影响力，最有见地的作品，希望您能同意。\r\n\r\n先前发布在https://dev.to/heroku/my-top-10-javascript-articles-from-2019-1da6\r\n\r\n翻译自: https://hackernoon.com/my-top-10-javascript-articles-from-2019-we463yfk\r\n\r\njavascript文章\r\n\r\n',0,'2020-12-09 20:51:24'),(9,'http://loaclhost:1234/static/uploadtextimg/timg.jpg','http://loaclhost:1234/static/uploadusertimg/timg.jpg','郝天恒1','html','关于HTML的文章','HTML\r\n标题和水平线\r\n　　<h1>标题</h1>这个表示的是一级标题，<h2><h3><h4><h5><h6>依次表示的标题字符的依次递减\r\n\r\n　　<hr>表示水平线，单独站一行\r\n\r\n　　属性：align：center，left，right  表示元素在网页中的显示位置。\r\n\r\n　　　　　size：这可以表示下划线的厚度  单位px（像素）。\r\n\r\n　　　  　  width：可以表示下划线的大小，80%，表示占据网页的80%。\r\n\r\n段落和换行\r\n　　<p>段落</p> 段落与段落之间会有稍大一点的间隔\r\n\r\n　　<br/>单标签，表示的换行，通常用在文章中代表在网页中另起一行。\r\n\r\n图片\r\n　　<img src=\" 路径\" alt=\"图片加载失败显示的内容\"  />\r\n\r\n　　img标签表示的是对图片的引用，向网页中嵌入一幅图片。我们可以使用属性来对图片进行调整大小，边框等。\r\n\r\n　　\r\n\r\n\r\n\r\n超链接\r\n　　<a href=\"超链接\">内容<a/>  超链接标签，用于链接另外一个页面。若是href属性中没有内容，则a标签内的内容和普通文本没有区别\r\n\r\n　　　也可以在本页面内跳转，但是需要元素的唯一标识，通常使用id进行跳转，直接在 <img src=\"\" id=\"id1\"><a id=\"#id1\">来跳转\r\n\r\n \r\n\r\ndiv和span\r\n　　<div>是一个块级元素，通常与 css配合使用，用于布局。\r\n\r\n　　<div> 标签可以把文档分割为独立的、不同的部分。它可以用作严格的组织工具，并且不 使用任何格式与其关联。\r\n\r\n　　<div> 是一个块级元素。这意味着它的内容自动地开始一个新行。实际上，换行是 <div> 固有的唯一格式表现。可以通过 <div> 的 class 或 id 应用额外的样式。 \r\n\r\n　　标签的分类\r\n　　　　HTML中标签元素三种不同类型：块状元素，行内元素，行内块状元素。\r\n\r\n　　　　块级元素特点： 元素都从新的一行开始，并且其后的元素也另起一行；元素的高度、宽度、 行高以及顶和底边距都可设置；元素宽度在不设置的情况下，是它本身父容器的 100%（和父 元素的宽度一致），除非设定一个宽度。 \r\n\r\n　　　　行内元素特点 ：和其他元素都在一行上；元素的高度、宽度及顶部和底部边距不可设置； 元素的宽度就是它包含的文字或图片的宽度，不可改变\r\n\r\n　　　　行内块状元素的特点：和其他元素都在一行上；元素的高度、宽度、行高以及顶和底边距 都可设置\r\n\r\n表格\r\n　　使用<table></table>标签，一行使用<tr></tr>来表示，每行的每个单元格使用<td></td>\r\n\r\n　　如果想要合并单元格，如果想要行合并，使用rowspan属性进行跨行（列）合并，colspan属性则是用来表示跨列（行）合并\r\n\r\n列表\r\n　　<ul><li></li></ul>表示一个列表的每一行，但是这是无序了，也就是说这个没列的前面并没有数字这一选项。\r\n\r\n　　<ol>则是可以在每列的前面使用数字表明，有序列的排序。\r\n\r\n\r\n\r\n表单\r\n　　表单可以使用<form>来进行创建，它可以向服务器穿数据，它是一个块级元素。\r\n\r\n\r\n\r\n　　在表单内可以使用<input>来搜集用户的数据 ，这是一个单标签，可以使用type属性来标明这个input的元素输入字段，输入字段可以是文本字段、复选框、 掩码后的文本控件、单选按钮、按钮等等。\r\n\r\n',0,'2020-12-09 20:54:30'),(10,'http://loaclhost:1234/static/uploadtextimg/timg.jpg','http://loaclhost:1234/static/uploadusertimg/timg.jpg','郝天恒2','综合','浅谈web前端开发','对前端开发的三个总体理解和体会\r\n       我对前端开发的总体体会有三：\r\n\r\n       第一：杂而难，难度甚至超过了一般的后台开发，如果有人觉得前端开发简单只能说明他还没有入门。\r\n\r\n       第二：web前端开发正在向响应式和移动端方向大步迈进。\r\n\r\n       第三：前端工程师其实就是编程技术人员，用一句话来形容“比UI设计懂技术，比技术人员更懂交互”，当然也有人说前端工程师是工程师中的设计师，是设计师中的工程师。既然是编程工作，那就不会做一辈子，毕竟太累。认真敲几年代码然后去卖水果吧，还望师弟师妹们来照顾我生意。\r\n\r\n       网页制作与web前端开发\r\n       前端开发工程师是一个比较新的职业，在国内乃至国际上开始受到重视的时间不超过几年。互联网进入2.0时代后，web开发技术得到了空前的发展，尤其是前端技术。近几年，随着用户对体验的要求越来越高，前端开发技术难度也越来越大。曾经设计和制作不分的职位也终于分为UI设计师和web前端开发工程师（前端开发师）两个职位，分别向艺术和技术的方向纵向发展。\r\n\r\n       从技术体系上讲，前端开发师需要掌握和了解的东西非常多，有些大牛用庞杂来形容。\r\n\r\n       几年前，还没有前端开发的时候我们叫做网页制作，主要内容都是静态的页面，用户也是以浏览为主，而现在发生了翻天覆地的变化，网页不再只是承载单一的文字和图片，各种富媒体让页面内容更加生动，更注重用户体验。\r\n\r\n       以前会平面设计软件、DW和简单的HTML、CSS、JS就可以制作网页，现在只掌握这些已经远远不够了，如果只掌握这些连工作机会都很少。无论是开发难度，还是开发方式，现在的web前端开发都接近传统的网站后台开发，我觉得比一般的后台开发更复杂。一个网站或者移动应用是否专业、功能是否强大。服务器端是用J2EE+Oracle组合还是ASP+Access组合，并没有太明显的区别，但是，前端的用户体验却给了用户直观的印象。所以现在不仅仅是网页制作，而是web前端开发。大部分人认为是web前端开发取代了以前的网页制作，我认为现在网页制作和web前端开发的岗位同时存在。如果仅仅掌握以前网页制作的技术，那么现在还是叫网页制作师（我在招聘网页上也看到不少网页制作师这个岗位），并不能称之为web前端工程师。\r\n\r\n       Web前端开发一般要掌握哪些技术和具备哪些条件？\r\n       第一、要掌握曾经网页制作师掌握的基本技术。如各种页面布局，面向对象编程，JS模块化编程，设计模式，前端MVC等等。\r\n\r\n       第二、网站性能优化，SEO。如尽量减少HTTP请求次数、cssSprites图片整合技术、合并css与js、运用CDN技术。减少DNS查找次数、避免重定向等。\r\n\r\n       第三、要会UI设计。当然在一些相对较小的公司前端工程师也担任着UI设计的角色。在大公司虽然有专业的UI设计师，但是前端工程师会UI设计能帮助你更准确的理解设计师的意图，在原型不完整的时候也能正确的反馈设计缺陷，将问题阻挡在设计的环节，会大大减少UI bug数量，比如，设计师会给出理想状态下的容器样式，却往往忽略了文字溢出折行、长连续字符、容器宽高是否适应内容尺寸变化而变化，溢出部分是作截字还是隐藏等诸多细节，因为设计师不一定懂“边界值测试”的道理，而这些问题往往在测试阶段才被发现，所以，如果能在拿到UI设计稿时就提醒设计师补充完整这些场景，自然减少测试回归次数。\r\n\r\n      第四、至少要会一门后台编程语言。职业的特殊性决定了我们需要跟后端工作者频繁的沟通。如果只顾页面实现，不考虑后台，写出来的页面也有一部分是废弃代码，在后台进行数据交互的时候用不了。还有一方面就是从招聘信息可以得知，现在几乎所有公司前端开发岗位都明确要求会后台语言，在实际工作中可能也要做客户端和服务器端之间的数据交互等。\r\n\r\n\r\n      第五、掌握各种浏览器兼容解决办法。国内和国际主流浏览器种类多，内核不统一，如以Trident为内核的IE、以Gecko为内核的FireFox、以Presto为内核的Opera、以Webkit为内核的google chrome和Safari等，这给我们前端开发增加了很多困难，也是大多数人头疼的事情，且不说目前市面在有这么多的浏览器，就仅仅单一的IE系列家族的问题也够多的了，特别是IE6，IE7。下图是本月对上个月全球浏览器市场统计排行，IE浏览器用户任然超过百分之五十。尽管2016年1月起，微软将停止对旧版IE浏览器的支持。【微软相关原新闻链接请猛击这里】 但是我相信最近很多年之内IE低版本浏览器还是会占比较大的比例，消亡还需时日。\r\n\r\n\r\n      第六、必须学会运用各种工具进行辅助开发。\r\n\r\n      第七、除了掌握技术层面的知识，还有掌握理论层面的知识。包括渲染原理，代码的可维护性，组件的易用性，分层语义模板等等。\r\n\r\n      第八、要有细心和耐心。和UI设计一样，我们必须精确到每一个像素，耐心也体现在多方面，比如让初期开发者头疼的兼容问题，如果编码不够规范，解决兼容问题的时间远远超过了页面实现的时间。\r\n\r\n      第九、热爱并不断学习新技术。前端几乎每天都有新技术产生，从事这一行，在打牢基础的情况下要不断学习新技术。包括开发流程部署，预处理技术，前端框架(如RequireJS、ReactJS、AngularJS等等)，移动终端，标准规范等。\r\n\r\n      浅谈自己的体会\r\n       与服务器端语言先慢后快的学习曲线相比，前端开发的学习曲线是先快后慢。所以现在有很多学生或者已从事工作了的人都开始想涌入web前端开发的潮流，并自学成“才”，但我知道大多数人都停留在会用的阶段，因为要想成为一名真正的web前端开发师每前进一步都很难。尽管有的人每天都利用工作之余学习，却还是学不精，于是处于纠结迷茫的状态。另一方面，正如开篇所说，这还是一个比较新的职业，对一些规范和最佳实践的研究都处于探索阶段，一些新的技术随时都会闪现出来，例如：浏览器大战也越来越白热化，跨浏览器兼容方案依然五花八门，目前我所在的公司一般要求我们兼容到IE7，以前经常遇到这种情况，好不容易把IE各个版本都兼容了，高兴之余又发现在360浏览器上出现了bug，没办法，熬夜奋战呗。\r\n\r\n       前端开发工程师是一个易学难精的职业，我们必须深入、系统地学习并掌握前端知识，如果简单地自学一下就能成为web前端工程师，那我想现在市场上也不会出现高薪找不到前端工程师的情况了。有经验的web前端开发工程师都知道，要精通这一行，必须先精通十行。有一些有经验的前端工程师，在不断寻求新的技能上的突破，最明显的一点体现是，开始关注“底层协议”，即HTTP、第三方应用、系统对接、制造工具、工作流程等，这时思考的重点已经脱离了“切页面”，变为“出方案“，比如要架设一个站点，能够搭建站点框架，预见站点后续（前端）开发中的所有风险，并一一给出解决方案。\r\n\r\n       说说半路出家的危与机，俗话说，隔行入隔山。每个行业自有其道，自然不是想做就做。前端技术领域半路出家者非常多，我们来分析一下转行的心理。第一，看到前端技术入门简单、互联网对前端技术的需求缺口大；第二，前端技术所见即所得、感觉学习起来很快；第三，我身边的某某转行作前端看上去不错、我似乎也可以；第四，我不喜欢我现在做的工作、想换行业、正好前端技术上手较快，就选他吧；当然还有第五，我的确了解并喜欢做Web前端，为它付出再多都是值得的。\r\n\r\n       新进入这一行或者转行者的心态比较容易走两个极端，一是只看到新行业的好，二是只觉得原工作很糟糕。但不管是什么行业，对自己的职业规划的思考都应当先行一步。进入这一行必须先清晰的回答这些问题：\r\n\r\n      1.我能做什么？\r\n\r\n      2.我不能做什么？\r\n\r\n      3.我的优势是什么？\r\n\r\n      4.我的劣势是什么？\r\n\r\n      5.做这一行对我有何好处？\r\n\r\n      6.做这一行会让我付出何种代价？\r\n\r\n      7.如何定义成功？\r\n\r\n      因为面试的时候一定会被这些问题所挑战。如果支支吾吾说不清楚，要么是对自己未来不负责任，要么骨子里就是草根一族，习惯做什么都蜻蜓点水浅尝辄止，也难让人信服你进入这一行是一个权衡再三看起来合理的选择。\r\n\r\n     相关误区解释\r\n      有人认为前端工程师上班不干别的，就是玩，弄点效果，攒两页面，搞点创新。当然这个表述非常轻巧、甚至有调侃的味道，web前端工作绝对不是玩那么简单的，更不像曾经的网页制作那么单一，有时候会为一些效果的实现或优化，弄得加班加点。上周还因为解决一个问题花了2天的时间，惭愧啊。所以前端开发是一项很特殊的工作，前端工程师的工作说得轻松，看似轻巧，但做起来绝对不是那么的简单。在开发过程中涵盖的东西非常宽广，既要从技术的角度来思考界面的实现，规避技术的死角，又要从用户的角度来思考，怎样才能更好地接受技术呈现的枯燥的数据，更好的呈现信息。\r\n\r\n      在入行初期，很多人过于着迷，从而陷入了迷途。比如有人纠结于是否将dt、dd的样式清除从reset.css中拿掉，原因是觉得这两个标签的清除样式会耗费一些渲染性能；或者是否需要将for循环改为while循环以提高js执行速度。尽管这些考虑看上去是合理的，但并不是性能的瓶颈所在，也就是说，你花了很大力气重构的代码带来的页面性能提升，往往还不如将两个css文件合成一个带来的提升明显。就好比用一把米尺量东西，没必要精确到小数点后10位，因为精确到小数点后2位就已经是不准确的了。这种技术误区常常让人捡了芝麻丢了西瓜。\r\n\r\n     对自己学习和工作的要求\r\n      N.C.Zakas曾经勉励过大家，现在成为了我对自己的要求和对已结确定要走Web前端开发方向的人的建议：热爱你的工作。热爱跨浏览器开发带来的挑战、热爱互联网技术的种种异端，热爱业内的同行，热爱你的工具。互联网发展太快了，如果你不热爱它的话，不可能跟上它的步伐。这意味着你必须多阅读，多动手，保证自己的才能与日俱增。要为如何编写易于维护、高质量的前端代码奋斗。下了班也不能闲着，要做一些对自己有用的事儿。可以参与一些开源软件的开发，读读好书，看看牛人的博客。经常参加一些会议，看看别人都在干什么。要想让自己快速成长，有很多事儿可以去做，相信付出一定会有回报。\r\n\r\n\r\n         这次就分享到这里，一个上午就这样过去了，饿了，该去做中午饭了。关于前端开发具体相关技术和具体怎么学习发展下次我会继续分享。\r\n\r\n         最后，因时间仓促，资质有限，文中表述仅代表个人观点，不准确的地方还望见谅，欢迎严厉地指正。\r\n\r\n',0,'2020-12-09 20:56:14');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
