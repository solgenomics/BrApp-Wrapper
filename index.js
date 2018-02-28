#!/usr/bin/env node

function wrapBrAPP(){
    const fs = require('fs');
    const path = require('path');
    const Mustache = require('Mustache');
    const tidy = require('htmltidy').tidy;
    var pg = JSON.parse(fs.readFileSync("package.json").toString());
    var template = fs.readFileSync(path.resolve(__dirname, 'index.mustache')).toString();
    var partials = {
        'main' : fs.readFileSync(pg.brapp.main).toString(),
        'forward' : fs.readFileSync(pg.brapp.forward).toString(),
        'scripts' : fs.readFileSync(pg.brapp.scripts).toString()
    }
    tidy(
        Mustache.render(template, pg.brapp, partials),
        {
            doctype: 'html5',
            dropEmptyElements:false,
            indent: true,
            wrap:0
        }, 
        function(err, html) {
            fs.writeFile(pg.brapp.out, html, function(err) {
              if (err) throw err;
            });
        }
    );
};

if (!module.parent) {
    wrapBrAPP();
} else {
    module.exports = wrapBrAPP;
}
