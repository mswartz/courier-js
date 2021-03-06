Meteor.publish('posts', function(options) {
	check(options, {
    	sort: Object,
    	limit: Number
  	});
	return Posts.find({}, options);
});

Meteor.publish('singlePost', function(id) {
	check(id, String)
	return Posts.find(id);
});

Meteor.publish('userPosts', function(id) {
	check(id, String)
	return Posts.find({userId : id});
});

Meteor.publish('savedPosts', function(user_id) {
	check(user_id, String)
	return Posts.find({savedBy : user_id});
});
