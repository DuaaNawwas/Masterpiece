-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 04, 2023 at 11:47 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `easy-meals`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` bigint UNSIGNED NOT NULL,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `service` enum('grocery','delivery') COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Chicken', 'http://localhost:8000/public/images/63de504f8357e_image 4.png', NULL, '2023-02-04 09:32:15', '2023-02-04 09:32:15'),
(2, 'Meat', 'http://localhost:8000/public/images/63de50c887546_pexels-valeria-boltneva-1251208.jpg', NULL, '2023-02-04 09:34:16', '2023-02-04 09:34:16'),
(3, 'Pescatarian', 'http://localhost:8000/public/images/63de50d99efe8_image 7.png', NULL, '2023-02-04 09:34:33', '2023-02-04 09:34:33'),
(4, 'Veggies', 'http://localhost:8000/public/images/63de510a07ec0_pexels-wendy-wei-1656666.jpg', NULL, '2023-02-04 09:35:22', '2023-02-04 09:35:22'),
(5, 'Traditional', 'http://localhost:8000/public/images/63de51af3a0a7_50698b02c25cd76cf14d2ba7de04e3c7_w750_h500.jpg', NULL, '2023-02-04 09:38:07', '2023-02-04 09:38:07'),
(6, 'Healthy', 'http://localhost:8000/public/images/63de51d23e62f_pexels-foodie-factor-566566.jpg', NULL, '2023-02-04 09:38:42', '2023-02-04 09:38:42');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `email`, `message`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'duaa.nawas@yahoo.com', 'Hi, I just want to say that I like this service! Keep going!', NULL, '2023-02-04 20:17:46', '2023-02-04 20:17:46'),
(2, 'lana@gmail.com', 'Hi! I would like to talk to someone about an idea I have for the website! please contact me', NULL, '2023-02-04 20:20:03', '2023-02-04 20:20:03'),
(3, 'duaa.nawas@yahoo.com', 'Thank you', NULL, '2023-02-04 20:20:23', '2023-02-04 20:20:23'),
(4, 'karam@gmail.com', 'How do you guys pick up ingredients', NULL, '2023-02-04 20:21:28', '2023-02-04 20:21:28');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `id` bigint UNSIGNED NOT NULL,
  `meal_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_optional` tinyint(1) NOT NULL DEFAULT '0',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`id`, `meal_id`, `name`, `is_optional`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'Veggie Stock Concentrate', 0, NULL, '2023-02-04 14:13:55', '2023-02-04 14:13:55'),
(2, 1, 'Yellow Onion', 0, NULL, '2023-02-04 14:13:55', '2023-02-04 14:13:55'),
(3, 1, 'Arborio Rice', 0, NULL, '2023-02-04 14:13:55', '2023-02-04 14:13:55'),
(4, 1, 'Chives', 0, NULL, '2023-02-04 14:13:55', '2023-02-04 14:13:55'),
(5, 1, 'Parmesan Cheese', 0, NULL, '2023-02-04 14:13:55', '2023-02-04 14:13:55'),
(6, 1, 'Chicken Breast Strips', 0, NULL, '2023-02-04 14:13:55', '2023-02-04 14:13:55'),
(7, 1, 'Button Mushrooms', 0, NULL, '2023-02-04 14:13:55', '2023-02-04 14:13:55'),
(8, 1, 'Garlic', 0, NULL, '2023-02-04 14:13:55', '2023-02-04 14:13:55'),
(9, 1, 'Grape Tomatoes', 0, NULL, '2023-02-04 14:13:55', '2023-02-04 14:13:55'),
(10, 1, 'Garlic Herb Butter', 1, NULL, '2023-02-04 14:13:55', '2023-02-04 14:13:55'),
(11, 1, 'Chili Flakes', 1, NULL, '2023-02-04 14:13:55', '2023-02-04 14:13:55'),
(34, 4, 'Pasture-Raised Eggs', 0, NULL, '2023-02-04 14:48:02', '2023-02-04 14:48:02'),
(35, 4, '15.5-Oz Can Cannellini Beans', 0, NULL, '2023-02-04 14:48:02', '2023-02-04 14:48:02'),
(36, 4, ' 8-Oz Can Tomato Sauce', 0, NULL, '2023-02-04 14:48:02', '2023-02-04 14:48:02'),
(37, 4, 'Italian Seasoning', 0, NULL, '2023-02-04 14:48:02', '2023-02-04 14:48:02'),
(38, 4, 'Grape Tomatoes', 0, NULL, '2023-02-04 14:48:02', '2023-02-04 14:48:02'),
(39, 4, 'Baby Spinach', 0, NULL, '2023-02-04 14:48:02', '2023-02-04 14:48:02'),
(40, 4, 'Calabrian Chile Paste', 1, NULL, '2023-02-04 14:48:02', '2023-02-04 14:48:02'),
(41, 4, 'Capers', 1, NULL, '2023-02-04 14:48:02', '2023-02-04 14:48:02'),
(42, 4, 'Grated Parmesan Cheese', 1, NULL, '2023-02-04 14:48:02', '2023-02-04 14:48:02'),
(43, 5, '4 boneless chicken breasts', 0, NULL, '2023-02-04 15:05:04', '2023-02-04 15:05:04'),
(44, 5, '1 cup Italian-seasoned breadcrumbs', 0, NULL, '2023-02-04 15:05:04', '2023-02-04 15:05:04'),
(45, 5, '1/2 cup all-purpose flour', 0, NULL, '2023-02-04 15:05:04', '2023-02-04 15:05:04'),
(46, 5, '2 eggs, beaten', 0, NULL, '2023-02-04 15:05:04', '2023-02-04 15:05:04'),
(47, 5, '1 cup marinara sauce', 0, NULL, '2023-02-04 15:05:04', '2023-02-04 15:05:04'),
(48, 5, '1 cup shredded mozzarella cheese', 0, NULL, '2023-02-04 15:05:04', '2023-02-04 15:05:04'),
(49, 5, 'Salt and pepper to taste', 1, NULL, '2023-02-04 15:05:04', '2023-02-04 15:05:04'),
(50, 5, 'Fresh basil leaves for garnish', 1, NULL, '2023-02-04 15:05:04', '2023-02-04 15:05:04'),
(51, 6, ' boneless chicken breasts, sliced', 0, NULL, '2023-02-04 15:08:10', '2023-02-04 15:08:10'),
(52, 6, 'mixed vegetables', 0, NULL, '2023-02-04 15:08:10', '2023-02-04 15:08:10'),
(53, 6, 'oil', 0, NULL, '2023-02-04 15:08:10', '2023-02-04 15:08:10'),
(54, 6, ' garlic, minced', 0, NULL, '2023-02-04 15:08:10', '2023-02-04 15:08:10'),
(55, 6, 'soy sauce', 0, NULL, '2023-02-04 15:08:10', '2023-02-04 15:08:10'),
(56, 6, 'cornstarch', 0, NULL, '2023-02-04 15:08:10', '2023-02-04 15:08:10'),
(57, 6, 'water', 0, NULL, '2023-02-04 15:08:10', '2023-02-04 15:08:10'),
(58, 6, 'Salt and pepper to taste', 1, NULL, '2023-02-04 15:08:10', '2023-02-04 15:08:10'),
(59, 7, '1 lb boneless chicken breasts, sliced', 0, NULL, '2023-02-04 15:12:22', '2023-02-04 15:12:22'),
(60, 7, '2 tablespoons taco seasoning', 0, NULL, '2023-02-04 15:12:22', '2023-02-04 15:12:22'),
(61, 7, '8 soft taco shells', 0, NULL, '2023-02-04 15:12:22', '2023-02-04 15:12:22'),
(62, 7, '2 cups shredded cheese', 0, NULL, '2023-02-04 15:12:22', '2023-02-04 15:12:22'),
(63, 7, '1 cup salsa', 0, NULL, '2023-02-04 15:12:22', '2023-02-04 15:12:22'),
(64, 7, '1 avocado, diced', 0, NULL, '2023-02-04 15:12:22', '2023-02-04 15:12:22'),
(65, 7, 'Fresh cilantro leaves for garnish', 1, NULL, '2023-02-04 15:12:22', '2023-02-04 15:12:22'),
(66, 7, 'Salt and pepper to taste', 1, NULL, '2023-02-04 15:12:22', '2023-02-04 15:12:22'),
(67, 8, '1 lb boneless chicken breasts, sliced', 0, NULL, '2023-02-04 15:17:54', '2023-02-04 15:17:54'),
(68, 8, '1 lb fettuccine pasta', 0, NULL, '2023-02-04 15:17:54', '2023-02-04 15:17:54'),
(69, 8, '2 tablespoons butter', 0, NULL, '2023-02-04 15:17:54', '2023-02-04 15:17:54'),
(70, 8, '2 cloves garlic, minced', 0, NULL, '2023-02-04 15:17:54', '2023-02-04 15:17:54'),
(71, 8, '2 cups heavy cream', 0, NULL, '2023-02-04 15:17:54', '2023-02-04 15:17:54'),
(72, 8, '1 cup grated parmesan cheese', 1, NULL, '2023-02-04 15:17:54', '2023-02-04 15:17:54'),
(73, 8, 'Salt and pepper to taste', 1, NULL, '2023-02-04 15:17:54', '2023-02-04 15:17:54'),
(74, 8, 'Fresh parsley leaves for garnish', 1, NULL, '2023-02-04 15:17:54', '2023-02-04 15:17:54'),
(75, 9, '1 lb beef tenderloin, sliced', 0, NULL, '2023-02-04 15:20:35', '2023-02-04 15:20:35'),
(76, 9, '2 cups sliced mushrooms', 0, NULL, '2023-02-04 15:20:35', '2023-02-04 15:20:35'),
(77, 9, '2 tablespoons butter', 0, NULL, '2023-02-04 15:20:35', '2023-02-04 15:20:35'),
(78, 9, '2 cloves garlic, minced', 0, NULL, '2023-02-04 15:20:35', '2023-02-04 15:20:35'),
(79, 9, '2 cups beef broth', 0, NULL, '2023-02-04 15:20:35', '2023-02-04 15:20:35'),
(80, 9, '1 cup sour cream', 0, NULL, '2023-02-04 15:20:35', '2023-02-04 15:20:35'),
(81, 9, '1 lb egg noodles', 0, NULL, '2023-02-04 15:20:35', '2023-02-04 15:20:35'),
(82, 9, 'Salt and pepper to taste', 1, NULL, '2023-02-04 15:20:35', '2023-02-04 15:20:35'),
(83, 9, 'Fresh parsley leaves for garnish', 1, NULL, '2023-02-04 15:20:35', '2023-02-04 15:20:35'),
(84, 10, '2 lbs ground beef', 0, NULL, '2023-02-04 15:22:34', '2023-02-04 15:22:34'),
(85, 10, '1 cup breadcrumbs', 0, NULL, '2023-02-04 15:22:34', '2023-02-04 15:22:34'),
(86, 10, '2 eggs', 0, NULL, '2023-02-04 15:22:34', '2023-02-04 15:22:34'),
(87, 10, '1/2 cup milk', 0, NULL, '2023-02-04 15:22:34', '2023-02-04 15:22:34'),
(88, 10, '1/2 cup ketchup', 0, NULL, '2023-02-04 15:22:34', '2023-02-04 15:22:34'),
(89, 10, '2 teaspoons Worcestershire sauce', 0, NULL, '2023-02-04 15:22:34', '2023-02-04 15:22:34'),
(90, 10, 'Salt and pepper to taste', 1, NULL, '2023-02-04 15:22:34', '2023-02-04 15:22:34'),
(91, 10, 'Fresh parsley leaves for garnish', 1, NULL, '2023-02-04 15:22:34', '2023-02-04 15:22:34'),
(92, 11, '1 lb beef sirloin, sliced', 0, NULL, '2023-02-04 15:29:56', '2023-02-04 15:29:56'),
(93, 11, '2 cups broccoli florets', 0, NULL, '2023-02-04 15:29:56', '2023-02-04 15:29:56'),
(94, 11, '2 tablespoons oil', 0, NULL, '2023-02-04 15:29:56', '2023-02-04 15:29:56'),
(95, 11, '2 cloves garlic, minced', 0, NULL, '2023-02-04 15:29:56', '2023-02-04 15:29:56'),
(96, 11, '1 tablespoon ginger, grated', 0, NULL, '2023-02-04 15:29:56', '2023-02-04 15:29:56'),
(97, 11, '1/4 cup soy sauce', 0, NULL, '2023-02-04 15:29:56', '2023-02-04 15:29:56'),
(98, 11, '1 tablespoon cornstarch', 0, NULL, '2023-02-04 15:29:56', '2023-02-04 15:29:56'),
(99, 11, '1/4 cup water', 0, NULL, '2023-02-04 15:29:56', '2023-02-04 15:29:56'),
(100, 11, 'Cooked rice for serving', 1, NULL, '2023-02-04 15:29:56', '2023-02-04 15:29:56'),
(101, 12, '2 medium eggplants, sliced', 0, NULL, '2023-02-04 15:34:02', '2023-02-04 15:34:02'),
(102, 12, '1 cup breadcrumbs', 0, NULL, '2023-02-04 15:34:02', '2023-02-04 15:34:02'),
(103, 12, '2 eggs, beaten', 0, NULL, '2023-02-04 15:34:02', '2023-02-04 15:34:02'),
(104, 12, '1 cup flour', 0, NULL, '2023-02-04 15:34:02', '2023-02-04 15:34:02'),
(105, 12, '1 cup marinara sauce', 0, NULL, '2023-02-04 15:34:02', '2023-02-04 15:34:02'),
(106, 12, '1 cup shredded mozzarella cheese', 0, NULL, '2023-02-04 15:34:02', '2023-02-04 15:34:02'),
(107, 12, 'Salt and pepper to taste', 1, NULL, '2023-02-04 15:34:02', '2023-02-04 15:34:02'),
(108, 12, 'Fresh basil leaves for garnish', 1, NULL, '2023-02-04 15:34:02', '2023-02-04 15:34:02'),
(109, 13, '4 bell peppers, halved and seeded', 0, NULL, '2023-02-04 15:35:59', '2023-02-04 15:35:59'),
(110, 13, '1 cup cooked rice', 0, NULL, '2023-02-04 15:35:59', '2023-02-04 15:35:59'),
(111, 13, '2 cups chopped spinach', 0, NULL, '2023-02-04 15:35:59', '2023-02-04 15:35:59'),
(112, 13, '1/2 cup crumbled feta cheese', 0, NULL, '2023-02-04 15:35:59', '2023-02-04 15:35:59'),
(113, 13, '2 tablespoons olive oil', 0, NULL, '2023-02-04 15:35:59', '2023-02-04 15:35:59'),
(114, 13, 'Salt and pepper to taste', 1, NULL, '2023-02-04 15:35:59', '2023-02-04 15:35:59'),
(115, 13, 'Fresh parsley leaves for garnish', 1, NULL, '2023-02-04 15:35:59', '2023-02-04 15:35:59'),
(116, 14, '2 cups mixed vegetables', 0, NULL, '2023-02-04 15:38:24', '2023-02-04 15:38:24'),
(117, 14, '1 cup quinoa', 0, NULL, '2023-02-04 15:38:24', '2023-02-04 15:38:24'),
(118, 14, '2 tablespoons olive oil', 0, NULL, '2023-02-04 15:38:24', '2023-02-04 15:38:24'),
(119, 14, '2 tablespoons olive oil', 0, NULL, '2023-02-04 15:38:24', '2023-02-04 15:38:24'),
(120, 14, '1 tablespoon red wine vinegar', 0, NULL, '2023-02-04 15:38:24', '2023-02-04 15:38:24'),
(121, 14, '1 clove garlic, minced', 0, NULL, '2023-02-04 15:38:24', '2023-02-04 15:38:24'),
(122, 14, 'Salt and pepper to taste', 1, NULL, '2023-02-04 15:38:24', '2023-02-04 15:38:24'),
(123, 15, '1 can black beans, drained and rinsed', 0, NULL, '2023-02-04 15:40:29', '2023-02-04 15:40:29'),
(124, 15, '1 cup cooked quinoa', 0, NULL, '2023-02-04 15:40:29', '2023-02-04 15:40:29'),
(125, 15, '1/2 cup bread', 0, NULL, '2023-02-04 15:40:29', '2023-02-04 15:40:29'),
(126, 15, '1/2 cup chopped onions', 0, NULL, '2023-02-04 15:40:29', '2023-02-04 15:40:29'),
(127, 15, '1 clove garlic, minced', 0, NULL, '2023-02-04 15:40:29', '2023-02-04 15:40:29'),
(128, 15, '1 egg', 0, NULL, '2023-02-04 15:40:29', '2023-02-04 15:40:29'),
(129, 15, '1 tablespoon chili powder', 0, NULL, '2023-02-04 15:40:29', '2023-02-04 15:40:29'),
(130, 15, '1 teaspoon cumin', 0, NULL, '2023-02-04 15:40:29', '2023-02-04 15:40:29'),
(131, 15, 'Salt and pepper to taste', 1, NULL, '2023-02-04 15:40:29', '2023-02-04 15:40:29'),
(132, 16, '1 lb. chicken breast, sliced', 0, NULL, '2023-02-04 15:46:44', '2023-02-04 15:46:44'),
(133, 16, '1 red bell pepper, sliced', 0, NULL, '2023-02-04 15:46:44', '2023-02-04 15:46:44'),
(134, 16, '1 green bell pepper, sliced', 0, NULL, '2023-02-04 15:46:44', '2023-02-04 15:46:44'),
(135, 16, '1 yellow onion, sliced', 0, NULL, '2023-02-04 15:46:44', '2023-02-04 15:46:44'),
(136, 16, '2 cloves garlic, minced', 0, NULL, '2023-02-04 15:46:44', '2023-02-04 15:46:44'),
(137, 16, '2 tbsp. oil (vegetable or canola)', 0, NULL, '2023-02-04 15:46:44', '2023-02-04 15:46:44'),
(138, 16, '1 tsp. cumin', 0, NULL, '2023-02-04 15:46:44', '2023-02-04 15:46:44'),
(139, 16, '1 tsp. chili powder', 0, NULL, '2023-02-04 15:46:44', '2023-02-04 15:46:44'),
(140, 16, 'Salt and pepper, to taste', 1, NULL, '2023-02-04 15:46:44', '2023-02-04 15:46:44'),
(141, 16, 'Tortillas, for serving', 1, NULL, '2023-02-04 15:46:44', '2023-02-04 15:46:44'),
(142, 17, '1 lb. lamb, cubed', 0, NULL, '2023-02-04 15:55:54', '2023-02-04 15:55:54'),
(143, 17, '2 cups jasmine rice', 0, NULL, '2023-02-04 15:55:54', '2023-02-04 15:55:54'),
(144, 17, '4 cups chicken broth', 0, NULL, '2023-02-04 15:55:54', '2023-02-04 15:55:54'),
(145, 17, '1 onion, chopped', 0, NULL, '2023-02-04 15:55:54', '2023-02-04 15:55:54'),
(146, 17, '2 cloves garlic, minced', 0, NULL, '2023-02-04 15:55:54', '2023-02-04 15:55:54'),
(147, 17, '2 cups plain yogurt', 0, NULL, '2023-02-04 15:55:54', '2023-02-04 15:55:54'),
(148, 17, '1 tsp. cumin', 1, NULL, '2023-02-04 15:55:54', '2023-02-04 15:55:54'),
(149, 17, '1 tsp. paprika', 1, NULL, '2023-02-04 15:55:54', '2023-02-04 15:55:54'),
(150, 17, '1 cup pine nuts', 1, NULL, '2023-02-04 15:55:54', '2023-02-04 15:55:54'),
(151, 17, 'Salt and pepper, to taste', 1, NULL, '2023-02-04 15:55:54', '2023-02-04 15:55:54'),
(152, 18, '1 jar grape leaves', 0, NULL, '2023-02-04 16:00:32', '2023-02-04 16:00:32'),
(153, 18, '1 cup short-grain rice', 0, NULL, '2023-02-04 16:00:32', '2023-02-04 16:00:32'),
(154, 18, '1/2 cup parsley, chopped', 0, NULL, '2023-02-04 16:00:32', '2023-02-04 16:00:32'),
(155, 18, '1/2 cup mint, chopped', 0, NULL, '2023-02-04 16:00:32', '2023-02-04 16:00:32'),
(156, 18, '1/2 cup dill, chopped', 0, NULL, '2023-02-04 16:00:32', '2023-02-04 16:00:32'),
(157, 18, '1 onion, chopped', 0, NULL, '2023-02-04 16:00:32', '2023-02-04 16:00:32'),
(158, 18, '2 cloves garlic, minced', 0, NULL, '2023-02-04 16:00:32', '2023-02-04 16:00:32'),
(159, 18, 'Salt and pepper, to taste', 1, NULL, '2023-02-04 16:00:32', '2023-02-04 16:00:32'),
(160, 18, '1 tsp. lemon zest', 1, NULL, '2023-02-04 16:00:32', '2023-02-04 16:00:32'),
(161, 18, '2 tbsp. lemon juice', 1, NULL, '2023-02-04 16:00:32', '2023-02-04 16:00:32'),
(162, 18, '2 tbsp. olive oil', 1, NULL, '2023-02-04 16:00:32', '2023-02-04 16:00:32'),
(163, 19, '1 cup lentils', 0, NULL, '2023-02-04 16:02:56', '2023-02-04 16:02:56'),
(164, 19, '1 cup short-grain rice', 0, NULL, '2023-02-04 16:02:56', '2023-02-04 16:02:56'),
(165, 19, '2 onions, sliced', 0, NULL, '2023-02-04 16:02:56', '2023-02-04 16:02:56'),
(166, 19, '2 cloves garlic, minced', 0, NULL, '2023-02-04 16:02:56', '2023-02-04 16:02:56'),
(167, 19, '1 tsp. cumin', 0, NULL, '2023-02-04 16:02:56', '2023-02-04 16:02:56'),
(168, 19, '1 tsp. coriander', 0, NULL, '2023-02-04 16:02:56', '2023-02-04 16:02:56'),
(169, 19, '2 tbsp. olive oil', 0, NULL, '2023-02-04 16:02:56', '2023-02-04 16:02:56'),
(170, 19, 'Salt and pepper, to taste', 1, NULL, '2023-02-04 16:02:56', '2023-02-04 16:02:56'),
(171, 20, '1 lb. ground beef', 0, NULL, '2023-02-04 16:05:21', '2023-02-04 16:05:21'),
(172, 20, '1 onion, chopped', 0, NULL, '2023-02-04 16:05:21', '2023-02-04 16:05:21'),
(173, 20, '2 cloves garlic, minced', 0, NULL, '2023-02-04 16:05:21', '2023-02-04 16:05:21'),
(174, 20, 'Salt and pepper, to taste', 0, NULL, '2023-02-04 16:05:21', '2023-02-04 16:05:21'),
(175, 20, '1 tsp. paprika', 0, NULL, '2023-02-04 16:05:21', '2023-02-04 16:05:21'),
(176, 20, '1 tsp. cumin', 0, NULL, '2023-02-04 16:05:21', '2023-02-04 16:05:21'),
(177, 20, '1 tsp. coriander', 0, NULL, '2023-02-04 16:05:21', '2023-02-04 16:05:21'),
(178, 20, '1/2 cup parsley, chopped', 0, NULL, '2023-02-04 16:05:21', '2023-02-04 16:05:21'),
(179, 20, '1/2 cup mint, chopped', 0, NULL, '2023-02-04 16:05:21', '2023-02-04 16:05:21'),
(180, 20, '1 cup plain yogurt', 1, NULL, '2023-02-04 16:05:21', '2023-02-04 16:05:21'),
(181, 20, '2 tbsp. lemon juice', 1, NULL, '2023-02-04 16:05:21', '2023-02-04 16:05:21'),
(182, 21, '1 cup quinoa', 0, NULL, '2023-02-04 16:11:38', '2023-02-04 16:11:38'),
(183, 21, '1 cup cherry tomatoes, halved', 0, NULL, '2023-02-04 16:11:38', '2023-02-04 16:11:38'),
(184, 21, '1 cup cucumber, chopped', 0, NULL, '2023-02-04 16:11:38', '2023-02-04 16:11:38'),
(185, 21, '1 cup red bell pepper, chopped', 0, NULL, '2023-02-04 16:11:38', '2023-02-04 16:11:38'),
(186, 21, '1/2 cup red onion, chopped', 0, NULL, '2023-02-04 16:11:38', '2023-02-04 16:11:38'),
(187, 21, '1/2 cup parsley, chopped', 0, NULL, '2023-02-04 16:11:38', '2023-02-04 16:11:38'),
(188, 21, '1/2 cup mint, chopped', 0, NULL, '2023-02-04 16:11:38', '2023-02-04 16:11:38'),
(189, 21, '2 tbsp. lemon juice', 0, NULL, '2023-02-04 16:11:38', '2023-02-04 16:11:38'),
(190, 21, '2 tbsp. olive oil', 0, NULL, '2023-02-04 16:11:38', '2023-02-04 16:11:38'),
(191, 22, '2 sweet potatoes, peeled and chopped', 0, NULL, '2023-02-04 16:14:11', '2023-02-04 16:14:11'),
(192, 22, '1 can black beans, drained and rinsed', 0, NULL, '2023-02-04 16:14:11', '2023-02-04 16:14:11'),
(193, 22, '2 tbsp. olive oil', 0, NULL, '2023-02-04 16:14:11', '2023-02-04 16:14:11'),
(194, 22, 'Salt and pepper, to taste', 0, NULL, '2023-02-04 16:14:11', '2023-02-04 16:14:11'),
(195, 22, '1 tsp. cumin', 0, NULL, '2023-02-04 16:14:11', '2023-02-04 16:14:11'),
(196, 22, '1 tsp. paprika', 0, NULL, '2023-02-04 16:14:11', '2023-02-04 16:14:11'),
(197, 22, '1/2 cup plain Greek yogurt', 0, NULL, '2023-02-04 16:14:11', '2023-02-04 16:14:11'),
(198, 22, '2 tbsp. lime juice', 1, NULL, '2023-02-04 16:14:11', '2023-02-04 16:14:11'),
(199, 22, '2 tbsp. cilantro, chopped', 1, NULL, '2023-02-04 16:14:11', '2023-02-04 16:14:11'),
(200, 23, '1 zucchini, cut into chunks', 0, NULL, '2023-02-04 16:16:24', '2023-02-04 16:16:24'),
(201, 23, '1 yellow squash, cut into chunks', 0, NULL, '2023-02-04 16:16:24', '2023-02-04 16:16:24'),
(202, 23, '1 red bell pepper, cut into chunks', 0, NULL, '2023-02-04 16:16:24', '2023-02-04 16:16:24'),
(203, 23, '1 onion, cut into chunks', 0, NULL, '2023-02-04 16:16:24', '2023-02-04 16:16:24'),
(204, 23, '2 tbsp. olive oil', 0, NULL, '2023-02-04 16:16:24', '2023-02-04 16:16:24'),
(205, 23, '2 tbsp. lemon juice', 0, NULL, '2023-02-04 16:16:24', '2023-02-04 16:16:24'),
(206, 23, 'Salt and pepper, to taste', 1, NULL, '2023-02-04 16:16:24', '2023-02-04 16:16:24'),
(207, 23, '1 tsp. paprika', 1, NULL, '2023-02-04 16:16:24', '2023-02-04 16:16:24'),
(208, 23, '1 tsp. cumin', 1, NULL, '2023-02-04 16:16:24', '2023-02-04 16:16:24'),
(209, 24, '2 slices whole grain bread, toasted', 0, NULL, '2023-02-04 16:17:55', '2023-02-04 16:17:55'),
(210, 24, '1 avocado, mashed', 0, NULL, '2023-02-04 16:17:55', '2023-02-04 16:17:55'),
(211, 24, '2 ripe tomatoes, sliced', 0, NULL, '2023-02-04 16:17:55', '2023-02-04 16:17:55'),
(212, 24, 'Salt and pepper, to taste', 0, NULL, '2023-02-04 16:17:55', '2023-02-04 16:17:55'),
(213, 25, '4 salmon fillets', 0, NULL, '2023-02-04 16:20:02', '2023-02-04 16:20:02'),
(214, 25, '2 tbsp. olive oil', 0, NULL, '2023-02-04 16:20:02', '2023-02-04 16:20:02'),
(215, 25, 'Salt and pepper, to taste', 0, NULL, '2023-02-04 16:20:02', '2023-02-04 16:20:02'),
(216, 25, '1 tsp. thyme', 0, NULL, '2023-02-04 16:20:02', '2023-02-04 16:20:02'),
(217, 25, '1 tsp. garlic powder', 0, NULL, '2023-02-04 16:20:02', '2023-02-04 16:20:02'),
(218, 25, '1 tsp. paprika', 1, NULL, '2023-02-04 16:20:02', '2023-02-04 16:20:02'),
(219, 26, '4 tilapia fillets', 0, NULL, '2023-02-04 16:21:27', '2023-02-04 16:21:27'),
(220, 26, '2 tbsp. lemon juice', 0, NULL, '2023-02-04 16:21:27', '2023-02-04 16:21:27'),
(221, 26, 'Salt and pepper, to taste', 0, NULL, '2023-02-04 16:21:27', '2023-02-04 16:21:27'),
(222, 26, '1 tsp. thyme', 0, NULL, '2023-02-04 16:21:27', '2023-02-04 16:21:27'),
(223, 26, '1 tsp. basil', 0, NULL, '2023-02-04 16:21:27', '2023-02-04 16:21:27'),
(224, 26, '1 tbsp. olive oil', 0, NULL, '2023-02-04 16:21:27', '2023-02-04 16:21:27'),
(225, 27, '8 oz. whole grain pasta', 0, NULL, '2023-02-04 16:22:51', '2023-02-04 16:22:51'),
(226, 27, '1 lb. cooked shrimp', 0, NULL, '2023-02-04 16:22:51', '2023-02-04 16:22:51'),
(227, 27, '1/2 cup basil pesto sauce', 0, NULL, '2023-02-04 16:22:51', '2023-02-04 16:22:51'),
(228, 27, 'Salt and pepper, to taste', 1, NULL, '2023-02-04 16:22:51', '2023-02-04 16:22:51'),
(229, 28, '4 tuna steaks', 0, NULL, '2023-02-04 16:24:35', '2023-02-04 16:24:35'),
(230, 28, '2 tbsp. olive oil', 0, NULL, '2023-02-04 16:24:35', '2023-02-04 16:24:35'),
(231, 28, 'Salt and pepper, to taste', 0, NULL, '2023-02-04 16:24:35', '2023-02-04 16:24:35'),
(232, 28, '1 mango, diced', 0, NULL, '2023-02-04 16:24:35', '2023-02-04 16:24:35'),
(233, 28, '1/2 red onion, diced', 0, NULL, '2023-02-04 16:24:35', '2023-02-04 16:24:35'),
(234, 28, '1 jalapeno, diced', 0, NULL, '2023-02-04 16:24:35', '2023-02-04 16:24:35'),
(235, 28, '1 lime, juiced', 0, NULL, '2023-02-04 16:24:35', '2023-02-04 16:24:35');

-- --------------------------------------------------------

--
-- Table structure for table `meals`
--

CREATE TABLE `meals` (
  `id` bigint UNSIGNED NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_desc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `long_desc` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `prep_time` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tags` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cost` double(8,2) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `meals`
--

INSERT INTO `meals` (`id`, `category_id`, `image`, `name`, `short_desc`, `long_desc`, `prep_time`, `tags`, `note`, `cost`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'http://localhost:8000/public/images/63de925383225_mushroom-chive-risotto-23897b89.jpg', 'Chicken, Mushroom, & Chive Risotto', 'with Garlic Herb Butter', 'Think a rich, creamy risotto is something you can only enjoy at fancy restaurants? Think again! This version couldn’t be easier to whip up in your own kitchen. Just toast your rice in garlicky butter, then simmer with stock until the rice is perfectly al dente and creamy. Top it off with tomatoes, crispy mushrooms, and a generous dollop of garlic herb butter, then garnish with chives and Parmesan for a seriously impressive dinner.', '50 min', 'Protein Smart', NULL, NULL, NULL, '2023-02-04 14:13:55', '2023-02-04 14:13:55'),
(4, 5, 'http://localhost:8000/public/images/63de9a5235c48_0206_2PV2_White-Bean-Shakshuka_565_SQ_Web.jpg', 'Oven-Baked White Bean Shakshuka', 'with Garlic Pitas', 'Featuring pre-chopped ingredients and a recyclable baking tin, our Ready to Cook recipes make prep and cleaning a breeze. Just assemble, bake, and enjoy! For this vibrant shakshuka, we’re nestling rich eggs between a mix of white beans, spinach, and a creamy tomato sauce. You\'ll top the dish with tangy parmesan and serve it alongside warm garlic and herb pitas.', '25 min', NULL, NULL, NULL, NULL, '2023-02-04 14:48:02', '2023-02-04 14:48:02'),
(5, 1, 'http://localhost:8000/public/images/63de9e509ccc1_chicken-parmesan-1-32.jpg', 'Chicken Parmesan', 'Crispy breaded chicken topped with marinara sauce and melted mozzarella cheese.', 'This classic Italian dish is a crowd-pleaser and easy to make at home. The chicken is coated in breadcrumbs and pan-fried until golden brown, then topped with a flavorful marinara sauce and melted mozzarella cheese. Serve it with pasta or a side salad for a complete meal.', '30 min', NULL, NULL, NULL, NULL, '2023-02-04 15:05:04', '2023-02-04 15:05:04'),
(6, 1, 'http://localhost:8000/public/images/63de9f0a657dc_chicken-stir-fry-1.jpg', 'Chicken Stir-Fry', 'A quick and healthy meal of stir-fried chicken and vegetables in a flavorful sauce.', 'This stir-fry is a great way to use up any vegetables you have on hand. Simply saute the chicken and vegetables in a wok or large skillet, and toss with your favorite sauce. Serve over rice for a complete meal.', '20 min', NULL, NULL, NULL, NULL, '2023-02-04 15:08:10', '2023-02-04 15:08:10'),
(7, 1, 'http://localhost:8000/public/images/63dea00606713_shredded-chicken-tacos-2.jpg', 'Chicken Tacos', 'Tacos filled with seasoned and grilled chicken, topped with cheese, salsa, and avocado.', 'These tacos are a fun and flavorful meal that can be customized to your liking. Simply grill the chicken, warm the tortillas, and top with your favorite toppings. Serve with a side of rice or beans for a complete meal.', '15 minutes', 'Quick', NULL, NULL, NULL, '2023-02-04 15:12:22', '2023-02-04 15:12:22'),
(8, 1, 'http://localhost:8000/public/images/63dea1524a689_Homemade-Chicken-Fettuccine-Alfredo-10.jpg', 'Chicken Alfredo Pasta', 'A creamy pasta dish with chicken and a homemade Alfredo sauce.', 'This comfort food classic is easy to make at home and sure to please. Simply cook the pasta, saute the chicken, and whip up the Alfredo sauce for a meal that will have everyone coming back for seconds.', '30 min', NULL, NULL, NULL, NULL, '2023-02-04 15:17:54', '2023-02-04 15:17:54'),
(9, 2, 'http://localhost:8000/public/images/63dea1f34ca65_25202beef-stroganoff-iii-ddmfs-1x1-235-91456f5615b849c8bf743a54e86af2d9.jpg', 'Beef Stroganoff', 'Tender strips of beef in a rich and creamy mushroom sauce served over noodles.', 'This traditional Russian dish is a hearty and comforting meal that\'s easy to make at home. Simply saute the beef and mushrooms, then stir in a creamy sauce for a delicious meal that\'s perfect for a cozy night in.', '30 min', NULL, NULL, NULL, NULL, '2023-02-04 15:20:35', '2023-02-04 15:20:35'),
(10, 2, 'http://localhost:8000/public/images/63dea26a2a429_Classic-Meatloaf-side.jpg', 'Meatloaf', 'A classic American dish of ground beef mixed with breadcrumbs, eggs, and seasonings, baked to perfection.', 'This comfort food classic is easy to make and always a crowd-pleaser. Simply mix together the ingredients, form into a loaf, and bake for a delicious meal that\'s perfect for a weeknight dinner.', '1 hour', NULL, NULL, NULL, NULL, '2023-02-04 15:22:34', '2023-02-04 15:22:34'),
(11, 2, 'http://localhost:8000/public/images/63dea42464a43_Beef-and-Broccoli-2-500x375.jpg', 'Beef and Broccoli Stir-Fry', 'A quick and healthy meal of stir-fried beef and broccoli.', 'This stir-fry dish is a classic Asian meal that\'s quick and easy to make. Simply stir-fry the beef and broccoli in a hot wok with the sauce, and serve over rice for a delicious and healthy dinner.', '20 min', NULL, NULL, NULL, NULL, '2023-02-04 15:29:56', '2023-02-04 15:29:56'),
(12, 4, 'http://localhost:8000/public/images/63dea51a00f00_eggplant-parmesan-3.jpg', 'Eggplant Parmesan', 'Breaded and fried eggplant slices topped with marinara sauce and melted mozzarella cheese.', 'This vegetarian twist on a classic Italian dish is a delicious and satisfying meal. The breaded eggplant slices are fried until crispy, then topped with marinara sauce and melted mozzarella for a decadent and flavorful dish.', '45 min', NULL, NULL, NULL, NULL, '2023-02-04 15:34:02', '2023-02-04 15:34:02'),
(13, 4, 'http://localhost:8000/public/images/63dea58f863eb_JPEG-image-194-scaled.jpeg', 'Spinach and Feta Stuffed Bell Peppers', 'Bell peppers stuffed with a mixture of spinach, feta cheese, and rice.', 'These stuffed bell peppers are a healthy and delicious meal that\'s easy to make. Simply mix together the stuffing ingredients, stuff the peppers, and bake for a satisfying and nutritious dinner.', '45 min', NULL, NULL, NULL, NULL, '2023-02-04 15:35:59', '2023-02-04 15:35:59'),
(14, 4, 'http://localhost:8000/public/images/63dea6202d6a4_069-roasted-vegetable-salad-768x960.jpg', 'Roasted Vegetable Quinoa Bowl', 'A bowl of roasted vegetables and quinoa, topped with a tangy vinaigrette.', 'This healthy and filling meal is easy to make and packed with nutrients. Simply roast your favorite vegetables, then toss with quinoa and a tangy vinaigrette for a delicious and nutritious dinner.', '45 min', NULL, NULL, NULL, NULL, '2023-02-04 15:38:24', '2023-02-04 15:38:24'),
(15, 4, 'http://localhost:8000/public/images/63dea69db8f7d_maxresdefault.jpg', 'Veggie Burger', 'A hearty and flavorful veggie burger made with a blend of beans, grains, and spices.', 'These veggie burgers are a delicious and satisfying alternative to traditional meat burgers. Simply mix together the ingredients, form into patties, and cook until crispy for a delicious and healthy meal.', '30 min', NULL, NULL, NULL, NULL, '2023-02-04 15:40:29', '2023-02-04 15:40:29'),
(16, 1, 'http://localhost:8000/public/images/63dea81495a42_chicken-fajitas-recipe-square.jpg', 'Chicken Fajitas', 'Spicy and delicious chicken fajitas made with juicy chicken, peppers, and onions.', 'These chicken fajitas are a quick and easy dinner that is full of flavor. The juicy chicken is cooked with peppers and onions and seasoned with spicy spices, making for a delicious and satisfying meal. Serve with tortillas for a complete meal.', '15 minutes', 'Quick', NULL, NULL, NULL, '2023-02-04 15:46:44', '2023-02-04 15:46:44'),
(17, 5, 'http://localhost:8000/public/images/63deaa3a74f9f_mansaf-4-1.jpg', 'Mansaf', 'A traditional Jordanian dish made with lamb, rice, and yogurt sauce.', 'Mansaf is a flavorful and comforting dish that is a staple in Jordanian cuisine. The tender lamb is cooked in a rich and savory sauce and served over a bed of fluffy rice. The dish is then topped with a creamy yogurt sauce for a complete and satisfying meal.', '1.5 hours', NULL, NULL, NULL, NULL, '2023-02-04 15:55:54', '2023-02-04 15:55:54'),
(18, 5, 'http://localhost:8000/public/images/63deab5042592_Stuffed-Grape-Leaves-Dolmas-1.jpg', 'Stuffed Grape Leaves', 'Tender grape leaves stuffed with a mixture of rice, herbs, and spices.', 'These stuffed grape leaves are a popular Middle Eastern dish that is easy to make and full of flavor. The tender grape leaves are stuffed with a mixture of rice, herbs, and spices and then steamed until tender. They are then served with a simple lemon and olive oil dressing for a complete and satisfying meal.', '30 min', NULL, NULL, NULL, NULL, '2023-02-04 16:00:32', '2023-02-04 16:00:32'),
(19, 5, 'http://localhost:8000/public/images/63deabe067216_Mujadara-11.jpg', 'Mujadara', 'A hearty and flavorful dish made with lentils, rice, and caramelized onions.', 'Mujadara is a traditional Middle Eastern dish that is simple to make and full of flavor. Lentils are cooked with rice and caramelized onions until tender and flavorful. Serve with a simple side salad for a complete and satisfying meal.', '45 min', NULL, NULL, NULL, NULL, '2023-02-04 16:02:56', '2023-02-04 16:02:56'),
(20, 5, 'http://localhost:8000/public/images/63deac71180c1_Kebabs.jpg', 'Kofta Kebabs', 'Spiced meatballs grilled to perfection and served with a tangy sauce.', 'Kofta kebabs are a popular Middle Eastern dish that is perfect for grilling season. The spiced meatballs are made with a mixture of ground beef, spices, and herbs and then grilled until juicy and flavorful. Serve with a tangy sauce for a complete and satisfying meal.', '30 min', NULL, NULL, NULL, NULL, '2023-02-04 16:05:21', '2023-02-04 16:05:21'),
(21, 6, 'http://localhost:8000/public/images/63deadea23b8a_quinoa-salad.jpg', 'Quinoa Salad', 'A flavorful and healthy salad made with quinoa, veggies, and a tangy dressing.', 'This quinoa salad is a delicious and healthy meal that is perfect for a light lunch or dinner. It is made with quinoa, veggies, and a tangy dressing for a complete and satisfying meal. Serve with a side of grilled chicken for a complete meal.', '20 min', NULL, NULL, NULL, NULL, '2023-02-04 16:11:38', '2023-02-04 16:11:38'),
(22, 6, 'http://localhost:8000/public/images/63deae83a01a0_b4.jpg', 'Sweet Potato and Black Bean Bowl', 'A delicious and healthy bowl made with roasted sweet potatoes, black beans, and a flavorful sauce.', 'This sweet potato and black bean bowl is a delicious and healthy meal that is perfect for lunch or dinner. The sweet potatoes are roasted until tender and slightly charred, while the black beans are seasoned with spices and simmered until flavorful. Serve with a flavorful sauce for a complete and satisfying meal.', '30 min', NULL, NULL, NULL, NULL, '2023-02-04 16:14:11', '2023-02-04 16:14:11'),
(23, 4, 'http://localhost:8000/public/images/63deaf0849d23_vegetable-kabobs-featured-2021.jpg', 'Grilled Veggie Skewers', 'A delicious and healthy dish made with grilled veggies and a flavorful marinade.', 'These grilled veggie skewers are a great way to get in your daily dose of veggies. The veggies are marinated in a flavorful mixture of olive oil, lemon juice, and spices and then grilled until tender and slightly charred. Serve with a side of brown rice or quinoa for a complete and satisfying meal.', '15 min', NULL, NULL, NULL, NULL, '2023-02-04 16:16:24', '2023-02-04 16:16:24'),
(24, 6, 'http://localhost:8000/public/images/63deaf6384b22_Tomato-Avocado-Toast-FI-1200x1200-1.jpg', 'Avocado and Tomato Toast', 'A delicious and healthy breakfast made with fresh avocado and ripe tomatoes on toasted whole grain bread.', 'This avocado and tomato toast is a quick and easy breakfast that is perfect for those on-the-go mornings. The creamy avocado and juicy tomatoes are the perfect complement to the toasted whole grain bread. Top with a sprinkle of salt and pepper for a complete and satisfying meal.', '10 min', NULL, NULL, NULL, NULL, '2023-02-04 16:17:55', '2023-02-04 16:17:55'),
(25, 3, 'http://localhost:8000/public/images/63deafe2e740f_Pan-seared-salmon.jpg', 'Pan-Seared Salmon', 'A delicious and healthy dish made with pan-seared salmon fillet and seasoned with herbs and spices.', 'This pan-seared salmon is a quick and easy meal that is perfect for those busy weeknights. The salmon fillet is seasoned with a mixture of herbs and spices and then pan-seared until tender and flaky. Serve with a side of roasted vegetables for a complete and satisfying meal.', '15 min', NULL, NULL, NULL, NULL, '2023-02-04 16:20:02', '2023-02-04 16:20:02'),
(26, 3, 'http://localhost:8000/public/images/63deb037572a2_wholesomeyum-Lemon-Butter-Baked-Tilapia-Recipe-14.jpg', 'Baked Tilapia with Lemon and Herbs', 'A delicious and healthy dish made with baked tilapia fillet and seasoned with lemon and herbs.', 'This baked tilapia with lemon and herbs is a delicious and healthy meal that is perfect for those busy weeknights. The tilapia fillet is seasoned with lemon and herbs and then baked until tender and flaky. Serve with a side of brown rice for a complete and satisfying meal.', '15 min', NULL, NULL, NULL, NULL, '2023-02-04 16:21:27', '2023-02-04 16:21:27'),
(27, 3, 'http://localhost:8000/public/images/63deb08bd8fb5_Pesto-Shrimp-Pasta-eat.jpg', 'Pesto Shrimp Pasta', 'A delicious and healthy pasta dish made with cooked shrimp and a basil pesto sauce.', 'This pesto shrimp pasta is a delicious and healthy meal that is perfect for those busy weeknights. The cooked shrimp is combined with a basil pesto sauce and served over a bed of whole grain pasta. Serve with a side of roasted vegetables for a complete and satisfying meal.', '20 min', NULL, NULL, NULL, NULL, '2023-02-04 16:22:51', '2023-02-04 16:22:51'),
(28, 3, 'http://localhost:8000/public/images/63deb3e634559_blogwp_grilled-ahi-tuna-with-fresh-mango-salsa-scaled-1.jpg', 'Grilled Tuna Steak with Mango Salsa', 'A delicious and healthy dish made with grilled tuna steak and a sweet and tangy mango salsa.', 'This grilled tuna steak with mango salsa is a delicious and healthy meal that is perfect for those warm summer nights. The tuna steak is grilled to perfection and topped with a sweet and tangy mango salsa. Serve with a side of quinoa for a complete and satisfying meal.', '15 min', NULL, NULL, NULL, NULL, '2023-02-04 16:24:35', '2023-02-04 16:37:10');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_11_24_141742_create_categories_table', 1),
(6, '2022_11_24_141829_create_pendings_table', 1),
(7, '2022_11_24_141952_create_pricings_table', 1),
(8, '2022_11_24_142032_create_subscriptions_table', 1),
(9, '2022_11_24_142110_create_payments_table', 1),
(10, '2022_11_24_142358_create_preferred_categories_table', 1),
(11, '2022_11_24_142434_create_meals_table', 1),
(12, '2022_11_24_142450_create_nutrients_table', 1),
(13, '2022_11_24_142510_create_ingredients_table', 1),
(14, '2022_11_24_142530_create_weeks_table', 1),
(15, '2022_11_24_142551_create_removed_ingredients_table', 1),
(16, '2022_11_24_142609_create_contacts_table', 1),
(17, '2022_11_24_142629_create_applications_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `nutrients`
--

CREATE TABLE `nutrients` (
  `id` bigint UNSIGNED NOT NULL,
  `meal_id` bigint UNSIGNED NOT NULL,
  `calories` double(8,2) DEFAULT NULL,
  `fat` double(8,2) DEFAULT NULL,
  `saturated_fat` double(8,2) DEFAULT NULL,
  `carbs` double(8,2) DEFAULT NULL,
  `sugar` double(8,2) DEFAULT NULL,
  `fiber` double(8,2) DEFAULT NULL,
  `protein` double(8,2) DEFAULT NULL,
  `cholesterol` double(8,2) DEFAULT NULL,
  `sodium` double(8,2) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nutrients`
