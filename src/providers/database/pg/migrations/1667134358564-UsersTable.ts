import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class UsersTable1667134358564 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table(
      {
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'firstname',
            type: 'varchar',
            length: '255',
            isNullable: false
          },
          {
            name: 'lastname',
            type: 'varchar',
            length: '255',
            isNullable: false
          },
          {
            name: 'email',
            type: 'varchar',
            length: '150',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '255',
            isNullable: false,
          }
        ]
      }
    ), true,)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }

}
