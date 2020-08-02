import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as credentials from '../../credentials/drive_credentials.json';
import * as gapi from 'googleapis';

@Injectable()
export class DemoService {
 
    constructor(
        // private http:HttpClient,
        // private CLIENT_ID:string,
        // private SCOPES:Array<string> = 
    ) {}

    initialize(){
        // Scopes of the drive
        // Load client secrets from a local file.
        // 2. Initialize the JavaScript client library.
        // gapi.client.init({
        //     'apiKey': 'YOUR_API_KEY',
        //     // clientId and scope are optional if auth is not required.
        //     'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
        //     'scope': 'profile',
        // }).then(function() {
        //     // 3. Initialize and make the API request.
        //     return gapi.client.request({
        //     'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
        //     })
        // }).then(function(response) {
        //     console.log(response.result);
        // }, function(reason) {
        //     console.log('Error: ' + reason.result.error.message);
        // });
    }
}