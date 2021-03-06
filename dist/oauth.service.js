var OAuthService = (function () {
    function OAuthService(sha1) {
        this.sha1 = sha1;
    }
    OAuthService.prototype.createHeaderString = function (httpMethod, baseURL, requestParams, oauthKey, oauthToken, nonce, timestamp) {
        var headerStringArray = this.createParameterStringArray({}, oauthKey, oauthToken, nonce, timestamp);
        headerStringArray.push({
            key: 'oauth_signature',
            val: this.fixedEncodeURIComponent(this.createSignature(httpMethod, baseURL, requestParams, oauthKey, oauthToken, nonce, timestamp))
        });
        headerStringArray = this.sortAlphabetically(headerStringArray);
        return 'OAuth ' + headerStringArray.map(function (param) {
            return param.key + '="' + param.val + '"';
        }).join(', ');
    };
    OAuthService.prototype.createTimestamp = function () {
        return '' + Math.floor(((new Date()).getTime()) / 1000);
    };
    OAuthService.prototype.createNonce = function (length) {
        var nonceChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var result = '';
        for (var i = 0; i < length; ++i) {
            var rnum = Math.floor(Math.random() * nonceChars.length);
            result += nonceChars.substring(rnum, rnum + 1);
        }
        return result;
    };
    OAuthService.prototype.createSignature = function (httpMethod, baseURL, requestParams, oauthKey, oauthToken, nonce, timestamp) {
        return this.calculateSignature(this.createSigningKey(oauthKey, oauthToken), this.createSignatureBaseString(httpMethod, baseURL, this.createParameterString(requestParams, oauthKey, oauthToken, nonce, timestamp)));
    };
    OAuthService.prototype.calculateSignature = function (signingKey, signatureBaseString) {
        return this.sha1.getHash(signingKey, signatureBaseString);
    };
    OAuthService.prototype.createSigningKey = function (oauthKey, oauthToken) {
        return oauthKey.consumerSecret + '&' + oauthToken.tokenSecret;
    };
    OAuthService.prototype.createSignatureBaseString = function (httpMethod, baseURL, parameterString) {
        return httpMethod + '&' + this.fixedEncodeURIComponent(baseURL) + '&' + this.fixedEncodeURIComponent(parameterString);
    };
    OAuthService.prototype.createParameterString = function (requestParams, oauthKey, oauthToken, nonce, timestamp) {
        var encodedParams = this.createParameterStringArray(requestParams, oauthKey, oauthToken, nonce, timestamp);
        encodedParams = this.sortAlphabetically(encodedParams);
        return encodedParams.map(function (param) {
            return param.key + '=' + param.val;
        }).join('&');
    };
    OAuthService.prototype.createParameterStringArray = function (requestParams, oauthKey, oauthToken, nonce, timestamp) {
        var _this = this;
        var encodedParams = [];
        Object.keys(requestParams).forEach(function (k) {
            encodedParams.push({
                key: _this.fixedEncodeURIComponent(k),
                val: _this.fixedEncodeURIComponent(requestParams[k])
            });
        });
        encodedParams.push({
            key: this.fixedEncodeURIComponent('oauth_consumer_key'),
            val: this.fixedEncodeURIComponent(oauthKey.consumerKey)
        }, {
            key: this.fixedEncodeURIComponent('oauth_signature_method'),
            val: this.fixedEncodeURIComponent('HMAC-SHA1')
        }, {
            key: this.fixedEncodeURIComponent('oauth_nonce'),
            val: this.fixedEncodeURIComponent(nonce)
        }, {
            key: this.fixedEncodeURIComponent('oauth_timestamp'),
            val: this.fixedEncodeURIComponent(timestamp)
        }, {
            key: this.fixedEncodeURIComponent('oauth_token'),
            val: this.fixedEncodeURIComponent(oauthToken.token)
        }, {
            key: this.fixedEncodeURIComponent('oauth_version'),
            val: this.fixedEncodeURIComponent('1.0')
        });
        return encodedParams;
    };
    OAuthService.prototype.sortAlphabetically = function (params) {
        params.sort(function (a, b) {
            if (a.key > b.key)
                return 1;
            if (a.key < b.key)
                return -1;
            else
                return 0;
        });
        return params;
    };
    OAuthService.prototype.fixedEncodeURIComponent = function (str) {
        return encodeURIComponent(str)
            .replace(/[!'()*]/g, function (c) {
            return '%' + c.charCodeAt(0).toString(16);
        });
    };
    return OAuthService;
}());
export { OAuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9vYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0lBQ0Msc0JBQ1MsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUN4QixDQUFDO0lBTUgseUNBQWtCLEdBQWxCLFVBQW1CLFVBQWtCLEVBQUUsT0FBZSxFQUFFLGFBQWtCLEVBQUUsUUFBa0IsRUFBRSxVQUFzQixFQUFFLEtBQWEsRUFBRSxTQUFpQjtRQUN2SixJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEcsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQ3RCLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsR0FBRyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdILENBQUMsQ0FBQztRQUVILGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRS9ELE9BQU8sUUFBUSxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUs7WUFDN0MsT0FBTyxLQUFLLENBQUMsR0FBRyxHQUFDLElBQUksR0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNDLE9BQU8sRUFBRSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFP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