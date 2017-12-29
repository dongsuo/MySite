export class Room {
	constructor(
		public id: Number,
    public creater:String,
    public name:String,
    public status: String,
    public type: String,
    public member:Array<String>
	) { }
}