--

INSERT INTO `nutrients` (`id`, `meal_id`, `calories`, `fat`, `saturated_fat`, `carbs`, `sugar`, `fiber`, `protein`, `cholesterol`, `sodium`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 770.00, 29.00, 13.00, 81.00, 8.00, 2.00, 43.00, 150.00, 710.00, NULL, '2023-02-04 14:13:55', '2023-02-04 14:13:55'),
(4, 4, 300.00, 30.00, 3.00, 30.00, 7.50, 7.50, 15.00, 250.00, 300.00, NULL, '2023-02-04 14:48:02', '2023-02-04 14:48:02'),
(5, 5, 500.00, 20.00, 7.00, 50.00, 7.00, 2.00, 40.00, 140.00, 800.00, NULL, '2023-02-04 15:05:04', '2023-02-04 15:05:04'),
(6, 6, 400.00, 20.00, 3.00, 30.00, 6.00, 5.00, 35.00, 70.00, 500.00, NULL, '2023-02-04 15:08:10', '2023-02-04 15:08:10'),
(7, 7, 500.00, 20.00, 10.00, 60.00, 6.00, 4.00, 35.00, 70.00, 600.00, NULL, '2023-02-04 15:12:22', '2023-02-04 15:12:22'),
(8, 8, 800.00, 60.00, 35.00, 60.00, 4.00, 2.00, 35.00, 145.00, 800.00, NULL, '2023-02-04 15:17:54', '2023-02-04 15:17:54'),
(9, 9, 700.00, 40.00, 20.00, 60.00, 4.00, 4.00, 35.00, 145.00, 800.00, NULL, '2023-02-04 15:20:35', '2023-02-04 15:20:35'),
(10, 10, 800.00, 50.00, 20.00, 40.00, 10.00, 2.00, 40.00, 145.00, 800.00, NULL, '2023-02-04 15:22:34', '2023-02-04 15:22:34'),
(11, 11, 600.00, 30.00, 10.00, 60.00, 4.00, 4.00, 35.00, 145.00, 800.00, NULL, '2023-02-04 15:29:56', '2023-02-04 15:29:56'),
(12, 12, 500.00, 20.00, 10.00, 60.00, 8.00, 4.00, 20.00, 145.00, 800.00, NULL, '2023-02-04 15:34:02', '2023-02-04 15:34:02'),
(13, 13, 400.00, 20.00, 10.00, 50.00, 4.00, 4.00, 15.00, 145.00, 800.00, NULL, '2023-02-04 15:35:59', '2023-02-04 15:35:59'),
(14, 14, 400.00, 20.00, 2.00, 50.00, 4.00, 6.00, 15.00, 0.00, 400.00, NULL, '2023-02-04 15:38:24', '2023-02-04 15:38:24'),
(15, 15, 400.00, 12.00, 2.00, 60.00, 4.00, 10.00, 20.00, 55.00, 500.00, NULL, '2023-02-04 15:40:29', '2023-02-04 15:40:29'),
(16, 16, 320.00, 12.00, 2.00, 18.00, 4.00, 3.00, 39.00, 70.00, 360.00, NULL, '2023-02-04 15:46:44', '2023-02-04 15:46:44'),
(17, 17, 550.00, 25.00, 8.00, 44.00, 8.00, 4.00, 39.00, 70.00, 550.00, NULL, '2023-02-04 15:55:54', '2023-02-04 15:55:54'),
(18, 18, 200.00, 9.00, 1.50, 26.00, 1.00, 2.00, 6.00, 0.00, 400.00, NULL, '2023-02-04 16:00:32', '2023-02-04 16:00:32'),
(19, 19, 380.00, 9.00, 1.50, 60.00, 4.00, 10.00, 16.00, 0.00, 400.00, NULL, '2023-02-04 16:02:56', '2023-02-04 16:02:56'),
(20, 20, 450.00, 27.00, 12.00, 8.00, 4.00, 1.00, 42.00, 90.00, 600.00, NULL, '2023-02-04 16:05:21', '2023-02-04 16:05:21'),
(21, 21, 320.00, 14.00, 2.00, 40.00, 4.00, 5.00, 10.00, 0.00, 200.00, NULL, '2023-02-04 16:11:38', '2023-02-04 16:11:38'),
(22, 22, 300.00, 9.00, 2.00, 44.00, 7.00, 9.00, 12.00, 0.00, 200.00, NULL, '2023-02-04 16:14:11', '2023-02-04 16:14:11'),
(23, 23, 150.00, 9.00, 1.00, 16.00, 5.00, 3.00, 4.00, 0.00, 200.00, NULL, '2023-02-04 16:16:24', '2023-02-04 16:16:24'),
(24, 24, 300.00, 18.00, 3.00, 30.00, 4.00, 7.00, 8.00, 0.00, 200.00, NULL, '2023-02-04 16:17:55', '2023-02-04 16:17:55'),
(25, 25, 250.00, 16.00, 2.00, 1.00, 0.00, 0.00, 22.00, 55.00, 200.00, NULL, '2023-02-04 16:20:02', '2023-02-04 16:20:02'),
(26, 26, 200.00, 8.00, 1.00, 2.00, 0.00, 0.00, 22.00, 55.00, 200.00, NULL, '2023-02-04 16:21:27', '2023-02-04 16:21:27'),
(27, 27, 400.00, 16.00, 2.00, 44.00, 3.00, 5.00, 28.00, 145.00, 200.00, NULL, '2023-02-04 16:22:51', '2023-02-04 16:22:51'),
(28, 28, 350.00, 15.00, 2.00, 20.00, 14.00, 2.00, 40.00, 55.00, 200.00, NULL, '2023-02-04 16:24:35', '2023-02-04 16:24:35');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `subscription_id` bigint UNSIGNED NOT NULL,
  `card_num` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` double(8,2) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `user_id`, `subscription_id`, `card_num`, `amount`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 2, 1, '{\"brand\":\"visa\",\"country\":\"US\",\"last4\":\"4242\"}', 136.00, NULL, '2023-02-04 18:02:36', '2023-02-04 18:02:36'),
(2, 3, 2, '{\"brand\":\"visa\",\"country\":\"US\",\"last4\":\"4242\"}', 288.00, NULL, '2023-02-04 18:46:40', '2023-02-04 18:46:40'),
(3, 4, 3, '{\"brand\":\"visa\",\"country\":\"US\",\"last4\":\"4242\"}', 108.00, NULL, '2023-02-04 18:53:24', '2023-02-04 18:53:24'),
(4, 5, 4, '{\"brand\":\"visa\",\"country\":\"US\",\"last4\":\"4242\"}', 136.00, NULL, '2023-02-04 18:58:31', '2023-02-04 18:58:31');

-- --------------------------------------------------------

--
-- Table structure for table `pendings`
--

CREATE TABLE `pendings` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `people_num` int DEFAULT NULL,
  `meals_per_week` int DEFAULT NULL,
  `categories` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `day_of_delivery` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pendings`
