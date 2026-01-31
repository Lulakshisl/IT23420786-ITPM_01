//IT23420786 -ITPM (ass1)- Automated Testing Project - SwiftTranslator Singlish to Sinhala Conversion Tests

const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Positive Functional Tests(29 test cases)
   
    {
      tcId: 'Pos_Fun_001',
      name: 'Simple present tense statement ,Polite vs informal phrasing',
      input: 'magee nama lulakShi. mata oyaagen udhavva avashaya karanavaa karuNaakaralaa mata udhav karanna puLuvandha? kiyalaa mata whatsapp keti paNividayak dhanna puLuvandha.',
      expected: 'මගේ නම ලුලක්ෂි. මට ඔයාගෙන් උදව්ව අවශය කරනවා කරුණාකරලා මට උදව් කරන්න පුළුවන්ද? කියලා මට whatsapp කෙටි පණිවිඩයක් දන්න පුළුවන්ද.',
      category: 'Daily language usage,Simple present tense statement ,Polite vs informal phrasing',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Tense variations +Multiple spaces, line breaks, and paragraph inputs+ Polite vs informal phrasing',
      input: 'mama heta saQQchaarayak saDHAhaa siQQgappuruvee yanavaa. mama ayee ennee sathi 2kin ethakan oyaalaa  parissamen edhivi kiyala mama balaporoththu venavaa.mata heta paandhara 2ta mehen pitath venavaa.',
      expected: 'මම හෙට සංචාරයක් සඳහා සිංගප්පුරුවේ යනවා. මම අයේ එන්නේ සති 2කින් එතකන් ඔයාලා  පරිස්සමෙන් එදිවි කියල මම බලපොරොත්තු වෙනවා.මට හෙට පාන්දර 2ට මෙහෙන් පිටත් වෙනවා.',
      category: 'Tense variations +Multiple spaces, line breaks, and paragraph inputs+ Polite vs informal phrasing,Daily language usage',
      grammar: '',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_003',
      name: 'Simple past tense statement',
      input: 'heta mama aluth job ekakata yanavaa .aluth nagareka maQQ hithnavaa mata eka hoDHA aluth aaramBhayak veyi kiyalaa magee jivithee idhiri hiinavalata yanna!!. godak aBhiyooga eyi kiyalath maQQ hithanavaa mee yana gamanee . eth monadhee vuNath issarahatama yanavaa',
      expected: 'හෙට මම අලුත් job එකකට යනවා .අලුත් නගරෙක මං හිත්නවා මට එක හොඳ අලුත් ආරම්භයක් වෙයි කියලා මගේ ජිවිතේ ඉදිරි හීනවලට යන්න!!. ගොඩක් අභියෝග එයි කියලත් මං හිතනවා මේ යන ගමනේ . එත් මොනදේ වුණත් ඉස්සරහටම යනවා',
      category: 'Multiple spaces, line breaks, and paragraph inputs+Inputs containing punctuation marks+Tense variations (past / present / future),Daily language usage',
      grammar: 'simple past tense statement',
      length: 'M'
    },
    
    {
      tcId: 'Pos_Fun_004',
      name: 'Compound sentence',
      input: 'labana sathiyee kaempas ekee laeb test ekak thiyenava kivvaa.ekata laesthi velaa enna kivvaa apita.Documents tika attach karalaa mata email ekak evanna.',
      expected: 'ලබන සතියේ කැම්පස් එකේ ලැබ් test එකක් තියෙනව කිව්වා.එකට ලැස්ති වෙලා එන්න කිව්වා අපිට.Documents ටික attach කරලා මට email එකක් එවන්න.',
      category: 'Sentences containing places and common English words that should remain as they are+ Tense variations (past / present / future)+English technical/brand terms embedded in Singlish,Compound sentences,Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_005',
      name: 'Complex sentence with multiple clauses',
      input: 'huGA dhavasakin oyaata kathaa karanna baeri unaa mata. mQQ vaeda godakata hiravelaa hitiyee giya dhavas tikeema. adha thamayi poddaka hari idaka mata hambunee WhatsApp keti paNividayak hari ivanna oyaata. oyaa aluth job ekakata giyaa kivvaa needha aluth office eka kohomadha oyaata.  aluth dheevaluth godak igana ganna puLuvan veiyi oyata. mata harima sathutuyi oyaa ohoma issarahatama yanava dhakina eka naQQgii. mama labana sathiyee nivadu dhalaa thiyennee gedhara enna. ammatath kiyanna mama labana sathiyee gedhara enavaa kiyalaa.',
      expected: 'හුඟ දවසකින් ඔයාට කතා කරන්න බැරි උනා මට. මං වැඩ ගොඩකට හිරවෙලා හිටියේ ගිය දවස් ටිකේම. අද තමයි පොඩ්ඩක හරි ඉඩක මට හම්බුනේ WhatsApp කෙටි පණිවිඩයක් හරි ඉවන්න ඔයාට. ඔයා අලුත් job එකකට ගියා කිව්වා නේද අලුත් office එක කොහොමද ඔයාට.  අලුත් දේවලුත් ගොඩක් ඉගන ගන්න පුළුවන් වේයි ඔයට. මට හරිම සතුටුයි ඔයා ඔහොම ඉස්සරහටම යනව දකින එක නංගී. මම ලබන සතියේ නිවඩු දලා තියෙන්නේ ගෙදර එන්න. අම්මටත් කියන්න මම ලබන සතියේ ගෙදර එනවා කියලා.',
      category: 'Tense variations +Multiple spaces, line breaks, and paragraph inputs+ Polite vs informal phrasing,Daily language usage',
      grammar: 'Compound sentence',
      length: 'L'
    },
    
    {
      tcId: 'Pos_Fun_006',
      name: 'Going home statement',
      input: 'labana sathiyee mama bohoo dhurata ennee naethiveyi.mama amma ekka ammagee office vaedakata Colombo pita yanavaa.mata note eka whatsapp dhaalaa thiyanna haloo.',
      expected: 'ලබන සතියේ මම බොහෝ දුරට එන්නේ නැතිවෙයි.මම අම්ම එක්ක අම්මගේ office වැඩකට Colombo පිට යනවා.මට note එක whatsapp දාලා තියන්න හලෝ.',
      category: 'Sentences containing places and common English words that should remain as they are+Requests+Compound sentences,Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_007',
      name: 'Interrogative (question)',
      input: 'heta oyaata guru viBhaaga praveesha viBhaagaya needha lulakshi. oyaata puLuvan pass venna oyaata puLuvan uparimama karalaa enna.yadhdhi NIC mathak karalaa ganna.',
      expected: 'හෙට ඔයාට ගුරු විභාග ප්‍රවේශ විභාගය නේද ලුලක්ශි. ඔයාට පුළුවන් pass වෙන්න ඔයාට පුළුවන් උපරිමම කරලා එන්න.යද්දි NIC මතක් කරලා ගන්න.',
      category: 'English abbreviations and short forms+Compound sentences+Tense variations (past / present / future)+Positive vs negative sentence forms+Interrogative and imperative forms+Request forms with varying degrees of politeness,Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_008',
      name: 'Greeting / request / response',
      input: 'heta oyaata guru viBhaaga praveesha viBhaagaya needha lulakshi. oyaata puLuvan pass venna oyaata puLuvan uparimama karalaa enna.yadhdhi NIC mathak karalaa ganna.',
      expected: 'අද තිබුන zoom පංතියට මට යන්න බැරි උනා. zoom එකේ මොනවද කරේ කියලා මට පොඩ්ඩක් කියන්න පුළුවන්ද සදුනියෝ. පුළුවන්නම් ඔයා ලියපු note එකත් දන්න. අම්මගේ whatsapp number එකට තමා හලෝ note එක දන්න ඕනේ.',
      category: 'Compound sentences+Requests+Polite vs informal phrasing+English technical/brand terms embedded in Singlish',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_009',
      name: 'Greeting / request / response',
      input: 'mama iiyee thibuna low college viBhaagaya kivvaa. Colombo dhisthrikkayee paLaveni 150 atharee hitiyoth mata magee aasama karapu hiineta yanna thava leesi venavaa.mama hithanavaa mama hoDHAtama  viBhaagaya kivvaa kiyalaa.ee nisaa mata yanna puLuvan veyi kiyalaa magee hithee vishvaasayak thiyeenavaa.',
      expected: 'මම ඊයේ තිබුන low college විභාගය කිව්වා. Colombo දිස්ත්‍රික්කයේ පළවෙනි 150 අතරේ හිටියොත් මට මගේ ආසම කරපු හීනෙට යන්න තව ලේසි වෙනවා.මම හිතනවා මම හොඳටම  විභාගය කිව්වා කියලා.ඒ නිසා මට යන්න පුළුවන් වෙයි කියලා මගේ හිතේ විශ්වාසයක් තියේනවා.',
      category: 'Sentences containing places and common English words that should remain as they are+Tense variations (past / present / future),Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_010',
      name: 'Imperative (command)',
      input: '"labana avurudhdhee (2027/01/01) aayamath mee dhavasa edhdhii godak dheeval hari lassanata haebaevelaa thiyeyi kiyala mQQ lokuvata vishvaasa karanavaa. saha ee balaaporoththuva ishta karaganna godak mahansi venavaa. nidhi varjitha haema dhavasakma anaagathee lassana dhavasak karaganna haemootama puluvan venna oonee kiyala mQQ nitharama hithanavaa!!.katuka kaarthu vageema jiivithayee vassaanayath thiyeenavaa eeth vassaanayata yana para leesii naee. monavaa unath api aayema mathakaavarjanaya karama athiithaya harima lassana mathaka godak".',
      expected: '"ලබන අවුරුද්දේ (2027/01/01) ආයමත් මේ දවස එද්දී ගොඩක් දේවල් හරි ලස්සනට හැබැවෙලා තියෙයි කියල මං ලොකුවට විශ්වාස කරනවා. සහ ඒ බලාපොරොත්තුව ඉශ්ට කරගන්න ගොඩක් මහන්සි වෙනවා. නිදි වර්ජිත හැම දවසක්ම අනාගතේ ලස්සන දවසක් කරගන්න හැමෝටම පුලුවන් වෙන්න ඕනේ කියල මං නිතරම හිතනවා!!.කටුක කාර්තු වගේම ජීවිතයේ වස්සානයත් තියේනවා ඒත් වස්සානයට යන පර ලේසී නෑ. මොනවා උනත් අපි ආයෙම මතකාවර්ජනය කරම අතීතය හරිම ලස්සන මතක ගොඩක්".',
      category: 'Daily language usage',
      grammar: 'Compound sentences (two ideas joined)+ Inputs containing punctuation marks+Dates,Imperative (command)',
      length: 'L'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Imperative (command)',
      input: '"VIP godak dhenaa athara janapreaya vee. Rs. 5900 vadaa adhika vee"',
      expected: '"VIP ගොඩක් දෙනා අතර ජනප්‍රේය වේ. Rs. 5900 වඩා අදික වේ"',
      category: 'Currency, time formats, dates, and units of measurement+) Inputs containing punctuation marks+English abbreviations and short forms+Compound sentences (two ideas joined),Greeting / request / response',
      grammar: 'Imperative (command)',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_0012',
      name: 'Greeting / request / response',
      input: '"mama hithana vidhiyata manussayek yanna oonema gamanaanthayak vidhihata colombo - Badulla dhumriya gamana penva dhenna puluvan." yana athara maga hamuvena parisara kalaapa ekakata ekak venas ee vageema sith adhaegannaa suluya.(VIP-Rs. 8000)',
      expected: '"මම හිතන විදියට මනුස්සයෙක් යන්න ඕනෙම ගමනාන්තයක් විදිහට colombo - Badulla දුම්රිය ගමන පෙන්ව දෙන්න පුලුවන්." යන අතර මග හමුවෙන පරිසර කලාප එකකට එකක් වෙනස් ඒ වගේම සිත් අදැගන්නා සුලුය.(VIP-Rs. 8000)',
      category: ' Compound sentences (two ideas joined)+English abbreviations and short forms+ Inputs containing punctuation marks+Currency, time formats, dates, and units of measuremen',
      grammar: 'Simple sentence',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_013',
      name: 'Greeting / request / response',
      input: '"Mevara saamanaya peLa liyala haemootama jaya veevaayi !! mama praarthana karanavaa.(2027)"',
      expected: '"මෙවර සාමනය පෙළ ලියල හැමෝටම ජය වේවායි !! මම ප්‍රාර්තන කරනවා.(2027)"',
      category: 'Dates+ Inputs containing punctuation marks+Positive vs negative sentence forms+Positive vs negative sentence forms+Compound sentences (two ideas joined),Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_014',
      name: 'Imperative',
      input: 'mevara shri lQQkaava niyoojanaya karamin giya "sabiinaata " 3 vana sThaanaya jaya gaeniimata haekiyaava laebunaa.eeka apee puQQchi ratata vishaala aambarayak ek karanavaa.mee SMS eka mata yaaluvek WhatsApp valin kivvaa.',
      expected: 'මෙවර ශ්‍රි ලංකාව නියෝජනය කරමින් ගිය "සබීනාට " 3 වන ස්ථානය ජය ගැනීමට හැකියාව ලැබුනා.ඒක අපේ පුංචි රටට විශාල ආම්බරයක් එක් කරනවා.මේ SMS එක මට යාලුවෙක් WhatsApp වලින් කිව්වා.',
      category: ' English abbreviations and short forms+ Inputs containing punctuation marks+English technical/brand terms embedded in Singlish+Compound sentences (two ideas joined),Daily language usage',
      grammar: 'Past tense',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Future tense',
      input: 'jiivithayata athdhaekiim labaa gaeniimata aethi hodha muulaashrayak vidhihata "poth" penvaa dhenna puluvan.athiithayee sidhu vuu siyallama varthamaanayeedha sidhuvemin pavathina nisaa jiivithaadharshayan bohomayak apita apee jivitha valata ganna puluvan. poth kiyaviimen apita dhaenumin muhupuraa yaamata haekiyava laebee.(LinkedIn )ossee apita eebava paehaedhili vee.',
      expected: 'ජීවිතයට අත්දැකීම් ලබා ගැනීමට ඇති හොද මූලාශ්‍රයක් විදිහට "පොත්" පෙන්වා දෙන්න පුලුවන්.අතීතයේ සිදු වූ සියල්ලම වර්තමානයේද සිදුවෙමින් පවතින නිසා ජීවිතාදර්ශයන් බොහොමයක් අපිට අපේ ජිවිත වලට ගන්න පුලුවන්. පොත් කියවීමෙන් අපිට දැනුමින් මුහුපුරා යාමට හැකියව ලැබේ.(LinkedIn )ඔස්සේ අපිට ඒබව පැහැදිලි වේ.',
      category: 'Compound sentences (two ideas joined)+ Inputs containing punctuation marks+ English technical/brand terms embedded in Singlish,Daily language usage',
      grammar: 'Future tense',
      length: 'L'
    },
    
    
    {
      tcId: 'Pos_Fun_016',
      name: 'Daily language usage',
      input: 'mama oyata dhaemma TikTok  URL balannakoo (12.00 noon )kalin. oya ara RS: 2000 gevanavanee',
      expected: 'මම ඔයට දැම්ම TikTok  URL බලන්නකෝ (12.00 noon )කලින්. ඔය අර RS: 2000 ගෙවනවනේ',
      category: 'Time formats+Currency+ English abbreviations and short forms+ English technical/brand terms embedded in Singlish+Tense variations (past / present / future)+Positive forms+Compound sentences (two ideas joined,Daily language usage',
      grammar: 'Present tense',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'simple present tense statement ',
      input: '"dhaLadhaa maaligava" bAUdhDhayangee nirathara gAUravayata lakvana puujaniiya sThaana atharin ekak lesa penvaa dhiya haekiya.ee vagema nuvara nagaraya godak minisunge sith aedhagannaa sulu alaQQkaara nagarayak lesa prachalithaya.nuvara preemaniiya nagaraya lesadha hadhunvanu labayi.(2026.01.31)',
      expected: '"දළදා මාලිගව" බෞද්ධයන්ගේ නිරතර ගෞරවයට ලක්වන පූජනීය ස්ථාන අතරින් එකක් ලෙස පෙන්වා දිය හැකිය.ඒ වගෙම නුවර නගරය ගොඩක් මිනිසුන්ගෙ සිත් ඇදගන්නා සුලු අලංකාර නගරයක් ලෙස ප්‍රචලිතය.නුවර ප්‍රේමනීය නගරය ලෙසද හදුන්වනු ලබයි.(2026.01.31)',
      category: 'Compound sentences (two ideas joined)+ Inputs containing punctuation marks+Dates,Compound sentences (two ideas joined)+ Inputs containing punctuation marks+Dates,Daily language usage',
      grammar: 'Simple present tense',
      length: 'M'
    },
   
    {
      tcId: 'Pos_Fun_0018',
      name: 'Plural form',
      input: '"aella" nagaraya saQQchaarikayangee gamanaantha athara praDhaanathama gamanaanthayak lesa penvaa dhiya haekiya. aella nagaraya sQQchaaraka aakarShaNayata praDhaanathama heethuva lesa aella rock haa aella pradheeshayee thrii asiriya dha heethuvak lesa penvaa dhiya haekiya.',
      expected: '"ඇල්ල" නගරය සංචාරිකයන්ගේ ගමනාන්ත අතර ප්‍රධානතම ගමනාන්තයක් ලෙස පෙන්වා දිය හැකිය. ඇල්ල නගරය සංචාරක ආකර්ෂණයට ප්‍රධානතම හේතුව ලෙස ඇල්ල rock හා ඇල්ල ප්‍රදේශයේ ත්‍රී අසිරිය ද හේතුවක් ලෙස පෙන්වා දිය හැකිය.',
      category: 'Sentences containing places and common English words that should remain as they are+ Inputs containing punctuation marks+Compound sentences (two ideas joined),Daily language usage',
      grammar: 'Plural form',
      length: 'M'
    },

    
    {
      tcId: 'Pos_Fun_0019',
      name: 'Word combination / phrase pattern',
      input: 'Oyaata kohomadha sakuNi , oyaa hodhin innavaa aethi kiyalaa mQQ vishvaasa karanavaa!!QQ thava 2cm usa velaanee. mamath suven innavaa. nitharama keti paNivida ivanna laebennee naee. puluvan velaavata mQQ oyaata message dhaalaa thiyannam haloo.',
      expected: ' ඔයාට කොහොමද සකුණි , ඔයා හොදින් ඉන්නවා ඇති කියලා මං විශ්වාස කරනවා!!ං තව 2cm උස වෙලානේ. මමත් සුවෙන් ඉන්නවා. නිතරම කෙටි පණිවිඩ ඉවන්න ලැබෙන්නේ නෑ. පුලුවන් වෙලාවට මං ඔයාට message දාලා තියන්නම් හලෝ.',
      category: 'Compound sentences (two ideas joined)+ Inputs containing punctuation marks+Units of measurements+Sentences containing places and common English words that should remain as they are,Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_020',
      name: 'Mixed Singlish + English',
      input: '"shri lQQkaava" lookayama athara nitharama  kathaabahata Lak vena ratak lesa hadhunvaa dhenna puluvan.ee bava Post valina pavaa dhaekagniimata apita pulunan.',
      expected: '"ශ්‍රි ලංකාව" ලෝකයම අතර නිතරම  කතාබහට ළක් වෙන රටක් ලෙස හදුන්වා දෙන්න පුලුවන්.ඒ බව Post වලින පවා දැකග්නීමට අපිට පුලුනන්.',
      category: 'Sentences containing places and common English words that should remain as they are+Inputs containing punctuation marks+Compound sentences (two ideas joined),Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'M'
    },
    
    {
      tcId: 'Pos_Fun_021',
      name: 'Mixed Singlish + English',
      input: 'mama bath kanna yanavaa, passee ennam.oyaa hoDHA vidhihata vaeda karanna.karalaa ivara vunaama machan api meeting dhaalaa kathaa karagamuu. 9.00 p.m kalin. maQQ baeluvaa ara product eka eeka 5kg barayi.',
      expected: 'මම බත් කන්න යනවා, පස්සේ එන්නම්.ඔයා හොඳ විදිහට වැඩ කරන්න.කරලා ඉවර වුනාම මචන් අපි meeting දාලා කතා කරගමූ. 9.00 p.m කලින්. මං බැලුවා අර product එක ඒක 5kg බරයි.',
      category: 'Sentences containing places and common English words that should remain as they are+Compound sentences (two ideas joined)+ Time formats+Units of measurements',
      grammar: 'Simple sentence',
      length: 'M'
    },
    
    {
      tcId: 'Pos_Fun_022',
      name: 'daily language usage',
      input: 'oyaa mata kalin kivva vidhihata vaeda karagaththee maQQ.bohooma sthuthiyi yaaluvee. oyaata OTP aevith aethi ee NUMBERS tika hagalaa Teams meeting log venna.',
      expected: 'ඔයා මට කලින් කිව්ව විදිහට වැඩ කරගත්තේ මං.බොහෝම ස්තුතියි යාලුවේ. ඔයාට OTP ඇවිත් ඇති ඒ NUMBERS ටික හගලා Teams meeting log වෙන්න.',
      category: 'English abbreviations and short forms+ Sentences containing places and common English words that should remain as they are+Compound sentences (two ideas joined),Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_023',
      name: 'simple daily language usage',
      input: 'mama enna parakku vevii oyaa yanna.suBha raathriyak.adha ne zoom meeting eka. mata gihin link eka dhaanna.',
      expected: 'මම එන්න පරක්කු වෙවී ඔයා යන්න.සුභ රාත්‍රියක්.අද නේ zoom meeting එක. මට ගිහින් link එක දාන්න.',
      category: 'Compound sentences (two ideas joined)+ English technical/brand terms embedded in Singlish+Sentences containing places and common English words that should remain as they are,Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_0024',
      name: 'future tense',
      input: 'mama iiye giyaanee.monavath karee naee. wow supirinee ! oyaa hetadha ennee.maQQ balan innavaa. WiFi password eka magee ganna oonee office ekata gihin.a',
      expected: 'මම ඊයෙ ගියානේ.මොනවත් කරේ නෑ. wow සුපිරිනේ ! ඔයා හෙටද එන්නේ.මං බලන් ඉන්නවා. WiFi password එක මගේ ගන්න ඕනේ office එකට ගිහින්.',
      category: 'Compound sentences (two ideas joined)+Sentences containing places and common English words that should remain as they are+ English technical/brand terms embedded in Singlish,Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_0025',
      name: 'Compound sentences with English abbreviations and short forms',
      input: 'mee adha mata vaeda vagayak thiyenavaa oya puluvan nam gihin enna . mata enna vidhihak naee kiyala kiyanna anivaryenma.oya gihin mata message dhaanna whatsapp eken " URL link eka" . ',
      expected: 'මේ අද මට වැඩ වගයක් තියෙනවා ඔය පුලුවන් නම් ගිහින් එන්න . මට එන්න විදිහක් නෑ කියල කියන්න අනිවර්යෙන්ම.ඔය ගිහින් මට message දාන්න whatsapp එකෙන් " URL link එක" .  ',
      category: 'Compound sentences (two ideas joined)+Sentences containing places and common English words that should remain as they are+ English technical/brand terms embedded in Singlish+ English abbreviations and short forms,Daily language usage',
      grammar: 'Compound sentence',
      length: 'M',
    },
    
    {
      tcId: 'Pos_Fun_026',
      name: 'Simple sentence with English abbreviations and short forms',
      input: '"mee haloo api adha QDS lectures yanavadha?" Reply please. ',
      expected: '"මේ හලෝ අපි අද QDS lectures යනවද?" Reply please.',
      grammar: 'Compound sentences (two ideas joined)+Sentences containing places and common English words that should remain as they are+ Inputs containing punctuation marks+Multiple spaces, line breaks, and paragraph inputs,Simple sentence',
      length: 'M',
    },


  ],
  
  // Negative Functional Tests(10 test cases)

  negative: [

    {
      tcId: 'Neg_Fun_001',
      name: 'Compound sentence with question',
      input: 'mamagedaraynava oyath enawada yanna math ekka? SMS danna mat',
      expected: 'මම ගේදර යනවා ඔයත් එනවද යන්න මාත් එක්ක? SMS දාන්න මට',
      category: 'Compound sentences (two ideas joined)+Interrogative (questions) forms',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Joined compound words',
      input: 'mama metana ennawa oya enakam ikamanata oya enna.  hawasata (3.30p.m) api TikTok ekakuth karamu ?',
      expected: ' "මම මෙතන ඉන්නවා ඔය එනකම් ඉකමනට ඔයා එන්න.  හවසට (3.30p.m) අපි TikTok එකකුත් කරමු ?"',
      category: 'Interrogative (questions) form+ English technical/brand terms embedded in Singlish+Currency, time formats, dates, and units of measurement',
      grammar: 'Future tense',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Compound sentence with time format',
      input: 'oya eddi mata Email ekata Teams meeting ekee link eka WhatsApp karanna puLuvanda10A.M ta kalin ',
      expected: 'ඔය එද්දි මට Email එකට Teams meeting එකේ link එක WhatsApp කරන්න පුළුවන්ද 10A.M ට කලින් ',
      category: 'Positive forms+Compound sentences (two ideas joined)+Currency, time formats, dates, and units of measurement',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Compound sentence with places and common English words',
      input: 'mamagedharagihinennam,oyaa gaava gucci bag ekak thibba nee',
      expected: 'මම ගෙදර ගිහින් එන්නම්., ඔයා ගාව ගුරු bag එකක් තිබ්බ නේ.',
      category: 'Compound sentences (two ideas joined)+Sentences containing places and common English words that should remain as they are',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Colloquial expression with punctuation errors',
      input: '"Darmayudidaya "deweni kotasa avith.  labana sathiye balanna yanna one palaweni kotasa wagema lassana ati kiyala hithanawa.',
      expected: '"ධර්මයුද්දය" දෙවෙනි කොටස ඇවිත්. ලබන සතියේ බලන්න යන්න ඕනේ පලවෙනි කොටස වගෙම ලස්සන ඇති කියලා හිතනවා.',
      category: 'Compound sentences (two ideas joined)+ Inputs containing punctuation marks',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Colloquial expression',
      input: 'heta ammai mai pansal yanawa. taththa apita mal kadala genath dunna.',
      expected: 'හෙට අම්මායි මායි පන්සල් යනවා. තාත්තා අපිට මල් කඩලා ගෙනත් දුන්නා.',
      category: 'Slang / informal language',
      grammar: 'Future tense',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Mixed English with errors',
      input: 'aluth kalasatagana matath danna puluwanda saduni whatsapp eken mt group link dala tiyanna.',
      expected: 'අලුත් කාලසටහන මටත් දාන්න පුලුවන්ද සදුනි whatsapp එකෙන් මට group link දාලා තියන්න.',
      category: 'Mixed Singlish + English',
      grammar: 'Future tense',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Abbreviation in sentence',
      input: 'ada dawalta Lunch gannath mata beri una weda godakata hira wela mn hithiya nisa. tawa tikakin zoom meting nisa dinnerma ekama tama mata ganna wenne.',
      expected: 'අද දවල්ට "Lunch" ගන්නත් මට බැරි උනා වැඩ ගොඩකට හිර වෙලා මං හිටිය නිසා. තව ටිකකින් zoom meting නිසා "dinner" ම එකම මට ගන්න වෙන්නේ.',
      category: ' common English words',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Question with spacing error',
      input: '"pasal paddathiye thula nawa vishaya nirdeshaya pulul bawa norahasak. "',
      expected: '"පාසල් පද්ධතියේ තුළ නව විශය නිර්දේශය පුළුල් බව නොරහසක්. "',
      category: 'formal language',
      grammar: 'simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Complex slang statement',
      input: '"colombo" ahasa lassana night ekata unata game ahasa hemadama lassanai.',
      expected: '"colombo" අහස ලස්සන night එකට උනාට ගමේ අහස හැමදාම ලස්සනයි.',
      category: 'Slang / informal language',
      grammar: 'simple sentence',
      length: 'M'
    },
    
    

  ],
  
