# apidoc-plugin-example-ext

Generates and inject [apidoc](http://apidoc.com) example elements from api schemas or files.

`@apiExample {SCHEMA_TYPE=PATH_TO_SCHEMA} ELEMENT_TYPE TITLE`

## Install
`npm install apidoc-plugin-example-ext -g`

## Supported Schema Types
### json
Prettifies JSON and injects in.


## Example Use
```javascript
/**
 * @api {get} /api GetAPI
 * @apiExampleExt {json=./ex/api.req.json} apiParamExample Request
 * @apiExampleExt {jsonschema=./ex/api.res.json} apiSuccessExample Success-Response
 */
```

## Developer Note
This plugin uses `parser-find-elements` @ priority `202`.
