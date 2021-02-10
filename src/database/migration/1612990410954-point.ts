import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class point1612990410954 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Points',
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
                    name: 'state',
                    type: 'varchar',
                    isNullable: false
                },

                {
                    name: 'city',
                    type: 'varchar',
                    isNullable: false
                },

                {
                    name: 'street',
                    type: 'varchar',
                    isNullable: false
                },

                {
                    name: 'lat',
                    type: 'decimal'
                },

                {
                    name: 'long',
                    type: 'decimal'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Points');
    }

}
