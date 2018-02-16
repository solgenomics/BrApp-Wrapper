# BrApp Wrapper

Common wrapper template and templating script for BTI BrAPPs.

To use, `npm install` this repo, and add a command line call to "wrapbrapp" or require the package and run it as a function.

Specify output directory and input files to be inserted into the template in your package.json in the fashion below.

package.json:
```js
{   
    ...,
    "scripts": {
        "prepare": "mkdir -p docs && wrapbrapp"
    },
    "brapp": {
        "out": "docs/example.html", // output directory for the output
        "name": "Graphical Filtering", // Name of your BrApp
        "link": "https://github.com/solgenomics/BrAPI-Graphical-Filtering", // link to BrApp source
        "forward": "html/forward.html", // partial html file with html to appear before the BrApp wrapper
        "main": "html/main.html", // partial html file with the main visual elements of your BrApp
        "scripts": "html/scripts.html"  // partial html file with html to appear after the BrApp wrapper, this is where scripts should go.
    }
}
```
