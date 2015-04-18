//<![CDATA[
var ESSID="",VALUE=0;function numeric(a){return a==parseInt(a,10)?a:a.charCodeAt(0)-55}function toHex(a){var b=a%16;return a-b==0?toChar(b):toHex((a-b)/16)+toChar(b)}function toChar(a){return"0123456789ABCDEF".charAt(a)}function calcit(a){var b=a.essid.value,b=b.toUpperCase();for(i=0;i<5;i++)VALUE+=numeric(b[i])*Math.pow(36,i);a.key.value="1801"+toHex(VALUE);a.key2.value="1F90"+toHex(VALUE);VALUE=0};
  //]]>
