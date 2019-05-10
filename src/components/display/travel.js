const itinerarySchema = mongoose.Schema({
    title: { type: String, required: true },
    date_leave: { type: Date },
    date_return: { type: Date },
    travel: [{type: mongoose.Schema.Types.ObjectId, ref: 'Travel', autopopulate: true}],
    lodging: [{type: mongoose.Schema.Types.ObjectId, ref: 'Lodging', autopopulate: true}],
    activity: [{type: mongoose.Schema.Types.ObjectId, ref: 'Activity', autopopulate: true}],
    public: { type: Boolean, required: true },
    timestamp: { type: Date, default: Date.now },
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', autopopulate: true}
  },
  { collection: 'itineraries'});