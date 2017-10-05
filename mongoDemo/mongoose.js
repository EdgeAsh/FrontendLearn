const mongoose = require('mongoose')
 
mongoose.Promise = Promise
mongoose.set('debug',true)
mongoose.connect('mongodb://localhost/xxo',{
	useMongoClient:true
})
mongoose.connection.on('open',()=>{
	console.log('mongodb opened!')
})

const UserSchema = new mongoose.Schema({
	name: String,
	times: {
		type: Number,
		default: 0
	}
})

// Schema集成
UserSchema.pre('save', function(next){
	this.times++
	next()
})

// model添加静态方法
UserSchema.statics = {
	async getUser(name){
		const user = await this.findOne({
			name: name
		}).exec()

		return user;
	}
}

// entity实例添加方法
UserSchema.methods = {
	async fetchUser(name) {
		const user = await this.model('User').findOne({
			name: name
		}).exec()
		return user
	}
}

mongoose.model('User',UserSchema)

const User = mongoose.model('User')

;(async ()=> {
	// console.log(await User.getUser('Vue SSR +'))
	const user = await User.findOne({name:'Vue SSR +'}).exec()
	const newUser = await user.fetchUser('Vue SSR +') 

	console.log(newUser)
	// const user = new User({
	// 	name: 'Vue'
	// })
	// await user.save();

	// const user = await User.findOne({name:'Vue SSR'}).exec()

	// user.name = "Vue SSR +";

	// await user.save()

	// console.log(await User.find({}).exec())
})()
