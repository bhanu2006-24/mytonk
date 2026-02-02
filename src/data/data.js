export const initialServices = [
  // --- Home Services ---
  {
    id: 's1',
    name: { en: 'Home Cleaning', hi: 'घर की सफाई' },
    category: 'Home Services',
    description: { en: 'Deep cleaning for your entire home. Includes dusting, mopping, and sanitization.', hi: 'आपके पूरे घर की गहरी सफाई। इसमें डस्टिंग, पोंछा लगाना और स्वच्छता शामिल है।' },
    price: 499,
    rating: 4.8,
    reviews: 124,
    image: 'https://plus.unsplash.com/premium_photo-1678742388597-d9d76a759d14?q=80&w=987&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1700639637219-23f6603c5d2e?q=80&w=976&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1665826254141-bfa10685e002?q=80&w=2070&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1611021061285-16c871740efa?q=80&w=987&auto=format&fit=crop',
    provider: 'Vishwakarma Furniture',
    contact: '+91 98765 43214'
  },
  {
    id: 's12',
    name: { en: 'Pest Control', hi: 'कीट नियंत्रण' },
    category: 'Home Services',
    description: { en: 'Termite, cockroach, and mosquito control services.', hi: 'दीमक, तिलचट्टा और मच्छर नियंत्रण सेवाएं।' },
    price: 899,
    rating: 4.5,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1632759905256-42a984033e68?q=80&w=800&auto=format&fit=crop',
    provider: 'CleanHome Pest Control',
    contact: '+91 94000 33333'
  },
  {
    id: 's15',
    name: { en: 'Painter Service', hi: 'पेंटर सेवा' },
    category: 'Home Services',
    description: { en: 'Interior and exterior house painting with texture and stencil work.', hi: 'बनावट और स्टैंसिल काम के साथ आंतरिक और बाहरी घर पेंटिंग।' },
    price: 2000,
    rating: 4.6,
    reviews: 33,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
    provider: 'Rangoli Painters',
    contact: '+91 91000 99999'
  },
  {
    id: 's16',
    name: { en: 'RO Water Purifier Service', hi: 'आरओ सर्विस' },
    category: 'Appliance',
    description: { en: 'Filter change, membrane cleaning, and installation.', hi: 'फिल्टर परिवर्तन, झिल्ली सफाई, और स्थापना।' },
    price: 350,
    rating: 4.8,
    reviews: 150,
    image: 'https://plus.unsplash.com/premium_photo-1663040376378-0051187eb338?q=80&w=800&auto=format&fit=crop',
    provider: 'Pure Aqua Solutions',
    contact: '+91 99887 76655'
  },

  // --- Personal Care ---
  {
    id: 's6',
    name: { en: 'Beauty Salon (Ladies)', hi: 'लेडीज ब्यूटी पार्लर' },
    category: 'Personal Care',
    description: { en: 'Haircut, facial, makeup, and more at your doorstep.', hi: 'आपके दरवाजे पर बाल कटवाना, फेशियल, मेकअप और बहुत कुछ।' },
    price: 799,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800&auto=format&fit=crop',
    provider: 'Glamour Home Salon',
    contact: '+91 98765 43215'
  },
    {
    id: 's11',
    name: { en: 'Mehendi Artist', hi: 'मेहंदी कलाकार' },
    category: 'Personal Care',
    description: { en: 'Professional bridal and festival mehendi designs.', hi: 'पेशेवर दुल्हन और त्योहार मेहंदी डिजाइन।' },
    price: 1100,
    rating: 4.8,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1596240228790-25e24b335384?q=80&w=800&auto=format&fit=crop',
    provider: 'Priya Mehendi Art',
    contact: '+91 95000 44444'
  },
  {
    id: 's17',
    name: { en: 'Mens Barber Shop', hi: 'नाई की दुकान' },
    category: 'Personal Care',
    description: { en: 'Hair styling, beard grooming, and massage.', hi: 'हेयर स्टाइलिंग, दाढ़ी ग्रूमिंग और मालिश।' },
    price: 150,
    rating: 4.7,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1503951914290-934c463ca989?q=80&w=800&auto=format&fit=crop',
    provider: 'Royal Cuts Tonk',
    contact: '+91 88776 65544'
  },

  // --- Events ---
  {
    id: 's7',
    name: { en: 'Wedding Planner', hi: 'शादी के योजनाकार' },
    category: 'Events',
    description: { en: 'Complete wedding planning from venue selection to catering and decoration.', hi: 'स्थल चयन से लेकर खानपान और सजावट तक पूरी शादी की योजना।' },
    price: 25000,
    rating: 4.9,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    provider: 'Royal Weddings Tonk',
    contact: '+91 90000 88888'
  },
  {
    id: 's8',
    name: { en: 'Catering Service', hi: 'खानपान सेवा' },
    category: 'Events',
    description: { en: 'Delicious vegetarian and non-vegetarian food for parties and events.', hi: 'पार्टियों और कार्यक्रमों के लिए स्वादिष्ट शाकाहारी और मांसाहारी भोजन।' },
    price: 350,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop',
    provider: 'Annapurna Caterers',
    contact: '+91 98000 77777'
  },
  {
    id: 's18',
    name: { en: 'DJ & Sound System', hi: 'डीजे और साउंड सिस्टम' },
    category: 'Events',
    description: { en: 'High bass DJ system with lighting for marriages and parties.', hi: 'शादियों और पार्टियों के लिए लाइटिंग के साथ हाई बास डीजे सिस्टम।' },
    price: 5000,
    rating: 4.6,
    reviews: 40,
    image: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=800&auto=format&fit=crop',
    provider: 'Rockstar DJ Tonk',
    contact: '+91 77665 54433'
  },
  {
    id: 's19',
    name: { en: 'Tent House & Decoration', hi: 'टेंट हाउस' },
    category: 'Events',
    description: { en: 'Tables, chairs, stage, and flower decoration service.', hi: 'टेबल, कुर्सियाँ, मंच, और फूल सजावट सेवा।' },
    price: 2000,
    rating: 4.5,
    reviews: 60,
    image: 'https://images.unsplash.com/photo-1511216335488-56980682d323?q=80&w=800&auto=format&fit=crop',
    provider: 'Agarwal Tent House',
    contact: '+91 88990 07766'
  },
  {
    id: 's20',
    name: { en: 'Professional Photographer', hi: 'फोटोग्राफर' },
    category: 'Events',
    description: { en: 'Pre-wedding shoots, event coverage, and drone photography.', hi: 'प्री-वेडिंग शूट, इवेंट कवरेज और ड्रोन फोटोग्राफी।' },
    price: 15000,
    rating: 4.8,
    reviews: 55,
    image: 'https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=800&auto=format&fit=crop',
    provider: 'Lens Magic Studio',
    contact: '+91 99009 98877'
  },

  // --- Healthcare ---
  {
    id: 's10',
    name: { en: 'Physiotherapy', hi: 'फिजियोथेरेपी' },
    category: 'Healthcare',
    description: { en: 'Home visit physiotherapy for back pain, joint pain, and rehabilitation.', hi: 'पीठ दर्द, जोड़ों के दर्द और पुनर्वास के लिए होम विजिट फिजियोथेरेपी।' },
    price: 500,
    rating: 5.0,
    reviews: 34,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    provider: 'HealthFirst Physio',
    contact: '+91 96000 55555'
  },
  {
    id: 's21',
    name: { en: 'Lab Test at Home', hi: 'लैब टेस्ट' },
    category: 'Healthcare',
    description: { en: 'Blood sample collection from home. Reports on WhatsApp.', hi: 'घर से रक्त का नमूना संग्रह। व्हाट्सएप पर रिपोर्ट।' },
    price: 0,
    rating: 4.7,
    reviews: 120,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop',
    provider: 'City Diagnostic Centre',
    contact: '+91 91234 56789'
  },
  {
    id: 's22',
    name: { en: 'Nursing Care', hi: 'नर्सिंग केयर' },
    category: 'Healthcare',
    description: { en: 'Injection, dressing, and patient care at home.', hi: 'घर पर इंजेक्शन, ड्रेसिंग और रोगी की देखभाल।' },
    price: 200,
    rating: 4.9,
    reviews: 40,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf4722e63?q=80&w=800&auto=format&fit=crop',
    provider: 'Seva Nursing Bureau',
    contact: '+91 99880 01122'
  },

  // --- Technical & Repairs ---
  {
    id: 's9',
    name: { en: 'Computer Repair', hi: 'कंप्यूटर मरम्मत' },
    category: 'Repairs',
    description: { en: 'Laptop and desktop repair, software installation, and formatting.', hi: 'लैपटॉप और डेस्कटॉप मरम्मत, सॉफ्टवेयर इंस्टॉलेशन और फॉर्मेटिंग।' },
    price: 300,
    rating: 4.6,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1597872250911-460f4dd9d10c?q=80&w=800&auto=format&fit=crop',
    provider: 'TechTonk Solutions',
    contact: '+91 97000 66666'
  },
  {
    id: 's23',
    name: { en: 'Mobile Repair', hi: 'मोबाइल रिपेयर' },
    category: 'Repairs',
    description: { en: 'Screen replacement, battery change, and jack repair.', hi: 'स्क्रीन रिप्लेसमेंट, बैटरी चेंज और जैक रिपेयर।' },
    price: 400,
    rating: 4.5,
    reviews: 200,
    image: 'https://images.unsplash.com/photo-1596740926475-98319f6a004b?q=80&w=800&auto=format&fit=crop',
    provider: 'Mobile World Tonk',
    contact: '+91 96543 21098'
  },
  
  // --- Education ---
  {
    id: 's13',
    name: { en: 'Home Tutor', hi: 'होम ट्यूटर' },
    category: 'Education',
    description: { en: 'Expert tutors for Class 1-12, all subjects (CBSE/RBSE).', hi: 'कक्षा 1-12, सभी विषयों (CBSE/RBSE) के लिए विशेषज्ञ ट्यूटर।' },
    price: 2000,
    rating: 4.7,
    reviews: 40,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    provider: 'Tonk Tutors Bureau',
    contact: '+91 93000 22222'
  },
  {
    id: 's24',
    name: { en: 'Spoken English Class', hi: 'अंग्रेजी क्लास' },
    category: 'Education',
    description: { en: 'Learn fluent English speaking and personality development.', hi: 'धाराप्रवाह अंग्रेजी बोलना और व्यक्तित्व विकास सीखें।' },
    price: 1500,
    rating: 4.8,
    reviews: 110,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
    provider: 'Success Point Institute',
    contact: '+91 88771 12233'
  },

  // --- Misc ---
  {
    id: 's25',
    name: { en: 'Chartered Accountant', hi: 'सी.ए.' },
    category: 'Business',
    description: { en: 'GST filing, ITR, and business registration services.', hi: 'जीएसटी फाइलिंग, आईटीआर और व्यापार पंजीकरण सेवाएं।' },
    price: 1000,
    rating: 5.0,
    reviews: 25,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    provider: 'Gupta & Associates CA',
    contact: '+91 99112 23344'
  },
  {
    id: 's26',
    name: { en: 'Interior Designer', hi: 'इंटीरियर डिजाइनर' },
    category: 'Home Services',
    description: { en: 'Modern home design, modular kitchen, and office renovation.', hi: 'आधुनिक घर डिजाइन, मॉड्यूलर किचन और कार्यालय नवीकरण।' },
    price: 5000,
    rating: 4.8,
    reviews: 18,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    provider: 'DreamSpace Interiors',
    contact: '+91 77788 89999'
  }
];

