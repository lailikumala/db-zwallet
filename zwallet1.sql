-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 28, 2020 at 10:22 PM
-- Server version: 8.0.22
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zwallet1`
--

-- --------------------------------------------------------

--
-- Table structure for table `topup`
--

CREATE TABLE `topup` (
  `id` int NOT NULL,
  `detail` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `topup`
--

INSERT INTO `topup` (`id`, `detail`, `created_at`, `updated_at`) VALUES
(7, 'Go to the nearest ATM or you can use E-Banking', '2020-11-11 16:55:46', '2020-11-11 16:55:46'),
(8, 'Type your security number on the ATM or E-Banking', '2020-11-11 16:55:46', '2020-11-11 16:55:46'),
(9, 'Select \"transfer\" in the menu', '2020-11-11 16:57:01', '2020-11-11 16:57:01'),
(10, 'Type the virtual account number that we provide you want to top up', '2020-11-11 16:57:01', '2020-11-11 16:57:01'),
(11, 'Type the amount of the money you want to top up', '2020-11-11 16:58:39', '2020-11-11 16:58:39'),
(12, 'Read the summary details', '2020-11-11 16:58:39', '2020-11-11 16:58:39'),
(13, 'Press transfer or top up', '2020-11-11 16:59:48', '2020-11-11 16:59:48'),
(14, 'You can see your money in Zwallet with in 3 ours', '2020-11-11 16:59:48', '2020-11-11 16:59:48');

-- --------------------------------------------------------

--
-- Table structure for table `transfer`
--

CREATE TABLE `transfer` (
  `id` int NOT NULL,
  `id_sender` int NOT NULL,
  `id_reciever` int NOT NULL,
  `reciever` varchar(50) NOT NULL,
  `notes` varchar(100) NOT NULL,
  `amount` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `transfer`
--

INSERT INTO `transfer` (`id`, `id_sender`, `id_reciever`, `reciever`, `notes`, `amount`, `createAt`, `updateAt`) VALUES
(1, 18, 35, 'christine marr', 'buying a pencil', '2000', '2020-11-16 11:26:00', '2020-11-16 11:26:00'),
(2, 35, 18, 'momo taro', 'buying a book', '5000', '2020-11-16 11:26:00', '2020-11-16 11:26:00'),
(4, 35, 18, 'momo taro', 'buying a table', '30000', '2020-11-16 11:28:00', '2020-11-16 11:28:00'),
(6, 35, 18, 'momo taro', 'buying a fan ', '20000', '2020-11-16 11:33:58', '2020-11-16 11:33:58'),
(18, 18, 84, 'michael lee', 'buying a snack', '98000', '2020-12-25 15:26:13', '2020-12-25 15:26:13'),
(19, 18, 85, 'jessica', 'buy coffee', '6000', '2020-12-26 11:31:02', '2020-12-26 11:31:02'),
(20, 18, 83, 'samuel suhi', 'buy biscuit', '2000', '2020-12-26 12:04:05', '2020-12-26 12:04:05'),
(41, 35, 85, 'jessica kim', 'Buy ice cream', '7000', '2020-12-26 15:57:27', '2020-12-26 15:57:27'),
(44, 85, 18, 'momo taro', 'Buy ice cream', '5000', '2020-12-27 05:26:33', '2020-12-27 05:26:33'),
(46, 35, 85, 'jessica', 'buy bag', '6000', '2020-12-28 07:41:40', '2020-12-28 07:41:40');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `balance` bigint NOT NULL DEFAULT '0',
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `photo` varchar(255) DEFAULT NULL,
  `pin` varchar(10) DEFAULT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `email`, `password`, `balance`, `verified`, `photo`, `pin`, `role`, `created_at`, `updated_at`) VALUES
(1, 'test', '834567987', 'test11@gmail.com', '$2b$10$1FhQc.9/SQBlreuuPDJHyeW6ljxtdLhS1n/YzlmI2//YzHfF6ddfW', 960000, 0, '1606012437511-1.png', '000000', 'admin', '2020-10-07 17:14:50', '2020-10-07 17:14:50'),
(18, 'momo taro', '8561044535', 'momo@gmail.com', '$2b$10$2.bYMVisrBA4Q.EiSOLBhOnD60hDiOVMPbu5vse0BF6N5xzIrnJE2', 67890000, 0, '1609044848583-Screenshot_20201226_210353.png', '444444', 'user', '2020-11-10 00:53:46', '2020-11-10 00:53:46'),
(35, 'christine marr', '988888877', 'christine@gmail.com', '$2b$10$0/4OyjTrMbumiqEU1vNimuTshadO1O3v63ra8dfislabM5rjprPWO', 89000000, 0, '1606012741666-cristine.png', '555555', 'user', '2020-11-14 07:13:54', '2020-11-14 07:13:54'),
(83, 'samuel suhi', '987654326', 'samuel@gmail.com', '$2b$10$JYYCYLAkdMphWwIZyutSG.fF99BgS3HNoFrbxTNLBCCvTFlLatphS', 2090000, 0, '1606012437511-1.png', '111111', 'user', '2020-11-22 02:33:57', '2020-11-22 02:33:57'),
(84, 'michael lee', '889098765', 'michael@gmail.com', '$2b$10$8jsSLAbOtZKs2lMvbA5up.75YVoEfN2bH6T9rhp6Gsn6m0imT5U5G', 3020000, 0, '1606012510681-michael.png', '222222', 'user', '2020-11-22 02:35:10', '2020-11-22 02:35:10'),
(85, 'jessica kim', '876543990', 'jessica@gmail.com', '$2b$10$ExhsHsEOy2c1TAzs.xxGF.5XJ7yp3eULmFKrhMGfXiW6KHSXlKzoK', 1230000, 0, '1607281657233-jessica.png', '333333', 'user', '2020-11-22 02:36:25', '2020-11-22 02:36:25'),
(125, 'samuel kim', '897658999', 'kim@gmail.com', '$2b$10$ttl0P1c1l2SL/73qkGJSwOceUEtzmaHkg8UWXkNJclH7WHqazCVLy', 0, 0, '', '666666', 'user', '2020-12-13 13:22:56', '2020-12-13 13:22:56'),
(126, 'tes', NULL, 'Test@gmail.com', '$2b$10$C5/5XsQAyBrB0mGpgNuAdeCqche2d/5gRuCHGeiFZcUMwjc7qb7Bi', 0, 0, '1608877051504-image-4ea4e96e-650a-4291-b540-7c2e950d0cc9.jpg', '111111', 'user', '2020-12-24 13:21:54', '2020-12-24 13:21:54'),
(127, 'nathalie jean', '85624539866', 'Jean@gmail.com', '$2b$10$p6cFoP/JT4FFTZ1lO/8pFegh1Q95ursvZNvOTkg15HByDI/C3E6Hq', 0, 0, '', '222222', 'user', '2020-12-26 16:19:28', '2020-12-26 16:19:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `topup`
--
ALTER TABLE `topup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transfer`
--
ALTER TABLE `transfer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `frk_id_sender` (`id_sender`),
  ADD KEY `frk_id_reciever` (`id_reciever`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `topup`
--
ALTER TABLE `topup`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `transfer`
--
ALTER TABLE `transfer`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `transfer`
--
ALTER TABLE `transfer`
  ADD CONSTRAINT `frk_id_reciever` FOREIGN KEY (`id_reciever`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `frk_id_sender` FOREIGN KEY (`id_sender`) REFERENCES `users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
