-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 08, 2023 at 07:30 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `capstone`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `account_id` int(11) NOT NULL,
  `school_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created_by` datetime NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`account_id`, `school_id`, `username`, `password`, `type`, `status`, `created_by`, `updated_by`, `updated_at`) VALUES
(1, 18104621, 'raylxylem', '$2a$10$9nBqqiAFHL1VCKAAc8cuFeaRuC/ATO138vbNyYgM/cv4dMYASrdMG', 1, 1, '2023-01-19 00:00:00', '1', '2023-01-19 00:00:00'),
(17, 0, 'arnanplanco', '$2a$10$ISlKgjP2Fg7cFY/NyDbo7uyG6Jza2ADBZdR1Pkj.bT3wW0ixxXevK', 2, 1, '2023-01-30 17:04:30', '1', '2023-01-30 17:04:30'),
(19, 0, 'grade8', '$2a$10$JAIaztuFbmoacmXtsolc0esu0ghVjEdnCkfUdRF4LLDeKNmoSreTi', 1, 1, '2023-02-09 13:14:41', '1', '2023-02-09 13:14:41'),
(20, 0, 'grade9', '$2a$10$UI6F3xxf7.OKSI8lLf8vWe4//ch4ah/JupFYeMz9f8bDa7oP9FbnK', 1, 1, '2023-02-09 13:23:18', '1', '2023-02-09 13:23:18'),
(21, 0, '18106334', '$2a$10$CIWtlTM5xtXboXUPZDBcy.qTZsuvoEuUeFWL5NrxG2LMxn.10znC6', 2, 1, '2023-03-21 07:43:18', '1', '2023-03-21 07:43:18'),
(22, 0, '1234567', '$2a$10$fARU6pUmWCBy8I6ErVr1h.OdQR2oC5fHArGmXqPJv9CYYL2JTXEsa', 1, 1, '2023-03-21 15:58:28', '1', '2023-03-21 15:58:28'),
(23, 0, '777', '$2a$10$fHopBJ9zaL98kHMbBrerwOed7Rz2.Bbq97BdLgEcugdF4jr2SNp7q', 1, 1, '2023-03-22 06:27:02', '1', '2023-03-22 06:27:02'),
(24, 0, '999', '$2a$10$r65bhF/xlFDHR8E.Gd/Amei9YzIx.eYJMsNW3BZVV2..zNayroy.q', 1, 1, '2023-03-28 09:36:26', '1', '2023-03-28 09:36:26'),
(25, 888888, '888', '$2a$10$fHopBJ9zaL98kHMbBrerwOed7Rz2.Bbq97BdLgEcugdF4jr2SNp7q', 3, 1, '2023-04-08 04:36:54', '', '2023-04-08 04:36:54');

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `address_id` int(11) NOT NULL,
  `application_id` int(11) DEFAULT NULL,
  `house_or_street` varchar(255) DEFAULT NULL,
  `street_name` varchar(255) DEFAULT NULL,
  `barangay` varchar(255) DEFAULT NULL,
  `municipality` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `zip_code` varchar(100) DEFAULT NULL,
  `type` enum('current','permanent','both') NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `account_id` int(11) DEFAULT NULL,
  `school_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `suffix` varchar(50) DEFAULT NULL,
  `gender` enum('female','male') NOT NULL,
  `birthdate` date NOT NULL,
  `age` int(11) NOT NULL,
  `contact_no` varchar(50) DEFAULT NULL,
  `marital_status` enum('single','married','separated','divorced','widowed') NOT NULL,
  `position` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `account_id`, `school_id`, `first_name`, `middle_name`, `last_name`, `suffix`, `gender`, `birthdate`, `age`, `contact_no`, `marital_status`, `position`, `created_at`, `updated_at`) VALUES
(1, 25, 888888, 'Karen', '', 'Gray', NULL, 'female', '1989-04-05', 45, '09772013342', 'single', 'Admin', '2023-04-08 07:22:20', '2023-04-08 07:22:20');

-- --------------------------------------------------------

--
-- Table structure for table `announcements`
--

CREATE TABLE `announcements` (
  `announcement_id` int(11) NOT NULL,
  `title` varchar(120) NOT NULL,
  `content` varchar(500) NOT NULL,
  `type` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `announcements`
--

INSERT INTO `announcements` (`announcement_id`, `title`, `content`, `type`, `created_by`, `created_at`) VALUES
(1, 'Wa ra gud', 'hahahaha', 1, 23, '2023-04-07 23:54:17'),
(2, 'No classes', 'Kay bagyo', 1, 1, '2023-04-07 23:54:17'),
(17, 'test_1_title', 'test_1_content', 1, 1, '2023-04-07 23:54:17'),
(18, 'wqwfqf', 'efewfw', 0, 21, '2023-04-07 23:54:17'),
(19, 'wdwqdqwdqw', 'qwdqwd', 0, 21, '2023-04-07 23:54:17'),
(20, '4y54y46y', 'u65u', 0, 23, '2023-04-07 23:54:17'),
(21, 'tere', 'yteytey', 0, 23, '2023-04-07 23:54:17'),
(22, '777', '777', 0, 23, '2023-04-07 23:54:32'),
(23, '354353', '345353', 0, 23, '2023-04-08 00:00:14'),
(24, '1111', '1111', 0, 23, '2023-04-08 00:21:41'),
(25, '555', '5555', 0, 23, '2023-04-08 00:53:04'),
(26, 'sssssssssssssssssssssssss', 'ssssssssssssssssssssss', 0, 21, '2023-04-08 01:04:37'),
(27, '77777777777777777777777777777', '777777777777777777777777', 0, 21, '2023-04-08 10:32:20');

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `application_id` int(11) NOT NULL,
  `school_yr_id` int(11) NOT NULL,
  `year_level_to_enroll` int(11) NOT NULL,
  `is_approved` tinyint(1) DEFAULT 0,
  `learner_info_id` int(11) NOT NULL,
  `parent_guardian_info_id` int(11) NOT NULL,
  `returning_learner_info_id` int(11) DEFAULT NULL,
  `student_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE `grades` (
  `grade_id` int(11) NOT NULL,
  `subject_assignment_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `first_grading` int(11) DEFAULT NULL,
  `second_grading` int(11) DEFAULT NULL,
  `third_grading` int(11) DEFAULT NULL,
  `fourth_grading` int(11) DEFAULT NULL,
  `final_grading` int(11) DEFAULT NULL,
  `remarks` varchar(500) DEFAULT NULL,
  `has_remedial` tinyint(1) DEFAULT 0,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`grade_id`, `subject_assignment_id`, `student_id`, `first_grading`, `second_grading`, `third_grading`, `fourth_grading`, `final_grading`, `remarks`, `has_remedial`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, 74, 75, 80, 90, 90, NULL, 0, '2023-04-07 17:01:53', '2023-04-07 17:01:53', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `learner_info`
--

CREATE TABLE `learner_info` (
  `learner_info_id` int(11) NOT NULL,
  `LRN` varchar(500) DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `suffix` varchar(50) DEFAULT NULL,
  `gender` enum('female','male') NOT NULL,
  `birthdate` date NOT NULL,
  `age` int(11) NOT NULL,
  `contact_no` varchar(50) DEFAULT NULL,
  `marital_status` enum('single','married','separated','divorced','widowed') NOT NULL,
  `psa_birth_cert` varchar(500) DEFAULT NULL,
  `place_of_birth` varchar(500) DEFAULT NULL,
  `mother_tongue` varchar(255) DEFAULT NULL,
  `indigenous` varchar(255) DEFAULT NULL,
  `4ps_no` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `parent_guardian_info`
--

CREATE TABLE `parent_guardian_info` (
  `parent_guardian_info_id` int(11) NOT NULL,
  `mother_first_name` varchar(255) DEFAULT NULL,
  `mother_middle_name` varchar(255) DEFAULT NULL,
  `mother_last_name` varchar(255) DEFAULT NULL,
  `mother_contact_no` varchar(255) DEFAULT NULL,
  `father_first_name` varchar(255) DEFAULT NULL,
  `father_middle_name` varchar(255) DEFAULT NULL,
  `father_last_name` varchar(255) DEFAULT NULL,
  `father_contact_no` varchar(255) DEFAULT NULL,
  `guardian_first_name` varchar(255) DEFAULT NULL,
  `guardian_middle_name` varchar(255) DEFAULT NULL,
  `guardian_last_name` varchar(255) DEFAULT NULL,
  `guardian_contact_no` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `remedial`
--

CREATE TABLE `remedial` (
  `remedial_id` int(11) NOT NULL,
  `grade_id` int(11) NOT NULL,
  `final_grading` int(11) NOT NULL,
  `remedial_class_mark` int(11) NOT NULL,
  `recomputed_final_grading` int(11) NOT NULL,
  `remarks` varchar(500) DEFAULT NULL,
  `conducted_from` date NOT NULL,
  `conducted_to` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `returning_learner_info`
--

CREATE TABLE `returning_learner_info` (
  `returner_id` int(11) NOT NULL,
  `last_grade_level_completed` int(11) NOT NULL,
  `last_school_attended` varchar(500) NOT NULL,
  `last_school_year_completed` varchar(255) NOT NULL,
  `school_id` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `schedules`
--

CREATE TABLE `schedules` (
  `schedule_id` int(11) NOT NULL,
  `subject_assignment_id` int(11) NOT NULL,
  `day` set('M','T','W','TH','F','S') DEFAULT NULL,
  `time_start` time NOT NULL,
  `time_end` time NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `school_year`
--

CREATE TABLE `school_year` (
  `school_yr_id` int(11) NOT NULL,
  `start_year` int(11) NOT NULL,
  `end_year` int(11) NOT NULL,
  `account_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `school_year`
--

INSERT INTO `school_year` (`school_yr_id`, `start_year`, `end_year`, `account_id`) VALUES
(1, 2022, 2023, 21);

-- --------------------------------------------------------

--
-- Table structure for table `sectioning`
--

CREATE TABLE `sectioning` (
  `sectioning_id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sectioning`
--

INSERT INTO `sectioning` (`sectioning_id`, `section_id`, `student_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, '2023-04-07 17:01:40', '2023-04-07 17:01:40', NULL),
(2, 2, 2, '2023-04-08 04:06:33', '2023-04-08 04:06:33', NULL),
(5, 1, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(6, 1, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `section_id` int(11) NOT NULL,
  `school_yr_id` int(11) NOT NULL,
  `teacher_id` int(11) DEFAULT NULL,
  `year_level` int(11) NOT NULL,
  `section_name` varchar(255) NOT NULL,
  `population` int(11) DEFAULT 0,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`section_id`, `school_yr_id`, `teacher_id`, `year_level`, `section_name`, `population`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, 8, 'Kamunggay', 10, '2023-04-07 16:57:34', NULL, NULL),
(2, 1, 1, 8, 'Lily', 10, '2023-04-07 20:43:24', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `student_id` int(11) NOT NULL,
  `account_id` int(11) DEFAULT NULL,
  `school_id` int(11) NOT NULL,
  `year_level` int(11) NOT NULL,
  `is_enrolled` tinyint(1) DEFAULT 0,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `section` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`student_id`, `account_id`, `school_id`, `year_level`, `is_enrolled`, `created_at`, `updated_at`, `first_name`, `last_name`, `section`) VALUES
(1, 23, 18106777, 8, 1, '2023-04-07 17:01:08', '2023-04-07 17:01:08', 'Peaches', 'Sagnoy', 1),
(2, 24, 10101010, 8, 1, '2023-04-08 04:05:35', '2023-04-08 04:05:35', 'Hello', 'Kitty', 2),
(3, 22, 1234567, 8, 1, '2023-04-08 04:10:43', '2023-04-08 04:10:43', 'John', 'Doe', 1);

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `subject_id` int(11) NOT NULL,
  `year_level` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`subject_id`, `year_level`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 8, 'Mathematics', '2023-04-07 16:54:19', '2023-04-07 16:54:19', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subject_assignment`
--

CREATE TABLE `subject_assignment` (
  `subject_assignment_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `teacher_id` int(11) DEFAULT NULL,
  `school_yr_id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subject_assignment`
--

INSERT INTO `subject_assignment` (`subject_assignment_id`, `subject_id`, `teacher_id`, `school_yr_id`, `section_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, 1, 1, '2023-04-07 17:00:19', '2023-04-07 17:00:19', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `teacher_id` int(11) NOT NULL,
  `account_id` int(11) DEFAULT NULL,
  `school_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `suffix` varchar(50) DEFAULT NULL,
  `gender` enum('female','male') NOT NULL,
  `birthdate` date NOT NULL,
  `age` int(11) NOT NULL,
  `contact_no` varchar(50) DEFAULT NULL,
  `marital_status` enum('single','married','separated','divorced','widowed') NOT NULL,
  `position` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`teacher_id`, `account_id`, `school_id`, `first_name`, `middle_name`, `last_name`, `suffix`, `gender`, `birthdate`, `age`, `contact_no`, `marital_status`, `position`, `created_at`, `updated_at`) VALUES
(1, 21, 18106334, 'Natalie', 'Invento', 'Sagnoy', NULL, 'female', '1999-04-04', 23, '09772013342', 'single', 'Teacher', '2023-04-07 16:55:48', '2023-04-07 16:55:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`account_id`);

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`address_id`),
  ADD KEY `application_id` (`application_id`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `school_id` (`school_id`),
  ADD UNIQUE KEY `account_id` (`account_id`);

--
-- Indexes for table `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`announcement_id`);

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`application_id`),
  ADD KEY `school_yr_id` (`school_yr_id`),
  ADD KEY `learner_info_id` (`learner_info_id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `parent_guardian_info_id` (`parent_guardian_info_id`),
  ADD KEY `returning_learner_info_id` (`returning_learner_info_id`);

--
-- Indexes for table `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`grade_id`),
  ADD KEY `subject_assignment_id` (`subject_assignment_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `learner_info`
--
ALTER TABLE `learner_info`
  ADD PRIMARY KEY (`learner_info_id`);

--
-- Indexes for table `parent_guardian_info`
--
ALTER TABLE `parent_guardian_info`
  ADD PRIMARY KEY (`parent_guardian_info_id`);

--
-- Indexes for table `remedial`
--
ALTER TABLE `remedial`
  ADD PRIMARY KEY (`remedial_id`),
  ADD KEY `grade_id` (`grade_id`);

--
-- Indexes for table `returning_learner_info`
--
ALTER TABLE `returning_learner_info`
  ADD PRIMARY KEY (`returner_id`);

--
-- Indexes for table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`schedule_id`),
  ADD KEY `subject_assignment_id` (`subject_assignment_id`);

--
-- Indexes for table `school_year`
--
ALTER TABLE `school_year`
  ADD PRIMARY KEY (`school_yr_id`),
  ADD KEY `account_id` (`account_id`);

--
-- Indexes for table `sectioning`
--
ALTER TABLE `sectioning`
  ADD PRIMARY KEY (`sectioning_id`),
  ADD KEY `section_id` (`section_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`section_id`),
  ADD KEY `school_yr_id` (`school_yr_id`),
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`student_id`),
  ADD UNIQUE KEY `school_id` (`school_id`),
  ADD UNIQUE KEY `account_id` (`account_id`),
  ADD KEY `students_ibfk_2` (`section`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`subject_id`);

--
-- Indexes for table `subject_assignment`
--
ALTER TABLE `subject_assignment`
  ADD PRIMARY KEY (`subject_assignment_id`),
  ADD KEY `school_yr_id` (`school_yr_id`),
  ADD KEY `section_id` (`section_id`),
  ADD KEY `subject_id` (`subject_id`),
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`teacher_id`),
  ADD UNIQUE KEY `school_id` (`school_id`),
  ADD UNIQUE KEY `account_id` (`account_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `account_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `address_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `announcements`
--
ALTER TABLE `announcements`
  MODIFY `announcement_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `application_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `grades`
--
ALTER TABLE `grades`
  MODIFY `grade_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `learner_info`
--
ALTER TABLE `learner_info`
  MODIFY `learner_info_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `parent_guardian_info`
--
ALTER TABLE `parent_guardian_info`
  MODIFY `parent_guardian_info_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `remedial`
--
ALTER TABLE `remedial`
  MODIFY `remedial_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `returning_learner_info`
--
ALTER TABLE `returning_learner_info`
  MODIFY `returner_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `schedules`
--
ALTER TABLE `schedules`
  MODIFY `schedule_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `school_year`
--
ALTER TABLE `school_year`
  MODIFY `school_yr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sectioning`
--
ALTER TABLE `sectioning`
  MODIFY `sectioning_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `section_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `subject_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `subject_assignment`
--
ALTER TABLE `subject_assignment`
  MODIFY `subject_assignment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `teacher_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`application_id`) REFERENCES `applications` (`application_id`);

