import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const blogPosts = {
  en: [
    {
      id: 'post1',
      date: 'June 9, 2025',
      location: 'UAE',
      mainTitle: 'UAE shares end higher as outcome of US-China trade talks awaited',
      subtitle: 'Market optimism rises',
      description: 'June 9 (Reuters) - Stock markets in the United Arab Emirates ended higher on Monday, in step with Asian peers, as investors awaited the outcome of U.S.-China trade talks in London in the hope that a deal could boost the global economic outlook.',
      section2: 'Top U.S. and Chinese officials will sit down in London on Monday for talks aimed at defusing the high-stakes trade dispute between the two super powers that has widened to export controls over goods and components critical to global supply chains.',
      section3: 'Dubai benchmark index (.DFMGI), opens new tab hit its highest levels since 2008 and settled up 1%, with almost all sectors in positive territory.',
      section4: 'Tolls operator Salik Company (SALIK.DU), opens new tab gained 2.3% and Deyaar Development (DEYR.DU), opens new tab surged 14.6%.',
      section5 : 'In Abu Dhabi, the index (.FTFADGI), opens new tab was up for a third straight session and gained 0.1%, lifted by a 1.6% rise in blue-chip developer Aldar Properties (ALDAR.AD), opens new tab and a 1.8% advance in Abu Dhabi flagship energy firm Abu Dhabi National Energy Company(TAQA.AD), opens new tab.',
      section6: '',
      image: 'https://www.reuters.com/resizer/v2/2CFOXQWVRJLBFKY2GE6PNLZTB4.jpg?auth=2d0026a64ff43658760a36131f122061391832682e4f31263d1eda27e7a4cda3&width=1200&quality=80',
      buttonText: 'Read Full Article',
      buttonHref: 'https://www.reuters.com/markets/',
    },
    {
      id: 'post2',
      date: 'June 7, 2025',
      location: 'UAE',
      mainTitle: 'UAE Airlines Launch 50 New International Routes Ahead of Peak Summer Travel',
      subtitle: 'Massive expansion to meet global travel demand',
      description: 'UAE-based airlines, including Emirates, Etihad, flydubai, and Air Arabia, have announced over 50 new international routes to enhance global connectivity in preparation for a busy summer season. The move underscores the nation’s aviation strength and growing tourism appeal.',
      section2: 'This route expansion is part of a broader strategic effort to meet rising travel demand and reinforce the UAE’s position as a global aviation hub. Airlines are targeting high-demand destinations across Asia, Europe, and Central Asia.',
      section3: 'Major additions include Etihad’s new route to Warsaw, Emirates’ enhanced flights to Bangkok, and flydubai’s daily service to Antalya. Wizz Air and Air Arabia Abu Dhabi have also expanded into emerging travel markets.',
      section4: 'Beyond UAE carriers, several regional airlines like Saudia, Jazeera Airways, and Royal Air Maroc are launching new routes to and from the Gulf, signaling a wider aviation recovery.',
      section5: 'These developments come at a time when UAE airports are scaling operations to handle record summer traffic, ensuring efficient and seamless travel experiences.',
      section6: '',
      image: 'https://static.toiimg.com/thumb/msid-121689919,imgsize-1560040,width-400,resizemode-4/121689919.jpg',
      buttonText: 'Read Full Article',
      buttonHref: 'https://timesofindia.indiatimes.com/world/middle-east/uae-airlines-unveil-50-new-international-flight-routes-ahead-of-busy-summer-season/articleshow/121689600.cms',
    }
    
    ,  
    {
      id: 'post3',
      date: 'June 10, 2025',
      location: 'UAE',
      mainTitle: 'Global Wealth Managers Flock to Dubai: A New Financial Era for the UAE',
      subtitle: 'Dubai’s rise as a top destination for private banking and investment advisory',
      description: 'A growing number of global wealth management firms are establishing a presence in Dubai, drawn by its zero-income tax policy, investor-friendly regulation, and dynamic financial ecosystem. This trend is reshaping the region’s investment landscape and reinforcing Dubai’s global influence.',
      section2: 'Leading firms from Switzerland, the UK, and Asia are setting up offices in DIFC and ADGM, leveraging Dubai’s strategic location and high-net-worth migration patterns. The UAE is now positioning itself as a key hub for wealth planning and cross-border asset management.',
      section3: 'With more affluent individuals relocating to the UAE, demand is surging for family offices, bespoke advisory services, and luxury financial products. Dubai is becoming a magnet not just for capital—but for talent and trust.',
      section4: 'This momentum opens new partnership opportunities for UAE-based groups like Al Thakeel, especially in areas like investment consulting, luxury product sales, and high-value networking.',
      section5: 'The influx of wealth professionals also strengthens the local economy, creating a sophisticated environment for innovation, private equity, and future-ready business models.',
      section6: '',
      image: 'https://images.fnlondon.com/im-37198472?width=700&size=1.5005861664712778&pixel_ratio=2', 
      buttonText: 'Read Full Article',
      buttonHref: 'https://www.fnlondon.com/articles/why-wealth-managers-are-flocking-to-dubai-4cf23779',
    },
    {
      id: 'post4',
      date: 'June 10, 2025',
      location: 'UAE',
      mainTitle: 'What UAE Office Workers Really Want in 2025: Flexibility, Purpose & Perks',
      subtitle: 'New workplace survey reveals shifting priorities in the post-pandemic era',
      description: 'A new global workplace survey shows that UAE employees are seeking more than just salaries—they want flexibility, meaningful work, and access to premium amenities. This marks a major shift in how companies approach office culture and workspace design.',
      section2: 'According to the 2025 Global Workplace Survey, nearly 70% of UAE-based employees prefer hybrid models, citing the need for work-life balance and reduced commute times. The modern workforce is prioritizing well-being and purpose over tradition.',
      section3: 'Amenities such as wellness zones, high-tech collaborative spaces, and on-site childcare are now key expectations. Companies embracing these changes are seeing better employee retention and productivity.',
      section4: 'This shift presents new opportunities for brands like Al Thakeel to rethink their office investments—either by redesigning spaces for their teams or by offering services to other enterprises aiming to modernize their work culture.',
      section5: 'As Dubai and Abu Dhabi continue to attract top global talent, adapting to these evolving preferences will be critical for sustainable growth and talent retention across sectors.',
      section6: '',
      image: 'https://static.toiimg.com/thumb/msid-121725303,imgsize-1567605,width-400,resizemode-4/121725303.jpg',
      buttonText: 'Read Full Article',
      buttonHref: 'https://timesofindia.indiatimes.com/world/middle-east/what-do-uae-office-workers-really-want-insights-from-the-2025-global-workplace-survey/articleshow/121724823.cms',
    },
    {
      id: 'post5',
      date: 'June 10, 2025',
      location: 'UAE',
      mainTitle: 'Multi-Billion Dollar US-UAE AI Data Campus Faces Delays',
      subtitle: 'High-tech ambitions paused amid international security concerns',
      description: 'A landmark AI infrastructure project between Abu Dhabi’s G42 and US partners has hit delays, as American authorities scrutinize data and security implications. The multi-billion dollar campus was expected to position the UAE as a global AI hub.',
      section2: 'The campus deal—intended to boost AI research, computing power, and cloud infrastructure in the UAE—has not yet been finalized. Security concerns and geopolitical considerations have created friction between stakeholders, despite early optimism.',
      section3: 'The project aimed to attract global AI talent and host powerful data centers capable of supporting everything from advanced simulations to AI model training.',
      section4: 'This delay reflects the complex balance the UAE must maintain as it works with both Western tech giants and regional innovation leaders. It also highlights how political factors continue to shape the future of advanced technologies.',
      section5: 'For UAE-based firms like Al Thakeel, this presents an opportunity to explore local AI capabilities, form regional partnerships, and remain agile as the global tech landscape evolves.',
      section6: '',
      image: 'https://www.reuters.com/resizer/v2/BUE4FK6K2RKHHP42WUVLU4F3RY.jpg?auth=3492b68dc9f159b300d09c7148ee5071e1726a86d681e1883174b16cdde60e4e&width=1920&quality=80',
      buttonText: 'Read Full Article',
      buttonHref: 'https://www.reuters.com/business/finance/us-uae-multi-billion-dollar-ai-data-campus-deal-far-finalised-sources-say-2025-06-06/',
    },
    {
      id: 'post6',
      date: 'June 10, 2025',
      location: 'UAE',
      mainTitle: 'UAE Launches Digital Work Permit System to Accelerate Global Hiring',
      subtitle: 'Smart employment reforms streamline overseas recruitment',
      description: 'The UAE’s Ministry of Human Resources and Emiratisation (MoHRE) has launched a fully digital work permit platform to boost efficiency in hiring foreign workers. This initiative aligns with the country’s digital transformation goals and talent attraction strategies.',
      section2: 'The system allows faster and more transparent processing of overseas employment contracts and permits. It aims to reduce paperwork, cut processing time, and offer greater compliance visibility to employers and workers alike.',
      section3: 'Employers can now upload, track, and finalize job offers online with government authentication at every step. This is expected to benefit sectors like construction, healthcare, and tech—industries heavily reliant on foreign talent.',
      section4: 'Al Thakeel’s consulting or staffing divisions could capitalize on this streamlined model by supporting clients with compliant hiring frameworks, or by expanding service offerings in recruitment and HR tech.',
      section5: 'As the UAE continues to lead in smart governance, businesses that align with these digital-first approaches will gain operational advantages and improved global appeal.',
      section6: '',
      image: 'https://static.toiimg.com/thumb/msid-121643345,width-400,resizemode-4,imgsize-72050/.jpg',
      buttonText: 'Read Full Article',
      buttonHref: 'https://economictimes.indiatimes.com/nri/work/uae-rolls-out-digital-work-permit-system-for-faster-hiring-of-overseas-workers/articleshow/121643345.cms',
    },
    {
     id: 'post7',
    date: 'June 10, 2025',
    location: 'UAE',
    mainTitle: 'UAE Launches Digital Work Permit System to Accelerate Global Hiring',
    subtitle: 'Smart employment reforms streamline overseas recruitment',
    description:
      'The UAE’s Ministry of Human Resources and Emiratisation (MoHRE) has launched a fully digital work permit platform to boost efficiency in hiring foreign workers. This initiative aligns with the country’s digital transformation goals and talent attraction strategies.',
    section2:
      'The system allows faster and more transparent processing of overseas employment contracts and permits. It aims to reduce paperwork, cut processing time, and offer greater compliance visibility to employers and workers alike.',
    section3:
      'Employers can now upload, track, and finalize job offers online with government authentication at every step. This is expected to benefit sectors like construction, healthcare, and tech—industries heavily reliant on foreign talent.',
    section4:
      'Al Thakeel’s consulting or staffing divisions could capitalize on this streamlined model by supporting clients with compliant hiring frameworks, or by expanding service offerings in recruitment and HR tech.',
    section5:
      'As the UAE continues to lead in smart governance, businesses that align with these digital-first approaches will gain operational advantages and improved global appeal.',
    section6: '',
    image:
      'https://www.thesun.co.uk/wp-content/uploads/2025/06/newspress-collage-pvehvma2g-1750429549488.jpg?w=620',
    buttonText: 'Read Full Article',
    buttonHref:
      'https://economictimes.indiatimes.com/nri/work/uae-rolls-out-digital-work-permit-system-for-faster-hiring-of-overseas-workers/articleshow/121643345.cms',
  },
  {
  id: 'post8',
  date: 'June 16, 2025',
  location: 'UAE',
  mainTitle: 'UAE Declares June 27 a Paid Holiday for Hijri New Year 1447',
  subtitle: 'Private sector granted official leave for Islamic New Year',
  description:
    'The UAE government has announced that Friday, June 27, 2025, will be an official paid holiday for all private sector employees in celebration of the Islamic Hijri New Year (1447 AH). This comes as part of the country’s continued efforts to harmonize public and private sector holiday schedules.',
  section2:
    'The announcement was made by the Ministry of Human Resources and Emiratisation (MoHRE), following a similar declaration for the public sector. The holiday will allow employees across the UAE to observe the religious occasion and enjoy a long weekend.',
  section3:
    'Since the holiday falls on a Friday, many workers will effectively benefit from a three-day weekend. Work will resume on Monday, June 30, giving residents ample time for travel, rest, or family gatherings.',
  section4:
    'Companies in the UAE, especially those in hospitality, leisure, and retail, are expected to see an uptick in domestic tourism and consumer activity during the extended break.',
  section5:
    'The move reflects the UAE’s commitment to cultural inclusivity and work-life balance by aligning the Hijri calendar’s significance with modern workforce benefits.',
  section6: '',
  image:
    'https://static.toiimg.com/thumb/msid-121887945,imgsize-998355,width-400,resizemode-4/121887945.jpg',
  buttonText: 'Read Full Article',
  buttonHref:
    'https://timesofindia.indiatimes.com/world/middle-east/hijri-new-year-2025-uae-declares-june-27-as-paid-holiday-for-private-sector/articleshow/121887846.cms',
},
{
  id: 'post9',
  date: 'June 14, 2025',
  location: 'UAE',
  mainTitle: 'UAE Enforces Midday Work Ban from June 15 to September to Protect Workers',
  subtitle: 'New regulations set to safeguard outdoor laborers during summer heat',
  description:
    'Starting June 15, 2025, the UAE has implemented a mandatory midday work ban to protect outdoor workers from extreme heat during the summer months. This regulation prohibits labor activities outdoors between 12:30 PM and 3:00 PM daily, aligning with health and safety standards.',
  section2:
    'The ban applies primarily to construction, maintenance, and other outdoor sectors where workers are exposed to high temperatures. Employers are required to strictly adhere to these timings to ensure the safety and well-being of their workforce.',
  section3:
    'Failure to comply can lead to penalties including fines and work stoppages. The Ministry of Human Resources and Emiratisation (MoHRE) will actively monitor workplaces for adherence to the rules throughout the summer period.',
  section4:
    'Employers are encouraged to adjust work schedules, provide adequate hydration, and implement other safety measures to mitigate heat-related risks. This regulation is part of the UAE’s broader commitment to improving labor conditions and protecting human rights.',
  section5:
    'With temperatures often soaring above 40°C (104°F), this midday break is expected to significantly reduce heat stress and related health incidents among outdoor workers, contributing to safer and more productive workplaces.',
  section6: '',
  image:
    'https://static.toiimg.com/thumb/msid-121617759,imgsize-982872,width-400,resizemode-4/121617759.jpg',
  buttonText: 'Read Full Article',
  buttonHref:
    'https://timesofindia.indiatimes.com/world/middle-east/uae-midday-work-ban-from-june-15-to-september-what-rules-employers-need-to-know/articleshow/121616274.cms',
},
{
  id: 'post10',
  date: 'June 20, 2025',
  location: 'UAE',
  mainTitle: 'UAE Establishes Ministry of Foreign Trade to Boost Global Commerce',
  subtitle: 'New ministry aims to strengthen international trade relations and economic diversification',
  description:
    'The UAE government has announced the creation of a dedicated Ministry of Foreign Trade to enhance the country’s global trade strategy. This move is part of the nation’s broader vision to diversify its economy and expand international partnerships.',
  section2:
    'The ministry will focus on developing trade policies, negotiating trade agreements, and facilitating exports and imports to support the UAE’s economic growth. It aims to position the UAE as a leading global trade hub.',
  section3:
    'Prime Minister Sheikh Mohammed bin Rashid Al Maktoum emphasized that the new ministry will accelerate efforts to open new markets and create more business opportunities for UAE companies worldwide.',
  section4:
    'The establishment of this ministry aligns with the UAE’s strategic goals under the UAE Vision 2040, promoting sustainable economic development and enhancing the country’s competitiveness on the global stage.',
  section5:
    'Businesses and investors are expected to benefit from streamlined trade regulations and improved government support, fostering a more attractive environment for foreign investment and international collaboration.',
  section6: '',
  image:
    'https://www.reuters.com/resizer/v2/O5G2F5GUT5PY7EUF2RHIPNP4KQ.jpg?auth=b407077a1ce520e99d950a41b4c1955764df55fa9017f243bcce5d4ed3a80bfa&width=640&quality=80',  // Replace with actual image URL from article if available
  buttonText: 'Read Full Article',
  buttonHref:
    'https://www.reuters.com/world/middle-east/uae-creates-foreign-trade-ministry-prime-minister-says-2025-06-20/',
}



    
    
    
    
  ],
  ar: [
    {
      id: 'post1',
      date: '9 يونيو 2025',
      location: 'الإمارات',
      mainTitle: 'الأسهم الإماراتية تغلق على ارتفاع وسط ترقّب لمحادثات التجارة بين أمريكا والصين',
      subtitle: 'تفاؤل يسود الأسواق',
      description: '9 يونيو (رويترز) - أغلقت أسواق الأسهم في الإمارات على ارتفاع يوم الإثنين، بالتوازي مع الأسواق الآسيوية، مع ترقّب المستثمرين لنتائج محادثات التجارة بين الولايات المتحدة والصين في لندن، وسط آمال بأن الاتفاق قد يعزّز آفاق الاقتصاد العالمي.',
      section2: 'يجتمع كبار المسؤولين من أمريكا والصين في لندن يوم الإثنين لمحادثات تهدف إلى تهدئة الخلاف التجاري المتصاعد بين القوتين العظميين، والذي توسّع ليشمل ضوابط تصدير على السلع والمكوّنات الحساسة لسلاسل التوريد العالمية.',
      section3: 'مؤشر سوق دبي (.DFMGI) سجّل أعلى مستوياته منذ 2008 وارتفع بنسبة 1%، مع أداء إيجابي لمعظم القطاعات.',
      section4: 'شركة سالك (SALIK.DU) ارتفعت بنسبة 2.3%، بينما قفزت شركة ديار (DEYR.DU) بنسبة 14.6%.',
      section5: 'وفي أبوظبي، ارتفع المؤشر (.FTFADGI) للجلسة الثالثة على التوالي بنسبة 0.1%، مدعوماً بارتفاع 1.6% في سهم الدار العقارية (ALDAR.AD) و1.8% في سهم طاقة (TAQA.AD).',
      section6: '',
      image: 'https://www.reuters.com/resizer/v2/2CFOXQWVRJLBFKY2GE6PNLZTB4.jpg?auth=2d0026a64ff43658760a36131f122061391832682e4f31263d1eda27e7a4cda3&width=1200&quality=80',
      buttonText: 'اقرأ المقال كاملًا',
      buttonHref: 'https://www.reuters.com/markets/',
    },
    {
      id: 'post2',
      date: '7 يونيو 2025',
      location: 'الإمارات',
      mainTitle: 'شركات الطيران الإماراتية تطلق 50 وجهة دولية جديدة قبل ذروة السفر الصيفي',
      subtitle: 'توسّع كبير لتلبية الطلب العالمي',
      description: 'أعلنت شركات الطيران الإماراتية، بما في ذلك طيران الإمارات، الاتحاد، فلاي دبي، والعربية للطيران، عن إطلاق أكثر من 50 وجهة دولية جديدة لتعزيز الربط العالمي مع قرب موسم السفر الصيفي المزدحم، في خطوة تعكس قوة قطاع الطيران الإماراتي وجاذبية الدولة السياحية.',
      section2: 'هذا التوسّع يأتي ضمن استراتيجية أوسع لتلبية الطلب المتزايد على السفر وتعزيز مكانة الإمارات كمركز عالمي للطيران.',
      section3: 'من أبرز الوجهات: خط جديد لطيران الاتحاد إلى وارسو، وزيادة رحلات طيران الإمارات إلى بانكوك، وخدمة يومية من فلاي دبي إلى أنطاليا. كما توسعت "ويز إير" و"العربية أبوظبي" في أسواق ناشئة.',
      section4: 'وبالإضافة إلى شركات الطيران الإماراتية، أطلقت شركات إقليمية مثل السعودية، وجزيرة للطيران، والخطوط الملكية المغربية خطوطًا جديدة من وإلى الخليج.',
      section5: 'يأتي هذا التطوّر بالتزامن مع استعداد مطارات الإمارات للتعامل مع أعداد قياسية من المسافرين في الصيف، من خلال توسيع العمليات وضمان تجربة سفر سلسة.',
      section6: '',
      image: 'https://static.toiimg.com/thumb/msid-121689919,imgsize-1560040,width-400,resizemode-4/121689919.jpg',
      buttonText: 'اقرأ المقال كاملًا',
      buttonHref: 'https://timesofindia.indiatimes.com/world/middle-east/uae-airlines-unveil-50-new-international-flight-routes-ahead-of-busy-summer-season/articleshow/121689600.cms',
    },
    {
      id: 'post3',
      date: '10 يونيو 2025',
      location: 'الإمارات',
      mainTitle: 'مديرو الثروات العالميون يتجهون إلى دبي: عصر مالي جديد في الإمارات',
      subtitle: 'دبي تبرز كمركز رئيسي لإدارة الثروات الخاصة',
      description: 'أصبح عدد متزايد من شركات إدارة الثروات العالمية يفتتح مكاتب له في دبي، بفضل سياسة الدولة بدون ضرائب على الدخل، واللوائح الصديقة للمستثمرين، والمنظومة المالية الديناميكية. هذا التوجّه يعيد تشكيل مشهد الاستثمار في المنطقة.',
      section2: 'شركات رائدة من سويسرا، بريطانيا، وآسيا تستقر في مركز دبي المالي العالمي (DIFC) وسوق أبوظبي العالمي (ADGM)، مستفيدة من الموقع الاستراتيجي للإمارات وحركة الأفراد ذوي الثروات العالية إلى الدولة.',
      section3: 'مع تزايد عدد الأثرياء القادمين إلى الدولة، يرتفع الطلب على المكاتب العائلية، والخدمات الاستشارية المخصصة، ومنتجات مالية فاخرة.',
      section4: 'هذا الزخم يفتح أبواب شراكات جديدة أمام شركات مثل "الثقيل"، خصوصًا في مجالات مثل الاستشارات الاستثمارية، وتسويق المنتجات الفاخرة، وشبكات العلاقات عالية القيمة.',
      section5: 'الوجود المتزايد للمهنيين الماليين يدعم الاقتصاد المحلي ويخلق بيئة ابتكار واستثمار خاصة وعصرية.',
      section6: '',
      image: 'https://images.fnlondon.com/im-37198472?width=700&size=1.5005861664712778&pixel_ratio=2',
      buttonText: 'اقرأ المقال كاملًا',
      buttonHref: 'https://www.fnlondon.com/articles/why-wealth-managers-are-flocking-to-dubai-4cf23779',
    },
    {
      id: 'post4',
      date: '10 يونيو 2025',
      location: 'الإمارات',
      mainTitle: 'ما الذي يبحث عنه الموظفون في الإمارات في 2025؟ المرونة، المعنى والمزايا',
      subtitle: 'استبيان جديد يكشف تغيّرات كبيرة في بيئة العمل',
      description: 'كشف استبيان عالمي جديد أن الموظفين في الإمارات لم يعودوا يبحثون فقط عن الرواتب، بل عن المرونة، العمل ذو الهدف، والوصول إلى مرافق متميزة. هذا التحوّل يغيّر طريقة تعامل الشركات مع ثقافة العمل وتصميم المكاتب.',
      section2: 'وفقًا لاستبيان "بيئة العمل العالمية 2025"، قرابة 70% من الموظفين في الإمارات يفضلون النموذج الهجين، لما يقدمه من توازن بين العمل والحياة وتوفير وقت التنقل.',
      section3: 'مرافق مثل مناطق العافية، المساحات التعاونية الذكية، والحضانات داخل المكاتب أصبحت ضمن المتطلبات الأساسية.',
      section4: 'هذا التحوّل يشكّل فرصة أمام شركات مثل "الثقيل" لإعادة التفكير في بيئة العمل، سواء من خلال تحسين مكاتبهم أو تقديم خدمات للشركات الراغبة في التحديث.',
      section5: 'ومع استمرار جذب دبي وأبوظبي لأفضل الكفاءات العالمية، فإن التكيّف مع هذه التغيّرات أصبح أمرًا ضروريًا للاستمرار والنمو.',
      section6: '',
      image: 'https://static.toiimg.com/thumb/msid-121725303,imgsize-1567605,width-400,resizemode-4/121725303.jpg',
      buttonText: 'اقرأ المقال كاملًا',
      buttonHref: 'https://timesofindia.indiatimes.com/world/middle-east/what-do-uae-office-workers-really-want-insights-from-the-2025-global-workplace-survey/articleshow/121724823.cms',
    },
    {
      id: 'post5',
      date: '10 يونيو 2025',
      location: 'الإمارات',
      mainTitle: 'تأخيرات في مشروع حرم بيانات الذكاء الاصطناعي بين أمريكا والإمارات',
      subtitle: 'طموحات تقنية تتأثر بمخاوف أمنية دولية',
      description: 'مشروع البنية التحتية للذكاء الاصطناعي بين "G42" الإماراتية وشركاء أمريكيين يواجه تأخيرات بسبب تدقيق أمريكي حول قضايا أمن البيانات. هذا المشروع كان من المفترض أن يضع الإمارات في صدارة مشهد الذكاء الاصطناعي عالميًا.',
      section2: 'الاتفاق كان يستهدف تعزيز البحث في الذكاء الاصطناعي وقدرات الحوسبة السحابية واستضافة مراكز بيانات ضخمة تدعم النماذج المتقدمة.',
      section3: 'الهدف من المشروع جذب كفاءات عالمية وتوفير بيئة متكاملة لتطوير الذكاء الاصطناعي.',
      section4: 'هذا التأخير يعكس التوازن الدقيق الذي تسعى الإمارات لتحقيقه بين التعاون مع عمالقة التكنولوجيا الغربيين واللاعبين الإقليميين.',
      section5: 'بالنسبة لشركات مثل "الثقيل"، هذا يُعد فرصة لاستكشاف الشراكات الإقليمية في مجال الذكاء الاصطناعي والبقاء مرنين أمام التحوّلات العالمية.',
      section6: '',
      image: 'https://www.reuters.com/resizer/v2/BUE4FK6K2RKHHP42WUVLU4F3RY.jpg?auth=3492b68dc9f159b300d09c7148ee5071e1726a86d681e1883174b16cdde60e4e&width=1920&quality=80',
      buttonText: 'اقرأ المقال كاملًا',
      buttonHref: 'https://www.reuters.com/business/finance/us-uae-multi-billion-dollar-ai-data-campus-deal-far-finalised-sources-say-2025-06-06/',
    },
    {
      id: 'post6',
      date: '10 يونيو 2025',
      location: 'الإمارات',
      mainTitle: 'الإمارات تطلق نظام تصاريح عمل رقمي لتسريع التوظيف العالمي',
      subtitle: 'إصلاحات ذكية تُسهّل التوظيف من الخارج',
      description: 'أطلقت وزارة الموارد البشرية والتوطين في الإمارات نظامًا رقميًا كاملاً لتصاريح العمل، بهدف تسريع وتيرة توظيف الكفاءات الأجنبية ودعم استراتيجية التحول الرقمي للدولة.',
      section2: 'يسمح النظام بمعالجة أسرع وأكثر شفافية للعقود وتصاريح العمل، مما يقلل من الإجراءات الورقية ويوفّر رؤية أوضح للامتثال القانوني.',
      section3: 'يمكن لأصحاب العمل الآن رفع عروض العمل ومتابعتها إلكترونيًا مع مصادقة حكومية في كل خطوة.',
      section4: 'شركات مثل "الثقيل" يمكنها الاستفادة من هذا النظام من خلال دعم عملائها في تطوير أطر توظيف قانونية، أو توسيع خدماتهم في مجالات التوظيف وتقنيات الموارد البشرية.',
      section5: 'ومع استمرار الإمارات في ريادة الحوكمة الذكية، فإن التكيّف مع هذه الأنظمة سيمنح الشركات أفضلية تشغيلية وجاذبية عالمية.',
      section6: '',
      image: 'https://static.toiimg.com/thumb/msid-121643345,width-400,resizemode-4,imgsize-72050/.jpg',
      buttonText: 'اقرأ المقال كاملًا',
      buttonHref: 'https://economictimes.indiatimes.com/nri/work/uae-rolls-out-digital-work-permit-system-for-faster-hiring-of-overseas-workers/articleshow/121643345.cms',
    },
     {
      id: 'post7',
  date: "10 يونيو 2025",
  location: "الإمارات",
  mainTitle: "الإمارات تطلق نظام تصاريح العمل الرقمي لتسريع التوظيف العالمي",
  subtitle: "إصلاحات ذكية تسهّل التوظيف من الخارج",
  description: "أعلنت وزارة الموارد البشرية والتوطين في الإمارات عن إطلاق منصة إلكترونية بالكامل لإصدار تصاريح العمل، بهدف تسريع إجراءات توظيف العمالة الأجنبية وزيادة الكفاءة. وتأتي هذه الخطوة ضمن استراتيجية التحول الرقمي للدولة وجذب المواهب العالمية.",
  section2: "يوفر النظام الجديد معالجة أسرع وأكثر شفافية لعقود العمل وتصاريح الموظفين من الخارج. الهدف هو تقليل الأوراق، تسريع الإجراءات، وتعزيز وضوح الامتثال لأصحاب العمل والموظفين.",
  section3: "يمكن للشركات الآن تحميل وتتبع واعتماد عروض العمل إلكترونياً، مع مصادقة الجهات الحكومية في كل مرحلة. النظام يخدم بشكل خاص قطاعات مثل البناء، والرعاية الصحية، والتكنولوجيا التي تعتمد بشكل كبير على العمالة الأجنبية.",
  section4: "قسم الاستشارات أو التوظيف في شركة 'الثقيل' يمكنه الاستفادة من هذا النظام الرقمي من خلال تقديم حلول توظيف متوافقة أو توسيع خدماته في مجال التوظيف والتقنية الخاصة بالموارد البشرية.",
  section5: "ومع استمرار الإمارات في ريادة الحوكمة الذكية، فإن الشركات التي تواكب هذا التحول الرقمي ستحقق ميزة تنافسية وتشجع على جذب كفاءات من مختلف أنحاء العالم.",
  section6: "",
  image: "https://static.toiimg.com/thumb/msid-121643345,width-400,resizemode-4,imgsize-72050/.jpg",
  buttonText: "اقرأ المقال كاملًا",
  buttonHref: "https://economictimes.indiatimes.com/nri/work/uae-rolls-out-digital-work-permit-system-for-faster-hiring-of-overseas-workers/articleshow/121643345.cms"
},
{
  id: 'post8',
  date: '16 يونيو 2025',
  location: 'الإمارات',
  mainTitle: 'الإمارات تعلن 27 يونيو عطلة مدفوعة الأجر لرأس السنة الهجرية 1447',
  subtitle: 'القطاع الخاص يحصل على إجازة رسمية بمناسبة رأس السنة الإسلامية',
  description:
    'أعلنت حكومة الإمارات أن يوم الجمعة 27 يونيو 2025 سيكون عطلة رسمية مدفوعة الأجر لجميع موظفي القطاع الخاص احتفالًا برأس السنة الهجرية الإسلامية (1447 هـ). تأتي هذه الخطوة في إطار جهود الدولة المستمرة لمواءمة جداول العطل بين القطاعين العام والخاص.',
  section2:
    'وجاء الإعلان عن طريق وزارة الموارد البشرية والتوطين، بعد إعلان مماثل للقطاع العام. ستتيح العطلة للموظفين في كافة أنحاء الإمارات فرصة الاحتفال بالمناسبة الدينية والاستمتاع بعطلة نهاية أسبوع طويلة.',
  section3:
    'ونظرًا لأن العطلة تقع يوم الجمعة، سيستفيد العديد من العاملين من عطلة نهاية أسبوع تمتد إلى ثلاثة أيام. على أن يستأنف العمل يوم الإثنين 30 يونيو، مما يمنح السكان وقتًا كافيًا للسفر أو الراحة أو اللقاءات العائلية.',
  section4:
    'من المتوقع أن تشهد الشركات في الإمارات، خصوصًا في قطاعات الضيافة والترفيه والتجزئة، زيادة في النشاط السياحي والاستهلاكي خلال هذه العطلة الممتدة.',
  section5:
    'تعكس هذه الخطوة التزام الإمارات بالاحتفاء بالتنوع الثقافي وتحقيق التوازن بين الحياة والعمل من خلال ربط أهمية التقويم الهجري بمزايا حديثة لقوى العمل.',
  section6: '',
  image:
    'https://static.toiimg.com/thumb/msid-121887945,imgsize-998355,width-400,resizemode-4/121887945.jpg',
  buttonText: 'اقرأ المقال كاملًا',
  buttonHref:
    'https://timesofindia.indiatimes.com/world/middle-east/hijri-new-year-2025-uae-declares-june-27-as-paid-holiday-for-private-sector/articleshow/121887846.cms',
},
{
  id: 'post9',
  date: '14 يونيو 2025',
  location: 'الإمارات',
  mainTitle: 'الإمارات تفرض حظر العمل خلال فترة الظهيرة من 15 يونيو حتى سبتمبر لحماية العمال',
  subtitle: 'لوائح جديدة لحماية العمال في أماكن العمل الخارجية خلال فصل الصيف',
  description:
    'اعتبارًا من 15 يونيو 2025، أعلنت الإمارات فرض حظر العمل في الفترة من 12:30 ظهرًا حتى 3:00 عصرًا لحماية العمال في أماكن العمل الخارجية من درجات الحرارة المرتفعة خلال أشهر الصيف. يأتي هذا القرار ضمن جهود تعزيز الصحة والسلامة المهنية.',
  section2:
    'يشمل الحظر قطاعات مثل البناء والصيانة والأعمال الخارجية الأخرى التي يتعرض فيها العمال لحرارة عالية. ويجب على أصحاب العمل الالتزام التام بهذه المواعيد لضمان سلامة ورفاهية العمال.',
  section3:
    'يُعرض عدم الالتزام للحظر لعقوبات قد تشمل غرامات وإيقاف العمل. وستقوم وزارة الموارد البشرية والتوطين بمراقبة أماكن العمل للتأكد من الالتزام بهذه اللوائح طوال فترة الصيف.',
  section4:
    'ينصح أصحاب العمل بإعادة جدولة ساعات العمل، وتوفير المياه الكافية، وتطبيق إجراءات سلامة إضافية لتقليل المخاطر المرتبطة بالحرارة. هذا القرار يعكس التزام الإمارات بتحسين ظروف العمل وحماية حقوق العمال.',
  section5:
    'مع ارتفاع درجات الحرارة التي تتجاوز غالبًا 40 درجة مئوية، يُتوقع أن يساهم هذا الحظر في تقليل الإجهاد الحراري والحوادث الصحية، مما يؤدي إلى بيئة عمل أكثر أمانًا وإنتاجية.',
  section6: '',
  image:
    'https://static.toiimg.com/thumb/msid-121617759,imgsize-982872,width-400,resizemode-4/121617759.jpg',
  buttonText: 'اقرأ المقال كاملًا',
  buttonHref:
    'https://timesofindia.indiatimes.com/world/middle-east/uae-midday-work-ban-from-june-15-to-september-what-rules-employers-need-to-know/articleshow/121616274.cms',
},
{
  id: 'post10',
  date: '20 يونيو 2025',
  location: 'الإمارات',
  mainTitle: 'الإمارات تُنشئ وزارة التجارة الخارجية لتعزيز التجارة العالمية',
  subtitle: 'وزارة جديدة تهدف إلى تقوية العلاقات التجارية الدولية وتنويع الاقتصاد',
  description:
    'أعلنت حكومة الإمارات عن إنشاء وزارة مخصصة للتجارة الخارجية لتعزيز استراتيجية الدولة في التجارة العالمية. تأتي هذه الخطوة ضمن رؤية الإمارات الأوسع لتنويع اقتصادها وتوسيع الشراكات الدولية.',
  section2:
    'ستركز الوزارة على تطوير سياسات التجارة، والتفاوض على الاتفاقيات التجارية، وتسهيل عمليات التصدير والاستيراد لدعم النمو الاقتصادي للإمارات. وتهدف إلى تعزيز مكانة الإمارات كمركز تجاري عالمي رائد.',
  section3:
    'أكد سمو الشيخ محمد بن راشد آل مكتوم، رئيس مجلس الوزراء، أن الوزارة الجديدة ستسرّع الجهود لفتح أسواق جديدة وخلق المزيد من فرص الأعمال للشركات الإماراتية حول العالم.',
  section4:
    'يتماشى تأسيس هذه الوزارة مع الأهداف الاستراتيجية لرؤية الإمارات 2040، التي تركز على التنمية الاقتصادية المستدامة وتعزيز تنافسية الدولة على الساحة العالمية.',
  section5:
    'من المتوقع أن تستفيد الشركات والمستثمرون من تنظيمات تجارية أكثر سلاسة ودعم حكومي محسن، مما يعزز بيئة جذابة للاستثمار الأجنبي والتعاون الدولي.',
  section6: '',
  image:
    'https://www.reuters.com/resizer/v2/O5G2F5GUT5PY7EUF2RHIPNP4KQ.jpg?auth=b407077a1ce520e99d950a41b4c1955764df55fa9017f243bcce5d4ed3a80bfa&width=640&quality=80',  // استبدل هذا بالرابط الحقيقي للصورة إذا توفرت
  buttonText: 'اقرأ المقال كاملًا',
  buttonHref:
    'https://www.reuters.com/world/middle-east/uae-creates-foreign-trade-ministry-prime-minister-says-2025-06-20/',
}



    
    
  ]
  
};

