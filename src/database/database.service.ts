import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigurationKeys } from '../config/config.keys.enum';
import { ConnectionOptions } from 'typeorm';

export const dataBaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      return {
        type: 'postgres',
        autoLoadEntities: true,
        synchronize: true,
        host: configService.get(ConfigurationKeys.HOST),
        port: configService.get(ConfigurationKeys.PORT),
        username: configService.get(ConfigurationKeys.USERNAME),
        password: configService.get(ConfigurationKeys.PASSWORD),
        database: configService.get(ConfigurationKeys.DATABASE),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/../**/*.entity{.ts,.js}'],
      } as ConnectionOptions;
    },
  }),
];
