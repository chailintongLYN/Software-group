/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 8.0.22 : Database - myfavorite
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`myfavorite` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

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
  `uid` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `passwd` varchar(100) NOT NULL COMMENT '密码',
  `fansnumber` int DEFAULT '0' COMMENT '粉丝数量',
  `followusernumber` int DEFAULT '0' COMMENT '关注的人数',
  `ctime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`,`username`,`passwd`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

/*Data for the table `login` */

insert  into `login`(`uid`,`username`,`passwd`,`fansnumber`,`followusernumber`,`ctime`) values (1,'admin','123',0,0,'2020-11-19 08:34:47'),(2,'admin123','123',0,0,'2020-11-19 08:43:26'),(3,'admin2','password123',0,0,'2020-11-19 08:43:52'),(26,'郝天恒','123',1,0,'2020-11-26 22:56:02'),(41,'崔宫健','123',0,1,'2020-12-02 21:13:36');

/*Table structure for table `save` */

DROP TABLE IF EXISTS `save`;

CREATE TABLE `save` (
  `username` varchar(100) NOT NULL,
  `textid` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `save` */

insert  into `save`(`username`,`textid`) values ('郝天恒',1),('郝天恒',2),('郝天恒',3),('郝天恒',4);

/*Table structure for table `text` */

DROP TABLE IF EXISTS `text`;

CREATE TABLE `text` (
  `textid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `text` text NOT NULL,
  `savenumber` int NOT NULL DEFAULT '0',
  `ctime` datetime DEFAULT CURRENT_TIMESTAMP,
  KEY `id` (`textid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `text` */

insert  into `text`(`textid`,`username`,`type`,`title`,`text`,`savenumber`,`ctime`) values (1,'郝天恒','text','第一篇文章','这是第一篇文章',0,'2020-11-27 16:45:26'),(2,'郝天恒','text2','第二篇文章','这是第二篇文章',0,'2020-11-28 15:06:26'),(3,'郝天恒1','text3','第三篇文章','这是第三篇文章',0,'2020-11-30 10:10:21'),(4,'郝天恒2','text4','第四篇文章','这是第四篇文章',0,'2020-11-30 10:11:26'),(5,'崔宫健','js','第五篇文章','这是第五篇文章',0,'2020-12-03 20:24:31'),(6,'崔宫健1','nodejs','第六篇文章','这是第六篇文章',0,'2020-12-03 20:25:04'),(7,'崔宫健2','html','第七篇文章','这是第七篇文章',0,'2020-12-03 20:26:18');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
