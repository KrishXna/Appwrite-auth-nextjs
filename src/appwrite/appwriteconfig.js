import { Client,Databases, Account} from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6482def0f39d2f6b08ff')

export const account = new Account(client);
export const databases = new Databases(client);


