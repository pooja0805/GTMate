const mongoose = require('mongoose');

var Search = mongoose.model('Search',{
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
    tags: {  type: Array },
    nearby: {  type: Array }
});

module.exports = { Search };