--

INSERT INTO `pendings` (`id`, `user_id`, `people_num`, `meals_per_week`, `categories`, `day_of_delivery`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 2, 2, 4, '1,2', '1', '2023-02-04 18:02:36', '2023-02-04 17:53:43', '2023-02-04 18:02:36'),
(2, 3, 4, 6, '1,2,4,5', '4', '2023-02-04 18:46:40', '2023-02-04 18:45:43', '2023-02-04 18:46:40'),
(3, 4, 2, 3, '6,4', '2', '2023-02-04 18:53:24', '2023-02-04 18:52:50', '2023-02-04 18:53:24'),
(4, 5, 2, 4, '1,3,4', '5', '2023-02-04 18:58:31', '2023-02-04 18:58:11', '2023-02-04 18:58:31');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `preferred_categories`
--

CREATE TABLE `preferred_categories` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `preferred_categories`
--

INSERT INTO `preferred_categories` (`id`, `user_id`, `category_id`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 3, 1, NULL, '2023-02-04 18:46:40', '2023-02-04 18:46:40'),
(2, 3, 2, NULL, '2023-02-04 18:46:40', '2023-02-04 18:46:40'),
(3, 3, 4, NULL, '2023-02-04 18:46:40', '2023-02-04 18:46:40'),
(4, 3, 5, NULL, '2023-02-04 18:46:40', '2023-02-04 18:46:40');

