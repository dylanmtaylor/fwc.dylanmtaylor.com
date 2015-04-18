//<![CDATA[
var ESSID="";var VALUE=0;function numeric(a){if(a==parseInt(a)){return a}else{return(a.charCodeAt(0)-55)}}function toHex(d){var r=d%16;var a;if(d-r==0)a=toChar(r);else a=toHex((d-r)/16)+toChar(r);return a}function toChar(n){const alpha="0123456789ABCDEF";return alpha.charAt(n)}function calcit(a){b=a.essid.value;var b=b.toUpperCase();for(i=0;i<5;i++){VALUE=VALUE+(numeric(b[i])*Math.pow(36,i))}a.key.value='1801'+toHex(VALUE);a.key2.value='1F90'+toHex(VALUE);VALUE=0}
  //]]>
