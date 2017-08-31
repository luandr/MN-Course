-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 31-Ago-2017 às 13:03
-- Versão do servidor: 5.7.19-log
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portal_noticias`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `noticias`
--

CREATE TABLE `noticias` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `noticia` text,
  `data_criacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `resumo` varchar(100) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `data_noticia` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `noticia`, `data_criacao`, `resumo`, `autor`, `data_noticia`) VALUES
(1, 'titulo noticia', 'conteudo da noticia', '2017-08-29 14:55:45', '', '', '0000-00-00'),
(2, 'vc caiu no gemidão do mysql', 'eae men kkkkkk', '2017-08-29 15:01:16', '', '', '0000-00-00'),
(3, '3', '3', '2017-08-30 16:06:35', '', '', '0000-00-00'),
(4, '33333', '3', '2017-08-30 16:07:52', '', '', '0000-00-00'),
(5, '', '', '2017-08-30 16:08:59', '', '', '0000-00-00'),
(6, 'eae men kkkk', 'eaekk', '2017-08-30 16:22:15', '', '', '0000-00-00'),
(7, 'WOOOOOOOHN', 'AAAAAHN OWWWHN AANNNNNNNNNH\r\n', '2017-08-30 16:41:58', '', '', '0000-00-00'),
(8, 'k eae', 'kkk eae', '2017-08-30 16:48:27', '', '', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
