-- MySQL dump 10.15  Distrib 10.0.34-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: photographer
-- ------------------------------------------------------
-- Server version	10.0.34-MariaDB-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `photo` varchar(100) NOT NULL,
  `photo_2` varchar(100) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `title_2` varchar(50) DEFAULT NULL,
  `description` text,
  `orginal` int(12) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (9,'1.jpg','2.jpg','Красивая надпись','красивая подпись','Красивое описание надписи. Но конечно же длинное описание, так как это описание. Описание должно быть типо длинным. Ну примерно таким наверное',1),(10,'3.jpg','4.jpg','Красивая надпись','красивая подпись','Красивое описание надписи. Но конечно же длинное описание, так как это описание. Описание должно быть типо длинным. Ну примерно таким наверное',2),(11,'5.jpg','6.jpg','Красивая надпись','красивая подпись','Красивое описание надписи. Но конечно же длинное описание, так как это описание. Описание должно быть типо длинным. Ну примерно таким наверное',3),(12,'7.jpg','8.jpg','Красивая надпись','красивая подпись','Красивое описание надписи. Но конечно же длинное описание, так как это описание. Описание должно быть типо длинным. Ну примерно таким наверное',4),(13,'9.jpg','10.jpg','Красивая надпись','красивая подпись','Красивое описание надписи. Но конечно же длинное описание, так как это описание. Описание должно быть типо длинным. Ну примерно таким наверное',5),(14,'11.jpg','12.jpg','Красивая надпись','красивая подпись','Красивое описание надписи. Но конечно же длинное описание, так как это описание. Описание должно быть типо длинным. Ну примерно таким наверное',6),(15,'13.jpg','14.jpg','Красивая надпись','красивая подпись','Красивое описание надписи. Но конечно же длинное описание, так как это описание. Описание должно быть типо длинным. Ну примерно таким наверное',7),(16,'15.jpg','16.jpg','Красивая надпись','красивая подпись','Красивое описание надписи. Но конечно же длинное описание, так как это описание. Описание должно быть типо длинным. Ну примерно таким наверное',8);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pages` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `bg` varchar(100) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `orginal` int(12) DEFAULT NULL,
  `main_page` int(12) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pages`
--

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-19  3:42:36
