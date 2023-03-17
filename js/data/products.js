const jackets = [
  {
    jacketId: 1,
    name: "Fleece Jacket",
    size: ["Small", "Medium", "Large"],
    price: 59.99,
    details: true,
    detailText:
      "This jacket is made from high-quality materials and designed to keep you warm and comfortable in a variety of weather conditions. It features a well designed inner and very durable outer shell, and is available in different sizes. Whether you're hitting the slopes or just running errands around town, this jacket has you covered.",
    type: "cold",
    model: "men",
    image: {
      src: "../images/RainyDays_Jacket7_1.png",
      src2: "../images/RainyDays_Jacket7.png",
      caption: "A warm fleece wood green jacket with big warm pockets.",
    },
  },
  {
    jacketId: 2,
    name: "Light Jacket",
    size: ["Small", "Medium", "Large"],
    price: 29.99,
    details: true,
    detailText:
      "This jacket is made from high-quality materials and designed to keep you warm and comfortable in a variety of weather conditions. It features a well designed inner and very durable outer shell, and is available in different sizes. Whether you're hitting the slopes or just running errands around town, this jacket has you covered.",
    type: "wind",
    model: "men",
    image: {
      src: "../images/RainyDays_Jacket3_3.png",
      src2: "../images/RainyDays_Jacket3.png",
      caption: "Red and black light wind breaker shell jacket.",
    },
  },
  {
    jacketId: 3,
    name: "Hiking Jacket",
    size: ["Small", "Medium", "Large"],
    price: 29.99,
    details: true,
    detailText:
      "This jacket is made from high-quality materials and designed to keep you warm and comfortable in a variety of weather conditions. It features a well designed inner and very durable outer shell, and is available in different sizes. Whether you're hitting the slopes or just running errands around town, this jacket has you covered.",
    type: "shell",
    model: "men",
    image: {
      src: "../images/RainyDays_Jacket2_2.png",
      src2: "../images/RainyDays_Jacket2.png",
      caption: "soft shell jacket",
    },
  },
  {
    jacketId: 4,
    name: "Hunting Jacket",
    size: ["Small", "Medium", "Large"],
    price: 59.99,
    details: true,
    detailText:
      "This jacket is made from high-quality materials and designed to keep you warm and comfortable in a variety of weather conditions. It features a well designed inner and very durable outer shell, and is available in different sizes. Whether you're hitting the slopes or just running errands around town, this jacket has you covered.",
    type: "wind, rain, cold",
    model: "men",
    image: {
      src: "../images/RainyDays_Jacket5_2.png",
      src2: "../images/RainyDays_Jacket5.png",
      caption: "grey warm jacket",
    },
  },
  {
    jacketId: 5,
    name: "Wool Jacket",
    size: ["Small", "Medium", "Large"],
    price: 59.99,
    details: true,
    detailText:
      "This jacket is made from high-quality materials and designed to keep you warm and comfortable in a variety of weather conditions. It features a well designed inner and very durable outer shell, and is available in different sizes. Whether you're hitting the slopes or just running errands around town, this jacket has you covered.",
    type: "inner",
    model: "men",
    image: {
      src: "../images/RainyDays_Jacket7_1.png",
      src2: "../images/RainyDays_Jacket7.png",
      caption: "warm wool jacket",
    },
  },
  {
    jacketId: 6,
    name: "Sailor Jacket",
    size: ["Small", "Medium", "Large"],
    price: 59.99,
    details: true,
    detailText:
      "This jacket is made from high-quality materials and designed to keep you warm and comfortable in a variety of weather conditions. It features a well designed inner and very durable outer shell, and is available in different sizes. Whether you're hitting the slopes or just running errands around town, this jacket has you covered.",
    type: "wind, rain",
    model: "women",
    image: {
      src: "../images/RainyDays_Jacket1_2.png",
      src2: "../images/RainyDays_Jacket1.png",
      caption: "heavy durable wind and water resistant jacket",
    },
  },
  {
    jacketId: 7,
    name: "Race Jacket",
    size: ["Small", "Medium", "Large"],
    price: 49.99,
    details: true,
    detailText:
      "This jacket is made from high-quality materials and designed to keep you warm and comfortable in a variety of weather conditions. It features a well designed inner and very durable outer shell, and is available in different sizes. Whether you're hitting the slopes or just running errands around town, this jacket has you covered.",
    type: "Rain",
    model: "women",
    image: {
      src: "../images/RainyDays_Jacket6_2.png",
      src2: "../images/RainyDays_Jacket6.png",
      caption: "durable wind and water resistant jacket",
    },
  },
  {
    jacketId: 8,
    name: "Action Jacket",
    size: ["Small", "Medium", "Large"],
    price: 49.99,
    details: true,
    detailText:
      "This jacket is made from high-quality materials and designed to keep you warm and comfortable in a variety of weather conditions. It features a well designed inner and very durable outer shell, and is available in different sizes. Whether you're hitting the slopes or just running errands around town, this jacket has you covered.",
    type: "snow",
    model: "women",
    image: {
      src: "../images/RainyDays_Jacket4_2.png",
      src2: "../images/RainyDays_Jacket4.png",
      caption: "durable wind and water resistant jacket",
    },
  },
  {
    jacketId: 9,
    name: "Wool Jacket",
    size: ["Small", "Medium", "Large"],
    price: 39.99,
    details: true,
    detailText:
      "This jacket is made from high-quality materials and designed to keep you warm and comfortable in a variety of weather conditions. It features a well designed inner and very durable outer shell, and is available in different sizes. Whether you're hitting the slopes or just running errands around town, this jacket has you covered.",
    type: "Inner",
    model: "women",
    image: {
      src: "../images/RainyDays_Jacket7_1.png",
      src2: "../images/RainyDays_Jacket7.png",
      caption: "wool jacket",
    },
  },
  {
    jacketId: 10,
    name: "Wind Jacket",
    size: ["Small", "Medium", "Large"],
    price: 49.99,
    details: false,
    detailText:
      "This jacket is made from high-quality materials and designed to keep you warm and comfortable in a variety of weather conditions. It features a well designed inner and very durable outer shell, and is available in different sizes. Whether you're hitting the slopes or just running errands around town, this jacket has you covered.",
    type: "wind, rain",
    model: "women",
    image: {
      src: "../images/RainyDays_Jacket3_3.png",
      src2: "../images/RainyDays_Jacket3.png",
      caption: "windbreaker shell jacket",
    },
  },
];

localStorage.setItem("products", JSON.stringify(jackets));
