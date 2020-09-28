export default class BuildHTTPQuery {
	private _url: string = '';

	get url(): string {
		return this._url;
	}

	set url(value: string) {
		this._url = value;
	}

	private params: { key: string; value: string | number | boolean }[] = [];

	public addQueryParam(key: string, value: string | number | boolean) {
		this.params.push({ key, value });
	}

	public removeQueryParam(key: string) {
		this.params = this.params.filter(obj => obj.key !== key);
	}

	public getQueryString(): string {
		let qs: string = this.url + '?';
		for (const p of this.params) {
			if (p.key.length > 0) {
				qs += `${p.key}=${p.value}&`;
			}
		}

		return encodeURI(qs.slice(0, -1));
	}
}