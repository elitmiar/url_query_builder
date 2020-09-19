export default class BuildHTTPQuery
{
	public addQueryParam(key: string, value: string)
}


let queriesStr = '';
for(const prop in this.queries) {
	const value = this.queries[prop];
	if(value !== undefined && value !== null) {
		queriesStr += `${prop}=${value}&`;
	};
}

// Delete last unnecessary &.
queriesStr = queriesStr.slice(0, -1);
return `${this.url}?${queriesStr}`;
};
