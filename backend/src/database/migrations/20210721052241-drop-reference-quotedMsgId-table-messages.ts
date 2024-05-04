import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    // Verificar se a restrição de chave estrangeira existe antes de tentar removê-la
    return queryInterface.sequelize.query(
      'SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS WHERE CONSTRAINT_NAME = "Messages_quotedMsgId_fkey" AND TABLE_SCHEMA = "izing" AND TABLE_NAME = "Messages" AND CONSTRAINT_TYPE = "FOREIGN KEY";'
    ).then(results => {
      if (results[0].length > 0) {
        // A restrição de chave estrangeira existe, então podemos removê-la
        return queryInterface.sequelize.query(
          'ALTER TABLE Messages DROP FOREIGN KEY Messages_quotedMsgId_fkey;'
        ).then(() => {
          return results; // Retorna o resultado da consulta
        });
      } else {
        // A restrição de chave estrangeira não existe, não precisamos fazer nada
        console.log("A restrição de chave estrangeira não existe na tabela Messages.");
        return results; // Retorna o resultado da consulta
      }
    });
  },

  down: (queryInterface: QueryInterface) => {
    // Adicionar a restrição de chave estrangeira de volta
    return queryInterface.sequelize.query(
      'ALTER TABLE Messages ADD CONSTRAINT Messages_quotedMsgId_fkey FOREIGN KEY (quotedMsgId) REFERENCES Messages(id) ON UPDATE CASCADE ON DELETE SET NULL;'
    );
  }
};
