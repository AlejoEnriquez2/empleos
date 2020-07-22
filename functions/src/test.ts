import * as functions from 'firebase-functions';

export const helloWorld = functions.https.onRequest((request, response) =>{
    functions.logger.info("Hello Logs", {structuredData: true});
    response.send("Hello world from FireBase");
})