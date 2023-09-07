"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Niveis",
      [
        {
          descrnivel: "básico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descrnivel: "intermediário",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descrnivel: "avançado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Niveis", null, {});
  },
};
