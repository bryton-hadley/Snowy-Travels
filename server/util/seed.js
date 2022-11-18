let skiResorts = [
    {
      picture: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_797,q_75,w_775/v1/clients/utahddm/1767789607_cacdd3d4-6d85-4487-ab57-5aae30b4cb0b.jpg",
      name: "Park City",
      price: 150,
      state: 'Utah',
      city: 'Park City',
      slopeCount: 330,
      lifts: 43
    },
      {
      name: "Breckenridge",
      price: 179,
      state: 'Colorado',
      city: 'Breckenridge',
      slopeCount: 187,
      lifts: 33
    },
      {
      name: "Jackson Hole",
      price: 116,
      state: 'Wyoming',
      city: 'Teton Village',
      slopeCount: 130,
      lifts: 13
    },
  ]

//   app.post('/seed', async (req,res) => {
//     await Resort.bulkCreate(skiResorts)
//   })
module.exports = {
    seed: async (req,res) => {
        const {Resort} = require('../models/resort')
            await Resort.bulkCreate(skiResorts)
          }
}