--
-- Constraints for table `admins`
--
ALTER TABLE `admins`
  ADD CONSTRAINT `admins_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`);

--
-- Constraints for table `applications`
--
ALTER TABLE `applications`
  ADD CONSTRAINT `applications_ibfk_1` FOREIGN KEY (`school_yr_id`) REFERENCES `school_year` (`school_yr_id`),
  ADD CONSTRAINT `applications_ibfk_2` FOREIGN KEY (`learner_info_id`) REFERENCES `learner_info` (`learner_info_id`),
  ADD CONSTRAINT `applications_ibfk_3` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  ADD CONSTRAINT `applications_ibfk_4` FOREIGN KEY (`parent_guardian_info_id`) REFERENCES `parent_guardian_info` (`parent_guardian_info_id`),
  ADD CONSTRAINT `applications_ibfk_5` FOREIGN KEY (`returning_learner_info_id`) REFERENCES `returning_learner_info` (`returner_id`);

--
-- Constraints for table `grades`
--
ALTER TABLE `grades`
  ADD CONSTRAINT `grades_ibfk_1` FOREIGN KEY (`subject_assignment_id`) REFERENCES `subject_assignment` (`subject_assignment_id`),
  ADD CONSTRAINT `grades_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`);

--
-- Constraints for table `remedial`
--
ALTER TABLE `remedial`
  ADD CONSTRAINT `remedial_ibfk_1` FOREIGN KEY (`grade_id`) REFERENCES `grades` (`grade_id`);

