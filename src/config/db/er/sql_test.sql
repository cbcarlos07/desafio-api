-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema produtos_api_test
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema produtos_api_test
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `produtos_api_test` DEFAULT CHARACTER SET utf8 ;
USE `produtos_api_test` ;

-- -----------------------------------------------------
-- Table `produtos_api_test`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `produtos_api_test`.`status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `produtos_api_test`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `produtos_api_test`.`produto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `descricao` TEXT NULL,
  `preco` DOUBLE NOT NULL,
  `imagem` VARCHAR(100) NULL,
  `tags` TEXT NULL,
  `status_id` INT NOT NULL,
  `isDeleted` INT NULL COMMENT 'Informa se está removido',
  PRIMARY KEY (`id`),
  INDEX `fk_produto_status_idx` (`status_id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `produtos_api_test`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `produtos_api_test`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `telefone` VARCHAR(50) NULL,
  `senha` VARCHAR(255) NOT NULL,
  `endereco` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `produtos_api_test`.`carrinho`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `produtos_api_test`.`carrinho` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` DATE NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_carrinho_usuario1_idx` (`usuario_id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `produtos_api_test`.`carrinho_produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `produtos_api_test`.`carrinho_produto` (
  `carrinho_id` INT NOT NULL,
  `produto_id` INT NOT NULL,
  `qtde` INT NULL,
  INDEX `fk_carrinho_produtos_carrinho1_idx` (`carrinho_id` ASC),
  INDEX `fk_carrinho_produtos_produto1_idx` (`produto_id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `produtos_api_test`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `produtos_api_test`.`pedido` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `forma_pagamento` VARCHAR(100) NULL,
  `endereco_entrega` VARCHAR(255) NULL,
  `dt_criacao` DATETIME NULL DEFAULT now(),
  `valor_total` DOUBLE NULL,
  `status_id` INT NOT NULL,
  `usuario_id` INT NOT NULL,
  `taxa_entrega` DOUBLE NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pedido_status1_idx` (`status_id` ASC),
  INDEX `fk_pedido_usuario1_idx` (`usuario_id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `produtos_api_test`.`pedido_itens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `produtos_api_test`.`pedido_itens` (
  `pedido_id` INT UNSIGNED NOT NULL,
  `produto_id` INT NOT NULL,
  `preco` DOUBLE NULL,
  `qtde` INT NULL,
  INDEX `fk_pedido_itens_pedido1_idx` (`pedido_id` ASC),
  INDEX `fk_pedido_itens_produto1_idx` (`produto_id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Data for table `produtos_api_test`.`status`
-- -----------------------------------------------------
START TRANSACTION;
USE `produtos_api_test`;
INSERT INTO `produtos_api_test`.`status` (`id`, `descricao`) VALUES (1, 'Ativo');
INSERT INTO `produtos_api_test`.`status` (`id`, `descricao`) VALUES (2, 'Inativo');
INSERT INTO `produtos_api_test`.`status` (`id`, `descricao`) VALUES (3, 'Novo');
INSERT INTO `produtos_api_test`.`status` (`id`, `descricao`) VALUES (4, 'Aceito');
INSERT INTO `produtos_api_test`.`status` (`id`, `descricao`) VALUES (5, 'Saiu para entrega');
INSERT INTO `produtos_api_test`.`status` (`id`, `descricao`) VALUES (6, 'Entregue');
INSERT INTO `produtos_api_test`.`status` (`id`, `descricao`) VALUES (7, 'Cancelado');

COMMIT;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
