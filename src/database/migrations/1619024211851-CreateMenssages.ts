import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMenssages1619024211851 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "menssages",
                columns: [
                   {
                       name: "id",
                       type: "uuid",
                       isPrimary: true,
                   },
                   {
                       name: "user_id",
                       type: "uuid",
                       isNullable: true,
                    },
                    {
                        name: "admin_id",
                        type: "uuid",
                        isNullable: true,
                     },
                    {
                        name: "text",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys:[
                    {
                        name: "FKUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("menssages")
    }

}
