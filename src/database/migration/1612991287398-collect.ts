import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class collect1612991287398 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Collect',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },

                {
                    name: 'trash',
                    type: 'varchar',
                    isNullable: false
                },

                {
                    name: 'user_id',
                    type: 'integer'
                },

                {
                    name: 'point_id',
                    type: 'integer'
                }
            ],

            foreignKeys: [
                {
                    name: 'collectUser',
                    columnNames: ['user_id'],
                    referencedTableName: 'User',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },

                {
                    name: 'collectPoints',
                    columnNames: ['user_id'],
                    referencedTableName: 'Points',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Collect')
    }

}
