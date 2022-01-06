import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";
import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.module";

@Module({
   imports: [
      ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
      TrackModule, 
      MongooseModule.forRoot('mongodb+srv://lqwiludh0ihj10293d:lqwiludh0ihj10293d@cluster0.2gwas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
      FileModule
   ]

})

export class AppModule {}