--
-- Constraints for table `schedules`
--
ALTER TABLE `schedules`
  ADD CONSTRAINT `schedules_ibfk_1` FOREIGN KEY (`subject_assignment_id`) REFERENCES `subject_assignment` (`subject_assignment_id`);

--
-- Constraints for table `school_year`
--
ALTER TABLE `school_year`
  ADD CONSTRAINT `school_year_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`);

--
-- Constraints for table `sectioning`
--
ALTER TABLE `sectioning`
  ADD CONSTRAINT `sectioning_ibfk_2` FOREIGN KEY (`section_id`) REFERENCES `sections` (`section_id`),
  ADD CONSTRAINT `sectioning_ibfk_3` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`);

--
-- Constraints for table `sections`
--
ALTER TABLE `sections`
  ADD CONSTRAINT `sections_ibfk_1` FOREIGN KEY (`school_yr_id`) REFERENCES `school_year` (`school_yr_id`),
  ADD CONSTRAINT `sections_ibfk_2` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`);

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`),
  ADD CONSTRAINT `students_ibfk_2` FOREIGN KEY (`section`) REFERENCES `sections` (`section_id`);

--
-- Constraints for table `subject_assignment`
--
ALTER TABLE `subject_assignment`
  ADD CONSTRAINT `subject_assignment_ibfk_1` FOREIGN KEY (`school_yr_id`) REFERENCES `school_year` (`school_yr_id`),
  ADD CONSTRAINT `subject_assignment_ibfk_2` FOREIGN KEY (`section_id`) REFERENCES `sections` (`section_id`),
  ADD CONSTRAINT `subject_assignment_ibfk_3` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`),
  ADD CONSTRAINT `subject_assignment_ibfk_4` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`);

--
-- Constraints for table `teachers`
--
ALTER TABLE `teachers`
  ADD CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
