-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema produtos_api
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema produtos_api
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `produtos_api` DEFAULT CHARACTER SET utf8 ;
USE `produtos_api` ;

-- -----------------------------------------------------
-- Table `produtos_api`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `produtos_api`.`status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `produtos_api`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `produtos_api`.`produto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `descricao` TEXT NULL,
  `preco` DOUBLE NOT NULL,
  `imagem` VARCHAR(100) NULL,
  `tags` TEXT NULL,
  `status_id` INT NOT NULL,
  `isDeleted` INT NULL COMMENT 'Informa se está removido',
  PRIMARY KEY (`id`),
  INDEX `fk_produto_status_idx` (`status_id` ASC) VISIBLE,
  CONSTRAINT `fk_produto_status`
    FOREIGN KEY (`status_id`)
    REFERENCES `produtos_api`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `produtos_api`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `produtos_api`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `telefone` VARCHAR(50) NULL,
  `senha` VARCHAR(255) NOT NULL,
  `endereco` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `produtos_api`.`carrinho`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `produtos_api`.`carrinho` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` DATE NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_carrinho_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_carrinho_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `produtos_api`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `produtos_api`.`carrinho_produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `produtos_api`.`carrinho_produto` (
  `carrinho_id` INT NOT NULL,
  `produto_id` INT NOT NULL,
  `qtde` INT NULL,
  INDEX `fk_carrinho_produtos_carrinho1_idx` (`carrinho_id` ASC) VISIBLE,
  INDEX `fk_carrinho_produtos_produto1_idx` (`produto_id` ASC) VISIBLE,
  CONSTRAINT `fk_carrinho_produtos_carrinho1`
    FOREIGN KEY (`carrinho_id`)
    REFERENCES `produtos_api`.`carrinho` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carrinho_produtos_produto1`
    FOREIGN KEY (`produto_id`)
    REFERENCES `produtos_api`.`produto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `produtos_api`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `produtos_api`.`pedido` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `forma_pagamento` VARCHAR(100) NULL,
  `endereco_entrega` VARCHAR(255) NULL,
  `dt_criacao` DATETIME NULL DEFAULT now(),
  `valor_total` DOUBLE NULL,
  `status_id` INT NOT NULL,
  `usuario_id` INT NOT NULL,
  `taxa_entrega` DOUBLE NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pedido_status1_idx` (`status_id` ASC) VISIBLE,
  INDEX `fk_pedido_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_status1`
    FOREIGN KEY (`status_id`)
    REFERENCES `produtos_api`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `produtos_api`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `produtos_api`.`pedido_itens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `produtos_api`.`pedido_itens` (
  `pedido_id` INT UNSIGNED NOT NULL,
  `produto_id` INT NOT NULL,
  `preco` DOUBLE NULL,
  `qtde` INT NULL,
  INDEX `fk_pedido_itens_pedido1_idx` (`pedido_id` ASC) VISIBLE,
  INDEX `fk_pedido_itens_produto1_idx` (`produto_id` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_itens_pedido1`
    FOREIGN KEY (`pedido_id`)
    REFERENCES `produtos_api`.`pedido` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_itens_produto1`
    FOREIGN KEY (`produto_id`)
    REFERENCES `produtos_api`.`produto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `produtos_api`.`table1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `produtos_api`.`table1` (
)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `produtos_api`.`status`
-- -----------------------------------------------------
START TRANSACTION;
USE `produtos_api`;
INSERT INTO `produtos_api`.`status` (`id`, `descricao`) VALUES (1, 'Ativo');
INSERT INTO `produtos_api`.`status` (`id`, `descricao`) VALUES (2, 'Inativo');
INSERT INTO `produtos_api`.`status` (`id`, `descricao`) VALUES (3, 'Novo');
INSERT INTO `produtos_api`.`status` (`id`, `descricao`) VALUES (4, 'Aceito');
INSERT INTO `produtos_api`.`status` (`id`, `descricao`) VALUES (5, 'Saiu para entrega');
INSERT INTO `produtos_api`.`status` (`id`, `descricao`) VALUES (6, 'Entregue');
INSERT INTO `produtos_api`.`status` (`id`, `descricao`) VALUES (7, 'Cancelado');

COMMIT;


-- -----------------------------------------------------
-- Data for table `produtos_api`.`produto`
-- -----------------------------------------------------
START TRANSACTION;
USE `produtos_api`;
INSERT INTO `produtos_api`.`produto` (`id`, `nome`, `descricao`, `preco`, `imagem`, `tags`, `status_id`, `isDeleted`) VALUES (1, 'TV PLASMA', 'TV PLASMA', 1200.0, NULL, 'eletronico', 1, 0);
INSERT INTO `produtos_api`.`produto` (`id`, `nome`, `descricao`, `preco`, `imagem`, `tags`, `status_id`, `isDeleted`) VALUES (2, 'MOUSE USB', 'MOUSE USB', 25.0, NULL, 'informatica', 1, 0);
INSERT INTO `produtos_api`.`produto` (`id`, `nome`, `descricao`, `preco`, `imagem`, `tags`, `status_id`, `isDeleted`) VALUES (3, 'TECLADO', 'TECLADO', 30.0, NULL, 'informatica', 1, 0);
INSERT INTO `produtos_api`.`produto` (`id`, `nome`, `descricao`, `preco`, `imagem`, `tags`, `status_id`, `isDeleted`) VALUES (4, 'MONITOR', 'MONITOR', 250.0, NULL, 'informatica', 1, 0);
INSERT INTO `produtos_api`.`produto` (`id`, `nome`, `descricao`, `preco`, `imagem`, `tags`, `status_id`, `isDeleted`) VALUES (5, 'GABINETE', 'GABINETE', 100.0, NULL, 'informatica', 1, 0);
INSERT INTO `produtos_api`.`produto` (`id`, `nome`, `descricao`, `preco`, `imagem`, `tags`, `status_id`, `isDeleted`) VALUES (6, 'PLACA DE REDE', 'PLACA DE REDE', 350.0, NULL, 'informatica', 1, NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `produtos_api`.`usuario`
-- -----------------------------------------------------
START TRANSACTION;
USE `produtos_api`;
INSERT INTO `produtos_api`.`usuario` (`id`, `nome`, `email`, `telefone`, `senha`, `endereco`) VALUES (1, 'Carlos Bruno', 'carlos@email.com', '92999999999', '202cb962ac59075b964b07152d234b70', 'R. Lagora Vermelhar, 22');
INSERT INTO `produtos_api`.`usuario` (`id`, `nome`, `email`, `telefone`, `senha`, `endereco`) VALUES (2, 'Gisely Brito', 'gysa@mail.com', '92988888888', '81dc9bdb52d04dc20036dbd8313ed055', 'R. Lagora Azul, 25');

COMMIT;

