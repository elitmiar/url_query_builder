# URL Query Builder
Super simple TypeScript URL Query Builder

## Install
``npm install url_query_builder --save``

## Usage

```
import BuildHTTPQuery from 'url_query_builder';

const qb = new BuildHTTPQuery();

// Setting the url
qb.url = 'https://your-url.com'

qb.addQueryParam('page', 1);
qb.addQueryParam('limit', 10);
qb.addQueryParam('inactive', true);
qb.addQueryParam('name', 'joe');

// Outputs: https://your-url.com?page=1&limit=10&inactive=true&name=joe
console.log(qb.getQueryString()); 
```

