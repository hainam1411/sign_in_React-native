import {Account, Avatars, Client, ID, Databases} from 'react-native-appwrite';
import config from 'tailwindcss/defaultConfig';

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
const databases = new Databases(client);

// Register user
export async function createUser(email, password, username) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email: email,
                username: username,
                avatar: avatarUrl,
            }
        );

        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

// Sign In
export async function signIn(email, password) {
    try {
        const session = await account.createEmailSession(email, password);

        return session;
    } catch (error) {
        throw new Error(error);
    }
}
