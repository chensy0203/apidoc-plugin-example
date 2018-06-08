const fs = require('fs');
const path = require('path');

const elementParser = require('./parser/api_example');

let app = {};

module.exports = {
	init: function(_app) {
		app = _app;
		app.log.info('init apiexampleext');
		app.addHook('parser-find-elements', parserExampleExtElement, 202);
	}
};

function parserExampleExtElement(elements, element, block, filename) {
	if ( element.name !== 'apiexampleext' ) { return elements; }
	elements.pop();
	app.log.debug(element)
	const values = elementParser.parse(element.content, element.source);
	app.log.debug(values)
	var e={}
	e.name = values.element.toLowerCase()
	e.sourceName = values.element
	e.source = '@'+values.element+" {"+ values.schema +"} "+ values.title
	const data = fs.readFileSync( path.join(path.dirname(filename), values.path), 'utf8').toString();
	e.content = data
	e.source = e.source + "\n" + data
	elements.push(e);
	return elements;
}