const labels = {
  en: {
    blogTitles: 'Blog Titles',
    filter: 'Filter posts...',
    showMore: 'Show More',
    showLess: 'Show Less',
  },
  ar: {
    blogTitles: 'عناوين المدونة',
    filter: 'تصفية المقالات...',
    showMore: 'عرض المزيد',
    showLess: 'عرض أقل',
  },
};

const Blog = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
 const [filterText, setFilterText] = useState('');
  const [sortOrder, setSortOrder] = useState('latest');
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);


// Sort posts based on sortOrder
const sortedPosts = (blogPosts[language] || blogPosts.en).slice().sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
});

// Then filter the sorted posts
const filteredPosts = sortedPosts.filter(post =>
  post.mainTitle.toLowerCase().includes(filterText.toLowerCase())
);

const posts = (blogPosts[language] || blogPosts.en).slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  const t = labels[language] || labels.en;

  const refs = useRef(posts.reduce((acc, post) => {
    acc[post.id] = React.createRef();
    return acc;
  }, {}));


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const scrollTo = (id) => refs.current[id]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const toggleExpand = (id) => setExpandedId(prev => (prev === id ? null : id));

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', padding: 20, maxWidth: 1200, margin: '0 auto', gap: 30,marginTop:"50px",marginBottom:"50px" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: isMobile ? '100%' : 250,
          marginBottom: isMobile ? 20 : 0,
          position: isMobile ? 'relative' : 'sticky',
          top: 100,
          alignSelf: 'flex-start',
          background: '#fff',
          padding: 20,
          borderRadius: 10,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          height: 'fit-content',
        }}
      >
        <h3 style={{ marginBottom: 10 }}>{t.blogTitles}</h3>
       
         <ul style={{ listStyle: 'none', padding: 0, fontSize: 14 }}>
    {filteredPosts.map(post => (
      <li key={post.id} style={{ marginBottom: 8 }}>
        <button
          onClick={() => scrollTo(post.id)}
          style={{
            background: 'none',
            border: 'none',
            color: '#0077b6',
            cursor: 'pointer',
            textAlign: 'left',
            fontWeight: 500,
          }}
        >
          {post.mainTitle}
        </button>
      </li>
    ))}
  </ul>
