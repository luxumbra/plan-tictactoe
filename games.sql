-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 26, 2018 at 12:34 AM
-- Server version: 5.7.21-0ubuntu0.17.10.1
-- PHP Version: 7.2.2-3+ubuntu17.10.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scotchbox`
--

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `player1name` varchar(128) NOT NULL,
  `player1email` varchar(128) DEFAULT NULL,
  `player2name` varchar(128) NOT NULL,
  `player2email` varchar(128) DEFAULT NULL,
  `gameWinner` varchar(128) NOT NULL,
  `gameStarted` datetime DEFAULT NULL,
  `gameEnded` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `player1name`, `player1email`, `player2name`, `player2email`, `gameWinner`, `gameStarted`, `gameEnded`) VALUES
(86, 'Fenella', 'bath.meme@gmail.com', 'Naomi', 'hello@sticksandstones.im', 'Fenella', '2018-11-26 00:00:00', '2018-11-26 00:13:26'),
(87, 'Dave Sayer', 'bath.meme@gmail.com', 'Naomi', 'hello@sticksandstones.im', 'Dave Sayer', '2018-11-26 00:00:00', '2018-11-26 00:14:50'),
(88, 'Fenella', 'fdsdsf', 'Naomi', 'dfdfdsf', 'Fenella', '2018-11-26 00:00:00', '2018-11-26 00:00:00'),
(89, 'Fenella', 'bath.meme@gmail.com', 'Naomi', 'hello@sticksandstones.im', 'Fenella', '2018-11-26 00:00:00', '2018-11-26 00:20:50'),
(90, 'Fenella', 'bath.meme@gmail.com', 'Naomi', 'hello@sticksandstones.im', 'Fenella', '2018-11-26 00:00:00', '2018-11-26 00:21:50'),
(91, 'Dave Sayer', 'bath.meme@gmail.com', 'Naomi', 'hello@sticksandstones.im', 'Dave Sayer', '2018-11-26 00:00:00', '2018-11-26 00:34:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
