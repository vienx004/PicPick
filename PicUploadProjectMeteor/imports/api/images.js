import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Images = new Mongo.Collection('images');

Meteor.methods({
    'Images.addOne': ({ source }) => {
        return Images.insert({source});
    },
});

Meteor.publish('images', () => {
    return Images.find();
})

export default Images;