</aside>

      {/* Blog content */}
      
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
         <div
  style={{
    marginBottom: 20,
    minWidth: 140,
  }}
>
  <select
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
    style={{
      width: '20%',
      padding: '8px 12px',
      fontSize: 14,
      borderRadius: 8,
      border: '1.5px solid #ccc',
      cursor: 'pointer',
      outline: 'none',
      transition: 'border-color 0.3s ease',
      backgroundColor: '#fff',
    }}
    onFocus={(e) => (e.target.style.borderColor = '#c6a664')}
    onBlur={(e) => (e.target.style.borderColor = '#ccc')}
  >
    <option value="latest">{isArabic ? 'الأحدث أولاً' : 'Latest First'}</option>
    <option value="oldest">{isArabic ? 'الأقدم أولاً' : 'Oldest First'}</option>
  </select>
</div>
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            ref={refs.current[post.id]}
            style={{
              background: '#fff',
              padding: 20,
              borderRadius: 10,
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            }}
          >
         

            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 20 }}>
              {expandedId !== post.id && (
                <img
                  src={post.image}
                  alt={post.mainTitle}
                  style={{
                    width: 160,
                    height: 120,
                    objectFit: 'cover',
                    borderRadius: 8,
                    flexShrink: 0,
                  }}
                />
              )}
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, color: '#888' }}>{post.date} | {post.location}</p>
                <h2 style={{ fontSize: 18, color: '#021c35', margin: '5px 0 0px' }}>{post.mainTitle}</h2>
                {post.subtitle && <h4 style={{ fontSize: 15, color: '#c6a664', marginBottom: 2 }}>{post.subtitle}</h4>}
                <p style={{ fontSize: 15, color: '#444' }}>{post.description}</p>
                {expandedId === post.id && (
                  <>
                    <img
                      src={post.image}
                      alt={post.mainTitle}
                      style={{
                        width: '100%',
                        maxHeight: 400,
                        objectFit: 'cover',
                        borderRadius: 12,
                        margin: '20px 0',
                        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                      }}
                    />
                    <p style={{ marginTop: 8, color: '#444', fontSize: 15 }}>{post.section2}</p>
                    <p style={{ marginTop: 8, color: '#444', fontSize: 15 }}>{post.section3}</p>

                    <p style={{ marginTop: 8, color: '#444', fontSize: 15 }}>{post.section4}</p>
                    <p style={{ marginTop: 8, color: '#444', fontSize: 15 }}>{post.section5}</p>
                    <p style={{ marginTop: 8, color: '#444', fontSize: 15 }}>{post.section6}</p>

                  </>
                )}
                <button
                  onClick={() => toggleExpand(post.id)}
                  style={{
                    marginTop: 10,
                    background: 'none',
                    border: 'none',
                    color: '#c6a664',
                    cursor: 'pointer',
                    fontSize: 14,
                    padding: 0,
                    marginRight:'10PX',
                  }}
                >
                  {expandedId === post.id ? t.showLess : t.showMore}
                </button>
                {post.buttonHref && post.buttonText && (
  <div style={{ display: 'flex', justifyContent: isArabic ? 'flex-start' : 'flex-end', marginTop: 8 }}>
    <a
      href={post.buttonHref}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: '5px 12px',
        backgroundColor: '#021c35',
        color: '#fff',
        borderRadius: 6,
        textDecoration: 'none',
        fontSize: 14,
      }}
    >
      {post.buttonText}
    </a>
  </div>
)}
              </div>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Blog;
