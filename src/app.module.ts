import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContactImporterModule } from './modules/contact-importer/contact-importer.module';
import { configValidationSchema } from './config.schema';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
    }),
    ContactImporterModule,
    AuthModule,
    DatabaseModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
