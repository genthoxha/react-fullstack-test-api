"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCheckpointTable1642874414061 = void 0;
const index_1 = require("typeorm/index");
class CreateCheckpointTable1642874414061 {
    async up(queryRunner) {
        await queryRunner.createTable(new index_1.Table({
            name: 'checkpoint',
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'latitude',
                    type: 'text'
                },
                {
                    name: 'longitude',
                    type: 'text'
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'now()'
                },
            ]
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('checkpoint');
    }
}
exports.CreateCheckpointTable1642874414061 = CreateCheckpointTable1642874414061;
//# sourceMappingURL=1642874414061-CreateCheckpointTable.js.map