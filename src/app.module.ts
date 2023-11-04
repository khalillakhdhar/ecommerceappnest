import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReclamationModule } from './reclamation/reclamation.module';
import { ClientModule } from './client/client.module';
import { CommandeModule } from './commande/commande.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Explicitly specify the driver
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ecommerce',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ReclamationModule,
    ClientModule,
    CommandeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
