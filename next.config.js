module.exports = {

  webpack(config) {
    config.resolve.fallback = {

      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,

      fs: false,
      net: false,
      async_hooks: false // the solution
    };

    return config;
  },
  images: {
    remotePatterns: [
      // Hostnames for Pizza images
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'tastykitchen.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.eatfit.in',
      },
      {
        protocol: 'https',
        hostname: 'www.jennycancook.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'dudethatcookz.com',
      },
      {
        protocol: 'https',
        hostname: 'cf.ltkcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'www.dominos.com.au',
      },
      {
        protocol: 'https',
        hostname: 'www.allrecipes.com',
      },
      {
        protocol: 'https',
        hostname: 'www.thespruceeats.com',
      },
      // Hostnames for Burger images
      {
        protocol: 'https',
        hostname: 'mccormick.widen.net',
      },
      {
        protocol: 'https',
        hostname: 'www.seriouseats.com',
      },
      {
        protocol: 'https',
        hostname: 'dizzybusyandhungry.com',
      },
      {
        protocol: 'https',
        hostname: 'pulses.org',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.biggreenegg.eu',
      },
      {
        protocol: 'https',
        hostname: 'proveg.org',
      },
      {
        protocol: 'https',
        hostname: 'images.immediate.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'c.ndtvimg.com',
      },
      {
        protocol: 'https',
        hostname: 'aartimadan.com',
      },
      {
        protocol: 'https',
        hostname: 'www.thespruceeats.com',
      },
      // Hostnames for Drink images
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
      },
      {
        protocol: 'https',
        hostname: 'dfreight.org',
      },
      {
        protocol: 'https',
        hostname: 'isitbadforyou.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'parade.com',
      },
      {
        protocol: 'https',
        hostname: 'www.helloscholar.com',
      },
      {
        protocol: 'https',
        hostname: 's3files.core77.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.usatoday.com',
      },
      {
        protocol: 'https',
        hostname: 'www.thespruceeats.com',
      },
      // Hostnames for Dessert images
      {
        protocol: 'https',
        hostname: 'joyfoodsunshine.com',
      },
      {
        protocol: 'https',
        hostname: 'www.allrecipes.com',
      },
      {
        protocol: 'https',
        hostname: 'sugarspunrun.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.eatingonadime.com',
      },
      {
        protocol: 'https',
        hostname: 'feelgoodfoodie.net',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'www.thespruceeats.com',
      },
      // Hostnames for Wrap images
      {
        protocol: 'https',
        hostname: 'www.eatingwell.com',
      },
      {
        protocol: 'https',
        hostname: 'media-cdn.tripadvisor.com',
      },
      {
        protocol: 'https',
        hostname: 'www.cookshideout.com',
      },
      {
        protocol: 'https',
        hostname: 'www.jennieo.com',
      },
      {
        protocol: 'https',
        hostname: 'homecookingmemories.com',
      },
      {
        protocol: 'https',
        hostname: 'www.foxvalleyfoodie.com',
      },
      {
        protocol: 'https',
        hostname: 'tastykitchen.com',
      },
      {
        protocol: 'https',
        hostname: 'www.thespruceeats.com',
      },
      {
        protocol: 'https',
        hostname: 'neelamfoodlandmumbai.com',
      },
      {
        protocol: 'https',
        hostname: 'neelamfoodlandmumbai.com',
      },
      {
        protocol: 'https',
        hostname: 'www.tasteofhome.com',
      },
    ],
  },
};