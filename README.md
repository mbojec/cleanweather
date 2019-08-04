# Clear Weather

Clear Weather is a simple single-page web weather app created in React using [_Dark Sky's_](https://darksky.net/poweredby/) forecast API, [_MapBox_](https://www.mapbox.com/) and [_Amcharts_](https://www.amcharts.com/). Dark Sky provides an abundance of data such as the weather summary, precipitation odds, and humidity, so that this info is displayed within the UI. MapBox provides current location data and reverse geocoding for the searched cities, it also displays the map of the City that the forecast is about in the main screen. The data provided by Dark Sky is mostly displayed within gauges and charts providede by Amcarts. The app has 3 main views: the home screen where the  current weather information are displayed separately with the usage ot animate gauges from Amcharts. The second  and the third screen displays information about the forecast for the next 12 hours and 7 days in series of charts. Clear Weather uses react-redux as the main source of data.

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

### Webpack
Clean Weather uses webpack as a module bundler. In the production state webpack creates build directory with the bundle JavaScript files `out.js` and `index.html` as the main html file and `main.scss` as the style container for the entire app. If you want to change the structure of your app please remember to change the `entryPath` and `entryFile` variables in the `webpack.config.js` file.

## License

Copyright 2019 mbojec

   Licensed under the Apache License, Version 2.0 (the "License") you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

   Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
