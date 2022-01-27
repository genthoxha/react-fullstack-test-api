"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1642874392127 = void 0;
const index_1 = require("typeorm/index");
class CreateUserTable1642874392127 {
    async up(queryRunner) {
        await queryRunner.createTable(new index_1.Table({
            name: 'users',
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'username',
                    type: 'varchar',
                },
                {
                    name: 'homeLatitude',
                    type: 'text'
                },
                {
                    name: 'homeLongitude',
                    type: 'text'
                },
                {
                    name: 'currentLatitude',
                    type: 'text'
                },
                {
                    name: 'currentLongitude',
                    type: 'text'
                },
            ]
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }
}
exports.CreateUserTable1642874392127 = CreateUserTable1642874392127;
//# sourceMappingURL=1642874392127-CreateUserTable.js.map