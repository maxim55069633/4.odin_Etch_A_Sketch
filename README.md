# odin_Etch-A-Sketch

This project helped me to hone my DOM manipulation skills. I encountered many interesting challenges:

1. how to make the divs appear as a grid in a fixed size of square dynamically.

Flex saved me. It can grow or shrink dynamically no matter what number I enter.

2. QuerySelector did't work. The console.log reminded me that:```Uncaught TypeError: Cannot setproperties of null.```

I checked my codes and failed to find obvious mistakes first. later on, I found queryselector didn't catch an element. I realized I forget to add a defer property to the javascript on the html file. When the html tags are not generated, the javascript naturally doesn't catch. The order of codes matters.

3. (Unsolved) I can't find a way to generate the mix of random color and black.

After some google search, I found a color-mix function. However, it is only supported by a few browser.
Then I came up with a the subsitute plan using hsl color. When the colorlightness is set to 0, the color is black. However, the higher colorlightness is, it is closer to white, not the expected mix of random color and black. 
 