// UI Tests(4 test case)

  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: '$$$$4321000',
    //partialInput: '',
    expectedFull: '$$$$4321000',
    category: 'Currency, time formats, dates, and units of measuremen',
    grammar: 'Present tense',
    length: 'S'
  },

  ui: {
    tcId: 'Pos_UI_002',
    name: 'Currency amount',
    input: '9 5 7 6 1 2 3 5 ,  RS:5 0000 ,    A.M 10.30',
    //partialInput: '',
    expectedFull: '9 5 7 6 1 2 3 5 ,  RS:5 0000 ,    A.M 10.30',
    category: 'Currency, time formats, dates, and units of measuremen',
    grammar: 'Present tense',
    length: 'S'
  },

  ui: {
    tcId: 'Pos_UI_003',
    name: 'Real-time translation updates as typing',
    input: '###@@@!!!',
    //partialInput: '',
    expectedFull: '###@@@!!!',
    category: 'Usability flow,Currency, time formats, dates, and units of measuremen',
    grammar: 'Present tense',
    length: 'S'
  },

  ui: {
    tcId: 'Pos_UI_005',
    name: 'Real-time translation updates as typing',
    input: '"      "  /       " "',
    //partialInput: '',
    expectedFull: '"      "  /       " "',
    category: 'Currency, time formats, dates, and units of measuremen,Usability flow',
    grammar: 'Present tense',
    length: 'S'
  },

   ui: {
    tcId: 'Pos_UI_004',
    name: 'simple tense real-time translation updates as typing',
    input: '"maaa maaaa maaaaaaaaaaaaaaaaa maaaa"',
    //partialInput: '',
    expectedFull: '"මා මා මා මා මා මා මා මා මා මා මා"',
    category: 'Usability flow',
    grammar: 'simple tense',
    length: 'S'
  },
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
