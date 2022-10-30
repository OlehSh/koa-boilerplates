import "reflect-metadata"
import  { container} from 'tsyringe';
import app from "./app";
import env from "./config/env";
import { Server } from "http";
import { AddressInfo } from "net";
import { Pg } from "./providers/database/pg";

const connectionInstance = container.resolve(Pg);

const AppRun = async (): Promise<void> => {
  await connectionInstance.dataSource.initialize();
  const server: Server = app.listen(env.port);
  const { port } = server.address() as AddressInfo
  console.log(`SERVER is running on port ${port}`)
}
void AppRun()