Template.header.helpers({
	user: function(){
		return Meteor.user();
	},
	userLink: function(){
		return Meteor.user()._id;
	},
  saveCount: function(){
    return Posts.find({'savedBy':Meteor.userId()}).count() || 0;
  }
});
