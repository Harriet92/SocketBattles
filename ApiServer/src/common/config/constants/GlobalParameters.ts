import Environment from "./Environment";

class GlobalParameters {
    MongoPassword: string = String(process.env.MONGO_PASS).replace(" ", "");
    MongoUsername: string = String(process.env.MONGO_USERNAME).replace(" ", "");
    MongoPort: string = String(process.env.MONGO_PORT).replace(" ", "");
    MongoAddress: string = String(process.env.MONGO_ADDRESS).replace(" ", "");
    MongoDbName: string = String(process.env.MONGO_DB_NAME).replace(" ", "");
    get MongoUri() {
        return `mongodb//${this.MongoUsername}:${this.MongoPassword}@${this.MongoAddress}:${this.MongoPort}/${this.MongoDbName}`;
    }
}

export default new GlobalParameters();