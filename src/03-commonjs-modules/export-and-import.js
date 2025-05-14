const { MYNAME } = require('./multiple-exports');

const MYFRIENDSNAME = 'Alice';

module.exports.MYNAME = MYNAME;
module.exports.MYFRIENDSNAME = MYFRIENDSNAME;