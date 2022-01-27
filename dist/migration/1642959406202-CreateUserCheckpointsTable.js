"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserCheckpointsTable1642959406202 = void 0;
const index_1 = require("typeorm/index");
class CreateUserCheckpointsTable1642959406202 {
    async up(queryRunner) {
        await queryRunner.createTable(new index_1.Table({
            name: 'user_checkpoints',
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "userId",
                    type: "int"
                },
                {
                    name: "checkpointId",
                    type: "int"
                }
            ]
        }));
        await queryRunner.createForeignKey("user_checkpoints", new index_1.TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
        }));
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable("user_checkpoints");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1);
        await queryRunner.dropForeignKey("user_checkpoints", foreignKey);
        await queryRunner.dropColumn("user_checkpoints", "userId");
        await queryRunner.dropTable('user_checkpoints');
    }
}
exports.CreateUserCheckpointsTable1642959406202 = CreateUserCheckpointsTable1642959406202;
//# sourceMappingURL=1642959406202-CreateUserCheckpointsTable.js.map