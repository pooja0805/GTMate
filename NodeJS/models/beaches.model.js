const mongoose = require('mongoose');

var Beach = mongoose.model('Beach',{
    description: { type: String },
    district: { type: String },
    location: { type: Object },
    lat: { type: Number },
    lng: { type: Number },
    mustVisit: { type: Boolean },
    name: {  type: String },
    pictures: { type: Array },
    rating: { type: Object },
    reviews: { type: Number },
    rvalue: { type: Number },
    tags: {  type: Array }
});

module.exports = { Beach };