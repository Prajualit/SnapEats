const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://prajualit:Devilking%408934@fooddelivery.2mbtxoa.mongodb.net/SnapEats?retryWrites=true&w=majority&appName=foodDelivery'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) {
            console.log('Error', err);
        } else {
            console.log('Connected');
            const fetched_pizzas = await mongoose.connection.db.collection("pizzas");
            fetched_pizzas.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err)
                    else {
                        global.pizzas = data;
                        global.foodCategory = catData;
                    }
                });
            })
            const fetched_burgers = await mongoose.connection.db.collection("burgers");
            fetched_burgers.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err)
                    else {
                        global.burgers = data;
                        global.foodCategory = catData;
                    }
                });
            })
            const fetched_beverages = await mongoose.connection.db.collection("beverages");
            fetched_beverages.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err)
                    else {
                        global.beverages = data;
                        global.foodCategory = catData;
                    }
                });
            })
            const fetched_desserts = await mongoose.connection.db.collection("desserts");
            fetched_desserts.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err)
                    else {
                        global.desserts = data;
                        global.foodCategory = catData;
                    }
                });
            })
            const fetched_wraps = await mongoose.connection.db.collection("wraps");
            fetched_wraps.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err)
                    else {
                        global.wraps = data;
                        global.foodCategory = catData;
                    }
                });
            })
        }
    });
}

module.exports = mongoDB;