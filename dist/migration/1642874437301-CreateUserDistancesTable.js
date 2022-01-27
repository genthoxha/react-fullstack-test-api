"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDistancesTable1642874437301 = void 0;
const index_1 = require("typeorm/index");
class CreateUserDistancesTable1642874437301 {
    async up(queryRunner) {
        await queryRunner.createTable(new index_1.Table({
            name: 'user_distances',
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
                    name: "distanceId",
                    type: "int"
                },
                {
                    name: "checkpointId",
                    type: "int"
                }
            ]
        }));
        await queryRunner.createForeignKey("user_distances", new index_1.TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
        }));
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable("user_distances");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1);
        await queryRunner.dropForeignKey("user_distances", foreignKey);
        await queryRunner.dropColumn("user_distances", "userId");
        await queryRunner.dropTable('user_distances');
    }
}
exports.CreateUserDistancesTable1642874437301 = CreateUserDistancesTable1642874437301;
//# sourceMappingURL=1642874437301-CreateUserDistancesTable.js.map