﻿var JS_MESSAGES = ["--","---","----"];
var JS_MESSAGES_HR = 
[
"{ وَأَنَّ الْمَسَاجِدَ لِلَّهِ فَلَا تَدْعُوا مَعَ اللَّهِ أَحَداً }",
"{ يَا بَنِي آدَمَ خُذُواْ زِينَتَكُمْ عِندَ كُلِّ مَسْجِدٍ }",
"{ إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ }",
"{ أَلَيْسَ اللَّهُ بِكَافٍ عَبْدَهُ ۖ }",
"{ إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُمْ بِغَيْرِ حِسَابٍ }",
"{ وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى }",
"{ إنَّ مَعَ العُسْرِ يُسْراً }",
"{ وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ }",
"{ وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا، وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِب }",
"{ إِنَّ أَكۡرَمَكُمۡ عِندَ ٱللَّهِ أَتۡقَىٰكُمۡۚ إِنَّ ٱللَّهَ عَلِیمٌ خَبِیر }",
"{ حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَى وَقُومُوا لِلَّهِ قَانِتِينَ }",
"  تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ ",
"  أحب عباد الله إلى الله أحسنهم خلقًا",
" مَا مِنْ شَيْءٍ أَثْقَلُ فِي الْمِيزَانِ مِنَ حُسْنِ الْخُلُقِ ",
" لاحول ولا قوة إلاَّ بالله ",
"{ وَٱسۡتَعِینُوا۟ بِٱلصَّبۡرِ وَٱلصَّلَوٰةِۚ وَإِنَّهَا لَكَبِیرَةٌ إِلَّا عَلَى ٱلۡخَـٰشِعِینَ }",
"{وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ }",
"{ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ }",
"{ الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ }",
"{ رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ ٱلْوَهَّابُ }",
"{ وجَزَاهُم بِمَا صَبَرُواْ جَنَّةً وَحَرِيرًا }",
"{ أَمَّن يُجِيبُ الْمُضْطَرَّ إِذَا دَعَاهُ }",
"{ قُلْ لَنْ يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا هُوَ مَوْلَانَا وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ }",
"{ وَمَنْ يُؤْمِنْ بِاللَّهِ يَهْدِ قَلْبَهُ }",
"{ مَن كَانَ يَرْجُو لِقَاء اللَّهِ فَإِنَّ أَجَلَ اللَّهِ لَآتٍ وَهُوَ السَّمِيعُ الْعَلِيمُ }",
"{ حَسْبِيَ اللّهُ لا إِلَـهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ }",
"{ يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنْظُرْ نَفْسٌ مَا قَدَّمَتْ لِغَدٍ }",
"{ بُشْرَاكُمُ الْيَوْمَ جَنَّاتٌ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا ۚ ذَٰلِكَ هُوَ الْفَوْزُ الْعَظِيمُ }",
"{ يَٰٓأَيُّهَا ٱلنَّاسُ إِنَّ وَعْدَ ٱللَّهِ حَقٌّ ۖ فَلَا تَغُرَّنَّكُمُ ٱلْحَيَوٰةُ ٱلدُّنْيَا ۖ وَلَا يَغُرَّنَّكُم بِٱللَّهِ ٱلْغَرُورُ }",
"{ أَحَسِبَ النَّاسُ أَن يُتْرَكُوا أَن يَقُولُوا آمَنَّا وَهُمْ لا يُفْتَنُونَ }",
"{ وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ }",
" اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد",
"{ وَلَا تَقُولَنَّ لِشَيْءٍ إِنِّي فَاعِلٌ ذَلِكَ غَدًا * إِلَّا أَنْ يَشَاءَ اللَّهُ }",
"{ وَقُلْ رَبِّ زِدْنِي عِلْمًا }",
"{ يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللهَ وَابْتَغُوا إِلَيْهِ الْوَسِيلَةَ وَجَاهِدُوا فِي سَبِيلِهِ لَعَلَّكُمْ تُفْلِحُونَ }",
"{ يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ تَنْصُرُوا اللهَ يَنْصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ }",
"{ إِنْ يَنْصُرْكُمُ اللهُ فَلاَ غَالِبَ لَكُمْ }",
"{ وَلَنْ تَرْضَى عَنْكَ الْيَهُودُ وَلَا النَّصَارَى حَتَّى تَتَّبِعَ مِلَّتَهُمْ }",
"{ وَلَنْ تَرْضَى عَنْكَ الْيَهُودُ وَلَا النَّصَارَى حَتَّى تَتَّبِعَ مِلَّتَهُمْ }",
"{ يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا الْيَهُودَ وَالنَّصَارَى أَوْلِيَاءَ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ }",
"{ يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا الْيَهُودَ وَالنَّصَارَى أَوْلِيَاءَ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ }",
"{ لَتَجِدَنَّ أَشَدَّ النَّاسِ عَدَاوَةً لِلَّذِينَ آمَنُوا الْيَهُودَ وَالَّذِينَ أَشْرَكُوا }",
"{ لَتَجِدَنَّ أَشَدَّ النَّاسِ عَدَاوَةً لِلَّذِينَ آمَنُوا الْيَهُودَ وَالَّذِينَ أَشْرَكُوا }",
"{ يَا أَيُّهَا النَّبِيُّ جَاهِدِ الْكُفَّارَ وَالْمُنَافِقِينَ وَاغْلُظْ عَلَيْهِمْ }",
"{ يَا أَيُّهَا النَّبِيُّ جَاهِدِ الْكُفَّارَ وَالْمُنَافِقِينَ وَاغْلُظْ عَلَيْهِمْ }",
"{ وَقَاتِلُوهُمْ حَتَّى لَا تَكُونَ فِتْنَةٌ وَيَكُونَ الدِّينُ لِلَّهِ }",
"{ وَفَضَّلَ اللَّهُ الْمُجَاهِدِينَ عَلَى الْقَاعِدِينَ أَجْرًا عَظِيمًا }",
"{ يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا الْيَهُودَ وَالنَّصَارَى أَوْلِيَاءَ }",
"{ وَفَضَّلَ اللَّهُ الْمُجَاهِدِينَ عَلَى الْقَاعِدِينَ أَجْرًا عَظِيمًا }",
"{ لا إِلَهَ إِلا أَنتَ سُبْحَانَكَ , إِنِّي كُنتُ مِنَ الظَّالِمِينَ }",
"{ رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ }",
"{ رَّبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ }",
" اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي , وَاهْدِنِي, وَعَافِنِي, وَارْزُقْنِي",
" اللَّهُمَّ إنَّكَ عَفُوٌّ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي ",
"{ سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ }",
"{ رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي }",
"{ يَوْمَ لا يَنفَعُ مَالٌ وَلا بَنُونَ  إِلاَّ مَنْ أَتَى اللَّهَ بِقَلْبٍ سَلِيمٍ }",
"10DAYS تذكير بالأيام العشر من ذي الحجة",
"10DAYS تذكير بالأيام العشر من ذي الحجة",
"10DAYS تذكير بالأيام العشر من ذي الحجة",
"10DAYS تذكير بالأيام العشر من ذي الحجة",
"10DAYS تذكير بالأيام العشر من ذي الحجة",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"TAKBIR الله أكبر الله أكبر الله أكبر ولله الحمد",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"TAKBIR الله أكبر الله أكبر الله أكبر ولله الحمد",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"TAKBIR الله أكبر الله أكبر الله أكبر ولله الحمد",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"TAKBIR الله أكبر الله أكبر الله أكبر ولله الحمد",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"10NIGHTS { إِنَّا أَنزَلْنَاهُ فِي لَيْلَةٍ مُبَارَكَةٍ إِنَّا كُنَّا مُنذِرِينَ }",
"10NIGHTS { إِنَّا أَنزَلْنَاهُ فِي لَيْلَةٍ مُبَارَكَةٍ إِنَّا كُنَّا مُنذِرِينَ }",
"10NIGHTS { إِنَّا أَنزَلْنَاهُ فِي لَيْلَةٍ مُبَارَكَةٍ إِنَّا كُنَّا مُنذِرِينَ }",
"10NIGHTS اللَّهُمَّ إنَّكَ عَفُوٌّ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي",
"10NIGHTS { إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ }",
"10NIGHTS { لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ }",
"10NIGHTS اللَّهُمَّ إنَّكَ عَفُوٌّ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي",
"10NIGHTS اللَّهُمَّ إنَّكَ عَفُوٌّ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي",
"10NIGHTS { إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ }",
"10NIGHTS {لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْر ٍ }",
"10NIGHTS اللَّهُمَّ إنَّكَ عَفُوٌّ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي",
"10NIGHTS اللَّهُمَّ إنَّكَ عَفُوٌّ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي",
"10NIGHTS { إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ }",
"10NIGHTS {لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْر ٍ }",
"3WHITEDAYS تذكير بصيام الأيام البيض",
"3WHITEDAYS تذكير بصيام الأيام البيض",
"3WHITEDAYS تذكير بصيام الأيام البيض",
"3WHITEDAYS تذكير بصيام الأيام البيض",
"3WHITEDAYS تذكير بصيام الأيام البيض",
""
];