-- --------------------------------------------------------

--
-- Table structure for table `pricings`
--

CREATE TABLE `pricings` (
  `id` bigint UNSIGNED NOT NULL,
  `servings` double(8,2) NOT NULL,
  `price_per_serving` double(8,2) NOT NULL,
  `total_price` double(8,2) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pricings`
--

INSERT INTO `pricings` (`id`, `servings`, `price_per_serving`, `total_price`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 4.00, 5.00, 80.00, NULL, NULL, NULL),
(2, 6.00, 4.50, 108.00, NULL, NULL, NULL),
(3, 8.00, 4.25, 136.00, NULL, NULL, NULL),
(4, 10.00, 4.00, 160.00, NULL, NULL, NULL),
(5, 12.00, 3.75, 180.00, NULL, NULL, NULL),
(6, 16.00, 3.50, 224.00, NULL, NULL, NULL),
(7, 20.00, 3.25, 260.00, NULL, NULL, NULL),
(8, 24.00, 3.00, 288.00, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `removed_ingredients`
--

CREATE TABLE `removed_ingredients` (
  `id` bigint UNSIGNED NOT NULL,
  `week_id` bigint UNSIGNED NOT NULL,
  `meal_id` bigint UNSIGNED NOT NULL,
  `remove_1` int DEFAULT NULL,
  `remove_2` int DEFAULT NULL,
  `remove_3` int DEFAULT NULL,
  `remove_4` int DEFAULT NULL,
  `remove_5` int DEFAULT NULL,
  `remove_6` int DEFAULT NULL,
  `remove_7` int DEFAULT NULL,
  `remove_8` int DEFAULT NULL,
  `remove_9` int DEFAULT NULL,
  `remove_10` int DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `removed_ingredients`
--

INSERT INTO `removed_ingredients` (`id`, `week_id`, `meal_id`, `remove_1`, `remove_2`, `remove_3`, `remove_4`, `remove_5`, `remove_6`, `remove_7`, `remove_8`, `remove_9`, `remove_10`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 7, 66, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-02-04 18:03:13', '2023-02-04 18:03:13'),
(2, 5, 15, 131, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-02-04 18:47:35', '2023-02-04 18:47:35'),
(3, 14, 5, 50, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-02-04 19:03:16', '2023-02-04 19:01:53', '2023-02-04 19:03:16'),
(4, 13, 17, 151, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-02-04 19:03:00', '2023-02-04 19:03:00');

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `people_num` int NOT NULL,
  `meals_per_week` int NOT NULL,
  `price` int NOT NULL,
  `ending_date` date NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `user_id`, `people_num`, `meals_per_week`, `price`, `ending_date`, `status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 2, 2, 4, 136, '2023-03-04', 1, NULL, '2023-02-04 18:02:36', '2023-02-04 18:02:36'),
