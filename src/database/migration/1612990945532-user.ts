import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class user1612990945532 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'User',
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
                    name: 'userName',
                    type: 'varchar',
                    isUnique: true,
                    isNullable: false
                },

                {
                    name: 'contact',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true
                },

                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true 
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('User');
    }

}
