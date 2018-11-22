/*
 Navicat MySQL Data Transfer

 Source Server         : vagrant
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : 127.0.0.1:3306
 Source Schema         : scotchbox

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : 65001

 Date: 22/11/2018 01:22:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for games
-- ----------------------------
DROP TABLE IF EXISTS `games`;
CREATE TABLE `games`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player1name` varchar(128) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `player1email` varchar(128) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `player2name` varchar(128) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `player2email` varchar(128) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `gameWinner` varchar(128) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `gameStarted` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `gameEnded` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of games
-- ----------------------------
INSERT INTO `games` VALUES (6, 'Dave Sayer', 'bath.meme@gmail.com', 'Naomi', 'hello@sticksandstones.im', 'Dave Sayer', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `games` VALUES (7, 'Dave Sayer', 'bath.meme@gmail.com', 'Naomi', 'hello@sticksandstones.im', 'Naomi', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `games` VALUES (8, 'Dave Sayer', 'bath.meme@gmail.com', 'Naomi', 'hello@sticksandstones.im', 'Dave Sayer', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `games` VALUES (9, 'Dave Sayer', 'bath.meme@gmail.com', 'Naomi', 'hello@sticksandstones.im', 'Dave Sayer', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `games` VALUES (10, 'Dave Sayer', 'bath.meme@gmail.com', 'Naomi', 'hello@sticksandstones.im', 'Dave Sayer', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `games` VALUES (11, 'Dave Sayer', 'bath.meme@gmail.com', 'Naomi', 'hello@sticksandstones.im', 'Dave Sayer', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

SET FOREIGN_KEY_CHECKS = 1;
