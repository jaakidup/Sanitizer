// ************************************************************ //
//
//   URL String Sanitzer
//   For sanitizing URLs
//      
//   By: @Jaakidup
// 
//   Example usage:
//   console.log(Sanitizer.encode("Don't panic!")) 
//   prints:  Don%2527t%2520panic%2521
// ************************************************************ //

'use strict';

const Sanitizer =  {

    encode(input) {
        return encodeURI(escape(input));
    },

    decode(input) {
        return decodeURI(unescape(input));
    },

    escape(input) {
        return (input.replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\//g, '&#x2F;')
            .replace(/\\/g, '&#x5C;')
            .replace(/`/g, '&#96;'));
    },
    
    unescape(input) {
        return (input.replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#x27;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&#x2F;/g, '/')
            .replace(/&#x5C;/g, '\\')
            .replace(/&#96;/g, '`'));
    }
}
export default Sanitizer;



