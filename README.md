#Clear Weather



[_Powered by Dark Sky_](https://darksky.net/poweredby/)


## Building project

### Installation

Clear Weather requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd cleanweather
$ npm install -d
$ npm start
```

For production...

```sh
$ npm run build
```

### API Keys
In order to hide the access tokens for Mapbox and Dark Sky, access tokens are purposely not checked into version control. Thus, if you checkout this project and try fetch data, the process will fail. To resolve this issue, create file with envioronement variables `.env` and store it in `clearweather/.env` and add the following lines with your own access token:

```js
REACT_APP_MAPBOX_API_KEY=MAPBOX_ACCESS_TOKEN_HERE
REACT_APP_DARKSKY_API_KEY=DARK_SKY_TOKEN_HERE
```

## License

Copyright 2019 mbojec

   Licensed under the Apache License, Version 2.0 (the "License") you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

   Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
