export const roomsData = [
  {
    id: 'canopy-suite',
    name: "The Canopy Suite",
    description: "Elevated among the ancient redwoods, the Canopy Suite offers unparalleled 360-degree views of the forest. Featuring a private wraparound deck, outdoor soaking tub, and a suspended glass-bottom lounge area, this suite is designed to blur the line between indoor luxury and outdoor majesty.",
    longDescription: "Step into a world where the forest meets the sky. The Canopy Suite is our signature accommodation, suspended 40 feet above the forest floor. The architecture maximizes natural light while ensuring complete privacy. Enjoy your morning coffee on the wraparound deck while listening to the local birdlife, or unwind in the evening in the outdoor geothermal soaking tub under the stars. The interior boasts custom-milled local timber, a king-size floating bed, and a state-of-the-art climate control system that runs entirely on renewable energy.",
    price: 850,
    guests: 2,
    size: "850 sq ft",
    view: "Forest Canopy",
    bedType: "1 King Bed",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000",
      "https://images.unsplash.com/photo-1582219435545-57221e57a292?q=80&w=1000",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1000"
    ],
    features: [
      "Private wraparound deck",
      "Outdoor geothermal soaking tub",
      "Suspended glass-bottom lounge",
      "Wood-burning fireplace",
      "Organic mini-bar",
      "Telescope for stargazing"
    ]
  },
  {
    id: 'forest-villa',
    name: "The Forest Villa",
    description: "A spacious sanctuary designed for families or small groups. The Villa features two master bedrooms, a sunken living room with a central fireplace, and a private natural plunge pool heated by geothermal energy.",
    longDescription: "The Forest Villa offers expansive luxury nestled deep within the valley. Designed for those who seek space and shared experiences without sacrificing privacy. The open-plan living area centers around a magnificent suspended stone fireplace, perfect for gathering after a day of hiking. Floor-to-ceiling retractable glass walls open entirely to the private courtyard, where a geothermal plunge pool awaits. Both master suites feature deep soaking tubs and private outdoor showers, offering a truly immersive nature experience.",
    price: 1200,
    guests: 4,
    size: "1,400 sq ft",
    view: "Valley & Woods",
    bedType: "2 King Beds",
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2000",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000"
    ],
    features: [
      "Two master suites",
      "Private geothermal plunge pool",
      "Sunken living room",
      "Full chef's kitchen",
      "Outdoor dining pavilion",
      "Private outdoor showers"
    ]
  },
  {
    id: 'riverside-cabin',
    name: "The Riverside Cabin",
    description: "Situated just steps away from the meandering crystal river, this intimate cabin offers the soothing sounds of flowing water. It includes a wood-fired sauna and a stargazing skylight above the king-sized bed.",
    longDescription: "Let the sound of the flowing river lull you to sleep in our Riverside Cabin. This intimate retreat is grounded in the earth, offering direct access to private riverbank seating. The cabin embraces a darker, moodier aesthetic with charred timber cladding and rich leather interiors. The highlight is the private wood-fired sauna built into the riverbank, allowing for a traditional hot-cold therapy experience by dipping directly into the river. A large skylight above the bed ensures you fall asleep watching the stars.",
    price: 650,
    guests: 2,
    size: "600 sq ft",
    view: "River & Mountains",
    bedType: "1 King Bed",
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2000",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1000",
      "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1000"
    ],
    features: [
      "Direct river access",
      "Private wood-fired sauna",
      "Stargazing skylight",
      "Stone fireplace",
      "Espresso machine",
      "Record player with curated vinyl"
    ]
  }
];

export function getRoomById(id: string) {
  return roomsData.find(room => room.id === id);
}
