"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hookPlugin = void 0;
var fs = require('fs');
function hookPlugin(Cypress) {
    before(function () {
        cy.task("Should Stop").then(function (shouldStop) {
            if (shouldStop) {
                Cypress.runner.stop();
                process.stdout = fs.createWriteStream("/dev/null");
                process.stderr = fs.createWriteStream("/dev/null");
                return;
            }
        });
    });
}
exports.hookPlugin = hookPlugin;
