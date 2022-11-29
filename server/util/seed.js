let skiResorts = [
    {
      image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_797,q_75,w_775/v1/clients/utahddm/1767789607_cacdd3d4-6d85-4487-ab57-5aae30b4cb0b.jpg",
      name: "Park City",
      price: 150,
      state: 'Utah',
      city: 'Park City',
      slopeCount: 330,
      lifts: 43
    },
      {
        image: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/27336923.jpg?k=7608ff130e0f01bc53910a0386d5ea49dda45de1eb9eb2a2d33d74e34e1323e6&o=&hp=1",
      name: "Breckenridge",
      price: 179,
      state: 'Colorado',
      city: 'Breckenridge',
      slopeCount: 187,
      lifts: 33
    },
      {
        image: "https://www.datocms-assets.com/50871/1632853055-winter-lodging-ads-jackson-hole-winter-resort-snake-river-lodge-spa.jpg?fit=crop&h=225&w=375",
      name: "Jackson Hole",
      price: 116,
      state: 'Wyoming',
      city: 'Teton Village',
      slopeCount: 130,
      lifts: 13
    },
    {
      image: "https://sunlightmtn.com/images/2022/06/07/sunlight-aerial.jpg",
      name: "SunLight",
      price: 65,
      state: "Colorado",
      city: "Glenwood Springs",
      slopeCount: 67 ,
      lifts: 3
    },
    
    {
      image: "https://i.pinimg.com/736x/4c/30/38/4c3038b402f809a6e68fc58aa8ed5945--mammoth-mountain-ski-resort-mammoth-ca.jpg",
      name: "Mammoth ",
      price: 209,
      state: "California",
      city: "Mammoth lakes",
      slopeCount: 150,
      lifts: 28 
    }, 
    
    {
      image: "https://www.aspensnowmass.com/-/media/aspen-snowmass/images/image-cta-with-title-and-description/image-cta-card-tall/winter/2021-22/snowmass-condos-2-four-up-card-091321/snowmass-condos-3-four-up-card-091321.jpg?mw=564&mh=620&hash=AC51830AC96B830A917B97B859004B28",
      name: "Aspen",
      price: 160,
      state: "Colorado",
      city: "Aspen",
      slopeCount: 76,
      lifts: 8
    },
    {
      image: "https://unofficialnetworks.com/wp-content/uploads/sites/88/2021/11/Screen-Shot-2021-11-14-at-9.25.16-PM.png",
      name: "Palisades Tahoe",
      price: 195,
      state: "California",
      city: "Tahoe",
      slopeCount: 270,
      lifts: 15
    },
    {
      image: "https://www.snowbird.com/images/small/uploaded/lodging%20-%20cliff%20exteriors/cliff_lodge_exterior_jay_dash_photography_img_9838.jpg",
      name: "SnowBird",
      price: 170,
      state: "Utah",
      city: "SnowBird",
      slopeCount: 168,
      lifts: 10
    },
    {
      image: "https://www.abc4.com/wp-content/uploads/sites/4/2021/12/02-Brighton-Utah-by-Jackson-Blackhurst-via-Unsplash-1.jpg",
      name: "Brighton",
      price: 107,
      state: "Utah",
      city: "Brighton",
      slopeCount: 66,
      lifts: 6
    },
    {
      image: "https://www.powderhounds.com/site/DefaultSite/filesystem/images/USA/Alta/Overview/11.jpg",
      name: "Alta",
      price: 154,
      state: "Utah",
      city: "Alta",
      slopeCount: 116,
      lifts: 7
    },
    {
      image: "https://lift.opensnow.com/media-images/1580494301fab10f3161d75ed6fb0a7e180d397fa2.jpg",
      name: "Sun Valley",
      price: 140,
      state: "Idaho",
      city: "Sun Valley",
      slopeCount: 65,
      lifts: 18 
    },
    {
      image: "https://www.snowsbest.com/wp-content/uploads/2019/06/ms-x-b-e-f-fe-b-a-df-b-.jpg",
      name: "Brian Head",
      price: 80,
      state: "Utah",
      city: "Parowan",
      slopeCount: 71,
      lifts: 8 
    },
    {
      image: "https://www.snowbasin.com/images/uploads/blog/Opening_Day_November_27_header_.jpg",
      name: "Snow Basin",
      price: 195,
      state: "Utah",
      city: "Huntsville",
      slopeCount: 104,
      lifts: 11 
    },
    {
      image: "https://www.visitogden.com/imager/s3-us-west-1_amazonaws_com/ogden-craft/craft/Powder-Mountain-9_28aa424b5e06ed90b550b72f00feb4d0.jpg",
      name: "Powder Mountain ",
      price: 115,
      state: "Utah",
      city: "Eden",
      slopeCount: 154,
      lifts: 9
    },
    {
      image: "https://www.skiutah.com/members/deer-valley/heroes/Black%20Diamond%20Lodge%20at%20Deer%20Valley%20Resort/hero--xl",
      name: "Deer Valley ",
      price: 230,
      state: "Utah",
      city: "Park city",
      slopeCount: 103,
      lifts: 21
    },
    {
      image: "https://unofficialnetworks.com/wp-content/uploads/sites/88/2021/12/Screen-Shot-2021-12-26-at-2.03.30-PM.png?w=640",
      name: "Sundance",
      price: 129,
      state: "Utah",
      city: "Sundace",
      slopeCount: 42,
      lifts: 5
    },    
    {
      image: "https://www.skimag.com/wp-content/uploads/2020/10/ski1120-rgw8-steamboat-courtesy-v2.jpg",
      name: "Steamboat Springs",
      price: 250,
      state: "Colorado",
      city: "Steamboat Springs",
      slopeCount: 170,
      lifts: 23
    },    
    {
      image: "https://cdn1.parksmedia.wdprapps.disney.com/media/dvc/en/destinations/list/us-mountain/keystone-resort/keystone-hero-overview.jpg",
      name: "Keystone",
      price: 225,
      state: "Colorado",
      city: "Keystone",
      slopeCount: 128,
      lifts: 20
    },
    {
      image: "https://www.uncovercolorado.com/wp-content/uploads/2021/12/silverton-mountain-colorado-powder-chair.jpeg",
      name: "Silverton",
      price: 99,
      state: "Colorado",
      city: "Silverton",
      slopeCount: 10,
      lifts: 1
    },
    {
      image: "https://www.alyeskaresort.com/wp-content/uploads/2021/04/final_day_event.jpg",
      name: "Alyeska Resort",
      price: 109,
      state: "Alaska",
      city: "Gridwood",
      slopeCount: 76,
      lifts: 7
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/The_top_of_the_recently_opened_Black_Bear_Chairlift.jpg/1200px-The_top_of_the_recently_opened_Black_Bear_Chairlift.jpg",
      name: "EagleCrest",
      price: 68,
      state: "Alaska",
      city: "Juneau",
      slopeCount: 36,
      lifts: 4
    },
    {
      image: "https://www.powderhounds.com/site/DefaultSite/filesystem/images/USA/GrandTarghee/Overview/09.jpg",
      name: "Grand Targhee",
      price: 120,
      state: "Wyoming",
      city: "Alta",
      slopeCount: 93,
      lifts: 5 
    },
    {
      image: "https://i0.wp.com/homeis.blog/wp-content/uploads/2020/05/IMG_0500-1.jpg?fit=970%2C728&ssl=1",
      name: "Pine Creek",
      price: 55,
      state: "Wyoming",
      city: "Cokeville",
      slopeCount: 30,
      lifts: 2
    },
    {
      image: "https://static.evo.com/content/travel-guides/oregon/meadows/griffin_6.jpg",
      name: "Mt.Hood Meadows",
      price: 109,
      state: "Oregon",
      city: "MT.Hood",
      slopeCount: 85,
      lifts: 11
    },
    {
      image: "https://traveloregon.com/wp-content/uploads/2019/02/SkibowlIMG_7949.jpg",
      name: "Mt.Hood Skibowl",
      price: 89,
      state: "Oregon",
      city: "Mt.Hood",
      slopeCount: 69,
      lifts: 9
    },
    {
      image: "https://www.crystalmountainresort.com/-/media/crystal/images/2122-images/2122-hero-images/crystal-mountain-resort-pano.jpg?w=480&rev=145e25fb6cd645d0a79dd2fe7fdd0673&hash=820FA08934AF939237E6C9BA4BE653BF",
      name: "Crystal Mountain",
      price: 140,
      state: "Washington",
      city: "Pierce County",
      slopeCount: 57,
      lifts: 11 
    },
    {
      image: "https://www.mtbaker.us/wp-content/uploads/2021/11/MBSA_RavenHut-e1635810106309.jpg",
      name: "Mt.Baker",
      price: 87,
      state: "Washington",
      city: "Deming",
      slopeCount: 31,
      lifts: 8
    },
    {
      image: "https://i.pinimg.com/originals/cd/1c/54/cd1c54921d8d5e552451dd304c9cd174.jpg",
      name: "Mt.Spokane",
      price: 75,
      state: "Washington",
      city: "Mead",
      slopeCount: 52,
      lifts: 7 
    },
    {
      image: "https://pebblecreekskiarea.com/wp-content/uploads/2016/12/freestyle-2.png",
      name: "Pebble Creek",
      price: 62,
      state: "Idaho",
      city: "Inkom",
      slopeCount: 54,
      lifts: 3
    },
    {
      image: "http://ski-gear.net/wp-content/uploads/2018/10/silver-star-mountain.jpg",
      name: "Silver Mountain",
      price: 71,
      state: "Idaho",
      city: "Kellogg",
      slopeCount: 67,
      lifts: 7
    },
    {
      image: "https://imageio.forbes.com/specials-images/imageserve/620c160b0f796e202243f3c8/Big-Sky-Resort/960x0.jpg?format=jpg&width=960",
      name: "Big Sky",
      price: 190,
      state: "Montana",
      city: "Big Sky",
      slopeCount: 150,
      lifts: 24
    },
    {
      image: "https://assets.snowboardguides.com/photos/SNOWBOARDING/720x405/img_0273.jpg",
      name: "Bridger Bowl",
      price: 70,
      state: "Montana",
      city: "Bozeman",
      slopeCount: 75,
      lifts: 8
    },
    {
      image: "https://bloximages.chicago2.vip.townnews.com/ravallirepublic.com/content/tncms/assets/v3/editorial/f/ff/fffaba62-5659-5b2e-9990-a399dc445c9b/61ea0d4f12439.image.jpg?resize=1200%2C802",
      name: "Lost Trail",
      price: 60,
      state: "Montana",
      city: "Sula",
      slopeCount: 60,
      lifts: 8
    },
    {
      image: "https://www.powderhounds.com/site/DefaultSite/filesystem/images/USA/SnowBowl/Overview/10.jpg",
      name: "Snowbowl",
      price: 68,
      state: "Montana",
      city: "Missoula",
      slopeCount: 39,
      lifts: 4
    },
    // {
    //   image: "",
    //   name: "",
    //   price: ,
    //   state: "",
    //   city: "",
    //   slopeCount: ,
    //   lifts: 
    // },
 
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