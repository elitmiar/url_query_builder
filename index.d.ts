export default class BuildHTTPQuery {
    private _url;
    get url(): string;
    set url(value: string);
    private params;
    addQueryParam(key: string, value: string | number | boolean): void;
    removeQueryParam(key: string): void;
    getQueryString(): string;
}