export const initialProducts = [
  // --- Food & Agriculture ---
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
    image: 'https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?q=80&w=987&auto=format&fit=crop',
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
    id: 'p5',
    name: { en: 'Bikaneri Bhujia', hi: 'बीकानेरी भुजिया' },
    category: 'Snacks',
    description: { en: 'Authentic spicy Rajasthani snack.', hi: 'प्रामाणिक मसालेदार राजस्थानी नाश्ता।' },
    price: 220,
    unit: '1kg',
    rating: 4.8,
    image: 'https://media.istockphoto.com/id/655027000/photo/tasty-namkeen-bikaneri-bhujiya.jpg?s=612x612&w=0&k=20&c=LGzleJtmeMbB-gvanRk44oXs4LzBPJB7CXdjfW9fEsQ=',
    seller: 'Rajasthan Sweets'
  },
  {
    id: 'p8',
    name: { en: 'Ghevar Sweet', hi: 'घेवर मिठाई' },
    category: 'Mithai',
    description: { en: 'Traditional Rajasthani sweet disc made of flour and syrup.', hi: 'मैदा और चाशनी से बनी पारंपरिक राजस्थानी मिठाई।' },
    price: 400,
    unit: 'kg',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?q=80&w=800&auto=format&fit=crop',
    seller: 'Jodhpur Sweets'
  },
  {
    id: 'p9',
    name: { en: 'Mustard Oil (Kachi Ghani)', hi: 'सरसों का तेल' },
    category: 'Groceries',
    description: { en: 'Pure mustard oil from Tonk oil mills.', hi: 'टोंक तेल मिलों से शुद्ध सरसों का तेल।' },
    price: 180,
    unit: 'litre',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=800&auto=format&fit=crop',
    seller: 'Tonk Oil Trading'
  },
  {
    id: 'p10',
    name: { en: 'Wheat Flour (Atta)', hi: 'गेहूं का आटा' },
    category: 'Groceries',
    description: { en: 'Freshly ground chakki atta.', hi: 'ताजा पिसा हुआ चक्की का आटा।' },
    price: 350,
    unit: '10kg',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    seller: 'Annapurna Flour Mill'
  },

  // --- Handicrafts & Clothes ---
  {
    id: 'p4',
    name: { en: 'Handmade Pottery', hi: 'राजस्थानी मिट्टी के बर्तन' },
    category: 'Handicrafts',
    description: { en: 'Traditional Rajasthani clay pots and decoration items.', hi: 'पारंपरिक राजस्थानी मिट्टी के बर्तन और सजावटी सामान।' },
    price: 250,
    unit: 'piece',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop',
    seller: 'Artisan Corner'
  },
  {
    id: 'p6',
    name: { en: 'Jaipuri Razai', hi: 'जयपुरी रजाई' },
    category: 'Home & Decor',
    description: { en: 'Lightweight and warm cotton quilts with traditional block prints.', hi: 'पारंपरिक ब्लॉक प्रिंट के साथ हल्की और गर्म सूती रजाई।' },
    price: 1200,
    unit: 'piece',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1594589258273-094136979261?q=80&w=800&auto=format&fit=crop',
    seller: 'Tonk Handloom House'
  },
  {
    id: 'p7',
    name: { en: 'School Uniform Set', hi: 'स्कूल यूनिफॉर्म सेट' },
    category: 'Clothing',
    description: { en: 'Complete uniform set for all major Tonk schools.', hi: 'सभी प्रमुख टोंक स्कूलों के लिए पूर्ण वर्दी सेट।' },
    price: 850,
    unit: 'set',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1604177091026-6c9c647c6a99?q=80&w=800&auto=format&fit=crop',
    seller: 'Student Choice Collection'
  },
  {
    id: 'p11',
    name: { en: 'Rajasthani Jutti', hi: 'मोजड़ी / जुत्ती' },
    category: 'Footwear',
    description: { en: 'Handcrafted leather mojaris for men and women.', hi: 'पुरुषों और महिलाओं के लिए हस्तनिर्मित चमड़े की मोजड़ी।' },
    price: 650,
    unit: 'pair',
    rating: 4.7,
    image: 'https://media.istockphoto.com/id/1283654403/photo/traditional-rajasthani-foot-wear-called-mojari-displayed-for-sale-at-shop.jpg?s=612x612&w=0&k=20&c=w3R0oAPuO6-O-4S3n0b9u2rZl-tI8n1y_X4v4l_2n2o=',
    seller: 'Royal Footwear'
  },
    {
    id: 'p12',
    name: { en: 'Cotton Saree', hi: 'सूती साड़ी' },
    category: 'Clothing',
    description: { en: 'Pure cotton daily wear sarees with Sanganeri print.', hi: 'सांगानेरी प्रिंट के साथ शुद्ध सूती डेली वियर साड़ी।' },
    price: 550,
    unit: 'piece',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    seller: 'Jain Saree Centre'
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
    image: 'https://media.istockphoto.com/id/964079404/photo/dussehra-fair-india.jpg?s=612x612&w=0&k=20&c=thkjpjvFm2IZHE0qU9cBEizUyjdEi71y7_GFHozlEoQ='
  },
  {
    id: 'e2',
    title: { en: 'Cultural Night', hi: 'सांस्कृतिक रात्रि' },
    date: '2025-06-01',
    time: '7:00 PM',
    location: 'Town Hall',
    description: { en: 'Folk dance and music performances.', hi: 'लोक नृत्य और संगीत प्रदर्शन।' },
    image: 'https://media.istockphoto.com/id/1489350715/video/october-19th-2022-dehradun-uttarakhand-india-an-evening-shot-of-a-huge-public-gathering.avif?s=640x640&k=20&c=R-1y5HUQpybY8V1d7FpzZXrwLxSOLgWKhqQW3knwqRw='
  },
  {
    id: 'e3',
    title: { en: 'Mega Trade Fair', hi: 'मेगा ट्रेड फेयर' },
    date: '2025-07-10',
    time: '4:00 PM',
    location: 'Police Parade Ground',
    description: { en: 'Shopping festival with handicrafts, clothes, and food stalls.', hi: 'हस्तशिल्प, कपड़े और भोजन के स्टालों के साथ खरीदारी का त्योहार।' },
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'e4',
    title: { en: 'Free Medical Camp', hi: 'निःशुल्क चिकित्सा शिविर' },
    date: '2025-04-10',
    time: '9:00 AM',
    location: 'Red Cross Society',
    description: { en: 'Free checkup by specialist doctors.', hi: 'विशेषज्ञ डॉक्टरों द्वारा नि:शुल्क जांच।' },
    image: 'https://images.unsplash.com/photo-1631815588046-11f8e6583d73?q=80&w=800&auto=format&fit=crop'
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
  },
  {
    id: 't4',
    name: { en: 'Tempo Traveller', hi: 'टेम्पो ट्रैवलर' },
    type: 'Bus',
    description: { en: '12-Seater AC Tempo Traveller for family trips/pilgrimage.', hi: 'पारिवारिक यात्राओं/तीर्थयात्रा के लिए 12-सीटर एसी टेम्पो ट्रैवलर।' },
    price: '₹18/km',
    contact: '+91 77777 44444',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 't5',
    name: { en: 'Luxury Bus Booking', hi: 'लक्जरी बस बुकिंग' },
    type: 'Bus',
    description: { en: 'Daily service to Jaipur, Kota, and Ajmer.', hi: 'जयपुर, कोटा और अजमेर के लिए दैनिक सेवा।' },
    price: 'From ₹200',
    contact: '+91 66555 44333',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop'
  }
];
