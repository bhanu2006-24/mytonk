export const initialServices = [
  {
    id: 's1',
    name: { en: 'Home Cleaning', hi: 'घर की सफाई' },
    category: 'Home Services',
    description: { en: 'Deep cleaning for your entire home. Includes dusting, mopping, and sanitization.', hi: 'आपके पूरे घर की गहरी सफाई। इसमें डस्टिंग, पोंछा लगाना और स्वच्छता शामिल है।' },
    price: 499,
    rating: 4.8,
    reviews: 124,
    image: 'https://plus.unsplash.com/premium_photo-1678742388597-d9d76a759d14?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    provider: 'Tonk Cleaners',
    contact: '+91 98765 43210'
  },
  {
    id: 's2',
    name: { en: 'Electrician', hi: 'बिजली मिस्त्री' },
    category: 'Repairs',
    description: { en: 'Expert electrical repairs, wiring, and installation services.', hi: 'विशेषज्ञ विद्युत मरम्मत, वायरिंग और स्थापना सेवाएं।' },
    price: 299,
    rating: 4.5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1700639637219-23f6603c5d2e?q=80&w=976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    provider: 'Sharma Electric',
    contact: '+91 98765 43211'
  },
  {
    id: 's3',
    name: { en: 'Plumber', hi: 'नलसाज' },
    category: 'Repairs',
    description: { en: 'Fixing leaks, pipe installation, and bathroom fittings.', hi: 'लीक ठीक करना, पाइप स्थापना, और बाथरूम फिटिंग।' },
    price: 350,
    rating: 4.6,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=800&auto=format&fit=crop',
    provider: 'Quick Fix Plumbing',
    contact: '+91 98765 43212'
  },
  {
    id: 's4',
    name: { en: 'AC Repair', hi: 'एसी मरम्मत' },
    category: 'Appliance',
    description: { en: 'AC servicing, gas filling, and repairs for all brands.', hi: 'सभी ब्रांडों के लिए एसी सर्विसिंग, गैस भरना और मरम्मत।' },
    price: 599,
    rating: 4.7,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1665826254141-bfa10685e002?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    provider: 'Cool Breeze Services',
    contact: '+91 98765 43213'
  },
  {
    id: 's5',
    name: { en: 'Carpentry', hi: 'बढ़ई का काम' },
    category: 'Woodwork',
    description: { en: 'Custom furniture, door repairs, and wood polishing.', hi: 'कस्टम फर्नीचर, दरवाजे की मरम्मत, और लकड़ी की पॉलिशिंग।' },
    price: 450,
    rating: 4.4,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1611021061285-16c871740efa?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    provider: 'Vishwakarma Furniture',
    contact: '+91 98765 43214'
  },
  {
    id: 's6',
    name: { en: 'Beauty Salon', hi: 'ब्यूटी सैलून' },
    category: 'Personal Care',
    description: { en: 'Haircut, facial, makeup, and more at your doorstep.', hi: 'आपके दरवाजे पर बाल कटवाना, फेशियल, मेकअप और बहुत कुछ।' },
    price: 799,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800&auto=format&fit=crop',
    provider: 'Glamour Home Salon',
    contact: '+91 98765 43215'
  }
];

export const initialProducts = [
  {
    id: 'p1',
    name: { en: 'Fresh Mangoes', hi: 'ताजा आम' },
    category: 'Fruits',
    description: { en: 'Sweet and organic mangoes directly from the farm.', hi: 'मीठे और जैविक आम सीधे खेत से।' },
    price: 120,
    unit: 'kg',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=800&auto=format&fit=crop',
    seller: 'Tonk Mandi'
  },
  {
    id: 'p2',
    name: { en: 'Organic Vegetables Basket', hi: 'जैविक सब्जियों की टोकरी' },
    category: 'Vegetables',
    description: { en: 'Mixed seasonal vegetables, 5kg basket.', hi: 'मिश्रित मौसमी सब्जियां, 5 किलो की टोकरी।' },
    price: 350,
    unit: 'basket',
    rating: 4.7,
    image: 'https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    seller: 'Green Farm'
  },
  {
    id: 'p3',
    name: { en: 'Pure Honey', hi: 'शुद्ध शहद' },
    category: 'Groceries',
    description: { en: '100% pure organic honey.', hi: '100% शुद्ध जैविक शहद।' },
    price: 400,
    unit: '500g',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop',
    seller: 'Village Naturals'
  },
  {
    id: 'p4',
    name: { en: 'Handmade Pottery', hi: 'राजनस्थानी मिट्टी के बर्तन' },
    category: 'Handicrafts',
    description: { en: 'Traditional Rajasthani clay pots and decoration items.', hi: 'पारंपरिक राजस्थानी मिट्टी के बर्तन और सजावटी सामान।' },
    price: 250,
    unit: 'piece',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop',
    seller: 'Artisan Corner'
  },
  {
    id: 'p5',
    name: { en: 'Bikaneri Bhujia', hi: 'बीकानेरी भुजिया' },
    category: 'Snacks',
    description: { en: 'Authentic spicy Rajasthani snack.', hi: 'प्रामाणिक मसालेदार राजस्थानी नाश्ता।' },
    price: 220,
    unit: '1kg',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop',
    seller: 'Rajasthan Sweets'
  }
];

export const initialEvents = [
  {
    id: 'e1',
    title: { en: 'Tonk Food Festival', hi: 'टोंक खाद्य महोत्सव' },
    date: '2025-05-15',
    time: '6:00 PM',
    location: 'Gandhi Park, Tonk',
    description: { en: 'Enjoy the best local cuisines and music.', hi: 'स्थानीय व्यंजनों और संगीत का आनंद लें।' },
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'e2',
    title: { en: 'Cultural Night', hi: 'सांस्कृतिक रात्रि' },
    date: '2025-06-01',
    time: '7:00 PM',
    location: 'Town Hall',
    description: { en: 'Folk dance and music performances.', hi: 'लोक नृत्य और संगीत प्रदर्शन।' },
    image: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800&auto=format&fit=crop'
  }
];

export const initialTransport = [
  {
    id: 't1',
    name: { en: 'City Auto Rickshaw', hi: 'सिटी ऑटो रिक्शा' },
    type: 'Auto',
    description: { en: 'Quick and affordable rides within Tonk city.', hi: 'टोंक शहर के भीतर त्वरित और किफायती सवारी।' },
    price: 'From ₹20',
    contact: '+91 99999 11111',
    image: 'https://media.istockphoto.com/id/1140956329/photo/traditional-indian-moto-rickshaw-taxi-on-one.jpg?s=612x612&w=0&k=20&c=UOL0V9nOJxIa4qLsPeU14KCAFa8PDWvq-80XGJ0SKIg='
  },
  {
    id: 't2',
    name: { en: 'Car Rental Service', hi: 'कार रेंटल सेवा' },
    type: 'Cab',
    description: { en: 'Rent cars for outstation or local trips. Driver included.', hi: 'बाहरी या स्थानीय यात्राओं के लिए कार किराए पर लें। ड्राइवर शामिल है।' },
    price: '₹12/km',
    contact: '+91 88888 22222',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 't3',
    name: { en: 'Mini Truck / Loading', hi: 'मिनी ट्रक / लोडिंग' },
    type: 'Logistics',
    description: { en: 'For shifting home or transporting goods.', hi: 'घर शिफ्ट करने या सामान ले जाने के लिए।' },
    price: 'From ₹500',
    contact: '+91 77777 33333',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop'
  }
];