(2, 3, 4, 6, 288, '2023-03-04', 1, NULL, '2023-02-04 18:46:40', '2023-02-04 18:46:40'),
(3, 4, 2, 3, 108, '2023-03-04', 1, NULL, '2023-02-04 18:53:24', '2023-02-04 18:53:24'),
(4, 5, 2, 4, 136, '2023-03-04', 1, NULL, '2023-02-04 18:58:31', '2023-02-04 18:58:31');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `google_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `street` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `building` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `floor` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  `is_sub` tinyint(1) DEFAULT NULL,
  `is_auto_renewed` tinyint(1) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `role`, `google_id`, `facebook_id`, `password`, `first_name`, `last_name`, `phone`, `city`, `street`, `building`, `floor`, `address`, `image`, `is_sub`, `is_auto_renewed`, `email_verified_at`, `deleted_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'duaa.nawwas@gmail.com', 'admin', '106930320121667250912', NULL, NULL, 'Dua\'a', 'Nawwas', NULL, NULL, NULL, NULL, NULL, NULL, 'https://lh3.googleusercontent.com/a/AEdFTp63mlq43LJ4HUHMtXHSCTaiaxVnVKAG4LdaFVpH=s96-c', NULL, NULL, NULL, NULL, NULL, '2023-02-04 09:30:27', '2023-02-04 09:30:27'),
