import { HttpClient } from '@angular/common/http';
import { OAuthKey, OAuthToken } from './oauth.service';
export declare class TwitterService {
    private http;
    private authRequest;
    constructor(http: HttpClient);
    get(url: string, query: any, oauthKey: OAuthKey, oauthToken: OAuthToken): import("rxjs").Observable<Object>;
    post(url: string, params: any, oauthKey: OAuthKey, oauthToken: OAuthToken): import("rxjs").Observable<Object>;
}