var JS_MESSAGES_VR = 
[
"{ وَأَنَّ الْمَسَاجِدَ لِلَّهِ فَلَا تَدْعُوا مَعَ اللَّهِ أَحَداً }",
"{ يَا بَنِي آدَمَ خُذُواْ زِينَتَكُمْ عِندَ كُلِّ مَسْجِدٍ }",
"{ إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ }",
"{ أَلَيْسَ اللَّهُ بِكَافٍ عَبْدَهُ ۖ }",
"{ إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُمْ بِغَيْرِ حِسَابٍ }",
"{ وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى }",
"{ إنَّ مَعَ العُسْرِ يُسْراً }",
"{ وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ }",
"{ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ }",
"{ وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ }",
"{ إِنَّ أَكْرَمَكُمْ عِنْدَ اللَّهِ أَتْقَاكُمْ }",
" تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ ",
" أحب عباد الله إلى الله أحسنهم خلقًا",
" مَا مِنْ شَيْءٍ أَثْقَلُ فِي الْمِيزَانِ مِنَ حُسْنِ الْخُلُقِ ",
" لاحول ولا قوة إلاَّ بالله ",
" اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد",
"{ وَقُلْ رَبِّ زِدْنِي عِلْمًا }",
"{ وَمَنْ يُؤْمِنْ بِاللَّهِ يَهْدِ قَلْبَهُ }",
"{ وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ  }",
"{ وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ }",
"{ إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ }",
"{ فَاصْبِرْ صَبْرًا جَمِيلًا }",
"{ إِنْ يَنْصُرْكُمُ اللهُ فَلاَ غَالِبَ لَكُمْ }",
"{ يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ تَنْصُرُوا اللهَ يَنْصُرْكُمْ }",
"{ وجَزَاهُم بِمَا صَبَرُواْ جَنَّةً وَحَرِيرًا }",
"{ أَمَّن يُجِيبُ الْمُضْطَرَّ إِذَا دَعَاهُ }",
"{ رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ }",
"{ رَّبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ }",
"اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي",
" اللَّهُمَّ إنَّكَ عَفُوٌّ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي ",
"{ سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ }",
"{ رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي }",
"10DAYS تذكير بالأيام العشر من ذي الحجة",
"10DAYS تذكير بالأيام العشر من ذي الحجة",
"10DAYS تذكير بالأيام العشر من ذي الحجة",
"10DAYS تذكير بالأيام العشر من ذي الحجة",
"10DAYS تذكير بالأيام العشر من ذي الحجة",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"TAKBIR الله أكبر الله أكبر الله أكبر ولله الحمد",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"TAKBIR الله أكبر الله أكبر الله أكبر ولله الحمد",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"TAKBIR الله أكبر الله أكبر الله أكبر ولله الحمد",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"TAKBIR الله أكبر الله أكبر الله أكبر ولله الحمد",
"TAKBIR الله أكبر الله أكبر الله أكبر، لا إله إلا الله ",
"10NIGHTS { إِنَّا أَنزَلْنَاهُ فِي لَيْلَةٍ مُبَارَكَةٍ إِنَّا كُنَّا مُنذِرِينَ }",
"10NIGHTS { إِنَّا أَنزَلْنَاهُ فِي لَيْلَةٍ مُبَارَكَةٍ إِنَّا كُنَّا مُنذِرِينَ }",
"10NIGHTS { إِنَّا أَنزَلْنَاهُ فِي لَيْلَةٍ مُبَارَكَةٍ إِنَّا كُنَّا مُنذِرِينَ }",
"10NIGHTS اللَّهُمَّ إنَّكَ عَفُوٌّ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي",
"10NIGHTS { إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ }",
"10NIGHTS { لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ }",
"10NIGHTS اللَّهُمَّ إنَّكَ عَفُوٌّ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي",
"10NIGHTS اللَّهُمَّ إنَّكَ عَفُوٌّ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي",
"10NIGHTS { إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ }",
"10NIGHTS {لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْر ٍ }",
"10NIGHTS اللَّهُمَّ إنَّكَ عَفُوٌّ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي",
"10NIGHTS اللَّهُمَّ إنَّكَ عَفُوٌّ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي",
"10NIGHTS { إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ }",
"10NIGHTS {لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْر ٍ }",
"3WHITEDAYS تذكير بصيام الأيام البيض",
"3WHITEDAYS تذكير بصيام الأيام البيض",
"3WHITEDAYS تذكير بصيام الأيام البيض",
"3WHITEDAYS تذكير بصيام الأيام البيض",
"3WHITEDAYS تذكير بصيام الأيام البيض",
""
];
