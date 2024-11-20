import {Account, Avatars, Client, ID} from 'react-native-appwrite';
import signIn from "../app/(auth)/sign-in";
export const appwriteConfig = {
    endpoint: 'http://cloud.appwrite.io/v1',
    platform: 'com.me.myvid',
    projectId: '6735b61c002b7af90684',
    databaseId: '6735bb780027cf312dc8',
    userCollectionId: '6735bbc7001a8c10219e',
    videoCollectionId: '6735bc01000147f638cb',
    storageId: '6735bd3e00036b4017e3'
}


// Init your React Native SDK
const client = new Client();


client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
const account = new Account(client);
const avatars = new Avatars(client);
const  databases = new Database(client);
export const createUser =async (email, password, username ) =>{
   try {
       const newAccount = await account.create(
           ID.unique(),
           email,
           password,
           username
       )
       if(!newAccount) throw new Error;
       const avartarUrl = avatars.getInitials(username);
       await signIn(email, password);
       const newUser = await databases.createDocument( )
   }catch (error) {
       console.log(error);
       throw new Error(error);
   }
  }
  export async function SignIn(email, password) {
    try {
        const session = await account.createEmailSession(email, password)
        return session;

    }catch (error) {
        th
    }
  }


