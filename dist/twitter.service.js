var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorizedRequestService } from './authorized-request.service';
import { OAuthService } from './oauth.service';
import { Sha1Service } from './sha1.service';
var TwitterService = (function () {
    function TwitterService(http) {
        this.http = http;
        this.authRequest = new AuthorizedRequestService(new OAuthService(new Sha1Service()), this.http);
    }
    TwitterService.prototype.get = function (url, query, oauthKey, oauthToken) {
        return this.authRequest.get(url, query, oauthKey, oauthToken);
    };
    TwitterService.prototype.post = function (url, params, oauthKey, oauthToken) {
        return this.authRequest.post(url, params, oauthKey, oauthToken);
    };
    TwitterService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], TwitterService);
    return TwitterService;
}());
export { TwitterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpdHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3R3aXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQ0gsWUFBWSxFQUdmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTdDO0lBR0ksd0JBQ1ksSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUd4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksd0JBQXdCLENBQzNDLElBQUksWUFBWSxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsRUFDbkMsSUFBSSxDQUFDLElBQUksQ0FDWixDQUFDO0lBQ04sQ0FBQztJQUVELDRCQUFHLEdBQUgsVUFBSSxHQUFXLEVBQUUsS0FBVSxFQUFFLFFBQWtCLEVBQUUsVUFBc0I7UUFDbkUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxNQUFXLEVBQUUsUUFBa0IsRUFBRSxVQUFzQjtRQUNyRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFuQlEsY0FBYztRQUQxQixVQUFVLEVBQUU7eUNBS1MsVUFBVTtPQUpuQixjQUFjLENBcUIxQjtJQUFELHFCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FyQlksY0FBYyJ9