(2, 'duaa.nawas@yahoo.com', 'user', NULL, '3261516974178055', NULL, 'Duaa', 'Nawas', '0778086357', 'Amman', '36', '9', '1', '{\"lat\":32.0803461599773,\"lng\":36.09079043488769}', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3261516974178055&height=50&width=50&ext=1678136014&hash=AeR7MxWpGdNwi3-9KKg', 1, 1, NULL, NULL, NULL, '2023-02-04 17:53:35', '2023-02-04 18:02:36'),
(3, 'sana@gmail.com', 'user', NULL, NULL, '$2y$10$xTfYLtjGUL8Mx0yzsYrBVO5ZWWEdREVeObr79xwlYZkMq9.MAO8X.', 'Sana', 'Ahmad', '0779627573', 'zarqa', '36', '77', '6', '{\"lat\":32.08853481089811,\"lng\":36.10813973868408}', 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png', 1, 1, NULL, NULL, NULL, '2023-02-04 18:45:42', '2023-02-04 18:46:40'),
(4, 'lana@gmail.com', 'user', NULL, NULL, '$2y$10$i02NRZkgAkMM.t9o3f/iKuhv/VokaWbwD89YO14RcjAN2FsyhEX2e', 'Lana', 'Naser', '0778086357', 'Amman', '44', '9', '7', '{\"lat\":31.99805338202299,\"lng\":35.89583969216054}', 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png', 1, 1, NULL, NULL, NULL, '2023-02-04 18:50:34', '2023-02-04 18:53:24'),
(5, 'ahmad@gmail.com', 'user', NULL, NULL, '$2y$10$/k/WurH6lFTGNA5FTavWC.ioowsLrrSH5.XOxOFUdCTTxOJZeEavm', 'ahmad', 'subhi', '07777453777', 'zarqa', 'bla st', 'ggdaaa', '5', '{\"lat\":32.0877353,\"lng\":36.095186}', 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png', 1, 1, NULL, NULL, NULL, '2023-02-04 18:57:57', '2023-02-04 18:58:31'),
(6, 'maha@gmail.com', 'user', NULL, NULL, '$2y$10$ikTXbf2HtzOcszchpa/z0ewwpxvbW.CjSEbGokYyfQUHM6tj30Bc.', 'Maha', 'Salem', NULL, NULL, NULL, NULL, NULL, NULL, 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png', NULL, NULL, NULL, NULL, NULL, '2023-02-04 19:16:01', '2023-02-04 19:16:01'),
(7, 'juman@gmail.com', 'user', NULL, NULL, '$2y$10$rvcADvsrJeVi3c246xA3SO5kYR6iURkELz84ixuQfcsQaGjVw62YG', 'Juman', 'Maher', NULL, NULL, NULL, NULL, NULL, NULL, 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png', NULL, NULL, NULL, NULL, NULL, '2023-02-04 19:21:34', '2023-02-04 19:21:34'),
(8, 'new@yahoo.com', 'user', NULL, NULL, '$2y$10$kKpgkjXOjRjMgel2OcbnfuI/SEM5VB43bwb30/jNGRTjbsoihI3Iq', 'new', 'new', NULL, NULL, NULL, NULL, NULL, NULL, 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png', NULL, NULL, NULL, NULL, NULL, '2023-02-04 19:24:40', '2023-02-04 19:24:40'),
(9, 'test@mail.com', 'user', NULL, NULL, '$2y$10$mK4BwYsSRIzr7Im7UoFx1.9P.Q.gE.CaFtVw8jHc02wNWABIXHuUO', 'test', 'test', NULL, NULL, NULL, NULL, NULL, NULL, 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png', NULL, NULL, NULL, NULL, NULL, '2023-02-04 19:25:16', '2023-02-04 19:25:16');

-- --------------------------------------------------------

--
-- Table structure for table `weeks`
--

CREATE TABLE `weeks` (
  `id` bigint UNSIGNED NOT NULL,
  `subscription_id` bigint UNSIGNED NOT NULL,
  `week_num` int NOT NULL,
  `meal1_id` bigint UNSIGNED DEFAULT NULL,
  `meal2_id` bigint UNSIGNED DEFAULT NULL,
  `meal3_id` bigint UNSIGNED DEFAULT NULL,
  `meal4_id` bigint UNSIGNED DEFAULT NULL,
  `meal5_id` bigint UNSIGNED DEFAULT NULL,
  `meal6_id` bigint UNSIGNED DEFAULT NULL,
  `day_of_delivery` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `starting_date` date NOT NULL,
  `ending_date` date NOT NULL,
  `is_delivered` tinyint(1) NOT NULL DEFAULT '0',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `weeks`
--

INSERT INTO `weeks` (`id`, `subscription_id`, `week_num`, `meal1_id`, `meal2_id`, `meal3_id`, `meal4_id`, `meal5_id`, `meal6_id`, `day_of_delivery`, `starting_date`, `ending_date`, `is_delivered`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 6, 8, 7, 26, NULL, NULL, '1', '2023-02-04', '2023-02-11', 1, NULL, '2023-02-04 18:02:36', '2023-02-04 18:36:43'),
(2, 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, '1', '2023-02-11', '2023-02-18', 0, NULL, '2023-02-04 18:02:36', '2023-02-04 18:02:36'),
(3, 1, 3, NULL, NULL, NULL, NULL, NULL, NULL, '1', '2023-02-18', '2023-02-25', 0, NULL, '2023-02-04 18:02:36', '2023-02-04 18:02:36'),
(4, 1, 4, NULL, NULL, NULL, NULL, NULL, NULL, '1', '2023-02-25', '2023-03-04', 0, NULL, '2023-02-04 18:02:36', '2023-02-04 18:02:36'),
(5, 2, 1, 13, 14, 10, 15, 18, 20, '4', '2023-02-04', '2023-02-11', 0, NULL, '2023-02-04 18:46:40', '2023-02-04 18:47:43'),
(6, 2, 2, NULL, NULL, NULL, NULL, NULL, NULL, '4', '2023-02-11', '2023-02-18', 0, NULL, '2023-02-04 18:46:40', '2023-02-04 18:46:40'),
(7, 2, 3, NULL, NULL, NULL, NULL, NULL, NULL, '4', '2023-02-18', '2023-02-25', 0, NULL, '2023-02-04 18:46:40', '2023-02-04 18:46:40'),
(8, 2, 4, NULL, NULL, NULL, NULL, NULL, NULL, '4', '2023-02-25', '2023-03-04', 0, NULL, '2023-02-04 18:46:40', '2023-02-04 18:46:40'),
(9, 3, 1, NULL, NULL, NULL, NULL, NULL, NULL, '2', '2023-02-04', '2023-02-11', 0, NULL, '2023-02-04 18:53:24', '2023-02-04 18:53:24'),
(10, 3, 2, NULL, NULL, NULL, NULL, NULL, NULL, '2', '2023-02-11', '2023-02-18', 0, NULL, '2023-02-04 18:53:24', '2023-02-04 18:53:24'),
(11, 3, 3, NULL, NULL, NULL, NULL, NULL, NULL, '2', '2023-02-18', '2023-02-25', 0, NULL, '2023-02-04 18:53:24', '2023-02-04 18:53:24'),
(12, 3, 4, NULL, NULL, NULL, NULL, NULL, NULL, '2', '2023-02-25', '2023-03-04', 0, NULL, '2023-02-04 18:53:24', '2023-02-04 18:53:24'),
(13, 4, 1, 17, NULL, NULL, NULL, NULL, NULL, '5', '2023-02-04', '2023-02-11', 0, NULL, '2023-02-04 18:58:31', '2023-02-04 19:03:00'),
(14, 4, 2, NULL, 28, NULL, NULL, NULL, NULL, '5', '2023-02-11', '2023-02-18', 0, NULL, '2023-02-04 18:58:31', '2023-02-04 19:03:16'),
(15, 4, 3, 5, NULL, NULL, NULL, NULL, NULL, '5', '2023-02-18', '2023-02-25', 0, NULL, '2023-02-04 18:58:31', '2023-02-04 19:02:38'),
(16, 4, 4, NULL, NULL, NULL, NULL, NULL, NULL, '5', '2023-02-25', '2023-03-04', 0, NULL, '2023-02-04 18:58:31', '2023-02-04 18:58:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ingredients_meal_id_foreign` (`meal_id`);

--
-- Indexes for table `meals`
--
ALTER TABLE `meals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `meals_category_id_foreign` (`category_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nutrients`
--
ALTER TABLE `nutrients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nutrients_meal_id_foreign` (`meal_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payments_user_id_foreign` (`user_id`),
  ADD KEY `payments_subscription_id_foreign` (`subscription_id`);

--
-- Indexes for table `pendings`
--
ALTER TABLE `pendings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pendings_user_id_foreign` (`user_id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `preferred_categories`
--
ALTER TABLE `preferred_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `preferred_categories_user_id_foreign` (`user_id`),
  ADD KEY `preferred_categories_category_id_foreign` (`category_id`);

--
-- Indexes for table `pricings`
--
ALTER TABLE `pricings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `removed_ingredients`
--
ALTER TABLE `removed_ingredients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `removed_ingredients_week_id_foreign` (`week_id`),
  ADD KEY `removed_ingredients_meal_id_foreign` (`meal_id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subscriptions_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `weeks`
--
ALTER TABLE `weeks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `weeks_subscription_id_foreign` (`subscription_id`),
  ADD KEY `weeks_meal1_id_foreign` (`meal1_id`),
  ADD KEY `weeks_meal2_id_foreign` (`meal2_id`),
  ADD KEY `weeks_meal3_id_foreign` (`meal3_id`),
  ADD KEY `weeks_meal4_id_foreign` (`meal4_id`),
  ADD KEY `weeks_meal5_id_foreign` (`meal5_id`),
  ADD KEY `weeks_meal6_id_foreign` (`meal6_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=236;

--
-- AUTO_INCREMENT for table `meals`
--
ALTER TABLE `meals`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `nutrients`
--
ALTER TABLE `nutrients`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pendings`
--
ALTER TABLE `pendings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `preferred_categories`
--
ALTER TABLE `preferred_categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pricings`
--
ALTER TABLE `pricings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `removed_ingredients`
--
ALTER TABLE `removed_ingredients`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `weeks`
--
ALTER TABLE `weeks`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD CONSTRAINT `ingredients_meal_id_foreign` FOREIGN KEY (`meal_id`) REFERENCES `meals` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `meals`
--
ALTER TABLE `meals`
  ADD CONSTRAINT `meals_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `nutrients`
--
ALTER TABLE `nutrients`
  ADD CONSTRAINT `nutrients_meal_id_foreign` FOREIGN KEY (`meal_id`) REFERENCES `meals` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_subscription_id_foreign` FOREIGN KEY (`subscription_id`) REFERENCES `subscriptions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `pendings`
--
ALTER TABLE `pendings`
  ADD CONSTRAINT `pendings_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `preferred_categories`
--
ALTER TABLE `preferred_categories`
  ADD CONSTRAINT `preferred_categories_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `preferred_categories_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `removed_ingredients`
--
ALTER TABLE `removed_ingredients`
  ADD CONSTRAINT `removed_ingredients_meal_id_foreign` FOREIGN KEY (`meal_id`) REFERENCES `meals` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `removed_ingredients_week_id_foreign` FOREIGN KEY (`week_id`) REFERENCES `weeks` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD CONSTRAINT `subscriptions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `weeks`
--
ALTER TABLE `weeks`
  ADD CONSTRAINT `weeks_meal1_id_foreign` FOREIGN KEY (`meal1_id`) REFERENCES `meals` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `weeks_meal2_id_foreign` FOREIGN KEY (`meal2_id`) REFERENCES `meals` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `weeks_meal3_id_foreign` FOREIGN KEY (`meal3_id`) REFERENCES `meals` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `weeks_meal4_id_foreign` FOREIGN KEY (`meal4_id`) REFERENCES `meals` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `weeks_meal5_id_foreign` FOREIGN KEY (`meal5_id`) REFERENCES `meals` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `weeks_meal6_id_foreign` FOREIGN KEY (`meal6_id`) REFERENCES `meals` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `weeks_subscription_id_foreign` FOREIGN KEY (`subscription_id`) REFERENCES `subscriptions` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
