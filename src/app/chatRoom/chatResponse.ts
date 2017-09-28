export class Response {
	constructor(
		public type: String,
    public room: String,
    public name:String,
    public data: Array<Object>
	) { }
}
