import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      port: Number(process.env.DB_PORT),
      entities: [`${__dirname}/**/*.entity{.js}`],
      migrations: [`${__dirname}/migrations/*{.js,*.ts}`],
      migrationsRun: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
