/*
 *      Author: Taner Selim
 *      Object that enables the site to work with hash-tags
 *
*/

var Phash = {
    setHash:function(hashTag,hashValue){
        var encHashValue = encodeURIComponent(hashValue);
        var currentHash = window.location.hash ;
        if(Phash.getHash(hashTag) === false){
            if(window.location.hash.length>0){
                if(hashValue==''){
                    window.location.hash = currentHash+'&'+hashTag;
                }
                else{
                    window.location.hash = currentHash+'&'+hashTag+'='+encHashValue;
                }
            }
            else{
               if(hashValue==''){
                    window.location.hash = currentHash+hashTag;
                }
                else{
                    window.location.hash = currentHash+hashTag+'='+encHashValue;
                }
            }
        }
        else{
            var finalHash = '';
            if(window.location.hash.length>0){
                var tmp = window.location.href.split("#")[1].split("&");
                for (var i=0; i<tmp.length; i++) {
                    item = tmp[i].split("=");
                    //console.debug(item);
                    if (item[0]==hashTag) {
                        if(hashValue==''){
                            finalHash = finalHash+hashTag;
                        }
                        else{
                            finalHash = finalHash+hashTag+'='+encHashValue;
                        }
                    }
                    else{
                        // check if value exists for previously set values
                        if(item[1]){
                            finalHash = finalHash+item[0]+'='+item[1];
                        }
                        else{
                            finalHash = finalHash+item[0];
                        }
                    }
                    if(i < (tmp.length -1)){
                        finalHash = finalHash+'&';
                    }
                }
            }
            else{
                finalHash = hashTag+'='+encHashValue;
            }
            window.location.hash = finalHash;
        }
        return;
    },
    getHash:function(hashTag){
        if (window.location.hash.length>0) {
            //var tmp = location.hash.split("#")[1].split("&");
            var tmp = window.location.href.split('#')[1].split('&');
            var item;
            var length=tmp.length;
            for (var i=0; i<length; i++) {
                item = tmp[i].split("=");
                if (item[0]==hashTag) {
                    return decodeURIComponent(item[1]);
                }
            }
            return false;
        }
        else{
            return false;
        }
    },
    getArrayOfHashes:function(){
        var hashObject = {};
        if (window.location.hash.length>0) {
            var tmp = location.href.split("#")[1].split("&");
            var key;
            var value;
            var length=tmp.length;
            for (var i=0; i<length; i++) {
                key = tmp[i].split("=")[0];
                value = decodeURIComponent(tmp[i].split("=")[1]);
                hashObject[key] = value;
            }
        }
        return hashObject;
    },
    clearHashes:function(){
        window.location.hash = '';
    },
    getHashCount:function(){
        return Object.keys(this.getArrayOfHashes()).length
    }

};