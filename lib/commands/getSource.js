/**
 *
 * Get source code of the page.
 *
 * <example>
    :getSource.js
    client
        .url('http://webdriver.io')
        .getSource().then(function(source) {
            console.log(source); // outputs: "<!DOCTYPE html>\n<title>Webdriver.io</title>..."
        });
 * </example>
 *
 * @returns {String} source code of current website
 * @uses protocol/source
 * @type property
 *
 */

module.exports = function getSource () {
    return this.unify(this.source(), {
        extractValue: true
    });
};