// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';

// Generate a secret key or use one from environment variables
const secretKey = process.env.JWT_SECRET_KEY || 'default_secret_key';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://norhan308:JoboTech@cluster0.ginlzm6.mongodb.net/JoboTech'),
    JwtModule.register({
      secret: secretKey,
      signOptions: { expiresIn: '1h' },
    }),
    AuthModule,
  ],
})
export class AppModule {}
