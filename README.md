# message-headers

[![build status](https://img.shields.io/travis/niftylettuce/message-headers.svg)](https://travis-ci.org/niftylettuce/message-headers)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/niftylettuce/message-headers.svg)](LICENSE)

> Automatically updated list of RFC HTTP permanent and provisional headers from IANA (<https://www.iana.org/assignments/message-headers/message-headers.xhtml>)
>
> Are you receiving the client-side error ["Refused to set unsafe header"](https://stackoverflow.com/questions/50364832/refused-to-set-unsafe-header-access-control-request-headers-angular-4/50366340)? It's because you're trying to modify a standard header sent by the browsers by default (and that is not safe)!
>
> This package is manually updated (for safety) when the automatic nightly builds fail (the remote IANA CSV files were updated).


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install message-headers
```

[yarn][]:

```sh
yarn add message-headers
```


## Usage

```js
const messageHeaders = require('message-headers');

console.log('all', messageHeaders.all);
console.log('permanent', messageHeaders.permanent);
console.log('provisional', messageHeaders.provisional);
console.log('standard', messageHeaders.standard);
console.log('deprecated', messageHeaders.deprecated);
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com/)


##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
