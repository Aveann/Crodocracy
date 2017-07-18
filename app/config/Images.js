/*
Created by Naëva Arnould

Defines the path of different images.
*/
const IMAGE_PATH = '../images/';
const Images = {
  logo: require('../images/crowlogo.png'),

  //TABS
  tab: {
    home: require('../images/home-icon.png'),
    notification: require('../images/notification-icon-updated.png'),
    deadline_voting: require('../images/deadline-voting-icon.png'),
    profile: require('../images/profile.png'),
  },
  header: {
    search: require('../images/search.png'),
    create: require('../images/create-new-pencil-button.png')
  },
  //PROFILE
  profile: {
    default_male: require('../images/default_profile_male.png'),
    default_female: require('../images/default_profile_female.png'),
  },


};

export default Images;