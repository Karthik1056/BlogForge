// import conf from '../conf/conf.js'

// import { Client, Account, ID } from "appwrite"

// export class AuthService {
//     client = new Client();
//     account;

//     constructor() {
//         this.client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId)
//         this.account = new Account(this.client)
//     }

//     async createAccount({ email, password, name }) {
//         try {
//             // Create a new account
//             const userAccount = await this.account.create(ID.unique(), email, password, name);

//             if (userAccount) {
//                 // Clear existing sessions before logging in
//                 await this.logout();
//                 // Automatically log in the newly created account
//                 return this.login({ email, password });
//             }
//             return userAccount;
//         } catch (err) {
//             console.error('Error creating account:', err.message);
//             throw new Error('Failed to create account. Please try again.');
//         }
//     }

//     async login({ email, password }) {
//         try {
//             const existingSession = await this.getCurrentUser();
//             if (existingSession) {
//                 console.log('Session already active:', existingSession);
//                 return existingSession;
//             }
//             return await this.account.createEmailPasswordSession(email, password);
//         } catch (err) {
//             console.error('Login error:', err);
//             throw err;
//         }
//     }


//     async getCurrentUser() {
//         try {
//             await this.account.get();
//         } catch (err) {
//             console.log(err);
//         }

//         return null;
//     }

//     async logout() {
//         try {
//             const currentUser = await this.getCurrentUser();
//             if (!currentUser) {
//                 console.log('No session to log out from.');
//                 return;
//             }
//             await this.account.deleteSessions();
//             console.log('Successfully logged out.');
//         } catch (err) {
//             console.error('Logout error:', err.message);
//         }
//     }
// }


// const authService = new AuthService();


// export default authService;


import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService

