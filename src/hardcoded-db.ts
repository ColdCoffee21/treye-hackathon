export const db = {
    "users": [
        {
            "username": "max1990",
            "emailAddress": "max.mustermann@web.de",
            "gender": "male",
            "firstName": "Max",
            "lastName": "Mustermann",
            "birthday": "5/7/90",
            "passwordHash": "abc",
            "statusPoints": "0"
        },
        {
            "username": "santa-lucia",
            "emailAddress": "luise-maier@gmx.net",
            "gender": "female",
            "firstName": "Luise",
            "lastName": "Maier",
            "birthday": "2/23/57",
            "passwordHash": "xyz",
            "statusPoints": "120"
        },
        {
            "username": "magna33",
            "emailAddress": "magna33@t-online.de",
            "gender": "female",
            "firstName": "Matilde",
            "lastName": "Wirt",
            "birthday": "11/5/72",
            "passwordHash": "def",
            "statusPoints": "50"
        },
        {
            "username": "kevin13",
            "emailAddress": "kevin666@live.com",
            "gender": "male",
            "firstName": "Kevin",
            "lastName": "Meest",
            "birthday": "4/4/13",
            "passwordHash": "ghi",
            "statusPoints": "10"
        }
    ],
    "culture-tags": [
        {
            "cluster": "Museums",
            "tag": "Bauhaus"
        },
        {
            "cluster": "Museums",
            "tag": "PopArt"
        },
        {
            "cluster": "Museums",
            "tag": "ArtDeco"
        },
        {
            "cluster": "Theater & Performance",
            "tag": "Popular"
        },
        {
            "cluster": "Theater & Performance",
            "tag": "English"
        },
        {
            "cluster": "Theater & Performance",
            "tag": "StandUp"
        }
    ],
    "user-preferences": [
        {
            "username": "santa-lucia",
            "cultureTagCluster": "Museum",
            "cultureTag": "Bauhaus",
            "preference": "TRUE"
        },
        {
            "username": "santa-lucia",
            "cultureTagCluster": "Museum",
            "cultureTag": "ArtDeco",
            "preference": "TRUE"
        },
        {
            "username": "max1990",
            "cultureTagCluster": "Museum",
            "cultureTag": "Bauhaus",
            "preference": "TRUE"
        },
        {
            "username": "kevin13",
            "cultureTagCluster": "Theater & Performance",
            "cultureTag": "StandUp",
            "preference": "TRUE"
        }
    ],
    "venues": [
        {
            "id": "v1",
            "name": "Museum f??r Neue Kunst",
            "streetAddress": "Marienstra??e 10a",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9927368",
            "longitude": "7.8501348",
            "websiteURL": "https://www.freiburg.de/pb/,Lde/237848.html"
        },
        {
            "id": "v2",
            "name": "Theater Freiburg",
            "streetAddress": "Bertoldstra??e 46",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9953047",
            "longitude": "7.8422919",
            "websiteURL": "https://theater.freiburg.de/de_DE/home"
        },
        {
            "id": "v3",
            "name": "Planetarium Freiburg",
            "streetAddress": "Bismarckallee 7G",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9994573",
            "longitude": "7.841091",
            "websiteURL": "http://www.planetarium-freiburg.de/pb/1126882.html"
        },
        {
            "id": "v4",
            "name": "Zelt-Musik-Festival, Zirkuszelt",
            "streetAddress": "Festivalgel??nde am Mundenhof",
            "zipCode": "79111",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "48.009",
            "longitude": "7.78056"
        },
        {
            "id": "v5",
            "name": "Festivalgel??nde am Mundenhof",
            "streetAddress": "Lehenerwinkelweg",
            "zipCode": "79111",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "48.009",
            "longitude": "7.78056"
        },
        {
            "id": "v6",
            "name": "B??rgerhaus am Seepark",
            "streetAddress": "Gerhart-Hauptmann-Stra??e 1",
            "zipCode": "79110",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "48.0224",
            "longitude": "7.81114"
        },
        {
            "id": "v7",
            "name": "B??rgerhaus Z??hringen ",
            "streetAddress": "Lameystra??e 2",
            "zipCode": "79108",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "48.0414",
            "longitude": "7.83172"
        },
        {
            "id": "v8",
            "name": "Freizeichen",
            "streetAddress": "Haslacher Stra??e 43",
            "zipCode": "79115",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.993",
            "longitude": "7.8331"
        },
        {
            "id": "v9",
            "name": "DIE SCH??NEN / Musiktheater im E-WERK",
            "streetAddress": "Ferdinand Wei?? Str. 6a",
            "zipCode": "79106",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9942",
            "longitude": "7.83475"
        },
        {
            "id": "v10",
            "name": "Theater im Marienbad",
            "streetAddress": "Marienstra??e 4",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9991",
            "longitude": "7.83942"
        },
        {
            "id": "v11",
            "name": "WaldHaus",
            "streetAddress": "Wonnhaldestr. 6",
            "zipCode": "79100",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9729",
            "longitude": "7.84213"
        },
        {
            "id": "v12",
            "name": "E-Werk",
            "streetAddress": "Eschholzstr. 77",
            "zipCode": "79106",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "48.0056",
            "longitude": "7.84228"
        },
        {
            "id": "v13",
            "name": "Basler Hof",
            "streetAddress": "Kaiser-Joseph-Stra??e 167",
            "zipCode": "79100",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9875",
            "longitude": "7.84288"
        },
        {
            "id": "v14",
            "name": "Neues Rathaus",
            "streetAddress": "Rathauspl. 2-4",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9961",
            "longitude": "7.84921"
        },
        {
            "id": "v15",
            "name": "Vor dem alten Rathaus",
            "streetAddress": "Rathausplatz",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9962",
            "longitude": "7.84935"
        },
        {
            "id": "v16",
            "name": "Betty BBQ Meeting Point",
            "streetAddress": "Franziskanerstra??e 11",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9966",
            "longitude": "7.84957"
        },
        {
            "id": "v17",
            "name": "Paulussaal",
            "streetAddress": "Dreisamstra??e 3",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9959",
            "longitude": "7.8508"
        },
        {
            "id": "v18",
            "name": "Jazzhaus",
            "streetAddress": "Schnewlinstra??e 1",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9959",
            "longitude": "7.8508"
        },
        {
            "id": "v19",
            "name": "Konzerthaus Freiburg",
            "streetAddress": "Konrad-Adenauer-Platz 1",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9959",
            "longitude": "7.8508"
        },
        {
            "id": "v20",
            "name": "Alemannische B??hne",
            "streetAddress": "Gerberau 15",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9959",
            "longitude": "7.8508"
        },
        {
            "id": "v21",
            "name": "The Great R??ng Teng Teng",
            "streetAddress": "Gr??nw??lderstra??e 6",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9959",
            "longitude": "7.8508"
        },
        {
            "id": "v22",
            "name": "Jazzhaus ",
            "streetAddress": "Schnewlinstr. 1",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9959",
            "longitude": "7.8508"
        },
        {
            "id": "v23",
            "name": "Vorderhaus - Kultur in der FABRIK",
            "streetAddress": "Habsburgerstr. 9",
            "zipCode": "79104",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9959",
            "longitude": "7.8508"
        },
        {
            "id": "v24",
            "name": "Historisches Kaufhaus",
            "streetAddress": "M??nsterplatz 24",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.995",
            "longitude": "7.85268"
        },
        {
            "id": "v25",
            "name": "Messe Freiburg",
            "streetAddress": "Neuer Messplatz 1",
            "zipCode": "79108",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9978",
            "longitude": "7.85273"
        },
        {
            "id": "v26",
            "name": "Vorderhaus",
            "streetAddress": "Habsburgerstra??e 9",
            "zipCode": "79104",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "48.0107",
            "longitude": "7.85545"
        },
        {
            "id": "v27",
            "name": "Hochschule f??r Musik",
            "streetAddress": "Schwarzwaldstra??e 141",
            "zipCode": "79102",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9889",
            "longitude": "7.8721"
        },
        {
            "id": "v28",
            "name": "Ensemblehaus Freiburg",
            "streetAddress": "Sch??tzenallee 72",
            "zipCode": "79102",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9868",
            "longitude": "7.8725"
        },
        {
            "id": "v29",
            "name": "Schlossbergrestaurant Dattler",
            "streetAddress": "Am Schlossberg 1",
            "zipCode": "79104",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "48.0062",
            "longitude": "7.89116"
        },
        {
            "id": "v30",
            "name": "Waldsee",
            "streetAddress": "Waldseestra??e 84",
            "zipCode": "79117",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9534",
            "longitude": "7.89661"
        },
        {
            "id": "v31",
            "name": "Brauerei Ganter",
            "streetAddress": "Schwarzwaldstra??e 43",
            "zipCode": "79117",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9534",
            "longitude": "7.89661"
        }
    ],
    "experiences": [
        {
            "id": "e1",
            "title": "F??hrung ??? Piktogramme, Lebenszeichen, Emojis",
            "description": "Eine F??hrung durch die Ausstellung ???Piktogramme, Lebenszeichen, Emojis: Die Gesellschaft der Zeichen??? findet am Sonntag, 27. Juni, um 15 Uhr im Museum f??r Neue Kunst statt. Die Teilnehmer_innen tauchen ein in die Geschichte des modernen Piktogramms und lernen Zeichensysteme unterschiedlicher K??nstler_innen und Gestalter_innen kennen.",
            "startDateTime": "6/27/21 15:00",
            "endDateTime": "6/27/21 16:00",
            "venueId": "v1",
            "offerURL": "https://www.freiburg.de/pb/site/freiburg_museen/node/525489/zmdetail_23712838/index.html?nodeID=23712838"
        },
        {
            "id": "e2",
            "title": "FORESTA NERA ??? Eine Ausstellung zu ausgew??hlten Werken von Friedemann Hahn",
            "description": "Gro??e Formate, kr??ftige Farben mit schnellen Pinselstrichen aufgetragen: das machen die Gem??lde von Friedemann Hahn (*1949) aus. Sie tragen Titel wie ???Painting and Guns???, ???Glauser???, ???Le Samourai??? oder ???Lichtung (nach E. L. Kirchner)???, die auf vielf??ltige, komplexe Bezugsrahmen verweisen. Hahns Werk kreist um Geschichten, die sich aus Literatur, Kunst und K??nstlerpers??nlichkeiten, Meilensteinen des Film noir und Werken der Popul??rkultur speisen. Dabei sind es besonders moderne Legenden um Personen, die sich an gesellschaftlichen Abgr??nden bewegen, die Hahn faszinieren und die er immer wieder neu verhandelt.\r\n\r\nDas Museum f??r Neue Kunst pr??sentiert in einer komprimierten Werkschau Arbeiten aus dem eigenen Bestand, erg??nzt um Leihgaben des K??nstlers. In einem Raum der St??ndigen Sammlung sucht die Pr??sentation den Maler, der ein leidenschaftlicher Kinog??nger und B??chernarr ist, zu umrei??en.\r\n\r\nFriedemann Hahn ist der Region eng verbunden, lange Zeit war der S??dschwarzwald sein Lebens- und Schaffensmittelpunkt. Geboren in Singen am Hohentwiel, studierte er Malerei in der Freiburger Au??enstelle der Staatlichen Akademie Karlsruhe bei Peter Dreher und an der Akademie in D??sseldorf bei K. O. G??tz. 1991 wurde er als Professor an die Kunsthochschule Mainz berufen, dort leitete er bis 2014 eine Klasse f??r Malerei. Mittlerweile lebt er in Schleswig-Holstein und schreibt, malt und geht auf lange Spazierg??nge mit seinem Hund K??pt???n.\r\n\r\nZur Ausstellung erscheint ein deutsch-englischsprachiges Lesebuch, das neben zahlreichen Abbildungen Texte von acht Autor_innen versammelt, die sich mit der Bilderwelt Friedemann Hahns besch??ftigen.",
            "startDateTime": "4/1/21 0:00",
            "endDateTime": "8/29/21 23:59",
            "venueId": "v1",
            "offerURL": "https://www.freiburg.de/pb/1694452.html",
            "imageURL": "https://www.freiburg.de/pb/site/freiburg_museen/get/params_E2129844617/1694743/Foresta-Nera,%202009%20-ge%C3%A4nderter%20Farbraum.jpg"
        },
        {
            "id": "e3",
            "title": "Einsteins Universum",
            "description": "Schwerkraft ist ein allt??gliches Ph??nomen. Doch Albert Einstein beschreibt in seiner Allgemeinen Relativit??tstheorie die Gravitation ganz anders, als uns der gesunde Menschenverstand glauben macht. Raum und Zeit sind laut Einstein miteinander verwoben zu einer vierdimensionalen Raum-Zeit. Mit erstaunlichen Konsequenzen: Es muss Schwarze L??cher geben, was Einstein selbst nicht glauben konnte.\r\n\r\nAuch eine zweite Folge seiner Theorie hielt Einstein zun??chst f??r ??ganz und gar abscheulich???: Das Universum dehnt sich aus. Dank der r??tselhaften ???dunklen Energie?? vielleicht sogar in alle Ewigkeit. Und es hatte einen Anfang, den sogenannten Urknall.\r\nTrotz mancher Ungeheuerlichkeit hat Einsteins Theorie sich gro??artig bew??hrt ??? zuletzt beim experimentellen Nachweis der Gravitationswellen.",
            "startDateTime": "6/22/21 19:30",
            "endDateTime": "6/22/21 20:30",
            "venueId": "v3",
            "offerURL": "http://www.planetarium-freiburg.de/pb/1472533.html",
            "imageURL": "http://www.planetarium-freiburg.de/pb/site/freiburg_planetarium/get/params_E232493600/1472539/programm_einstein_1200px.jpg"
        },
        {
            "id": "e4",
            "title": "MUNDOLOGIA: Neuseeland",
            "description": "Paradies am Ende der Welt?Unber??hrte Natur, einsame Str??nde, eine besondere Kultur mit faszinierenden Mythen - Neuseeland steht f??r viele Sehns??chte und W??nsche. Wenn nicht dort, wo soll sonst das irdische Paradies zu finden sein? Viele haben ein Bild von dieser s??dpazifischen Inselgruppe im Kopf, eine Vorstellung vom Paradies auf Erden. Ist es das? Um dies herauszufinden machte sich Tobias Hauser auf die Reise ans andere Ende der Welt. Was er dabei erlebt und gesehen hat, welche Bilder die alten Vorstellungen ersetzt und welche Erz??hlungen f??r ihn best??tigt wurden, das berichtet er in seinem neuen Vortrag. Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "3/21/22 19:30",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418900361&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/JohiQJAn.jpeg"
        },
        {
            "id": "e5",
            "title": "MUNDOLOGIA: Costa Rica",
            "description": "Reise in den tropischen Garten EdenIn Costa Rica begr????en sich die Einheimischen mit ?Pura Vida?, ?Pralles Leben?. Damit bringen sie auf den Punkt, was die schmale Landbr??cke zwischen den Kontinenten so einzigartig macht: Exotische Artenvielfalt von Pflanzen und Tieren wie nirgendwo sonst auf der Erde. Leuchtend gr??ner Urwald, der bis an die Ufer von zwei Weltmeeren reicht und dem Land seinen Namen gegeben hat: Costa Rica, reiche K??ste. In seiner kenntnisreichen, spannenden und unterhaltsamen Reportage zeigt MUNDOLOGIA Gr??nder Tobias Hauser die Sch??nheit der verschiedenen Regionen.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "3/22/22 19:30",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418908155&a=774719&m=13738"
        },
        {
            "id": "e6",
            "title": "Johann K??nig",
            "description": "Johann K??nig, der einzige garantiert glutenfreie Geschmacksverst??rker des deutschen Humors, zieht sich erneut die Tourschuhe an und geht mit frisch gebackenem Programm und Hemd auf gro??e B??hnenreise. Dank sprachlicher Entzugsentgleisungen und seinem windigen Gesp??r f??r das Unerdenkliche kommt er ??berraschend wie eine schwangere Eidechse um die Ecke spaziert und holt sein Publikum da ab, wo es gar nicht ist. Aber beide Seiten ahnen bereits, dass sie sich bald treffen werden. Denn eines ist sicher: Johann K??nig bekommt sie alle. Dabei dichtet, singt und schweigt der Meister der unkalkulierten Pausen solange, bis alle erkennen: Das Leben ist eine riesengro??e ?Milchbr??tchenrechnung?. Inhaltlich geht es wie immer um alles: Um die Unvernunft der anderen und den eigenen Wahnwitz vom Balkon bis zum Keller, wo das Eingemachte steht. Ob geschredderte K??ken, vegane Zirkusbesuche, Flugobst aus der Nachbarstadt, Automotorenger??uschherstellung f??r Elektrofahrzeuge oder Kindersklaven in den eigenen vier W??nden. Deutschlands erster und wahrscheinlich auch letzter Bio-Komiker dr??ckt mit diesen Themen unbemerkt kleine fiese Stachel ins weiche Fleisch der am??sierwilligen Masse und reflektiert so meisterhaft die Narrheit ihres eigenen Tuns. Daher auch sein viel zitierter Spitzname: ?Igel mit Spiegel?.Ist das noch Comedy? Oder doch schon Kabarett? Auf alle F??lle. Unerbittlich. Kritisch. Abbaubar.Au??erdem geht es ihm in diesem Programm auch um den halsbrecherischen Spagat zwischen Arbeit und Familie. Darum, auf der B??hne einen Br??ller nach dem anderen raus hauen zu m??ssen. Und auf der anderen Seite die kleinen Br??llaffen im eigenen Heim nicht zu hauen.",
            "startDateTime": "5/21/22 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418910729&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/WMv5GYh2.jpeg"
        },
        {
            "id": "e7",
            "title": "Bummelkasten - Tour 2021",
            "description": "Bummelkastens Musikvideos werden t??glich tausendfach geklickt. Die Berliner Ein-Mann-Band hat sich mit ihrem komplett mundgemachten Debutalbum Irgendwas Bestimmtes gerade gen??sslich in die deutschen Kindermusikregale gefl??zt und euphorisiert damit Kinder, Eltern und Nicht-Eltern. Ihre Songs entfalten einen Sog, dem man sich nur schwer entziehen kann. Kein Wunder: Dieser popfidele A-Capella-Beatbox-Sound - welcher mit seinen detailreichen Arrangements sowie seiner vokalen als auch musikalischen Verspieltheit herrlich ungeleckt und unterhaltsam daherkommt - sucht nicht nur in der Kindersparte seinesgleichen. Mit anspruchsvollen Texten und eigensinnigem Humor lehnt sich Bummelkasten weit aus der Schublade und ergr??ndet damit k??nstlerisches Neuland.",
            "startDateTime": "11/1/21 15:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418937419&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/fz2JdPM1.jpeg"
        },
        {
            "id": "e8",
            "title": "Christoph Sieber - Mensch bleiben",
            "description": "Eben noch im ZDF mit Kollege Tobias Mann zu sehen wechselte der Kabarettist ganz aktuell zum Kleinkunst-Sender schlechthin und moderiert ab 2021 die legend??ren ?Mitternachtsspitzen? im WDR. Und nat??rlich ist Sieber auch weiterhin auf der B??hne pr??sent. Ganz aktuell mit seinem neuen Programm ?Mensch bleiben?. Wie er das geschafft hat w??hrend der vergangenen Monate und vor allem, warum sich das ganz allgemein f??r einen selbst und die ganze Spezies lohnt, davon erz??hlt er mit seinem schonungslosen, satirischen Blick auf Politik, Kunst und Gesellschaft. Warum werden die, denen wir unsere Kinder anvertrauen, schlechter bezahlt als die, denen wir unser Geld anvertrauen? Und wie konnte es so weit kommen, dass wir Konsumenten sind, User, Zuschauer, Politiker, Migranten, Deutsche, aber immer seltener Mensch? Mit seinem aufkl??rerischen und selbstbespiegelnden Humor ??ffnet Christoph Sieber das passende Ventil, um ??ber seine Antworten nicht zu verzweifeln.",
            "startDateTime": "10/8/22 19:30",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418942183&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/ldFk7eqF.jpeg"
        },
        {
            "id": "e9",
            "title": "Die Nacht der Musicals",
            "description": "Tanz der Vampire, Mamma Mia, Der K??nig der L??wen,The Greatest Showman, Das Phantom der Oper, Cats, Rocky uvm.Nach erfolgreichen Tourneen und vielen ausverkauften Hallen kommt Die Nacht der Musicals ab Dezember 2019 wieder nach Deutschland, ??sterreich und in die Schweiz. Mit einem immer neuen und abwechslungsreichen Programm, begeistert die erfolgreichste Musicalgala aller Zeiten bereits weit ??ber 2 Millionen Besucher.Das Programm l??sst keine W??nsche offen. In einer ??ber zweist??ndigen Show gelingt es den Darstellern eine bunte Mischung bekannter Musicals Hits aus ?Tanz der Vampire?, ?Rocky?, ?Das Phantom der Oper?, ?Mamma Mia?, ?Cats? und vielen weiteren Musicals darzubieten und f??r einen Abend voller G??nsehautmomente im Zuschauerraum zu sorgen. Die j??hrlich wachsenden Zuschauerzahlen bringen Die Nacht der Musicals dazu, immer neue Musicals ins Programm aufzunehmen. So konnte im Vorjahr z.B. mit ?Grease? begeistert werden. In diesem Jahr folgen die besten Szenen aus dem Broadway Verkaufsrenner ?The Greatest Showman?, unter anderem mit dem Hit ?This is me?. Lebe deine Tr??ume ist das Motto des Jungen P.T. Barnum, der mit dem Song ?Million Dreams? dem Publikum seinen Traum, die Zirkuswelt vorstellt. Er verwirklicht sich diesen und wird damit zum Pionier der Manege. Eine spannende Geschichte zum Staunen und mitfiebern, in der weder Liebe noch Dramatik ausbleiben.Nat??rlich d??rfen bei Die Nacht der Musicals auch die beliebtesten Hits aus dem Disney-Musical Der K??nig der L??wen oder ?Frozen? nicht fehlen. Dabei verschmelzen die modernen Lieder zu einer untrennbaren Einheit mit den zeitlosen Klassikern.Die herausragenden Darsteller verbreiten durch ihre Stimmgewalt und das schauspielerische Talent jede Menge Emotionen und garantieren einen unvergesslichen Abend f??r Jung und Alt. Abgerundet wird Die Nacht der Musicals durch animierte Choreografien, aufw??ndige und farbenfrohe Kost??me, sowie ein perfekt auf die Show abgestimmtes Licht- und Soundkonzept.",
            "startDateTime": "10/30/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418944781&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/O8xeVDK8.jpeg"
        },
        {
            "id": "e10",
            "title": "Dieter Nuhr - Kein Scherz - Zusatztermin",
            "description": "Kein Scherz!Dieter Nuhr ist der Meister der entspannten Comedy und der K??nig der befreienden Pointe. In seinem Programm ?Kein Scherz!? beweist er wieder einmal: Das Leben ist kein Witz, kann aber trotzdem Spa?? machen. Dieter Nuhr widersetzt sich dem Zeitgeist dauernder Erregung, seziert unser mediengest??rtes Weltbild und h??lt dagegen mit seiner entwaffnenden Unaufgeregtheit. Ja, wir alle wissen, die Welt wird untergehen! Aber es wird voraussichtlich noch ein paar Millionen Jahre dauern.Dieter Nuhr l??st seelische Verkrampfungen durch wohlbegr??ndete Fr??hlichkeit. Wer einmal einen Auftritt von ihm erlebt hat, wei??: Was wirklich lustig ist, ist oft kein Scherz!Dieter Nuhr kontert die ritualisierte Emp??rung in unserem Land mit abw??genden Gedanken und gelassener Heiterkeit. Er seziert mit seinen entlarvenden Pointen die Verkrampftheit der Ideologen und befreit sein Publikum vom Zwangsdenken der Besserwisser. Seine Abende gelten als heilsame Therapie f??r Angstgest??rte.Dieter Nuhr l??st Verspannungen mit Argumenten und heilt die Weltangst der Zuschauer durch die ??berw??ltigende Kraft seiner extrem lustigen Gedanken! Millionen haben seine Auftritte gesehen, seine Sendungen verfolgt und seine B??cher gelesen. Ein Abend mit Dieter Nuhr ist nicht nur saukomisch! Er verdeutlicht auch: Man kann Massen begeistern, in dem man sich dem Mainstream verweigert. Ihm zuzuh??ren ist ein Genuss.Nuhr beweist: Humor kann schlau sein, Optimismus ist m??glich, Denken macht Spa??! Ein Abend mit Dieter Nuhr zeigt: Die Wirklichkeit ist oft lustiger als jeder Witz, und Lachen ist - das ist kein Scherz! - extrem befreiend!",
            "startDateTime": "4/1/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418949023&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/Rz3ey5Sc.jpeg"
        },
        {
            "id": "e11",
            "title": "The King??s Singers - ?Love Songs?",
            "description": "Das Albert-Konzert mit den King?s Singers am 20. September 2020 im Paulussaal Freiburg konnte infolge der beh??rdlichen Auflage zur Eind??mmung der Verbreitung desr Corona-Pandemia leider nicht mit dem geplanten Besucher-Umfang stattfinden. Wir bitten Sie daher um Verst??ndnis f??r eine erneute Verschiebung des Konzerts.Neuer Konzerttermin ist nun Sonntag, der 11. Juli 2021 um 20 Uhr im Paulussaal Freiburg.Ihre Eintrittskarten behalten f??r den neuen Konzerttermin ihre G??ltigkeit und m??ssen nicht eingetauscht werden. Bringen Sie Ihre Karten einfach zum neuen Konzerttermin mit.Sollten Sie den neuen Konzerttermin nicht wahrnehmen k??nnen, k??nnen Sie Ihre Karten an der Vorverkaufsstelle, an der sie erworben wurden, zur??ckgeben.F??r privatwirtschaftliche Veranstalter, die keine ??ffentlichen Zusch??sse bekommen, wie die Albert Konzerte ist die Corona-Krise eine gro??e Herausforderung. Wir bitten Sie deshalb um eine solidarische Geste:- Unterst??tzen Sie uns im Rahmen der Aktion #seidabeiSchenkDeinTicket und verzichten auf die R??ckerstattung der von Ihnen bereits bezahlten Tickets oder einzelner Tickets. Bitte teilen Sie uns mit, falls Sie eine Spendenbescheinigung ben??tigen.- Tauschen Sie Ihr bereits bezahltes Ticket ein gegen einen Umtauschgutschein, der f??r beliebige zuk??nftige Albert-Konzerte eingel??st werden kann.Bitte nehmen Sie f??r beide Aktionen ebenfalls Kontakt zur der Vorverkaufsstelle auf, an der Sie Ihre Tickets erworben haben. Ihre Mitwirkung bedeutet uns sehr viel! Herzlichen Dank!Bitte beachten Sie: Aufgrund der beh??rdlichen Auflagen sind verschiedene Vorverkaufsstellen aktuell nur einschr??nkt erreichbar. Es kann daher bei der R??ckerstattung zu Verz??gerungen kommen.Hier die Kontaktdaten der wichtigsten Vorverkaufsstellen:BZ-Karten-Service, Tel. 0761 ? 496-8888, Email: mitarbeiter.kartenservice@bz-ticket.deBuchhandlung Rombach, Tel. 0761 ? 4500-2432, Email: klassik@rombach.deReservix, Tel. 0761 ? 88788-11, Email: tickets@reservix.deAD ticket, Tel. 0180 - 6050400Falls Sie Ihre Karten direkt bei den Albert Konzerten erworben haben und eine R??ckerstattung w??nschen, senden Sie Ihre Karten bitte zusammen mit Angabe Ihrer Kontoverbindung an das Kartenb??ro der Albert Konzerte: Albert Konzerte GmbH, Postfach 1349, 79013 FreiburgF??r R??ckfragen steht Ihnen das Kartenb??ro der Albert Konzerte gerne zur Verf??gung:Tel. 0761 ? 289442, Email: info@albert-konzerte.de-----------------------------------------------------------------------------------------------Royale Klangpracht - Sie sind die unangefochtenen K??nige der a??-cappella??-Kunst: The King??s Singers, ein  Ensemble, das seit ??ber 50 Jahre f??r unver??gleichliche Klangkultur steht. Kultstatus genie??en die Konzerte der britischen Edelkehlen vor allem dank des schier grenzenlosen Repertoires, aus dem sie sch??pfen: jeder Auftritt eine bunte Bon??bonschachtel, randvoll mit ausgefeilten Arrangements aller Jahr??hunderte und (fast) aller L??nder. Neben ihren stimmlichen H??chst??leistungen feiert man The King??s Singers auch f??r ihre ansteckend gute Laune: Die entspringt fraglos einer ungebrochenen Neugier, sich als Schatzgr??ber durch die  Jahrhunderte zu w??hlen, sich mal der lupenreinen Perfektion der Renaissancemusik zu widmen, dann wieder dem romantischen ??berschwang hinzugeben und letztlich alles mit den Perlen aus Popmusik und Moderne zu garnieren.Dass der Funke jedes Mal aufs Neue von den S??ngern auf das Publikum ??berspringt, daf??r garantiert auch die viel zitierte Che??mie zwischen den Pers??nlichkeiten: Hier stehen nicht blo?? sechs Kollegen nebeneinander, hier hat sich eine eingeschworene K??nst??lergemeinschaft gefunden. 1968 gaben sechs Studenten des renommierten King??s College ihr erstes Konzert in London ? was zun??chst nur ein ambitioniertes Projekt unter Freunden war, wurde schnell eine Erfolgsgeschichte. Mit ihren fabelhaften Stimmen, abwechslungsreichen Program??men von Bach bis zu den Beatles und ihrem unwiderstehlichen britischen Charme eroberten sie im Sturm die Kirchen?? und Konzertb??hnen weltweit ? und kehren nach ihrem gefeierten Al??bert??-Konzert im Oktober 2018 nun mit ?Love Songs? zu uns zur??ck.The King?s SingersPatrick Dunachie, CountertenorEdward Button, CountertenorJulian Gregory, TenorChristopher Bruerton, BaritonNick Ashby, BaritonJonathan Howard, Bass?Love Songs?Arlen, It?s a New World | Trad., I Love My Love | Simon and Garfunkel, April come she will | Sarah McLachlan, When she loved me | Anonymous, Dindirin | Brahms, Vineta | Elgar, Deep in my soul | Hill, Remembered Love | Janequin, Au joly jeu | di Lasso, Im Mayen, Toutes les nuits, Chi chilichi? | Trad., Tuoll on mun kultani | Sibelius, Rakastava | Beliebte Close Harmony-Klassiker und brandneue ??berraschungen aus dem leichteren Repertoire der King?s Singers",
            "startDateTime": "7/11/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418956759&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/evVkgOE0.jpeg"
        },
        {
            "id": "e12",
            "title": "PAUL PANZER - Midlife Crisis ...willkommen auf der dunklen Seite",
            "description": "Dass das Leben kein Ponyhof ist, scheint allgemein bekannt. Doch was die ?goldene Mitte? f??r uns alle bereith??lt, damit konnte selbst PAUL PANZER nicht rechnen. Denn sind die Kinder erst erwachsen und die Frau auf Weltreise, hei??t?s auch f??r Paul: ?Kleiner Mann was nun??In seinem neuen Programm begibt sich Ausnahmek??nstler PAUL PANZER auf eine emotionale Geisterbahnfahrt durch das Tal der Tr??nen, durch das wir alle einmal m??ssen.PAUL PANZER live in der Krise seinen Lebens ... wahrlich zum Totlachen f??r jeden der nicht drinsteckt!",
            "startDateTime": "12/9/21 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418974867&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/gRAxCkLL.jpeg"
        },
        {
            "id": "e13",
            "title": "Beethoven 250 - The Power of Humanity",
            "description": "Wir bitten Sie sehr herzlich um Ihr Verst??ndnis, dass infolge der gesetzlichen Corona-Verordnungen der Termin des Albert-Sonderkonzertes Beethoven 250 ? The Power of Humanity, bislang 3. Juli 2021, nochmals verschoben werden muss.Neuer Konzerttermin ist nun Sonntag, der 10. Juli 2022 um 20 Uhr im Konzerthaus Freiburg.Ihre Eintrittskarten behalten f??r den neuen Konzerttermin ihre G??ltigkeit und m??ssen nicht eingetauscht werden. Bringen Sie Ihre Karten einfach zum neuen Konzerttermin mit.Sollten Sie den neuen Konzerttermin nicht wahrnehmen k??nnen, k??nnen Sie Ihre Karten an der Vorverkaufsstelle, an der sie erworben wurden, zur??ckgeben.F??r privatwirtschaftliche Veranstalter, die keine ??ffentlichen Zusch??sse bekommen, wie die Albert Konzerte ist die Corona-Krise eine gro??e Herausforderung. Wir bitten Sie deshalb um eine solidarische Geste:- Unterst??tzen Sie uns im Rahmen der Aktion #seidabeiSchenkDeinTicket und verzichten auf die R??ckerstattung der von Ihnen bereits bezahlten Tickets oder einzelner Tickets. Bitte teilen Sie uns mit, falls Sie eine Spendenbescheinigung ben??tigen.- Tauschen Sie Ihr bereits bezahltes Ticket ein gegen einen Umtauschgutschein, der f??r beliebige zuk??nftige Albert-Konzerte eingel??st werden kann.Bitte nehmen Sie f??r beide Aktionen ebenfalls Kontakt zur der Vorverkaufsstelle auf, an der Sie Ihre Tickets erworben haben. Ihre Mitwirkung bedeutet uns sehr viel! Herzlichen Dank!Bitte beachten Sie: Da verschiedene Vorverkaufsstellen aufgrund der beh??rdlichen Auflagen aktuell nur eingeschr??nkt besetzt und erreichbar sind, kann es bei der R??ckerstattung zu Verz??gerungen kommen.Hier die Kontaktdaten der wichtigsten Vorverkaufsstellen:BZ-Karten-Service, Tel. 0761 ? 496-8888, Email: mitarbeiter.kartenservice@bz-ticket.deBuchhandlung Rombach, Tel. 0761 ? 4500-2432, Email: klassik@rombach.deReservix, Tel. 0761 ? 88788-11, Email: tickets@reservix.deAD ticket, Tel. 0180 - 6050400Falls Sie Ihre Karten direkt bei den Albert Konzerten erworben haben und eine R??ckerstattung w??nschen, senden Sie Ihre Karten bitte zusammen mit Angabe Ihrer Kontoverbindung an das Kartenb??ro der Albert Konzerte: Albert Konzerte GmbH, Postfach 1349, 79013 FreiburgF??r R??ckfragen steht Ihnen das Kartenb??ro der Albert Konzerte gerne zur Verf??gung:Tel. 0761 ? 289442, Email: info@albert-konzerte.de-----------------------------------------------------------------------------------------------Auch 250 Jahre nach der Geburt des ?Titanen? Ludwig van Beethoven sind die humanit??ren und aufkl??rerischen Ideen des Musikgenies noch immer aktuell. Das politisch-menschliche Feuer seiner Werke und seines Denkens begriff Beethoven als prometheische Berufung. In seinem Jubil??umsjahr lassen die Albert Konzerte diesen Geist in Form eines Community-Dance-Projekts erfahrbar werden ? in Kooperation mit dem Akademischen Orchester Freiburg unter Leitung seines Chefdirigenten Joonas Pitk??nen und dem Vertiefungskurs Tanz an der Universit??t Freiburg, dem Showteam Matrix, dem ?kick for girls?- Fl??chtlingskinder-Projekt und der Wentzinger-Realschule. Konzipiert wurde das exklusive Projekt von Leander Hotaki, Intendant der Albert Konzerte, gemeinsam mit Christina Pl??tze, Tanzdozentin der Freiburger Universit??t, der die choreographische Leitung obliegt.Gemeinsam verweben die Akteure Choreographien mit von Idealen durchdrungenen Werken des gro??en Komponisten. Mit ?Die Gesch??pfe des Prometheus? schrieb Beethoven eine Ballettmusik, deren Sujet ? der Titan bringt den Menschen das Feuer und emanzipiert sie dadurch von der Herrschaft der G??tter ? klare aufkl??rerische Intention verfolgt. Ein zentrales Werk in diesem Zusammenhang ist Beethovens 9. Symphonie mit Friedrich Schillers ?Ode an die Freude? im 4. Satz. Als besonders wirkm??chtig hat sich das Verst??ndnis der Symphonie als Ausdruck h??chster Humanit??t erwiesen, das dem Satz ?alle Menschen werden Br??der? programmatisches Gewicht verleiht ? eine solche Interpretation hat die Verwendung der Ode als Europahymne m??glich gemacht. So steht die Europahymne heute als Sinnbild der ?Einheit in der Vielfalt?, die auch der grundlegende Gedanke des Community-Dance-Projekts ?The Power of Humanity? ist: Kinder, Jugendliche und junge Erwachsene unterschiedlicher sozialer Herkunft werden an klassische Musik herangef??hrt ? so wie Prometheus den Menschen das Feuer bringt, entz??ndet die Musik Beethovens das kreative Potential der jungen Menschen. In der t??nzerischen Auseinandersetzung werden Toleranz, Offenheit und interkulturelle Vielfalt unmittelbar erlebbar.Programm:Beethoven:Symphonie Nr. 3 Es-Dur op. 55 ?Eroica?, FinalsatzLeonoren-Ouvert??re Nr. 3 op. 72aEgmont-Ouvert??re op. 84Die Gesch??pfe des Prometheus. Ballettmusik op. 43?Ode an die Freude? aus der 9. Symphonie d-Moll op. 125Akademisches Orchester FreiburgJoonas Pitk??nen, DirigentShowteam MatrixVertiefungskurs Tanz an der Universit??t FreiburgSch??ler der Wentzinger-Realschulekick for GirlsUnter der Schirmherrschaft des Rektors der Universit??t Freiburg Prof. Dr. Dr. h. c. Hans-Jochen SchiewerMit freundlicher Unterst??tzung des Vereins der Freunde und F??rderer der Albert Konzerte e.V.Klimaneutrales KonzertKlima-Patenschaft: Frau Sabine Bronner",
            "startDateTime": "7/10/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418981247&a=774719&m=13738"
        },
        {
            "id": "e14",
            "title": "HARRY G - Hoamboy",
            "description": "HOAMBOY ? so der Titel des neuesten Programms von Harry G ? ist mehr als nur ein Wortspiel, es ist eine exakte Beschreibung seiner Person. Auf der einen Seite ein Bayer mit Vorliebe f??r Tradition, auf der anderen Seite ein weltoffener und neugieriger Kosmopolit, der mit gro??er Leidenschaft und offenen Augen und Ohren sein jeweiliges Umfeld nach Themen durchsucht die es ?wert? sind, auf der B??hne besprochen zu werden. Und das tut er auf ganz eigene und unnachahmliche Weise. Ob in seiner typisch grantigen Art, s??ffisant, zynisch oder einfach ganz still betrachtend: Wenn sich Harry G auf der B??hne mit Trends, Zeitgeschehen und Menschen auseinandersetzt braucht sein Publikum starke Lachmuskeln. Ein Abend mit Harry G ist nicht zum Ausruhen, es ist ein Abend voller Energie und Intensit??t, der man sich als Zuschauer nicht entziehen kann. Ab Dezember 2019 geht Harry G mit seinem dritten B??hnenprogramm ?HOAMBOY? auf Tour.",
            "startDateTime": "10/16/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418995043&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/OhTAZPFo.jpeg"
        },
        {
            "id": "e15",
            "title": "Anna Depenbusch - Tour 2020",
            "description": "Preisgekr??nte Pop-Poetin ANNA DEPENBUSCH 2020 wieder auf Tour Leidenschaft und Temperament, Kreativit??t und Poesie, Humor und Ironie: Diese Charaktereigenschaften zeichnen ANNA DEPENBUSCH aus ? und das nicht nur auf, sondern auch hinter der B??hne. Die Hamburger Liedermacherin zeigte mit ihrem letzten Studioalbum ?Das Alphabet der Anna Depenbusch in schwarz-wei???, dass es nicht mehr als ein Klavier und ihrer Stimme bedarf,um  f??r  ein  paar  Stunden  in eine Welt voller  Phantasie einzutauchen.In  dieser  verschmelzen Geschichten, die das Leben schreibt,Anekdoten,Wahrheiten, Tr??ume,W??nsche und Sehns??chte in einer  Symbiose  miteinander. Egal  ob  sie  fl??stert  oder  pfeift,  sie  streichelt  oder  bebt,  sie neckisch scherzt oder  einfach  nur  ganz  tief  ber??hrt:  ?Anna  Depenbusch  ist  in  ihrem Fach,  dem  modernen Chanson, das Ma?? aller Dinge? (Hannoversche Allgemeine Zeitung). Nicht von ungef??hr kommt es, dass sie bereits mit dem Deutschen Chansonpreis und dem Fred-Jay Preis ausgezeichnet wurde.Nachdem sie 2018 als Special Guest auf der Tour von Tina Dico sowie auf ihrer eigenen gro??en Deutschlandtour in ausverkauften Konzertst??tten wie der K??lner Kulturkirche, dem Leipziger Kupfersaal oder der Hamburger Elbphilharmonie begeisterte, konzentriert sie sich 2019 voll und ganz auf die kreative Schaffensphase ihres neuen Albums. ?Eine Frau, ein Klavier und sonst nichts. Purer Genuss?  ?so wie der Generalanzeiger Bonn den minimalistischen und doch so wirkungsvollen Einsatz dieser beiden  Elemente  an ANNA  DEPENBUSCH sch??tzt,  soll  sich  auch  das  kommende  Album  auf Klavierkl??nge, Sprache und Gesang fokussieren: ?Ich erz??hle Geschichten, die jeder kennt und stelle sie in meinen Liedern in ein ganz einzigartiges Licht?.Zwischen der Leidenschaft einer Edith Piaf, der Eleganz  einer  Tori  Amos  und  dem  kraftvollen  Entertainment  eines  Billy  Joel,  ??berrascht  die Liedermacherin  vor  allem  mit  ihrem besonderen  Gesp??r  f??r Rhetorik und  der  Freude  an  bildhaften Wortspielen.  Ihre Authentizit??t  spiegelt  sich  in  ihren  Moderationen wieder,  durch welche  die Zuschauer m??helos den Eindruck gewinnen, sie nach dem Konzertereignis besser zu kennen.ANNA  DEPENBUSCH hat  sich  f??r  ihr  neues  Programm ganz  bewusst historisch  und  musikalisch bedeutsame Konzerth??user  ausgesucht,  deren W??nde  ihre  ganz  eigenen  Geschichten  erz??hlen. Gleichzeitig  bieten  die Kulissen das  perfekte  Ambiente f??r intime  Momente  im  Dialog  mit den Konzertbesuchern. ?Mit dem neuen Programm komme ich mir und dem Publikum besonders nah? ?eine Erkenntnis und gleichzeitig ein Versprechen, das die K??nstlerin f??r ihre anstehende Tour gibt.",
            "startDateTime": "10/17/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=24419000733&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/SBvwxLgA.jpeg"
        },
        {
            "id": "e16",
            "title": "The Freddie Mercury Show",
            "description": "The King of Queen is Back: The Freddie Mercury Show kommt ab Februar 2020 auf gro??e Tournee durch ganz Deutschland. Freddie Mercury f??llte als Frontmann der Band Queen die gr????ten Stadien weltweit.Er ging als charismatischer S??nger, genialer Songschreiber und Showman in die Pop-Geschichte ein, dies stellte er bei jedem Konzert erneut unter Beweis. Seine Karriere begann im Alter von 17 Jahren als er nach London zog und dort Gitarrist Brian May und Schlagzeuger Roger Taylor kennenlernte. Mit ihnen gr??ndete er die Band ?Queen?. Vier Jahre sp??ter schafften sie mit dem Hit ?Killer Queen? den internationalen Durchbruch ? von da an folgte ein Hit nach dem anderen. Mercury war f??r seinen dekadenten und aufregenden Lebensstil bekannt, so feierte er wilde Partys auf der ganzen Welt oder zog mit einer verkleideten Lady Di um die H??user Londons. Trotz seiner schweren HIV-Erkrankung lebte er seine Leidenschaft f??r die Musik bis zu seinem Tod im Jahr 1991 voll und ganz aus und stand dabei mit all seiner Kraft bis zuletzt im Studio. Unter dem Motto ?The King of Queen is Back? erleben die Zuschauer in der rund 90-min??tigen Show alle bekannten Hits von Mercury und Queen. Ausgezeichnete T??nzer, Top S??ngerInnen sowie eine ausgefalleneB??hnenshow versetzen das Publikum in eine andere Zeit.",
            "startDateTime": "12/22/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=24419025117&a=774719&m=13738"
        },
        {
            "id": "e17",
            "title": "Max Raabe & Palast Orchester - Guten Tag, liebes Gl??ck",
            "description": "?Statt Cannes und Nizza / s???? ich mit Pizza / viel lieber mit dir Hand in Hand?. Es sind Zeilen wie diese aus ?C??te d ?Azur?, die die Lieder von Max Raabe so unverkennbar und beliebt machen. Erschienen ist ?C??te d ?Azur? auf dem Gold-pr??mierten Album ?Der perfekte Moment .. wird heut verpennt?. Max Raabe & Palast Orchester sch??pfen f??r ihr neues Konzertprogramm 2020 aus dieser Quelle und bringen ausgew??hlte Titel frisch arrangiert mit Spielwitz und Virtuosit??t auf die B??hne. Verwoben wird der ?Raabe-Pop? mit alt-geliebten und neu entdeckten Liedern aus den 20er/30er Jahren. Im Mai 2019 werden Max Raabe & Palast Orchester au??erdem zusammen mit ganz besonderen G??sten ein eigenes ?MTV unplugged? Konzert aufnehmen. Titel und Erfahrungen aus dieser Produktion werden die Konzert-Tour 2020 beeinflussen. Foto: Majid Moussavi",
            "startDateTime": "6/9/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=24721634983&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/2LRqe2dN.jpeg"
        },
        {
            "id": "e18",
            "title": "BIBI BLOCKSBERG - Alles wie verhext",
            "description": "Bibi Blocksberg, die ber??hmteste kleine Hexe Deutschlands, geht ab 2020 mit ihrem Musical ?Alles wie verhext!? wieder auf gro??e Tournee durch Deutschland, ??sterreich und die Schweiz. Zum 40-j??hrigen Jubil??um der Serie ist das neue Original-COCOMICO Musical bis 2023 landauf, landab LIVE zu erleben!??berall begeisterte ZuschauerVier erfolgreiche Bibi Blocksberg Live-Musicals aus der Feder von Produzent und Autor Marcell G??dde und seinem COCOMICO Theater wurden bereits von 1,2 Millionen Zuschauern in ??ber 1350 Auff??hrungen gesehen.In vielen St??dten ist demn??chst einfach ?Alles wie verhext!?, wenn Bibi Blocksberg mit ihrem Besen Kartoffelbrei herbeigeflogen kommt. Insgesamt finden von 2020 bis 2023 ??ber 300 Auff??hrungen vor vielen, vielen kleinen und gro??en begeisterten Zuschauerinnen und Zuschauern statt!Bibi Blocksberg ?Alles wie verhext!? - Das MusicalJeder kennt das, es gibt Tage, an denen einfach alles schiefl??uft! Das f??ngt morgens schon beim Aufstehen mit dem falschen Fu?? an und zieht sich ??ber den ganzen Tag. Dann ist einfach ?Alles wie verhext!?. Einen solchen Tag hat auch die kleine, freche Hexe Bibi Blocksberg erwischt: Schon morgens gibt es ein Riesendurcheinander mit ihren Eltern Barbara und Bernhard Blocksberg zu Hause. Und auch in der Schule will einfach gar nichts klappen. Bibis Lehrerin Frau M??ller-Riebensehl bringt das ganz sch??n auf die Palme! Abends ist dann auch noch Walpurgisnacht auf dem Blocksberg. Dieses Jahr sollen dort Bibi und Barbara Blocksberg zusammen mit Oma Grete das gro??e Hexenfeuer entfachen. Aber was wird Walpurgia, die Vorsitzende des Hexenrates blo?? dazu sagen, wenn dort auch alles schief l??uft?Da ist richtig was los!Wird es den Hexen der Familie Blocksberg an diesem ?verhexten? Tag gelingen, das Hexenfeuer zur Walpurgisnacht wie vorgesehen zu entz??nden? Die kleinen und gro??en Hexen-Fans im Saal d??rfen Bibi, ihrer Mutter und ihrer Oma sogar dabei helfen, denn bei diesem Familien-Pop-Musical ist Mitmachen dringend erw??nscht ? gerne auch verkleidet. Kleine und gro??e Hexen in Kost??men sind herzlich willkommen! Und wenn mit Hilfe der Kinder und aller Zuschauerinnen und Zuschauer alles gut ausgeht, wird Karla Kolumna, die rasende Reporterin aus Neustadt beruhigt schreiben k??nnen: Es WAR alles wie verhext.Mitrei??ende Inszenierung, tolle neue Lieder und wieder einmal ganz viel ?Hex hex!?Das Bibi Blocksberg-Musical ?Alles wie verhext!?, original und exklusiv vom Cocomico Theater aus K??ln: Ein hexischer Spa?? f??r die ganze Familie!",
            "startDateTime": "1/5/23 17:00",
            "venueId": "v7",
            "offerURL": "https://www.awin1.com/pclick.php?p=25168951107&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/ba2TnKGV.jpeg"
        },
        {
            "id": "e19",
            "title": "RUSSKAJA - NO ONE IS ILLEGAL Tour 2019",
            "description": "RusskajaMit neuem Highspeed-Turbo-Polka-Album auf Tour.Egal ob World Music, Mainstream, Indie oder Metallfestival; die Power von Russkaja kennt keine musikalischen Grenzen und der Fan, egal ob Alternativ, Hippie oder Metal dreht beim Bandhit ?Psycho Traktor? regelrecht ab. Frag nach bei Wacken, denn die Staubwolke h??ngt heute noch ??ber dem Ort. ??ber 700 Auftritte weltweit; alleine 2018 wurden ??ber 50 Konzerte platt gemacht. Beweis genug f??r den Beliebtheitsgrad der Band.Mit ihrem Motto ?nichts und niemand wird uns aus dem Sattel werfen? verbreiten sie die Lebensfreude des Ostens und sagen: ?Du musst kein russisch sprechen, um Russkaja zu verstehen!? Man kann bei Russkaja schon fast behaupten, dass sie ??ber die Jahre ihren eigenen Stil kreiert haben: eine Mischung aus Balkan, Metal, Polka, Estam Rock, Rock ?n? Roll und Metal. Die Hochgeschwindigkeit-Sensation mit ihrem russischen Turbo-Polka bietet mit ihrer Musik den Soundtrack zu vielem und ist die wohl erfolgreichste Musik-Kolchose auf diesem Planeten.",
            "startDateTime": "3/4/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25861065769&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/F2xdMVje.jpeg"
        },
        {
            "id": "e20",
            "title": "CHIPPENDALES",
            "description": "Die Chippendales rufen zum Ungehorsam auf!Zum ersten Mal in ihrer seit 1992 bestehenden deutschen Tourgeschichte werden die Chippendales in diesem Jahr nicht auf Tour gehen. Die urspr??nglich f??r den 17.10. bis 21.11.2020 terminierte Deutschlandtour der Chippendales kann aufgrund der anhaltenden Pandemiesituation nicht stattfinden. Die Gesundheit der K??nstler, Fans und Mitarbeiter hat oberste Priorit??t. Der Gro??teil der Showtermine konnte in 2021 verschoben werden. Bereits erworbene Tickets behalten ihre G??ltigkeit. Die Traumm??nner geben alles, um die perfekte Show hinzulegen. Neben Erotik, Leidenschaft und Humor, beeindrucken sie ihre Fans mit Live-Gesang, atemberaubendem Tanz und spektakul??ren Live-Performances an Klavier und Gitarre. Ein sexy B??hnenfeuerwerk! Wie keine Zweiten verstehen es die durchtrainierten Gentlemen den richtigen Ton zu treffen und nahezu alle Fantasien zu bedienen: von sanft und gef??hlvoll ??ber lustig und locker bis dominant und leidenschaftlich. Sie sind die weltweite Nummer Eins der Entertainment-Shows f??r Frauen, sie sind DAS ORIGINAL und das sp??rt man auch! Diese besonderen Ladies? Nights kitzeln die ungezogene Seite heraus und sorgen f??r eine wilde Party!",
            "startDateTime": "11/18/21 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863757581&a=774719&m=13738"
        },
        {
            "id": "e21",
            "title": "Klavierabend Grigory Sokolov",
            "description": "Wir bitten Sie sehr herzlich um Ihr Verst??ndnis, dass infolge der gesetzlichen Verordnungen zur Eind??mmung der Corona-Pandemie der Termin des Klavierabends mit Grigory Sokolov, bislang 26. Juni 2021, nochmals verschoben werden muss. Neuer Konzerttermin ist nun Sonntag, der 29. Mai 2022.Das Programm wird zu einem sp??teren Zeitpunkt bekannt gegeben.Ihre Eintrittskarten behalten f??r den neuen Konzerttermin ihre G??ltigkeit und m??ssen nicht eingetauscht werden. Bringen Sie Ihre Karten einfach zum neuen Konzerttermin mit.Sollten Sie den neuen Konzerttermin nicht wahrnehmen k??nnen, k??nnen Sie Ihre Eintrittskarten an der Vorverkaufsstelle, an der Sie diese erworben haben, zur??ckgeben.Bitte beachten Sie: Da viele Vorverkaufsstellen aufgrund der aktuellen Situation nur eingeschr??nkt besetzt und erreichbar sind, kann es bei der R??ckerstattung zu Verz??gerungen kommen.Hier die Kontaktdaten der wichtigsten Vorverkaufsstellen:BZ-Karten-Service, Tel. 0761 ? 496-8888, Email: info@bz-karten-service.deBuchhandlung Rombach, Tel. 0761 ? 4500-2432, Email: klassik@rombach.deReservix, Tel. 0761 ? 88788-11, Email: tickets@reservix.deAD ticket, Tel. 0180 ? 6050400Falls Sie Ihre Karten direkt bei den Albert Konzerten erworben haben, senden Sie Ihre Karten bitte zusammen mit Angabe Ihrer Kontoverbindung an das Kartenb??ro der Albert Konzerte:Albert Konzerte GmbH, Postfach 1349, 79013 FreiburgF??r R??ckfragen steht Ihnen unser Kartenb??ro gerne zur Verf??gung:Tel. 0761 ? 289442, Email: info@albert-konzerte.de-----------------------------------------------------------------------------------------Grigory Sokolov ist eine monolithische Gr????e im Musikbetrieb. Nach einer Solistenkarriere unter ??ber 200 Dirigenten, mit den besten Orchestern und auf den bedeutendsten Konzertpodien der Erde, gelangte der Meisterpianist zu ??berlebensgro??em Ruhm durch Reduktion ? durch die Konzentration auf die Intimit??t von Solo-Klavierabenden, zu denen sich jede noch so weite Pilgerreise lohnt. Denn auch wenn Sternstunden wie etwa das ??Salzburg Recital?? inzwischen bei Deutsche Grammophon dokumentiert sind, ersetzt nichts den lebendigen Zauber, die Sogkraft, mit der Sokolov die Konzertg??ste in sein Universum zieht.Sobald der Ausnahmepianist die Tasten ber??hrt, wird alles unwichtig ? au??er der Musik. Vernachl??ssigbar werden die Werke lediglich, wenn es um Werbung geht: Oft gibt Grigory Sokolov seine konkreten Programme erst kurzfristig bekannt. Dies macht die Vorfreude auf seine ausgefeilten, klug gebauten Konzertsolit??re freilich nur noch gr????er. Erleben Sie einen der gr????ten Pianisten unserer Zeit nach seinem gefeierten Albert-Klavierabend im April 2019 nun erneut im Konzerthaus Freiburg!Das Programm wird zu einem sp??teren Zeitpunkt bekannt gegeben.Mit freundlicher Unterst??tzung von Frau Sabine Bronner",
            "startDateTime": "5/29/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863760667&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/biZ0jOFS.jpeg"
        },
        {
            "id": "e22",
            "title": "Dr. Mark Benecke - Bakterien, Ger??che und Leichen",
            "description": "Dr. Mark Benecke ist Vorsitzender der Deutschen Dracula Gesellschaft. Er ist Mitglied des Komitees des Nobelpreises f??r kuriose, wissenschaftliche Forschungen. Au??erdem ist er ein erfolgreicher Autor, Politiker, Donaldist, er ist der bekannteste Kriminalbiologe der Welt und er ist Spezialist f??r forensische Entomologie (Insektenkunde). Sein Aufgabengebiet: fast aussichtslose Mordf??lle. Wenn kein Ausweg mehr zu sehen ist, wird Mark Benecke gerufen. Jeder Tatort ist eine Fundgrube an Beweisen. Man sieht sie nicht auf den ersten Blick, aber seine Helfer, die Maden und Fliegen, k??nnen wichtige Antworten geben. Nicht der Tod ist Benecke? s Job, sondern das Leben nach dem Tod. Wenn Maden den M??rder entlarven, hat Benecke alles richtig gemacht. Selbst kleinste Lebewesen auf der Leiche k??nnen den entscheidenden Hinweis zur Aufkl??rung geben. Einen perfekten Mord gibt es nicht, denn Insekten schlafen nie.",
            "startDateTime": "10/23/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863769407&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/DE4pqwRz.jpeg"
        },
        {
            "id": "e23",
            "title": "Wiener Johann Strau?? Konzert Gala - Die K&K Philharmoniker, Dirigent",
            "description": "Sie ist ein Garant f??r frisches Lebensgef??hl, Vitalit??t und Sinneslust ? die ??Wiener Johann Strau?? Konzert-Gala??. Seit 1996 zog Matthias Georg Kendlingers Exportschlager ??Made in Austria?? mehr als 1 Million Liebhaber in 19 europ??ischen L??ndern in seinen Bann ? ein musikalischer Jungbrunnen, an dem selbst K??nige und Kaiser ihre wahre Freude h??tten ? Kultstatus inbegriffen!",
            "startDateTime": "1/13/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863773627&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/iulfsJS9.jpeg"
        },
        {
            "id": "e24",
            "title": "MUNDOLOGIA: Hans Kammerlander Manaslu",
            "description": "Erleben Sie die Bergsteigerlegende Hans Kammerlander mit seinem neuen Vortrag ??ber die Abenteuer am Manaslu.Der S??dtiroler Hans Kammerlander geh??rt zu den erfolgreichsten Extrem-Bergsteigern unserer Zeit. In seiner Biografie stehen mehr als 2500 Klettertouren, rund 50 Erstbegehungen und 60 Alleinbegehungen gro??er Alpenw??nde. Er bestieg zw??lf der vierzehn Achttausender. Er fuhr mit Ski vom Gipfel des Everest ab und durch die steilen Flanken des Nanga Parbat. Ein Gipfel geh??rt dir erst, wenn du wieder unten bist - denn vorher geh??rst du ihm.Hans KammerlanderWeitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "11/14/21 18:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863777545&a=774719&m=13738"
        },
        {
            "id": "e25",
            "title": "PIETRO LOMBARDI & Band - Live - Tour 2021",
            "description": "F??r den einfachen Jungen aus Karlsruhe wurde Deutschland sucht den Superstar zum Jackpot ? seine Lieblingsphrase, die er w??hrend DSDS pr??gte. Pietro Lombardi gewann die achte Staffel der Erfolgsshow mit Dieter Bohlen.  Pietro Lombardi wurde 1992 als Sohn eines Italieners geboren und wuchs in Karlsruhe auf. 2010 bewarb sich der leidenschaftliche Hobby-S??nger bei ?Deutschland sucht den Superstar? ? von Beginn an galt er als Zuschauerliebling, bekam in den Live-Shows stets die meisten oder zweitmeisten Anrufe. Vor allem die weiblichen Fans liebten seine nette, leicht verplante und nat??rliche Art. Pietro Lombardi tanzte, sang und quatschte sich in die Herzen der Zuschauer und gewann die Show 2011 vor.   Pietros Siegersingle ?Call my Name? verkaufte sich binnen einer Woche nach dem Finale von DSDS 300.000 Mal, erreichte Platin-Status und nat??rlich Platz eins der Charts in Deutschland, ??sterreich und der Schweiz. Auch das Album ?Jackpot? schoss an die Chartspitze in Deutschland und ??sterreich.   Im Sommer 2017 st??rmt  Pietro Lombardi gemeinsam mit Kay One die Spitze der Single Charts und bringt mit Senorita den Sommer zur??ck. Nach der viel besprochenen Trennung von seiner Partnerin Sarah im vergangenen Herbst performt Pietro Lombardi in Senorita wie ihn seine Fans am meisten lieben - als gutgelaunter und charismatischen Sunnyboy!",
            "startDateTime": "12/17/21 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863778937&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/amsoEqKP.jpeg"
        },
        {
            "id": "e26",
            "title": "Kastelruther Spatzen - live 2021",
            "description": "Sie sind Inbegriff und die erfolgreichsten Vertreter der volkst??mlichen Schlagermusik. Keiner verk??rpert diese Stilrichtung besser als sie. Die Kastelruther Spatzen werden im Fr??hjahr 2020 mit ihrem neuen Programm zum aktuellen Album ?Feuervogel flieg?auf Tournee gehen!?Feuervogel flieg? ist der m??rchenhafte Titel des neuen Albums der Kastelruther Spatzen. Ein Titel, der Spannendes erwarten l??sst, denn die legend??re Geschichte des magisch gl??henden Vogels, alter Mythologie entstammend, repr??sentiert die bewegte Schicksalslinie unser aller Leben und diente vielen Generationen als Inspiration. Den Kastelruther Spatzen war es ??ber all die Jahre immer ein wichtiges Anliegen, Geschichten aus dem wahren Leben zu wundersch??nen Liedern zu formen. Beeindruckend und erstaunlich gleicherma??en, haben die Kastelruther Spatzen seit 36 Jahren ihre Stilistik erhalten und dabei immer wieder neue und wegweisende Inhalte in ihre Lieder einflie??en lassen. Stillstand gab es nie. Emotional und ergreifend erz??hlen die Spatzen mit ?Feuervogel flieg? ihre oft selbsterlebten Geschichten und Erfahrungen.Es ist ein Teil ihres Erfolgsgeheimnisses, dass sie nicht nur die sch??ne heile Welt besingen, sondern ihre Lieder aus dem Hier und Jetzt des Lebens entworfen sind, Gl??ck und Leid gleicherma??en aufgreifen. Die Botschaft ihrer Lieder ist authentisch, wie das Leben selbst. Und diese Wahrhaftigkeit kommt bei den Menschen an. Bis heute haben die Kastelruther Spatzen mit ihrem ureigenen Musikstil nahezu alles gewonnen, was es in der Musikwelt ihres Genres zu gewinnen gibt. Sie haben f??nfmal die Goldene Stimmgabel sowie mehrere Kronen der Volksmusik erhalten und zudem den Grand Prix der Volksmusik gewonnen. Diese drei Award-Shows selbst sind mittlerweile TVGeschichte. Aber die Kastelruther Spatzen stehen nach wie vor in alter Frische am Zenit des Erfolgs. Ihre 13 (!) Echos sind l??ngst im gro??en Buch der Branchengeschichte eingetragen und gelten in Deutschland als unverr??ckbares Ma?? der Dinge.36 Jahre Erfolg, 36 Jahre Kontinuit??t! Sie sind die bekanntesten und beliebtesten Botschafter ihrer Heimatregion, des wundersch??nen S??dtirols. Mit ihrem ersten Album ?Viel Spa?? und Freude? begannen sie einst ihren einzigartigen internationalen Karriereweg. Und nomen est omen: Ungebrochen und mehr denn je begeistern sie mit Spa?? und Freude auch heute ihre einmalige und gro??e Fangemeinde. Tournee und Album ?Feuervogel flieg? b??ndeln gekonnt die St??rken der Band: Ergreifende Geschichten und tiefgr??ndige Erz??hlungen gefasst in emotionale, schicksalhafte Songs ebenso wie die Liebe zu ihrer Heimat S??dtirol und das Heimkommen nach einer gro??en Tournee, zum Ausdruck gebracht in fr??hlichen oder liebevoll sanften Titeln. Im besten Spatzen-Stil darf man sich diesmal auch auf Schlager freuen, der das Publikum in jedem Fall von den St??hlen hebt.Die sieben Vollblutmusiker aus den Dolomiten bald wieder live auf Deutschlands B??hnen! Jede Menge Lebensfreude und bewegende Momente. Das ganze ?Spatzen-Universum? an einem Abend ? glaubhaft, aufrichtig, stark. Sie lassen den Feuervogel fliegen!",
            "startDateTime": "10/22/21 19:30",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863779053&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/LbUfAGo2.jpeg"
        },
        {
            "id": "e27",
            "title": "Simple Minds - Celebrating 40 Years of Hits Live",
            "description": "Foto: Dean Chalkley40 Years Of Hits Simple Minds auf ausgiebiger Deutschlandtour im Fr??hjahr 2020 Die  Simple  Minds  sind  musikalische  Pioniere  ? und  das  seit  40  Jahren.  Sie  haben  die  Post-Punk-??ra bestimmend gepr??gt, als der w??tende Krach    von    1977    in    tausenderlei    Sounds zersplitterte.  Sie  haben  den  stylischen  Art-Rock von  David  Bowie  genauso  organisch  in  ihre Songs   ??bernommen   wie   das   elektronische Disco-Geplucker    von    Donna    Summer.    Sie haben  sich  und  ihre  Musik  vielfach  gedreht, verwandelt   und   erneuert.   Die   Simple   Minds wurden   zu   einer   der   gr????ten   Bands   des Planeten,  standen  mit  ihrem  ??berhit  ?Don?t  You (Forget About Me)? an der Spitze der US-Charts und  mit  f??nf  ihrer  Alben  in  Gro??britannien  auf Platz eins. Sie haben 60 Millionen Platten verkauft und die gr????ten Stadien der Welt bis auf den letzten Platz ausverkauft. Oder um es mit den Worten von Jim Kerr zu sagen: ?Ich bin immer  sehr  stolz,  wenn  die  Leute  fragen:  Welche  Simple  Minds  meinst  du?  Die Avantgarde, die Art-Rocker, die Popband, das Ambient-Projekt, die Instrumentalgruppe,  die  politischen  Texter,  die  Folker,  die  Stadionrocker?  All  diese Stile gleichzeitig zu beherrschen, war immer die Quintessenz der Simple Minds und etwas    ganz    Besonderes.?    Das    war    und    ist    der    Motor, der    die    beiden Gr??ndungsmitglieder  und  Kindheitsfreunde,  S??nger  Jim  Kerr  und  Gitarrist  Charlie Burchill, schon immer und bis heute, nach 40 gemeinsamen Jahren, antreibt. Dieses Jubil??um wollen die Simple Minds angemessen feiern. Zum einen erscheinen Anfang November  2019  das  Best-of-Album  ?40:  The  Best  Of  ? 1979-2019?  und  bereits Anfang Oktober das monstr??se Vier-CD-Live-Album ?Live In The City Of Angels? mit Songs aus allen Dekaden, mit allen gro??en Hits und selten gespielten St??cken ? zur Erinnerung: die erste und  ??beraus  erfolgreiche Live-Platte  hie??  ?Live  In  The  City  Of Light?. Zum anderen gehen die Simple Minds auf eine riesige Welttournee, die sie f??r sage und  schreibe  15  Termine  auch  zu  uns  nach  Deutschland  f??hrt.  Auch  wenn  dabei Musik  aus allen  Teilen  der  langen und  sehr erfolgreichen Karriere gespielt  wird  und mit  Sicherheit  alle  Fan-Favoriten  dabei  sein  werden,  legen  Kerr  und  Burchill  doch gro??en Wert darauf, auch heute noch kreativ zu sein. ?Wir sind keine Rockband, die sich  gleich  bleibt.  Andererseits  haben  wir  nicht  das Line-up  gewechselt,  um  cool  zu wirken?,  sagt  Kerr.  ?Wir  machen  das,  weil  es  gro??artig  ist,  so  viele  unglaubliche Musiker an Bord zu haben. Ich bin sehr dankbar f??r das, was wir erreicht haben, aber ich  bin  auch  immer  noch  verr??ckt  genug,  zu  glauben,  dass  wir  immer  neue  H??hen erreichen  k??nnen.  Darum  machen  wir  das,  was  wir  tun:  Songs  schreiben,  Platten aufnehmen,  live  spielen.?  Und  Burchill  erg??nzt:  ?Es  gab  viele  Inkarnationen  der Simple  Minds,  aber  wir  haben  immer  unsere  Identit??t  bewahrt.  So  ein  Verm??chtnis kann  eine  B??rde  sein,  wenn  man  das  zul??sst.  Aber  f??r  uns  war  es  ein  stetiger Antrieb.? Wenn zwei Musiker nach all den erfolgreichen Jahren immer noch so hei?? darauf sind, live zu spielen, wenn sie es schaffen, sich immer wieder neu zu erfinden wie  zuletzt  mit  der  gefeierten  Platte  ?Walk  Between  Worlds?,  und  wenn  eine  Band immer  noch  so  ??berzeugend  gute  Konzerte  spielt  wie die  Simple  Minds,  kann  man ihnen  nichts  anderes  w??nschen  als:  Alles  Gute  zu  40  Jahren  und  viele,  viele wunderbare Auftritte im kommenden Fr??hjahr!",
            "startDateTime": "3/17/22 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863780707&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/wPtionRE.jpeg"
        },
        {
            "id": "e28",
            "title": "Hundreds - The Current Tour",
            "description": "HUNDREDS kommen 2020 auf die Club-B??hnen zur??ckNach ihrer bereits ausverkauften Orchester-Show in der Elbphilharmonie anl??sslich des 10-j??hrigen Bandjubil??ums, kehren HUNDREDS im Fr??hling 2020 mit lauteren T??nen, einer beeindruckenden Performance und Lichtshow zur??ck zu ihren Wurzeln und spielen ihre gro??e THE CURRENT Tour.Die Geschwister Eva und Philipp Milner z??hlen zu den gro??en Erlebnissen elektronischer Popmusik. Neben einem musikalischen R??ckblick auf die letzte Dekade werden HUNDREDS Songs des neuen Albums, das f??r den Fr??hling 2020 angek??ndigt ist, pr??sentieren.Das Publikum erwarten behutsam arrangierte und mit gro??er Begeisterung vorgetragene Elektropop-Songs, die in ihrer melancholischen Ausstrahlung einzigartige und euphorisierende Abende versprechen.",
            "startDateTime": "5/10/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863780763&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/dAFbFr4Z.jpeg"
        },
        {
            "id": "e29",
            "title": "The Kilkennys - World Tour 2020",
            "description": "Die Vier Mann Frischzellen Kur des Irish Folk auch 2020 auf Deutschlandtournee! Seit ??ber zwei Jahrzehnten sorgt die Band aus dem irischen Kilkenny international f??r frischen Wind in der Irish Folk Szene. Ob Eigenkomposition oder Neuinterpretation alter Klassiker ?im Zusammenspiel der vier Schulfreunde entsteht regelm????ig eine besondere Magie, die auch ein junges Publikum f??r die traditionelle irische Musik begeistert. Sind Robbie Campion (git, bj, mand, voc), Davey Cashin (git, bj, mand, whistle, voc), Tommy Mackey (b, git, voc) und Mick Martin (bodhran, whistle, uillean pipes, git, voc) alias The Kilkennys die rechtm????igen Nachfolger legend??rer Bands wie The Dubliners oder The Chieftains? Eine klare ?Ja/Nein? Antwort ist hier nicht so einfach, denn neben der Gemeinsamkeit der weltweiten Verbreitung traditioneller irischer Folk- und Songwriterkunst verf??gen die Kilkennys n??mlich ??ber ein Alleinstellungsmerkmal, das die genannten Bands nicht hatten: Den vier Musikern aus dem Ort Kilkenny gelingt es, die Musiktradition ihrer Heimat um eine moderne Note zu erweitern, die die auch ein junges Publikum, das mit Irish Folk bisher wenig anfangen konnte, begeistert.Dass dies gelingt, liegt nicht zuletzt an ihren mitrei??enden Konzerten, die jeden Konzertsaal im Handumdrehen in einen Irish Pub verwandeln und das gesamte Publikum zum Mitsingen bringen ? und das schlie??t selbst die zur??ckhaltendste Konzertbesucher*in mit ein! Jedes Bandmitglied beherrscht mehrere Instrumente, darunter traditionell irische wie den irischen Dudelsack Uillean Pipes oder die Rahmentrommel Bodhran, meisterhaft und bringt sein K??nnen songdienlich ein. Unvergessen auch: Das absolute Markenzeichen der Kilkennys ? der gemeinsame Harmoniegesang, der bei absolut jedem im Publikum f??r G??nsehautmomente sorgt.Deshalb ist es nicht weiter verwunderlich, dass The Kilkennys die meiste Zeit des Jahres auf Tournee sind: Ob in Europa, den USA oder neuerdings Indien, wo sie als einer der erfolgreichsten tourenden irischen Act aller Zeiten gelten und ihre Konzerte regelm????ig kurz nach Ank??ndigung ausverkauft sind. Eines der allerersten L??nder, in denen die Band ausserhalb ihrer Heimat getourt ist und Erfolge feiern konnte, ist Deutschland. Kein Wunder also, dass es zwischen den deutschen Fans und den Kilkennys eine besondere Verbindung gibt, die bis heute anh??lt. Deshalb ist die Freude auf beiden Seiten gro??, wenn die Kilkennys im Oktober 2020 f??r 13 Konzerte durch ihre ?zweite Heimat? reisen!Foto: Mark Zanderink",
            "startDateTime": "10/2/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863780777&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/plLHMeNW.jpeg"
        },
        {
            "id": "e30",
            "title": "BHZ - Tour 2021",
            "description": "F??r alle, die dabei waren. Geschichte wurde geschrieben. F??r alle, die nicht dabei waren. Geschichte wird geschrieben. BHZ Tour 2020. BHZ Live bedeutet: Moshpits zur Einlass Mucke vor der Show. Aufw??rmen f??r den Abriss. Die Clubs und Hallen gl??hen. Liebe von der Crowd, f??r die Crowd. Gang. Die Day-Ones haben das kommen sehen. Alle anderen begreifen es sp??testens jetzt. Wenn ihr am n??chsten Tag dann ohne Stimme aufwacht, sp??rt ihr den Nachklang des Abends: Irgendwas zwischen der liebevollsten Umarmung und einem Tritt in die Fresse. BHZ auf Tour. 2020. Wir sehen uns. Foto: Louise Amelie M??ller und Aljaz Fuis",
            "startDateTime": "3/8/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863780909&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/vbClW7QJ.jpeg"
        },
        {
            "id": "e31",
            "title": "ORSO - Hooray for Hollywood - Filmmusik ? Musik im Film",
            "description": "ACHTUNG: aufgrund der Corona-Pandemie wird das Konzert auf einen noch unbestimmten Termin verschoben! Sobald wir mehr wissen, werden wir unsere Kunden informieren! Filmmusikkonzert des ORSOphilharmonic unter der Leitung von Wolfgang RoeseRund 200 Mitwirkende pr??sentieren unter dem Motto ?Filmmusik - Musik im Film? weltber??hmte Melodien sowie ??berraschendes und Unbekanntes aus fast 100 Jahren Filmschaffen. Von aktuellen Blockbustern ??ber Filmklassiker bis hin zu klassischen Werken, die durch das Medium Film erst bekannter wurden, reicht das Spektrum.Neben der orchestralen Farbenpracht eines John Williams stehen zarte Chorkl??nge aus ?Les Choristes?. Hans Zimmers Piraten stehen Hanns Eislers Arbeitermillieu gegen??ber. Borodin und Barber treffen Spiderman und James Bond, w??hrend Alice im Wunderland Figuren aus Star Wars und Harry Potter begegnet.Erleben Sie das Hollywood der 30er und 40er Jahre bis heute in einem vielf??ltigen Konzertprogramm.Mehr Info und H??rbeispiele unter www.fimu.orso.co",
            "startDateTime": "10/24/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863785567&a=774719&m=13738"
        },
        {
            "id": "e32",
            "title": "MUNDOLOGIA: Terra ? Ein Portr??t der Erde",
            "description": "Michael Martin pr??sentiert sein neues Fotoprojekt: TERRA ? Ein Portr??t der Erde. Michael Martin unternimmt hierf??r in den Jahren 2017 bis 2020 mehr als drei??ig Reisen und Expeditionen in weltweit ausgew??hlte Gebiete, welche die Vielfalt der Landschaften und Lebensformen auf der Erde zeigen. Nat??rlich stehen wieder W??sten und Eisregionen auf dem Reiseplan, aber Michael Martin ist auch in Regenw??ldern, auf Vulkanen, in Steppen und Savannen sowie auf Ozeanen unterwegs. Sein Ziel ist ein geographisches Portrait des Planeten Erde, das nicht nur die Erdgeschichte, sondern auch Zukunftsfragen einschlie??t. Der Kartenvorverkauf hat begonnen.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "2/3/23 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863789321&a=774719&m=13738"
        },
        {
            "id": "e33",
            "title": "Rolando Villaz??n & Xavier de Maistre - Serenata latina",
            "description": "Infolge der gesetzlichen Verordnungen zur Eind??mmung der Corona-Pandemie und der damit einhergehenden unsicheren Planungssituation kann das Albert-Sonderkonzert mit Rolando Villaz??n & Xavier de Maistre am 2. Juli 2021 im Konzerthaus Freiburg leider nicht stattfinden.Wir freuen uns, dass es uns in Zusammenarbeit mit allen Beteiligten gelungen ist, das Konzert erneut zu verlegen. Neuer Konzerttermin ist nun Samstag, der 19. M??rz 2022 um 18 Uhr im Konzerthaus Freiburg.Ihre Eintrittskarten behalten f??r den neuen Konzerttermin ihre G??ltigkeit und m??ssen nicht eingetauscht werden. Bringen Sie Ihre Karten einfach zum neuen Konzerttermin mit.Sollten Sie den neuen Konzerttermin nicht wahrnehmen k??nnen, k??nnen Sie Ihre Eintrittskarten an der Vorverkaufsstelle, an der sie erworben wurden, zur??ckgeben. Aufgrund der aktuellen Situation sind verschiedene Vorverkaufsstellen nur eingeschr??nkt besetzt und erreichbar. Es kann daher bei der R??ckerstattung zu Verz??gerungen kommen.Hier die Kontaktdaten der wichtigsten Vorverkaufsstellen:BZ-Karten-Service, Tel. 0761 ? 496-8888, Email: info@bz-karten-service.deBuchhandlung Rombach, Tel. 0761 ? 4500-2432, Email: klassik@rombach.deReservix, Tel. 0761 ? 88788-11, Email: tickets@reservix.deAD ticket, Tel. 0180 ? 6050400Sollten Sie Ihre Karten direkt bei den Albert Konzerten erworben haben, senden Sie Ihre Karten bitte zusammen mit Angabe Ihrer Kontoverbindung an das Kartenb??ro der Albert Konzerte:Albert Konzerte GmbH, Postfach 1349, 79013 FreiburgF??r R??ckfragen steht Ihnen das Kartenb??ro der Albert Konzerte gerne zur Verf??gung:Tel. 0761 ? 289442, Email: info@albert-konzerte.de-----------------------------------------------------------------------------------------Startenor tourt erstmals mit Harfenist Xavier de MaistreNur drei Konzerte in DeutschlandDer aus Mexiko stammende Operns??nger Rolando Villaz??n wartet im Herbst mit einem ganz besonderen Tournee-Programm auf: Erstmals in seiner Karriere ??berhaupt haben Klassikfans die Chance, ein lateinamerikanisches Programm zu erleben, bei dem er vom weltber??hmten Harfenisten Xavier de Maistre begleitet wird. Musikliebhaber d??rfen sich auf das kongeniale Zusammenspiel zweier Weltstars freuen: Sie werden eine ?Serenata latina? mit St??cken von Villa-Lobos, Ginastera, Silvio Rodriguez, Maria Grever, Guastavino u.a. zum Besten geben.Mit seinem allseits bekannten und beliebten Temperament und seinem mexikanischen Herzblut wird Rolando Villaz??n bei seinem Liederabend pure Emotion und musikalischen Hochgenuss erzeugen. Die ausgew??hlten St??cke von einigen der beliebtesten Komponisten Lateinamerikas wurden eigens f??r das Programm vom Tenor und dem Weltstar an der Harfe, Xavier de Maistre, neu bearbeitet und arrangiert. Die Ver??ffentlichung des dazugeh??rigen Albums ist f??r den Sommer 2020 geplant. Der musikalische Dialog der beiden Ausnahmek??nstler verspricht ganz viel Coraz??n und technische Raffinesse.       Rolando Villaz??n ist ein Multigenie und es gibt kaum etwas, was er nicht kann. Neben seinen weltweiten Auftritten als einer der begnadetsten Opernten??re unserer Zeit widmet sich der Publikumsliebling zahllosen weiteren Leidenschaften: Er f??hrt Regie, er moderiert, er schreibt B??cher, er zeichnet... Bei allen Begabungen ist er jedoch der Musik stets treu geblieben und hat seit seinem triumphalen Deb??t bei den Salzburger Festspielen 2005 an der Seite von Anna Netrebko Standing Ovations in den bedeutendsten Opernh??usern der Welt geerntet und unz??hlige Auszeichnungen entgegengenommen. 2017 wurde er zum Mozart-Botschafter der Internationalen Stiftung Mozarteum Salzburg sowie zum Intendant der Mozart-Woche ernannt. Karitativ engagiert er sich seit vielen Jahren als Botschafter der RED NOSES Clowndoctors International. Im Dezember inszeniert er an der Deutschen Oper am Rhein D??sseldorf ?I puritani? von Vincenzo Bellini.Der in Toulon geborene Xavier de Maistre studierte das Harfenspiel am heimischen Konservatorium und verfeinerte seine Kunst im Anschluss bei Catherine Michel und Jacqueline Borot in Paris. 1998 wurde ihm die Ehre zuteil, als erster franz??sischer Musiker bei den Wiener Philharmonikern zu agieren. Als Solist spielte er bereits unter Sir Simon Rattle, Sir Andr?? Previn, Riccardo Muti oder Daniele Gatti. Auf seinem aktuellen Album ?Serenata Espanola? arbeitete er mit der legend??ren Kastagnetten-Spielerin Lucero Tena. ?Die Harfe klingt mal sph??risch wie eine Glasharmonika, mal kehlig wie eine spanische Laute.?, so beschreibt Die Zeit de Maistres Harfenspiel. Bei den Albert Konzerten gab Xavier de Maistre im M??rz 2019 ein gefeiertes Deb??t mit der Filarm??nica Joven de Colombia unter der Leitung von Andr??s Orozco-Estrada.",
            "startDateTime": "3/19/22 18:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863790671&a=774719&m=13738"
        },
        {
            "id": "e34",
            "title": "Rabih Abou Khalil - Live 2022",
            "description": "Seine CDs sind hochkar??tige Highlights in den Sammlungen zahlreicher Musikliebhaber, wahre Stilikonen ? musikalischer wie auch optischer Natur! Seine Konzerte sind gro??artige, hochvirtuose, weltmusikalische H??hepunkte zahlloser Festivals und Konzerttourneen. Soeben erschien, nach l??ngerer Wartezeit, seine CD ?The Flood and the Fate of the Fish? bei enja records. Rabih Abou - Khalil ist ein Grenzg??nger zwischen den Welten der von traditioneller arabischer Musik und europ??ischer Klassik bis hin zum offenen Jazz. Gleich einem Wanderer zwischen den Kulturen verbindet der im Libanon geborene und nach langem Aufenthalt in Deutschland mittlerweile in Frankreich lebende Oud-Virtuose und Komponist, arabische, europ??ische und amerikanische Musik zu einer hochintelligenten Melange, fernab jeglicher Worldmusic-Moden. Unvoreingenommen, mit wachem Geist, hoher spielerischer und kompositorischer Kompetenz und einer guten Portion Humor gelingt es ihm auf au??ergew??hnliche Weise, die oftmals kontr??ren Welten miteinander zu verschmelzen. So scharte er auch gro??e Namen aus der Welt des Jazz wie Charlie Mariano, Kenny Wheeler oder Joachim K??hn um sich, aber auch Klassiker: das Ensemble Modern, das Balanescu Quartett, das Kronos Quartett oder das BBC Symphony Orchestra. Seine Arbeit ist so erfolgreich, dass ihm in einem Jahr gleich f??nfmal der Jazz Award verliehen wurde; 2002 erhielt er eine Ehrenurkunde zum Preis der deutschen Schallplattenkritik f??r sein Gesamtwerk.  Seine komplexen Kompositionen vereinen arabische Metren und Tonskalen wie auch ausgepr??gte Improvisationen. Das Ergebnis ist eine frische Musik, faszinierend komplex, mitrei??end virtuos, hochsinnlich. Kongeniale Begleiter und jahrelange Weggef??hrten sind der US-Amerikaner Jarrod Cagwin an Drums und Percussion sowie der italienische Akkordeonist Luciano Biondini.",
            "startDateTime": "1/30/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863792143&a=774719&m=13738"
        },
        {
            "id": "e35",
            "title": "Marc Amacher & Band - GrandHotel-Tour 2022",
            "description": "Roadhouse. Laut W??rterbuch steht hinter dem Begriff schlicht ?ein Wirtshaus oder eine Rastst??tte an der Landstra??e?. Doch f??r Bluesfans hat das Wort eine tiefere Bedeutung: Darunter versteht man eine eher rowdyhaft Spelunke, in der wild getanzt, ausgiebig gebechert und laut und heftig musiziert wird. Mit seiner neuen LP Roadhouse nimmt Bluesrocker Marc Amacher den H??rer mit in diese hemmungslose Welt, wo alles erlaubt ist und Regeln nur da sind, um gebrochen zu werden. Das h??chst explosive Album ist fest in der Bluestradition verankert, steht aber gleichzeitig f??r einen Musiker, der gerne die Grenzen des Genres auslotet.Marc Amacher begeisterte nicht nur Publikum und Jury von ??The Voice of Germany?? im Jahre 2016: Seine rauchige Stimme f??llt immer und ??berall auf. Einordnen l??sst er sich nicht gerne ? er macht spontan, emotional, dynamisch Musik. Der Autodidakt bekam seine erste Gitarre von seinem Gro??vater, die seither zu seinem st??ndigen Wegbegleiter wurde. Marc??s musikalische Einfl??sse reichen von John Lee Hooker und R.L. Burnside ??ber Jack White bis hin zu Mot??rhead oder AC/DCAmacher macht nicht Musik, er ist Musik, lebt Musik ? mit Leib und Seele. Der echte Blues, der originale Boogie-Woogie und der authentische Rock n?? Roll gehen mit seiner rauchiger Stimme direkt unter die Haut. So verwundert es kaum, dass ihm und seiner Band die Ehre zu Teil wurde, im Jahre 2019 drei Arenen- Shows in Berlin, Mannheim und Wien f??r `Mister Slowhand` Eric Clapton er??ffnen zu d??rfen und f??r sein im April 2019 erschienenes Studioalbum `Roadhouse` (Jazzhaus Records/ In-Akustik) den Preis der deutschen Schallplattenkritik in der Sparte `Blues` entgegennehmen zu d??rfen. ?Amacher?, das ist Musik aus Leidenschaft und eine mitrei??ende Show ? faszinierend und immer wieder ??berraschend.Ganz ungef??hrlich ist der Genuss nicht: Er macht s??chtig.",
            "startDateTime": "5/14/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863792559&a=774719&m=13738"
        },
        {
            "id": "e36",
            "title": "High South - peace, love & harmony  - Tour 2020",
            "description": "Ein Sound, der nach Sonne, Freiheit, der American Westcoast und wie kaum ein anderer nach den gro??en Vorbildern der Band klingt: legend??re 60s & 70s Harmony Vocal Groups wie THE EAGLES, THE BYRDS, AMERICA oder CROSBY,STILLS,NASH AND YOUNG. Die Magie und Zeitlosigkeit, die in den Songs aus diesem Jahrzehnt steckt, wurde nie durch irgendwelche Modeerscheinungen zerrieben und HIGH SOUTH sind genau diejenige Band, die den Spirit dieser Zeit in die Zukunft f??hren wird.Das Deb??talbum ?NOW? schaffte es in einigen europ??ischen L??ndern auf Anhieb in die Top 10 der Album-Charts und auch das zweite, von Chuck Ainlay, seines Zeichens u.a. Produzent von Dire Straits Mastermind Mark Knopfler, geschaffene Werk ?HIGH SOUTH? schaffte es wieder in die Top 10 und Top 20.F??r das am 6. M??rz 2020 angesetzte dritte Album ?PEACE, LOVE & HARMONY? kamen Produzenten- und Songwriterlegenden Stan Lynch und Josh Leo an Bord, um den Sound echter handmade american music noch authentischer umzusetzen. Zahlreiche namhafte G??ste von Bands wie Tom Petty and the Heartbreakers, The Doobie Brothers, The Allmann Brothers Band oder The Mavericks wirkten bei den Aufnahmen mit.Die gleichnamige Tour zum Album wird das Publikum wieder auf eine Zeitreise f??hren, in eine musikalische ??ra, f??r die sich heute mehr Menschen begeistern, als jemals zuvor...",
            "startDateTime": "10/11/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863793055&a=774719&m=13738"
        },
        {
            "id": "e37",
            "title": "Umse - Guck ma einer an - Tour",
            "description": "Hip-Hop-Tr??ume werden jetzt wahr. Nach Durch die Wolkendecke (2018) meldet sich Umse mit einem besonderen Album zur??ck. Es ist alles wie gehabt und doch v??llig ver??ndert auf ?Uno?, das in G??nze von der US-Beatmaker-Legende Nottz produziert wurde. Diese transatlantische Kollabo l??sst Umses Flow Fl??gel wachsen, die klassischen, ungeschliffenen Sample-Beats von Nottz lassen ihn noch sch??rfer auf den Punkt kommen. Zusammen schalten die beiden alle Fragen von Zeit, Ort und Relevanz aus und machen eine perfekte Hip-Hop-Platte ? der alten Schule, wenn man so will. ?Uno? ist ein Statement f??r diesen ewig g??ltigen Sound, f??r das Rap-Handwerk und eine k??nstlerische Haltung zwischen Selbstvertrauen und Durchhalteparolen. Nur wenn du dir in diesem Spiel selbst treu bleibst, tun es die anderen auch.",
            "startDateTime": "3/26/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863793915&a=774719&m=13738"
        },
        {
            "id": "e38",
            "title": "Patricia Kelly - One More Year Tour 2021",
            "description": "2017 kommt The Kelly Family wieder zusammen und feiert ein riesiges Comeback. Das neue Album ?We Got Love? schie??t direkt auf Platz 1 und erreicht in Deutschland und anderen europ??ischen L??ndern dreifach Platin. Bisher verkaufte es sich 700.000 Mall. Die ersten Arena Konzerte in der Dortmunder Westfalenhalle sind innerhalb weniger Minuten ausverkauft. Die darauffolgende ?We Got Love? - Arena Tour ist ebenfalls ausverkauft und mehr als 400.000 Menschen in 7 L??ndern haben The Kelly Family live gesehen. The Kelly Family ist gr????er als jemals zuvor und die Saga geht weiter. Eine weitere Arena Tour und Open Airs folgen 2019/2020 mit 49 Konzerten in 7 L??ndern: Deutschland, Schweiz, ??sterreich, Polen, Tschechische Republik, Niederlande und Belgien. Nun geht Sie mit Ihren eigenen Album ?One More Year? auf Tour. Gleichnamiges Album wird am 6. M??rz 2020 ver??ffentlicht.",
            "startDateTime": "10/18/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863794923&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/abXlpt02.jpeg"
        },
        {
            "id": "e39",
            "title": "SWR1 POP & POESIE in concert - Freiburg",
            "startDateTime": "10/21/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863795345&a=774719&m=13738"
        },
        {
            "id": "e40",
            "title": "Henrik Freischlader Band - MISSING PIECES TOUR 2020",
            "description": "Mit einem vielversprechenden neuen Studio-Album geht die Henrik Freischlader Band im Herbst 2020 auf Tour und freut sich darauf, ??berall dort zu spielen, wo handgemachte Musik noch gefragt ist. Abseits jeglicher Inszenierungen und Showelemente darf sich das Publikum auf eine Band freuen, die jeden Abend musikalisch neu und anders gestalten kann, und die Tradition des Blues durch die Flexibilit??t jedes Einzelnen sensibel in die heutige Zeit ??berf??hrt. Henrik Freischlader hat sich in den vergangenen 15 Jahren seinen Platz in der Bluesszene erspielt. Mit 9 Studio- und 6 Livealben, gemeinsamen Auftritten mit BB King, Gary Moore, Peter Green und Johnny Winter, sowie unz??hligen Konzerten in kleinen und gro??en Clubs, hat sich der Autodidakt seinem Publikum vorgestellt und freut sich heute ??ber eine treue Fangemeinde. Moritz Meinsch??fer (Schlagzeug), Armin Alic (Bass), Roman Babik (Hammond Orgel) und Marco Z??gner (Saxophon) komplettieren seit zwei Jahren eine Band, die sich auch abseits der B??hne als eine Gemeinschaft versteht. Die Freude am Zusammenspiel, der Spa?? an Dynamik und Improvisation und ganz besonders die Liebe zum kleinsten Detail zeichnen die f??nf Musiker aus. Die rockige Ausrichtung fr??herer Tage trifft auf moderne und mitrei??ende Grooves und leidenschaftliche Soloeinlagen der einzelnen Musiker. ?Wenn eine Band es schafft, 20 Minuten lang bei Zimmerlautst??rke ??ber ein Drei-Ton-Riff so intensiv zu improvisieren, dass nicht eine Sekunde Langeweile aufkommt und das Publikum so mucksm??uschenstill zuh??rt, dass man eine Gitarrensaite h??tte fallen h??ren k??nnen ? dann ist das gro??e Kunst.",
            "startDateTime": "11/20/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863796933&a=774719&m=13738"
        },
        {
            "id": "e41",
            "title": "SDP - Die Unendlichste Tour 2022",
            "description": "Die Unendlichste Tour 2019Zu ihrer letzten Tour pilgerten insgesamt mehr als 130.000 Fans, die Jubil??umsShow in der Berliner Wuhlheide im August 2019 mit 17.000 Besuchern war nach nur 20 Tagen restlos ausverkauft. Was lang ersehnt wurde, ist nun endlich offiziell: SDP gehen 2019 mit neuem Album auf Tour! Mit ??ber 350 Mio. Views auf YouTube, den unz??hligen Headliner-Slots auf allen gro??en Festivals und ihrem Status als eine der erfolgreichsten deutschen Bands im Streaming-Bereich ist klar, dass es bei SDP aktuell nur einen Weg gibt: steil nach oben. In der hiesigen Medienlandschaft bleiben Vincent und Dag dabei, zum Teil ganz bewusst, weitestgehend unter dem Radar. So werden die Jungs - vor allem in Anbetracht des mittlerweile ??berw??ltigenden Erfolges - ihrem Titel als ?Die Bekannteste Unbekannte Band der Welt? mehr als gerecht. Kein Wunder also, dass die Spannung auf das f??r den 1. M??rz 2019 angek??ndigte Album der Westberliner Kultband unaufhaltsam steigt! Auch auf ?Die Unendlichste Geschichte? ? dem 9. Studioalbum in 20 Jahren Bandgeschichte - bleiben SDP sich treu: ?Wir versuchen immer wieder Neues auszuprobieren. Sowohl von den Themen der Songs her, den stilistischen Mischungen und Br??chen, aber auch hinsichtlich des Klanges unserer Stimmen. Aber trotzdem haben wir anscheinend einen eigenen Stil entwickelt und k??nnen gar nicht anders, als ein richtiges SDP-Album zu machen.? Keine andere deutsche Band schafft eine ??hnlich schamlose Fusion der Genres. Die aberwitzige musikalische Mischung aus ruhigeren und emotionalen Liedern, knallbunten Motivationssongs und harten Rocksongs gibt es 2019 dann endlich auch wieder live!",
            "startDateTime": "5/26/22 19:30",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863798633&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/Pv18hXLQ.jpeg"
        },
        {
            "id": "e42",
            "title": "Richterkabarett - In dubio prosecco!",
            "description": "Das Richterkabarett vermittelt Ihnen seine Sicht auf die Welt der Justiz und die restliche Welt nicht durch ??bertreibung, sondern durch Untertreibung. Was bleibt ihm auch ??brig, wenn - richterlicher Durchschnitt das Ma?? aller Dinge ist,- Fl??chtlinge entweder im Mittelmeer oder im Paragraphen-Meer untergehen,- Politiker/innen in Zwangshaft kommen sollen  und ? au??er Erdogan - ??belst beschimpft werden d??rfen, - Kopft??cher mit Kreuzen bek??mpft werden,- 90-j??hrige ehemalige KZ-W??chter vor das Jugendgericht kommen, - Heimatgef??hle nur noch Rechtsradikalen vorbehalten sind und - jedes dumme Volk sich f??r das Volk h??lt?Die vom K??lner Theaterregisseur Janosch Roloff betreuten Szenen, Glossen und Ges??nge zeigen es auf: Richter sind auch nur Unmenschen.Nach Gastspielen zuletzt in Koblenz, M??nchen, Mannheim, Leipzig, Frankfurt, Darmstadt und D??sseldorf gastieren sie 2020 in Weimar, Freiburg und Hamburg. Dabei gibt es wieder Neue und Neues aus der Anstalt des Rechts, dem Land der Richter und Blender. Bei diesem Richtfest gilt nat??rlich: In dubio prosecco!",
            "startDateTime": "9/24/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863798755&a=774719&m=13738"
        },
        {
            "id": "e43",
            "title": "Fischer-Z - Swimming In Thunderstorms - Tour 2020",
            "description": "John Watts ist schon seit 42 Jahren mit seiner Band FISCHER-Z im Gesch??ft. In seiner erfolgreichen Karriere hat der Rockmusiker 20 Alben ver??ffentlicht und insgesamt 2 Mio. Alben verkauft. Dabei waren K??nstler wie Peter Gabriel, Steve Cropper und Dexy?s Midnight Runners? Brass Section Feature Artists. FISCHER-Z kann auf ??ber 3.000 Konzerte weltweit zur??ckblicken und ist mit James Brown in Ost-Berlin, mit The Police und den Dire Straits auf Tour aufgetreten. Sogar Bob Marley begleitete er auf dessen letzter europ??ischer Festival-Tour. In den letzten Jahren hat sich der musikalisch vielseitige John Watts au??erdem einen Ruf als MultimediaK??nstler zugelegt und schreibt auch Theaterst??cke und Gedichte. Dabei ist all seinen beeindruckenden und facettenreichen Werken eine Begeisterung, Leidenschaft und Menschlichkeit gemeinsam. Watts? verschmitzte Kreativit??t l??sst sich bereits am Bandnamen ablesen, ein Wortspiel mit dem Ausdruck ?fish?s head? (Fischkopf): mit britischen Akzent ausgesprochen ergibt sich klanglich ?Fischer-Z?. Fish?s Head war auch der Name des f??nften Albums der Formation. Auch f??r die Entstehung seiner Alben greift John Watts, der sich als junger K??nstler mit FISCHER-Z durch die Punk Clubs gerockt hat, zu kreativen Mitteln. F??r das Album ?It has to be? sprach er mit Fremden in zehn europ??ischen L??ndern und schrieb f??r jeden Menschen und seine Geschichte einen Song. F??r ?Ether Music & Film? nahm er, ausger??stet nur mit seinem Laptop, Songs mit Musikern auf Stra??en und in ihren Wohnungen auf. Das Jahr 2017 war ein besonders intensives f??r FISCHER-Z. Die Band feierte das 40. Jubil??um der ersten Show, die Ver??ffentlichung des 20. Studioalbums ?Building Bridges? und kehrte zu den Venues von fr??her zur??ck: gro??e Locations ausverkauft, erneute Auftritte auf den gro??en Festivals der Welt. Mit dem Launch der innovativen F-Card, einer kreditkartengro??en USB-Chipkarte, die unver??ffentlichte Tracks und Fanclub-Vorteile bereith??lt, beschreitet FISCHER-Z zudem neues Terrain im Marketing. 2019 feiern FISCHER-Z nun mit der Ver??ffentlichung von ?Swimming in Thunderstorms? am 30. August 2019 ihr Jubil??um ?40 Jahre erfolgreiche Albumgeschichte?. Das neue Album ist pers??nlich, politisch, leidenschaftlich ? wie viele seiner Vorg??nger. Die Dekonstruktion der lange etablierten parlamentarischen Demokratie durch Online-Kan??le und -Einfl??sse, die Verschiebung des Verst??ndnisses von Moral, Diplomatie und Anstand im ??ffentlichen Sektor besch??ftigt wohl jeden aufgekl??rten Politikinteressierten. So auch John Watts, der seine Sicht auf die Dinge in einer zeitgem????en Form musikalisch verarbeitet. W??hrend Watts sein Songwriting auf gewohnt h??chstem Niveau und seinen eigenwilligen Beobachtungswitzes beibeh??lt, hat er f??r das neue Album eine Gruppe von Musikern gefunden, die der Breite und Tiefe seiner musikalischen Ideen gerecht werden. Diese neue Formation aus John Watts als S??nger und Gitarrist, Sin Banovic am Schlagzeug, David Purdye am Bass, Adrien Rhodes am Keyboard und Marian Menge an der zweiten Gitarre wird als bleibende neue Band vorgestellt. Support Act auf der Tournee wird der brillante amerikanische Singer-Songwriter Luke Elliot sein.",
            "startDateTime": "10/22/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863799563&a=774719&m=13738"
        },
        {
            "id": "e44",
            "title": "Walter Trout - Survivor Blues ? European Tour 2020",
            "description": "Walter Trout ist wohl das, was man sich unter einem harten Hund vorstellen darf: Der US-Gitarrist mischt seit mehr als einem halben Jahrhundert an vorderster Stelle im Rockzirkus mit, und l??ngst schon gilt er als einer der wichtigsten Blues- und insbesondere Bluesrock-Protagonisten aller Zeiten. Zu einem kaum noch f??r m??glich gehaltenen erneuten k??nstlerischen H??henflug setzte der heute 67-J??hrige an, nachdem er 2014 von einer lebensbedrohlichen Erkrankung genesen und wieder zu Kr??ften gekommen war.Walter Trout hatte unter anderem mit John Lee Hooker, bei Canned Heat und in John Mayalls Band gespielt, bevor er ab 1990 unter eigenem Namen mehr als zwanzig Platten ver??ffentlichte und unerm??dlich tourte. 2014 aber kam die Z??sur: Nachdem ihn lange gesundheitliche Probleme plagten, sah Trout dem Tod ins Auge. Er wurde mit einer unheilbaren Lebererkrankung in eine Spezialklinik in Nebraska eingeliefert, wo ihm eine Organtransplantation das Leben rettete. Weil er nicht ausreichend krankenversichert war, musste die Operation mit einer gro?? angelegten Spendenaktion finanziert werden. Dass dies gelang, erf??llt den Musiker seinen eigenen Worten zufolge bis heute mit unendlicher Dankbarkeit. ?Jetzt bin ich in der Lage, so gut zu spielen wie seit Jahren nicht?, gab er gleich nach seiner Rekonvaleszenz zu Protokoll, ?ich f??hle mich wie neu geboren und kann es kaum erwarten, wieder unterwegs zu sein.?Gesagt, getan ? zur Freude und zum Erstaunen seiner Fans in aller Welt geht es seither in rascher Folge Schlag auf Schlag: Auf das bewegende Comeback-Album ?Battle Scars? (2015) folgten ein hervorragender Konzertmitschnitt namens ?Alive in Amsterdam? (2016) und wenig sp??ter der von Trout mit einem Allstar-Lineup eingespielte und bald nach Erscheinen mit vier ?Blues Rock Album Of The Year? ausgezeichnete Longplayer ?We?re All in This Together? (2017). W??hrend ?We?re All in This Together? noch nachwirkte, machte Trout sich bereits dar??ber Gedanken, wie es anschlie??end weitergehen solllte. Inzwischen ist klar: Er arbeitete am Konzept eines sehr speziellen Blues-Coveralbums. Trout erkl??rt: ?Dabei hatte ich nicht so etwas wie eine Zusammenstellung viel strapazierter Greatest Hits im Kopf. Nein, ich wollte etliche fast in Vergessenheit geratene alte Bluessongs neu aufnehmen, die bisher selten oder noch nie gecovert worden sind. So nahmen die Dinge ihren Lauf.? Was aus diesen ??berlegungen entstanden ist, zeigt sich jetzt auf Walter Trouts neuem Output ?Survivor Blues?. Das Album erschien am 25. Januar 2019 auf CD, digital, sowie als Doppel-LP mit beigelegtem Download-Code bei der Mascot Label Group.?Ich habe gro??en Respekt vor Musikern wie Neil Young oder Bob Dylan, die sich weit aus dem Fenster lehnen und dabei immer wieder mit ??berraschungen aufwarten?, sagt Walter Trout. ?Bei ihnen wei?? man nie so genau, womit sie als n??chstes um die Ecke kommen.? Trout selbst h??lt es gerne ebenso. Ein Dutzend St??cke fanden letztlich den Weg auf ?Survivor Blues?, darunter Titel von Jimmy Dawkins (?Me, My Guitar And The Blues?), Sunnyland Slim (?Be Careful How You Vote?), Otis Rush (?It Takes Time?), Luther Johnson (?Woman Don?t Lie?), J.B. Lenoir (?God?s Word?), Hound Dog Taylor (?Sadie?) und Mississippi Fred McDowell (?Goin? Down To The River?). Dar??ber hinaus zieht Trout wieder einmal vor seinem Freund und Mentor John Mayall den Hut, mit einer Neuinterpretation des Mayall-St??ckes ?Nature?s Disappearing? von dessen 1970 erschienem Album ?USA Union?.Aufgenommen wurde ?Survivor Blues? mit Produzent Eric Corne in Los Angeles, im Studio des fr??heren The-Doors-Gitarristen Robby Krieger, der beim St??ck ?Goin?? Down To The River? einen Gastauftritt hat. Die hier zu h??rende Band setzt sich neben Walter Trout selbst aus Bassist Johnny Griparic, Skip Edwards an den Keyboards und Drummer Michael Leasure zusammen. Erkl??rtes Ziel aller Beteiligten war es, besagte Blues-Traditionals nicht etwa Note f??r Note nachzuspielen, sondern diese g??nzlich neu arrangiert auf ein zeitgem????es Level im unverkennbaren Trout-Stil zu heben. Die Idee f??r den Albumtitel stammt vom Walter Trouts Frau und Managerin Marie ? doppeldeutig spielt er sowohl auf das auf dem Album vertretene Songmaterial als auch auf Trouts pers??nliches Schicksal an, das sich mit viel Gl??ck zum Guten gewendet hat. Walter Trout selbst bringt das Ganze mit einem Augenzwinkern so auf den Punkt: ?Meine Karriere l??uft wie geschmiert, meinen Kindern geht es prima, Marie und ich lieben uns wie am ersten Tag, und mit meiner Gesundheit ist alles in Butter. Alles in allem sieht es ganz so aus, als h??tte ich gerade die beste Zeit meines Lebens.?",
            "startDateTime": "9/14/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863801679&a=774719&m=13738"
        },
        {
            "id": "e45",
            "title": "Die Boogie Woogie Weihnachtsexplosion zum 3. Advent",
            "description": "Thomas Scheytt, Christoph Pfaff, Hiram Mutschler-------------------------------------------------Bitte beachten Sie die Corona-Hinweise unten und die Informationen bei Ihrer Online-Buchung!-------------------------------------------------2016  feierten sie ihr 25-j??hriges Bestehen, seit langem z??hlen sie zur Spitze in der internationalen Blues- & Boogie - Szene: Christoph Pfaff, Thomas Scheytt, Hiram Mutschler und ihre BOOGIE CONNECTION.?Wenn der Boogie nicht in Amerika, sondern im Schwarzwald entstanden w??re, dann st??nde als Geburtsst??tte Freiburg in den Jazzlexika und die Musik w??rde dann so klingen, wie sie die Boogie Connection spielt. Die dreik??pfige Band braut eine hei??e Mischung aus Blues, Boogie, Rhythm`n`Blues und Soul?, schreibt das Jazzpodium. Mit ??ber hundert Konzerten pro Jahr, darunter Auftritten bei nahezu allen bedeutenden Jazzfestivals in Deutschland und im europ??ischen Ausland, geh??ren sie zu den erfolgreichsten Bands, die Freiburg je hervorgebracht hatBOOGIE CONNECTION ?Noch spartanischer geht es nicht: Ein Piano, eine Gitarre und ein Schlagzeug ? mehr braucht es nicht, um die Fans binnen k??rzester Zeit von ihren St??hlen zu holen.? (S??dkurier)?Eine hei??e Mischung aus Blues, Soul, Boogie-Woogie und totalem Rhythm`n`Blues, wie man sie einzigartiger Weise nur mit der Boogie Connection aus Freiburg/Breisgau erleben kann. In diesem Musikgenre sind Christoph Pfaff, Thomas Scheytt und Hiram Mutschler nach wie vor die unerreichten K??nige der internationalen Live-Jazz-Szene.? (Schaffhauser Nachrichten)Besetzung: Christoph Pfaff: Gesang, Gitarre, MundharmonikaThomas Scheytt: PianoHiram Mutschler: Schlagzeug--------------------------------------------------------------------------------------------------------------------------------------------------------Aktuelle Hinweise:Die Bestuhlung am Tisch weicht von dem bei der Buchung angezeigten Saalplan ab, um die Mindestabst??nde der Corona-Verordnung gew??hrleisten zu k??nnen. Die Stuhlanordnung am Tisch wird vorgegeben, bitte behalten Sie diese w??hrend der gesamten Vorstellung bei.Bitte bringen Sie eine Mund-Nasen-Bedeckung mit, der Ein- und Auslass wird nur mit einer Mund-Nasen-Bedeckung gestattet.F??r Gruppenbuchungen ab 5 Personen kontaktieren Sie bitte direkt die Alemannische B??hne unter: info@alemannische-buehne.de oder Tel: 0761 39229 zu folgenden Telefonzeiten (ab 10.08.20): dienstags und donnerstags von 10.00 Uhr -11.30 Uhr. Wir werden versuchen, Ihre Gruppe an einen Tisch oder- je nach Gruppengr????e- an nebeneinanderliegende Tische zusammenzusetzen. Wir danken Ihnen f??r Ihre Unterst??tzung und Ihr Verst??ndnis bzgl. der aus der aktuellen Situation resultierenden Ver??nderungen Ihres Theaterbesuchs bei uns. Wir freuen uns auf Sie und einen sch??nen Abend in unserem Theater! Bis bald in Ihrer Alemannischen B??hne Freiburg.",
            "startDateTime": "12/12/21 19:00",
            "venueId": "v20",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867270543&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/VZUwyO1C.jpeg"
        },
        {
            "id": "e46",
            "title": "BLACK SEA DAHU",
            "description": "Zu ertrinken kann auch eine Form der Kapitulation sein. Du w??hlst, immer tiefer ins Wasser zu waten, und l??sst dich dann von den Wellen verzehren, unterwirfst deine gesamte Existenz ihrer z??hen und unnachgiebigen Kraft. Denn es gibt nichts, was dich wieder an Land erwartet. No Fire In The Sand, die Folge-EP zum gelobten Deb??talbum White Creatures von Black Sea Dahu, handelt von dieser Art von Resignation. Von diesem besonderen post-Beziehung / Tiefwasser-Trauma; gezeichnet mit pointillistischer und poetischer Genauigkeit. Die Musik ebbt an und flie??t zwischen Verleugnung, Schuld, Wut, Qual und Selbstmitleid. Aber die F??higkeit, der Wille und der Drang, ??ber diese qualvollen Wahrheiten zu sprechen, wirkt auch seltsam erm??chtigend.??Wie sein Vorg??nger entstand No Fire in the Sand im einem abgelegenen Studio auf??der wundersch??nen norwegischen Insel Giske, wieder von Gavin Gardiner (The Wooden Sky) aufgenommen und produziert. Die Musik ist im rohen, leidenschaftlichen, urbanen Folk verwurzelt, der auch schon auf White Creatures zu h??ren ist. Nur etwas dunkler, etwas tiefer. Und obwohl die Arrangements kraftvoll und vielschichtig bleiben, sind diese neuen St??cke emotional noch direkter und noch aufschlussreicher. Und fordern vollst??ndige Hingabe und Aufmerksamkeit.",
            "startDateTime": "3/17/22 21:00",
            "venueId": "v21",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867275365&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/UcNXVXkV.jpeg"
        },
        {
            "id": "e47",
            "title": "Torsten Str??ter",
            "description": "Torsten Str??ter entert am Samstag, dem 14.08., mit seinem ?Sommer Spezial? die B??hne der Volksbank Arena. Er tritt regelm????ig bei Fernsehsendungen wie Nuhr im Ersten und Extra 3 auf oder brilliert aktuell bei Formaten wie ?LOL: Last One Laughing? oder beim Gipfeltreffen mit Johann K??nig und Olaf Schubert. Bekannt wurde Str??ter mit seinen unverwechselbaren Geschichten und nie enden wollenden S??tzen. Es wird ein Abend in sonorstem Deutsch, eine gro??e T??te Pointen l??ssig runtergebrummt - dazu, dazwischen, oben dr??ber: Geschichten, die man jetzt mal nicht von YouTube oder aus dem TV kennt. Der Mann mit der M??tze, ein absoluter Genuss f??r jeden Fan des gepflegten Humors.",
            "startDateTime": "3/30/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867275771&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/nt1YgK1K.jpeg"
        },
        {
            "id": "e48",
            "title": "die feisten - Das Feinste der feisten",
            "description": "Alles ver??ndert sich, das ist unab??nderlich. Selbst im Paradies ist nicht mehr alles so, wie es einmal war: Der Song ?Adam & Eva? erz??hlt die Geschichte, die wir alle aus der Kinderbibel kennen, mit den Augen der feisten. Funky Grooves auf der Mandoline lassen L??cken f??r Worte und Gedanken, wie sie nur die beiden frischgek??rten Tr??ger des Kleinkunstpreises 2017 erklingen lassen k??nnen. Ihre ungew??hnliche Sicht auf die Welt l??sst Lieder entstehen, die den unvorbereiteten Konzertbesucher vor Lachen nicht in den Schlaf kommen lassen.",
            "startDateTime": "10/30/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867277033&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/dVr6XNwR.jpeg"
        },
        {
            "id": "e49",
            "title": "MUNDOLOGIA-Seminar: Streetfotografie",
            "description": "Das Leben spielt auf der Stra??eBereits seit den Anf??ngen der Fotografie gibt es kaum ein Foto-Genre, welches selbst die gro??en Fotografen so in ihren Bann zieht, wie die Stra??enfotografie. In diesem 3,5-st??ndigen Theorie- Seminar vermitteln wir die wichtigsten Grundlagen und besch??ftigen uns eingehend mit dem heutigen Verst??ndnis der Stra??enfotografie.Weitere Informationen zu diesem Seminar finden Sie unter www.mundologia.de!",
            "startDateTime": "2/5/22 15:30",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867278031&a=774719&m=13738"
        },
        {
            "id": "e50",
            "title": "Grandsheiks - playing Frank Zappa feat. Napoleon Murphy Brock",
            "description": "Die GRANDSHEIKS werden seit vielen Jahren von Publikum und Presse f??r ihre Virtuosit??t und musikalische Vielseitigkeit gefeiert. Mit ausgefeilten Arrangements, leidenschaftlicher Spielfreude und dem n??tigen Humor??bringen sie die einzigartigen Kompositionen des Meisters zum Strahlen. Sie begeistern Insider wie Neulinge. Die komplizierten Strukturen, ??berraschenden Wendungen und schnellen Tempowechsel werden lustvoll und scheinbar schwerelos pr??sentiert. Nat??rlich kommt bei aller Komplexit??t auch der n??tige Humor nicht zu kurz. Eine elektrisierende Hommage an das avantgardistische Genie Zappa!??NAPOLEON MURPHY BROCK, Grammy Gewinner und legend??rer Frontmann der Mothers Of Invention? ist ein treuer Freund der Band. Er ist regelm????ig als Gast??mit den GRANDSHEIKS auf Tour,?? f??r ihn eine der besten Zappa-Bands Europas: ?The GRANDSHEIKS are grandmasters of Zappa-music!?",
            "startDateTime": "11/5/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867285069&a=774719&m=13738"
        },
        {
            "id": "e51",
            "title": "MUNDOLOGIA: Bertrand Piccard - Der Jahrhundertpionier",
            "description": "Stargast des 18. MUNDOLOGIA-FestivalsBertrand Piccard ist Spross einer weltber??hmten Forscher-Dynastie: Der Gro??vater eroberte mit einem Gasballon die Stratosph??re, der Vater in einer Tauchkapsel die Tiefsee. Bertrand selbst schrieb mit dem ersten Nonstop-Ballonflug rund um die Welt und der Erdumrundung im Solarflieger Luftfahrtgeschichte. Erleben Sie einen gro??en Vordenker und Vision??r unserer Zeit live!Vortrag in deutscher Sprache.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "2/5/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867289591&a=774719&m=13738"
        },
        {
            "id": "e52",
            "title": "MUNDOLOGIA: ??berirdisch - Die Welt von oben",
            "description": "Drohnenfotografie der Extraklasse: Mit fliegenden Kameras l??sst uns der Schweizer Fotograf Stefan Forster die Sch??nheit der Erde neu erleben. Seine spektakul??ren Fotos, aufgenommen auf f??nf Kontinenten, zeigen Natur- und Kulturlandschaften, Berge und K??sten, Siedlungen und St??dte aus ungewohnten Perspektiven und offenbaren abstrakte Muster. Eine bildgewaltige Show der Superlative, spannend und witzig kommentiert.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "2/6/22 18:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867290575&a=774719&m=13738"
        },
        {
            "id": "e53",
            "title": "Jamaram Meets Jahcoustix - Live 2021",
            "description": "Die Party geht weiter - 20 Jahre Road-Circus mit Reggae, Dubwise und Worldmusic! 20 Jahre JAMARAM!!Wir sind noch lange nicht platt, der runde Geburtstag wird nach 12 Alben und ??ber 2.000 Konzerten in 30 L??ndern mit diversen Releases und noch mehr Live-Konzerten ausgelassen gefeiert. Freut euch mit uns auf Hits und Sensationen aus 20 Jahren Bandgeschichte und auf unseren langj??hrigen Compa??ero und Reggae-Veteranen JAHCOUSTIX, der 2020 bei einem Gro??teil der Shows mit im Boot ist. Seid dabei, es wird definitiv fett!",
            "startDateTime": "11/12/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867290635&a=774719&m=13738"
        },
        {
            "id": "e54",
            "title": "Bobby Sparks - Schizophrenia Tour 2022",
            "description": "Es hat gedauert, um diese au??ergew??hnliche Sammlung unterschiedlichster Songs zu produziern. Aber es hat sich mehr als gelohnt - zeigt sich darin doch das breite musikalische Vokabular und der schier unersch??pfliche Schaffensdrang des Keyboarders Bobby Sparks. Vom slammenden Funk bis zu langsamen, groovigen Soul-Balladen und Streifz??gen in die Genres Straight-ahead-Jazz, Fusion, Orchester- und Weltmusik: das sehr passend betitelte Album Schizophrenia - The Yang Project vereinigt eine Vielzahl verschiedener Musikstile in sich, ohne dabei das Gesamtbild aus den Augen zu lassen",
            "startDateTime": "5/15/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867290641&a=774719&m=13738"
        },
        {
            "id": "e55",
            "title": "Das Phantom der Oper - Die Originalproduktion von Sasson/Sautter",
            "description": "DAS PHANTOM DER OPERDie Originalproduktion von Sasson/Sautter mit Deborah Sasson und Uwe Kr??gerDie erfolgreiche Tournee Produktion kommt zur??ck mit einer hochkar??tigen Starbesetzung.Nach dem ??berragenden Erfolg der Tournee 2019/20 und auf Wunsch ihrer Fans, konnte Weltstar Deborah Sasson ein weiteres Mal daf??r gewonnen werden, in der Saison 2020/21 in der Rolle der Christine auf der B??hne zu stehen. Das Zusammenspiel der S??ngerin mit Deutschlands Musicalstar Nummer 1, Uwe Kr??ger, der weiterhin die Rolle des Phantoms ??bernimmt, wurde vom Publikum und von der Presse allerorts gefeiert.Christine ist von zwei faszinierenden M??nnern hin- und hergerissen, ihrem geheimnisvollen Mentor, dem Phantom der Oper, und ihrer Jugendliebe, dem reichen und attraktiven Grafen Raoul. Ein echtes Musicalhighlight!Das spektakul??re B??hnenbild, das sowohl von den effektvollen, dreidimensionalen Videoprojektionen des international gefeierten Multimediak??nstlers Daniel Stryjecki als auch von den grandiosen B??hnenelementen, gebaut von Michael Scott der Metropolitan Opera in New York, lebt, wurde noch einmal mit neuen Elementen ??berarbeitet. Der dramatische Sturz des L??sters, das geheimnisvolle Stelldichein auf dem Dach der Oper, die unterirdische Bootsfahrt, die unheimliche Begegnung auf dem Friedhof und die furchterregende Unterwelt der Oper werden nun noch plastischer dargestellt.Seit 2010 fesselt ?Das Phantom der Oper? des Autoren Teams Deborah Sasson und Jochen Sautter die Zuschauer auf ??ber 500 B??hnen Europas. Damit ist diese musikalische Neuinszenierung, die einst zum 100. Geburtstags des 1910 von Gaston Leroux geschriebenen Romans ?Le Fant??me de lOp??ra? entstand, eines der erfolgreichsten Tournee Musicals Europas. Die Produktion hebt sich von allen bisherigen musikalischen Interpretationen des Literaturstoffes ab, indem es sich n??her an die Romanvorlage h??lt und in Teilen der von Sasson komponierten Musik bekannte Opernzitate einbindet.Die Rolle der Christine interpretiert die weltweit gefeierte Bostoner Sopranistin und Echo Klassik Preistr??gerin Deborah Sasson. Ihre facettenreiche und kraftvolle Stimme ist perfekt f??r diese Mischung aus Oper und Musical. Das Phantom wird von Uwe Kr??ger gespielt, der seit seinem Durchbruch in der Rolle des Todes in der Welturauff??hrung von Elisabeth die Herzen des Publikums eroberte. Er spielte unter anderem die Hauptrollen in den Urauff??hrungen Rebecca, Mozart, Der Besuch der alten Dame, Heidi und in den deutschsprachigen Erstauff??hrungen von Sunset Boulevard, Miss Saigon, Doctor Dolittle, The Addams Family sowie Napoleon am Londoner Westend. Nun schl??pft er bei dieser Produktion in die Rolle des von der Welt gef??rchteten und innerlich zerrissenen Phantoms.Jochen Sautter ist in der Rolle des reichen, attraktiven Grafen Raoul de Chagny zu sehen.Des Weiteren wirkt ein gro??es Ensemble ausgew??hlter S??nger, T??nzer und Schauspieler aus dem deutschsprachigen Raum mit.Autoren: Deborah Sasson und Jochen SautterMusikarrangements: Peter MossLiedtexte und Dialoge: Jochen SautterKomposition und Musikalische Gestaltung: Deborah SassonRegie und Choreografie: Jochen SautterB??hnenausstattung: Michael ScottMultimedia Technik: Daniel StryjeckiMusikalische Direktion: Sebastian Peter ZippelK??nstlerischer Gesamtleitung: Deborah Sasson und Jochen Sautter",
            "startDateTime": "3/4/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25898706309&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/cfeTPvCi.jpeg"
        },
        {
            "id": "e56",
            "title": "Andrew Lloyd Webber Musical Gala - Honouring one of the greatest Musical Composers",
            "description": "Eine mitrei??ende Musical-Show Gala zeigt die Vielseitigkeit Andrew Lloyd Webbers auf? H??rt man Titel wie ?Don?t Cry for me Argentina?, ?Memories? oder ?Starlight Express?, erklingt bei denmeisten Menschen sofort die dazugeh??rige Melodie im Kopf. Welthits wie diese und viele weitere bekannte Musical-Melodien nehmen das Publikum mit auf eine Reise in die wunderbare Welt des KomponistenAndrew Lloyd Webber. Gro??artige S??nger und T??nzer pr??sentieren die eing??ngigen Musical-Titel vor einerminimalistischen Kulisse und fast ohne Requisite. Einzig der Gesang, die farbenfrohen Kost??me sowie das Multimediadesign (entworfen von dem polnischen K??nstler Daniel Stryjecki) entf??hren das Publikum unter anderem in die Pariser Katakomben des Phantoms, auf die Schienen von Starlight Express oder auf Los Angeles bekannteste Stra??e, den Sunset Boulevard. Instrumental begleitet werden die Akteure aus dem Londoner West End von einem14-k??pfigen, internationalen Orchester, das unter der Leitung des Dirigenten und Arrangeurs Piotr Oleksiak die St??cke ebenso gef??hlvoll wie professionell interpretiert.Durch die Show f??hrt Musicaldarsteller Tyrone Chambers. Zwischen den Gesangsst??cken unterh??lt er das Publikum mit spannenden Informationen rund um Lord Andrew Lloyd Webber sowie mit Hintergr??nden oder der Entstehungsgeschichte der einzelnen Werke.Der aus New Orleans stammende, stimmgewaltige Tenor verleiht der Veranstaltung mit seiner L??ssigkeit undseinem unvergleichlichen Soul einen Hauch von Broadway.Jochen Sautter (Konzeption und Regie) und Deborah Sasson (k??nstlerische und musikalische Beratung) haben mit der Gala zu Ehren des gr????ten zeitgen??ssischen Musical-Komponisten ein kurzweiliges Unterhaltungsprogramm geschaffen.",
            "startDateTime": "12/26/21 19:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25898708069&a=774719&m=13738"
        },
        {
            "id": "e57",
            "title": "THE CORONAS - live 2020",
            "description": "THE CORONAS ist eine vierk??pfige Indie-Rockband aus Terenure, Dublin. Gegr??ndet wurden sie unter dem Namen ?Kiros?, als die Musiker gerade 15 Jahre alt waren. Seit 2003 haben die vier Freunde, die seit gemeinsamen Highschool-Zeiten zusammen auftreten, verl??sslich jede ihrer Ver??ffentlichungen hoch in die irischen Charts gebracht.Ihr lebendiger Alternative-Rock mit unleugbarem Pop-Appeal hat auch in den USA gez??ndet, wo die jungen Iren im Rahmen ihrer Tournee begeisterte Reaktionen ernteten.Das erste Album ?Heroes or Ghosts? wurde im Oktober 2007 ver??ffentlicht, und kam in den irischen Charts auf Platz 24. Das zweite Album ?Tony Was An Ex-Con? wurde am 25. September 2009 ver??ffentlicht und erreichte Platz 3. Es gewann 2010 den Meteor Award f??r das beste Album, vor U2 und Snow Patrol. 2011 ver??ffentlichte die Band ihr drittes Studioalbum Closer to You, das von Tony Hoffer (The Kooks) produziert wurde.Nun sind sie zur??ck und kommen mit einem neuen Album im Gep??ck auf Deutschland Tour.",
            "startDateTime": "10/29/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25953872885&a=774719&m=13738"
        },
        {
            "id": "e58",
            "title": "Mad Caddies - Celebrating 26 Years - European Tour 2021",
            "description": "Schon immer wurden die Mad Caddies von vielen Seiten beeinflusst: Seit ihrer Gr??ndung in Solvang 1995 verbindet die Band klassischen Reggea, Dub, Ska, Dancehall, Two-tone und Punk zu ihrem einzigartigen Stil.Seit 20 Jahren macht Mad Caddies Musik, die sich nicht den klassischen Genres zuordnen l??sst - mit dem Punk-Cover Album Punk Rocksteady beweisen sie, dass sie in der Lage sind, etwas Au??ergew??hnliches zu kreieren.",
            "startDateTime": "8/8/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25953872915&a=774719&m=13738"
        },
        {
            "id": "e59",
            "title": "MUNDOLOGIA: Irak - Kurdistan",
            "description": "Eine Reise ins unbekannte KurdistanDen Irak bringt man in Europa vor allem mit Krieg und Krisen in Verbindung. Der Freiburger Fotograf David Lohm??ller war mehrfach im Norden des Landes unterwegs und zeigt in seiner eindrucksvollen Reportage eine einzigartige Region, die weitaus mehr zu erz??hlen hat: Gro??artige Landschaften, pulsierende St??dte, bunte Basare, traditionelle Feste und der Alltag der Menschen ? Einblicke in eine Region, die kaum jemand kennt.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "11/14/21 14:30",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863777567&a=774719&m=13738"
        },
        {
            "id": "e60",
            "title": "MUNDOLOGIA: Markus Lanz live ? Gr??nland",
            "description": "GR??NLAND ? Meine Reisen ans Ende der WeltNormalerweise interviewt er Menschen mit interessanten Geschichten. Doch seit fast 15 Jahren tauscht Markus Lanz das Fernsehstudio regelm????ig mit einer der extremsten und faszinierendsten Regionen der Welt: Gr??nland. Der in den Dolomiten aufgewachsene Markus Lanz scheute keine Strapazen, die derartige Expeditionen mit sich bringen. Immer wieder besuchte er die J??ger von Siorapaluk, dem n??rdlichsten Dorf der Welt, und zog mit ihnen und ihren Hundeschlitten tagelang ??ber das zugefrorene Meer, um zu jagen. Er ??bernachtete im Februar bei Temperaturen um minus 40 Grad in Biwaks, erlebte lebensbedrohliche Schneest??rme und staunte ??ber das Polarlicht. Immer wieder hielt er die gro??artige Szenerie auf Bildern fest: Menschen bei ihrer archaischen Arbeit, Eisberge in nahezu unwirklichem Licht, aber auch Kinder, die in acht Grad kaltem Wasser schwimmen, J??ger und deren r??tselhafte Verbindung zu ihren Hunden, Fischer in ihren winzigen Booten, bedroht von gewaltigen Eisbergen. Vermutlich gibt es wenige Menschen, die Gr??nland so urspr??nglich erlebt, fotografiert und gefilmt haben wie Markus Lanz ? eine Welt, die es so vermutlich nicht mehr lange geben wird. Erleben sie zusammen mit ihm einen besonderen Abend und tauchen sie ein in eine raue Welt, voller Sch??nheit, aber auch H??rte und Entbehrung.In einer aufw??ndig produzierten Multivisionsshow pr??sentiert Markus Lanz nun seine Fotos und Filmaufnahmen auf der B??hne und l??sst das Publikum teilhaben an seinen Erfahrungen und Erlebnissen.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "3/18/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25995090319&a=774719&m=13738"
        },
        {
            "id": "e61",
            "title": "Profilerin Suzanne Grieger-Langer - Deppen-Detox",
            "description": "?Cool im Kreuzfeuer? zu bleiben ist die Spezialit??t von Profiler Suzanne Grieger-Langer. Als Expertin in der Welt der Kriminalstatistik und der Manipulation wei?? sie wie man sich zur Wehr setzen muss. Und dieses Wissen gibt sie nun wieder auf der B??hne Preis. Machen Sie sich gefasst auf einen Abend, den Sie so schnell nicht vergessen werden. Live on stage entschl??sselt die ber??hmteste Profilerin Deutschlands den Code des konzentrierten Rufmords. Doch dabei bel??sst es Susanne Grieger-Lange nicht. Konkret benennt sie Aggressoren und zeigt auf, wie man sich am besten davor sch??tzen kann. Gepaart mit einer Portion Humor und feingeistiger Realsatire ??ffnet die geb??rtige Detmolderin aus Nordrhein-Westfalen ihrem Publikum die Augen. Damit verfolgt die charismatische Analytikerin ein klares Ziel: Betr??ger zu entlarven und Sch??dlingen das Handwerk zu legen. Eine Live-Show von Profiler Suzanne Grieger-Langer ist ein Dreiklang der Darbietung: enth??llend, fesselnd und aufw??hlend. Lassen Sie sich ein auf ein Erlebnis der besondern Art, das Sie viele Dinge in einem neuen Licht sehen lassen wird. Jetzt Ticket sichern!",
            "startDateTime": "9/28/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26011939099&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/JfsQksIL.jpeg"
        },
        {
            "id": "e62",
            "title": "Kaya Yanar - Fluch der Familie",
            "description": "Unsere Familie k??nnen wir uns nicht aussuchen, f??r manche ist es ein Segen, f??r andere ein Fluch. Soll man seine Eltern ehren, auch wenn sie bekloppt sind? Auf ihren Rat h??ren, auch wenn sie nicht wissen, wie man ne T??r auf macht?Kaya hatte eine ?spezielle Familie?: ein strenger Vater, eine ??ngstliche Mutter und ein hochintelligenter aber komplizierter Bruder. Dann auch noch der Migrationshintergrund. Er hatte damals nur zwei Optionen: Entweder Komiker oder Klapse.In der Klapse wollten sie ihn nicht, und Kaya entdeckte die Formel: Comedy=Schmerz + Zeit. Jetzt im besten Alter angekommen, reflektiert Kaya nicht nur ??ber seine Kindheit und Familie, sondern auch ??ber sich und seine zuk??nftige Familie. Kaya will unbedingt Vater werden und verhindern, dass seine Kinder eines Tages ein B??hnenprogramm schreiben m??ssen, um ihren Vater zu verarbeiten.Wird er ein guter Vater sein? Wird er seine Traumata rechtzeitig therapiert haben? Wird er Fluch oder Segen der Familie werden? Keine Ahnung, aber es wird auf jeden Fall lustig werden, in Kaya Yanars neuem B??hnenprogramm: ?Der Fluch der Familie?, kommst Du, Guckst Du, Lachst Du!",
            "startDateTime": "3/13/22 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=26011939197&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/biRVmZRK.jpeg"
        },
        {
            "id": "e63",
            "title": "Murphy??s Celtic Legacy",
            "description": "Murphy??s Celtic Legacy ist eine faszinierende Produktion mit epischen Original-Soundtrack und einem Team von T??nzerinnen und T??nzern, die Weltmeister sind. Der Produzent: Chris Hannon, zugleich auch Star der Show und ehemaliger T??nzer in Michael Flatleys ?Lord of the Dance? Murphy??s Celtic Legacy hat bereits Gro??britannien, den Nahen Osten, Zypern, Frankreich und Irland bereist und auf ??ber 27 Kreuzfahrten an Bord der MSC Cruise Lines teilgenommen. Hannon?s Produktion setzt neue Ma??st??be! Neben einer hervorragenden Live-Band kommt auch ein charismatischer Sprecher zum Einsatz, denn die Show ist nicht nur die Aneinanderreihung von einzelnen Szenen, sondern erz??hlt die Geschichte zweier irischer Volksst??mme. Ein wahrer Reigen von ??berw??ltigenden Tanzszenen unterst??tzt durch ein beeindruckendes Lichtkonzept.",
            "startDateTime": "11/17/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26011939545&a=774719&m=13738"
        },
        {
            "id": "e64",
            "title": "VIDA - Die Showsensation aus Argentinien",
            "description": "Ganz Argentinien in einem Tanz. VIDA! macht es leicht, sich hinrei??en zu lassen, bis man nicht mehr sitzen mag. Standing Ovation und immer wieder Zwischenapplaus. F.A.Z. Nicole Nau & Luis Pereyra & Company bringen denechten Tango Argentino in seiner magischenund puren Formzur??ck.VIDA. Die Showsensation aus Argentinien. Aufregend. Verf??hrerisch. Unkonventionell. Lebendig. S??damerikanische Emotion. VIDA! Hier stehen Vollblutk??nstler auf der B??hne, die alles k??nnen. Welterstklasse Artisten aus Argentinien legen fantastische Musik- und Tanz-, Stepp- und Show-Einlagen der Superlative hin. Der bet??rende Reiz wird durch den flie??enden Rollentausch der T??nzer zu Musiker und S??nger intensiviert. Magistral interpretiert von Nicole Nau & Luis Pereyra und Compan?ia. Erstmals zeigt Pereyra nun den Music Hall Argentino. Diese markante Epoche der kraftvollen 70er Jahre, die sp??ter die Welt eroberte. Die Tangostars Die deutsche T??nzerin Nicole Nau aus D??sseldorf hat es geschafft, sich an die Spitze des argentinischen Olymp zu tanzen und ziert dort Briefmarken der argentinischen Post. Luis Pereyra wird nicht umsonst der Fred Astaire Argentiniens genannt, seine Werke mit dem TONY Award ausgezeichnet (der Oskar f??r Musicals). 1992 sah Lady Diana den T??nzer Luis Pereyra im Aldwych Theatre London auf der B??hne und lud ihn am n??chsten Tag in den Buckingham Palace ein. 1990 tanzte Luis Pereyra in den Paramount Studios. Al Pacino pers??nlich ??bernahm die Pr??sentation. . 2016 tanzten Nicole Nau & Luis Pereyra f??r die Kameras des Bayerischen Filmpreises.",
            "startDateTime": "10/26/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26011939549&a=774719&m=13738"
        },
        {
            "id": "e65",
            "title": "Kari Bremnes - Tour 2020",
            "description": "Dieser Veranstaltungstermin f??llt leider aus. Ein Ersatztermin wird so bald wie m??glich angeboten. Alle Tickets behalten ihre G??ltigkeit. Weitere Infos hier: https://pavillon-hannover.de/infos-zu-corona/Das Songwriting des modernen Skandinaviens verk??rpert sie wie keine andere. In ihrer mittlerweile mehr als drei Jahrzehnte andauernden Karriere brachte die atemberaubende Kari Bremnes f??nfzehn Soloalben hervor. Die Norwegerin, die dabei nicht zu altern scheint, hat in ihrer Heimat l??ngst Ikonenstatus. Bei ihren Konzerten lauschen die Fans atemlos einer mysteri??sen Melange aus arktischem Folk, gebremstem Pop und elaboriertem Jazz und werden dabei ganz selbstvergessen. Dann aber kommt Kari Bremnes, diese Anmut aus dem Norden, macht einen leisen Scherz, singt eine verwunschene Note, und schon ist die Realit??t wieder pr??sent. Nur halt viel sch??ner als zuvor.http://www.karibremnes.no/",
            "startDateTime": "3/25/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=26023878379&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/IyRyRCHf.jpeg"
        },
        {
            "id": "e66",
            "title": "Faisal Kawusi - Anarchie",
            "description": "Foto: Guido Schr??derEr ist und bleibt der sympathische Afghane von nebenan: Faisal Kawusi. Der 26-j??hrige Comedian startet im Februar 2019 mit seinem zweiten Soloprogramm ?Anarchie? durch. Darin nimmt Faisal kein Blatt vor den Mund und setzt sich auf seine charmante Art und Weise mit den Dingen auseinander, die er tagt??glich selbst erlebt. Absurde Geschichten und gro??e Pointen sind vorprogrammiert, wenn sich das Ausnahmetalent der deutschen Comedyszene den Tabuthemenunserer Gesellschaft widmet.In seinem zweiten Programm erz??hlt uns Faisal anschaulich von den zahlreichen Vorurteilen, mit denen das Comedy Schwergewicht konfrontiert wird. Wie sieht der Alltag eines Afghanen in Deutschland aus? Mit welchen Klischees muss er sich immer wieder auseinandersetzen? Das alles und noch viel mehr erz??hlt uns Faisal mit einer gro??en Portion schwarzem Humor. So, wie es nur jemand kann, der all dies am eigenen gro??en Leib erfahren hat. Lustig, selbstironisch, liebensw??rdig und ziemlich frech. Dabei spielt das Allroundtalent mit seinen afghanischen Wurzeln und ??berrascht immer wieder aufs Neue mit seinem gro??en Improvisationstalent.Faisal versteht sich dabei als Bindeglied zwischen den Generationen und Kulturen und erz??hlt ganz ungefiltert, was er denkt. Faisal hat mit seinem ersten Soloprogramm ?Glaub nicht alles, was du denkst? die Zuschauer bei mehr als 300 Live Auftritten begeistert. Die Ausstrahlung seines Live-Programms bei RTL verfolgten 1,86 Millionen Zuschauer. Unvergessen bleibt seine mitrei??ende Performance bei RTLs ?Let?s Dance? in 2017. Auf seinem YouTube-Channel mit ??ber 222.000 Abonnenten sorgt er regelm????ig f??r Furore. Aber das waren nur die ersten Schritte auf der Karriereleiter: Inzwischen brilliert der Pfundskerl in seiner eigenen Comedy-Late-Night in SAT.1: ?Die Faisal Kawusi Show?, in der er illustre G??ste aus Comedy, Musik und Showbiz begr????t.",
            "startDateTime": "12/11/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418943851&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/VaJZ51Td.jpeg"
        },
        {
            "id": "e67",
            "title": "NightWash Live",
            "description": "NightWash LiveStand-Up Comedy ist LIVE am lustigsten!NightWash ist die Marke f??r Stand-up Comedy in Deutschland und wurde 2016 hierf??r mit dem Deutschen Comedypreis ausgezeichnet. Mit ??ber 200 Live-Terminen pro Jahr ist NightWash zudem die erfolgreichste Live Comedy-Show im deutschsprachigen Raum.K??nstler wie Luke Mockridge, Felix Lobrecht, Carolin Kebekus, Chris Tall oder Faisal Kawusi hatten einen Ihrer ersten Auftritte bei NightWash.NightWash LiveMainz ? Zitadelle25.07.2021, 20:00 Uhrmit dabei sind:Jan van Weyde (Moderator)Jan van Weyde ist ein Stand-Up Comedian und Synchronsprecher aus K??ln. Er lebt so zusagen von Ersprochenem. EIGENTLICH wollte Jan aber etwas ganz anderes, n??mlich in der K??nigsdisziplin antreten. Er wollte auf die Stand-Up B??hnen dieser Welt. 2014 dann die Initialz??ndung - Mit der Geburt seiner kleinen Tochter dachte er sich ganz unbescheiden: Moment mal, ich bin Gott! Ich habe einen Menschen gemacht! Dann kann ich auch auf eine B??hne gehen und Leute zum Lachen bringen! Und das kann Jan van Weyde - Ein Mann, ein Mikro.El Mago MasinEl Mago Masin kam ??ber die Liedermacherb??hnen auf die Kabarettb??hnen. Er kletterte geschickt her??ber, so dass er nun virtuoses Gitarrenspiel und wahnwitzige Lieder mit anarcho-komischen Geschichten verkn??pft. Auf unz??hligen B??hnen versuchten in den vergangenen Jahren viele Freidenker ihn zu begreifen, doch er ist einfach unfassbar!Maria Clara GropplerW??hrend sie noch mit gro??en Rehaugen die Bambi Karte ausspielt, schie??t sie mit knallhartem Humor einen Bock nach dem anderen.Gerade erst fertig mit dem Abitur, startet Maria Clara Groppler schon mit 17 Jahren als StandUp Comedian durch und erz??hlt ganz offen und ehrlich aus ihrem Leben. Sie ist das wohl j??ngste Talent in der Comedy Szene, aber unschuldig ist sie definitiv nicht! Zwischen damenhaft und derbe, haut sie ihre Witze und Anekdoten ganz trocken und l??ssig raus.Serkan Ates-SteinEr schafft es, sich und seine Generation aufs Korn zu nehmen, indem er Anekdoten zum Besten gibt oder mit derbem Sprechgesang gl??nzt. Aber wer jetzt denkt, das k??me plump-salopp daher, der kann sich bei Serkan auf wohl pointierte Comedy freuen. Zwischendurch untermalt er seine Auftritte mit Percussion- Imitationen, im Volksmund auch Beat Box genannt. Kurz: Eine bunte T??te ohne Lakritze.NightWash bringt die frischeste Stand-Up Comedy angesagter Comedians und Newcomer, ??berraschende Showeinlagen gepaart mit dem allerbesten Publikum auf die B??hne. Jede Show ein Unikat auf h??chstem Niveau. Hier bleibt garantiert kein Auge trocken! Comedy der Extraklasse!NightWash Live - Stand-Up Comedy at its best!Die Veranstaltungsreihen finden unter den vorgegebenen, geltenden Sicherheits- und Hygiene-Vorschriften statt.",
            "startDateTime": "9/19/21 19:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=26042948455&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/XMzdmh8k.jpeg"
        },
        {
            "id": "e68",
            "title": "ITCHY - JA ALS OB TOUR 2020",
            "startDateTime": "12/10/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=26057588555&a=774719&m=13738"
        },
        {
            "id": "e69",
            "title": "Majan - Live",
            "description": "Irgendwie scheinen Kleinst??dte in der N??he von Stuttgart wie Bietigheim oder eben Schorndorf im Moment die kreativsten Zellen f??r aufregende neue Musik zu sein. Majan z??hlt mit seinem Potpourri aus Rap, Dancehall und Klavierballaden auf jeden Fall zu den vielversprechendsten Newcomern der Zeit. Sp??testens seit dem Song ?1975? mit Cro, der Jugglerz-Kollabo ?Nie da? und dem grandiosen ?Tag ein, Tag aus? ist Majan nicht nur den Hip-Hop Fans ein Begriff.Seine Sprache ? v??llig egal, in welcher Sprache er gerade unterwegs ist ? ist herrlich direkt und einfach, oft auch bitter ehrlich. Majans Sound, der mal klar und grade, mal rhythmisch vertrackt, gemeinsam mit dem Berliner Produzenten-Duo Kilian & Jo entsteht, ist neu, einzigartig und vertraut zugleich. Das kommt als klassischer Popsong daher, dann als Rap-Track mit jamaikanischen Laid-back-Vibes oder r??pelhaftem Turnup-Beat, mal entstehen elektronische UK-four-to-the-floorNummern, dann wieder ganz nackte Balladen am Klavier. Majan kann alles und hebtden HipHop und noch zwei, drei Genres auf einen neues Level.",
            "startDateTime": "12/2/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=26074707427&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/8x7zXak3.jpeg"
        },
        {
            "id": "e70",
            "title": "Ray Wilson & Band - Genesis Classic",
            "description": "Ray Wilson, der Ex-S??nger von GENESIS, pr??sentiert zum 20j??hrigen B??hnenjubil??um mit seiner Bandund dem Berlin Symphony Ensemble die gr????ten Hits der Bandgeschichte.Facettenreiche Songstrukturen aus der progressiven Rock-??ra der Band sowie die Pop-Hits der 1970er bis 1990erJahre verschmelzen mit klassischen Streicher-Arrangements - eine neue Dimension von GENESIS, ohne da?? die Songsihren Originalcharakter verlieren. Garant daf??r ist die einmalige Stimme von Ray Wilson, welcher allein mit dem letztenGENESIS-Album ?Calling All Stations? das drittbestverkaufte der Bandgeschichte eingesungen hat. Mit ihremMainstream-Rock wurde GENESIS zu einer der kommerziell erfolgreichsten Musikgruppen der 1980er und 1990erJahre. Insgesamt verkaufte GENESIS ??ber 150 Millionen Scheiben weltweit. Im M??rz 2010 wurde GENESIS alswichtige und einflussreiche Band in die ber??hmte ?Rock?n?Roll Hall of Fame? aufgenommen.Ray Wilsons internationale Musikkarriere begann 1994 mit der Grunge-Sensation STILTSKIN, als er die Charts mit demNummer-1-Hit ?Inside? st??rmte. Der Song lief jahrelang als weltweiter TV-Spot der Jeansfirma ?Levi?s?.1997 wurde der Schotte dann Mitglied der britischen Rocklegende GENESIS, wo er Phil Collins als S??nger ersetzte. Mitdem gemeinsam produzierten GENESIS-Album ?Calling All Stations? ging es auf eine erfolgreiche Stadion-Tournee durchganz Europa und Nordamerika.Nach der Aufl??sung von GENESIS spielte Ray Wilson in Deutschland u.a. mit Musikgr????en wie Marius M??ller-Westernhagen und den ?Turntablerocker?. Mit den ?Scorpions? und den Berliner Philharmonikern stand er gemeinsamzum Er??ffnungskonzert der EXPO-Weltausstellung in Hannover auf der B??hne.2003 ver??ffentlichte Ray Wilson sein erstes Solo-Album ?Change? und stellte es w??hrend seiner Tournee - mit ??ber 50Shows allein in Deutschland - gemeinsam mit Joe Jackson und der Band SAGA vor. F??r den Song ?Yet Another Day? vomgleichen Album arbeitete er mit dem holl??ndischen Star-DJ Armin Van Buuren zusammen; der Song erreichte m??helosPlatz 1 in den Dance-Charts. Ray Wilson ging in den folgenden Jahren auf Europa-Tour mit Dolores O?Riordan von denCRANBERRIES und SUPERTRAMP-Frontmann Roger Hogdson.Ray Wilson gilt als sympathischer Ausnahmes??nger und hat sich mit seiner charismatischen B??hnenpr??senz weltweiteinen Namen als exzellenter Entertainer gemacht. Mit typisch schottischer Gelassenheit kombiniert er die Energie derRock-Musikmit komplexen Songtexten.Mit seinem neuen Projekt ?GENESIS Classic? erf??llt sich der Schotte einen ganz pers??nlichen Traum: die erfolgreichstenHits von GENESIS auf gro??er B??hne in Originalversion ?unplugged? zu spielen, die klassischen Keyboard-Sequenzenersetzt durch Streicher-Arrangements.Im Repertoire hat RayWilson selbstverst??ndlich alle Hits wie Follow You, Follow Me - No Son Of Mine - Carpet Crawlers -Land of Confusion - Not About Us - Jesus He Knows Me ? Congo ? I Can?t Dance ? aber auch Solo-Hits von seinenehemaligen Bandkollegen Peter Gabriel ?Solsbury Hill?,Mike & theMechanics ?Another Cup Of Coffee? und Phil Collins?Another Day in Paradise?.RayWilson, der vom ?Classic Rock Magazin? als einer der erstklassigen S??nger Gro??britanniens ausgezeichnet wurde, istbekannt f??r seine starke B??hnenpr??senz und begeisternden Auftritte. GENESIS Classic verspricht ein einzigartigesKonzerterlebnis f??r jeden, der gute Live-Musik zu sch??tzen wei??.Besetzung:RayWilson - Vocals, Acoustic Guitar | SteveWilson - Godin Acoustic, 12 String and Backing VocalsDarek Tarczewski - Piano | Alicja Chrzaszcz ? Violin | Basia Szelagiewicz ? Violin IMarcin Kajper ? Saxofon",
            "startDateTime": "3/12/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=26090827645&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/SqdfqrbM.jpeg"
        },
        {
            "id": "e71",
            "title": "MUNDOLOGIA: S??dafrika",
            "description": "Von Kapstadt zum Kr??gerparkEs gibt gen??gend Gr??nde, um nach S??dafrika zu reisen. Das Land hat landschaftlich und kulturell enorm viel zu bieten und beeindruckt mit einer einzigartigen Tier- und Pflanzenwelt. Der Berliner Fotok??nstler Dirk Bleyer hat S??dafrika ??ber drei Jahre immer wieder bereist und gro??artige Bilder vom ??u??ersten S??den des afrikanischen Kontinents gemacht.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "1/16/22 11:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=26112218203&a=774719&m=13738"
        },
        {
            "id": "e72",
            "title": "Reinhold Messner live Nanga Parbat - mein Schicksalsberg",
            "description": "Reinhold Messner ?Nanga Parbat ? mein Schicksalsberg?Bei kaum einem anderen Berg liegen Ruhm und Trag??die so nah beieinander wie beim 8.125 m hohen Nanga Parbat. Reinhold Messner vereint dabei beides wie kein Anderer. Untermalt mit nie gesehenen Bildern und Filmen spannt Messner bei seinem Live-Vortragden Bogen von all den Alpinisten, die am Nanga Parbat Geschichte geschrieben haben bis zu seiner eigenen bewegenden und spannenden Geschichte.Er berichtet von Albert Mummery dem besten Bergsteiger seiner Zeit, der 1895 beim ??bergang von der Diamir- zur Rakhiot-Seite verschwindet, vom unvergessenen Willo Welzenbach, ?Eispapst? genannt, der 1934 ? zuletzt ausgegrenzt ? mit acht M??nnern imSchneesturm stirbt; von Hermann Buhl, der 1953 gegen den Befehl des Expeditionsleiters allein und als Erster den Gipfel erreicht ? eine Sternstunde des Alpinismus! Wie gut 50 Jahre sp??ter, als Steve House die Rupalwand direkt in Zweierseilschaft meistert.Zum Schluss erz??hlt er von seiner eigenen schicksalhaften Expedition von 1970, die sein Leben bis heute gepr??gt hat. Nach der erfolgreichen Durchsteigung der h??chsten Steilwand der Erde ? der Rupalwand, durch die Br??der Messner kommt es im Abstieg zur Trag??die. H??henkrank geworden, kann G??nther nicht zur??ck ins Biwak. Ein Absturz w??re gewiss. Also f??hrt Reinhold ihn durch die 4000 Meter hohe Diamir-Flanke trotz Lawinengefahr, Weglosigkeit und Verzweiflung bis zum Wandfu??, wo eine Eislawine G??nther begr??bt, w??hrend Reinhold voraus ist, um nach einem Ausweg aus der Gefahrenzone zu suchen. Nachdem er seinen Bruder nicht finden kann, schleppt er sich tagelang talw??rts; mit erfrorenen H??nden und F????en, ohne Nahrung in einer menschenleeren Gegend. Dem Tode n??her als dem Leben st????t er, dank dreier Holzf??ller die ihn talw??rts tragen, auf seine Expeditionsmannschaft, die auf dem Heimweg ist.Acht Jahre sp??ter gelingt ihm mit dem ersten Alleingang eines Achttausenders an der Diamir-Wand die Glanzleistung seines Lebens. Obwohl ein Erdbeben den Berg ersch??ttert und anschlie??end ein Wettersturz den Solo-G??nger 48 Stunden in der Todeszone festh??lt.Nach der H??lle hat er damit den Himmel auf seinem pers??nlichen Schicksalsberg ber??hrt.??ber den Referenten:Reinhold Messner wurde 1944 in S??dtirol/Italien geboren. Schon als F??nfj??hriger begann er mit dem Bergsteigen und hat seit 1969 mehr als hundert Reisen in die Gebirge und W??sten dieser Erde unternommen. Dabei gelangen ihm viele Erstbegehungen, die Besteigung aller 14 Achttausender und eine L??ngsdurchquerung Gr??nlands. Im Gegensatz zu modernen Abenteuer-Darstellern war Reinhold Messner nie um Rekorde bem??ht, ihm geht es um das Ausgesetztsein in m??glichst unber??hrten Naturlandschaften und das Unterwegssein mit einem Minimum an Ausr??stung. Er hielt Vortr??ge in ganz Europa, den USA, Japan, Australien, S??damerika, drehte Dokumentarfilme undver??ffentlichte Artikel, u.a. in ??Stern??, ??Spiegel??, ??GEO??, ??Epoca??, ??Espresso??, ??National Geographic??. Seine Buchver??ffentlichungen wurden in mehr als ein Dutzend Sprachen ??bersetzt.",
            "startDateTime": "11/15/21 19:30",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26112219501&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/B1ZCGuo9.jpeg"
        },
        {
            "id": "e73",
            "title": "MUNDOLOGIA: GTA - Zu Fu?? durch die Alpen",
            "description": "Die Grande Traversata delle Alpi ist eine der spannendsten Alpendurchquerungen, da sie nur schwer zug??ngliche, von der Entv??lkerung am meisten betroffene Alpent??ler ber??hrt. Vom n??rdlichsten Punkt des Piemont f??hrt die Route mit gewaltiger 4000er Kulisse auf alten Saumwegen durch den italienischen Westalpenbogen bis ans Mittelmeer.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "11/23/21 19:30",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=26147037963&a=774719&m=13738"
        },
        {
            "id": "e74",
            "title": "MUNDOLOGIA: Auf dem Landweg nach Australien",
            "description": "Kostya Abert f??hrt eine Reisemobilgruppe von Europa nach Australien und wird unterwegs vor gro??e Herausforderungen gestellt. Spektakul??re Wege, wie jene am Rande des Himalaya-Gebirges mit tiefen Abgr??nden auf der einen und ??berh??ngenden Felsen auf der anderen Seite, sind Alltagssituationen der Wohnmobilisten und nichts f??r schwache Nerven. Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "11/22/21 19:30",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=26156704591&a=774719&m=13738"
        },
        {
            "id": "e75",
            "title": "Hagen Rether - Liebe",
            "description": "Foto: Klaus ReineltDie Welt wird t??glich ungerechter, das Geflecht aus politischen und wirtschaftli??chen Abh??ngigkeiten immer dichter: Vor diesem Hintergrund l??sst Hagen Rether Strippenzieher, Strohm??nner und S??ndenb??cke aufziehen. Den so genannten gesellschaftlichen Konsens stellt er vom Kopf auf die F????e und die System??fragen gleich im Paket: Von der Religions?freiheit? ??ber das Wirtschaftswachstum bis zur staatlichen ?Lizenz zum T??ten? kommt alles auf den Tisch. Doch die Verantwortung tragen nicht ?die M??chtigen? allein ? wir, ihre mehr oder weniger willigen Kollaborateure, m??ssen uns wohl am eigenen Schopf aus unserer Komfortzone ziehen, um nicht in den Abgrund zu st??rzen, den wir gemeinsam geschaufelt haben.Der wahrhaft unbequeme Kabarettist entlarvt so manchen Volkszorn samt seiner auf ?Die da oben? zielenden Emp??rungsrhetorik als Untertanentum ? den Unwillen, unsere eigenen, fatalen Gewohnheiten zu ??berwinden. Kabarett ver??ndert nichts? Rethers ebenso komisches wie schmerzhaftes, bis zu dreieinhalbst??ndiges Programm infiziert das Publikum mit gleich zwei gef??hrlichen Viren: der Unzufrieden??heit mit einfachen Erkl??rungen und der Erkenntnis, dass wir alle die Kraft zur Ver??nderung haben.LIEBE, so der seit Jahren konstante Titel des st??ndig mutierenden Programms, kommt darin nicht vor, zumindest nicht in Form von Herzen, die zueinander finden ? und romantisch kommt allenfalls einmal die Musik des vielseitigen Pianisten daher. Was aber in seinem fulminanten Pl??doyer f??r das Mitgef??hl sichtbar wird, ist die Menschenliebe eines Kabarettisten, der an Aufkl??rung und an die M??glichkeit zur Umkehr noch am Abgrund glaubt.",
            "startDateTime": "11/7/21 19:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26184396469&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/uyuvPAtH.jpeg"
        },
        {
            "id": "e76",
            "title": "Die Sterne",
            "description": "DIE STERNEEin selbstbetiteltes Album. Auf dem Cover: der S??nger ? das letzte verbliebene Ur-Mitglied ? ganz allein als aus allen Zeiten geplumpster Dichterf??rst, als leicht l??dierter, aber wissender Dandy. Ein erstes H??ren, und pl??tzlich sitzt man da, mit lauter Hits in den rauschenden Ohren und zig Textfetzen, die einem durch den Kopf spuken, und ist wie durchgesch??ttelt von einem Album, das immer wieder von Freiheit und Verstrickung, von M??glichkeiten und Zw??ngen handelt. Das neue Album von Die Sterne ist da. Ein Album, auf das man - ohne es zu wissen - so sehr gewartet hat. Eine Platte, die wie keine zweite angeschlossen ist an die Themen unserer Tage ? und die trotzdem einl??dt auf eine eskapistische Reise durch unerh??rte Soundlandschaften. Es lebe der Widerspruch! Es leben Die Sterne!Die Fakten zuerst: Mit Bassist Thomas Wenzel und Schlagzeuger Christoph Leich haben zwei wichtige Gr??ndungsmitglieder vor anderthalb Jahren die Band verlassen. Auf ?Die Sterne? bilden Jan Philipp Janzen und Phillip Tielsch, beide Mitglieder der K??lner Band Von Spar, die Rhythmusgruppe. Neben den Sterne-Livemusikern Dyan Valdes und Max Knoth wirken zudem u.a. das Kaiser Quartett, Carsten ?Erobique? Meyer und die D??sseldorf D??sterboys mit. Krautige Fl??chen treffen auf Italo-Pop, verspulten Folk, Psychedelia und Disco. Es funkelt an allen Ecken und Enden. Es ist ein Sound, den man in dieser ??berstrahltheit (nicht nur von Die Sterne!) noch nicht kannte ? und der doch ganz ihr eigener ist. Vielleicht klingt so die Freiheit.Das Album vor oben beschriebenem personellen Hintergrund schlicht ?Die Sterne? zu nennen, ist eine sehr l??ssige Ansage: Die Sterne im Jahr 2020, das ist ein offenes System, in dem freilich mehr denn je der Blick auf das Kontinuierliche dieser musikalischen Institution frei wird: Frank Spilker, seine Songs, Texte und Themen. Seine k??nstlerische Coolness und seine Dringlichkeit als soziales Wesen.Die ersten Sekunden der Platte t??nen, als w??re ein Vintage-Synthesizer in Bob Dylans ?Tangled Up In Blue? gekracht, am Ende wird WahWah-befeuerter Rave-Pop draus. ?Das Herz schl??gt aus nach allen Seiten?, singt Spilker ??ber unseren unperfekten Empathiemuskel; Widerspr??chlichkeit als menschlichste Form der Libert??t.Mit ?Der Palast ist leer? erreicht die Platte einen ersten H??hepunkt: Michael Rother steigt bei Stereolab ein. Kaum freut man sich ??ber die Cowbell, wehen orchestrale Wolken um die Zinnen. Der Text formuliert nur scheinbar eine Utopie von Unbeherrschtheit. Man ist geneigt, sofort mitst??rmen zu wollen, aber Spilker kennt kein Schwarzwei??: Was, wenn sich wirklich niemand mehr um uns k??mmerte? Unerh??rt ? man ahnt es nicht!?Der Sommer in die Stadt wird fahren? ist flirrender Italo-Pop mit psychedelisch-dr??uender Schlagseite (Man denke: Lucio Battisti, circa 1977) und einem herrlich gespreizten Text. Wieder spielt das Kaiser Quartett ganz gro?? auf. Vielleicht auch ein Lied ??ber falsche Sehns??chte und Idealisierung. Immer gut, wenn Fragen bleiben.?Du musst gar nichts? ? fast ein Hausbesetzer-Funk-Pop-St??ck wie es K??lner Sp??t-Kraut-Bands wie Dunkelziffer oder die Phantom Band in den 80ern h??tten machen k??nnen ? nimmt das Kernthema der Platte wieder auf: Wenn man tats??chlich gar nichts muss, jeder Zwang und jedes Ritual weg ist ? dann bleibt nur noch der Blick in den Abgrund der Freiheit. Be??ngstigend.Nach dem bereits vorab ver??ffentlichten ?Hey Dealer?, bei dem die Flaming Lips der ?Embryonic?-??ra auf eine Wagenladung Pilze vorbeischauen, schubst ?Unterschiedlich subtil? den H??rer auf spiegelglatte Wave-Pop-Fl??chen. Es geht um Macht und Manipulation. Und gerade, als man sich zu fragen beginnt, ob Spilker hier von politischer Einflussname oder den Zw??ngen modernen Band-Marketings singt, errichtet das Kaiser Quartett mal eben wieder eine dieser unglaublichen Streicher-Kathedralen. Eine Welt voller M??glichkeit, nur: Was ist Gift und was ist Medizin?Mit ?Das Elend kommt (nicht)? wird es grimmig: W??hrend eine psychotische Fuzz-Gitarre mehr und mehr freidreht, wird klar: Es ist halbwegs m????ig, den offensichtlichen Konsensfeind in zig Talkshows zu bequatschen, wenn der wahre Gegner viel n??her ist, als man wahrhaben m??chte. Und wo wir schon beim Konsensfeind sind: ?Die Message?? irgendwo zwischen Dr. John und P-Funk verortet ? macht endg??ltig klar: F??r Faschismus gibt es keine Ausreden und Erkl??rungen. Der Fall liegt ganz einfach: ?Der Arsch ist die Message.? L??ssiger als hier kann man den M??ll nicht runtertragen.In ?Wir k??men wieder vor? schaut der S??nger auf ein Umfeld zwischen Paralyse und faulem Arrangement beim Tanz mit den Verbrechern. ?Ihr wollt ein Wir - hier gibt?s kein Uns / Integriert euch doch selbst - passt euch doch an!?, singt Spilker, und dann hebt dieser sch??ne Popsong ab in die Neil-Young-Umlaufbahn. ?Die besten Demokratien? spinnt diesen Gedanken weiter ins Gro??e. Im Fadenkreuz: Das Heucheln von Zivilisiertheit in westlichen Kulturen (?Wir finden eine L??sung - gib mir das Problem / Wir stehen ein f??r Werte und wir wollen Werte sehn?). Ein Flexatone wird gesch??ttelt, Die Sterne funkeln wieder Arthur Russells Disco Anarcho. Da ist noch Licht im Palast, aber, wie gesagt: Du musst gar nichts!Jetzt klingt sie langsam aus, diese Zauberplatte. Aber wie wunderbar weird: Auf den retro-futuristischen Dub-Pop ?Drinks & Love? folgt ganz zum Schluss das von einem Tanpura-Sample durchsponnene ?Halbvergangener Tag?, das den Eindruck nahelegt, Frank Spilker und seine Mitmusiker h??tten am Abend zuvor mit Syd Barrett und der Incredible String Band durchgemacht. Hedonismus, altes Haus: eine oberfl??chliche, aber ewig verf??hrerische Form der Freiheit.Und dann, obwohl man sich jetzt wie durchgesch??ttelt f??hlt und es im Kopf nur so wimmelt vor frisch angesto??enen Gedanken ? und Fragen! ? , will man das alles gleich noch mal h??ren. Diesmal aber lauter. Weil man tanzen will. Und dann tanzt man. Man tanzt die Freiheit und die Verstricktheit. Das klare Dagegen und die Widerspr??chlichkeit. Die Ambivalenz und die Eindeutigkeit. Aber niemals mit den Verbrechern! Der Arsch ist die Message!Gut, dass Die Sterne wieder da sind. Gut, dass Frank Spilker wieder Lieder singt.Wir kommen wieder vor.pr??sentiert von : dq agency, Musikexpress,TAZ, Byte.FM & Kaput Magazin",
            "startDateTime": "10/10/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=26227540155&a=774719&m=13738"
        },
        {
            "id": "e77",
            "title": "MUNDOLOGIA: Madagaskar",
            "description": "Das Erbe von LemuriaAls vor 250 Millionen Jahren Gondwana auseinanderbricht, Afrika nach Norden und Indien gen Osten wandern, bleibt Madagaskar als Splitter dieses Urkontinents im Indischen Ozean zur??ck. Durch die v??llige Isolation haben hier Arten ??berlebt, die in anderen Teilen der Welt l??ngst ausgestorben sind. In ihrer Film- und Fotomultivision gehen Katja und Josef Niedermeier den Geheimnissen des Inselstaats auf den Grund. Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "1/8/22 19:30",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=26263587159&a=774719&m=13738"
        },
        {
            "id": "e78",
            "title": "Eure M??tter",
            "description": "Eure M??tterBITTE NICHT AM LUMPI SAUGEN! ? Die neue Show!VERLEGUNG vom 16.03.2020 bzw. 16.05.2021 - Alle erworbenen Tickets behalten G??ltigkeit!Die Katze ist aus dem Sack! Aber der Hund fast schon im Beutel:?Bitte nicht am Lumpi saugen!? - die neue Show von EURE M??TTER ist da.??ber 20 Jahre ist es her, dass das Stuttgarter Comedy-Trio erstmals eineB??hne betrat und im Anschluss die Welt der Unterhaltung komplett auf linksdrehte. In ganz Deutschland und dar??ber hinaus wurden sie im Nu zuLieblingen des Comedy-Publikums mit ihrer einzigartigen Mischung aus Wort,Musik und Akrobatik. Okay, vielleicht ist ?Akrobatik? etwas ??bertrieben. IhreMischung aus Wort, Musik und meisterhaftem Tanz? Ja, also gut: Es ist eineMischung aus Wort, Musik und entspanntem Sitzen auf bequemen St??hlen. Injedem Fall einzigartig.Hunderttausende Live-Zuschauer und 50 Millionen YouTube-Views sp??terpr??sentieren EURE M??TTER mit ?Bitte nicht am Lumpi saugen!? nun zweiStunden v??llig neues Material, f??r das ganz klar gilt:Volles Rohr - all killer, no filler!",
            "startDateTime": "10/9/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=26335910145&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/gn7NFQ0q.jpeg"
        },
        {
            "id": "e79",
            "title": "German Brass  - Tournee",
            "description": "In der Formation GERMAN BRASS haben sich zehn Top-Musiker vereinigt, von denen jeder einzelne zu den besten seines Fachs geh??rt. Zusammen sind sie Weltspitze und bieten einzigartigen, unerreichten Musikgenuss. Was die Alchemisten des Mittelalters vergeblich versuchten, gelingt den Musikern im gemeinsamen Spiel mit Leichtigkeit: Sie machen Blech zu Gold. Gold f??r die Ohren ihres Publikums. Ob sie den bewegenden Bach spielen, den wuchtigen Wagner aus ihrer Charts notierten CD ??Celebrating Wagner?? oder moderne Evergreens ? der Sound von GERMAN BRASS trifft auch das anspruchsvollste Publikum ins Herz.Seit Jahrzehnten schreibt GERMAN BRASS als unverzichtbarer Bestandteil der weltweiten Musikszene eine beeindruckende Erfolgsgeschichte. Die Zeiten, in denen Pioniergeist gefragt war, um diese Musikrichtung ??berhaupt zu etablieren, sind inzwischen l??ngst Geschichte. Seit vielen Jahren f??llt das Spitzenensemble die gro??en Konzerts??le im In- und Ausland. Kritiker und Musikliebhaber in ganz Europa, in Asien und Amerika verneigen sich vor den Musikern.",
            "startDateTime": "12/12/21 18:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26348608957&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/qq3WkjaQ.jpeg"
        },
        {
            "id": "e80",
            "title": "Sol Gabetta & Alexei Volodin",
            "description": "Sonatenkunst mit Charisma - ?Ich komme sehr gerne hierher?, gibt Sol Gabetta unumwunden zu. Freiburg ist der charismatischen Cellistin ans Herz gewachsen. Und die Zuneigung beruht auf Gegenseitigkeit. Deshalb ist es eine Selbstverst??ndlichkeit, dass Sol Gabetta bereits seit einem Jahrzehnt zu einer festen Gr????e der Albert Konzerte geworden ist. Vor f??nf Jahren gaben sie und Alexei Volodin hier ihr gemeinsames Duo-Deb??t in einem ebenso einf??hlsamen wie temperamentvollen und begeistert umjubelten Sonatenabend.Wenn das Duo nun nach Freiburg zur??ckkehrt, stehen abermals drei Sonaten von ganz unterschiedlichem Charakter im Fokus. Schwelgerisch und zugleich voller sublimer Zartheit pr??sentiert sich etwa Brahms?? ?Regenlied?-Violinsonate bearbeitet f??r Cello, w??hrend C??sar Franck in seiner A-Dur-Sonate mit farbenpr??chtigen Harmonien das Tor zur musikalischen Moderne ??ffnet. Zu dieser z??hlt Benjamin Brittens Cellosonate. Seinem Freund Mstislav Rostropowitsch widmete er sie und verfasste mit ihr ein charaktervolles Portr??t des ber??hmten Cellisten.Programm der 1. Auff??hrung um 17:30 Uhr:Brahms, Violinsonate Nr. 1 G-Dur op. 78 (arr. f??r Violoncello in D-Dur)Franck, Sonate A-Dur f??r Violine und Klavier FWV 8 (arr. f??r Violoncello von Jules Delsart)Programm der 2. Auff??hrung um 20:30 Uhr:Britten, Sonate C-Dur f??r Violoncello und Klavier op. 65Franck, Sonate A-Dur f??r Violine und Klavier FWV 8 (arr. f??r Violoncello von Jules Delsart)Auff??hrungsdauer: ca. 70 min ohne Pause ? keine Bewirtung in den Foyers ?Sol Gabetta, VioloncelloAlexei Volodin, KlavierBitte beachten Sie die Schutz- und Hygienema??nahmen gegen eine veranstaltungsbedingte Ausbreitung der COVID-19 Pandemie unter https://www.konzerthaus.freiburg.de",
            "startDateTime": "3/5/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26348611587&a=774719&m=13738"
        },
        {
            "id": "e81",
            "title": "5.300 km zu Fu?? durch Europa - Reisevortrag: Einfach mal loslaufen - Jakobswege in Europa",
            "description": "Im August 2017 ist Witali mit seiner Freundin Svenja auf ein ungew??hnliches Abenteuer aufgebrochen. Entlang von Jakobswegen und spektakul??ren Fernwanderwegen sind sie Teile von Europa zu Fu?? durchgewandert. Erst 2600 km zu zweit und anschlie??end 1700 km alleine von Norwegen bis nach Portugal.Jetzt l??sst ihn das Gehen nicht mehr los und er will im Sommer erneut f??r 1500 km von K??ln nach Edinburgh aufbrechen, vielleicht auch einen Teil davon Barfu??. In diesem Vortrag erz??hlt er von den eindrucksvollen Landschaften, die es direkt vor der Haust??r gibt. Den wundervollen Menschen denen er begegnet ist und was es bedeutet, mit seiner Freundin, als auch alleine mehrere Monate am St??ck durch Sonne, Wind und Schnee zu laufen. Witali nimmt dich nicht nur mit auf sein Abenteuer zu Fu??, sondern viel mehr auf sein pers??nliches und auch philosophisches Abenteuer die Welt anders zu betrachten.",
            "startDateTime": "11/22/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=26355575573&a=774719&m=13738"
        },
        {
            "id": "e82",
            "title": "Magie der Travestie - Die Nacht der Illusionen",
            "startDateTime": "4/3/22 17:00",
            "venueId": "v7",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418904885&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/iLyOkMo6.jpeg"
        },
        {
            "id": "e83",
            "title": "Bruno Jonas - Meine Rede",
            "description": "Ein herrschaftsfreier Monolog f??r Fleischesser und Dieselfahrer - Vegetarier und Veganer willkommen?Immer, wenn man die Meinung der Mehrheit teilt, ist es Zeit sich zu besinnen.? (Mark Twain). Doch Besinnung ist nicht angesagt. F??r Innehalten und Nachdenken fehlt uns die Zeit, denn in sp??testens 10 Jahren, so die Vorhersagen der Experten haben wir den ?point of no return erreicht und dann wird die Erde unbewohnbar. Panik ist die angemessene Reaktion. Besser f??hlt man sich deshalb bei der besinnungslosen Mehrheit aufgehoben Die Mehrheitsmeinung bestimmt in Demokratien den Fortgang der politischen Entwicklungen. Bei sinkender Wahlbeteiligung allerdings kann eine Minderheit die Mehrheit ??berstimmen. Das ist normal und passiert immer wieder.Bruno Jonas l??sst sich dabei gedanklich von Ambrose Bierce leiten, der gesagt hat: Redekunst ist die Verschw??rung von Sprache und Handeln, um den Verstand zu hintergehen. Das Angebot, um sich das Hirn vernebeln zu lassen, ist vielf??ltig. Wer achtet schon auf sprachmanipulative Strategien, wenn sie unterhaltsam sind? Kant hat f??lschlicherweise geglaubt, der Mensch m??sse sich aus seiner selbstverschuldeten Unm??ndigkeit befreien. Heute befinden wir uns in einer Phase, in der sich der Mensch freiwillig in die Unm??ndigkeit aufmacht, weil es f??r ihn bequemer ist und mehr Spa?? bringt.mehr Infos: http://bruno-jonas.deFoto: Ralf Wilschewski",
            "startDateTime": "11/20/21 19:30",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=26397227683&a=774719&m=13738"
        },
        {
            "id": "e84",
            "title": "Avishai Cohen Big Vicious - Live 2020",
            "description": "Der Trompeter Avishai Cohen (nicht zu verwechseln mit dem Bassisten gleichen Namens) ist eine der f??hrenden Pers??nlichkeiten der internationalen Jazz-Szene und ein gefragter Trompeter seiner Generation. Obwohl tief in der Bebop- und Post-Bop-Tradition verwurzelt, gibt Cohen dem Jazz mit seinem modernen, lyrischen und unverwechselbaren Stil neue Impulse. Seinen Post-Bop-Stil kombiniert er mit energiereichen Improvisationen und Bez??gen auf Gr????en wie Don Cherry, John Coltrane, Ornette Coleman und Dizzy Gillespie.",
            "startDateTime": "5/1/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867291155&a=774719&m=13738"
        },
        {
            "id": "e85",
            "title": "SIMPLY THE BEST - Die Tina Turner Story",
            "description": "Zum 80. Geburtstag auf gro??er Tour: Die Erfolgs-Show um die Rock-Legende Tina Turner 2019 ist das Jahr besonderer Tina Turner-Jubil??en: Vor 35 Jahren erschien ihr ??ber 20 Millionen Mal verkauftes und mit vier Grammys ausgezeichnetes Album ?Private Dancer?, der Start eines unglaublichen Comebacks und einer Weltkarriere. Zu Ehren des 80. Geburtstags der ?Queen of Rock? geht ?Simply The Best - Die Tina Turner Story? auf gro??e Tournee durch Deutschland, ??sterreich und Italien.?Simply The Best? schildert mit viel Live-Musik und beeindruckenden Szenen das bewegte Leben der Rock-Ikone: Von den Anfangserfolgen, der harten Zeit mit einem drogens??chtigen und gewaltt??tigen Ehemann, dem Scheitern einer gro??en Liebe und schlie??lich, nach der Trennung, Tinas Neuanfang und raketenartiger Aufstieg in den 80ern bis hin zur Filmmusik von ?James Bond 007 - Goldeneye? Mitte der 90er.Anna Mae Bullock, geboren am 26. November 1939 in Brownsville, Tennessee (USA), aufgewachsen in Nutbush, wurde als Tina Turner zum Weltstar und zur Legende. Ab 1958 an der Seite ihres sp??teren Ehemannes Ike Turner. 1984 startete sie ein ??berragendes Comeback als Solo K??nstlerin, das in diesem Ausma?? nur mit dem von Elvis vergleichbar ist. 2009 ging die S??ngerin mit dem unverwechselbaren Timbre das letzte Mal auf Welttournee. Diese Tour war der gro??artige Abschluss einer au??ergew??hnlichen Karriere: Ein halbes Jahrhundert Rock-Geschichte mit H??hen und Tiefen, mit Aufstieg und Fall - und ??ber 180 Millionen verkauften Tontr??gern, unz??hligen Nummer 1-Hits und Chartplatzierungen wie ?Simply The Best?, ?Private Dancer? oder ?We Dont Need Another Hero?.Starring: Dorothea Fletcher als Tina Turner",
            "startDateTime": "1/14/22 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418944489&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/zJc9Yjao.jpeg"
        },
        {
            "id": "e86",
            "title": "Urban Priol - Wie im Film",
            "description": "Wie im Film. Das neue Kabarettprogramm von URBAN PRIOL.Man kennt das Gef??hl: Du wachst auf und denkst dir ? ich bin im falschen Film. Aber nicht einmal das Murmeltier gr????t dich. Deutschland im Jahr 2010: Ein Land ohne Agenda, eine Regierung ohne Kompa??. Ein Regierungsprogramm mit dem Motto: -?Scheitern als Chance.?Stolz verk??ndet die Praktikanten-Combo von Schwarz-Gelb: -?Wir fahren in der Krise auf Sicht!?So did the ?Titanic?. Als kleines Prinzip Hoffnung muss herhalten, dass die Eisberge, die auf Kollisionskurs liegen, dank der Klimaerw??rmung bis zum Crash abgeschmolzen sind. Und die selbsternannten Weltklimaretter feiern es schon als Erfolg, dass bei ihren verbalen Ausbl??hungen immerhin kein Methangas freigesetzt wird. Da sehnt man sich nach gro??em Kino, hofft darauf, dass irgendwann Bruce Willis erscheint und mit einem Satz die Probleme l??st: -?Geben Sie mir den Pr??sidenten!?Man stelle sich das in seiner ganzen Erb??rmlichkeit bei uns vor: Bruce Willis verlangt nach dem Pr??sidenten und es erscheint ? Horst K??hler, der gerade bei einer Charity-Gala ein Fohlen getauft hat und ganz herzlich von seiner Frau gr????en l??sst.Der t??gliche Irrsinn in unserer Banaldemokratie der herbeigetwitterten Facebook-J??nger zwischen mehrwertsteuerreduzierten Stundenhotels und westerwellschen Gockeleien ? gewogen und zu seicht empfunden.Mittendrin im tagesaktuellen Dickicht: Urban Priol. Er verkn??pft Zusammenh??nge, durchleuchtet das Dunkel, bringt Sprechblasen zum Platzen. Bis man verwundert den Kopf sch??ttelt: Wie im Film.Nat??rlich mit ??berl??nge. Demn??chst in Ihrem Theater. James Bond will return.",
            "startDateTime": "4/2/22 19:30",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=26450369829&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/nEr3iRAD.jpeg"
        },
        {
            "id": "e87",
            "title": "DER NUSSKNACKER",
            "description": "RUSSISCHES KLASSISCHES STAATSBALLETT - DER NUSSKNACKERMusik von P. I. TschaikowskyKlassisches Ballett in 2 AktenDer Nussknacker ist Weihnachten!Schon seit ??ber hundert Jahren nimmt Peter Tschaikowskys Ballett ?Der Nussknacker? einen festen Platz in der Theater- und Musikkultur der ganzen Welt ein. Jeden Winter freuen sich Jung und Alt ??ber die Gelegenheit, noch einmal in die zauberhafte Atmosph??re dieses Balletts einzutauchen.Allein in der Zeit der Kindheit, in der Traum und Wirklichkeit so untrennbar verbunden sind, ist es m??glich, sich von einem Moment zum anderen in die wunderbare M??rchenwelt zu begeben, in den sch??nen Prinzen zu verlieben, der die Gef??hle selbstverst??ndlich erwidert, aber auch ungew??hnliche Abenteuer am Weihnachtsbaum zu erleben. Der mittern??chtliche Stundenschlag k??ndigt sodann die Erf??llung der unglaublichsten W??nsche an.Von Peter Tschaikowsky im Jahr 1892 komponiert, nach einer literarischen Vorlage des romantischen M??rchens von E.T.A. Hoffmann, hat ?Der Nussknacker? sofort die Herzen des Publikums weltweit erobert. Mit dem Russischen Klassischen Staatsballett gelangt der Zuschauer in eine wunderbare Welt, in der lebendig gewordene Puppen tanzen, die bewaffneten M??usescharen unter dem Druck der Spielzeug-Armee zur??ckweichen, und am Ende das Gute und die Liebe triumphieren. Die berauschende Sch??nheit der Musik, das t??nzerische K??nnen der T??nzerinnen und T??nzer sowie die exquisite klassische Choreographie bescheren nicht nur den erfahrenen Liebhabern des klassischen Balletts, ob Jung oder Alt ein wahres Fest!Veranstalter: P.T.F. Deutsch-Russische Kulturf??rderungs GmbHMehr Info unter:  www.klassisches-ballett.com",
            "startDateTime": "12/18/21 16:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=26484174889&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/PgqqW3yd.jpeg"
        },
        {
            "id": "e88",
            "title": "Klavierduo Tal & Groethuysen",
            "description": "Aufgrund des st??dtischen Veranstaltungsverbotes zur Eind??mmung der Verbreitung des Coronavirus kann das Albert-Konzert mit den Klavierduo Tal & Groethuysen, Sergey Malov und Raphaela Gromes am 2. April 2020 in der Musikhochschule Freiburg leider nicht stattfinden.Das Konzert wird verschoben auf Freitag, den 23. Juli 2021 um 20 Uhr in der Musikhochschule Freiburg.Abonnenten der Albert Konzerte haben hierzu eine gesonderte Info per Post erhalten.Ihre Eintrittskarten behalten f??r den neuen Konzerttermin ihre G??ltigkeit und m??ssen nicht eingetauscht werden. Bringen Sie Ihre Karten einfach zum neuen Konzerttermin mit.Sollten Sie den neuen Konzerttermin nicht wahrnehmen k??nnen, k??nnen Sie Ihre Karten an der Vorverkaufsstelle, an der sie erworben wurden, zur??ckgeben.F??r privatwirtschaftliche Veranstalter, die keine ??ffentlichen Zusch??sse bekommen, wie die Albert Konzerte ist die Corona-Krise eine gro??e Herausforderung. Wir bitten Sie deshalb um eine solidarische Geste:- Unterst??tzen Sie uns im Rahmen der Aktion #seidabeiSchenkDeinTicket und verzichten auf die R??ckerstattung der von Ihnen bereits bezahlten Tickets oder einzelner Tickets. Bitte teilen Sie uns mit, falls Sie eine Spendenbescheinigung ben??tigen.- Tauschen Sie Ihr bereits bezahltes Ticket ein gegen einen Umtauschgutschein, der f??r beliebige zuk??nftige Albert-Konzerte eingel??st werden kann.Bitte nehmen Sie f??r beide Aktionen ebenfalls Kontakt zur der Vorverkaufsstelle auf, an der Sie Ihre Tickets erworben haben. Ihre Mitwirkung bedeutet uns sehr viel! Herzlichen Dank!Bitte beachten Sie: Da sehr viele Vorverkaufsstellen aufgrund der beh??rdlichen Auflagen aktuell nicht erreichbar und/oder geschlossen sind, bitten wir Sie, bei Ihrer Vorverkaufsstelle die aktuellen Service- und ??ffnungszeiten zu erfragen und sich dort zu informieren, ob die Veranstaltung aufgrund der l??ngeren Bearbeitungszeiten bereits zum Storno bzw. f??r Umtauschgutscheine freigeschaltet wurde.Hier die Kontaktdaten der wichtigsten Vorverkaufsstellen:BZ-Karten-Service, Tel. 0761 ? 496-8888, Email: mitarbeiter.kartenservice@bz-ticket.deBuchhandlung Rombach, Tel. 0761 ? 4500-2432, Email: klassik@rombach.deReservix, Tel. 0761 ? 88788-11, Email: tickets@reservix.deAD ticket, Tel. 0180 - 6050400Falls Sie Ihre Karten direkt bei den Albert Konzerten erworben haben und eine R??ckerstattung w??nschen, senden Sie Ihre Karten bitte zusammen mit Angabe Ihrer Kontoverbindung an das Kartenb??ro der Albert Konzerte: Albert Konzerte GmbH, Postfach 1349, 79013 FreiburgF??r R??ckfragen steht Ihnen das Kartenb??ro der Albert Konzerte gerne zur Verf??gung:Tel. 0761 ? 289442, Email: info@albert-konzerte.de-----------------------------------------------------------------------------------------Als eines der weltweit f??hrenden Klavierduos begeistern die israelische Pianistin Yaara Tal und ihr deutscher Partner Andreas Groethuysen immer wieder auf bedeutenden Konzertpodien wie dem Concertgebouw Amsterdam, der Mail??nder Scala, den Salzburger Festspielen und dem Wiener Musikverein. Bei den Albert Konzerten reizen Tal & Groethuysen die symphonischen Qualit??ten des Konzertfl??gels aus und lassen so Orchesterklassiker von Beethoven und Schubert einmal anders lebendig werden. Unterst??tzt werden sie in diesem Konzert von Cello-Jungstar Raphaela Gromes und dem experimentierfreudigen Multi-Instrumentalisten Sergey Malov: Beide pr??sentieren sich auch solo in Beethovens posthum entdecktem Werkfragment, das er zwei unbekannten Wiener Brillentr??gern zugedacht hatte.Programm:Mendelssohn, Hebriden-Ouvert??re op. 26Beethoven, Duo Es-Dur f??r Viola und Violoncello WoO 32 ?Duett mit zwei obligaten Augengl??sern?Schubert, Symphonie Nr. 7 h-Moll D 759 ?Unvollendete?Beethoven, Symphonie Nr. 5 c-Moll op. 67Klavierduo Tal & GroethuysenSergey Malov, ViolineRaphaela Gromes, Violoncello",
            "startDateTime": "7/23/21 20:00",
            "venueId": "v27",
            "offerURL": "https://www.awin1.com/pclick.php?p=26484174893&a=774719&m=13738"
        },
        {
            "id": "e89",
            "title": "Sergej Krylov | Violine",
            "description": "Aufgrund des st??dtischen Veranstaltungsverbotes zur Eind??mmung der Verbreitung des Coronavirus kann das Albert-Konzert mit den Sergej Krylov und Michail Lifits am 8. Mai 2020 in der Musikhochschule Freiburg leider nicht stattfinden.Das Konzert wird verschoben auf Montag, den 19. Juli 2021 um 20 Uhr in der Musikhochschule Freiburg.Abonnenten der Albert Konzerte haben hierzu eine gesonderte Info per Post erhalten.Ihre Eintrittskarten behalten f??r den neuen Konzerttermin ihre G??ltigkeit und m??ssen nicht eingetauscht werden. Bringen Sie Ihre Karten einfach zum neuen Konzerttermin mit.Sollten Sie den neuen Konzerttermin nicht wahrnehmen k??nnen, k??nnen Sie Ihre Karten an der Vorverkaufsstelle, an der sie erworben wurden, zur??ckgeben.F??r privatwirtschaftliche Veranstalter, die keine ??ffentlichen Zusch??sse bekommen, wie die Albert Konzerte ist die Corona-Krise eine gro??e Herausforderung. Wir bitten Sie deshalb um eine solidarische Geste:- Unterst??tzen Sie uns im Rahmen der Aktion #seidabeiSchenkDeinTicket und verzichten auf die R??ckerstattung der von Ihnen bereits bezahlten Tickets oder einzelner Tickets. Bitte teilen Sie uns mit, falls Sie eine Spendenbescheinigung ben??tigen.- Tauschen Sie Ihr bereits bezahltes Ticket ein gegen einen Umtauschgutschein, der f??r beliebige zuk??nftige Albert-Konzerte eingel??st werden kann.Bitte nehmen Sie f??r beide Aktionen ebenfalls Kontakt zur der Vorverkaufsstelle auf, an der Sie Ihre Tickets erworben haben. Ihre Mitwirkung bedeutet uns sehr viel! Herzlichen Dank!Bitte beachten Sie: Da sehr viele Vorverkaufsstellen aufgrund der beh??rdlichen Auflagen aktuell nicht erreichbar und/oder geschlossen sind, bitten wir Sie, bei Ihrer Vorverkaufsstelle die aktuellen Service- und ??ffnungszeiten zu erfragen und sich dort zu informieren, ob die Veranstaltung aufgrund der l??ngeren Bearbeitungszeiten bereits zum Storno bzw. f??r Umtauschgutscheine freigeschaltet wurde.Hier die Kontaktdaten der wichtigsten Vorverkaufsstellen:BZ-Karten-Service, Tel. 0761 ? 496-8888, Email: mitarbeiter.kartenservice@bz-ticket.deBuchhandlung Rombach, Tel. 0761 ? 4500-2432, Email: klassik@rombach.deReservix, Tel. 0761 ? 88788-11, Email: tickets@reservix.deAD ticket, Tel. 0180 - 6050400Falls Sie Ihre Karten direkt bei den Albert Konzerten erworben haben und eine R??ckerstattung w??nschen, senden Sie Ihre Karten bitte zusammen mit Angabe Ihrer Kontoverbindung an das Kartenb??ro der Albert Konzerte: Albert Konzerte GmbH, Postfach 1349, 79013 FreiburgF??r R??ckfragen steht Ihnen das Kartenb??ro der Albert Konzerte gerne zur Verf??gung:Tel. 0761 ? 289442, Email: info@albert-konzerte.de------------------------------------------------------------------------------------------Ein virtuoser Violinist aus Russland trifft einen ph??nomenalen Pianisten aus Usbekistan: Dem letzteren attestiert die Frankfurter Allgemeine Zeitung ?begl??ckende Klangfarbenfreudigkeit?, ersterer geh??rt als Meistersch??ler von Salvatore Accardo und Proteg?? von Mstislav Rostropowitsch seit Jahren zur international ersten Riege der Geigensolisten. Gemeinsam meistern sie einen Querschnitt durch die Romantik mit Perlen der Violinliteratur: Tschaikowskys traumverlorene ?Meditation? trifft auf Edvard Griegs von skandinavischer Folklore durchdrungene c-Moll-Violinsonate, gekr??nt von C??sar Francks mitrei??ender, tief bewegender Violinsonate in A-Dur.Neues Programm:Tschaikowsky, M??ditation (aus Souvenir d??un lieu cher op. 42)Grieg, Sonate f??r Violine und Klavier Nr. 3 c-Moll op. 45Franck, Sonate f??r Violine und Klavier A-Dur FWV 8Sergej Krylov, ViolineMichail Lifits, Klavier",
            "startDateTime": "7/19/21 20:00",
            "venueId": "v27",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418981269&a=774719&m=13738"
        },
        {
            "id": "e90",
            "title": "Konstantin Wecker - UTOPIA. Eine Konzertreise",
            "description": "KONSTANTIN WECKER ? UTOPIAeine Konzertreise mit multimedialer B??hnenshow ?Utopia. Eine Konzertreise? hei??t die neue B??hnenproduktion von und mit Konstantin Wecker, bei der Wecker sein Publikum auf eine sehr pers??nliche Suche nach Utopia mitnehmen wird, eine sehnsuchtsvolle Reise in eine herrschaftsfreie Welt. Zu h??ren sind neu komponierte Lieder (Alles Allen, Utopia) kombiniert mit (fast) vergessenen, aber noch immer g??ltigen Titeln (Revoluzzer, Und das soll dann alles gewesen sein), beliebten Wecker-Klassikern, sowie eigenen Texten, Gedichten und Gedanken im Dialog mit solchen von gesch??tzten Weggef??hrt*innen, K??nstler*innen, Autor*innen, Philosoph*innen und politischen Aktivist*innen. ?Nein ich h??r nicht auf zu tr??umen von der herrschaftsfreien Welt? singt Wecker in seinem Lied Den Parolen keine Chance. Sein neues Programm f??hrt diesen Gedanken nun konsequent weiter. Utopia ist eine musikalische Laudatio und ein leidenschaftliches k??nstlerisches Pl??doyer daf??r, das angeblich ?nicht Realisierbare? endlich m??glich werden zu lassen bevor die Realisten unsere Welt endg??ltig zerst??rt haben. Ein Blick in deutsche W??rterb??cher verr??t viel ??ber Macht und Herrschaft. Dort wird das Wort Utopie als eine ?nicht realisierbare Idee? bzw. als ?Hirngespinst? und das Adjektiv utopisch als ?nach dem Unm??glichen strebend? bezeichnet. Aber wer sagt eigentlich, dass eine Utopie ?nicht realisierbar? oder ?unwirklich sein sollte. Und wer hat definiert, dass ein in vielen Momenten schon gelebtes Utopia unm??glich ist? Es gibt keinen besseren Moment f??r Utopien als den gegenw??rtigen: Jeder Augenblick ist ewig? singt Konstantin Wecker in seinem Lied SoScheeSchoA und sagt zu seinem Utopia-Projekt: ?Wir m??ssen heute das Utopische gemeinsam suchen, denken, fordern, es leben und daf??r handeln! Was w??re die Alternative angesichts der m??glichen Vernichtung des gesamten Planeten??Auf diesem Weg braucht es gemeinsame Entdeckungen und Erlebnisse, die Mut machen, die eigene Angst und Ohnmacht zu ??berwinden: ?Die Vertreter des Machbaren, Notwendigen, des angeblich Realistischen und einzig Realisierbaren hatten lange genug Zeit. Sie k??nnen nur zerst??ren. Ihre Show ? oder besser gesagt, ihr Business ? darf nicht weiter gehen?, sagt Konstantin Wecker. ?Es reicht!? F??r ihn ist es h??chste Zeit f??r eine umfassende Laudatio, f??r eine Ode auf all jene Utopist*innen, die seit Jahrhunderten denunziert und verfolgt werden, und die meistens ganz richtig liegen mit ihrer Kritik und ihren Visionen.Utopia wird eine sehr pers??nliche und politische Zeitreise in Vergangenheit und Zukunft, um all die eigenen, fremden und kollektiven Sehns??chte, Rebellionen, Ideen und gelebten Momenten zu entdecken, in denen eine herrschaftsfreie Weltgesellschaft heute l??ngst entsteht und lebendig wird.",
            "startDateTime": "12/16/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26641057873&a=774719&m=13738"
        },
        {
            "id": "e91",
            "title": "Teddy Show - Neues Programm",
            "description": "Seine YouTube-Fans kennen und  lieben ihn: Tedros ?Teddy? Teclebrhan. Inzwischen hat der Schauspieler auch auf  der Comedy-B??hne Kultstatus  erreicht. Ab  Februar  2020 kommt Teddy mit einem neuen Programm wieder auf gro??e Tour. Nach seiner kleinen intimen ?ClubTour?,  die  ihn 2019 nach Kiel,  L??neburg  und L??beck  bringt, zieht es den  Comedian wieder auf   die gr????eren   B??hnen   in   Deutschland, ??sterreich und der Schweiz. Am 18. April 2020 pr??sentiert Teddy seine brandneue Live-Show in  der  Sporthalle  in  Hamburg. Was  Teddy  sich daf??r   alles   ??berlegt hat,wird   noch   nicht verraten.  Aber  es  wird  garantiert  wieder  eine gro??e Show werden, die so einige ??berraschungen zu bieten hat. Denn keiner vereint Comedy, Musik, Tanz und Schauspielerei so gekonnt zu einem einzigartigen und manchmal auch sehr verr??ckten Erlebnis wie Teddy.Teddy ist u.a. bekannt f??r seine Rollen als Ernst Riedler, Antoine, Percy und Lohan Cohan, in denen  er  sich humorvoll,  zweideutig und schauspielerisch gekonnt  an  verschiedensten Klischees und Stereotypen entlang hangelt. Der 35-J??hrige arbeitet dabei mit Dialekten und Jugendsprache  und macht  Aussagen  wie ?Hasch du ??berhaupt gelernt?!? oder ?Ich tu hasseln? zu Running Gags unter seinen Fans. Mit  seinem ersten Live-Programm ?Was labersch du...?!? f??llte er in  ??ber  100  Shows  in Deutschland, ??sterreich und der Schweiz die Hallen. Sein Auftritt in der Stuttgarter Schleyer-Halle wurde an zwei Tagen von insgesamt 19.000 Zuschauern besucht, die Live-Show als DVD aufgezeichnet  und  bei  Netflix  ver??ffentlicht.  Teddys popul??res YouTube-Video ?Umfrage zum Integrationstest? z??hltmittlerweile ??ber 36 Millionen Aufrufe.",
            "startDateTime": "10/11/21 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=26733788821&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/vQFR8N40.jpeg"
        },
        {
            "id": "e92",
            "title": "Element Of Crime",
            "description": "Seit 33 Jahre spielen sie ihre Songs. Und bringen ihre Platten heraus, genauso wie sie sich das vorstellen, eine nach der anderen. Es gibt wenig Vergleichbares, keine andere deutschsprachige Band, die diese eigenartige Mischung aus Folkrock und Blues, Artrock und Kinderlied, Krachorgie und Schmalzmelodie in die Welt br??chte, ohne auch ? wie es scheint ? nur einen Moment dar??ber nachzudenken, ob das gerade in den Zeitgeist passt oder nicht, ob das f??r neue oder alte Medien taugt, ob das einer versteht, ob sie das ??berhaupt selber verstehen, ob das nun traurig oder lustig, h??sslich oder sch??n, Tiefsinn oder Spinnerei ist.Auf den ersten Blick sieht alles nach Verweigerung aus: Sie weigern sich, immer das Gleiche zu machen und sie weigern sich, sich neu zu erfinden. Sie weigern sich, sich der Streaming- und YouTube- Landschaft anzupassen. Sie geben ihre Musik nicht f??r Werbung her. Sie spielen lieber dreimal im Tempodrom als einmal in der Max-Schmeling- Halle. Sie lassen sich nicht festnageln und so weiter und so fort, man k??nnte es noch lange fortf??hren, aber das kann das Geheimnis ihres Erfolges nicht sein, das sind alles nur Dinge, die nicht getan werden, aber geliebt wird man nur f??r das, was man tut, nicht f??r das, was man l??sst.Und so entsteht ein anderes Bild dieser Band: Einer Band, die einen so unverwechselbaren Stil in Sachen Song, Sound und Haltung hat, dass man nur zwei M??glichkeiten hat: Man kann das m??gen oder eben auch nicht. Nie sind ELEMENT OF CRIME nur ?irgendwie interessant? oder ?auch ganz okay?.Und da w??ren wir bei ?Schafe, Monster und M??use?. Ist das ein Verweis auf das Vorg??ngerwerk ?Lieblingsfarben und Tiere?? Wohl kaum. Ein Monster ist kein Tier und eine Maus ist keine Farbe. Es ist aber sicher auch keine zuf??llige Wahl. Es ist der Titel eines Songs auf dem Album, der von Tr??umen erz??hlt, der Welt ?hinter geschlossenen Lidern?, in der eigene, andere Gesetze gelten, diktiert vom Unterbewusstsein, kontrolliert und durchkreuzt vom ??ber-Ich. Das ist auch eine gute Metapher f??r das poetische Prinzip bei Element of Crime: Die musikalische und textliche Arbeit mit Assoziationen, unterbewussten, improvisierten Elementen, das wie zuf??llige Ineinander-st??rzen der Stilmittel, das Arbeiten mit und das Durchbrechen von bekannten Mustern, das Kaleidoskop der Klangfarben, Melodien, improvisierten Kakophonien, das ganze psychedelische Instrumentarium, mit dem diese Band seit so langer Zeit ohne mit der Wimper zu zucken hantiert.?Schafe, Monster und M??use?: Da gibt es Soulballaden wie ?Am ersten Sonntag nach dem Weltuntergang?, Chansons wie ?Bevor ich dich traf?, Folksongs wie ?Die Party am Schlesischen Tor?, Pubrockkracher wie ?Ein Brot und eine T??te?, Desert-Rock-Aufschneidereien wie ?Stein, Schere, Papier? und vieles mehr. Und dann ist wieder alles anders, wenn bei ?Am ersten Sonntag? Jakob Iljas artrockige Kaputtgitarre in den Soloteil s??gt, wenn bei ?Bevor ich dich traf? die wienerischen Geigen in die letzte Strophe einfr??sen, wenn bei ?Die Party am Schlesischen Tor? eine psychedelisch krachende Blaskapelle durchs Bild wankt, st??ndig Dinge passieren, auf die man nicht gefasst sein kann, Richard Pappik die Tempi verschleppt und beschleunigt, wie es gerade sein muss, mit Rhythmen und Klangfarben jongliert und ??berhaupt sein schmutziges Spiel mit einer Rockmusik spielt, die auf dieser Platte immer wieder neu definiert wird und Sven Regeners knarzige Stimme dazu Poesie verteilt, als werfe er Fleischfetzen auf einen Grill aus alten ??lf??ssern. Musik und Text, da taumeln sie zusammen in die aufgehende Sonne und st??tzen sich gegenseitig wie zwei ersch??pfte Partyg??nger nach einer langen Nacht am Schlesischen Tor. Zerzauste V??gel, die von ihren Familien unterst??tzt werden, der Hendl- Jahn, eine Gratiszigarre beim Kauf eines neues Lebens, wo St??rme, Blitze und Donner nicht Wetter, sondern ein Arsenal gegen gute Laune sind, die Frau vom Supermarkt, Black Friday beim Sterni im Sp??ti ... wer bitte bringt sowas in so wunderbar klingenden Texten unter??Schafe, Monster und M??use? ist ein langes, ultrapsychedelisches Album geworden, das l??ngste in der Geschichte der Band. Es ist, als wollten ELEMENT OF CRIME das Albumformat, f??r das diese Band von Anfang an wie keine zweite geschaffen war, bis auf das ??u??erste ausreizen, vielleicht ein letztes Mal, man wei?? nicht, wie es weitergehen wird damit, die Welt ver??ndert sich.Aber, und das ist das Entscheidende: Die Lieder bleiben.Charlotte Goltermann (Berlin, 2018)",
            "startDateTime": "8/4/21 19:15",
            "venueId": "v4",
            "offerURL": "https://www.awin1.com/pclick.php?p=26757244803&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/eugt0yju.jpeg"
        },
        {
            "id": "e93",
            "title": "The Australian Pink Floyd Show - All That You Feel",
            "description": "THE AUSTRALIAN PINK FLOYD SHOW, die weltweit bekannteste und erfolgreichste Pink Floyd Tribute-Band, kommt auf gro??e Deutschland-tour. Die Tournee umfasst insgesamt 18 Termine ? darunter Berlin, Hamburg, M??nchen, Frankfurt, K??ln, Oberhausen, Stuttgart und Leipzig. Es ist bereits die dreizehnte Produktion, mit der die Australier die Pink-Floyd-Fans hierzulande begeistern. Das neue Programm unter dem Motto ?All That You Feel? pr??sentiert die gr????ten Hits der Alben ?Meddle?, ?The Dark Side of The Moon?, ?Wish You Were Here?, ?Animals?, ?The Wall? und weitere Klassiker aus allen Schaffensphasen von Pink Floyd. Die herausragende Show ist eine perfekte Huldigung an die Herren Barrett, Waters, Gilmour, Wright und Mason. Angesichts des satten, aber sensibel ausgesteuerten Sounds und Stimmen, die wie die der Originale klingen, zerstreuen sich bei den Konzerten der Band schnell jegliche Zweifel daran, dass hier niemand anderes als leidenschaftliche und hochprofessionelle Musiker auf der B??hne stehen. Durch ihr detailverliebtes K??nnen, den Sound und die Show von Pink Floyd so perfekt wie m??glich zu reproduzieren, gelingt es THE AUSTRALIAN PINK FLOYD SHOW, das breite Spektrum zwischen den psychedelischen Tr??umen der 1960er Jahre und dem Bombast der 1980er Jahre auf einzigartige Art und Weise auf die B??hne zu bringen. Mit ihren von Tour zu Tour programmatisch wechselnden Shows gelingt es ihnen dabei stets, den Klang und die Atmosph??re eines Pink Floyd-Konzertes perfekt wiederzugeben. In Kombination mit einer aufw??ndigen Licht- und Lasershow, neuen Animationen auf einer LED-Wand, die die Musik visuell untermalen sowie riesigen, aufblasbaren Figuren auf der B??hne, werden die Deutschlandauftritte von THE AUSTRALIAN PINK FLOYD SHOW auch 2020 wieder zu einem einmaligen Konzerterlebnis und zum Muss f??r jeden Pink Floyd-Fan. Was 1988 in Australien mit dem Aushang eines Zettels mit der Aufschrift ?S??nger und Keyboarder f??r Band gesucht. Professionelle Einstellung Voraussetzung. Wir spielen nur Pink Floyd? in einem Plattenladen in Adelaide begann, f??llt ??ber drei??ig Jahre sp??ter gro??e Hallen auf der ganzen Welt. ??ber die Jahre ist THE AUSTRALIAN PINK FLOYD SHOW l??ngst zu einer musikalischen Institution geworden, die Ma??st??be setzt. Kein Wunder, lautete das Credo der Australier doch von Anfang an: So nah am Original wie nur m??glich. Dass sie ihr Handwerk perfekt beherrschen, hat THE AUSTRALIAN PINK FLOYD SHOW bereits einem Millionenpublikum bewiesen und selbst kritischste Fans ??berzeugt. Foto: Ben Donoghue",
            "startDateTime": "3/11/22 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=26885418375&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/hP5CNxpg.jpeg"
        },
        {
            "id": "e94",
            "title": "Fantasy - Die gro??e Casanova Arena Tour 2020/2021",
            "description": "Das deutsche Schlager-Erfolgs-Duo FANTASY konnte mit Klaus Leutgeb einen neuen Tourneeveranstalter f??r sich gewinnen.Mit der Unterzeichnung des Tourneevertrages zwischen dem Duo FANTASY, Manager Andreas FERBER und Klaus LEUTGEB, CEO der LEUTGEB ENTERTAINMENT GROUP, wurde ein deutliches Zeichen f??r die Zukunft des Schlagerduos gesetzt und die Weichen in Richtung eines progressiv-erfolgreichen internationalen Show- und Entertainmentkurses gestellt.Event-Profi Klaus Leutgeb sieht die an ihn ??bertragene Aufgabe der Tourneeorganisation f??r das Erfolgsduo FANTASY als willkommene Herausforderung und hat bereits Gro??es vor. Im Rahmen einer mit Ende 2020 startenden Tournee die 45 Konzerte in Deutschland, der Schweiz und ??sterreich umfasst, wird mit einem gro??artigen B??hnendesign und einer einzigartigen konzeptuellen Neugestaltung der Showelemente, ein erfolgsorientierter Weg beschritten um das Erfolgsduo in das geb??hrende Rampenlicht zu setzen und den Fans unvergessliche Konzerterlebnisse bei FANTASY 2.0 zu bieten.Nur wenige K??nstler verstehen es, wie FANTASY, tausende Fans auf eine Reise, in eine Phantasiewelt mit ausgelassener Partystimmung, stillen Momenten, Gedanken an Leidenschaft und Liebe mitzunehmen. Gro??artige Unterhaltung ist wie bei jedem FANTASY-Konzert auch bei der 2020 startenden Tournee garantiert!Seit mehr als 20 Jahren beweisen Freddy Malinowski und Martin Hein, dass die Begriffe Fantasy und Schlagererfolg untrennbar zusammengeh??ren. Ein Meilenstein der Fantasy Karriere war sicherlich die Tournee 2012 mit Schlagerk??nigin Andrea BERG. Als Vorgruppe konnte FANTASY dort begeistern und tausende neue Fans f??r sich gewinnen. Seither ist das Duo aus den gro??en TV-Shows nicht mehr wegzudenken und sorgt bei seinen einzigartigen Live-Konzerten f??r ausverkaufte Arenen. Sie haben sich definitiv in die erste Reihe der deutschsprachigen Schlagerszene eingereiht.Original-Content von: Leutgeb Entertainment Group GmbH, ??bermittelt durch news aktuell Diese Meldung kann unter https://www.presseportal.de/pm/129052/4222178 abgerufen werden.Die Liste der Auszeichnungen, die das Duo mit den spektakul??r sch??nen B??hnenshows verliehen bekam, ist lange und umfasst neben zahlreichen Gold- und Platinauszeichnungen ihrer Alben, im gesamten deutschsprachigen Raum, 5 Echo Nominierungen und 3 Auszeichnungen in Folge (2017, 2018, 2019) beim Fest der Besten aus den H??nden von Florian Silbereisen. Ein Ende ihrer au??ergew??hnlichen Karriere ist noch lange nicht in Sicht und die eingeschworene Fangemeinde von FANTASY darf sich jetzt schon auf die Konzerttournee 2020/21 freuen.",
            "startDateTime": "5/18/22 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=26960048875&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/OJecbjWG.jpeg"
        },
        {
            "id": "e95",
            "title": "Dschungelbuch - das Musical - Das Musical-Erlebnis f??r die ganze Familie!",
            "description": "Musical-Macher schaffen unvergessliche Show mit furiosem Happy-EndBestens ausgebildete Musical-Darsteller bringen dank mitrei??ender Songs, temporeicher Choreographien und witziger Dialoge Leben in den Urwald. Mit einem farbenfrohen B??hnenbild und eindrucksvollen Kost??men entsteht die prachtvolle Dschungelwelt. Die bunte Reise durch den geheimnisvollen Urwald wird mit Licht- und Nebeleffekten stimmungsvoll in Szene gesetzt.Das Theater Liberi inszeniert den Bestseller von Rudyard Kipling als modernes Musical f??r die ganze Familie. Unterhaltsame Eigenkompositionen und temporeiche Choreographien versprechen ein spannendes Live-Erlebnis f??r Kinder ab vier Jahren, Eltern und Gro??eltern.Freunde und Feinde machen Moglis Dschungelleben zum gro??en AbenteuerMithilfe seines treuen Freundes und Lehrers Balu und dem weisen Panther Baghira erlernt Mogli die Gesetze des Dschungels, um in das Wolfsrudel aufgenommen zu werden. Dabei erlebt er den Urwald mit all seinen Sch??nheiten. Aber auch den Gefahren: Der dreisten Affenbande, der hypnotisierenden Schlange Kaa und vor allem dem gef??hrlichen Tiger Shir Khan! Und als ihm dann noch das M??dchen aus dem Dorf begegnet, steht Moglis Welt endg??ltig auf dem Kopf?Freundschaften, die Grenzen ??berwindenSeit ??ber hundert Jahren fasziniert die Geschichte vom Findelkind Mogli ganze Generationen. Das Theater Liberi l??sst die Welt des Jungen, der von W??lfen im Dschungel aufgezogen wird, zu neuem Leben erwachen. In dem Wolfsrudel um Oberhaupt Akela, dem herzensguten B??ren Balu und dem weisen Panther Baghira hat Mogli eine neue Familie gefunden, die ihm die Gesetze des Dschungels lehrt. Aufregende und gro??e Abenteuer stehen bevor, denn Mogli trifft nicht nur auf eine wilde Affenbande, sondern auch auf ulkige Geier und die geheimnisvolle Schlange Kaa. Aber der Urwald birgt auch Gefahren: Der Tiger Shir Khan f??rchtet seine Stellung als K??nig des Dschungels und will das Menschenkind vertreiben. Mogli beginnt sich zu fragen, wo er eigentlich hingeh??rt. Und als ihm dann noch das M??dchen mit der roten Blume begegnet, steht seine Welt endg??ltig auf dem Kopf?Auf der Suche nach der eigenen Identit??tIn der unterhaltsamen Adaption von Liberi-Autor Helge Fedder geht das Findelkind Mogli auf Identit??tssuche. Dabei lehrt ihn die Gemeinschaft im Dschungel, was Zugeh??rigkeit und Geborgenheit bedeuten. ?Mogli versucht zu verstehen, wer er ist und wo er eigentlich hingeh??rt. Zum Gl??ck stehen ihm seine Freunde dabei hilfreich zur Seite?, verr??t Balu-Darsteller Okan ?en. Moglis Reise wird begleitet von den eigens komponierten Titeln der Musiker Christoph Kloppenburg und Hans Christian Becker. ?Mal humorvoll, mal ernst, aber immer unterhaltsam?, beschreibt Kloppenburg die St??cke. ?Musikalisch ist alles dabei: eine groovende Affenbande, Shir Khan als K??nig des Rock n Roll und ein funkiges Finale.?",
            "startDateTime": "1/6/23 11:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=27041815885&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/J3gwpz2T.jpeg"
        },
        {
            "id": "e96",
            "title": "MICHAEL SCHULTE - ?HIGHS & LOWS? TOUR 2020",
            "description": "?Beruhigend, lebensfroh und voller Energie? (FFH), so kennt man MICHAEL SCHULTE bei allem was er tut. Nachdem  sich  der  Singer-Songwriter mit ?You  Let  Me  Walk  Alone? beim  Eurovision Songcontest 2018 in die Herzen aller Zuschauer gesungen hat, k??nnte auch 2019 nicht besser f??r ihn laufen: Nach ausverkauften Konzerten auf seiner ?Dreamer? Tour, ist er mit seiner Radiohymne ?Back To The Start? und weiteren Songs auf zahlreichen Festivals und Open-Airs quer durch ganz Deutschland  unterwegs.  Mit  seinem  Sommer-Hit und  seiner  kommenden  Single  ?All  I  Need?  (V?? 16.08.19) liefert er gleichzeitig den ersten Vorgeschmack auf seinen n??chsten gro??en musikalischen Coup: Das anstehende Album ?Highs & Lows? (V?? 25.10.19).Mit dem Album-Titel verspricht MICHAEL SCHULTE seinen Fans auch weiterhin ehrliche, ungesch??nte und  vor allen Dingen  pers??nliche  Einblicke  in  sein  Leben:?Aus  den  Tiefen  des  Lebens  gest??rkt rauskommen und die H??hen genie??en und zu sch??tzen wissen?Das ist das gro??e Thema auf diesem Album.?Mittlerweile Familienvater, hat sich sowohl das Songwriting, als auch das Privatleben von MICHAEL SCHULTE ver??ndert: ?Musikalisch gehen die Album-Songs sehr stark in die Richtung der letzten drei Singles, auch wenn man nat??rlich ein paar neue Sachen ausprobiert. Was einem aber sicherlich  auff??llt  ist,  dass  die  Inhalte  und  Texte  der  Songs teilweise  anders  sind?denn  ich bin mittlerweile in einem ganz anderen Abschnitt meines Lebens angelangt und setze mich mit anderen Themen auseinander.?Diese sp??rbare Nahbarkeit sch??tzen Fans und Medien gleicherma??en: Nicht umsonst wird ihm trotz ?Schulte-Fieber?  (Focus)  nachgesagt,  dass  er  immer  ?bodenst??ndig,  symphatisch,  norddeutsch? geblieben ist (t-online). Sp??testens bei der Verleihung des Bambi-Publikumspreises zeigte MICHAEL SCHULTE, dass er auf seinem Weg nach ?You Let Me Walk Alone? mit sicher nicht alleine ist ?und dieser noch lange nicht vorbei ist. Auf seiner ?Highs & Lows? Tour 2020 wird ereinen Blick in den R??ckspiegel, gleichzeitig aber auch in die Zukunft wagen. Foto: ?? Sandra Ludewig",
            "startDateTime": "10/7/21 20:00",
            "venueId": "v22",
            "offerURL": "https://www.awin1.com/pclick.php?p=27041816427&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/erjh2q9P.jpeg"
        },
        {
            "id": "e97",
            "title": "OTTO - Live 2021",
            "description": "Ottos bisher letzte Tour endete am 17. Oktober 2017. Am 4. April 2021 soll?s wieder losgehen: OTTO ? live! 900 Tage werden inzwischen vergangen sein. ?Und zwar genau 900?, behauptet Otto. ?Ich z??hle n??mlich die Tage, an denen ich nicht auf Tour sein darf.? An diesen Tagen ist einiges passiert: Otto hat drei Geburtstage gefeiert, darunter sogar einen runden. Bei der Gelegenheit ist er zum Ehrenb??rger seiner Heimatstadt Emden ernannt worden, dort ist sogar eine Fu??g??ngerampel mit seiner speziellen Gangart best??ckt worden, Otto hat im Fernsehen seine Geheimakte aufgebl??ttert, der Bundespr??sident hat ihm ein echtes Verdienstkreuz angeh??ngt, mehrere Museen haben sein malerisches Werk gezeigt, seine Gro??e Ottobiographie ist erschienen, ein Spielfilm ist in Arbeit, und Ottos Anerkennung als Weltkulturerbe ist wohl nur noch eine Frage der Zeit.Wer OTTO vorher noch einmal live und im Original sehen m??chte, sollte die Gelegenheit also nutzen ? die neue Tournee f??hrt wieder in gut 75 St??dte und kreuz und quer durch den gesamten deutschlachenden Raum: von Aurich bis Z??rich, von Neu Brandenburg bis Wiener Neustadt.Otto hat sich nicht ver??ndert: das erste O steht weiter f??r Ostfriesland, das erste T f??r Tempo, das zweite f??r Timing, und das zweite O f??r ?Oje, wie schnell die Zeit vergeht!?Deswegen haben wir Otto gefragt, was uns bei seiner n??chsten Tournee erwartet. Otto muss nicht lange nachdenken: ?Ich w??re ein komischer Komiker, wenn ich heute, eineinhalb Jahre vor dem Start, schon w??sste, was ich 2021 auf der B??hne machen werde ? ich wei?? blo?? eins, meine Gitarre werde ich auf jeden Fall mitnehmen, und deswegen hei??t bis dahin nat??rlich: ??ben, ??ben, ??ben! Das gilt auch f??r mich ? vor allem aber f??rs Publikum. Das muss die Texte ja fehlerlos mitsingen k??nnen ...? Er grinst. ?Ich verlass mich auf Euch!?",
            "startDateTime": "11/1/22 20:07",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=27041816465&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/zItsOLW9.jpeg"
        },
        {
            "id": "e98",
            "title": "Sarah Lesch",
            "description": "Sarah Lesch ist eine der gro??en Songwriterinnen der neuen deutschen Liedermacherszene. Sich berufend auf die Tradition, auf das Geradeheraussprechen, aber mit dem Blick und der Haltung im Jetzt, im Morgen. Mit mittlerweile vier Alben und unz??hligen Konzerten im Gep??ck wirbt Sarah Lesch weiter best??ndig f??r Weniger Ich, mehr Wir: Ihre Songs stellen die richtigen Fragen, reichen die Hand, bieten Hilfe an, werden zu Begleitern. Mit Den Einsamen zum Troste erscheint nun eine Auswahl an Liedern, die die K??nstlerin selbst durchs Leben begleiten.Sarah wird mit dem neuen Album ?Der Einsamkeit zum Trotze?, den Liedern und Geschichten und mit einer akustischen Besetzung unterwegs sein.https://sarahlesch.de/Haltet euch bitte an die jeweils geltenden Ma??nahmen des Stufenplans der Hessischen Landesregierung. Diese findet ihr unter:https://soziales.hessen.de/.../aktuelle-informationen-coronaoder https://www.hanau-corona.de/Wir freuen uns trotz Einschr??nkungen sehr darauf, zusammen mit euch wieder tolle Abende in gem??tlicher Atmosph??re zu genie??en!Eure Teams vom KUZ und EllisGef??rdert vom Hessischen Ministerium f??r Wissenschaft und Kunst im Rahmen des Kulturpakets 2 des Landes Hessen und unterst??tzt durch DIEHL+RITTER/INS FREIE!",
            "startDateTime": "7/28/21 20:30",
            "venueId": "v5",
            "offerURL": "https://www.awin1.com/pclick.php?p=26031008459&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/jMywTQgq.jpeg"
        },
        {
            "id": "e99",
            "title": "Joel Brandenstein - Frei Tour 2021",
            "description": "?Brandenstein ber??hrt und bewegt mit seiner ehrlichen Art, mit seiner Underdog- Geschichte und den einf??hlsamen Texten.? (RP Online)Eine unverwechselbare Stimme, unterlegt mit handgemachten Songs aus dem eigenen Kellerstudio: So startete JOEL BRANDENSTEIN 2011 seine Musikkarriere. Mit ??ber 550.000 Fans auf Facebook, 125.000 Instagram-Follower und insgesamt ??ber 200 Millionen Videoabrufen auf YouTube ist der Singer-Songwriter l??ngst im Zentrum der deutschen Musikszene angekommen.2017 gelingt JOEL BRANDENSTEIN mit seinem Deb??t-Album ?Emotionen? das, wovon viele K??nstler nur tr??umen: der Direkteinstieg von 0 auf Platz 1 in den deutschen Album-Charts. Heute steht sein erstes Werk kurz vor Gold-Status. Der geb??rtige Ratinger erz??hlt in seinen emotionalen und ehrlichen Texten Geschichten ??ber gescheiterte Liebe, den Mut, zu tr??umen und den Facettenreichtum zwischenmenschlicher Beziehungen. Er thematisiert Allt??gliches, ja Mitten-aus-dem-Leben-Gegriffenes, und hat sich damit direkt in die Herzen seiner Fans gesungen. Auch live und in Farbe kann JOEL BRANDENSTEIN das Publikum mit rauchiger Stimme, Nahbarkeit und seiner B??hnenpr??senz begeistern, gar verzaubern: Vier ausverkaufte Tourneen und rund 50.000 verkaufte Tickets sprechen f??r sich.Nach diesen Riesenerfolgen kehrt JOEL BRANDENSTEIN nun mit seinem zweiten Album ?Frei?  (V?? 01.05.2020) zur??ck ins Rampenlicht. Einen Vorgeschmack auf dieses brachte das ausverkaufte Pre-Release-Konzert am 10. August 2019 in der Mitsubishi-Electric-Halle in D??sseldorf. ?Ich habe mich FREI gemacht von Dingen, die mir nicht guttun, FREI gemacht von falschen Freunden, FREI gemacht von meinen Zweifeln?, so der Singer-Songwriter ??ber sein neues Album. Und kein Zweifel: Dieses Gef??hl wird er auch auf der anstehenden Tour auf die B??hne ??bertragen.  Foto: Silvana Madamski & Vincent Franken",
            "startDateTime": "11/7/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=27094458271&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/daGQEWhQ.jpeg"
        },
        {
            "id": "e100",
            "title": "Suchtpotenzial - Sexuelle Belustigung",
            "description": "Die Ulmer Stadtmusikantin Ariane M??ller lernte die Berlinerin Julia G??mez Martin 2011 am Theater Ulm kennen.Beide waren als G??ste bei der Rocky Horror Show und bei Hair auf der Wilhelmsburg engagiert. Im Fr??hjahr 2013 schrieben sie ihre ersten eigenen Lieder und im Sommer war das komplette Programm fertig.Das Projekt SUCHTPOTENZIAL war geboren.Im selben Jahr wurden sie Finalistinnen des Troubadour Chanson-Preises, traten in M??nchen beim Kulturpreis der Wirtschaft auf, bei der Comedystube in T??bingen und spielten ihr Programm auch beim Bundespresseball in Berlin.2014 startete gleich mit einem aphrodisierenden Auftakt nach Ma??:Der Kleinkunstpreis des Landes Baden-W??rttemberg geht an: Suchtpotenzial!Frisch ausgezeichnet ging das Power-Duo nun regelm????ig auf Tournee und hat zwischenzeitlich schon weit ??ber 600 bundesweite Auftritte gespielt (Stand Dez 2019), 2 Debut-Singles, 3 Alben zu den Programmen und eine DVD ver??ffentlicht, beim damaligen Bundespr??sident Joachim Gauck gespielt und auf Tele 5 die erste eigene Musiksendung im Fernsehen moderiert.Zwischenzeitlich gab und gibt es regelm????ige TV-Auftritte und H??rfunk-Eins??tze, u.a. bei der ARD/WDR (Gerburg Jahnkes`Ladies Night, CouchClub, Prix Pantheon, Kabarettfest), beim BR (B??hnensport mit Hannes Ringlstetter & Constanze Lidner), beim MDR (Comedy mit Karsten, MDR um Vier), bei der ARD/Einsfestival (Nightwash Live und Naughty Girls mehrmals), Tele 5 (Fat Chicken Club), beim SWR (Comedycouch, Stuttgarter Besen), HR (H??rfest, Comedy Tower, hr1 Satire-Lounge), RBB (Radio 1 Radio Show, Das Gro??e Kleinkunst Festival), NDR (Comedy Contest), ZDF/3-SAT (Pufpaffs Happy Hour) und viele weitere.Festivals: K??ln Comedy, Humorzone Dresden, Lachmesse Leipzig, Open Flair Eschwege u.v.m.",
            "startDateTime": "6/24/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=27124071041&a=774719&m=13738"
        },
        {
            "id": "e101",
            "title": "ALTE BEKANNTE",
            "description": "ALTE BEKANNTE - Das Leben ist sch??n - TourMit seinem zweiten Programm und dem gleichnamigen zweiten Studioalbum ?Das Leben ist sch??n? geht das A-cappella-Quintett Alte Bekannte, Nachfolgeband der legend??ren Wise Guys, ab Sommer 2019 auf Deutschlandtour.Die schon jetzt gro??e Fangemeinde und alle erstmaligen Konzertbesucher erwartet ein extrem kurzweiliger Abend, an dessen Ende die Allermeisten wohl aus dem Konzertsaal schweben und sagen werden: ?Das Leben ist ja wirklich sch??n!? ? auch wenn Alte Bekannte selbstverst??ndlich wissen, dass ihre These durchaus diskutabel ist.Im Mittelpunkt der Tour stehen die Songs der neuen CD, die das erfolgreiche Deb??talbum ?Wir sind da!? (Platz 23 der deutschen Albumcharts) in Sachen Vielseitigkeit, Witz und musikalischer Finesse sogar noch ??bertrifft. ?Das Leben ist sch??n? landete sogar auf Platz 9 der deutschen Albumcharts und ist somit das erste Top-Ten-Album der Band.Aber nat??rlich werden weder die beliebtesten Hits der ersten CD noch ausgew??hlte ?Perlen? aus dem riesigen Kanon der Wise Guys fehlen. Dazu kommen Coverversionen ber??hmter Songs mit zum Teil aberwitzigen neuen Texten aus der Feder von Daniel ?D??n? Dickopf, der als Ex-Frontmann der Wise Guys auch bei Alte Bekannte textlich vorangeht. Seine Kompositionen und die seiner (zum Teil) neuen Kollegen Clemens Schmuck, Ingo Wolfgarten und Nils Olfert garantieren zudem eine musikalische Bandbreite, die ihresgleichen sucht. Bj??rn Sterzenbach, der F??nfte im Bunde, brilliert auf der B??hne zudem als Bassist und ??berzeugt neben D??n und Clemens auch als charmanter Moderator.Die Konzertbesucher erleben einen Abend mit alten Bekannten, an dessen Ende man tats??chlich wieder glaubt, dass das Leben sch??n ist. Was will man mehr?Erm????igter VVK-Preis f??r Kinder & Jungendliche bis 14 Jahre.",
            "startDateTime": "11/6/22 18:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=27133529219&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/djHBJ40V.jpeg"
        },
        {
            "id": "e102",
            "title": "??ffentlicher Stadtrundgang Freiburg - G??ssle, B??chle und das M??nster",
            "description": "Erleben Sie das malerische und gr??ne Freiburg bei einem sch??nen Rundgang durch die Altstadt. Ihr Tourguide zeigt Ihnen die ber??hmten ?Freiburger B??chle?, die kleinen Wasserl??ufe entlang der Stra??en und Gassen, die verwinkelten ?G??ssle? und die vielen bunten Rheinkieselmosaike, die Freiburg sein ganz besonderes Flair verleihen. Lassen Sie sich zum M??nsterplatz mit seinen sch??nen B??rgerh??usern und Profanbauten f??hren und sehen Sie auch den traditionellen Bauernmarkt (vormittags) und die zahlreichen Caf??s.Start der Tour ist der Rathausplatz, wo Ihr Guide bereits auf Sie wartet. Schon auf dem Rathausplatz gibt es zahlreiche historische Geb??ude zu entdecken. Von hier aus geht es dann ??ber die Kaiser-Joseph-Stra??e, der ehemaligen Gro??en Gass?? des mittelalterlichen Freiburgs, zum Freiburger M??nster, dem kulturellen Mittelpunkt der historischen Altstadt und herausragenden Beispiel mittelalterlicher Gotik. Entdecken Sie gemeinsam mit dem Guide die bizarr geformten Wasserspeier, den filigranen Kirchturm und den bunten Bauernmarkt auf dem M??nsterplatz. Im Anschluss entdecken Sie einige der historischen Sehensw??rdigkeiten um das M??nster herum: das historische Kaufhaus, die Alte Wache, das Haus zum sch??nen Eck und viele mehr. Weiter geht es dann ??ber die Konviktstra??e, eine der sch??nsten Gassen Freiburgs, bis hin zum ?Handwerkerviertel",
            "startDateTime": "6/17/21 10:30",
            "venueId": "v14",
            "offerURL": "https://www.awin1.com/pclick.php?p=27133530287&a=774719&m=13738"
        },
        {
            "id": "e103",
            "title": "Helge Schneider - Die Wiederkehr des blaugr??nen Smaragdk??fers",
            "description": "Helge Schneider - Die Wiederkehr des blaugr??nen Smaragdk??fers  welcome to the future! 2020 wird HELGE SCHNEIDER wieder richtig aufdrehen, MOPPELCHEN MUSS  H??PFEN!  Wenn  die  anderen  schon  mit  einem  Bein  im  Wohnzimmer vor dem Fernsehapparat sich eine Flasche Bier zurechtr??cken, um Fu??ball oder Donna Leon zu gucken, r??umt DER RUBINROTE H??LLENSTORCH seine Garage aus und seine Orgel in den Anh??nger! ?Rente? Kenn ich nicht!? (so der  BLONDE  HASHDAG-KIKI!)  Der  65-j??hrige  (sieht  aus  wie  12!)  mit  dem Gehirn eines Gorillas rastet f??rmlich aus, wenn er auf seine ?wohlverdiente Ruhe? nach unz??hligen Konzertreisen angesprochen wird! ?AUSGESTOPFTE BESSERWISSER!?  Sein  Gesicht  spricht  B??nde.  (Und  zwar  alle  B??nde  von  Brockhaus.)  Es  gibt  auf unserer  Erde  keinen  Superstar,  der  so  au??ergew??hnlich  belesen  ist  wie  Helge Schneider! (TRUE LOVE = DURCH UND DURCH LAFF!) ?Ich lese alles! Ob Wein, ob ??pfel.  Und  zwischendurch  mal  ?SCHLEIFSPUREN  AUF  DEM  TEPPICH?,  mein Lieblingsbuch!  Das  reicht,  um  mich  am  heutigen  BILLARDSTANDARD  zu messen!? Der Entertainer und Multiinstrumentalist (normaler Kassenpatient mit Zusatzversicherung!) ist in fast allen St??dten zu sehen.  ?ICH FREUE MICH AUF DICH! LOL!? WGIDD!!!!!  Hochachtungsvoll: Helge Schneider  Das neue Album ?Partypeople ? beim Fleischer? gibt es seit 2. August 2019 im Handel.",
            "startDateTime": "7/30/21 19:30",
            "venueId": "v4",
            "offerURL": "https://www.awin1.com/pclick.php?p=27177789245&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/i7t7h0JP.jpeg"
        },
        {
            "id": "e104",
            "title": "Dr. Leon Windscheid - Altes Hirn, neue Welt",
            "description": "Dr. Leon Windscheid: ALTES HIRN, NEUE WELT ? PSYCHOLOGIE LIVE ERLEBEN   Nach einer nahezu restlos ausverkauften Tour 2019 gibt es auch im neuen Jahr kein Halten f??r Leon Windscheid. Der Shootingstar der Wissenschafts-Unterhaltung setzt seine Tour 2020 fort und bereist die Republik in der Mission, den Menschen ihr eigenes Hirn ein wenig n??her zu bringen. Denn seitdem wir vor 300.000 Jahren als Homo sapiens auf der Bildfl??che erschienen, wurde in unseren K??pfen nicht mehr renoviert. ??tzi und DJ ??tzi haben die gleichen grauen Zellen, die aber mit v??llig unterschiedlichen Herausforderungen umgehen m??ssen.   Denn f??r die Welt, in der wir heute leben, wurde unser Hirn urspr??nglich nicht gemacht. Wir k??nnen googeln, statt zu denken. Algorithmen finden f??r Singles alle elf Minuten die gro??e Liebe. Lichtschalter k??nnen sprechen, Autos alleine fahren. Und ohne Smartphone aus dem Haus, f??hlt sich an wie ein Abenteuer.  Alles wird immer schneller, digitaler und effizienter. Kein Wunder, dass sich viele Menschen ??berfordert f??hlen. Burn-out, Depression und Stress sind Volkskrankheiten. Dagegen helfen sollen Meditation per App, Gl??cks-Coaching oder Gehirnjogging. Aber braucht unser Hirn solche Innovationen? In  seinem  ersten  Liveprogramm  nimmt  der  Psychologe  und  Bestsellerautor  Leon  Windscheid  sein Publikum  mit  auf  eine  Reise  zu  den  Gef??hlen  und  Gedanken,  die  wir  zunehmend  vergessen,  oder schon ganz verloren haben. Humorvoll und fesselnd erkl??rt er, weshalb wir Langeweile wieder suchen sollten,  warum  Ziellosigkeit  ans  Ziel  f??hren  kann  und  wieso  richtiges  Alleinsein  uns  vor  Einsamkeit sch??tzt.   Entlang der neuesten Erkenntnisse aus Psychologie und Hirnforschung gelingt ein Spagat zwischen Unterhaltung, Wissenschaft und Aha-Momenten. Nach diesem Abend wissen Sie, warum Sie ticken, wie Sie ticken. Und vor allem, wie Sie auch in Zukunft nicht austicken. Edutainment at its best.  Einen  Vorgeschmack  auf  Leon  kann  man  sich  seit  neuestem  auch  in  seinem  Podcast  ?Betreutes F??hlen? holen, in dem er sich zusammen mit Atze Schr??der w??chentlich einem Gef??hl widmet.",
            "startDateTime": "11/22/21 20:00",
            "venueId": "v23",
            "offerURL": "https://www.awin1.com/pclick.php?p=27177789443&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/cFr5Jbfa.jpeg"
        },
        {
            "id": "e105",
            "title": "Dieter Thomas Kuhn & Band - ??ber den Wolken 2.0 / 2.1",
            "description": "Nach der Tour ist vor der Tour, das gilt auch f??r Dieter Thomas Kuhn & Band!29 Konzerte stehen f??r 2020 an: Auftakt ist am 8./9. Mai 2020 in Bielefeld und Tour-Finale wird am 18./19. September 2020 in Hanau sein. Dazwischen k??nnen DTK-Fans und alle, die es werden wollen, sich auf wunderbare Live-Spektakel freuen. Imposante Spielorte stehen wieder auf dem Plan, darunter dreimal Freilichtb??hne Killesberg Stuttgart(22./23.05. und 16.07.20), Tollwood Festival M??nchen (04.07.20), Tanzbrunnen K??ln (11.07.20) und Waldb??hne Berlin (01.08.20). Davon konnten sich ??brigens im vergangenen Sommer 2019 so viele Fans, wie noch nie zuvor ??berzeugen: Fast 125.000 verkaufte Tickets bei 25 Konzertterminen (17x ausverkauft).?Dieter Thomas Kuhn macht s??chtig?, ?Papst des schlechten Geschmacks?, ?Kuhnis verwandeln jedes Konzert in ein Sonnenblumenmeer der Liebe?, ?Was machen diese Kuhnis mit diesen Klamotten im normalen Leben?, diese und andere Schlagzeilen begleiten Dieter Thomas Kuhn & Band seit jeher. Und es ist wahr: Dieter Thomas Kuhn & Band-Konzerte bringen Menschen zusammen, die nettesten und verr??cktesten Menschen der Welt. Jedes Kuhn-Konzert bringt Farbe in die St??dte.und verr??cktesten Menschen der Welt. Jedes Kuhn-Konzert bringt Farbe in die St??dte. Schon der Anfahrtsweg zur Konzertlocation ist ein farbenfrohes Happening. Da wird jede U-Bahn zum Schlagerchor! Aber bei DTK geht es nicht um Schlager im herk??mmlichen Sinn, hier wird Schlager neu interpretiert. Hier geht es um die sch??nsten Schlager f??r ein Publikum, das sonst nichts mit Schlager am Hut hat!Foto: philipp feldtkeller HPT",
            "startDateTime": "8/6/21 20:00",
            "venueId": "v4",
            "offerURL": "https://www.awin1.com/pclick.php?p=27207310973&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/FxWcUJMm.jpeg"
        },
        {
            "id": "e106",
            "title": "Les Br??nettes - Live 2022",
            "description": "Les Br??nettes sind in ihrem neuen Programm 4 ganz bei sich selbst angekommen.Sie verarbeiten, in ausschlie??lich eigenen Songs, was in ihrem Jetzt passiert: Esgeht um Liebe; ob zum eigenen Kind, zum Geliebten oder um die verlorene Liebezu sich selbst. Um Geburtserfahrungen und #hashtags. Sie stellen auch Fragenau??erhalb der eigenen Befindlichkeiten: Was bedeutet Freiheit? Wohin mit der Wut??ber herrschende Ungerechtigkeiten, insbesondere gegen Frauen? Les Br??nettesgeht es um das Einstehen f??r Werte, um die Verantwortung f??r unseren Planeten.Und darum, dass Humor manchmal einfach die beste Antwort ist?Stilistisch treffen Funk- und House-Beats auf Rap und Chanson, auf souligeElemente oder einfach auf bestes Pop-Songwriting. Das durchg??ngige Motiv?Groove! Man h??rt beatbox, body percussion, Klatschen, Stampfen, es wirdgehaucht und gek??sst!",
            "startDateTime": "3/18/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27207311341&a=774719&m=13738"
        },
        {
            "id": "e107",
            "title": "Circolo 2021 - Freiburgs Weihnachts-Circus",
            "description": "Vorhang auf, Manege frei! Wenige Tage vor Heiligabend bis ins neue Jahr ??ffnet der Freiburger Weihnachts-Circus wieder seine Zelte! Auf dem Programm steht ein h??chst komisches, schwindelerregendes und atemberaubendes Spektakel f??r gro??e und kleine Circusfans. Mit dabei sind zahlreiche international renommierte K??nstler, Artisten und das Circolo Orchester. Auch f??r ein vielf??ltiges Catering-Angebot ist gesorgt.Akrobatik, Showeinlagen und mitrei??ende Musik versetzen das Publikum in helles Staunen; dem Besucher wird eine mitrei??ende Performance internationaler Sonderklasse geboten. Musikalische Untermalung kommt wie immer vom sagenhaften Circolo Orchester, welches auch den kleinsten Trick um ein Vielfaches vers????t.Seien Sie dabei, wenn der Freiburger Weihnachts-Circus seine Zelte aufschl??gt und lassen Sie sich von den talentierten Artisten und Artistinnen begeistern!",
            "startDateTime": "12/18/21 19:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=27216597067&a=774719&m=13738"
        },
        {
            "id": "e108",
            "title": "Circolo 2021 - Freiburgs Weihnachts-Circus - Badenovatag",
            "description": "Vorhang auf, Manege frei! Wenige Tage vor Heiligabend bis ins neue Jahr ??ffnet der Freiburger Weihnachts-Circus wieder seine Zelte! Auf dem Programm steht ein h??chst komisches, schwindelerregendes und atemberaubendes Spektakel f??r gro??e und kleine Circusfans. Mit dabei sind zahlreiche international renommierte K??nstler, Artisten und das Circolo Orchester. Auch f??r ein vielf??ltiges Catering-Angebot ist gesorgt.Akrobatik, Showeinlagen und mitrei??ende Musik versetzen das Publikum in helles Staunen; dem Besucher wird eine mitrei??ende Performance internationaler Sonderklasse geboten. Musikalische Untermalung kommt wie immer vom sagenhaften Circolo Orchester, welches auch den kleinsten Trick um ein Vielfaches vers????t.Seien Sie dabei, wenn der Freiburger Weihnachts-Circus seine Zelte aufschl??gt und lassen Sie sich von den talentierten Artisten und Artistinnen begeistern!",
            "startDateTime": "12/30/21 15:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=27216597111&a=774719&m=13738"
        },
        {
            "id": "e109",
            "title": "Circolo 2021 - Freiburgs Weihnachts-Circus - Silvestergala",
            "description": "Vorhang auf, Manege frei! Wenige Tage vor Heiligabend bis ins neue Jahr ??ffnet der Freiburger Weihnachts-Circus wieder seine Zelte! Auf dem Programm steht ein h??chst komisches, schwindelerregendes und atemberaubendes Spektakel f??r gro??e und kleine Circusfans. Mit dabei sind zahlreiche international renommierte K??nstler, Artisten und das Circolo Orchester. Auch f??r ein vielf??ltiges Catering-Angebot ist gesorgt.Akrobatik, Showeinlagen und mitrei??ende Musik versetzen das Publikum in helles Staunen; dem Besucher wird eine mitrei??ende Performance internationaler Sonderklasse geboten. Musikalische Untermalung kommt wie immer vom sagenhaften Circolo Orchester, welches auch den kleinsten Trick um ein Vielfaches vers????t.Seien Sie dabei, wenn der Freiburger Weihnachts-Circus seine Zelte aufschl??gt und lassen Sie sich von den talentierten Artisten und Artistinnen begeistern!",
            "startDateTime": "12/31/21 21:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=27216597115&a=774719&m=13738"
        },
        {
            "id": "e110",
            "title": "Rogers - Plus Special Guest",
            "description": "Donnerstag, 3. September, Beginn 20 Uhr, Einlass 19 UhrPunkrock-Vierer aus D??sseldorf mit erhobenen Mittelfinger quer durch die Republik",
            "startDateTime": "3/9/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27315136373&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/iAInny3y.jpeg"
        },
        {
            "id": "e111",
            "title": "Viva el TANGO - Musik & Showtanz",
            "startDateTime": "10/26/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=27543411459&a=774719&m=13738"
        },
        {
            "id": "e112",
            "title": "Programm??nderung: Orchesterkonzert Musikalische Wunder (anstatt Freisch??tz)",
            "description": "Wir bitten um Ihr Verst??ndnis, dass das geplante Programm mit Webers Freisch??tz aufgrund der ausladenden Komposition mit Solisten, Chor und gro??em Orchester und der Nichtvereinbarkeit mit den Corona-bedingten Vorgaben ge??ndert werden muss. Stattdessen pr??sentieren wir Ihnen ein Orchesterkonzert mit unserem K??nstlerischen Leiter Gottfried von der Goltz. Karten behalten ihre G??ltigkeit.Neues Programm: Musikalische Wunder Obwohl Joseph Haydn knapp 25 Jahre ??lter als Wolfgang Amadeus Mozart war, verband die beiden weit mehr als eine v??terliche Freundschaft. Beide Komponisten begegneten sich auf Augenh??he und inspirierten sich gegenseitig. Mozart verehrte Haydns gutm??tige und humorvolle Art, Haydn erkannte fr??h das Wunderkind im kleinen Amadeus. Doch nicht nur Mozart vollbrachte musikalische Wunder, sondern auch sein Mentor Haydn. Als seine 96. Sinfonie in D-Dur in London uraufgef??hrt wurde, st??rzte ein Kronleuchter von der Decke des Konzerthauses. Verletzt wurde niemand ? dank Haydn: das Publikum war so vernarrt in den Komponisten, dass es das Parterre verlie?? und sich dicht um ihn dr??ngte, als er die B??hne betrat. Wolfgang Amadeus Mozart (1756-1791)Violinkonzert Nr. 4 D-Dur KV 218Sinfonie Nr. 24 Es-Dur KV 182Joseph Haydn (1732-1809)Sinfonie Nr. 96 D-Dur ?The Miracle?Freiburger BarockorchesterGottfried von der Goltz Solist und KonzertmeisterIn Kooperation mit der Gesellschaft der Freunde und F??rderer des Freiburger Barockorchesters e.V.",
            "startDateTime": "6/25/21 17:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551866133&a=774719&m=13738"
        },
        {
            "id": "e113",
            "title": "Markus Krebs - Pass auf... kennste den?!",
            "description": "Ein einfacher Stehtisch, ein Barhocker, eine Flasche Bier ? f??r einen Abend mit Markus Krebs braucht es nicht mehr. Humor-Prinzip? Irgendwas zwischen Kneipen-Kumpel und Witze-Papst.Mit seinem Ruhrpott-Charme bedient Markus Krebs exzellent die Humor-Zentren des Publikums. Egal ob intelligente Komik oder kalauernde Wortsch??pfungen ? in seinem vierten Solo-Programm ?Pass auf...kennste den?!? schreckt der bezopfte Mann mit Sonnenbrille und legend??rer schwarzen Wollm??tze vor keinem Flachwitz zur??ck. Markus Krebs ist bekannt f??r seine gnadenlos-kompromisslosen Pointen-Abfolgen, die ihn innerhalb der deutschen Comedy-Szene einzigartig machen. In seinem letzten Solo-Programm ?Permanent Panne? folgte Gag auf Gag. Im neuen Programm f??hrt der selbsternannte ?Mann hinter dem Bauch? diese Tradition fort und beschert seinem Publikum einen Abend voller Lachkr??mpfe und ohne Atempausen. Wer den Abend mit Markus Krebs verbringt, nimmt nichts mit. Es gibt keine Botschaft, daf??r aber eine Show bestehend aus Pointen der kom??diantischen Spitzenklasse.",
            "startDateTime": "12/5/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551872209&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/XRjjFj2t.jpeg"
        },
        {
            "id": "e114",
            "title": "Variet?? am Seepark 2021",
            "description": "Jedes Jahr wieder im November hei??t es im B??rgerhaus am Seepark: ?Vorhang auf!? f??r die Weltklasse der Artistik, Akrobatik, Comedy und Magie!Internationale Top-K??nstler entf??hren beim Variet?? am Seepark in eine Welt voller Zauber, Magie und Witz. Charme und akrobatische Vielfalt schaffen ein kleines Kunstwerk, das unvergessliche Momente garantiert. K??nstler von Weltrang aus nah und fern setzen Tr??ume und Illusionen ins Rampenlicht und bieten dem hochverehrten Publikum mitrei??ende Inszenierungen von temperamentvollem, vielseitigem Programm! F??r Gro?? und Klein, Jung und Alt sind diese brillianten Darstellungen immer wieder ein gro??es Erlebnis! Atemberaubendes, glamour??ses und herrlich Komisches - all das verspricht das Variet?? am Seepark seinen G??sten w??hrend der Show-Zeiten im November!",
            "startDateTime": "11/4/21 16:00",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551881725&a=774719&m=13738"
        },
        {
            "id": "e115",
            "title": "Variet?? am Seepark 2021 - Sonderveranstaltung ADAC",
            "description": "Jedes Jahr wieder im November hei??t es im B??rgerhaus am Seepark: ?Vorhang auf!? f??r die Weltklasse der Artistik, Akrobatik, Comedy und Magie!Internationale Top-K??nstler entf??hren beim Variet?? am Seepark in eine Welt voller Zauber, Magie und Witz. Charme und akrobatische Vielfalt schaffen ein kleines Kunstwerk, das unvergessliche Momente garantiert. K??nstler von Weltrang aus nah und fern setzen Tr??ume und Illusionen ins Rampenlicht und bieten dem hochverehrten Publikum mitrei??ende Inszenierungen von temperamentvollem, vielseitigem Programm! F??r Gro?? und Klein, Jung und Alt sind diese brillianten Darstellungen immer wieder ein gro??es Erlebnis! Atemberaubendes, glamour??ses und herrlich Komisches - all das verspricht das Variet?? am Seepark seinen G??sten w??hrend der Show-Zeiten im November!",
            "startDateTime": "11/6/21 16:00",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551881751&a=774719&m=13738"
        },
        {
            "id": "e116",
            "title": "Variet?? am Seepark 2021 - Sonderveranstaltung Badische Zeitung",
            "description": "Jedes Jahr wieder im November hei??t es im B??rgerhaus am Seepark: ?Vorhang auf!? f??r die Weltklasse der Artistik, Akrobatik, Comedy und Magie!Internationale Top-K??nstler entf??hren beim Variet?? am Seepark in eine Welt voller Zauber, Magie und Witz. Charme und akrobatische Vielfalt schaffen ein kleines Kunstwerk, das unvergessliche Momente garantiert. K??nstler von Weltrang aus nah und fern setzen Tr??ume und Illusionen ins Rampenlicht und bieten dem hochverehrten Publikum mitrei??ende Inszenierungen von temperamentvollem, vielseitigem Programm! F??r Gro?? und Klein, Jung und Alt sind diese brillianten Darstellungen immer wieder ein gro??es Erlebnis! Atemberaubendes, glamour??ses und herrlich Komisches - all das verspricht das Variet?? am Seepark seinen G??sten w??hrend der Show-Zeiten im November!",
            "startDateTime": "11/7/21 15:00",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551881753&a=774719&m=13738"
        },
        {
            "id": "e117",
            "title": "Variet?? am Seepark 2021 - Badenovatag",
            "description": "Jedes Jahr wieder im November hei??t es im B??rgerhaus am Seepark: ?Vorhang auf!? f??r die Weltklasse der Artistik, Akrobatik, Comedy und Magie!Internationale Top-K??nstler entf??hren beim Variet?? am Seepark in eine Welt voller Zauber, Magie und Witz. Charme und akrobatische Vielfalt schaffen ein kleines Kunstwerk, das unvergessliche Momente garantiert. K??nstler von Weltrang aus nah und fern setzen Tr??ume und Illusionen ins Rampenlicht und bieten dem hochverehrten Publikum mitrei??ende Inszenierungen von temperamentvollem, vielseitigem Programm! F??r Gro?? und Klein, Jung und Alt sind diese brillianten Darstellungen immer wieder ein gro??es Erlebnis! Atemberaubendes, glamour??ses und herrlich Komisches - all das verspricht das Variet?? am Seepark seinen G??sten w??hrend der Show-Zeiten im November!",
            "startDateTime": "11/11/21 16:00",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551881755&a=774719&m=13738"
        },
        {
            "id": "e118",
            "title": "Jazzchor Freiburg & New York Voices - 30 Jahre Vocal Jazz",
            "description": "JAZZCHOR FREIBURG & NEW YORK VOICES30 years of vocal jazzDie legend??ren New York Voices kommen nach Freiburg, um die B??hne mit dem Jazzchor zu teilen. Zweimal 30 Jahre Vocal Jazz der Extraklasse: Die Voices gelten als f??hrendes Jazzvokalquartett, das fast die ganze Welt bereist und mit K??nstlern wie dem Count Basie Orchestra und Paquito d??Riviera zusammengearbeitet hat. Immer schon war dieses Ensemble Inspiration f??r den preisgekr??nten Jazzchor Freiburg, der mit seinen eigen/art/igen Programmen bislang in 15 L??ndern Europas und Asiens konzertierte. Dar??ber hinaus stie??en dem Chor Projekte mit Bobby McFerrin, Torun Eriksen und den Bamberger Symphonikern immer wieder neue musikalische T??ren auf. Zum Jubil??um nun sind die Freiburger und New Yorker am gleichen Abend zu h??ren, einzeln und gemeinsam.Fotocredits:New York Voices: Sandrine Lee",
            "startDateTime": "10/3/21 18:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551882151&a=774719&m=13738"
        },
        {
            "id": "e119",
            "title": "Boy Harsher - Support: HIDE",
            "description": "Boy Harsher sorgen f??r den kaputten Soundtrack einer dystopischen Realit??t, niemand sonst erschafft so intensive und fesselnde Klangwelten wie das Duo aus Northampton, Massachusetts. Augustus Muller entwickelt den Unterbau der Tracks aus pr??zisen, kraftvollen Beats und s??gende Synthies, w??hrend Jae Matthews dazu wahlweise ??therisch haucht, singt oder sich auch die Seele aus dem Leib schreit. Diese kathartischen und magnetisierenden Tracks sind eine wirkliche Alternative und avancierten nicht nur in Neo Dark Wave Untergrund Kreisen zu echten kleinen Hits.",
            "startDateTime": "3/24/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27559850785&a=774719&m=13738"
        },
        {
            "id": "e120",
            "title": "HISS - 25 Jahre Jubil??umstour",
            "description": "Im Jahre 1995 traten ??sterreich, Schweden und Finnland der EU bei, wurde Jacques Chirac franz??sischer Staatspr??sident und Borussia Dortmund nach 32 Jahren wieder Deutscher Meister. Rory Gallagher und Konrad Zuse starben, die DVD wurde erfunden, man trug bauchfrei und das sch??ne Lied Max Don??t Have Sex With Your Ex war in den deutschen Charts. Viele der erw??hnten Ereignisse sind inzwischen in Vergessenheit geraten, Moden kamen und gingen, Erfindungen wurden obsolet.Das Jahr 1995 bleibt uns aber in Erinnerung, war es doch das Gr??ndungsjahr der Kapelle HISS. Seither sind sie zu Wasser, zu Lande und in der Luft unterwegs, haben 2487 Konzerte gespielt und 8 Platten aufgenommen, traten in zahllosen Fernsehsendungen auf, wurden mit Preisen ??berh??uft, haben Kritiker ??berzeugt und Tausende Fans gewonnen.Trotz aller Hindernisse und Gefahren ziehen diese Teufelskerle weiterhin unger??hrt um die Welt, um uns ihre Mischung aus Folk und Ska, aus Walzer und Blues, aus Polka und Roll nahezubringen. Mag ihnen die Zeit auch die eine oder andere Furche in die Gesichter gezogen haben, ihre Musik ist noch immer frisch, ihre Auftritte sind noch immer voller Kraft und ihre Texte eine Liebeserkl??rung an den Humor und das Leben.Im Jubil??umsjahr bringen uns HISS einen Querschnitt durch 25 Jahre ihres Schaffens, Bew??hrtes und Neues, Tanzbares und Nachdenkliches, Leises und Lautes, Langsames, Schnelles und sehr Schnelles.",
            "startDateTime": "7/17/21 19:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27559850851&a=774719&m=13738"
        },
        {
            "id": "e121",
            "title": "The Gardener & The Tree - Tour 2021",
            "description": "The Gardener & The Tree haben sich in den letzten Jahren klammheimlich zu einem der erfolgreichsten Musikexports  der  Schweiz  gespielt.  Sie  f??llen  die Clubs  nicht  nur  in  der Heimat,  sondern  spielten bereits     drei     fast     ausverkaufte     Deutschland -Tourneen quer durch die Republik und begeisterten  das  Publikum   auf   Festivals   wie   Hurricane   oder Southside.The  Gardener  &  The  Tree  ??berzeugen  mit  ihrem unverwechselbarenIndiefolk und der charakteristischen   Gesangsstimme   von   Manuel Felder. Der sieht auf den ersten Blick eher aus wie der R??pel in der letzten Reihe des Klassenzimmers,mit dem man Unfug   an richtenund   unbedingt befreundet  sein  m??chte.  Was  dann  aber  aus  seiner  Kehle  kommt  und aus  den Instrumenten  seiner  Bandkollegen,  ergibt  so  eine  eing??ngige  Symbiose,  dass  man sich  fragt,ob  sie  statt  zur  Schule gegangen  zu  sein schon  lebenslang  gemeinsam musizieren.All  dies  f??hrt  dazu,  dass  man The  Gardener  &  The  Tree  wahrscheinlich  nicht  mehr lange als  Geheimtipp  ank??ndigen  kann,  denn  meistens  muss  man  sich  sputen,um noch eines der hei??begehrten Tickets zu ergattern. Die Konzertzwangspause nutzte die  Band  intensiv im  dunklen  Proberaum,  deshalb  ist  die Vorfreude bei  der  Band bereits jetzt riesig und sie werden mit neuen und alten Songs im Gep??ck die B??hnen entern.Pr??sentiert werden die Konzerte von SCHALL., Bedroomdisco und MusikBlog.de.",
            "startDateTime": "2/23/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27559852365&a=774719&m=13738"
        },
        {
            "id": "e122",
            "title": "Neue Wunderbare Band - Live 2020",
            "description": "Wildgewordene Fahrradfahrer, ??berzeugte Veganer, Bau- und Selbsthilfegruppen: Wenn sich jemand mit den Befindlichkeiten der Freiburger auskennt, ist es die Neue Wunderbare Band, die ins Jazzhaus das ganz besondere Flair der Schwarzwaldmetropole bringt. Mit viel Augenzwinkern, versteht sich.Die Bandmitglieder Jack Huttmann (Gesang), Mike Sillmann (Bass), Hans Brugger (Schlagzeug), Dieter Bauer (Gitarre), Martin Gl??nkler (Keyboard) und die S??ngerinnen Sandra Klein-Gi??ler und Christiane Laube legen sich ordentlich ins Zeug, um ihrem Publikum eine anschauliche musikalische Stadtf??hrung zu bieten.Die rockigen und super arrangierten Songs mit ihren respektlosen, aber nie b??sartigen Texten machen einfach Laune und spiegeln mit scharfer Beobachtungsgabe das Lebensgef??hl in der Green City perfekt wider, was sich auch im aktuellsten St??ck ?Martinshorn? widerspiegelt.Kurzum, die Neue Wunderbare Band verf??gt nicht nur ??ber Witz und Humor, sondern auch ??ber musikalische Professionalit??t und jede Menge Ausstrahlung. Oder, um es in sch??nster Facebook-Manier auszudr??cken: Daumen hoch.Die Neue Wunderbare Band ist somit die eigentliche Stadtkapelle der Green City B??chle Metropole.",
            "startDateTime": "9/5/21 19:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27559854147&a=774719&m=13738"
        },
        {
            "id": "e123",
            "title": "Shalosh - `Broken Balance` Tour 2022",
            "description": "Shaloshs Erfolgsgeschichte geht weiter. ?Broken Balance soll neu und frisch sein. Wir wollten die Extreme mehr ausreizen, wollten mehr links und rechts schauen und dramatischer sein. Man wird neue Facetten finden?, sind sich die Mitglieder des israelischen Trios einig. Im vergangenen Jahr wurden von der Kritik Namen wie e.s.t., GoGo Penguin und The Bad Plus in Stellung gebracht, als es um ihre ACT-Deb??t-CD ?Onwards and Upwards? ging. ?Schwerelos swingende Grooves bis zum treibenden Techno-Beat? wurden geh??rt und auch ?an deutscher Klassik geschultes? Schwelgen. Und Optimismus, weil ?das Allermenschlichste nun einmal die Hoffnung ist?. Um die auszudr??cken, springt Shalosh aus den Schubladen. Gute Musik ist n??tig, und die machen Pianist Gadi Stern, Kontrabassist David Michaeli und Schlagzeuger Matan Assayag. In Hunderten von Konzerten rund um den Globus haben sie ihr breit gef??chertes Publikum davon ??berzeugt vom Rockfestival bis in den intimen Jazzclub.",
            "startDateTime": "3/27/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27559854209&a=774719&m=13738"
        },
        {
            "id": "e124",
            "title": "3. ZWERGENKONZERT: Die Freiburger Stadtmusikanten",
            "description": "Die Freiburger Stadtmusikanten ab 3 JahrenEs war einmal ein Esel, ein Hund, ein Kater und ein Hahn, die machten sich auf den Weg in die Stadt, um dort Musiker zu werden. Ob ihnen das gelingen wird und welch riesiges Abenteuer die Tiere auf ihrem Weg erleben, das erfahrt ihr in unserem M??rchen-Zwergenkonzert.",
            "startDateTime": "7/4/21 10:00",
            "venueId": "v28",
            "offerURL": "https://www.awin1.com/pclick.php?p=27564310035&a=774719&m=13738"
        },
        {
            "id": "e125",
            "title": "Kling, Gl??hwein, klingelingeling - die Weihnachts-City-Tour mit Betty BBQ",
            "description": "Kling, Gl??hwein, klingelingeling - die Weihnachts-City-Tour mit Betty BBQ! Mit einem Feuerwerk an Gags und Schallala bereitet euch Schwarzwald Drag Queen Betty BBQ mit einer City Tour durch das vorweihnachtliche Freiburg auf das Fest des Jahres vor. Betty BBQ erz??hlt von den Wirren der Weihnachtszeit, von Bowle, Gl??hwein und dem Christmas-Schwips. Dabei kl??rt sie so wesentliche Fragen, wie ob ein auf der Weihnachtsfeier gezeugtes Baby eigentlich ein ?Punschkind? ist, wie es sich anf??hlt, wenn nicht nur der Baum alle Lampen an hat und warum es es in Freiburg so einen sch??nen Weihnachtsmarkt gibt. Inkl. Aufw??rmer unterwegs!Dauer: 60-70 minBitte Corona-bedingt beachten:Eine Einkehr in geschlossenen R??umen findet auf dieser City-Tour nicht statt.Bei der Durchf??hrung unserer City-Touren steht die Sicherheit und das Entertainment unserer G??ste im Vordergrund. Damit jeder beruhigt und regel-konform hieran teilnehmen kann,- muss zwingend bei unseren Stadtf??hrungen zu anderen Personen, wo immer m??glich, ein Mindestabstand von 1,5 Metern eingehalten werden. - bitten wir alle unsere G??ste eine nicht-medizinische Alltagsmaske oder eine vergleichbare Mund-Nasen-Bedeckung zu tragen.- und bitten ebenfalls ganz im Sinne der verantwortlichen Eigenkontrolle, nur dann an unseren City-Touren teilzunehmen, wenn Sie sich gesund f??hlen und insbesondere kein Fieber haben.",
            "startDateTime": "11/17/21 18:30",
            "venueId": "v16",
            "offerURL": "https://www.awin1.com/pclick.php?p=27595043937&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/4YhoiNM2.jpeg"
        },
        {
            "id": "e126",
            "title": "Hall??chen, Hall??chen Freiburg! - Die Travestie City Tour mit Betty BBQ",
            "description": "Die Mutti Freiburgs, Schwarzwald Drag Queen Betty BBQ, l??sst es sich nicht nehmen, euch h??chstpers??nlich eine hinrei??ende City Tour anzubieten! Denn: ?Freiburg ist weit mehr als nur die Kaiser-Joseph-Stra??e und das M??nster!? ? Wenn das jemand wei?? ist es unser stadtbekanntes Fr??ulein BBQ! Egal ob lustige Anekdoten aus dem Nachtleben der Grande Dame oder neuester Stadtklatsch: Schwarzwald Drag Queen Betty BBQ entf??hrt euch in Freiburgs Historie und schillernde Gegenwart!Dauer: 60-70 minBitte Corona-bedingt beachten:Eine Einkehr in geschlossenen R??umen und der Verzehr von Alkohol findet auf dieser City-Tour nicht statt.Bei der Durchf??hrung unserer City-Touren steht die Sicherheit und das Entertainment unserer G??ste im Vordergrund. Damit jeder beruhigt und regel-konform hieran teilnehmen kann,- muss zwingend bei unseren Stadtf??hrungen zu anderen Personen, wo immer m??glich, ein Mindestabstand von 1,5 Metern eingehalten werden. - bitten wir alle unsere G??ste eine nicht-medizinische Alltagsmaske oder eine vergleichbare Mund-Nasen-Bedeckung zu tragen.- und bitten ebenfalls ganz im Sinne der verantwortlichen Eigenkontrolle, nur dann an unseren City-Touren teilzunehmen, wenn Sie sich gesund f??hlen und insbesondere kein Fieber haben.",
            "startDateTime": "6/17/21 18:30",
            "venueId": "v16",
            "offerURL": "https://www.awin1.com/pclick.php?p=27595044137&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/oJ7BGYMg.jpeg"
        },
        {
            "id": "e127",
            "title": "Schwere Buben, leichte M??dels - die Rotlicht City Tour",
            "description": "Das ??lteste Gewerbe der Welt umrankt der Hauch des Verruchten, des Verbotenen und aber auch der Verlockung. Einer unserer Betty BBQ Tour-Guides nimmt euch nun mit auf eine Zeitreise in das Rotlichtmillieu Freiburgs der 70er, 80er und 90er Jahre und erz??hlt von schweren Buben und leichten M??dels. Verpasst auf keinen Fall die spannenden Geschichten aus einer Zeit, als manche Stra??en in Freiburg leise in ein schummriges rotes Licht getaucht waren! In der ?Schnecken? Vorstadt, unweit des Schwabentors, war seit dem Mittelalter das ?Gewerbe? zuhause. Hier tranken die Polizisten morgens mit den Huren einen Kaffee im legend??ren Cafe Ruef. Hier lebten die B??rger neben Zuh??ltern, Prostituierten und Schl??gern und kauften ihre Lange Rote im ?W??rschtle-Puff?. In der Arena-Bar stand die Freiburger Prominenz nachts mit leicht bekleideten Damen am Tresen und am anderen Ende der Innenstadt stieg Gina Wildkatze, die Chefin der Playboy Bar, in einem langen wei??en Pelzmantel aus ihre Limousine. F??r ihre 15 Bar-M??dchen lie?? sie einst echte, wei??e Nerzbikinis n??hen. Und mit etwas Gl??ck l??uft euch sogar Betty BBQ, die Mutti Freiburgs, h??chstpers??nlich ??ber den Weg, die sicher die eine oder andere schl??pfrige Geschichte aus ihrem bunten Leben berichten kann.Dauer: ca 1 h 40 minBitte Corona-bedingt beachten:Eine Einkehr in geschlossenen R??umen und der Verzehr von Alkohol  findet auf dieser City-Tour nicht statt.Bei der Durchf??hrung unserer City-Touren steht die Sicherheit und das Entertainment unserer G??ste im Vordergrund. Damit jeder beruhigt und regel-konform hieran teilnehmen kann,- muss zwingend bei unseren Stadtf??hrungen zu anderen Personen, wo immer m??glich, ein Mindestabstand von 1,5 Metern eingehalten werden. - bitten wir alle unsere G??ste eine nicht-medizinische Alltagsmaske oder eine vergleichbare Mund-Nasen-Bedeckung zu tragen.- und bitten ebenfalls ganz im Sinne der verantwortlichen Eigenkontrolle, nur dann an unseren City-Touren teilzunehmen, wenn Sie sich gesund f??hlen und insbesondere kein Fieber haben.",
            "startDateTime": "6/19/21 18:30",
            "venueId": "v16",
            "offerURL": "https://www.awin1.com/pclick.php?p=27595044451&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/V1ccQt9z.jpeg"
        },
        {
            "id": "e128",
            "title": "Mammal Hands - Shadow Work Tour 2021",
            "description": "Shadow Work ist ihr dritttes Album und das erste selbst produzierte. Aufgenommen in den  80 Hertz Studios (Gondwana Records) ist das Werk ein Resultat aus 18 Monaten Tour und intensiven Schreib-Sessions. Die Energie ihrer berauschenden Live-Performance beeinflusste den Schreibprozess und trotzdem beinhaltet Shadow Work eine ruhige reflektierende Seite, die dem Album eine emotionale Bandbreite verleiht, welche den Zuh??renden Zugang zu Mammal Hands Welt gew??hrt.",
            "startDateTime": "2/20/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27626601409&a=774719&m=13738"
        },
        {
            "id": "e129",
            "title": "Pablo Held Trio - feat. Nelson Veras",
            "description": "Sein aktuelles Album, welches im Fr??hjahr 2020 erschien, wird das Trio mit dem brasilianischen Gitarristen Nelson Veras einspielen, welcher bei einigen gemeinsamen Auftritten augenblicklich den Geist und die Philosophie des Trio aufsog und der Musik dabei neue Impulse gab. Nelson ist kein gew??hnlicher Gitarrist, weil sein Spiel nicht gitarristisch ist, sondern einen unvergleichlichen Musiker offenbart, befindet der ber??hmte Gitarrist Lionel Loueke. Er ist jemand, der nie das Offensichtliche spielt, sondern immer wieder ??berrascht und dazu eine ph??nomenale Technik hat - ein au??ergew??hnlicher Musiker.",
            "startDateTime": "12/12/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27626601453&a=774719&m=13738"
        },
        {
            "id": "e130",
            "title": "MATIJA - byebyeskiesofyesterday - Tour 2021",
            "description": "Wir schreiben das Jahr 2020. Die Popkultur ist zersplittert, diffus, wesentlich schnelllebiger als noch vorwenigen Jahren. Die Gitarre gilt unter Kids nicht mehr als das aller-coolste Instrument. Und trotzdemgibt es die K??nstler, die sich den Trends nicht unterwerfen und weder alt noch abgehangen wirken. H??rtman Matija, gibt es viel zu entdecken: Upbeat-Funk, Alternative Welten, Indie-Disko, ein verzweifeltesLiebeslied. Und nicht zuletzt der Blick auf den Wandel der Zeit.Das M??nchener Trio um Frontmann Matt Kovac ist ehrlich, detailverliebt und impulsiv. Und vor allemeins: pr??sent auf Deutschlands B??hnen. Ihr Live-Auftritte sind noch unvorhersehbarer als 2020. Bereitsdas Jahr zuvor war ein gro??artiges Jahr f??r Matija: eigene Tour mit ersten ausverkauften Konzerten,das erste Netflix Feature eines Songs in einer Serie, die erste Award Nominierung, Tour Support f??r dieKytes im Mai plus zahlreiche Festival Gigs inkl. c/o pop, Dockville, Reeperbahn Festival, N??rnberg pop,Sound of the Forest & Waves Vienna.Die weltweite Corona-Krise, die die Live-Branche beinahe stillstehen l??sst, geht auch an Matija nichtspurlos vorbei. Aus zwei Touren, die f??r 2020 geplant waren, ist nun eine 19-Show starke Tour Anfang2021 gewachsen. Dann kommt endlich die Zeit das zweite Studioalbum byebyeskiesofyesterday, dasam 9. Oktober 2020 ??ber das Hamburger Label Clouds Hill erscheinen wird, live zu pr??sentieren.",
            "startDateTime": "11/7/21 20:00",
            "venueId": "v21",
            "offerURL": "https://www.awin1.com/pclick.php?p=27633297151&a=774719&m=13738"
        },
        {
            "id": "e131",
            "title": "Miss Allie - Die kleine Singer-Songwriterin mit Herz",
            "description": "Die kleine Singer-Songwriterin mit HerzSchon frech: Da steht sie, und los geht?s bevor sie es selbst beabsichtigt. Miss Allie ist sofort pr??sent, ganz direkt und unwiderstehlich einnehmend. Das gilt f??rs Publikum ebenso wie f??r eine Menge Preise landauf, landab, die man als so junge, frische Singer-Songwriterin einsammeln kann, wenn man viel Herzblut und eine akustische Gitarre mitbringt. Fassungslos authentisch und mit verwegener Entschlossenheit spielt sich ?Die kleine Singer-Songwriterin mit Herz? in die Herzen ihrer Zuh??rerInnen.?? Wovon sie ein Lied singen kann? Nachdem auf ihrem ersten deutschen Album ihr Herz in die Toilette sprang und sie mit ?Schweinesteak Medium?, ?Du kleine S????e? oder sp??ter mit ?Dieter ? Das Regeltagebuch? erste virale Hits geschaffen hat, sind es auch auf ihrem neuen Album ?Aus Schei??e wird Gold? die besonderen, intensiven Momente im allt??glichen Auf und Ab des Lebens, die bei Miss Allie ins Zentrum r??cken. Sie sp??rt diese Erlebnisse ??berall auf, nimmt sie liebevoll bis sp??ttisch an die Hand und stellt sie mit ganz eigenem Charme und Humor ins Rampenlicht. Der Ton wechselt von fr??hlich, kokett, verspielt ??ber rockig-zupackend bis hin zu ergreifend ehrlicher und tiefer Emotion. Die Gef??hle von Sehnsucht bis Klartext; ein paar Takte Politisches k??nnen zwischendrin auch mal anklingen, weibliche Anliegen sowieso. Miss Allie w??rzt ihre Lieder mit ??berraschenden Wendungen sowie erfrischender Improvisation und bleibt am Puls der ZuschauerInnen, die sie scharenweise zu ihren Allie-ierten macht. Wer die Schublade braucht, sollte f??r Miss Allie eine sehr gro??e aufmachen, changiert sie doch spielerisch zwischen wundersch??nen Popsongs und klassischem Liedermachen. Teilweise sind ihre Songs gar musikalische Stand-Ups, mit denen sie eine ganz neue Farbe auf ComedyB??hnen??bringt. Am Ende bleibt immer Miss Allie ? die schlagfertige, emotionale Singer-Songwriterin, die einfach macht und strahlt. Ein wahrhaftiges LiveErlebnis.?? Vor Jahren war die Stra??e ihre B??hne. Heute spielt sie ausverkaufte Solokonzerte, tritt in diversen TV-Shows und Radiosendungen auf. Dabei besticht sie mit ihrer ansteckend fr??hlichen und herzensguten Art und ihrer einzigartigen Musik.Photocredit: Philipp Eisermann",
            "startDateTime": "2/11/22 20:00",
            "venueId": "v7",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863775025&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/4J2GAlXu.jpeg"
        },
        {
            "id": "e132",
            "title": "Danny Bryant & Bigband - Means Of Escape Tour 2020",
            "description": "Means Of Escape Tour 2020Pr??sentiert von Gitarre & Bass, Musix, Eclipsed?BIG? war die Erf??llung eines Traums, der den britischen Bluesrockgitarristen und S??nger ?Danny Bryant seit Beginn seiner steilen Karriere begleitet hat. Der Traum, seine Songs mit einer ?neunk??pfigen Bigband ungeschminkt vor Publikum aufzunehmen, wurde Anfang 2017 in die Realit??t umgesetzt. Der charismatische Musiker pr??sentierte, unterst??tzt durch ?Keyboards, Bass, Schlagzeug, Rhythmus-Gitarre und einer vollen vierk??pfigen Bl??sersektion, seine Songs bei drei exklusiven Shows in Deutschland und in den Niederlanden seinem Publikum. Das Ergebnis war so fulminant, dass der Mitschnitt mit der Ver??ffentlichung des ?doppelten Live-Albums ?BIG? (Jazzhaus Records/in-akustik, No. 1 Amazon-Bestseller Kategorie ?Blues?) gefeiert wurde.                        Nach seiner bisher erfolgreichsten Tournee im vergangenen Herbst und Auftritten bei namhaften europ??ischen Festivals wird ?Britain?s National Blues Treasure? (Classic Rock Magazine, UK) auch 2020 bei wenigen, exklusiven Konzerten mit Bigband-Besetzung live in mehreren L??ndern zu sehen sein. Der sich seit einigen Jahren in stetigem Aufwind befindende Brite wird auf der anstehenden Europa-Tour sein neues Studioalbum ?Means Of Escape? (Jazzhaus Records) live vorstellen. Das Werk ist nicht nur das 11. Studioalbum des von der Kritik hochgelobten Gitarristen, es ist auch das erste von ihm selbst produzierte Album. Mit Hilfe von Grammy-Preistr??ger Toningenieur Ian Dowling (Adele) und Mixer Eddie Spear (Rival Sons, U2) entstand ein Album, das den H??rer auf eine emotionale Achterbahnfahrt mitnimmt und Danny Bryant durchg??ngig in Bestform zeigt.",
            "startDateTime": "12/11/21 19:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27643975005&a=774719&m=13738"
        },
        {
            "id": "e133",
            "title": "Das ist Wahnsinn! - Tour 2022",
            "description": "Bodenst??ndig, sympathisch, ehrlich und das Herz am rechten Fleck, das sind Attribute, die Wolfgang Petry seit jeher auszeichnen. Wolfgang ?Wolle? Petry startete seine einzigartige Karriere vor ??ber 40 Jahren! 2006 beendete er sie ohne Vorwarnung abrupt. Acht Jahre nach seinem Abschied von der B??hne brachte er 2014 mit ?Einmal noch? ein Remix-Album seiner gro??en Hits heraus. Das Album ging direkt von Null auf 1 und erreichte Gold. Ein Jahr sp??ter ??berraschte Petry mit dem rockigen Studio-Album ?Brandneu?, welches ebenfalls direkt auf Platz 1 schoss. Im M??rz 2016 erschien das Doppel-Album ?40 Jahre - 40 Hits? mit allen seinen Erfolgen von 1976 ? 2016. Und nun wird mit ?WAHNSINN! Das Musical mit den Hits von Wolfgang Petry? das gro??artige Petry-Gef??hl zur??ck auf die B??hne kommen.",
            "startDateTime": "1/16/22 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=27654193737&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/0NC1M8ph.jpeg"
        },
        {
            "id": "e134",
            "title": "JEREMIAS - live 2021",
            "description": "Liebe:r Ticketinhaber:innen,leider muss das Konzert von Jeremias auf Grund der aktuellen Auflagen und Richtlinien zur Eind??mmung des Coronavirus vom 27.02.2021 auf den 27.06.2021 verschoben werden. Ein pers??nliches Statement von Jeremias wird auf ihren Social Media Kan??len zu finden sein.Bei uns im E-Werk wird die Veranstaltung jetzt corona-konform im Saal mit festen Sitzpl??tzen stattfinden, mit allen ??blichen Hygiene- und Abstandsma??nahmen. Durch die Abstandsregel verringert sich allerdings unsere Kapazit??t erheblich, so dass Jeremias an diesem Tag zwei Shows spielen. Falls Ihr am neuen Termin teilnehmen wollt, m??sst Ihr Euch im Vorfeld f??r eine der beiden Zeiten entscheiden, damit wir Euch entsprechend Sitzpl??tze buchen k??nnen. 1. Show: 27.06.2021  Einlass 17:00 Uhr / Beginn 18:00 Uhr2. Show: 27.06.2021  Einlass 20:00 Uhr / Beginn 20:30 UhrBitte meldet Euch mit Angabe des Namens des Ticketk??ufers und der Anzahl der umzubuchenden Tickets bei uns per Mail an info@e-werk.de zur??ck. Falls Ihr eine Bestellung gemacht habt, die zu einer anderen Buchung geh??rt ? und Ihr also zusammensitzen wollt, brauchen wir nat??rlich alle Namen. Wir bearbeiten nach Mail-Eingang die Umbuchungen bestm??glich und w??rden Euch informieren, falls die gew??nschte Uhrzeit nicht mehr verf??gbar ist.  Solltet Ihr am Ersatztermin nicht k??nnen oder wollen, meldet Euch bitte auch bei uns, wir beantragen dann die R??ckerstattung. Liebe Gr????e aus dem E-WerkKulturzentrum E-Werk",
            "startDateTime": "11/19/21 20:00",
            "venueId": "v8",
            "offerURL": "https://www.awin1.com/pclick.php?p=27725043873&a=774719&m=13738"
        },
        {
            "id": "e135",
            "title": "Wishbone Ash - PHOENIX RISING TOUR 2022",
            "startDateTime": "1/15/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27725044529&a=774719&m=13738"
        },
        {
            "id": "e136",
            "title": "BOSSE - Alles ist jetzt",
            "description": "Foto: Tim BrueningBOSSE strotzt vor frischen musikalischen Ideen, unnachahmlichem Wortwitz und bemerkenswerter Tiefensch??rfe in seinem Blick auf die Dinge. ER wirbelt auf. K??nstlerisch, thematisch, emotional. Mit H??ftschwung und Haltung. Mit Leichtigkeit und Bodenhaftung. ?Alles ist jetzt? ist modern, hell und klar. Wach und voller Energie. Produziert von Jochen Naaf (Polarkreis 18, Peter Licht, Maxim), der auch bei den Alben ?Taxi? und ?Wartesaal? schon das Mischpult geregelt hat und Tobi Kuhn (Die Toten Hosen, Feine Sahne Fischfilet, Milky Chance). Das letzte Album ?Engtanz? stieg als erstes seiner Alben direkt auf Platz 1 in die deutschen Albumcharts ein. Der Vorg??nger ?Kraniche? ist mit GOLD dekoriert. Festivalauftritte auf den gr????ten Hauptb??hnen des Landes, 13.000 Fans beim eigenen Open-Air-Konzert auf der Hamburger Trabrennbahn, in zwei Minuten ausverkaufte Clubs und ausverkaufte Hallen. Zu einem der etabliertesten und anerkanntesten K??nstler im Live-Business zu geh??ren: wohl die sch??nste Auszeichnung f??r Kontinuit??t und das gr????te Geschenk, was einem das eigene Publikum machen kann. Sein Antrieb: Jeder Schritt nach vorne setzt Energie frei. Jedes durchschwitzte Konzert Liebe. Jedes neue Album Dankbarkeit. Von au??en heute mehr denn je: Wertsch??tzung und uneingeschr??nkte Sympathie. F??r eine bemerkenswerte K??nstlerkarriere. Fernab von Eitelkeiten und Starall??ren. Voller Tiefe und Nachhaltigkeit. ?Alles ist jetzt? erscheint am 12. Oktober in einer Standard- und in einer Deluxe-Version. Diese wartet zus??tzlich zu den 12 neuen Songs noch mit Akustik-Umsetzungen von acht der neuen Songs auf, vier davon eingespielt mit dem Kaiser Quartett aus Hamburg. Zus??tzlich gibt es f??r alle Freunde der schwarzen Rille ?Alles ist jetzt? auch als Vinyl, BOSSE-Fans werden sich besonders ??ber eine limitierte Holz-/Plexiglas-Box freuen. Diese enth??lt neben der Deluxe-Edition des Albums auch Aufnahmen des Konzertes auf der Hamburger Trabrennbahn vom August 2017 auf Live-CD und Live-DVD sowie weitere ??berraschungen, die f??r strahlende Augen sorgen d??rften.",
            "startDateTime": "7/29/21 19:30",
            "venueId": "v4",
            "offerURL": "https://www.awin1.com/pclick.php?p=27731520527&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/ExquPuDb.jpeg"
        },
        {
            "id": "e137",
            "title": "Kytes - Special Guest: Pool",
            "description": "Die Geschichte von Michael Spieler, Timothy Lush, Kerim ??ke und Thomas Sedlacek dreht und windet sich bereits seit 2012.Seit der Sch??lerband machen sie in verschiedenen Konstelationen zusammen Musik, in dieser Zeit haben die M??nchner viel an ihrem Sound und Songwriting gearbeitet und 2015 die ON THE RUN EP unter dem Milky Chance Label Lichtidicht Records released. Es folgte die erste Tour durch die Republik und eine gro??e Festival Runde mit Stationen beim SXSW 2016 in Austin / Texas, Melt! Festival und MS Dockville. Das Deb??t Album HEADS AND TALES, im September 2016 ver??ffentlicht, landete auf #14 der iTunes Alternative Charts, die Songs wurden bis dato mehr als 7 Millionen mal auf Spotify gestreamt.Kytes begannen im Sommer 2017 die Arbeiten am Nachfolgealbum zusammen mit dem Wiener Produzenten Filous, parallel dazu spielten sie auf weiteren europ??ischen Festivals u.a. The Great Escape (UK), Sziget (HUN) und FM4 Frequency (AU). Im April diesen Jahres headlineten Kytes die egoFM Feste und er??ffneten quer durch Europa den Abend f??r die Indie-Heros Shout Out Louds und Everything Everything. Jetzt gehen Kytes, die mittlerweile mehr als 250 Shows auf dem Buckel haben, mit viel neuer unver??ffentlichter Musik im Gep??ck f??r 5 exklusive, kleine Club Konzerte auf Tour.",
            "startDateTime": "11/27/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27731523535&a=774719&m=13738"
        },
        {
            "id": "e138",
            "title": "Zugezogen Maskulin - 10 Jahre Abfuck Tour",
            "description": "Zwei junge M??nner verlassen ein ehemaliges Reichsbahn-Geb??ude, in dem sich nach der Wende Musikstudios eingenistet haben. Keine Highclass-Studios, wie die beiden sie im Rahmen ihres Praktikums kennengelernt haben, wenn Interviews anstehen und sich Rapper vor ihnen in tiefen Ledersesseln aalen, von ihren Alben erz??hlen, von den anstehenden Touren, vom Erfolg ? und die beiden jungen M??nner zuh??ren und nicken ? mit einem Aufnahmeger??t in der Hand.Jedenfalls sieht es danach aus, im Kopf l??uft jedoch was ganz anderes ab, sie wollen selber im tiefen Ledersessel sitzen, vor einem dankbaren Publikum, denn trotz aller Versicherungen sich selbst oder ihrem Chef gegen??ber: Eigentlich wollen die beiden selber Rapper sein.Oder noch besser: Rapstars.Und vielleicht kommen sie jetzt diesem Ziel n??her, denn heute, in diesem kleinen, etwas heruntergekommenen Studio, ist ihre erste gemeinsame Platte fertig geworden. Der Titel, eine Mischung aus Selbstbewusstsein und Provinz-Komplex. Aber er verf??ngt gut, mal gucken, was man noch damit anf??ngt, mit diesem schr??gen Namen, mit ZUGEZOGEN MASKULIN.Passt ja auch, 2010 ist ein schr??ges Jahr, neues Jahrzehnt, neue Superlative, die wahrscheinlich so nicht mehr zu ??berbieten sind: Die Schweinegrippe besorgt die Menschen, ein Vulkan sorgt daf??r, dass in manchen Teilen Europas kein Flugzeug startet und ein SPD-Politiker sorgt mit seinem Buch f??r einen, vorher undenkbaren, Rechtsruck ? wenigstens hat man schon l??nger nicht mehr von den D??nermorden geh??rt.Was beide zu diesem Punkt nicht wissen, nur hoffen: Die Rapstartr??ume werden sich erf??llen. Es wird rauschhaft, Anerkennung, dieses bohrende Verlangen nach Anerkennung, Geld, Ruhm, all das gibt es bald ? aber der Kater wird gigantisch. Und was die beiden nicht wissen k??nnen, aber ahnen: Dieses schr??ge Jahrzehnt wird noch schriller und seltsamer, mit Verwerfungen, an die man sich im Sommer des Jahres 2020 gew??hnt hat, die bei Bandgr??ndung noch unvorstellbar sind: es werden 10 JAHRE ABFUCK.Und so berichten ZUGEZOGEN MASKULIN auf 10 JAHRE ABFUCK von der Ankunft aus der deutschen Provinz in Berlin, ?geblendet von den Lichtern, f??hlte mich wie Ivan Drago? und davon, wie man bei ?Rap.de? Menschen interviewt, die einige Jahre sp??ter anderen Menschen in Syrien den Kopf abschneiden werden. GRIM104 und TESTO erz??hlen vom tr??ben Weg hin zum Erfolg, als ?ZM auf dem Normiefest? spielten, vor Typen mit Deutschlandhut und mit DJ ??tzi als Kontrastprogramm.Blicken auf M??nner und einengende M??nnlichkeitskonzeptionen, wenn im Hort aus ?zwei Decken und zwei St??hlen? eine ?Liebesh??hle? wird, in der ein Spielkamerad K??sse auf den Bauch verteilt ? und blicken auf Frauen, aus den Augen eines Incel-Raubtiers, dessen Geilheit kein Ventil gesetzt ist und aus den Augen des feministischen Posterboys, dem ein ?The Future is female? genauso schnell von den Lippen geht, wie der bedrohlich-aufdringliche Anruf nachts um 3.Huldigen ?K??nig Alkohol?, der zwar ?alles zerst??rt, alles kaputt um mich rum?, aber dessen Zauberkraft auch f??r Abenteuer und Legendenbildung sorgt. Dann, langsam kommt er, ?Der Erfolg?, erkennt man, dass man ein ?Traumprinz wie Dieter Bohlen? ist und wenn es nicht klappt mit den Girls, scheiss drauf ?wieviel Klicks hat denn dein Neuer, wenn ich fragen darf?? Lachen irre beim ?Tanz auf dem Vulkan?, gegen das bedrohliche Brodeln der Lava aus NSU, AFD, aus Nordkreuz und VS.Und landen in der Gegenwart, wenn man begreift, dass Musik machen und Musik verkaufen eventuell zusammen geh??ren, wenn man gemeinsam mit AHZUMJOT seine Fans zum Kauf der Deluxe-Box einschw??rt, ?ich liebe euch so sehr, ihr d??mlichen Viecher?. Wenn die B??hnen gro?? und gr????er werden, man unter den irritierten Blicken von Angela Merkel und 40.000 schockierten Zuschauern ein Feiertagsprogramm mit ZM-Klassikern wie ?Endlich Wieder Krieg? bestreitet, ?Auftritt Brandenburger Tor, ausgebuht/ aber gut bezahlt ? f??hlt sich geil an.?Und wenn man vielleicht langsam m??de wird und hofft, dass der Sommer langsam vorbeigeht, wenn man sich w??nscht, dass der schwere Goldschmuck endlich daf??r sorgt, dass man still und heimlich beim Baden ertr??nkt wird. Und dass, wenn einem solche Gedanken kommen, vielleicht an der Zeit ist zu gehen. Zeit f??r einen ?EXIT?.Dass dieser rauschhafte R??ckblick trotzdem so zeitgeistig, weltl??ufig und aktuell klingt, ist vor allem AHZUMJOT zu verdanken, der als Executive Producer auf 10 JAHRE ABFUCK gearbeitet hat. Der 30-J??hrige Hamburger hat der Platte ein minimalistisches und elegantes Soundbild verliehen, in den Produktionen wurde jeder unn??tige Pomp abgesto??en, kein Geigen-und-Piano-Pathos, sondern finstere Bass Music und zerhackte, zerschnittene Samples, die ineinander gewirbelt werden.Immer wieder tauchen Soundreferenzen auf obskure Youtube-Schnipsel auf, von ?Kai der Brecher? bis hin zu ?Pufferfish eating carrots?. Gespr??che aus dem Studio werden mitgeschnitten, kleine H??rspiele mit prominenten Gastsprechern in den Songs versteckt. Denn bei aller Modernit??t, es klingt nie glatt, nie beliebig, immer werden Kanten und Br??che in die Songs eingebaut. Diese Weirdness blitzt immer wieder auf den Produktionen von SILKERSOFT auf, der neben AHZUMJOT f??r die Beats auf dem dritten Studio-Album von Zugezogen Maskulin verantwortlich ist.Und so ist 10 JAHRE ABFUCK R??ckschau und Aufbruch zugleich: In einen eleganten und hypermodernen Sound eingepackt, schreiben GRIM104 und TESTO ??ber l??ngst verblasste Anf??nge, w??hlen im Morast zwischen der Kindheit und ersten Gehversuchen auf B??hnen, Beziehungen und Selbstbehauptungen. Und blicken gleichzeitig in eine Zukunft, die alles sein kann: Hamsterrad oder Emanzipation, strahlende Zukunft oder, hoffen wir es nicht, 10 JAHRE ABFUCK.",
            "startDateTime": "9/13/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27774151457&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/RJ4UCceg.jpeg"
        },
        {
            "id": "e139",
            "title": "FREIBURGerLEBEN: Flying Dinner Regional",
            "description": "Seit wann stellt sich die Frage ?Gabel  oder  Finger?? Reiner Wein oder gepanschtes Bier? Putzt man die Finger am Tischtuch ab oder ben??tzt man doch lieber eine Serviette? Was sagt das Salzfass ??ber den gesellschaftlichen Rang aus?Erleben Sie mit uns das etwas andere Dinner - Sie wollen nicht immer nur ganz klassisch essen gehen und einen Abend wie jeden anderen erleben? Dann ist das Flying Dinner genau das Richtige f??r Sie! Sie erleben  die wundersch??ne Altstadt und genie??en dabei in verschiedenen Restaurants leckere badische Spezialit??ten und badischen Wein.   Dieses Erlebnisdinner bietet Ihnen ein 3-G??nge-Men?? plus Aperitif. Die Entdeckungstour durch die Stadt dauert circa 2 Stunden und endet mit dem Hauptgang und Dessert in einem Restaurant. Ganz nebenbei erf??hrt man auch noch etwas ??ber die (kulinarische) Stadtgeschichte und erlebt die sch??nsten Gassen Freiburgs.Dauer der F??hrung: Ca. 2 StundemInkl. F??hrung + Aperitif + Vorspeise mit Glas Wein + Hauptgang mit Glas Wein + DessertDurchf??hrung der Tour bei mindestens 6 Personen. Sollten es weniger Teilnehmer sein behalten wir uns vor bis 2 Tage vor Beginn der F??hrung die Tour zu stornieren.",
            "startDateTime": "6/19/21 17:30",
            "venueId": "v15",
            "offerURL": "https://www.awin1.com/pclick.php?p=27795639897&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/rc4DeUiK.jpeg"
        },
        {
            "id": "e140",
            "title": "Chris Tall - Sch??nheit braucht Platz!",
            "description": "CHRIS TALLS NEUES B??HNENPROGRAMM: SCH??NHEIT BRAUCHT PLATZ!Ab M??rz 2020 auf Tournee!Nach den gro??en Erfolgen seiner beiden Soloprogramme ?Selfie von Mutti? und ?Und jetzt ist Papa dran!?, mit denen er die Arenen des Landes f??llte, legt der preisgekr??nte Comedian Chris Tall nach. Ab M??rz 2020 geht der Hamburger auf Tournee, um seine Fans aufs Neue zu begeistern. ?Sch??ner, schneller, breiter? ist die  Devise, denn curvy Chris feiert die Anmut: sich selbst! Mama und Papa sind abgemeldet, jetzt kommt das richtige Leben!Vom Cluburlaub zu vierst??ndigen Operninszenierungen, vom Stadion zu Babyparties, vom Binge-Watching zum Haustierkauf mit einem endlich gelungenen Date: Chris versucht jeder Situation etwas Positives abzugewinnen und verhilft der Sch??nheit zu ihrem Recht; auch wenn das ab und an geh??rig schief geht! So qu??lt er sich z.B. durch einen Tag Hochkultur, um am Ende seine geschundene Seele mit zwei Karten f??r ein HSV-Spiel zu befrieden. Die neue Whatsapp-Gruppe seiner Kumpels mit dem Namen ?Happa happa Dudu ? Babyface Emoji? speichert er zwar mit W??rgegedanken ab, begibt sich aber dennoch in die H??hle des L??wen und nimmt an einem Geburtsvorbereitungskurs teil. Schlie??lich macht man das so f??r seine Brudis?Chris Tall ist das Sprachrohr mehrerer Generationen: Gen??sslich seziert er selbst erlebte Geschichten und zieht sich und alle Beteiligten durch den Kakao. Es geht um Fami l ie, Freundschaft, den Struggle im Alltag als junger Mensch und nat??rlich ums Essen. Farbendi??ten und viel zu enge MRT-R??hren f??hren ihn zu der wunderbaren Einsicht, dass man Schweinefilet auch mit Quinoa, Hirse und Chiasamen panieren kann. Und obwohl er einige Vorlieben seiner neuen Freundin (z.B. Guppies als Haustiere) niemals verstehen wird, wei?? er, dass sie genau die richtige f??r ihn ist. Denn was ist am Ende sch??ner als die Liebe?Dabei ist keine Show wie die andere. Immer wieder stellt Chris seine eigenen Gags auf den Kopf und tritt in komischen Schlagabtausch mit seinem Publikum, um am Ende festzustellen: Verdammt, jetzt habe ich mich schon wieder selbst verarscht! Diese Interaktionen mit den Zuschauern lassen auch ihn selbst immer wieder G??nsehaut- Momente live in seiner Show erleben. So kamen in Oldenburg beispielsweise mit dem Zutun von Chris Tall 8000 Euro Spendengelder f??r die junge Lisa zusammen, die aufgrund einer Spastik in ihren Beinen im Rollstuhl sitzt. Wie so oft sprach der Komiker sie im Rahmen seiner ?darf er das??-Thematik an. ?Ihre Krankenkasse zahle keine besonderen Hilfsmittel f??r den Aufbau ihrer Muskeln, der? Kosten-Nutzen-Faktor` sei nicht gegeben?, so Lisa. Nun kann sich die bemerkenswerte Frau ein spezielles Fahrrad kaufen.Sein Live-Publikum liegt Chris Tall sowieso am Herzen! ?Ich habe die besten Fans der Welt?, sagt der junge Komiker immer wieder in Interviews. Und so steht auch im Jahr 20/21 wieder eine Arena-Tour an, ?denn die besten Fans sind auch die Sch??nsten und brauchen deswegen Platz!?",
            "startDateTime": "5/28/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=27815778457&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/ACJYfIXl.jpeg"
        },
        {
            "id": "e141",
            "title": "CYPECORE - Tour 2122",
            "startDateTime": "2/10/22 20:00",
            "venueId": "v22",
            "offerURL": "https://www.awin1.com/pclick.php?p=27849610473&a=774719&m=13738"
        },
        {
            "id": "e142",
            "title": "WISHBONE ASH - Phoenix Rising Tour 2022",
            "description": "Gegr??ndet 1969 in London, England, sind WISHBONE ASH eine der einflussreichsten Gitarrenbands in der Gesichte des Rocks. Gleicherma??en inspiriert durch britischen Folk, amerikanischen Jazz und R&B, erspielte die Band sich ??ffentliche Zustimmung und Kritikerlob. Energie und Melodie haben The ASH zu einem schwer zu ??berbietenden Act gemacht, der aktuell durch eine neue Generation treuer Rockfans entdeckt wird. ??ber die Jahre hat die Band mit diversen musikalischen Genres experimentiert, von Folk, Blues und Jazz bis hin zu Pedal-to-the-Metal Rock und Electronica. Egal in welchem Stil, WISHBONE ASH?s unverkennbares Alleinstellungsmerkmal ist ihr Zusammenspiel zweier Leadgitarren, das unter anderem Bands wie Thin Lizzy, Lynryd Skynryd, Iron Maiden und Opeth beeinflusste.Als wahre Krieger der Stra??e legt die Band j??hrlich rund 30.000 Meilen zur??ck, das entspricht etwa einer Erdumrundung. Den Sommer werden WISHBONE ASH im Studio verbringen, um ein neues Album aufzunehmen. Damit bringen sie ihren k??nstlerischen Output auf 25 Studioalben, 11 Livealben, sowie f??nf Live-DVDs und die DVD Rockumentation ?This is Wishbone Ash?. Ebenfalls erh??ltlich sind die f??nfte Roadworks CD ?Live in Sacramento?, die w??hrend der Nordamerika-Tour in 2018 aufgenommen wurden, und die ersten offiziellen Re-Releases von ?Twin Barrels Burning? aus 1982 und ?Raw to the Bone? aus 1985.Zus??tzlich kommen zum Jubil??um auch einige ??ltere Aufnahmen wieder ans Licht, so z.B. Snapper Records? neuester Release, ?Live in Glasgow? von 1977. Ebenso der legend??re und sehns??chtig erwartete TV-Mitschnitt ?Live from Rockpalast? (Deutschland, 1970er Jahre), der demn??chst beim Label ?Made in Germany Music? erh??ltlich sein wird. Doch damit nicht genug: WISHBONE ASH halten noch eine Vielzahl anderer Projekte bereit - das 50-j??hrige Jubil??um wird umfangreich mit Ver??ffentlichungen und Ereignissen begleitet.2015 erschienen Andy Powells musikalische Memoiren mit dem Titel ?Eyes Wide Open: True Tales of a Wishbone Ash Warrior,? an dem auch der renommierte irische Musikjournalist Colin Harper mitgeschrieben hat (verf??gbar als E-Book f??r Kindle oder Apple iBook). ?Es ist ein ziemliches Unterfangen 46 Jahre als tourender Musiker in dieser einen Band in Buchform zu bringen,? so Powell ?Ich habe viele Ver??nderungen in der Musikindustrie und auch generell in der Welt gesehen, wie man sich vielleicht vorstellen kann.? Fest steht: keine andere Rockband in der Geschichte hat mehr mit dem Twin-Guitar-Konzept gespielt als WISHBONE ASH.",
            "startDateTime": "1/15/22 20:00",
            "venueId": "v22",
            "offerURL": "https://www.awin1.com/pclick.php?p=27911470567&a=774719&m=13738"
        },
        {
            "id": "e143",
            "title": "Zweierpasch - Live 2021",
            "description": "Poetisch, politisch, polyphon: Zweierpasch gehen ??ber Grenzen - sprachlich und geografisch. Mitihrem rebellischen World HipHop pr??gt die Band aus Freiburg und Stra??burg die Szene auf ihreganz eigene Weise. Das haben die lyrischen Grenzg??nger bei Tourneen in Europa, Afrika und Asienbewiesen. 2017 waren sie Freiburgs Band des Jahres. Im November 2018 haben sie in Paris denAdenauer-de-Gaulle-Preis erhalten. 2019 spielten sie im westafrikanischen Mali vor 10.000 Fans.Im Zeichen von Frieden, Austausch und Toleranz touren sie mit deutsch-franz??sischen Tracks durchdie Welt. Im November ist ihr 4. Studioalbum erschienen: ?Un peu d?Amour? (Jazzhaus Records).",
            "startDateTime": "10/8/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27911473263&a=774719&m=13738"
        },
        {
            "id": "e144",
            "title": "Heinrich Del Core - GL??CK g??habt!",
            "description": "?GL??CK g?habt!? ? wenn man in Mexiko im Schlaf ??berfallen wird und gesund aus der Nummer raus kommt?GL??CK g?habt!? ? wenn du dich selber beim Schnarchen nicht h??rst?GL??CK g?habt!? ? hat Heinrich Del Core in der letzten Zeit h??ufig - und genau das gibt er in seinem neuen Programm zum Besten. Heinrich Del Core nimmt uns erneut mit auf eine Reise durch den Alltag - absolut skurril, alltagstauglich und irrwitzig zugleich. In seinem Handgep??ck hat er neue, herrlich komische Geschichten, unz??hlige Lacher und eine Menge an Humor dabei ?und seine Schuhe! Seine roten Schuhe!Der halbe Restitaliener versteht es mit seiner sympathischen, schw??bischen Leichtigkeit die Alltagsituationen so detailgetreu wiederzugeben, dass das Publikum sofort in seinem Bann gezogen wird und seinem Charme nicht auskommt. Ein unvergleichlicher Mix aus Situationskomik, Charisma und Sprachwitz. Mit Heinrich Del Core treffen sich Italien, Deutschland, Comedy und Kabarett.Diesmal dreht sich alles rund ums Gl??ck -der Italo-Schwabe macht keinen Halt vor Polizeikontrollen und Saunabesuchen. Auch was es mit der Einverst??ndniserkl??rung beim Sex in Schweden auf sich hat wird er in seiner unnachahmlichen Art erl??utern. Selbst seine Urlaubserlebnisse und Bahnfahrten bis hin zur Darmspiegelung werden nicht ausgelassen. Eins ist sicher ? Das Publikum wird weiterhin mit wahren Begebenheiten des Alltags einen ganzen Abend lang bestens unterhalten!Der zahlreich preisgekr??nte (siehe unten) Kabarettist und Comedian ??berzeugt mit seinem neuen sehr kurzweiligen und pointenreichen Programm und schafft eine einzigartige Verbindung und N??he zum Publikum, das sich immer wieder selber in seinen irrwitzig erz??hlten Geschichten lachend wiederfinden wird??",
            "startDateTime": "2/19/22 20:00",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=27934833331&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/FF81QfYb.jpeg"
        },
        {
            "id": "e145",
            "title": "The World of Hans Zimmer - A Symphonic Celebration - The Official Tribute",
            "description": "Foto: Frank EmbacherOscar-, Grammy- & Golden Globe-Gewinner Hans Zimmer ist zweifellos einer der bekanntesten und einflussreichsten Filmkomponisten unserer Zeit. Mit seinen ??berw??ltigenden Klangwelten hat er das zeitgen??ssische Kino gepr??gt wie kein anderer Komponist. Die Liste der Blockbuster-Produktionen, denen er mit seinen Soundtracks Dramatik und emotionale Tiefe schenkte, ist schier endlos. Der K??nig der L??wen, Gladiator, Fluch der Karibik, Da Vinci Code ? Sakrileg, The Dark Knight und Inception sind nur einige der bekanntesten. Mit dem atemraubenden Filmscore zum Christopher Nolan - Kinohit Dunkirk erhielt Hans Zimmer im Januar 2018 seine elfte Oscar-Nominierung. Ende April 2018 begann die ?The World of Hans Zimmer ? A Symphonic Celebration? Konzertreise durch Deutschland, die im Herbst 2018 erstmals in die Verl??ngerung geht und im Fr??hjahr 2019 sowohl in Deutschland als auch im europ??ischen Ausland weitere Termine nach sich zieht. Eine Tour, begleitet von langj??hrigen Freunden und Kollegen des Rockstars der Filmkomponisten, f??r die Hans Zimmer als Kurator und musikalischer Leiter steht, auch wenn er bei diesen Konzerten nicht pers??nlich auftritt. Im Gegensatz zu Hans Zimmers bekannter ?Live?-Tournee, bei der der Sound auf seine Band und die elektronischen Kl??nge der Musik ausgerichtet ist, werden die Werke von Hans Zimmer bei ?The World of Hans Zimmer ? A Symphonic Celebration? erstmals ??berhaupt f??r Orchester pr??sentiert. Daf??r hat Hans Zimmer h??chstpers??nlich in monatelanger Feinarbeit zu seinen Soundtracks opulente Konzertsuiten erstellt. F??r die Welturauff??hrungen seiner neu arrangierten Werke von ?K??nig der L??wen? bis ?Gladiator? hatte sich der Filmkomponist zur Premiere im April 2018 Deutschland ausgesucht. Neu ist auch, dass erstmals bildgewaltige Projektionen von Filmsequenzen f??r das Publikum gezeigt werden. Auch hier hat Hans Zimmer im Vorfeld der k??nstlerischen Leitung genau kommuniziert, welche Szenen ihm wichtig sind und eingesetzt werden sollen. Des Weiteren werden einige renommierte Solisten aus Hans Zimmers Talentschmiede, die gr????tenteils ebenfalls schon seine ?Live?-Tournee begleiteten, Teil der Show sein. Dazu geh??rt auch Pedro Eustache, Fl??tist der Fluch der Karibik Reihe. Durch die Leitung von Gavin Greenaway, Soundtrack-Dirigent von Hans Zimmer - dem er nach eigenen Worten mehr vertraut als sich selbst ? wird das gro??e Symphonieorchester ein eindringliches und unvergessliches Konzerterlebnis f??r das Publikum zelebrieren. Dazwischen geben Hans Zimmer sowie langj??hrige Freunde und Kollegen in kurzen Videoeinspielungen immer wieder spannende und am??sante Einblicke hinter die Kulissen seiner Studioarbeit. Mit ?The World of Hans Zimmer ? A Symphonic Celebration? erschafft Hans Zimmer eine einzigartige Gelegenheit, Orchestermusik einer neuen Generation vorzustellen, die Kultur des Orchesters zu bewahren und diese in eine weniger elit??re Welt zu versetzen. Die Zuschauer k??nnen in die aufregende ?World of Hans Zimmer? eintauchen ? mit all ihren vielschichtigen und faszinierenden Facetten.",
            "startDateTime": "2/27/22 19:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=27934833403&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/7WMMLJk4.jpeg"
        },
        {
            "id": "e146",
            "title": "The Magical Music of Harry Potter - Live in Concert",
            "description": "DAS EINMALIGE FILMMUSIK-ERLEBNISThe Magical Music of Harry Potter - Live in Concert mit den Weasley Br??dern!Das musikalisch Beste aus allen Harry Potter Filmenund dem Musical mit dem London Philhamonic & Symphonic Film-OrchestraDie Harry Potter Filme sind die erfolgreichsten Filme der Kinogeschichte, nun kommt die preis- gekr??nte Filmmusik in einem einmaligen Konzertabend mit den Weasley-Br??dern erstmals nach..(stadt)...! Original-Darsteller, Starsolisten, ein Chor und Symphonieorchester werden die musikalische Welt von Harry Potter am (datum)...in....(Halle)...zum Leben erwecken, Karten fuer dieses einmalige Ereignis gibt es ab sofort bei uns!Die Besucher werden die musikalisch bedeutendsten Momente des Harry Potter Mythos erleben. Das Programm umfasst die Film-Soundtracks des vierfachen Oscarpreistragers John Williams, Patrick Doyle, Nicolas Hooper und des weiteren Oscarpreistr??gers Alexander Desplat sowie die beste Musik aus ?Harry Potter und das verwunschene Kind?, das mit Preisen in London und New York ??berh??uft und zum erfolgreichsten Theaterst??ck der Welt wurde.Wenige ausgew??hlte Konzerte werden von Oscarpreistr??ger Alexandre Desplat dirigiert, bei allen Konzerten mit dabei sind Publikumslieblinge und Mitglieder der Weasley Familie, welche mit al- lerlei Spa?? und guter Laune das Konzert zu einem unvergesslichen Erlebnis machen. Der Abend pr??sentiert eine musikalische Reise in eine magische Welt mit Freundschaft, Abenteuer, Liebe und Zusammenhalt in der gefahrlichen Welt der Magier. Die Besucher erwartet eine Welt der Illusion sowie modernste Technologie mit einer Licht- , Ton- und Laserinszenierung sowie eine einzigartige Klangdimension, die G??nsehaut erzeugt. Visuelle und magische Effekte werden die Herzen aller Harry Potter-Fans h??her schlagen lassen.Die Werke wurden von vier Komponisten geschrieben und das Publikum erlebt an diesem Abend ein musikalisches ?Best of Harry Potter? aus allen acht Filmen und dem Musical. John Williams (Star Wars, ET, Indiana Jones, Jurassic Park) komponierte die Musik f??r die ersten drei Filme, das Publikum darf sich auf Titel freuen wie die ber??hmte Hedwig?s Theme, das Leitmotiv der Har- ry-Potter-Verfilmungen, sowie auf Double Trouble - das klassische Hogwarts-Motiv mit einem Kinderchor, welches sogar Anklang in modernen Shakespeare-Inszenierungen nimmt - , sowie den lustigen Aunt Marges Waltz und Witches, Wands and Wizards. Teil des Programm sind au??erdem Werke wie die ?Hogwarts Hymne? von Patrick Doyle, der mit seiner Musik im vierten Harry Potter Film in die mysteri??se und dunkle Welt des trimagischen Turniers entf??hrt. Ni- cholas Hooper hat mit ?Dumbledores Farewell? im f??nften und sechsten Harry Potter Film den Reifeprozess Harrys mitgestaltet und Alexandre Desplat mit ?Lily`s Theme? in den letzten beiden Werken der Filmreihe das grandiose und unvergessliche Finale komponiert.KARTEN SICHERNThe MAGICAL Music of Harry Potter ist ein magischer Abend, der sie verzaubern wird- mit seiner Aura, Stimmung und immensen Klangwelten - ein einzigartiges Erlebnis.",
            "startDateTime": "2/27/22 15:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=27934835975&a=774719&m=13738"
        },
        {
            "id": "e147",
            "title": "B??lent Ceylan - Luschtobjekt",
            "description": "Von der ?Generation Instagram? lernen, hei??t siegen lernen! Deswegen zeigt B??LENT seinem Publikum nicht die kalte Schulter, sondern die rasierte Brust. B??lent macht sich zum LUSCHTOBJEKT! Optik statt Inhalt, Nippel statt Nietzsche! Kabarettpreise m??ssen warten. B??lent bedient als LUSCHTOBJEKT alle nur denkbaren Geschlechter und Vorlieben: osmanophile Kurpfalz-Lover, Langhaar-Fetischisten oder Liebhaber gro??er Nasen und kleiner B??rte... bei B??LENT packt jeden die Wolluscht! Und wer Intelligenz sexy findet, wird nat??rlich auch befriedigt nach Hause gehen.Aber B??LENT macht sich in seinem 11. Live-Programm nicht nur selbst zum LUSCHTOBJEKT, er macht sich auch ??ber Luschtobjekte lustig. ??ber seine eigenen (Frauenf????e und Gummifr??sche) und ??ber die anderer Leute. Denn heute kann offenbar alles ein LUSCHTOBJEKT sein:Autos, Schuhe, Smartphones... es gibt sogar Menschen, die Atomkraftwerke lieben. Selbst G??tter sind objektophil! Und weil der Donnergott THOR bekanntlich geb??rtiger Mannheimer ist, verr??t er bei B??LENT weltexklusiv und zum ersten Mal, wo, wann und wie bei ihm der Hammer h??ngt. Das wird luschtig, versprochen!Foto: S-Promotion",
            "startDateTime": "4/21/22 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=27967700467&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/KgoqYFd2.jpeg"
        },
        {
            "id": "e148",
            "title": "Die Boogie Woogie Weihnachtsexplosion zum 3. Advent",
            "description": "2016 feierten sie ihr 25-j??hriges Bestehen, seit langem z??hlen sie zur Spitze in der internationalen Blues- & Boogie - Szene: Christoph Pfaff, Thomas Scheytt, Hiram Mutschler und ihre BOOGIE CONNECTION.?Wenn der Boogie nicht in Amerika, sondern im Schwarzwald entstanden w??re, dann st??nde als Geburtsst??tte Freiburg in den Jazzlexika und die Musik w??rde dann so klingen, wie sie die Boogie Connection spielt. Die dreik??pfige Band braut eine hei??e Mischung aus Blues, Boogie, Rhythm`n`Blues und Soul?, schreibt das Jazzpodium. Mit ??ber hundert Konzerten pro Jahr, darunter Auftritten bei nahezu allen bedeutenden Jazzfestivals in Deutschland und im europ??ischen Ausland, geh??ren sie zu den erfolgreichsten Bands, die Freiburg je hervorgebracht hatBOOGIE CONNECTION ?Noch spartanischer geht es nicht: Ein Piano, eine Gitarre und ein Schlagzeug ? mehr braucht es nicht, um die Fans binnen k??rzester Zeit von ihren St??hlen zu holen.? (S??dkurier)?Eine hei??e Mischung aus Blues, Soul, Boogie-Woogie und totalem Rhythm`n`Blues, wie man sie einzigartiger Weise nur mit der Boogie Connection aus Freiburg/Breisgau erleben kann. In diesem Musikgenre sind Christoph Pfaff, Thomas Scheytt und Hiram Mutschler nach wie vor die unerreichten K??nige der internationalen Live-Jazz-Szene.? (Schaffhauser Nachrichten)Besetzung: Christoph Pfaff: Gesang, Gitarre, MundharmonikaThomas Scheytt: PianoHiram Mutschler: Schlagzeug",
            "startDateTime": "12/12/21 19:00",
            "venueId": "v20",
            "offerURL": "https://www.awin1.com/pclick.php?p=27994356999&a=774719&m=13738"
        },
        {
            "id": "e149",
            "title": "basta - In Farbe",
            "description": "Ein Zuviel an Grau musste man von basta noch nie bef??rchten. Best??ndig versorgen die f??nf Jungs im besten Alter ihr Publikum seit Jahren mit lebensprallen Liedern, umwerfend komischen Geschichten und feinsinnigen Balladen und arbeiten so unentwegt an der kulturellen Kolorierung f??r eine Bunte Republik Deutschland. Dass das a cappella, also nur mit Stimmen geschieht, ist dabei fast schon Nebensache. Ganze Orchester und Bands entstehen vor den inneren Augen und Ohren des Publikums. Auch hier ist es der (musikalische) Farbenreichtum, der souver??ne Zugriff auf alle erdenklichen Genres und Stilrichtungen, der basta so auszeichnet. Nachdem sie uns bei ihrer letzten Show ?Freizeichen? mit dem B??roshanty ?Cut, copy & paste? begeistert haben, spendieren sie uns dieses Mal mit ihrer Dancenummer ?Reggaeton im Altersheim? eine weitere so unwahrscheinliche wie geniale Kombination zweier Welten, die nach einmaligen H??ren nicht mehr voneinander zu trennen sind. Diese irrwitzigen und doch so passenden Kombinationen sind neben ihrer umwerfenden B??hnenpr??senz so etwas wie bastas Markenzeichen: ?Kranke M??nner? verbindet klassischen Hardrock mit maskuliner Wehleidigkeit, ?Mein Auto? alpine L??ndlerromantik mit einer satirischen Hymne auf des Mannes besten Freund, das Auto. Apropos Satire: Dass Gesellschaftskritik bei basta nie mit erhobenem Zeigefinger und Moralpredigten, sondern immer sympathisch und mit einem verschmitzten L??cheln dargereicht wird, ist ihre gro??e St??rke. basta schmieren uns keinen Honig um den Mund. Dass es manchmal schwer ist, dieses Leben, davon wissen und singen sie. Aber sie zeigen uns, dass wir das Recht haben, ??ber all die Zumutungen zu schmunzeln. ?Das Leben ist kein Wandtattoo? hei??t es bei ihnen, und dass dieser Satz schon fast selber zum Sinnspruch taugt, ist auch wieder eine so typische basta-Ironie. Nein, basta nehmen das Leben ernst und humorvoll zugleich, und das muss man ihnen erstmal nachmachen. Sie gewinnen jeder schmerzlichen, traurigen oder auch nur banalen Situation einen neuen Blickwinkel ab und machen ihn damit sch??ner. Und was einem den einen oder anderen Tag normal, allt??glich und grau erschienen haben mag, das sieht man sp??testens nach dem Besuch einer basta-Show: in Farbe.",
            "startDateTime": "3/16/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=24485891229&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/xc1MrHLz.jpeg"
        },
        {
            "id": "e150",
            "title": "Aynsley Lister - Euro Tour 2021",
            "description": "Nach sieben Studioalben, drei Live-Alben und regelm????igen, ausverkauften Tourneen in ganz Europa muss man AYNSLEY LISTER eigentlich nicht mehr gro?? vorstellen. Der britische Gitarrist, S??nger und Songwriter hat sich in der Blues/Rock-Szene in den letzten 18 Jahren einen exzellenten Ruf erspielt und konnte auch f??r sein letztes Werk, das 2013 ver??ffentlichte Album ?Home?, seiner mittlerweile mehr als ansehnlichen Sammlung von Auszeichnungen gleich drei neue hinzuf??gen: bei den British Blues Awards 2014 wurde der Titeltrack des Albums ?Home? als ?Song Of The Year? ausgezeichnet, Anysley Lister wurde ?Songwriter of the Year? und 2015 setzte sich der Musiker als ?Guitarist of the Year? gegen die Konkurrenz durch.",
            "startDateTime": "11/10/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27559852625&a=774719&m=13738"
        },
        {
            "id": "e151",
            "title": "Steiner & Madlaina - Win Win Tour",
            "description": "Wer  Nora  Steiner  und  Madlaina  Pollina  in  den vergangenen Jahren mal live gesehen hat ?zum Beispiel   auf   ihren   langen   Touren,   auf   dem Southside/Hurricane   Festival   oder   auf   dem Lollapalooza ?der m??sste ihren Live-Qualit??ten, ihrem Charisma, ihren Stimmen und nicht zuletzt ihren Songs bereits erlegen sein. Und das d??rfte mittlerweile   einigen   passiert   sein,   denn   die beiden haben den alten Mythos des ?Hochspielens? ernst   genommen   und   in   den letzten  Jahren  ??ber  150  Konzerte  abgerissen, davon allein 110 im letzten Jahr.Nora   und   Madlaina   kennen   sich   dabei   seit Schultagen  in  ihrer  Heimat  Z??rich ?und  genau das  ist  es,  was  man  bei  jeder  Performance  sp??rt.  Au??erdem  stehen  sie  seit Teenagertagen    auf   B??hnen,    Holzk??sten,    Festivalwiesen,    in    Hinterh??fen,    in ?D??nerl??den vor f??nf motzenden G??sten? wie Nora sich lachend erinnert oder seit ein paar Jahren auch immer wieder im Studio. Ihr Deb??talbum ?Cheers? kam 2018 und mischte ??berwiegend  deutsche  Lieder  mit  einer  Handvoll  englischer  und  dem wundervollen ?Herz vorus id Wand? auf Schwyzerd??tsch. Auf ihrem zweiten Album ?W??nsch mir Gl??ck?haben  Steiner  &  Madlaina  nun  ihre Sprache in Sound, Haltung und Wort gefunden. Und dabei f??llt sofort auf: Alle Songs sind auf Deutsch getextet. ?Geplant war das nicht unbedingt?, erz??hlt Madlaina, ?das kam  eher  so  raus.  Wir  wollten,  dass  die  Texte  mehr  Gewicht  bekommen  und  ich glaube, unsere Anspr??che an uns sind auch ein bisschen gewachsen. Die Songs auf Deutsch  waren  am  Ende die besten. ?Nora erg??nzt: ?Es hatte nat??rlich Einfluss, dass  wir  viel  in  Deutschland  auf  Tour  waren,  oft  mit  Bands,  die  nur  auf  Deutsch singen.? Auf gro??e Tour geht es mit neuem Album dann im Herbst 2021.  ?W??nsch mir Gl??ck? erscheint am 29. Januar 2021 via Glitterhouse Records.",
            "startDateTime": "11/17/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28024602993&a=774719&m=13738"
        },
        {
            "id": "e152",
            "title": "EHRLICH BROTHERS - MAGIC MOMENTS",
            "description": "Es geht wieder los! Die Ehrlich Brothers mit zwei spektakul??ren  Shows auf Tournee: MAGIC MOMENTS und DREAM & FLY! Nach monatelangem Stillstand kommt Schwung in den Weg zur??ck zur Normalit??t.  Viele Ma??nahmen und Lockerungen tragen dazu bei, dass bald wieder  Veranstaltungen stattfinden werden. Die Sehnsucht nach Live-Events ist so gro??,  dass eine Reihe an Zusatzshows in den Tourplan der Ehrlich Brothers aufgenommen  wurden. Zur Freude ihrer Fans werden die Starmagier gleich mit zwei Shows quer  durch Deutschland unterwegs sein: Mit DREAM & FLY rocken sie die gr????ten  Arenen der Republik, w??hrend sie mit MAGIC MOMENTS eine Show f??r mittelgro??e  Arenen konzipiert haben. Alle Veranstaltungen finden unter Ber??cksichtigung der  jeweils geltenden Corona-Auflagen statt. MAGIC MOMENTS ist ebenso spektakul??r wie die gr????ere Tourproduktion DREAM  & FLY in den gro??en Arenen. Klein hei??t bei den Weltrekord-Magiern aber immer  noch 14 statt 22 LKW (40-Tonner). Die beiden Starmagier haben f??r MAGIC  MOMENTS ein ?Best of? ihrer Lieblingsillusionen aus den Erfolgsshows ?Magie ? Tr??ume erleben?, FASZINATION und DREAM & FLY zusammengestellt. Au??erdem  werden sie die Premiere von einigen brandneuen Kunstst??cken feiern.  MAGIC MOMENTS bietet die M??glichkeit, die Zauberbr??der in kleinerem Rahmen zu  erleben. Es zeichnet die sympathischen Magier aus, dass sie neben den  einzigartigen Gro??illusionen auch die leisen T??ne und das charmant-witzige Spiel mit  den Zuschauern beherrschen.",
            "startDateTime": "6/26/22 13:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=28030608413&a=774719&m=13738"
        },
        {
            "id": "e153",
            "title": "Kat Frankie - The Shiny Things Tour - Neues Datum",
            "description": "Nach einer ausverkauften Elbphilharmonie und einer umjubelten Tour mit dem A-cappella-Projekt B O D I E S Anfang 2020, kehrt Kat Frankie nun zu den Grundlagen zur??ck: Gitarren, Schlagzeug, Tasten. Ihr kommendes Album kn??pft an den Art-Rock der 90er Jahre an, mit einer guten Portion Bombast. Frankie versteht es, bei ihrem Publikum G??nsehaut auszul??sen. Es wird Spa?? machen, dramatisch und laut sein, und Sie werden es nicht verpassen wollen.Im Oktober 2021 kommt die Ausnahmek??nstlerin auf Tour nach Deutschland.Kat Frankie wurde letztes Jahr mit dem VUT Award als ?Bester Act? und dem Preis f??r Popkultur als ?Beste K??nstlerin? ausgezeichnet.",
            "startDateTime": "10/28/21 20:00",
            "venueId": "v22",
            "offerURL": "https://www.awin1.com/pclick.php?p=28054818011&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/y6DKRbxU.jpeg"
        },
        {
            "id": "e154",
            "title": "JULES AHOI - Dear____Tour",
            "description": "Wenn JULES AHOI mit seiner f??nfk??pfigen Band auf die B??hne geht, schweben alle im Raumauf einer gemeinsamen musikalischen Welle. Bekannt geworden ist der deutsche Singer-Songwriter mit seinem ?Saltwaterfolk?, den er in Liedern wie ?Robinson Crusoe? oder ?Salt& Sun? manifestiert hat. 2020 stehen f??r JULES AHOI alle Zeichen auf Ver??nderung,k??nstlerische Weiterentwicklung und intensive Verarbeitung eines neuen Lebensabschnitts.Das musikalische Ergebnis dieser Umbruchphase: Das im Juni 2020 ver??ffentlichte Album?DEAR ____?.?Ich habe zum ersten Mal in meinem Leben das Gef??hl, angekommen zu sein?, so JULESAHOI. Die erste Singleauskopplung ?3 AM? war der Auftakt einer Platte, auf der vielUnerwartetes und ??berraschendes geschieht ? erstaunliche Wendungen und Br??che,reizvolle Variationen ??berkommener Konventionen, die Integration von Sounds aus demiPhone-Speicher und von Stilmitteln aus ganz unterschiedlichen Genres. Musikalisch ist?DEAR ____? ein gewaltiger Schritt nach vorne geworden ? fort vom reinen Folk und Folkrockhin zu etwas, was man auf der Suche nach Etikettierungen als Alternative Pop, Art Pop oderArt Folk bezeichnen mag.Neben der soundtechnischen Wandlung ist aber auch ein neues Mindset von JULES AHOIerkennbar. Mit 18 Jahren zog er ans Meer ? erst nach Kiel, anschlie??end an die franz??sischeAtlantikk??ste. Dort entdeckte er das Surfen f??r sich und verdiente seine Br??tchen alsSurflehrer, mit Modeljobs und Stra??enmusik. Das Lebensgef??hl an der K??ste nutzte er alsInspirationsquelle f??r eine Vielzahl an Songs. Wo im 2016 erschienenen Deb??talbum?Between Lines?, in ?EUPHORIA / fragments? (2017) und der EP ?Echoes? (2019) ehrlichvertr??umteSoundlandschaften thematisch orientiert am Ausrei??en und dem Freiheitsgef??hlam Meer zu h??ren sind, handelt ?DEAR ____? vom Ende des Vagabund-Lebens. JULES AHOIbesch??ftigt sich mit dem Schaffen eines Zuhauses und setzt sich mit Gef??hlen wieVerst??ndnislosigkeit, Ohnmacht und pers??nlichen Verlusten wie dem seines Vatersauseinander. Mit 30 Jahren fasst er zusammen, was ihn als Mensch und K??nstler bewegt,ersch??ttert, begeistert, best??rzt hat. Eines der 15 Songbeispiele daf??r: Die zweite Single ?Oh,Agnes? ? ein Lied, das von Erziehung und Geschlechterrollen handelt, von Identit??t undderen Entstehungsprozess.?DEAR ____? ist ohne jeden Zweifel eine zutiefst pers??nliche Platte. Weil JULES AHOI jedochuniverselle Themen anspricht und eine ebenso emotionale wie klug durchdachteSoundsprache daf??r gefunden hat, d??rfen sich alle von ihr angesprochen f??hlen, die einMindestma?? an Empathie und ein Herz f??r spannende Kunst haben. Auf den Unterstrich desAlbumtitels kann jeder und jede einen anderen Namen einsetzen. JULES AHOI w??rde ?Papa?dorthin schreiben, vielleicht auch ?Mama? ? oder den Namen seiner Ex-Freundin.Nachdem er mit seiner Band ??ber 200 Konzerte, zwei fast ausverkaufte Tourneen und vierShowcases auf dem Reeperbahnfestival 2019 gespielt hat, gilt diese ganz pers??nlicheEinladung auch allen Musikliebhaber/innen, die ihn live erleben wollen.Pressebild(c) Laura Patricia Most",
            "startDateTime": "10/21/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28089104243&a=774719&m=13738"
        },
        {
            "id": "e155",
            "title": "TurnGala 2020/2021 - Bizzar - Die einzigartige Show in Baden-W??rttemberg und Niedersachsen",
            "description": "Seltsame Gestalten, skurrile Situationen und sonderbare, nie gesehene Bewegungen - das alles pr??sentiert die Bizzar Tour. Sei es wortlose Komik oder das Au??er-Kraft-Setzen physikalischer Gesetze. Wie das Geht? Diese Frage wird sich durch die gesamte Show voller bizarrer K??rperkultur ziehen. Erleben Sie Situationen und Momente, die Sie nicht f??r m??glich gehalten h??tten.",
            "startDateTime": "12/29/21 14:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863801653&a=774719&m=13738"
        },
        {
            "id": "e156",
            "title": "Turbostaat + Support - Rattenlinie Nord",
            "description": "Die neue Platte von Turbostaat erschien Anfang 2020. Es ist das siebte Studioalbum und hei??t Uthlande ; ein alter Begriff f??r die Inseln, Halligen und Marschen vor dem nordfriesischen Festland. Bei diesem Titel und den dazugeh??rigen Liedern kommen  unterschiedliche Gedanken in den Kopf, die aber miteinander zusammenh??ngen: man denkt an John Donne, an etwas, das man zwischenzeitlich aus den Augen verloren hat und an Tobert Knopp, den Bassisten der Band.John Donne er??ffnete im 17. Jahrhundert eines seiner Prosast??cke mit dem Satz ?No Man is an Iland?. Die Doppelbedeutung l??sst sich im modernen Englischen nur noch phonetisch nachvollziehen, denn ?Iland? hei??t sowohl ?Insel? als auch ?Ich-Land?. Im Deutschen klingt Simmels ?Niemand ist eine Insel? nur halb so aufregend. Es sagt aber dasselbe: ich kann mich noch so sehr als Einzelst??ck auff??hren, wenn etwas von dir weg ist, ist auch etwas von mir weg. Und wenn ich weg bin, ist ein Teil vom Ganzen weg. Vielleicht geht der Titel in die Richtung dieses Bildes. Ein Teil der Uthlande ist ja bereits Einzelst??ck f??r Einzelst??ck im Meer versunken. Ein anderer Teil k??mpft dagegen an. Und so sieht es auch ein bisschen mit dem Ich-Land und seiner Umgebung aus, das immer schon der zentrale Bezugspunkt der Turbostaat-Lyrik war. Man erinnere sich kurz an die beiden Vorg??nger-Alben. Das letzte behandelte die Frage des menschenw??rdigen Lebens, verpackt in die Geschichte des Aufbruchs an den nicht existenten Ort Abalonia. Das vorletzte erz??hlte von den Orten, an denen die Angst ?regiert?, was ein ziemlich guter Ausdruck f??r das ist, was die Angst macht.Und nach Utopie und Dystopie r??ckt auf dieser Platte nun eine dritte Variante in den Vordergrund: ??brigbleiben und Beharren im Mosaik der M??glichkeiten. Wo diese M??glichkeiten schon mal nicht liegen, beschreibt etwa ?Brockengeist?, eines der sehr poppigen, flie??enden St??cke der Platte. Mit Blick auf das gegenw??rtige Popkultur-Geschehen hei??t es dort fast lakonisch: ?Wer den Schnee umarmt, wird die K??lteakzeptieren?. Und dann eins mit ihr. In diesem Sinne l??sst sich das am Ende eingestreute Ton Steine Scherben-Zitat wohl auch als alternative Standortbestimmung verstehen.Turbostaat sind ein Role Model f??r eine ganze Generation von deutschsprachigen Post-Punk-Bands. Manche Leute sind mit ihnen ??lter geworden, manche haben sie dabei aus den Augen verloren. Manche sind selbst schon wieder weg. Wer nach 21 Jahren noch da ist, geh??rt zu den ??briggebliebenen und den Beharrlichen. Die ersterelevante Frage ist dabei, wie man das musikalisch meistert. Wer die Entwicklung der Band verfolgt hat, wird sagen, dass sie sich gleich zu Beginn einen sehr soliden eigenen musikalischen Rahmen und Stil aufgebaut hat, der ??ber die einzelnen Platten hinweg immer wieder etwas justiert und gut dosiert weiterentwickelt wurde. Und jetzt?Gibt es noch die Schafe auf dem Deich, den Leuchtturm, den Nebel und immer diesen Wind. Aber man ist auf dem falschen Weg, wenn man in diesen Zutaten blo?? ?den Norden? als Landschaft und Region erkennen will und nicht Bilder f??r die Orte, an denen sich das soziale Wetter zusammenbraut. Es gibt immer noch diese fast privat wirkende Politisierung, deren Botschaft einen nicht gleich anspringt. Aber man muss sich auf dieser Platte schon sehr anstrengen, sie zu ??berh??ren. Wie in dem w??tenden und energischen ?Rattenlinie Nord?, in dem der aktuelle v??lkische Fr??hling von seinem Ende aus gedacht wird. Am Ende der von ihnen angerichteten Verheerungen trifft man die Bande immer auf der Flucht ? vor allem vor der Verantwortung. Und dann, auch das geh??rt zur illusionslosen Wahrheit, geht es wieder von vorne los.",
            "startDateTime": "10/28/21 20:00",
            "venueId": "v30",
            "offerURL": "https://www.awin1.com/pclick.php?p=28139495405&a=774719&m=13738"
        },
        {
            "id": "e157",
            "title": "Malaka Hostel - Global Umpa 2022",
            "description": "Malaka Hostel:Global Umpa Music! Das ist v??llige Eskalation auf der B??hne! Die Kojoten rufen zumTanze!Wenn der Wahnwitz brodelt, f??hlen sich die Weltenbummler zuhause. Und ihr Zuhause,das ist zuallererst die B??hne. Doch was hei??t hier B??hne? Wenn Malaka Hostel auftreten,rei??en sie spielend die unsichtbare Mauer zwischen Band und Publikum nieder.Sie singen spanisch, deutsch, tschechisch oder englisch ? Musik ist ihre ?WorldLanguage?. Folkloristisches, egal ob vom Balkan oder aus den Anden, findet seinen Platz? getragen von Malaka Hostels groovenden Beats, w??hrend die aus Trompeten undMundharmonika bestehende Brass Section lossprudelt. Da finden Ska, Polka, BalkanBeats und Rockriffs genauso gut zusammen wie Gipsy-Swing, Folk oder griechischerRebetiko.Frollein Smilla:Die achtk??pfige Band Frollein Smilla aus Berlin beweist mit ihrem zweiten Studioalbum Freak Cabareterneut, dass sie keinem g??ngigen Genre zugeordnet werden kann. Zu h??ren sind 13 extrem unterschiedliche,tanzballadensouljazzpiratinnenliebesfunkige neue Songs. Dennoch verbindet diese 13 Tracks derbl??serlastige Smilla-Sound und Desna Wackerhagens einpr??gsame Stimme. Ein roter Faden, welcherbereits 2016 auf Golden Future etabliert wurde. Gesungen wird wieder viel mehrstimmig und auf Deutschoder Englisch, diesmal sogar auch einmal auf Spanisch. Que Podemos Cambiar stellt die Frage was wirmachen k??nnen, um unsere Welt zu ver??ndern ? vielleicht sollten eben nicht nur Genre-Grenzen abgeschafftwerden. Die Urbesetzung ? Schlagzeug, Klavier, Akkordeon, Akustikgitarre, Posaune, Trompete und Gesang? wurde durch E-Bass, Kontrabass, E-Gitarre, Klassische Gitarre und Fl??gelhorn erweitert.",
            "startDateTime": "3/11/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867286433&a=774719&m=13738"
        },
        {
            "id": "e158",
            "title": "Wolfgang Haffner & Band - Live 2021",
            "description": "Wolfgang Haffner ist ein exzellenter, ja ein begnadeter Schlagzeuger, das wei?? man l??ngst nicht nur in der Jazzwelt. Zahlreiche prominente Zusammenarbeiten mit unterschiedlichsten K??nstlern und Bands, bei denen der fr??nkische Musiker seine Spuren hinterlassen hat - national wie international - sprechen f??r sich und auch das Troph??enregal mit Auszeichnungen und Preisen f??llt sich zusehends. Er wird gelobt und verehrt f??r seine unglaubliche technische Brillanz und seine geniale Musikalit??t, die besonders bei seinen eigenen Kompositionen und Projekten zur Geltung kommt.Mit seinen Alben unter eigenem Namen geh??rt Haffner heute zu den erfolgreichsten deutschen Jazzmusikern und -bandleadern. Er ist ein ausgesprochener Meister darin, Stimmungen zu erzeugen und weiterzugeben, den H??rer mit auf eine Reise in seine Klangwelten zu nehmen. So darf man es auch bei seinem neuesten Projekt mit demTitel ?Kind Of Tango? (V??: 28.02.2020), dem letzten Teil seiner Trilogie mit akustischer Band erwarten. Deren ersten beiden Teile ?Kind Of Cool? (2015) mit 50s Jazz- und Bop Exkursionen und ?Kind Of Spain? (2017), wo traditionelle spanische Musik mit Jazz zusammen trifft, sind bereits mit gro??em Erfolg auf dem Label ACT erschienen, mit ?Kind Of Spain? tourte er au??erdem mehr als zwei Jahre durch Europa, Asien undAfrika.",
            "startDateTime": "7/26/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28276210533&a=774719&m=13738"
        },
        {
            "id": "e159",
            "title": "Christian Ehring - Antik??rper",
            "description": "Wer h??tte damit gerechnet, dass die Natur so hinterh??ltig zuschl??gt? Ein saudummes und zugleich perfides Virus verhindert von einem Tag auf den anderen, dass man noch unbefangen leben, arbeiten, reisen, feiern, lieben kann. Eine Unversch??mtheit. Eine Zumutung. Ja, eine narzisstische Kr??nkung. Nichts ist mehr wie es war. Ganz normale Menschen sagen pl??tzlich seltsame Dinge wie ?Kontaktnachverfolgung?, ?Polymerase-Kettenreaktion? oder ?Markus S??der k??nnte ich mir als Kanzler vorstellen?.   Obwohl Christian Ehring an diesem Abend ??ber alles andere lieber sprechen w??rde als ??ber SARS-CoV-2, holt ihn das Thema immer wieder ein. Weil die Pandemie nun mal alle Facetten des Politischen und des Privaten ber??hrt - und weil in der Krise nicht nur alte Gewissheiten zerbr??seln, sondern leider auch alte Freundschaften.Ehrings neues B??hnensolo ist ein hintergr??ndiger satirischer Monolog ??ber eine Gesellschaft im Krisenmodus, ??ber Kommunikationsprobleme, Verschw??rungserz??hlungen, Cancel Culture und den Versuch, im Gespr??ch zu bleiben, wo es keine gemeinsame Sprache mehr gibt.Christian Ehring ist Moderator der NDR-Satiresendung ?Extra 3? und Side-Kick von Oliver Welke in der ?ZDF heute Show?. Seine bissigen Analysen der politischen Gro??wetterlage geh??ren f??r viele zum w??chentlichen Pflichtprogramm.",
            "startDateTime": "3/27/22 19:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=28320784909&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/jzwP1xgw.jpeg"
        },
        {
            "id": "e160",
            "title": "Sebastian Pufpaff - Wir nach",
            "description": "Gretel fing an zu weinen und sprach: ?Wie sollen wir nun aus dem Wald kommen?? H??nsel aber tr??stete sie: ?Wart nur ein Weilchen, bis der Mond aufgegangen ist, dann wollen wir den Weg schon finden.?Wissen Sie was, die Welt geht unter und wir fahren mit Vollgas darauf zu, ja, das stimmt. Aber wir sind die Lenker. Sie haben das Steuer in der Hand. Die Richtung ist nicht in Stein gemei??elt, vorgegeben oder gar eine Einbahnstra??e. Die Richtung ist unsere Entscheidung. Also, packen Sie die Sonnencreme ein, nehmen Sie ihre besten Vorurteile mit und lassen Sie uns auf eine Reise gehen. Wohin? In die Mitte des Humors, denn da entspringt der Sinn des Lebens: Lachen! Ich verspreche Ihnen anzukommen, denn daf??r stehe ich mit meinem Namen. Ihr Pufpaff.P.S. Sorry, aber es kann sein, dass Sie auf dem Weg geh??rig was abkriegen, aber das lachen wir weg. Keine Sorge!mehr Infos: http://www.pufpaff.deFoto: Manuel Berninger",
            "startDateTime": "11/13/21 19:30",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=28372651065&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/nTtT6C6C.jpeg"
        },
        {
            "id": "e161",
            "title": "Simon Pearce - PEA(r)CE on Earth",
            "description": "Simon Pearce hat immer noch nicht genug oder besser gesagt, er f??ngt jetzt erst richtig an. Nach dem gro??en Erfolg seines ersten abendf??llenden Solo Programms ?Allein unter Schwarzen? kommt der Prince Charming? (S??ddeutsche Zeitung) der neuen Kabarett & Comedy Szene mit seinem zweiten Streich daher. PEA??CE on Earth! Den Weltfrieden will er nicht auf der B??hne ausrufen, aber sich zumindest auf die Suche machen, wie man seinem inneren Frieden ein bisschen n??her kommen kann. Eigentlich bringt er, als Sohn einer bayerischen Volksschauspielerin und eines Nigerianers, das perfekte R??stzeug f??r den inneren Frieden mit. Ein bisschen Hakuna Matata hier und ein bisschen ?Sei Ruah haben? da. Aber leider st??rt immer irgendetwas diese ?innere Ruhe?. Menschen, die auf der Rolltreppe nebeneinander stehen, Hausmeister mit dem Laubbl??ser um acht Uhr fr??h, Vorurteils??berladene Menschen, oder einfach die unbehagliche Situation in einem Flugzeug zu sitzen. Ja, meistens ist es Angst in ihren verschiedenen Facetten. Mit einer fulminanten Mischung aus lustigen Anekdoten, die einem seine pers??nlichen ??ngste n??herbringen, und gesellschaftskritischen Querverweisen, schafft es der ?Eddy Murphy aus Puchheim? (Freisinger Tageblatt) gleicherma??en zum Lachen, wie auch zum Nachdenken anzuregen und vielleicht eine kleine Anleitung zu geben, wie man ?zur Ruhe? kommt. Simon Pearce tut, was er am liebsten macht. Er nimmt das Leben nicht zu schwer und teilt seine Erfahrungen, lebhaft erz??hlt und pointiert, mit dem Publikum. Er hat einfach Spa??; am Leben und auf der B??hne und daran l??sst er einen gerne Teilhaben. Und wenn er die Menschen damit auch noch zum Nachdenken anregen kann, sind die besten Voraussetzungen f??r sein gro??es Ziel ja schon mal gegeben: Pea(r)ce on Earth!",
            "startDateTime": "11/18/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28380213239&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/Q3fkT0Dl.jpeg"
        },
        {
            "id": "e162",
            "title": "BIYON KATTILATHU - ?.WEIL JEDER TAG BESONDERS IST",
            "startDateTime": "9/18/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=28401436403&a=774719&m=13738"
        },
        {
            "id": "e163",
            "title": "Neujahrskonzert - Streichquintette von Dvor??k und Mendelssohn",
            "description": "Programm:Felix Mendelssohn Bartholdy Streichquintett A-Dur, op. 18Anton??n Dvo???k Streichquintett Es-Dur, op. 97Ebenso wie in der ber??hmten ??Sinfonie aus der Neuen Welt?? verbindet Dvo???k im Streichquintett tschechische Volklore mit Reiseeindr??cken und l??sst daraus seine ??amerikanische?? Klangsprache entstehen: Zugleich kunstvoll und immer spontan wirkend.Nicht minder mitrei??end ist das von jugendlicher Frische spr??hende Streichquintett von Mendelssohn. Und zugleich ein sehr pers??nlicher Moment: Der langsame Satz, quasi ein ??Lied ohne Worte??, geschrieben als musikalischer Nachruf f??r einen Freund, den Geiger Eduard Ritz. Im Scherzo dann wieder der typisch Mendelssohn?sche Sommernachtstraum-Klang.Das Frielinghaus Ensemble vereint befreundete und international ausgezeichnete Kammermusiker, Solisten und Orchestermusiker, die in unterschiedlichen Besetzungen aus Deutschland und dem europ??ischen Ausland zusammen kommen.Fester Bestandteil ist eine j??hrlich stattfindende Norddeutschland-Tour neben weiteren Konzerten in ganz Deutschland und der Schweiz. 2018 gab das Ensemble sein Elbphilharmonie Deb??t und ist seitdem regelm????ig im Konzertsaal an der Elbe zu h??ren. Zudem dokumentieren zahlreiche Aufnahmen das k??nstlerische Schaffen des Ensembles.Frielinghaus EnsembleGustav Frielinghaus, Leonard Fu, ViolineAlejandro Regueira Caumel, S??o Soulez Larivi??re, ViolaJakob Schall, Violoncello??Musik sicher genie??en??Der Saalplan ist der aktuellen Situation angepasst und ber??cksichtigt zwischen allen Doppel- und Einzelpl??tzen den 1,5m Mindestabstand.",
            "startDateTime": "1/7/22 20:00",
            "venueId": "v24",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551885531&a=774719&m=13738"
        },
        {
            "id": "e164",
            "title": "Die Toten ??rzte - Geht nicht, gibt??s nicht!",
            "description": "Wenn preisgekr??nten DIE TOTEN ??RZTE aus ihrer grellbunten Partygruft steigen, erwartet euch ein Powerpaket der Toten Hosen und ??rzte Songs aus nahezu 35 Jahren Rockgeschichte. Das Blitzgewittergemisch aus No 1 Hits des Dauerbrenner- Doppelpacks konnte in den zur??ckliegenden 17 Jahren bei ??ber 800 Konzerten weit mehr als 1 Millionen Zuschauer in Ihre wundervolle Welt der ?DIE TOTEN ??RZTE? entf??hrenDie Presse bezeichnet sie im Sinne des ??rzte Slogans als ?die kurioseste Coverband der Welt? bezeichnet, die Band selbst sieht sich eher als eine Riesent??te Spa??.Am besten: einfach mal selber dabei sein sich ??berzeugen!",
            "startDateTime": "2/4/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867291179&a=774719&m=13738"
        },
        {
            "id": "e165",
            "title": "El Flecha Negra - Live 2021",
            "description": "Im Sommer 2014 starteten El Flecha Negra zu dritt mit Gitarre, Kontrabass, Cajon und dreistimmigem Gesang als Stra??enmusiker und entwickelten sich zu einer gefragten Live-Band, die f??r  ihre energiegeladene B??hnenshow bekannt ist. 2015 erschien El Flecha Negras Deb??talbums ?Schwarzwald?. Sie spielten mehr als 200 Konzerte in Deutschland und dem benachbarten Ausland. 2016 unternahm die Band eine gefeierte Tour in Chile. Mit den Aufnahmen zu ?Tropikal Passport? entwickelte sich der Bandsound weiter. Mit zwei Trompeten, traditionellen Fl??ten und psychedelischer Chicha-Gitarre wuchs El Flecha Negra zu einem Quintett -  Eine charismatische, multikulturelle Band aus vier verschiedenen L??ndern und zwei Kontinenten.In den dreizehn Songs auf Tropikal Passport? erz??hlen die Musiker von El Flecha Negra von ihren W??nschen und Tr??umen wie dem Zusammenwachsen der Kontinente, von Freiheit und Liebe, vom Aufbrechen und Reisen sowie von der Freiheit, bleiben zu d??rfen und zu genie??en - es sind ihre pers??nlichen Geschichten, die sie dorthin gebracht haben, wo sie heute stehen.",
            "startDateTime": "11/26/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28450210357&a=774719&m=13738"
        },
        {
            "id": "e166",
            "title": "Silje Nergaard - Live 2021",
            "description": "Die Phalanx Norwegischer Jazz-S??ngerinnen ? wobei man das Wort Jazzs??ngerinnen bitte nicht auf die Goldwaage legen m??ge ? ist Legende. Ihr Aush??ngeschild seit vielen Jahren hei??t Silje Nergaard.Sie geh??rt zu den erfolgreichsten europ??ischen Jazzs??ngerinnen. Schon als 16-J??hrige trat sie 1982 auf dem ber??hmtesten Festival ihrer Heimat auf ? Molde. Ihre Musiker: die verwaiste Band von Jaco Pastorius. Dann entdeckte Pat Metheny die S??ngerin und verhalf ihr zu ihrem ersten Plattenvertrag. Seit ihrem Deb??talbum ?Tell Me Where You?re Going?, mit dem sie 1990 Platz 7 der norwegischen Pop-Charts erklomm, ist sie aus der genre??bergreifenden skandinavischen Musikszene nicht mehr wegzudenken. Sie z??hlt zu den ganz wenigen Protagonisten des Jazz, die sich auch in der Popwelt gro??er Beliebtheit erfreuen, denn jede Art von Scheuklappen sind ihr fremd.Die Norwegerin mit der sanften Stimme ist f??r ihren gef??hlvollen Perfektionismus bekannt und daf??r, dass sie sich in ihren Liedern auch ernsthafte Gedanken zum Leben in unserer Welt macht. F??r ihr neuestes Werk und ihre Tournee hat sie unter dem Titel ?For You A Thousand Times? Lieder geschrieben, die in mitrei??enden Melodien von vergangenen Begegnungen und der Kraft der Erinnerung inspiriert wurden.",
            "startDateTime": "10/31/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28456693463&a=774719&m=13738"
        },
        {
            "id": "e167",
            "title": "The HAMBURG BLUES BAND feat. Chris Farlowe & Krissy Matthews - Friends for a LIVEtime Vol. II-Tour",
            "description": "39 Jahre St. Pauli Blues! Seit fast 4 Jahrzehnten touren f??nf Typen durch ??berf??llte Clubs, die mit zum Besten geh??ren, was die europ??ische Bluesszene zu bieten hat. Die Hamburg Blues Band steht f??r intensiven, clever arrangierten und live umwerfenden Roots Blues, der regelm????ig Puristen ins mentale Wanken bringt. Denn die die Truppe um den oft mit Joe Cocker verglichenen S??nger Gert Lange, vermengt brettharten Gitarren-Bluesrock so spielfreudig wie traditionsbewusst mit Soul, Psychedelic, Rhythm & Blues, Boogie & sogar Ausfl??ge in Jazz Gefilde.",
            "startDateTime": "1/5/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28479604129&a=774719&m=13738"
        },
        {
            "id": "e168",
            "title": "Guided City Walk Freiburg - Open Tour Freiburg",
            "description": "What will I see on a Freiburg Germany open tour?After welcoming you to Freiburg your guide will introduce the modern Freiburg to you with Key numbers about the city and its people. From there you will go to Gerichtslaube, which is the oldest administrative building in Freiburg. On the way to Freiburg Cathedral you stop at the Walfischhaus, home of Erasmus of Rotterdam during the days of the reformation. The highlight of the Freiburg Germany tour is the cathedral, officially called the Freiburger M??nster. After admiring the historic merchant hall and passing through the Konviktstrasse you will finally reach the Schwabentor, one of the two remaining city gates of Freiburg.",
            "startDateTime": "6/19/21 12:30",
            "venueId": "v14",
            "offerURL": "https://www.awin1.com/pclick.php?p=28485609155&a=774719&m=13738"
        },
        {
            "id": "e169",
            "title": "Viktoria Tolstoy - Stations Tour 2021",
            "description": "Kristallklar, dynamisch, wild und vibrierend, trotzdem gleichzeitig prosaisch und erdverbunden ? eine der brillantesten Stimmen Skandinaviens: Wenn Viktoria Tolstoy einen Song vortr??gt, interpretiert sie ihn nicht einfach, sie formt und pr??gt ihn auf einzigartige Weise. 2020 kehrt sie nach Deutschland zur??ck, um ihr neues Album ?Stations? (V??: 31.01.20/ACT Music) vorzustellen. ?Es geht ums Reisen,? erkl??rt Tolstoy, ?von Station zu Station, wie in meinem Leben als Musikerin. Aber nicht nur um das Unterwegssein des K??rpers, sondern auch des Geistes. Im Raum wie in der Zeit. Mit alten und neuen Songs, auch Originals, die eigenes f??r dieses Album und sein Thema entstanden sind. Es liegt ganz im Auge des Betrachters, wie er diese musikalischen Reisen interpretiert. ? Eine k??nstlerische Ader hat Tradition in der Familie der schwedischen S??ngerin. Ihr Ururgro??vater war der legend??re russische Nationaldichter Leo Tolstoi. Schon die sehr junge Viktoria machte ihren Weg durch die Stockholmer Jazzclubs und spielte mit f??hrenden schwedischen Jazzern wie Svante Thuresson. 1994, mit 20, nahm sie ihr erstes Album auf. Zwei Jahre sp??ter, mit dem Album ?F??r ??lskad? wurde sie in ihrer Heimat ??ber Nacht zum Popstar. Was den Boden bereitete f??r die Zusammenarbeit mit Esbj??rn Svensson und e.s.t.: Er produzierte und schrieb die Songs f??r ?White Russian?, die erste skandinavische Platte, die beim legend??ren Blue Note Label erschien. Auch Nils ?Mr. Red Horn? Landgren produzierte und spielte mit ihr. Seither hat sich Tolstoy als eine der f??hrenden Stimmen des Gegenwartsjazz etabliert.",
            "startDateTime": "10/24/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28485609207&a=774719&m=13738"
        },
        {
            "id": "e170",
            "title": "Triosence - Tour 2022",
            "description": "Ob hierzulande oder irgendwo sonst auf der Welt ? ??berall, wo die drei Musiker von triosence auftreten faszinieren und begeistern sie ihr Publikum. ?Der neue Meilenstein in Sachen Jazztrio?, ?Ein unter die Haut gehendes Highlight!? und ?Exempel f??r musikalische Dreieinigkeit? sind nur einige der Pressestimmen, die das Trio auf internationaler Ebene feiern ? und seit ihrem Gr??ndungsjahr 1999 d??rfen triosence stolz auf eine beeindruckende Troph??ensammlung sein ? vom 1. Preis bei Jugend jazzt, ??ber diverse Kultur- und Kompositionspreise bis hin zum besten Neueinstieg in die internationalen Jazzcharts in Deutschland reicht ihr Portfolio.Dabei sind die drei Musiker von Anbeginn sowohl musikalisch, als auch im Hinblick auf ihre Karriere ihren ureigenen Weg gegangen - haben sich von ihrer Intuition leiten lassen und sind ihren Idealen stets treu geblieben.Unverwechselbar der Stil, den die Band entwickelt hat und den sie selber als ?songjazz? bezeichnen. Denn was die Musik des Trios neben der Gleichberechtigung der Instrumente vor allem auszeichnet sind die St??rke und Klarheit ihrer Melodien. Eine Einfachheit und Klarheit, die niemals banal oder gar einf??ltig daherkommt, sondern durch diese beeindruckend reduzierte Struktur in die Sch??nheit und Tiefe der Musik abtauchen l??sst. Und dem H??rer damit ganz viel Raum f??r Emotionen, Gedanken, gar Tr??ume schenkt. Zu einem hohen Grad lyrisch und poetisch bilden die Melodien den Kern aller Kompositionen. In Kombination mit der stilistischen Bandbreite aus Jazz, Fusion, Folk, Pop und Worldmusic ??berzeugt dies nicht nur eingefleischte Jazzkenner, sondern auch jene, die mit Jazz bislang eher wenig anzufangen wussten.Zum 20-j??hrigen Band-Jubil??um pr??sentieren triosence nun ihr brandneues Album Scorpio Rising ? und beweisen damit einmal mehr, welch intuitive Kraft, wie viel alles miteinander verbindende Vielfalt der Musik innewohnen kann. Einem nahezu philosophischen Ansatz folgend, setzt Bernhard Sch??ler sich hier in seinen Kompositionen mit der universellen Verbundenheit allen Seins auseinander. Der Mensch als Teil eines sich zu allen Zeiten wechselseitig beeinflussenden kosmischen Geschehens ? wie es seit tausenden von Jahren von der Astrologie beschrieben wird. Dabei lassen triosence jede theoretische Schwere dieser gro??en Thematik musikalisch weit hinter sich. So poetisch beschwingt wie kraftvoll energiegeladen verbinden sie sich in ihren Klangwelten ? wohl wissend, das der Zuh??rer stets unverzichtbarer Teil ihres musikalischen Kosmos ist...!",
            "startDateTime": "2/13/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28517999511&a=774719&m=13738"
        },
        {
            "id": "e171",
            "title": "Beatrice Egli & BAND LIVE 2020",
            "description": "?Deutschland sucht den Superstar?, ?Echo? und ?Liebling des Jahres?-Award Gewinnerin Beatrice Egli kommt 2020 nach Ludwigsburg. Mit Hits, wie ?Mein Herz?, ?Irgendwann? und ?Herz an? feiert die Schlagers??ngerin in Deutschland, ??sterreich und der Schweiz Chart??erfolge und begeistert ihre Fans. Nach einer kleinen Auszeit meldet sich die fr??hliche Schweizerin 2019 mit positiven Erfahrungen und dem neuen Album ?Nat??rlich!? zur??ck.",
            "startDateTime": "12/7/21 19:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=28539652171&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/ApdVwZOg.jpeg"
        },
        {
            "id": "e172",
            "title": "Eva Klesse Quartett - creatures & states Tour 2020",
            "description": "Der Zweijahresrhythmus bleibt gewahrt, auch beim vierten Album des Eva Klesse Quartetts. Ende Oktober 2018 erschien Miniatures - Ten Songs For Chamber Jazz Quartet, begleitet von begeisterten Medienreaktionen. Viele lobten besonders die traumwandlerisch sicheren Interaktionen der Band und ihre charakteristische, variable Klangsprache. ?In den St??cken dieses Albums ist kaum ein Takt so, wie man ihn erwarten w??rde. Kein Klischee. Kein Abfeiern von Effekten. Sondern die Lust am instrumentalen Gespr??ch,? konstatierte BR-Klassik und Matthias Wegner attestierte im Deutschlandfunk Kultur: ?...ein wunderbarer Gesamtsound: unaufgeregt, aber dennoch voller Tiefe.? Ulrich Steinmetzger notierte in der Leipziger Volkszeitung: ?Die kontinuierliche Weiterentwicklung der Band, die auf feine Details und milde Stimmungen setzt und nicht auf vordergr??ndige ??berrumpelung, ist h??chst faszinierend.?Nun also das n??chste Kapitel dieser k??nstlerischen Erfolgsgeschichte: creatures & states. Erneut machtdie reflektierte, 2015 mit einem Jazz-Echo ausgezeichnete Band ihren Fokus klar: das musikalischeErz??hlen imagin??rer Geschichten, die eigene Erlebnisse abstrahieren und sich aus Emotionen speisen.Strategische ??berlegungen spielen dabei entschieden keine Rolle. Zentral ist hingegen der gemeinsamweiterentwickelte Sound, der sich bewusst von kurzlebigen Trends fernh??lt. Weil das, was heute hip ist,morgen schon von der n??chsten Mode ??berholt sein kann.",
            "startDateTime": "1/16/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27216597173&a=774719&m=13738"
        },
        {
            "id": "e173",
            "title": "Matou Noir - Kinderkonzert",
            "description": "Endlich darf der schwarze Kater wieder nach drau??en! Am 9. Oktober 2021 kannst du ihn gleich zwei Mal beobachten: Um 15 Uhr streunt er mit seinen kleinen und gro??en Freunden um die B??hne und hat viele verr??ckte Instrumente mitgebracht. Wie klingt ein Kazoo? Was kommt aus der Shruti Box? Wer oder was ist denn die Bombo? Lasst uns gemeinsam zu den Kl??ngen der Welt tanzen und singen!Um 20 Uhr schmei??t sich unser Kater dann in Schale und spielt auf, was er bei seinen Streifz??gen auf der Stra??e gefunden hat: Ein bisschen Balkan, ein wenig Klezmer, einige Tango-Reste, und immer ein Tanzbein in der Luft!Christian Armin (Kontrabass), Christian Buchholz (Cello, Akkordeon), Camilla Chimiak (Gesang, Kazoo), Ladislav Douda (Akkordeon), Johannes Kettel (Gitarre), Philipp Kurzke (Caj??n, Percussions) und Philipp Tepper (Geige) laden in den Tanzkeller zur Musikjonglage.",
            "startDateTime": "11/5/22 15:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28539653917&a=774719&m=13738"
        },
        {
            "id": "e174",
            "title": "Matou Noir - Abendkonzert",
            "description": "Endlich darf der schwarze Kater wieder nach drau??en! Am 9. Oktober 2021 kannst du ihn gleich zwei Mal beobachten: Um 15 Uhr streunt er mit seinen kleinen und gro??en Freunden um die B??hne und hat viele verr??ckte Instrumente mitgebracht. Wie klingt ein Kazoo? Was kommt aus der Shruti Box? Wer oder was ist denn die Bombo? Lasst uns gemeinsam zu den Kl??ngen der Welt tanzen und singen!Um 20 Uhr schmei??t sich unser Kater dann in Schale und spielt auf, was er bei seinen Streifz??gen auf der Stra??e gefunden hat: Ein bisschen Balkan, ein wenig Klezmer, einige Tango-Reste, und immer ein Tanzbein in der Luft!Christian Armin (Kontrabass), Christian Buchholz (Cello, Akkordeon), Camilla Chimiak (Gesang, Kazoo), Ladislav Douda (Akkordeon), Johannes Kettel (Gitarre), Philipp Kurzke (Caj??n, Percussions) und Philipp Tepper (Geige) laden in den Tanzkeller zur Musikjonglage.",
            "startDateTime": "11/5/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28539653919&a=774719&m=13738"
        },
        {
            "id": "e175",
            "title": "Emil Brandqvist Trio - Tour 2021",
            "description": "Das Geheimnis dieses Trios liegt dabei in der raren Gabe, einen ganz eigenen Sound entwickelt zu haben, der gepr??gt wird durch die filigranen Klangmalereien von Namensgeber Emil Brandqvist am Schlagzeug und den mal sensibel dahingetupften, mal rasant rollenden Neo-Klassizismen des finnischen Pianisten Tuomas A. Turunen. Die stoisch treibende Kraft im Kontrabass-Spiel von Max Thornberg verleiht dem Trio dabei einen unverwechselbaren K??rper. Wie gewohnt zeichnet sich f??r die meisten Kompositionen Emil Brandqvist verantwortlich, aber es ist schon gute Tradition, dass der in S??dfrankreich lebende Tuomas A. Turunen auch kompositorisch mitwirkt.",
            "startDateTime": "10/19/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28555131415&a=774719&m=13738"
        },
        {
            "id": "e176",
            "title": "Tingvall Trio - Tour 2022",
            "description": "Piano Trios gibt es weltweit viele, die klassische Basisformation des Jazz hat in den letzten Jahres ein fulminantes Revival erlebt. Doch wenn man nach der Essenz aller derzeit tourenden Trios dieser Bewegung sucht, sticht, wenn es um die Akzeptanz beim Publikum und den unverwechselbaren, eigenst??ndigen Sound geht, aus internationaler Perspektive das Tingvall Trio aus Hamburg hervor.Wie nur wenige vor Ihnen haben sie einen ganz eigenen, wiedererkennbaren Sound entwickelt, der auf griffigen, bildhaften Melodien und der  unverwechselbaren Dynamik zwischen poetischen Balladen und energetischen Rhythmen basiert, die auch mit Elementen aus Rock und Pop lieb??ugeln. Nachdem Ihr letztes Album No.1 der Jazzcharts war und sogar die Popcharts erreichte, wenden sie sich mit dem brandneuen Programm auch verst??rkt weltmusikalischen Welten zu, die zwischen arabischen Sounds und lateinamerikanischer Fr??hlichkeit pendeln: DANCE",
            "startDateTime": "5/8/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28555131419&a=774719&m=13738"
        },
        {
            "id": "e177",
            "title": "Ren?? Sydow - Heimsuchung",
            "description": "Ren?? Sydow sucht wieder die Kabarettb??hnen heim. Sein viertes Programm sollte gleichzeitig sein heiterstes werden. Ein fr??hliches Feuerwerk der Boshaftigkeit gegen Politiker, Prominenz und Political Correctness. Doch leider steht auch noch die ?Heim- Suchung? f??r den eigenen Opa an und angesichts des aktuellen Pflegenotstands gibt es zumindest aus privater Sicht keinen Anlasszur Heiterkeit.Wie k??nnen wir in W??rde altern? Was ist ein Menschenleben ??berhaupt wert? Und sind das nur private Fragen oder ist das Private doch politisch? Ist das noch Kabarett oder geht es schon um Leben und Tod? Und warum ist dieser Abend trotzdem so erschreckend lustig geworden??Solche M??nner braucht das Land. Zornige Intellektuelle, die das Volk aus seiner Lethargie peitschen. Die moralisch sind, ohne zu moralisieren. Unerbittlich in ihrer Analyse, aber immer menschenfreundlichund optimistisch. Ren?? Sydow ist all das.? Bergstr????er Anzeiger?Dieter Hildebrandt h??tte gejubelt.? Die GlockeSydow hat zahlreiche Preise erhalten, u.a. den Klagenfurter Herkules2018, Jury- und Publikumspreis, Tegtmeiers Erben 2017,Publikumspreis, den Schw??bischen Kabarettpreis 2017 sowieden Deutschen Kabarett-Preis 2016, F??rderpreis.2018, Jury- und Publikumspreis, Tegtmeiers Erben 2017,Publikumspreis, den Schw??bischern Kabarettpreis 2017 sowieden Deutschen Kabarett-Preis 2016, F??rderpreis.Foto:Steffen Suuck",
            "startDateTime": "9/12/21 19:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585169351&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/hHP7arVU.jpeg"
        },
        {
            "id": "e178",
            "title": "Andy Strau?? - Life of Andy",
            "description": "?Life of Andy? ist das neue B??hnenprogramm von Andy Strau??. Ende 2019 bekam er w??hrend der U20-Meisterschaften im Poetry Slam einen Preis f??r sein Lebenswerk und das Brechen s??mtlicher B??hnenpoesie-Regularien ??berreicht. Jetzt ist der Poetry Slammer, Techno-DJ und Stand-Up-Chaot in der Midlife-Crisis angekommen und macht das beste draus, n??mlich: Sich dr??ber lustig.Ein Abend so unvorhersehbar wie das Leben selbst. Ob Life-H??rspiel, Erz??hlungen oder bisher noch nicht dagewesene B??hnenkunst-Form: in allem macht der Vogel eine so gute Figur, wie sie viele Menschen nach sieben Jahren Yoga nicht beherrschen. Und das, obwohl er selbst gar kein Yoga macht. Oder doch?Wenn sie nicht vorbei kommen, werden sie es nicht herausfinden.Mehr Infos: http://establishmensch.deFoto: Matthias Stehr",
            "startDateTime": "9/10/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170045&a=774719&m=13738"
        },
        {
            "id": "e179",
            "title": "Mathias Tretter - Sittenstrolch",
            "description": "?Ich war immer neidisch auf Komiker in Diktaturen ? wenn jeder Witz Dein letzter sein kann, f??hlst Du Dich gebraucht.? Soweit ist es gl??cklicherweise noch nicht, aber die schiere Anzahl ehrenamtlicher Bedenkentr??ger zeigt ihm doch: Selten war ein Strolch so n??tig wie heute! Tweets werden aus sittlicher ??berlegenheit getippt und kommen mit der Moralkeule. ?Mein siebtes Solo. Das erste mit Humor?, verspricht Tretter, ??ber den die Presse schreibt: ?Wer es nicht schafft, sich von der Couch aufzuraffen, wird auch nie erleben, wie unterhaltsam, erhellend und herrlich komisch so ein Kleinkunstabend mit politischem Kabarett sein kann. Tretter schafft es bei gleichbleibend hohem intellektuellem Anspruch in einem derart unversch??mt locker-nonchalanten Duktus zu reden und zu spielen, dass man in Gedanken noch kein halbes Mal abschweift.?",
            "startDateTime": "9/18/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170071&a=774719&m=13738"
        },
        {
            "id": "e180",
            "title": "Carmela de Feo - Allein unter Geiern",
            "description": "Seit Jahren ist La Signora in Sachen Unterhaltung auf den morschen Brettern, die die Welt bedeuten, unterwegs. Ob auf einem toten Esel zum Erfolg oder mit einem lahmen Gaul durchs Leben, La Signora ist f??r jede Situation mit ihrem Friedhofsmodenchic perfekt gekleidet.Klein, Hummeltaile und Haarnetz! T??dlicher Gags pflastern ihren Weg, die Leute geiern sich einen ab, aber nach der Show kr??ht kein Aas mehr nach ihr. Wie allein kann man sein, wenn selbst die Geier nicht mehr ??ber einen kreisen?Die Rabattmarke des deutschen Kabarett zeigt in ihrem neuen Programm, dass Schicksal durchaus Spa?? machen kann. Wenn das Leben in ruhigen Bahnen verl??uft, ist La Signora zur Stelle und stellt die Weichen auf Chaos. Atheisten werden gl??ubig und Heilige fallen der Wollust anheim. La Signora ist eine anbetungsw??rdige Verf??hrerin, aber auch eine verf??hrte Angeberin. Da wo andere sich bem??hen abzunehmen, legt La Signora noch einen drauf. Justitia ist blind, aber die Schicksalsg??ttin mit ihren neapolitanischen H??hneraugen hat den Durchblick.Doch allen Geiern sollte klar sein: Um sich auf eine Henkersmahlzeit zu freuen, braucht man schon eine gute Portion Galgenhumor! Au??erdem, wahre Sch??nheit von innen! Und wenn nicht, dann setzt man sich eben allein unter Geiern ein Haarnetz auf!La Signora - Nie eingeladen, aber ??berall dabei.Mehr Infos: http://carmeladefeo.deFoto: Harald Hoffmann",
            "startDateTime": "9/11/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170073&a=774719&m=13738"
        },
        {
            "id": "e181",
            "title": "Tino Bomelino - Mann muss die Dinge nur zu Ende",
            "description": "Hi! Ich bin der Tino.So ein Ank??ndigungstext soll ja vor allem neugierig machen und ich hoffe da jetzt ein bisschen auf deine Mitarbeit.Stell dir vor du sitzt in deiner K??che mit deiner Lieblingsperson. Sie lobt deine neue Hose und erz??hlt dir fast beil??ufig, dass sie gestern beim Soloprogramm von tino bomelino war.?Es war sehr lustig! Glaub mir!? sagt sie.Du glaubst ihr.?Der hat eine Powerpoint-Pr??sentation gehalten mit Verbesserungsvorschl??gen f??r Tiere!? sagt sie und grunzt ein bisschen beim Kichern ? typisch Lieblingsperson!Sie hat erfahrungsgem???? einen guten Geschmack bei sowas.Du vertraust ihr.?Das klingt ja genial!? sagst du. (Deine Worte, nicht meine!)Was sie leider vergessen hat, zu erw??hnen: Ich mache auch Stand-up und Musik mit Gitarre und Loopstation ? aber das nehm? ich ihr nicht ??bel. Bei all dem geht es unter anderem um die beiden gro??en Themen: die Liebe und wie man jemanden umarmt, der einen Rucksack aufhat. Dr??ckt man da den Rucksack mit oder versucht man mit dem Arm in die Ritze zwischen R??cken und Rucksack zu kommen???brigens echt sch??ne Hose!Eine letzte Sache noch:Mit Penetranz und Durchhalteverm??gen kann man alles schaffen. Man muss die Dinge nur zu EndeMehr Infos: http://bomelino.de",
            "startDateTime": "9/16/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170633&a=774719&m=13738"
        },
        {
            "id": "e182",
            "title": "Sia Korthaus - Im Kreise der Bekloppten",
            "description": "Wat?? Schon 25 Jahre Solokabarett? Da kommt einiges an Bl??dsinn zusammen!Alles begann auf einer kleinen Insel im Atlantik. Dort pferchte Sia deutsche Urlauber in einen Raum, nicht gr????er als eine Abstellkammer, um an ihnen ihr erstes Soloprogramm zu testen. Mit Erfolg! Denn von einer Insel kommt man nicht so schnell weg.Mittlerweile geht Sia nach drei Duos und acht Soloprogrammen in Deutschland in die neunte Runde. Gott sei Dank spielt sie mittlerweile in gr????eren R??umen, so dass nicht nur das Publikum mehr Platz hat, sondern auch Sia ihr komplettes Spektrum der Darstellungskunst zeigenkann: Schauspiel, Gesang und Tanz im fliegenden Wechsel, und sie ist dabei irre komisch.Viele liebgewonnene Figuren tauchen wieder auf, u.a. Biggi, die mit schlichten Worten die Welt erkl??rt, Werner, auch nicht gerade ein Hirnchirurg und die tabulose Oma Emmi, die der Jugend so manche Schamesr??te ins Gesicht treibt.Mit all diesen Alter Egos und den aktuellen Komikern, die momentan unsere Welt regieren, ist Sia Korthaus mitten im Kreise der Bekloppten.Mehr Infos: https://www.siakorthaus.deFoto: Tanya Davidow",
            "startDateTime": "9/17/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170635&a=774719&m=13738"
        },
        {
            "id": "e183",
            "title": "Peter Spielbauer - Pfitsch G??ng",
            "description": "Das neue plastisch-elastische Solo-Theater-St??ck des Philosokomikers Peter Spielbauer behandelt prim??r den Umstand, dass wir auf einer Kugel sitzen und durchs Weltall fliegen. Eine abstruse Situation?! Wie gehen wir damit um??Spielbauer verdichtet L??sungsvorschl??ge in ??PFITSCH G??NG??. Eine don-quichotische ??bung mittels pers??nlicher Eckdaten zu kosmischen Koordinaten. Inklusive der k??rzesten Geschichte der Menschheit ever; eventuell sogar mit Love-Story. H??rt sich gro?? an, passt aber in einen Sack. Ein weiterer poetischer Welterkl??rungsversuch von Peter Spielbauer.Sonne Sonne scheine, lass uns nicht alleine?!Sonne Sonne move, give me my daily groove?!",
            "startDateTime": "9/23/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170637&a=774719&m=13738"
        },
        {
            "id": "e184",
            "title": "marotte Figurentheater - Pettersson zeltet!",
            "description": "F??r Kinder ab 5 JahrenDer alte Pettersson will mit seinem Kater Findus angeln gehen. Auf seinem Dachboden hat Pettersson eine Flitzebogenwurfangel erfunden und will sie nun mit Findus am See ausprobieren.Das Zelt nehmen sie auch gleich mit, um einen Ausflug in die Berge zu machen.Aber aus der Zeltidylle wird nichts! Und das nur wegen der bl??den H??hner, die partout auch ausprobieren wollen, wie das ist, in einem Zelt zu schlafen. Spiel: Thomas H??nselRegie: J??rg BrettschneiderMehr Infos: http://marotte-figurentheater.de",
            "startDateTime": "9/19/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170639&a=774719&m=13738"
        },
        {
            "id": "e185",
            "title": "Physical Graffiti - The Very Best Of Led Zeppelin - European Tour 2022",
            "description": "PHYSICAL GRAFFITI - Schon zahlreiche Bands haben versucht die Songs von Led Zeppelin so originalgetreu wie m??glich wiederzugeben und zu interpretieren, doch nur wenige waren wirklich erfolgreich.Im Jahre 1997 ??nderte sich dies allerdings. Die Band Red Stuff, die haupts??chlichSongs aus den siebziger Jahren spielte, wurde von ihren Fans aufgefordert ihr Led Zeppelin Repertoire auszuweiten, was zur Gr??ndung einer der wahrscheinlich besten Tribute-Bands - namens Physical Graffiti- f??hrte.Der Name Physical Graffiti ist gleichzeitig Titel des 1975 erschienenen Albums von LedZeppelin, wodurch ein direkter Bezug zur Originalband hergestellt wird, denn wenn dieses Stichwort f??llt, wei?? jeder Rockfan, was und vor allem wer gemeint ist. Letztere sind in gewisser Weise Vergangenheit, doch ihr musikalisches Erbe wird mit gro??em Stolz und Leidenschaft von Physical Graffiti am Leben erhalten.Jedes Bandmitglied wei??t einen enormen musikalischen Background auf. Der englische und in Holland lebende S??nger Andrew Elt beispielsweise spielte bereits in Bands wie Gin On The Rocks, Sleeze Beez und tourt mit dem Gitarrenvirtuosen Walter Trout. Dort fungierte er zun??chst als Tour-Manager, sp??ter stand er gemeinsam mit der Band auf der B??hne und gab sowohl seingesangliches als auch instrumentales K??nnen zum Besten. Generell ist Andrew Elt als einsehr gefragter S??nger f??r Rocksessions, denn mit seiner Stimme vermager die origin??ren Tonlagen von Bands wie Led Zeppelin, Deep Purple, Guns N? Roses,AC/DC, Van Halen usw. verbl??ffend gut nachempfinden.Der irische Bassist Dave Harrold brachte sich das Gitarre spielen selbst bei, widmete sich jedoch relativ schnell dem Bass und stellte mit diesem sein K??nnen in den holl??ndischen Bands Re-Experience, Clemens V.D. Ven Band und Boerenleenband unter Beweis.Schlie??lich hat er noch die Mandoline in sein Repertoire aufgenommen, womit er seineKollegen von Physical Graffiti bei einigen wundervollen Led Zeppelin Akustik-Nummern in typischer John Paul Jones-Manier begleitet.Der Gitarrist Daniel Verberk begann mit 11 Jahren mit diesem Instrument, arbeitetesp??ter als Backline-Techniker f??r Vengeance, war daraufhin Gitarrist in den Bands Heavy70?s und The Moon und tourte seit 2006 als Stagemanager und Backline-Techniker f??r diverse internationale Acts. Jan Gabriel ist der Schlagzeuger von Physical Graffiti. Seit langer Zeit tourt er mitseiner Big Band durch die USA und Europa. Zudem unterst??tzt er u.a. Bands wie dieGuano Apes auf der B??hne. Ferner ist er in unterschiedlichen klassischen Orchestern aktiv und als Lehrer betreut er das Projekt Band Apart, in dem Quentin Tarantino??s Filmmusik gespielt wird.Physical Graffiti zeigen auf der B??hne ihr gro??es k??nstlerisches Talent, indem sie gekonnt die Songs von Led Zeppelin interpretieren. Physical Graffiti rocken !",
            "startDateTime": "3/10/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170643&a=774719&m=13738"
        },
        {
            "id": "e186",
            "title": "Die Traumausstatter ? Das Tak und die fliegende Trommel",
            "description": "Das Tak und die fliegende Trommel - f??r Kinder ab 3 JahrenDas Tak geht mit seiner fliegenden Trommel auf Reisen ? Dabei besucht es Orte, die es noch nie gesehen hat. Ganz egal, wo es hinkommt, ob bei den Wichteln im Wald oder in der Gem??sek??che: ??berall wird Musik gemacht! Und das Allerbeste ist: Auch wenn man gerade gar kein Instrument hat, kann man ganz leicht den eigenen K??rper und die eigene Stimme zum Klingen bringen! Wie das geht, zeigen uns Die Traumausstatter. W??hrenddessen muss das Publikum aber nicht still sitzen, sondern darf selber kr??ftig klatschen, klopfen und trommeln und sich ??berhaupt auf viele verschiedene Arten am gemeinsamen Musizieren beteiligen. Die Welt ist voller Rhythmen und Musik. Dabei kann es manchmal auch ganz sch??n laut und wild zugehen!Reinsetzen, anschnallen und Propeller an!Mehr Infos: http://www.dietraumausstatter.de/Foto: Ellen Schmauss",
            "startDateTime": "9/26/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28596161447&a=774719&m=13738"
        },
        {
            "id": "e187",
            "title": "FREIBURGerLEBEN: Probiertour ??ber den Freiburger Bauernmarkt rund ums M??nster",
            "description": "Schlendern Sie mit uns ??ber den M??nstermarkt. Neben zahlreichen Geschichten und Geschichtchen kommt nat??rlich auch die Gaumenfreunde nicht zu kurz. Schmecken Sie kleine K??stlichkeiten, die je nach Saison varieren. Ein Gl??schen Gutedel oder die ?Freiburger Rote? d??rfen dabei nicht fehlen. Plaudern Sie mit den Marktbeschickern. Bei dieser Tour erschmecken Sie Freiburg nicht nur, sondern erleben sie von ihrer authentischten Seite. Und zum Abschluss darf nat??rlich etwas S????es nicht fehlen! Vom Fr??hjahr bis in den Herbst freuen wir uns, Sie ??ber den Bauernmarkt zu f??hren!Durchf??hrung der Tour bei mindestens 6 Personen. Sollten es weniger Teilnehmer sein behalten wir uns vor bis 2 Tage vor Beginn der F??hrung die Tour zu stornieren.",
            "startDateTime": "6/19/21 11:00",
            "venueId": "v15",
            "offerURL": "https://www.awin1.com/pclick.php?p=28607886961&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/OvnQESPA.jpeg"
        },
        {
            "id": "e188",
            "title": "FREIBURGerLEBEN: Die Freiburger Genuss Tour",
            "description": "Die Freiburger Stadtherren kamen und gingen, zum Gl??ck aber blieben ihre K??stlichkeiten wie Schwarzw??lder Schinken, Gugelhupf oder der Markgr??fler. Bei dieser originellen Tour werden nicht nur Augen und Ohren angesprochen, von der einen oder anderen Spezialit??t darf auch gekostet werden. Wir ??berraschen Ihre Sinne. Inkl. Caf??/Tee und K??stlichkeiten.Durchf??hrung der Tour bei mindestens 6 Personen. Sollten es weniger Teilnehmer sein behalten wir uns vor bis 2 Tage vor Beginn der F??hrung die Tour zu stornieren.",
            "startDateTime": "6/26/21 16:00",
            "venueId": "v15",
            "offerURL": "https://www.awin1.com/pclick.php?p=28607888257&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/wK20pXJj.jpeg"
        },
        {
            "id": "e189",
            "title": "FREIBURGerLEBEN: Weinf??hrung",
            "description": "Eine abwechslungsreiche Weinf??hrung: ?Schl??rfen musst Du, nicht saufen!?hei??t ein alter alemannischer Weinspruch. Wussten Sie, dass es bereits Ende des 15. Jahrhunderts ein Reinheitsgebot f??r die Weinherstellung gab, das in Freiburg seinen Ursprung hat? Der Pfarrer von St. Martin die erste badische Winzergenossenschaft gegr??ndet hat? Freiburg, die gr????te Weinbaustadt Deutschland ist? Unser Rundgang zu Bilderbuchfassaden und historischen Weinkellern ??ffnet tiefe Blicke in Stadt- und Weingeschichte(n). Trocken wird es dabei nicht zugehen. Kleine Weinproben runden den Spaziergang ab. Durchf??hrung der Tour bei mindestens 6 Personen. Sollten es weniger Teilnehmer sein behalten wir uns vor bis 2 Tage vor Beginn der F??hrung die Tour zu stornieren.",
            "startDateTime": "7/10/21 16:30",
            "venueId": "v15",
            "offerURL": "https://www.awin1.com/pclick.php?p=28607888305&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/F9z6WqyA.jpeg"
        },
        {
            "id": "e190",
            "title": "FREIBURGerLEBEN: H??hepunkte der Altstadt",
            "description": "Entdecken Sie mit uns den ?betenden Teufel?, den echten ?Bobbele? und die ?knackige Rote?. Auf unserem unterhaltsamen Rundgang durch die historische Innenstadt erleben Sie die bedeutendsten Sehensw??rdigkeiten. Begleiten Sie uns ??ber B??chle und G??ssle zu stattlichen B??rgerh??usern, machen Sie mit uns die Reise von der mittelalterlichen Kleinstadt zur ??kohauptstadt Deutschlands. Authentisch zeigt sich der Bauernmarkt, einmalig Freiburgs Wahrzeichen, das M??nster mit seiner mittelalterlichen Bilderwelt.Freiburg kennt viele Seiten, wir haben f??r Sie die spannendsten herausgesucht.Wir achten auf Ihre und unsere Gesundheit.Innenbesichtigungen sind nach wie vor nicht m??glich. Das M??nster werden wir von au??en besichtigen und Ihnen dabei Informationen zum Innenraum geben. Als Gruppe d??rfen wir nicht hineingehen.Wir wissen, dies ist alles sehr aufwendig, aber wir freuen uns, Ihnen endlich wieder unser gro??artiges Freiburg zeigen zu d??rfen.",
            "startDateTime": "6/19/21 12:15",
            "venueId": "v15",
            "offerURL": "https://www.awin1.com/pclick.php?p=28613752713&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/SKfDNj9q.jpeg"
        },
        {
            "id": "e191",
            "title": "LIVE: Acht Eimer H??hnerherzen",
            "description": "ACHT EIMER H??HNERHERZEN sind ein halbakustisches NylonPunk Trio mit den drei Musikstilen Powerviolence-Folk, Kakophonie und Bindungsangst. Sie spielen Wandergitarren-Hardcore mit Fuzz und Driver f??r Alleinerziehende, Alleinerzogene, Allergiker und alle Heiter-Depressiven.Am 27.3.2020 erscheint ihr zweites Album (mit dem Titel ?album?) auf dem auch weiterhin die Regeln von Punk, Folk und Songwritertum eiskalt ignoriert werden. Alles bleibt handgemacht ohne Tricks und Effekte, aber Spiralgalaxien-entfernt von ?Unplugged?-Patina und -Pathos - diesmal noch schneller und Punk-affiner getaktet. Denn die Welt und ihre Probleme drehen sich inzwischen ja auch immer schneller und man muss ja mit der Zeit gehen. Und ?wer pennt, kommt in Zement.Apocalypse Vega - Gesang, Gitarre, DriverHerr Bottrop - Bass, GesangFuzz Bene Diktator - Drums, Gesang",
            "startDateTime": "4/23/22 20:30",
            "venueId": "v21",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867287277&a=774719&m=13738"
        },
        {
            "id": "e192",
            "title": "FREIBURGerLEBEN: Schokoladen Tour",
            "description": "400 Jahre Habsburger haben die Kaffeehaus-Tradition Freiburgs gepr??gt. Bei einem gem??tlichen Spaziergang durch die historische Altstadt erleben sie die Freiburger Stadtgeschichte von ihrer Schokoladenseite. EIn Na(s)chmittag der besonderen Art! Inkl. Tasse Kaffee / hei??e Schokolade und Schokoladen Spezialit??ten.Durchf??hrung der Tour bei mindestens 6 Personen. Sollten es weniger Teilnehmer sein behalten wir uns vor bis 2 Tage vor Beginn der F??hrung die Tour zu stornieren.",
            "startDateTime": "7/9/21 16:00",
            "venueId": "v15",
            "offerURL": "https://www.awin1.com/pclick.php?p=28646109297&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/WpguafTX.jpeg"
        },
        {
            "id": "e193",
            "title": "Matthias Deutschmann + Silver City Trio - 900 Jahre sind genug!",
            "description": "mit Helmut L??rscher (p), Bernd Heitzler (b) und Matthias Daneck (dr)Der gute Vorsatz f??r 2021 steht: Freiburg will sich feiern. Alle B??rgerinnen und B??rger sind aufgefordert mitzuhelfen. Jubil??umsberater sind in der ??kocity unterwegs und verbreiten gute und nachhaltige Laune. Das Jubil??um ist nicht mehr aufzuhalten. Aus diesem Grunde habe ich mich entschlossen mein 40j??hriges B??hnenjubil??um ganz in den Dienst der 900-Jahr-Feierlichkeiten zu stellen und unsere Schwarzwaldmetropole mit einer Jubil??umsgala zu feiern. Wir verbeugen uns vor dieser Stadt, mal sehen, wie tief wir kommen ? Am Fl??gel begleitet Helmut L??rscher.Mehr Infos: http://www.matthiasdeutschmann.deFoto: Philipp v. Ditfurth",
            "startDateTime": "9/26/21 19:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28663500321&a=774719&m=13738"
        },
        {
            "id": "e194",
            "title": "Jean Philippe Kindler - Deutschland umtopfen.",
            "description": "Liebe B??rger:nnen, liebes Volk, liebe Umweltsa?ue!Ich wei??, ich wei??. Es macht Sie alles so traurig. All das Leid der Welt. Die Ungerechtigkeit. Die Armut. Die AfD. Ich sehe Ihre Betroffenheit ja auf Instagram. Und dennoch: In solchen Zeiten istes wichtig, dass Sie auch mal auf sich achten! Lassen Sie sich vom Leid dieser Welt nicht das eigene Gl??ck versauen. Denn f??r jede politische Krise gibt es eine passende Atem??bung. DerGender Pay Gap la?sst sich wunderbar wegtanzen. Es ist doch scho?n, wenn Sie Ihre U?berstunden nicht bezahlt bekommen, denn daf??r d??rfen Sie Ihren Chef ja ?Bro? nennen. Ausbeutung darfendlich nur dann Ausbeutung sein, wenn sie bemerkt wird! Ich verstehe Sie. Die Schere zwischen Arm und Reich la?sst Sie unruhig schlafen. Da m??ssen Politiker wie ich nat??rlich sofort aktiv werden. Zeit f??r den Herabschauenden Hund! Spannen Siedie Zehen an. Atmen Sie tief ein. Und wenn Sie die Knie durchdr??cken, dann lassen Sie mal alles los! Zeitarbeit. Lohndumping. Raus damit. Der Nahostkonflikt? Nicht mit Ihnen. Sie sind imMoment. Sie sind authentisch. Denken Sie daran, was die Positive Psychologie sagt: Werden arme Menschen ausgebeutet, dann will der Karmagott sie dazu bewegen, sich endlich selbst zuverwirklichen!Es ist nun endlich mal wieder Zeit f??r SIE. SIE haben sich ihr Gl??ck verdient. SIE werden aufbl??hen. F??r den harten Weg nach oben hatten SIE na?mlich nichts au??er das richtigeGeschlecht, eine satte Erbschaft und einen deutschen Namen. SIE sind self-made! Finden Sie, dass das ironisch klingt? Ja, so ist es auch gemeint. Denn in unserer Gesellschaft bl??hen Menschen nur deswegen auf, weil anderen konsequent das Wasser abgegraben wird. Wenn Siedas auch schei??e finden, bissige Satire, Albernheit und Kritik aber mo?gen, dann kommen Sie doch einfach zu meinem neuen Soloprogramm. Liebe Freundinnen und Freunde, umverteilen wargestern. Ich will bl??hende Landschaften f??r alle! Dementsprechend meine Forderung: Wir m??ssen ?DEUTSCHLAND UMTOPFEN?!Mehr Infos: https://www.jeanphilippekindler.deFoto: Fabian St??rtz",
            "startDateTime": "9/30/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28663500323&a=774719&m=13738"
        },
        {
            "id": "e195",
            "title": "Stuttgarter Kammerorchester",
            "description": "Aufgrund der gesetzlichen Verordnungen zur Eind??mmung der Corona-Pandemie konnte das Albert-Konzert mit Arabella Steinbacher & Stuttgarter Kammerorchester (Ersatzkonzert f??r Sheku Kanneh-Mason, Mirga Gra?inyte-Tyla & City of Birmingham Symphony Orchestra) am 25. November 2020 im Konzerthaus Freiburg leider nicht stattfinden.Wir freuen uns, dass es uns in Zusammenarbeit mit allen Beteiligten gelungen ist, das Konzert zu verlegen. Neuer Konzerttermin ist nun Freitag, der 2. Juli 2021 im Konzerthaus Freiburg. Wir informieren Sie, falls die Veranstaltung als Doppel-Konzert mit reduzierter Besucherzahl durchgef??hrt werden muss.Abonnenten der Albert Konzerte haben hierzu eine gesonderte Info per Post erhalten.Programm:Mozart, Violinkonzert Nr. 1 B-Dur KV 207Mendelssohn, Streichersymphonie Nr. 6 Es-Dur MWV N 6Mozart, Violinkonzert Nr. 5 A-Dur KV 219 ?T??rkisches?Arabella Steinbacher, ViolineSusanne von Gutzeit, KonzertmeisterinStuttgarter Kammerorchester",
            "startDateTime": "7/2/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551891095&a=774719&m=13738"
        },
        {
            "id": "e196",
            "title": "Hazel Brugger - Kennen Sie diese Frau?",
            "description": "Hazel Brugger ist nicht nur bekannt geworden, sondern auch erwachsen: Mittlerweile ist Deutschlands ?Beste Komikerin 2020? Hausbesitzerin, Ehefrau und Mutter. Aber der Lockdown hat auch Hazel nicht v??llig kalt gelassen und so muss sich die deutschamerikanische Schweizerin im Chaos zwischen YouTube, Shitstorms, eigener Firma, ??lter werdenden Eltern und bankrotten K??nstlerkolleg*innen immer wieder die Frage stellen: Was will ich eigentlich wirklich ? und inwiefern ist das weiblich??Konzentriert. Schn??rkellos. Saucool. Hazel l??sst alle Gockel-All??ren ihrer m??nnlichen Kollegen weg.?Josef Hadermehr Infos: https://hazelbrugger.com/Foto: Peter Hauser",
            "startDateTime": "11/9/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=28807177697&a=774719&m=13738"
        },
        {
            "id": "e197",
            "title": "Lennart Schilgen - Engelszungenbrecher",
            "description": "Einmal den Kopf schief gelegt, schon sieht die Welt ganz anders aus ? Lennart Schilgen findet Blickwinkel, aus denen das vermeintlich Feststehende auf einmal wackelig erscheint. Und bringt es dann in seinen Liedern zum Kippen: Vom Tragischen ins Komische, vom Sch??nen ins Schr??ge. Oder auch mal umgekehrt. Mit Wortwitz und Ironie singt er ??ber innere und ??u??ere Schweinehunde, Black-Metal-Bands, die Liebe und alle anderen, die sich nicht wehren k??nnen. Doch meistens will man sich gar nicht wehren. Sondern lieber verhalten mitsingen, schlie??lich sind die Melodien so h??bsch eing??ngig. Gelegentlich ist das sogar erlaubt, oft scheitert es aber daran, dass es anders weitergeht, als vermutet: mit verwegenen Reimen und Zeilenspr??ngen dreht er sich selbst das Wort im Munde um, wird vom Draufg??nger zum Dran-Vorbei-Schleicher oder vom halben Hemd zum Hooligan. Dazu spielt er abwechselnd Klavier und Gitarre, versiert und vielseitig, mal zart, mal rabiat ? aber stets im Sinne der Texte, vorgetragen mit grundsolider Heiterkeit und bisweilen bedenklichem Mienenspiel. Was dabei herauskommt ist subtiler Wahnsinn zum Wohlf??hlen. Oder, um es mit dem letzten Satz seines Pressetextes zu sagen: Geschichten, wie sie das Leben gerne geschrieben h??tte. Mehr Infos: https://www.lennartschilgen.de/",
            "startDateTime": "10/31/21 19:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857757675&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/qpDqwNRw.jpeg"
        },
        {
            "id": "e198",
            "title": "Uli Boettcher - Ich bin Viele",
            "description": "Wer sind wir?Diese simple Frage ist grunds??tzlich schwer zu beantworten, weil wir alle immer viele sind. So auch Uli Boettcher. In ?Ich bin Viele? begibt er sich auf die Suche nach seinen verschiedenen Ichs, die allesamt Aufh??nger f??r Geschichten aus seinem Leben sind und dem Verwandschaftsbestiarium, in dem er aufgewachsen ist.In Boettchers neuem Programm finden sich alte Bekannte wieder, wie seine Frau und sein Sohn, aber auch neue Figuren, wie die Erb-Tante oder sein Nachbar.Im Laufe dieses Abends kristallisieren sich auf h??chst unterhaltsame Weise pers??nliche Facetten heraus, auf die Boettcher selbst nicht immer stolz sein, ??ber die ein anderer aber immerhin ausgiebig lachen kann.Mehr Infos: http://www.uliboettcher.de",
            "startDateTime": "10/3/21 19:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857758309&a=774719&m=13738"
        },
        {
            "id": "e199",
            "title": "Patrizia Moresco - #Lach_mich",
            "description": "Dolce Vita im Hamsterrad, so hat sich die Moresco ihre Zukunft nicht vorgestellt. Fr??her war sie ihrer Zeit voraus, jetzt kommt sie nur noch hechelnd hinterher. Das Problem mit dem Leben auf der ??berholspur ist, du kommst viel schneller dahin, wo du gar nicht hin willst. Wo ist der Stau, wenn man ihn braucht?Zum Ausgleich fliegt man zum Detoxen nach Indien, zum Meditations- und Yogaretreat, aber wehe im Strandcaf?? gibt?s kein Wlan, dann ziehen im sonnigen Paradies ganz dunkle Wolken auf. Wenn du nicht t??glich ein Selfie postest, glaubt doch keiner, dass du noch lebst. Wie bekloppt ist das, fr??her waren Haus und Auto ein Statussymbol, heute zeigt man sein gesamtes Leben auf Instagram. Und ganz wichtig sind Follower und Likes. Die bestimmen heute deinen Wert. Like mich am Arsch, sagt die Moresco. Mehr Infos: http://www.patriziamoresco.de",
            "startDateTime": "10/1/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857758313&a=774719&m=13738"
        },
        {
            "id": "e200",
            "title": "Vince Ebert - Make Science Great Again!",
            "description": "Make Science Great Again!90 Prozent der Amerikaner halten die Evolutionstheorie f??r unbewiesenen Mumpitz. 34 Prozent bezweifeln, dass die Erde eine Kugel ist und sieben Prozent glauben, dass braune K??he Schokomilch geben.Alles Fake News aus dem Land der unbegrenzten M??glichkeiten? Vince Ebert wollte es genau wissen und startete ein spektakul??res Experiment: Ein ganzes Jahr in den USA!Er traf auf IT-Spezialisten aus dem Silicon Valley und in New York auf Wallstreet-Banker. In Cape Canaveral sprach er mit Raketenwissenschaftlern und in Harvard mit Genderforscher-Unterstrich-Studenten-Unterstrich-Sternchen-Innen.Stets auf der Suche nach den elementarsten Fragen: Wie kann es sein, dass eine Nation, die zum Mond flog, nicht in der Lage ist, eine funktionsf??hige Duscharmatur herzustellen? Woher kommt die uramerikanische Angst vor unpasteuristierter Milch? Und kann man wirklich vom Tellerw??scher zum Million??r werden? Oder doch nur zum Geschirrsp??ler?Amerika - ein Land, das polarisiert und irritiert. Dort gibt es schwarz und wei??, Liebe und Hass, Freiheit und Todesstrafe, Pr??derie und Brustvergr????erungen, Eliteunis und K??se in Spr??hdosen.Amerikanische Sch??ler halten Hitler f??r eine Staubsaugermarke und glauben, die Ukraine liegt in Portugal. In Montana kommen auf jeden Einwohner drei K??he, jeder achte Amerikaner hat schon einmal bei MacDonalds gejobbt und ein Viertel glaubt an Wiedergeburt. Trotzdem sind die USA die f??hrende Wissenschaftsnation der Welt. Oder vielleicht sogar deshalb?Ab Herbst 2020 ist Vince Ebert zur??ck auf Deutschlands B??hnen. Mit vielen Antworten, Einsichten und einem brandneuen Programm: Make Science Great Again! ? eine witzige und kultur??bergreifende Abrechnung mit Irrationalit??t, Denkfehlern und gegenseitigem ??berlegenheitsgef??hl.Die Veranstaltungsreihen finden unter den vorgegebenen, geltenden Sicherheits- und Hygiene-Vorschriften statt.",
            "startDateTime": "10/30/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857758479&a=774719&m=13738"
        },
        {
            "id": "e201",
            "title": "FIL - Die Expertise war bedeutend h??her",
            "description": "Fil wieder. Wer ihn noch nicht kennt, sollte das sofort ??ndern. In einer aus den Fugen geratenen Welt ist er der verl??ssliche Fels. Der verl??ssliche Fels im h??sslichen Pelz. Und er frisst einen gr??sslichen Wels.In ?Die Expertise war bedeutend h??her? beantwortet unser Freund singend und sprechend die gro??en Fragen unserer aus den Fasern geschleuderten Welt in der das B??se l??ngst gesiegt hat. Mit kecker Warmherzigkeit h??lt er uns einen Spiegel vor und f??hrt uns z??rtlich ein in die altehrw??rdige Kunst des Lachens. Fil erl??utert, warum es nicht nur gr??ne, sondern auch rote E-Roller gibt und wie es sein kann, dass wir dennoch nicht gl??cklich sind. Als erster deutscher Comedian ??berhaupt unternimmt er den Versuch, den Riss durch die Gesellschaft zu kitten, indem er AFD-W??hlern mit dem Song ?Nazischweine, lasst mich nicht alleine? eine Hand entgegenstreckt.Er arbeitet sich an s??mtlichen Themen und Brennpunkten der letzten Woche ab, so dass ihr hinterher einsichtig und mit disruptiv erweitertem Horizont zugeben werdet: ?Das war echt gut?.Und so ist es. So ist Fil. Echt gut. Und gerecht. Er ist ein guter aufrechter Mensch, der euer Eintrittsgeld verdient.Foto: Julia Tham",
            "startDateTime": "10/21/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857758981&a=774719&m=13738"
        },
        {
            "id": "e202",
            "title": "Johannes Floehr - Ich bin genau mein Humor",
            "description": "Wenn Super Mario kein Italiener w??re, sondern Deutscher: Hie??e er dann ?Toller Jochen?? Oder ?Prima Klaus?? Was machen Putzerfische, die im Aquarium immer an der Scheibe herumsaugen, in der freien Natur? Schwimmen die ein Leben lang durch den Ozean auf der ewigen Suche nach einer Fensterscheibe und sterben dann total entt??uscht? Die SPD, was ist da eigentlich schon wieder los? Und Einr??der - warum fallen sie nicht um? Wer sich solche Fragen stellt, der braucht keine Antworten, sondern eine B??hne. Und auf eben diese stellt sich der sympathische Zwei-Meter-Mann Johannes Floehr mit seinen frechen Scherzen nun schon seit einigen Jahren. Zum Beispiel mit seinem neuen Programm, in dem es Stand-up, Texte, Videos und Ausz??ge aus seinen beiden B??chern ?Buch? (2018) und ?Dialoge? (2019) geben wird. Mehr Infos: https://www.johannesfloehr.deFoto: Fabian St??rtz",
            "startDateTime": "10/29/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857759153&a=774719&m=13738"
        },
        {
            "id": "e203",
            "title": "Matthias Brodowy - Keine Zeit f??r Pessimismus",
            "description": "Matthias Brodowy ist ein klassischer K??nstler: Ein Hypochonder, der in der n??chsten Sekunde irgendeinen ??ber ihn einbrechenden Super-Gau erwartet. Im Zweifel einen dinosauriesken Meteoriteneinschlag. Und gerade deswegen ist er der Meinung, dass definitiv keine Zeitmehr f??r Pessimismus ist. Klingt widerspr??chlich? H??chstens so widerspr??chlich wie das Leben.Aber eigentlich ist es die einzige Chance, das Ruder rumzurei??en. Denn den Kopf in den Sand zu stecken, ist definitiv nicht atmungsaktiv!Warum also nicht der Apokalypse ein Bein stellen und einfach mal handeln? Mit einem L??cheln im Gesicht, denn es w??re zu schade, die Welt Leuten zu ??berlassen, denen man es sowieso nie rechtmachen kann. Dieser Kabarettabend ist ein klares Ausrufezeichen f??r alle, die auch dann noch ein Apfelb??umchen pflanzten, wenn morgen die Welt unterginge. Entweder im Garten oder virtuell vom Sofa aus. Geht ja heute alles auch online und im Netz ist sowieso die H??lle los. Also: Aufbruch! Und falls wir unsicher sind: Ran an den Rollator! Gibt?s bestimmt bald auch mit E-Motor! Wenn einem das Wasser bis zum Hals steht, gilt ein Grundsatz: Keine Zeit f??r Pessimismus!Und dann? Konfetti! Biologisch abbaubar.Brodowys zehntes Programm ist wie immer politisch, literarisch,musikalisch! Dar??ber hinaus fr??nt der selbsternannte Vertreter f??rgehobenen Bl??dsinn gerne auch der gepflegten Albernheit und dergrotesken Geschichte.Matthias Brodowy steht seit 1989 auf der Kabarettb??hne, wurde vonHanns-Dieter H??sch entdeckt und gef??rdert und erhielt zahlreicheKabarettpreise, darunter das ?Schwarze Schaf?, den ?Prix Pantheon?und den Deutschen Kleinkunstpreis.Regie: Rolf Claussenhttps://www.brodowy.de/",
            "startDateTime": "10/7/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857759715&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/LMeRoDD6.jpeg"
        },
        {
            "id": "e204",
            "title": "Inka Meyer - Zur??ck in die Zugluft",
            "description": "Was ist passiert? Als Kind war jeder Tag ein Sonntag. Als Student immer Freitag. Und heute ist irgendwie st??ndig Montag. J??ngst fiel mir eine alte ToDo-Liste von 2015 in die H??nde. Und siehe da, alles noch brandaktuell! Und mein Arzt meint auch noch, ich solle mich mehr bewegen. Wieso? Ich laufe dreimal t??glich Amok. Unser Alltag ist ein Ausnahmezustand, der zur Regel wurde. Bleibt nur eins: Die Flucht. Doch wohin? Auf vegane Pilgerfahrt nach Sankt Augustin auf dem Kompostweg? Nein. Ins Theater! Das Programm ?Zur??ck in die Zugluft? von Inka Meyer ist eine hochkomische Suche nach dem verlorenen Spa?? im Leben. Die Tochter eines friesischen Orientexperten gilt im Kabarett als die F??hrtenleserin im Dickicht der Moderne. Im Anschluss an ihre Show werden Sie laut ausrufen: ?Freunde! Wenn ihr Probleme braucht, ich bin immer f??r euch da.?Mehr Infos: https://www.inkameyer.deFoto: Simon B??ttner",
            "startDateTime": "10/8/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857759939&a=774719&m=13738"
        },
        {
            "id": "e205",
            "title": "Volkmar Staub - Ausreden",
            "description": "PREMIERENach dem Programm ?Lacht kaputt, was Euch kaputt macht? ist ?Ausreden? die Fortsetzung des Lachfurors gegen die Dummheit und gegen die Machenschaften der M??chtigen.Seitenspr??nge werden zu Gesch??ftsreisen, Lobbyismus wird zum harmlosen Gedankenaustausch und Schokoladenmissbrauch wird zur Power-Di??t. Ausreden sind allgegenw??rtig. Privat wie politisch. Tagespolitisch immer aktuell, aber auch etwas tiefer sch??rfend, schaut Staub in Politik, Wirtschaft und gesellschaftlichem Alltag den Vollpfosten und -pf??stinnen auf die Pfo(s)ten und reflektiert den Stillstand der laufenden Ereignisse. Dabei streift er auch die Ironiederlagen seiner altlinken Generation. ?Toking baut mei Tschenereischen?Das politische Kabarettprogramm ?Ausreden? ist kluge Unterhaltung und ansteckend l??cherlich. Die Lage ist hoffnungslos, aber nicht ernst.Volkmar Staub will sich aber auch selber mal ausreden. Vor Euch. Uns??gliches sagbar machen und ??ber Unredliches reden bedeutet eine Satzsuche im W??rtersee. Ob als Song, Gedicht oder satirischer Lauftext.Volkmar Staub setzt sich ab gegen die ganze Massen-Satierhaltung und Satierqu??lerei im Fernsehen, wo jeder Gag die Mittel heiligt und fragt sich: Ist diese Welt denn zu fassen? Und wenn, dann mit Worten? Sagts und l??chelt gewinnend mit verlorenen S??tzen.Hochaktuell, subversiv und altersb??se!Mehr Infos: http://www.volkmar-staub.deFoto: Hermann Baque",
            "startDateTime": "10/9/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857759941&a=774719&m=13738"
        },
        {
            "id": "e206",
            "title": "Sebastian 23 - Cogito, ergo, dumm",
            "description": "Wir leben in einer Zeit, in der ein amerikanischer Pr??sident den Klimawandel leugnet, in TV-Shows Partnerwahl anhand entbl????ter K??rperteile betrieben wird oder G??nther Jauch als der kl??gste Deutsche gilt, weil er Quiz-Antworten korrekt von einem Bildschirm ablesen kann. Man k??nnte denken, der Mensch ist dumm und die Menschheit erst recht. Aber ist das wirklich so?Sebastian 23 ist Bestsellerautor, Poetry Slammer und Komiker. Und er ist selbst sehr dumm. Sagt zumindest seine Exfreundin. Bewundern wir gemeinsam die weisen Worte des ehemaligen US-Vizepr??sident Don Quayle: ?Nicht die Umweltverschmutzung sch??digt die Umwelt, sondern die Verunreinigungen in Luft und Wasser.? Verlieben Sie sich zudem in den NPD-Politiker, der 2017 forderte, arabische Zahlen als Hausnummern abzuschaffen und stattdessen ?normale Zahlen? einzusetzen.In seinem neuen Programm geht Sebastian 23 entlang wirklich haarstr??ubender, absurder und vor allem unterhaltsamer Beispiele am Ende dem Ph??nomen Dummheit selbst auf den Grund. Mehr Infos: http://sebastian23.orgFoto: Friederike Becht",
            "startDateTime": "10/10/21 19:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857759951&a=774719&m=13738"
        },
        {
            "id": "e207",
            "title": "Strohmann-Kauz - Sitzl??der - der letzte Stammtisch",
            "description": "?Sitzl??der? ist das j??ngste St??ck Theaterkabarett mit den kultigen Senioren Ruedi und Heinz. Die alten Freunde hauen ab aus dem Altersheim und steigen ein in ihre l??ngst geschlosseneStammbeiz. Doch wo sie sich Gem??tlichkeit erhoffen, ??berrascht sie das volle Leben. Am Stammtisch kriegen sie Besuch von aufs??ssigen Zeitgenossen und sitzengebliebenen Kameraden.Ungewollter ziviler Ungehorsam st??rzt das liebensw??rdige Rentnerduo in eine abenteuerliche Geschichte. Zuf??lle und ??berraschende Wendungen zwingen die treuen Weggef??hrten ihnenunbekannte Rollen zu spielen. Ruedi und Heinz lassen nicht nur Erinnerungen nachsitzen, sie k??mpfen f??r ihren neuen, alten Zufluchtsort.Strohmann-Kauz erz??hlt eine Geschichte ??ber Erinnerungen und Leidenschaft, entlebte Dorfkerne und entleerte Innenst??dte, ??ber junge Nostalgie, echte Freundschaft und alte Kampfbereitschaft.Die Schauspieler Matthias Kunz und Rhaban Straumann sind wie immer kabarettistisch, gesellschaftspolitisch aktuell und ??berraschend.Mehr Infos: https://www.strohmann-kauz.chFoto: Remo Buess",
            "startDateTime": "10/14/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857759955&a=774719&m=13738"
        },
        {
            "id": "e208",
            "title": "BERGE - Das Heiligste der Welt",
            "description": "In Marianne Neumann und Rocco Horn haben sich zwei Menschen gefunden, die einen ??hnlichen Blick auf die Welt haben: Das, was die Welt bewegt, was sie zerst??rt und was dringend zu erhalten ist an Werten und Wahrhaftigkeiten, all dies sprechen sie in ihren Songs an.Nach ihrem Deb??talbum ,Keine Spur?, mit dem die Berliner bereits in der Szene auf sich aufmerksam machen konnten, folgte 2015 ?Vor uns die Sinnflut?. Insbesondere die Single ,10.000 Tr??nen?, ein ber??hrendes St??ck ??ber Tierschutz und die moralische Zweifelhaftigkeit moderner Massentierhaltung, fand breiten Anklang, avancierte nach und nach zu einem viralen Hit und steht aktuell bei Youtube bei ??ber f??nf Millionen Plays. Die Konzerte zu diesem Album gerieten in der Folge immer gr????er und euphorischer. Denn Berge-Konzerte, bei denen das Duo von einer Live-Band begleitet wird, sind eben wahrlich Manifestationen des Positiven.",
            "startDateTime": "12/16/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28886911383&a=774719&m=13738"
        },
        {
            "id": "e209",
            "title": "KAYA YANAR - AUSRASTEN! f??r Anf??nger - Tour 2019/2020",
            "description": "Kaya Yanar rastet gerne mal aus. Nicht sehr oft, aber immer ??fter. Liegt es tats??chlich an ihm oder an allen anderen? Dieser und anderen Fragen geht der Comedian in seinem neuen Live-Programm ?Ausrasten! f??r Anf??nger? nach.Wir leben in einer Zeit, die so stressig und verr??ckt ist, dass sich der Komiker fragen muss: Ist gelegentliches Ausrasten notwendig, um halbwegs gesund in der Birne zu bleiben? Und wenn ja, wie macht man das am besten? Warten, bis einem alles zu viel wird? Und dann Auswandern, Burn-out oder Amok? Nat??rlich nicht. Der Comedian wei??, wie es richtig geht: Ausrasten ja, aber mit Stil, Eleganz und vor allem viel Humor.Kaya Yanar bringt so einiges an Lebenserfahrung in Sachen (ungez??geltes) Temperament mit, denn er regt sich st??ndig ??ber alles auf: ??ffentliche Toiletten, Staus, Autofahrer, Radfahrer, Fu??g??nger ? je nachdem, wie er gerade unterwegs ist ?, alte Menschen, junge Menschen, Kinder, Babys, TV-Sender, Ausl??nder, Inl??nder, die Liste lie??e sich endlos fortsetzen. ?Je ??lter ich werde, desto mehr merke ich, wie meine Toleranz f??r Bullshit immer d??nner wird. Als 10-J??hriger freust du dich auf die gro??e weite Welt. Als 20-J??hriger hat man schon ein paar Deppen kennengelernt. Als 30-J??hriger denkt man: Ok, nicht alles super hier, aber man kommt klar. Aber als 40-J??hriger: Oh Gott! Das kann doch so nicht weitergehen!??Ausrasten f??r Anf??nger? bietet zwei Stunden Lebenshilfe der besonderen Art mit ?Doktor Yanar?: witzig, intelligent, humorvoll, selbstironisch und zum AUSRASTEN! lustig.",
            "startDateTime": "9/26/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418943201&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/UciJzRvB.jpeg"
        },
        {
            "id": "e210",
            "title": "Ass-Dur - QUINT-ESSENZ",
            "description": "Ass-Dur, das sind neuerdings: Dominik Wagner und Florian Wagner. Zwei M??nner ? zwei Pianisten ? zwei Br??der! Der eine kann was, der andere auch. Die Wagner-Br??der versprechen h??chste musikalische Leistung, Komik vom Feinsten und nat??rlich ? sonst w??re es nicht Ass-Dur ? sind sich die beiden nie einig.Mit frischem Schwung starten die Wagners die Ass-Dur-Saison mit ihrem neuen Programm QUINTESSENZ. Und hier tobt nicht nur die M??nner- und Musikerkonkurrenz, nun kommt das ?BrotherBattle? hinzu. Spielt Dominik besser Klavier als Florian die Geige? Ist Florian charmanter oder  Dominik schlauer? Die beiden begeistern ihr Publikum mit Klaviermusik, Gesang und schr??gen Ideen, vor allem aber mit einem B??hnenspiel, das seines gleichen sucht, aber nicht findet. Ass-Dur bringt Klassik ins Kabarett-Theater und Kabarett ins Konzerthaus. Ihre Herzen schlagen f??r die Musik - wenn auch nicht immer im Gleichklang (und Dominiks auch noch f??r schlechte Witze), und so bringen sie Klassik- und Popmusik aus unterschiedlichen Stilrichtungen zusammen. Und das Publikum lauscht mal and??chtig und mal klatscht es mit. Musikalisch, lustig, schlagfertig und von klein auf in Position fechten die Wagner-Br??der mit Geige und Bogen um die Gunst des Publikums.-----------------------------------------Dominik Wagner studierte an der Hochschule f??r Musik ?Hanns Eisler? in Berlin Musik-Theaterregie. Es folgte eine Regieassistenz bei Hans Neuenfels an der M??nchner Staatsoper. 2013 schrieb, inszenierte und produzierte er sein erstes Musical ?Sarg Niemals Nie? zusammen mit J??rn-Felix Alt und Christoph Reuter. Seitdem feierte ?Sarg Niemals Nie? erfolgreiche Gastspiele in der Bar jeder Vernunft, im Deutschen Theater M??nchen, im Kammertheater Karlsruhe, in der Neuk??llner Oper, u.a.. 2015 folgte die Urauff??hrung des Musicals ?Perfect Town?. Dominik Wagner ist seit 12 Jahren Teil von Ass-Dur und arbeitet neben seiner B??hnent??tigkeit als Coach, Autor und Regisseur f??r andere K??nstler.Florian Wagner studierte an der Hochschule f??r Musik und Theater M??nchen Schulmusik und Geh??rbildung. 2015 war er Pianist der Tour-Version der Stage-Produktion von Ich war noch niemals in New York, sowie 2016 von Tanz der Vampire. Bei der Urauff??hrung des Musicals Sarg niemals nie in der Neuk??llner Oper in Berlin 2014 war er musikalischer Leiter. 2015 wurde das Musical Perfect-Town, zu dem er die Musik schrieb, in M??nchen uraufgef??hrt. Florian arbeitet unter anderem bei fastfood Improtheater, Volxgesang Das Mitsing-Konzert und dem Gospelchor St. Lukas. Seit 2017 ist er als Korrepetitor f??r die Bayerische Theaterakademie August-Everding t??tig. Zudem hat er jeweils einen Lehrauftrag f??r Schulpraktisches Klavierspiel an der LudwigMaximilians-Universit??t und der Hochschule f??r Musik und Theater M??nchen. Florian Wagner ist als Pianist, S??nger, Arrangeur, Komponist und Musikkabarettist t??tig.https://www.ass-dur.de/",
            "startDateTime": "11/6/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28926754699&a=774719&m=13738"
        },
        {
            "id": "e211",
            "title": "Ingo B??rchers - Das W??rde des Menschen",
            "description": "Haltung bewahren und Bew??hrtes aufgeben. Vor??bergehend stehen bleiben. Den Ausnahmezustand zur Regel machen.Und: Fragen stellen. Wollen wir das Digitale als Werkzeug oder als Habitat begreifen? Gibt es ein Davor und Danach?Oder eher ein Davor und Seitdem? Vielleicht gar ein Davor und Ab Jetzt? Es schl??gt die Stunde der Utopien. Die Utopie ist befreundet mit dem Konjunktiv. In ihr steckt das M??gliche. Und hat damit immer das Potenzial zur zuk??nftigen Wirklichkeit. Auch der Fall der Mauer war bis zum tats??chlichen Fall nichts anderes als Utopie. Man muss mit allem rechnen. Sogar mit dem Guten!Das W??rde des Menschen - das sind philosophisch-satirische Gedankenspiele von und mit Ingo B??rchers; das ist Kabarett einmal anders gedacht: Nicht Was ist schlecht gelaufen?, sondern Wie k??nnte es besser sein?. Mehr Infos: https://www.ingoboerchers.de/Foto: Nicolay Georgiew",
            "startDateTime": "11/5/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28926758815&a=774719&m=13738"
        },
        {
            "id": "e212",
            "title": "JUSTIN SULLIVAN solo - Surrounded Tour 2021",
            "description": "NEW MODEL ARMYs FRONTMANN Justin Sullivan VER??FFENTLICHT BRANDNEUES STUDIOALBUM?SURROUNDED?Am 28. Mai 2021 ver??ffentlicht Justin Sullivan mit ?Surrounded? sein zweites Soloalbum ? achtzehn Jahre nach seinem gefeierten Deb??t?Album ?Navigating by the Stars? (2003). ?Surrounded? ist eine Sammlung von sechzehn neuen Songs, die in den ersten Wochen des Lockdowns 2020 geschrieben wurden. Allesamt gro??artige Kompositionen, die Sullivans Liebe zum Geschichtenerz??hlen, zu weiten Landschaften und unvergesslichen Atmosph??ren verdeutlichen.Gr????tenteils zu Hause aufgenommen, enth??lt das Album auch Beitr??ge von Gast?Musikern, darunter Jon Thorne am Bass (Lamb), an der Harfe Tom Moth (Florence and the Machine ? und Bruder des NMA?Bassisten Ceri Monger), sowie Streicherarrangements der befreundeten Komponisten Tobias Unterberg, Henning Nugel und Shir?Ran Yinon. Ebenfalls zuh??ren sind die aktuellen Mitglieder von New Model Army. Das Album wurde von Lee Smith in den Greenmount Studios in Leeds abgemischt, dem Co?Produzenten der letzten Alben von New Model Army, darunter auch ihr 2019er Erfolgsalbum ?From Here?, mit dem die Band ihre bislang h??chste Chartplatzierungen weltweit erzielte.www.newmodelarmy.org",
            "startDateTime": "9/13/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28926758837&a=774719&m=13738"
        },
        {
            "id": "e213",
            "title": "marotte Figurentheater - Der kleine Eisb??r",
            "description": "nach den B??chern von Hans de Beer f??r Kinder ab 3 JahrenHoch oben im Norden, wo Eis und Schnee ewig sind, wohnt Lars, der kleine Eisb??r. Lars kann schon auf dem R??cken seines Vaters reiten und mit einer Pfote Fische fangen. Nur schwimmen, das kann er noch nicht so gut. Eines Tages passiert etwas Schreckliches. Lars treibt ganz allein auf einer Eisscholle auf das offene Meer hinaus. Doch dabei erlebt er sein erstes Abenteuer. Ein St??ck f??r die ganz Kleinen. Dar??ber, wie sch??n es ist, die Welt zu entdecken. Und ??ber das sch??nste Wort, wenn man genug gesehen hat: Nach Hause ...https://www.marotte-figurentheater.de/",
            "startDateTime": "10/17/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28952448833&a=774719&m=13738"
        },
        {
            "id": "e214",
            "title": "marotte Figurentheater - Vom kleinen Maulwurf, der wissen wollte, wer ihm auf den Kopf gemacht hat",
            "description": "Nach dem bekannten Kinderbuch von Wolf Erlbruch f??r Kinder ab 3 JahrenAls der kleine Maulwurf eines Tages seinen Kopf aus der Erde streckte, passierte es: Es war rund und braun und das Schlimmste war, es landete direkt auf seinem Kopf!Wer war das?Die Ziege war es nicht, der Hase war es nicht, das Pferd war es nicht. Die Fliege war es auch nicht, aber die wei??, wer es war.Wie der kleine Maulwurf zu seinem Recht kommt, erz??hlt die bekannte Geschichte mit Spannung, Witz und Poesie.Mehr Infos: http://marotte-figurentheater.de",
            "startDateTime": "11/14/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28952448853&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/7P99JvyY.jpeg"
        },
        {
            "id": "e215",
            "title": "Theater Tiefflieger - Die grandiose Clownshow",
            "description": "F??r Kinder ab 4 JahrenHingehen! Mitmachen! Ablachen! Wenn Paul der Tiefflieger auf der B??hne landet, beginnt die Wahnsinns-Show und Lachen bis zum Umfallen ist angesagt. Der Todessprung wird gewagt. B??lle sausen umher. Der Clown st??rzt von einer ?Banane?, manchmal direkt ins Publikum... Wenn ihm die Lust vergeht, von allen ausgelacht zu werden, dreht er den Spie?? einfach um. Er holt sich seine Schauspieler auf die B??hne, die er dann zu Tieren und anderem verwandelt. Immer mehr Wunderdinge holt er aus den Koffern heraus und baut das Unn??tze ein in kleine Geschichten, die nur leben durch die Fantasie, die er in den Kindern und Erwachsenen weckt. Nur mit Hilfe der Zuschauer kann das alles gut gehen! Wer das verpasst, ist selber schuld.  Mehr Infos: http://www.theater-tiefflieger.de",
            "startDateTime": "10/10/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28952449215&a=774719&m=13738"
        },
        {
            "id": "e216",
            "title": "Theater Kunstd??nger - Hannah und die Bohnenranke",
            "description": "F??r Kinder ab 5 JahrenDie Geschichte eines Kindes, das mit Leichtigkeit das Richtige entscheidet. Eine arme Witwe lebt allein mit ihrem Kind. Als die einzige Kuh keine Milch mehr gibt, soll Hannah sie auf dem Markt verkaufen. Unterwegs trifft sie einen Mann, der ihr f??r die Kuh f??nf Zauberbohnen anbietet. Hannah nimmt das Angebot an. Ihre Mutter ist zornig, als Hannah mit f??nf Bohnen und ohne Kuh nach Hause kommt und wirft die Bohnen aus dem Fenster. Doch am n??chsten Morgen sind die Bohnen riesig gewachsen und reichen bis zum Himmel.Hannah klettert zweimal nach oben ins Land der Wolken. Beim ersten Mal stiehlt sie dem dort lebenden Riesen einen Beutel voll Gold, beim zweiten Mal ein Huhn, das goldene Eier legt.Bei ihrem dritten Ausflug ins Reich der Riesen verfolgt sie der Riese. Bevor er Hannah aber erreichen kann, die dieses Mal die goldene Zauberharfe des Riesen mit nach Hause nimmt, zerhackt Hannah die Bohnenranke. Der Riese st??rzt zu Boden und stirbt. Dank der goldenen Eroberungen haben Hannah und die Mutter, sowie das ganze Dorf von nun an ein gutes Auskommen. Mehr Infos: https://www.theater-kunstduenger.de/",
            "startDateTime": "10/24/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28952449217&a=774719&m=13738"
        },
        {
            "id": "e217",
            "title": "Cara - Live 2021",
            "description": "CARA ist eine multinationale, mit zwei Irish Music Awards ausgezeichnete Celtic Folk-Band.Die f??nf MusikerInnen kommen aus Irland, Schottland und Deutschland und haben in den 15 Jahren ihres Bestehens einen ausgezeichneten Ruf erworben f??r ihre innovativen Arrangements, ihre Eigenkompositionen und Songwriting, die virtuose Darbietung und eine charismatische B??hnenpr??senz.CARA steht f??r die gelungene Verbindung von Gesang gleich zweier herausragender S??ngerinnen mit den rasanten irischen Instrumentalst??cken auf allerh??chstem Niveau. Virtuose Soli auf dem irischen Dudelsack, rasante Geigenpassagen, ergreifende Balladen, meisterhaftes Spiel auf Gitarre und Bodhr??n ? die Liste k??nnte noch lange weitergehen. Abgerundet durch die charmant-humorvolle Pr??sentation garantiert ein Abend mit Cara h??chsten musikalischen Genuss und beste Unterhaltung.Dies brachte ihnen Tourneen und umjubelte Konzerte in den USA, Australien, Irland, Schottland, D??nemark, Deutschland, Frankreich, Benelux, ??sterreich, Italien und der Schweiz.",
            "startDateTime": "10/20/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=26927306677&a=774719&m=13738"
        },
        {
            "id": "e218",
            "title": "Yatao - Tour 2021",
            "description": "Als DAS Handpan Duo Deutschlands, haben Malte und Alex sich in den vergangenen Jahren einen festen Platz in der Handpan Welt verschafft. Im Internet millionenfach geklickt, auf Konzerten von tausenden Menschen besucht - blicken sie auf sechs intensive Jahre zur??ck, die sie musikalisch, sowie menschlich haben reifen lassen. Wer Yatao kennt freut sich schon auf die ber??hrenden Momente auf den Konzerten, die weit hinaus gehen ??ber den puren Genuss von Musik. Sie lassen das Publikum teilhaben an den H??hen und Tiefen ihrer Freundschaft - eine Freundschaft die im Klang ihren Ausdruck findet. Nicht nur auf Konzerten, sondern auch auf Workshops teilen die beiden jungen M??nner ihre Faszination f??r das Instrument und ber??hren auch dort durch die Lebendigkeit und Authentizit??t die ihnen nachgesagt wird.",
            "startDateTime": "7/3/21 19:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27559854019&a=774719&m=13738"
        },
        {
            "id": "e219",
            "title": "Les Yeux d?la T??te - Live 2021",
            "description": "Schon bald 15 Jahre Les Yeux D?La T??te! Nachdem sie 2016 und 2017 ausgiebig ihr Zehnj??hriges gefeiert hatten, mit grandiosen Konzerten versteht sich, nutzten sie 2018 um ihre 4. CD aufzunehmen. Die dann Anfang 2019, gleichzeitig zur Tour, erschienen ist. Dann kam erstmal 2020. Im Sommer 2021  soll die 5. CD erscheinen ? zum 15 j??hrigen Jubil??um im Herbst. Mit ein bisschen Gl??ck klappt das dann auch mit der Tour dieses Jahr!Die f??nf Musiker haben uns schon seit 2008 auf eine ganz besondere musikalische Reise mitgenommen: schier platzend vor Energie und Spielfreunde, entf??hren und entf??hrten sie in die Spelunken Paris?, in die ganz eigene Untergrund-Welt der Metrostationen, aber auch an die Ufer der Seine oder auf eine Hochzeit in Osteuropa. Ob Sinti-Swing, franz??sischer Chanson, poetischer Punk oder Jazz, Les Yeux D?La T??te bedienen sich unverkrampft verschiedenster musikalischer Einfl??sse. ??ber 100 eindrucksvolle Konzerte (hierzulande) sp??ter, haben ihre Auftritte nichts an Intensit??t und guter Laune eingeb????t.Sie erz??hlen dabei weiterhin eindrucksvoll und sensibel von den Themen des Alltags ? von Liebe, Freude und Spa?? am Feiern und ??ber die ganzen Verr??ckten da drau??en, die uns tagt??glich begegnen. Mal himmelhoch-jauchzend auf dem Tresen einer Bar tanzend (oder gleich auf den D??chern), mal betr??bt am Seine-Ufer sitzend, erzeugen sie eine mitrei??ende farbenfrohe Atmosph??re, die unvergessliche Konzerte erleben l??sst!",
            "startDateTime": "10/15/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28992262409&a=774719&m=13738"
        },
        {
            "id": "e220",
            "title": "Die Mathias Richling Show",
            "description": "Er beobachtet gerne Menschen und die Politik. Auf diese Weise versucht er den politischen Menschen zu ergr??nden: Kabarettist und Satiriker Mathias Richling lebt vom Sinn und Unsinn der Politik. Auch in seiner neuen Show ?Der Richling Code? hat Richling sich mit Themen wie Gentechnik, Umwelt-Desaster und der Bankenkrise besch??ftigt. Dabei schl??pft Richling wie gewohnt in die Rollen verschiedener Pers??nlichkeiten, um so das Widerspr??chliche zu parodieren.Die neue Richling-Show ??ber den Missbrauch in Deutschland ist ebenso zukunftsweisend wie vergangenheitsbew??ltigend: unser reales Leben und sein virtuelles, vielfach verschl??sseltesAbbild, das sich aus vielen Daten-Pixel zusammensetzt, sind ebenso Thema des neuesten Pro-gramms wie Gentechnik oder Bankenkrise und nat??rlich das gesamte F??hrungspersonal des Deutschland-Konzerns. Richling, der von vielen Kritikern als der bester Parodist der deutschen Kabarettszene gefeiert wird, bringt seine j??ngsten Beobachtungen wie immer in literarisch anspruchsvolle Form. ??ber seine Texte gibt es bereits Magister- und Doktorarbeiten. Niemand aus Politik und Show bleibt verschont. Man sollte also nicht vers??umen, die Qualit??t der v??llig neuen Richling-Parodien von Angela Merkel ??ber Winfried Kretschmann bis Helmut Schmidt live zu ??berpr??fen. (Foto: Rafael Kroetz)",
            "startDateTime": "12/9/22 20:00",
            "venueId": "v7",
            "offerURL": "https://www.awin1.com/pclick.php?p=29017919113&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/uEieFKiD.jpeg"
        },
        {
            "id": "e221",
            "title": "Simin Tander - Unfading Tour 2021",
            "description": "Nach ihrem zweiten gro??artigen Soloalbum Where Water Travels Home (Jazzhaus Records) und der international gefeierten Zusammenarbeit mit dem norwegischen Pianisten Tord Gustavsen auf dem ECM-Album What Was Said (Jahrespreis der deutschen Schallplattenkritik) ??ffnet die deutsch-afghanische S??ngerin Simin Tander eine neue T??r in ihrer k??nstlerischen Laufbahn. Unfading hei??t ihr neues Werk, das sie mit einem frisch formierten und ungew??hnlich besetzten Quartett eingespielt hat. Darauf verwebt die K??nstlerin m??helos den sch??pferischen, weiblichen Fluss eines geerdeten Songwritings mit Echos des Archaischen, verkn??pft die Kraft von Liedern voller emotionaler Tiefe mit Passagen improvisatorischer Freiheit.",
            "startDateTime": "11/23/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29075433075&a=774719&m=13738"
        },
        {
            "id": "e222",
            "title": "Tito & Tarantula - 8 Arms to hold you Tour 2021",
            "description": "Tito & Tarantula  - 8 ARMS TO HOLD YOU Tour 2020   Nach Ihrer erfolgreichen Albumtour in 2019 kehren Tito & Tarantula im Herbst 2021 f??r weitere Zusatztermine  nach Europa zur??ck.  ?8 ARMS TO HOLD YOU? f??ngt die Farben und Ger??che der W??ste ein, ist leidenschaftlich und romantisch. Zusammen mit Titos? elektrisierenden Vocals ein weiteres Meisterst??ck in seiner langen und erfolgreichen Karriere als Musiker, Komponist und Schauspieler.  Geboren in Mexico und als Sohn eines Fallenstellers in der Wildnis Alaskas aufgewachsen, begann Tito Larrivas Karriere in Los Angeles. Mit den PLUGZ und sp??ter den CRUZADOS nahm diese schnell Fahrt auf. Eine Top10 Single und ein Cover auf dem Billboard Magazin sp??ter wurde Larriva Teil der L.A. Musik- und Filmszene der 80er Jahre. Im Probenraum nebenan machten die Red Hot Chili Peppers ihre ersten Gehversuche. Emmylou Harris, Jeff Porcaro (der fr??h verstorbene TOTO Drummer) waren seine Nachbarn. Zeitgleich begann auch die Schauspielkarriere des ausgebildeten Ballett-T??nzers.  Nach dem Deb??t als ?Hammy? in der ?Pee-wee Herman Show? (1981) arbeitete er mit Patrick Swayze (Roadhouse), Johnny Depp (Once Upon A Time In Mexico), Antonio Banderas (Desperados 2), mit Mel Gibson und Milla Jovovic in Wim Wenders ? ?The Million Dollar Hotel?, David Byrne (True Stories), Cheech Marin (Born In East LA), in dem Oscar-pr??mierten Kurzfilm ?Session Man? sowie mit R. Rodriguez (Grindhouse). Tito Larriva schrieb Musik f??r ??ber 50 Filme (u.a. die Titelsongs f??r ?Machete? 2010 und ?Machete kills? 2013) und Fernsehserien.  Der Startschuss f??r Tito & Tarantula war Robert Rodriguez ? Angebot an ?From Dusk Till Dawn? (1995) mitzuarbeiten. Die legend??re Performance als Vampire Hausband der ?Titty Twister? Bar und der weltweite Erfolg des Films brachte die Band (als Support von Joe Cocker) erstmals nach Europa. Der Europa-Release des Deb??t Albums ?Tarantism? mit den Klassiker Songs aus ?From Dusk Till Dawn?, ?After Dark?, ?Angry Cockroaches?, sowie ?Strange face of love? folgte 1997. Diese Songs markieren den Beginn einer neuen ??ra amerikanischer Filmmusik und stellen Tito Larrivas au??ergew??hnliche F??higkeiten als S??nger und Komponist unter Beweis.  Tito & Tarantula entstand aus den w??chentlichen Sessions, die Larriva unter dem Namen Tito & Friends mit stets herausragenden Musikern der L.A. Szene veranstaltete. Neben den Gitarristen Steven Hufsteter von dem gesagt wird, er h??tte Bob Dylans Angebot, in seine Band einzusteigen abgelehnt, war die Band mit Hochkar??tern wie dem Gitarristen Peter Atanasoff (Norah Jones, Ricky Lee Jones) und den Drummern Alfredo Ortiz (Beastie Boys/Gogol Bordello) und Rafael Gayol (A-ha, Leonard Cohen) in Europa, Asien Nord und S??damerika auf Tournee. www.titoandtarantula.com www.facebook.com/TitoAndTarantulaOfficial",
            "startDateTime": "10/27/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29116421157&a=774719&m=13738"
        },
        {
            "id": "e223",
            "title": "Stunchile - Live 2021",
            "description": "`Erdige, bluesgetr??nkte Rock-Kracher treffen auf atmosph??rische, zeitlose Melodien mit Ohrwurm ? Charakter`. So k??nnte man den energiegeladenen Sound des brandneuen Rock Trio??s STUNCHILE aus dem S??den Deutschlands wohl am besten beschreiben.Obwohl weder die quirlige Frontfrau Leonie, noch Gitarrist Chris oder Drummer Fabi jemals W??sten Luft geschnuppert haben und das Trio urspr??nglich am Rande des Schwarzwald gro?? geworden ist, schaffen ihre Songs eine Atmosph??re, die einen schnurstracks auf die unendlichen Weiten kilometer-langer Highways mitten durch eine riesige W??stenlandschaft katapultiert. Erinnerungen an Tarantio??s `From Dusk till Dawn` gepaart mit ZZ Top??s `La Grange` werden wach, der `Southern Spirit` mit eine Prise Janis Joplin im Gep??ck. Zusammen Whiskey trinken mit Bands wie Wolfmother, Rival Sons oder auch mit gro??artigen Performerinnen ?? la Aretha Franklin.STUNCHILE verstehen es all diese Attribute zu vereinen und sie sich zu eigen zu machen, denn angestaubt klingt ihr m??chtiger Rocksound niemals. Moderner Rock mit einem guten Schuss Oldschoolness !!!!",
            "startDateTime": "6/19/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29137678675&a=774719&m=13738"
        },
        {
            "id": "e224",
            "title": "DOTA - Wir rufen Dich, Galaktika - Tour 2021",
            "description": "Die Berliner Band DOTA um die Musikerin Dota Kehr ver??ffentlicht ein neues Album. Aus feinsinnigen und vielschichten Texten stricken sie eing??ngige Popsongs, in denen Platz ist f??r sanfte Poesie, Politisches und Partystimmung, f??r Melancholisches und Albernes ? mit so m??helosen ??berg??ngen dazwischen, dass die Tragweite mancher Gedanken erst beim zweiten oder dritten H??ren einsickert.",
            "startDateTime": "12/3/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29164331719&a=774719&m=13738"
        },
        {
            "id": "e225",
            "title": "Die Udo J??rgens Story - Sein Leben, seine Liebe, seine Musik!",
            "description": "Packende Melodien, ein einzigartiger Charakter und ein unsterbliches Lebenswerk: Udo J??rgens begeisterte auf seinen Tourneen Millionen von Fans. Im Rahmen eines emotionalen Liederabends geht ?Die UDO J??RGENS Story? in diesem besonderen Jahr 2019 wieder auf Tour. Denn am 30. September w??re der Ausnahmek??nstler 85 Jahre alt geworden, am 21. Dezember j??hrt sich sein Todestag zum f??nften Mal. ??ber die Hommage an den Grandseigneur der deutschen Unterhaltungsmusik schw??rmt sogar Tochter Jenny J??rgens: ?Ein Muss f??r alle Udo-Fans!?.Der ??sterreicher, der 1966 den Grand Prix Eurovision de la Chanson gewann, feierte mit dem Lied ?Merci, Ch??rie? einen Welthit mit Hitparaden-Spitzenpositionen in ??ber 20 L??ndern. So wurde der Chansonnier zu einem der bedeutendsten Entertainer des 20. und fr??hen 21. Jahrhunderts. Mit mehr als 100 Millionen verkauften Tontr??gern und ??ber 50 ver??ffentlichten Musikalben war er einer der kommerziell erfolgreichsten m??nnlichen Solok??nstler der Welt. F??nf Jahre nach seinem Tod bietet sich mit ?Die UDO J??RGENS Story? f??r alle Fans die Gelegenheit, ihrem Idol noch einmal ganz nahe zu kommen. Der am??sante, kurzweilige und unterhaltsame Konzertabend wurde zusammengestellt von Gabriela Benesch, die im Jahr 2014 in Wien als beste Theaterschauspielerin des Jahres ausgezeichnet wurde. Der ausgebildete Pianist Alex Parker singt dabei die Werke des unvergessenen Schlagerbarden, als st??nde dieser pers??nlich auf der B??hne. Die musikalische Zeitreise beinhaltet alle gro??en Hits wie ?Mit 66 Jahren?, ?Griechischer Wein? und ?Ich War Noch Niemals In New York?. F??r den gleichnamigen Kinofilm durfte Parker sogar den Titelsong einsingen. Ganz im Stil des Entertainers begleitet er sich selbst am Klavier. Tochter Jenny J??rgens schw??rmte nach der Premiere von ?Die UDO J??RGENS Story?: ?Ein Muss f??r alle Udo-Fans!?Quelle: www.cofo.de",
            "startDateTime": "3/10/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=29201144259&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/0q6J5Ufk.jpeg"
        },
        {
            "id": "e226",
            "title": "Sophie Passmann - Komplett G??nsehaut",
            "description": "??Ich bin jetzt 27 Jahre alt und ich habe nur einen Lebenstraum: 28 Jahre alt werden.?? Blo?? nicht so werden, wie alle anderen um sich herum. Blo?? nicht so werden, wie man schon l??ngst ist. Blo?? schnell  Erwachsen  werden,  um  in  die  transzendentale  Form  des  Verkl??rens  eintauchen  zu  d??rfen,  die Jugend als ??die beste Zeit des Lebens?? zu feiern. Sophie Passmann teilt aus gegen alle, am verheerends-ten aber gegen sich selbst und ihresgleichen.  Dies  ist  kein  Memoir,  kein  Roman,  keine  Biographie,  es  ist:  literarischer  Selbsthass.  Das  finden  Sie anma??end? Genau das ist es und genau das will Sophie Passmann: sich anma??en, das zu tun, was sie tun m??chte. Komplett G??nsehaut einfach. Sophie Passmann ist Moderatorin und Autorin. Ihr Buch ?Alte Wei??e M??nner? war ein Bestseller, f??r die Musikbibliothek  von  KiWi  schrieb  sie  ??ber  Frank  Ocean.  Zu  beiden  B??chern  sind  die  H??rb??cher  als Autorinnenlesungen bei tacheles! erschienen. F??r das ZEITMagazin schreibt Sophie Passmann monatlich die  Kolumne  ?Alles  oder  Nichts?.  Ihr  Kultur-Podcast  ?Jubel  und  Krawall?  mit  Matthias  Kalle  erscheint w??chentlich bei audible. In der Zeit, die ??brig bleibt, redet sie auf Instagram ??ber Politik und auf Twitter zettelt sie Streit mit alten wei??en M??nnern an.",
            "startDateTime": "5/5/22 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29201148027&a=774719&m=13738"
        },
        {
            "id": "e227",
            "title": "King King - Live 2022",
            "description": "Keine Frage ? die Bluesrocker aus Glasgow schwimmen auf einer Erfolgswelle. King King haben dank ihres letzten Albums ?Exile & Grace? (V?? Herbst 2017) einen Quantensprung in ihrer Karriere gemacht. Das Album war auf Platz 31 der britischen Albumcharts und wurde von Classic Rock zum ?Blues Album of the Year? gekr??nt. Dazu kommen Top Pl??tze bei den iTunes und Amazon Charts ? King King sind nun definitiv im Mainstream angekommen. Auf ihren Lorbeeren ausruhen wollen sich Alan Nimmo (Vocals/Gitarre), Zander Greenshields (Bass), Andrew Scott (Drums) und Jonny Dyke (Orgel/Piano) aber keinesfalls. ?Wir sind noch nicht am Ziel. Wir wollen diese Band soweit bringen, wie wir k??nnen.?",
            "startDateTime": "10/12/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29201148147&a=774719&m=13738"
        },
        {
            "id": "e228",
            "title": "Patrick Salmen - Ekstase",
            "description": "Patrick Salmen zelebriert mit sonorer Stimme und staubtrockenem Humor die literarische Gattung der Kurzgeschichte wie kaum ein anderer. Mit feinem Gesp??r f??r liebenswerte und absurde Details geht es um nichts weniger als die Idiotie der Menschheit. Salmens gesammelte Anekdoten und Alltagsbeobachtungen reichen von bitterb??se bis zartbitter. Weil der Wahnsinn kein Ende nimmt, hat er seine Gedanken dar??ber bereits in mehreren Programmen und B??chern zusammengetragen. Und die tr??gt er jetzt vor. Jetzt kommt Ekstase ? und zwar w??rtlich. Sogar f??r Selbstversuche war sich Salmen nicht zu schade, um der Tragikomik unseres Alltags auf den Grund zu gehen. Nicht nur Hygge, Digital Detox und Influencer bekommen ihr Fett weg: Der Zuh??rer erh??lt auch ein wertvolles Live Coaching. Darauf gibt er sein Wort. Und sogar ganze S??tze.",
            "startDateTime": "10/20/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29222264577&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/nshs760a.jpeg"
        },
        {
            "id": "e229",
            "title": "el mago masin - 100 Jahre Liegestuhl",
            "description": "El Mago Masin hat einen F??nfjahresplan gemacht. Im Liegestuhl. Dabei ist er eingeschlafen. Um im Hamsterrad der Leistungsgesellschaft im Liegestuhl mithalten zu k??nnen, bleibt nur eins: Er braucht einen Privatsekret??r, eine neue Gitarre und jemanden, der seine Pflanze gie??t, wenn er auf Tour geht, um sein konziliantes Publikum mit neuen Liedern und konspirativen Erlebnissen zu am??sieren. Obwohl: Seine Zimmerpflanze neben ihm wirkt sattgr??n und kr??ftig. Seit Jahren goss er sie zuverl??ssig, bis er nun bemerkt, dass er sich um eine Plastikpflanze k??mmert.Eine sehr wichtige Zeitung bezeichnete El Mago Masin einst als Liedermacher mit Peter-Pan-Syndrom. Treffend, denn am Ende findet er ein Igelbaby und backt einen Pustekuchen. W??hrend drau??en die Welt immer komplexer wird, wollen wir ein untersch??tztes, klappbares M??belst??ck feiern, das f??r Ruhe und Gelassenheit steht. Eine funkelnde Hommage an den Liegestuhl. Denn im Liegestuhl sind wir alle gleich - gleich gl??cklich.Raus aus dem Alltag, rein in den kuriosen Kosmos von El Mago Masin!Mehr Infos: http://elmagomasin.de/Foto: Enrico Meyer",
            "startDateTime": "11/27/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29222264823&a=774719&m=13738"
        },
        {
            "id": "e230",
            "title": "Nils W??lker - GO Tour 2021",
            "description": "Preisgekr??nter Trompeter und Komponist Nils W??lker mit letztem Teil seiner Album-Trilogie ?GO? auf Deutschlandtournee Der Kreis schlie??t sich. Mit ?GO?, Nils W??lkers energischer Exkursion in die elegante Elektronik, komplettiert sich eine ??ber mindestens f??nf Jahre erlebte Albumtrilogie.F??r diese entf??hrte uns der charismatische Trompeter und Songschreiber, der 2019 zum vierten Mal mit dem German Jazz Award in Gold dekoriert wurde, mit dem ersten Teil ?UP? in den Pop und mit dem Nachfolger ?ON? zum HipHop. Das dritte und abschlie??ende Werk ?GO? (ab 4. Sep) wird noch im gleichen Herbst seine B??hnenfeuertaufe mit einer umfangreichen Deutschlandtournee begehen.Nils W??lkers zehntes Studioalbum ist zwar mit all den analogen Synthesizern, dem Arpeggiator, den organischen Loops und Beats ??maximal nicht live??, wie er selbst  sagt, besticht daf??r im Kontrast mit dem direktesten und dynamischsten Trompetenspiel jenseits seiner Livealben und Konzerte ? eine Lektion, die der 42-j??hrige ??gro??e Melodiker?? (Die Zeit) seinem 2019 erschienenen Livealbum ?Decade? verdankt. Produziert mit Ralf Christian Mayer (Clueso, Fanta 4) und komplett selbst komponiert, zeigt ?GO? die bisher extremste Seite des vielfach preisgekr??nten Musikers - eingespielt mit Mitgliedern seiner beliebten Liveband, dazu dem Wiener Keyboarder Albin Janoska (SOHN) und dem amerikanischen Trompeter Theo Croker im alles andere als sterilen Corona-Distanz-Duo ?Highline?.Klar, dass mit dem bew??hrten, druckvollen Bandsound auch die Liveumsetzung dieses Albums seine ganz besondere Magie entfalten wird, wovon man sich zum Jahresende ausgiebig ??berzeugen werden kann.",
            "startDateTime": "11/9/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29222268837&a=774719&m=13738"
        },
        {
            "id": "e231",
            "title": "Die St??tzen der Gesellschaft - Leseshow",
            "description": "Mit Fee, Frank Gl??tgen, Alex Burkhard und Sven KemmlerOb Henrik Ibsen diese Show im Sinn hatte, als er 1877 in seiner M??nchner Wohnung das gleichnamige Theaterst??ck schrieb? Man kann davon ausgehen! Und deshalb ??ben sich Fee, Frank Kl??tgen, Alex Burkhard und Sven Kemmler seit vielen Jahren mit gro??em Zuspruch im St??tzen der Gesellschaft. Optisch in den Zwanzigern und textlich immer brandneu und stilistisch vielf??ltig.Und das v??llig zurecht. Denn sind wir ehrlich: Es braucht ein paar tragende St??tzen in dem vor lauter Chirurgenpraxen und Anwaltskanzleien schon morschen Ger??st unserer geldigsten aller eher kleinen Weltst??dte. St??tzen, die alles versprechen und ab und zu sogar etwas halten, zum Beispiel die Gesellschaft. Und sei es auch nur die Spa??gesellschaft. Doch die Vier vergessen auch nicht die verdienten Menschen, die in der Vergangenheit st??tzten. Und so erwecken sie in jeder Show eine ehemalige St??tze unserer Stadt literarisch zum Leben. Ob ber??hmte Nasen wie K??stner, Rilke, Brecht und Thoma, oder zun??chst unbekanntere Namen wie Fanny zu Reventlow, Erich M??hsam, Muhammad Iqbal und besagter Henrik Ibsen ? sie alle leisten ihnen an den stets au??ergew??hnlichen Abenden Gesellschaft. Sven Kemmler ist regelm????ig im Vorderhaus zu sehen und Alex Burkhard war 2019 bei der Lesereihe ?unter sternen ? vorlesen im August? zu Gast.Mehr Infos: http://die-stuetzen.de/",
            "startDateTime": "11/26/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29222268891&a=774719&m=13738"
        },
        {
            "id": "e232",
            "title": "marotte Figurentheater - Der Gr??ffelo",
            "description": "Ein St??ck f??r Jung und Alt ab 4 Jahren**KUNST KOMMT VON KENNEN**Der gro??e Wald ist voller Gefahren. Da ist es gut, wenn man einen starken Freund hat. Und wenn man keinen hat, erfindet man sich eben einen. So wie die kleine Maus, die jedem, der sie fressen will, mit dem schrecklichen Gr??ffelo droht. Dabei gibt`s Gr??ffelos gar nicht. Oder doch?Mehr Infos: https://www.marotte-figurentheater.de/",
            "startDateTime": "11/15/21 10:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29275547763&a=774719&m=13738"
        },
        {
            "id": "e233",
            "title": "Jess Jochimsen - Meine Gedanken m??chte ich Manchmal nicht haben",
            "description": "Jess Jochimsen will raus aus seinem Gedankenkarussell. Zumindest f??r einenAbend. Und mal nachschauen, was die Pandemie ??brig gelassen hat ... Also machtder Freiburger Kabarettist und Autor Inventur im Kopf und sucht nach denGeschichten, die im Radau der letzten Zeit untergegangen sind.Jess Jochimsens neues Programm ist ein kabarettistischer Gedankenaustausch,eine fortlaufende Bestandsaufnahme der politischen Lage, ein Herantasten an dieZeitrechnung ?nach C.?.Zur??ckgelehnt und entschleunigt dreht Jess Jochimsen den notorischenRechthabern den Ton ab und beweist, was Satire alles sein darf: anr??hrend, klug,musikalisch und nicht zuletzt sehr lustig. Und zum guten Schluss zeigt erUrlaubsbilder. F??r Daheimgebliebene.",
            "startDateTime": "10/15/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29275547847&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/BkWP9NC3.jpeg"
        },
        {
            "id": "e234",
            "title": "Claudia Pichler - Eine Frau wei??blau",
            "description": "Am liebsten h??tte Claudia einfach ihre Ruhe. Doch weder in der Gro??stadt noch in l??ndlicher Idylle gelingt das: M??nchen, die Weltstadt mit Herzrhythmusst??rungen schwankt zwischen Baustellenl??rm, Boazn-Romantik, Gro??demo, Kultur-Happening und st??ndigem Warten auf die depperte S-Bahn. Und auch in der bayerisch-l??ndlichen Idylle tummeln sich die freizeitw??tigen Erlebnisjunkies, immer auf der Suche nach dem perfekten Foto. Und Claudia l??sst sich halt gern provozieren: von Menschen, die ihre H??flichkeit und Zur??ckhaltung schamlos ausnutzen, von Menschen - ach ge, sagen wir??s wie es ist - von M??nnern, die sie chronisch untersch??tzen und sich selbst pathologisch ??bersch??tzen. Dabei hat die echte M??nchnerin eh ihr eigens P??ckchen zu tragen: Ist sie doch seit Geburt zerrissen zwischen bayerischer Tradition und M??nchner Moderne. In Aubing zweisprachig aufgewachsen, dahoam Boarisch, outdoor Hochdeutsch. Eine Jugend zwischen Fredl Fesl und den ??rzten, Bierm??sl Blosn und Backstreet Boys, Dampfnudel und Calippo Cola. Bis heute dauert der Struggle an: Statt einer veritablen SchafkopfPartie legt sie sich lieber Tarot-Karten, statt ??pfel am n??chsten Obststandl zu kaufen, gibt sie lieber eine Bestellung beim Universum auf. Ihren bairischen Dialekt liebt sie, aber bei so manch ??bereifrigen Dialekt-Polizist stellen sich ihr die Nackenhaare auf. Bevor sie sich aufregt, weil jemandem ein ?Tsch??ss? entfleucht, sucht sie lieber nach den sch??nsten bairischen Komplimenten, weil geschimpft wird eh viel genug.So bahnt sich Claudia ihren Weg durch den Freistaat, beobachtet, schnappt auf oder manchmal ??ber und macht sich ihren ganz eigenen Reim auf ihr bayerisches Universum - humorvoll, charmant, nixschei??ert und mit dem ein oder andern Lied garniert.Mehr Infos: https://claudiapichler.com/Foto: Josepha und Markus",
            "startDateTime": "11/19/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29275548707&a=774719&m=13738"
        },
        {
            "id": "e235",
            "title": "Lauschelieder - Pfiffige Musik  f??r  kleine Ohren",
            "description": "F??r Kinder ab 3 JahrenMit Humor und Begeisterung bringen die vier Musiker*innen der Band Lauschelieder eine bunte Kinderliedermischung aus Musikstilen wie Jazz, Salsa oder Swing auf die B??hne. Das junge Publikum wird durch aktives Mitgestalten in das Konzert eingebunden und geht mit der Band auf eine kurzweilige musikalische Reise. Da wird Gorilla Rudi zum Rockstar, der Wanderb??r erz??hlt von seinen Abenteuern, und die Trolle entf??hren in die Welt der Fabelwesen.Es ist eindrucksvoll, wie sehr die eing??ngigen Lieder schon die Allerkleinsten gespannt zuh??ren lassen und zum Mitmachen animieren. Das musikalische Geh??r wird durch unkonventionelle Rhythmen, Taktwechsel und kreative Instrumentierungen wie nebenbei geschult. So gibt es neben dem Spa?? am Mitsingen und Tanzen immer wieder Neues zu erlauschen ? auch f??r gro??e Ohren.Mehr Infos: https://www.lauschelieder.de/",
            "startDateTime": "10/16/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29275548711&a=774719&m=13738"
        },
        {
            "id": "e236",
            "title": "Vagab??ndel Figurentheater - Der Papierflieger",
            "description": "Ein St??ck f??r Jung und Alt ab 5 Jahren**KUNST KOMMT VON KENNEN**Ein Figurentheater ??ber Einsamkeit, Freundschaft und Lebensfreude frei nach dem Bilderbuch ?Der Besuch?von Antje Damm. Erz??hlt wird von der ??lteren Dame Louise, die zur??ckgezogen in ihrer Wohnung lebt bis eines Tages ein Papierflieger in ihre graue Welt fliegt. Dies f??hrt sie mit dem Jungen Max zusammen, der ihre Welt auf den Kopf stellt und die Farbe in Louises Leben zur??ckbringt. Mehr Infos: https://www.figurentheater-vagabuendel.de/Foto: Jennifer Rohrbacher",
            "startDateTime": "10/20/21 10:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29275548715&a=774719&m=13738"
        },
        {
            "id": "e237",
            "title": "Jan Philipp Zymny  surREALIT??T",
            "description": "Wer w??rde es in Zeiten alternativer Fakten wagen die Wirklichkeit selbst zu kritisieren? In Zeiten, in denen die Menschen den Blick f??r die Realit??t immer mehr verlieren? In Zeiten, in denen man sich Esoterik und pseudowissenschaftlichen Theorien hingibt und wieder anf??ngt r??ckw??rts zu denken? Nur jemand, der gedanklich v??llig au??erhalb davon steht! Der junge K??nstler Jan Philipp Zymny pr??sentiert in seinem mittlerweile vierten abendf??llenden Soloprogramm unter dem Titel ?surREALIT??T? Betrachtung, Kritik und Verbesserungsvorschlag der Wirklichkeit, wobei er Stand Up, Kurzgeschichten, philosophische ??berlegungen und surreale Absurdit??ten der Bauart Nonsens wild, aber keines Falls planlos durchmischt. Klassischer Zymny eben. Ein Abend f??r alle, denen gew??hnliche Comedy zu doof, Philosophie zu anstrengend und die Realit??t zu langweilig ist. ?Der Autor greift die Sprache auf und mahnt an, dass sich echte politische Haltungen nicht auf ein Demonstrationsplakat schreiben lie??en. Dass er damit Ross und Reiter nennt, ohne Namen in den Mund zu nehmen, das ist ein h??chst eleganter Schachzug. ??berhaupt macht es gro??en Spa??, den zuweilen herrlich albernen Gedanken dieses K??nstlers zu lauschen: inhaltlich und vor allem sprachlich ?? Allgemeine Zeitung Mainzmehr Infos: https://zymny.tv/Foto: Fabian St??rtz",
            "startDateTime": "4/28/22 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29275548723&a=774719&m=13738"
        },
        {
            "id": "e238",
            "title": "Gogol & M??x - Concerto Humoroso",
            "description": "Gr????te Heiterkeit in Theaters??len und Konzerth??usern von den Niederlanden, Concertgebouw Amsterdam, bis ins spanische Hochgebirge, Festival de teatre Esterri d????neu, Pyren??en. Herzlich Willkommen in der herrlich grotesken und umwerfend komischen Welt der Konzertakrobaten.Was diese meisterlichen Komiker auf den Theaterb??hnen Europas darbieten, ist schlichtweg atemberaubend: Zwei prall gef??llte Stunden des Lachens und Staunens ??ber die akrobatische und musikalische Kunstfertigkeit und die schier unbegreifliche Instrumentenvielfalt.Und wenn im grandiosen ??Finale grande?? die Pianisten-Ballerina im rosafarbenen R??schenkleid auf filigranem Stahl balanciert, dann hat es den Anschein, als k??nne sich selbst die auf dem Klavier thronende Bachb??ste vor Lachen kaum mehr auf ihrem Sockel halten.mehr Infos: https://www.gogolmaex.de/Foto: Karin B??hler",
            "startDateTime": "12/29/21 19:30",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=29323556037&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/HcF9qw9M.jpeg"
        },
        {
            "id": "e239",
            "title": "ALEX & Joschi - Scherz mit Herz",
            "description": "Familienprogramm f??r alle ab 3 JahrenErleben sie die beiden Akrobatik-Komiker ALEX & Joschi in einer tollen Darbietung voller Lachen und Fr??hlichkeit. Die Gegens??tze von gro?? und klein, eingebildet und naiv, elegant und tollpatschig, verk??rpert durch die beiden, sorgen in rasch vorgef??hrten Szenen und Kunstst??cken immer wieder f??r komische Momente, die zu schallendem Gel??chter f??hren. Fiebern sie bei Akrobatik, Jonglage, Artistik, Phantasie und magischen Momenten so lange mit, bis Schwei?? und Lachtr??nen ?ie??en.Mehr Infos: http://akrobatik-clowns.de/",
            "startDateTime": "11/28/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29323557179&a=774719&m=13738"
        },
        {
            "id": "e240",
            "title": "Flohzirkus Orquestra - Musik, Clownerie und Mitmachspa??",
            "description": "F??r Kinder ab 3 JahrenDas Flohzirkus Orquestra ist bekannt f??r einen bunten, rhythmusbetonten Mix aus Reggae, Ska-, Chanson und Folkelementen. Die Lieder entf??hren ihr Publikum in imagin??re Welten u. a. des Zirkus, der Piraten sowie Tiere und interpretieren in eindrucksvollen Bildern zentrale Kinderthemen wie Zugeh??rigkeit, Identit??t, Streben nach Selbstbestimmung und Freude am Leben. Warum z.B. hat die Schlange Sue das Zirkusleben satt und will erst mal beim lispelnden S??ren einziehen. Oder wie k??nnen die Kinder der armen Anja Ameise helfen aus ihr einen Tausendf????ler zu machen? Wie kann es sein, dass ein tapferer Steuermann wasserscheu ist? Das Programm wird erg??nzt durch kurze clowneske Show-Einlagen, Zaubereien und Mitmach-Angeboten, die die Aufmerksamkeit der kleinen und gro??en Zuschauer*innen fesseln.Mehr Infos: https://flohzirkus-orquestra.jimdofree.com/",
            "startDateTime": "11/20/21 15:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29323558241&a=774719&m=13738"
        },
        {
            "id": "e241",
            "title": "Theatergeist Berlin - Das sch??nste Ei der Welt",
            "description": "Nach Helme Heine f??r Kinder ab 4 JahrenDrei H??hner haben ein gewaltiges Problem, das auch manche Menschen umtreibt. Wer blo?? ist die Sch??nste? P??nktchen hat ein toll gemustertes Federkleid, Latte schicke lange Beine und Feder einen prachtvollen Kamm. Der K??nig entscheidet: ?Sch??nheit kommt von innen!? und veranstaltet einen Wettbewerb: wer das sch??nste Ei legen kann, die solle die Sch??nste sein. Doch alsbald taucht die Frage auf: Was hei??t ??berhaupt ?sch??n?? Eine Geschichte ??ber den Wert des Einzelnen, seine Einzigartigkeit und eben: Sch??nheit! Mehr Infos: http://www.theatergeist.de/",
            "startDateTime": "11/21/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29323558243&a=774719&m=13738"
        },
        {
            "id": "e242",
            "title": "Husten - Tour 2022",
            "description": "Jetzt erst echt.Die Husten-Tour von 2020 und dann 2021 ist auf 2022 verschoben.Daf??r sind gleich ein paar Termine und St??dte hinzugekommen.Wir gehen also ins dritte Jahr Lampenfieber.Ach ja, bald gibt?s auch schon wieder neue Musik.Wir sehen uns, oder?2022!Husten sind Moses Schneider, Gisbert zu Knyphausen und der d??nne Mann.",
            "startDateTime": "10/6/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29389103243&a=774719&m=13738"
        },
        {
            "id": "e243",
            "title": "Lagwagon - Tour 2022",
            "description": "LAGWAGONLive 2022Lagwagon ist eine der wichtigsten Bands der SoCal-Punk-??ra der 90er-Jahre. Urspr??nglich Section 8 genannt, besteht Lagwagon zum Zeitpunkt ihres Deb??ts ?Duh? 1992 aus dem S??nger Joey Cape, den Gitarristen Chris Flippin und Shawn Dewey, Bassist Jesse Buglione und Schlagzeuger Derrick Plourde. Zwei Jahre sp??ter folgt das Album ?Thrashed? und 1995 bereits ?Hoss?. Plourde verl??sst die Band kurz danach und wird durch den ehemaligen Rich Kids On LSD-Schlagzeuger Dave Raun ersetzt. In der zweiten H??lfte der 90er-Jahre ist die Band weiter aktiv und ver??ffentlicht mit ?Double Plaidinum? und ?Let?s Talk About Feelings? zwei weitere Studioalben. Nach f??nf Jahren des Durchatmens versammeln sich Lagwagon erneut, um 2003 ?Let?s Talk About Leftovers? herauszubringen ? nach wie vor sind ihre Songs ebenso politisch wie pers??nlich.Anfang 2005 begeht der ehemalige Schlagzeuger Derrick Plourde Selbstmord, die Band widmet ihm das im selben Jahr erschienene Album ?Resolve?. ?Hang?, Lagwagons achtes Album, und das erste nach einer neunj??hrigen Pause, erscheint 2014 und ?Railer?, eine Scheibe, die sich wieder voll und ganz auf den Sound der Anfangsjahre besinnt, wird 2019 ver??ffentlicht. Bald, und zwar im Sommer 2022, ist Lagwagon, diese Band, deren T-Shirts nach wie vor auf etlichen Festivals auftauchen (egal, ob sie dort spielen oder nicht) wieder live zu erleben!",
            "startDateTime": "6/23/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29396083969&a=774719&m=13738"
        },
        {
            "id": "e244",
            "title": "Thomas Reis - Mit Abstand das Beste",
            "description": "Kracher, Knaller und KabarettDas Beste zum Schluss von Thomas ReisDas Sch??nste kommt zum Schluss: Ein kabarettistisches Feuerwerk der besonderenArt. Zum Jahresende l??sst es Thomas Reis dem Anlass entsprechend krachen undz??ndet seine Lieblingspointen des sich gen Ende neigenden Jahres. Das wird mitSicherheit ein Knaller zur ??berwindung der Jahresendzeitstimmung.Wer unter Festtagsmelancholie, Familienkater und Verdauungsproblemen leidet, der isthier richtig, wer mit seiner Weihnachtsplanung v??llig ??berfordert ist, erst recht. Jetztm??ssen Sie nicht mehr ??berlegen: Ach, was machen wir nur mit diesem Dezember?Kaufrausch? Gl??hwein? Zuckerschock? Glotzkoma, Couchkartoffeln oder Gruppensex?Nehmen Sie sich etwas vor. Schmunzeln, gr??beln und lachen Sie, bis die Uhrabgelaufen ist. Ein Kabarettabend des frivolen Intellekts wider den Mief derToleranzigkeit, voll satirischer B??ller, politisch, saftig, menschlich, komisch,philosophisch, vielleicht alphabetisch, aber mit Gewissheit stets unkorrekt und vielbunter als der tr??be Nieselregen vor der T??r. Ein Besuch im gut geheizten Theater ist injedem Fall besser als sich drau??en den Arsch abzufrieren.PS: Vor 30 Jahren nannte ihn die Schw??bische Zeitung: Eine Leuchtrakete amKleinkunsthimmel. Jetzt l??sst er?s wirklich krachen.",
            "startDateTime": "3/25/22 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29400842285&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/LdKdL75Q.jpeg"
        },
        {
            "id": "e245",
            "title": "Sulaiman Masomi - kunterbunt und farbenblind",
            "description": "Wissen Sie, warum die Menschen auf den alten Schwarz-Wei??-Fotos immer so ernst guckten? Nein? Nicht schlimm, denn Sulaiman Masomis neues Programm ?kunterbunt & farbenblind? beantwortet diese und andere noch nie gestellte Fragen. Wenn Sie schon immer wissen wollten, wie man als Ausl??nder eine Wohnung bekommt, ob man als K??nstler mehr Sex hat und warum Farbenblindheit eigentlich eine gute Sache sein kann, dann sind Sie bei ihm gut aufgehoben. Mit einer kunterbunten Mischung aus Slam Poetry, Musik, Comedy und Kabarett wandelt das preisgekr??nte Multitalent Masomi zwischen allen Genres und l??sst sich mit seiner stets humoristisch-feinsinnigen Art nicht in irgendeine Schublade packen. Dabei widmet sich der studierte Literaturwissenschaftler allen Aspekten der menschlichen Psyche und des allt??glichen Zusammenlebens in einer multikulturellen Welt. Masomi malt Bilder, in dem jedes Wort zum Pinselstrich eines facettenreichen Gem??ldes wird. Ein Bild, das Sie staunen und schenkelklopfend lachen l??sst, um sich direkt danach daran zu verschlucken.Mehr Infos: http://www.sulaiman.de/Foto: Marvin Ruppert",
            "startDateTime": "1/14/22 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29400843189&a=774719&m=13738"
        },
        {
            "id": "e246",
            "title": "JUNGE JUNGE! - Hut ab!",
            "description": "Hut ab!? ist der gewagte Mix aus erstaunlicher und mitrei??ender Zauberkunst und quirliger Comedy des Zauberduos JUNGE JUNGE!. Eine abwechslungsreiche Show irgendwo zwischen Revue und Reisefieber, Comedy und Zauberteppich ? on Tour direkt vorbei an Frau Antje aus Holland, Darth Vader und dem ber??hmten Glockenspiel von der sch??nen Kalinka.Fragen werden gel??st, ob Fl??tent??ne tats??chlich den Geist derartig beeinflussen, dass sich kleinste geistige Schwingungen in komplette Arien oder bekannte Opernmelodien in Magierhirnen umwandeln lassen. Was passiert, wenn Messer gez??ckt werden in Verbindung mit dem heimlichen Papierh??tchenspiel ? alles messerscharfe Statistik? Gibt es sie wirklich, die Erinnerung, wenn magische B??cher ihre Geheimnisse preisgeben und Sie in Ihre Vergangenheit reisen?Eine Show mit den richtigen Antworten. JUNGE JUNGE! ziehen alle Register der Zauberkunst und der guten Unterhaltung. Hut ab! f??r den Musik-Comedy-Zauber-Mix.",
            "startDateTime": "3/24/22 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29417420651&a=774719&m=13738"
        },
        {
            "id": "e247",
            "title": "J??rgen Becker - Die Ursache liegt in der Zukunft",
            "description": "So, da woll?n wir uns mal nen sch??nen Abend machen! Denn noch ist es ruhig. Aber jeder sp??rt: Das bleibt nicht so. Der Kapitalismus basiert auf unendlichem Wachstum. Doch wie soll das auf einem endlichen Planeten funktionieren?  Das Finale unseres fossilen Feuer werks kollabiert ausgerechnet mit einem China-Kracher. Selbst neoliberale ??konomen zucken mittlerweile schuldig mit den Schultern und sprechen von Marktversagen. ??kologie & ??konomie verwirbeln gewaltig unser Gewohnheitsrecht und unsere Nebenkostenabrechnung. Recken wir also die H??nde zum Heiz pilz und fahren nach der Party voll im SUV vor die Wand? J??rgen Becker entwickelt den optimalen Optimismus ohne Opiate und holt uns alle unter seine warme Decke. Dort wird genau recherchiert, was die Welt zusammenh??lt, wenn sie auseinander f??llt ? und wie es sich f??r alle so richtig rechnet, Sie jetzt zu retten. Sein Humor l??ftet durch, h??lt das Zeitfenster auf Kipp und macht den Chancen Avancen. Man geht nach Hause und denkt: Da geht noch was! www.juergen-becker-kabarettist.de, Foto: K??nstler/Agentur",
            "startDateTime": "12/11/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29417420699&a=774719&m=13738"
        },
        {
            "id": "e248",
            "title": "Matthias Egersd??rfer - Nachrichten aus dem Hinterhaus",
            "description": "Gehen sie durch die gro??e Eingangst??r des Mietshauses, dann geradeaus weiter durch das Tor. Jetzt stehen sie im Hinterhof, links neben ihnen die Abfalleimer, die riechen mal weniger, mal mehr. Schreiten sie am besten z??gig weiter, rechts herum, vorbei an der alte Kastanie, die ihre ??ste in das bisschen Himmel reckt. Gleich dahinter befindet sich der Eingang zum Hinterhaus. ??ber ein schmales Treppenhaus kommen Sie in den zweiten Stock hinauf. Vor Ihnen befindet sich nun die rote Eingangst??r. Dahinter haust der Egers mit der Frau. Treten Sie ein! Hinten in der Wohnung, da liegt er im Bett und tr??umt seine lustigen Nachrichten. Im Wohnzimmersessel sitze er und sch??ttelt den Kopf deswegen. Kommen Sie mit in die K??che, da hat er gerade ein K??sebrot gegessen, man kann den K??se noch riechen. Jetzt lehnt er sich zum K??chenfenster hinaus. Sie k??nnen ihm direkt ??ber die Schulter blicken. Man h??rt die alte Frau Schlitzbier aus dem Vorderhaus husten. Einen Stock darunter pl??rren die Bahulgenkinder und die Kindsmutter; es geht um die Feuerk??fer vom Bub, die im Bett herumlaufen, sie pl??rren so laut, dass einem schier die Synapsen aus dem Ohr herausfallen. Schnell schlie??t der Egersd??rfer das Fenster wieder und da hat er Sie entdeckt. Doch sie brauchen keine Angst zu haben, er tut ihnen nichts. Er kocht ihnen sogar einen Kaffee. Sie m??ssen sich nur zu ihm an den K??chentisch setzen und ihm zuh??ren und schon erz??hlt er Ihnen, was es mit dem Husten und den K??fern auf sich hat und welche Nachrichten aus dem Hinterhaus es noch gibt. Er ist ein guter Erz??hler und sie das perfekte Publikum.Mehr Infos: http://egers.deFoto: Stephan Minx",
            "startDateTime": "11/19/22 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29417421587&a=774719&m=13738"
        },
        {
            "id": "e249",
            "title": "Catastrophe Waitress - Live 2021",
            "description": "Eing??ngig, eigenwillig und selbstgemacht! Mit ihrem markanten zweistimmigen Gesang, Violine, Kontrabass, geschmeidigem Drum-Teppich und breit gef??chertem Keys-Sound hinterl??sst die Freiburger Band Catastrophe Waitress ihren ganz eigenen Eindruck. Es lohnt sich den Witz und die Raffinesse des Quintetts live zu erleben und durch ein reiches Retro-Indie-Folk-Pop\u0002Programm beschwingt in den Abend zu starten!",
            "startDateTime": "7/16/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29417422207&a=774719&m=13738"
        },
        {
            "id": "e250",
            "title": "Hammond Jazz Night - feat. Manfred Junker Organ Trio",
            "description": "Der Name ist Konzept: Die Freiburger Konzertreihe Hammond Jazz Night dreht sich rund um die legend??re Hammond B3 Orgel die mit ihrem unverwechselbaren Klang seit ??ber 60 Jahren im Jazz und den angrenzenden musikalischen Genres eine nicht mehr wegzudenkende Rolle spielt.Neben Bandformationen, bei denen dieser Sound zum festen Bestandteil geh??rt, stellt Gastgeber und Hammond Organist Thomas Bauser f??r die 12 Konzerte zwischen Oktober und M??rz regelm????ig neue Besetzungen mit nationalen und internationalen Musikern zusammen.Dem Zuh??rer bietet sich dabei die M??glichkeit die einzelnen Gastmusiker auch unabh??ngig ihrer festen Bandprojekte in teilweise v??llig neuem Kontext zu erleben, was durch ein jeweils speziell ausgesuchtes Programm weit ??ber den Charakter einer reinen Session hinausgeht.Die Liste der bisher bei der Hammond Jazz Night aufgetreten Musiker ist lang, neben namhaften US-amerikanischen Gr??ssen beinhaltet sie viele renomierte Namen der deutschen und vorwiegend auch der schweizerischen Jazzszene.",
            "startDateTime": "7/13/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29417422721&a=774719&m=13738"
        },
        {
            "id": "e251",
            "title": "R??UMEN - ein Spiel von Haben und Sein // 6+ Jahre",
            "description": "Um in einen wei??en Raum Ordnung zu bringen, muss erstmal etwas hinein. Vier Performer*innen und ein Musiker bringen Dinge mit: die sie brauchen? Die sie lieben? Die sie einfach nicht loswerden? Die sie glauben, haben zu m??ssen? Sie richten sich ein, sie verschieben, bauen um, f??llen auf. Sie verlieren den ??berblick und lieben das Chaos. Die Dinge geh??ren ihnen und sie geh??ren den Dingen. Ebenso die gro??en und kleinen Geschichten, die sich alle hinter diesen Dingen verstecken und darauf warten, erz??hlt zu werden. Womit anfangen??R??UMEN - ein Spiel von Haben und Sein ist eine performative, musikalische Auseinandersetzung mit den Dingen, die wir lieben und die uns beherrschen, ein Versuch ??ber unge??ffnete Schubladen und liebgewonnene Dinge. Das St??ck sucht nach neuen Ordnungen und befragt dabei stetig unsere Beziehung zum Besitz in einer kapitalistisch gepr??gten Welt. Pulk fiktion ist eine 2007 gegr??ndete Performancegruppe, zusammengesetzt aus einem heterogenen Pulk von K??nstler*innen aus verschiedensten Bereichen. Sie erarbeitet in unterschiedlichen Konstellationen Produktionen f??r Kinder, Jugendliche und Erwachsene und nimmt sich stets den Fragen und Lebensperspektiven junger Menschen an, die im Vorhinein in Interviews mit dem Zielpublikum erarbeitet werden. Die interdisziplin??ren Produktionen, meist St??ckentwicklungen, wurden auf diverse nationale und internationale Festivals eingeladen und mit zahlreichen Preisen ausgezeichnet.",
            "startDateTime": "6/27/21 16:00",
            "venueId": "v10",
            "offerURL": "https://www.awin1.com/pclick.php?p=29425480747&a=774719&m=13738"
        },
        {
            "id": "e252",
            "title": "Haydn: Die Sch??pfung - Chorkonzert",
            "startDateTime": "6/25/21 19:00",
            "venueId": "v27",
            "offerURL": "https://www.awin1.com/pclick.php?p=29433381331&a=774719&m=13738"
        },
        {
            "id": "e253",
            "title": "Sommer - Ein Liederabend",
            "startDateTime": "7/9/21 19:30",
            "venueId": "v27",
            "offerURL": "https://www.awin1.com/pclick.php?p=29433381345&a=774719&m=13738"
        },
        {
            "id": "e254",
            "title": "Bazilikonm??dchen",
            "description": "Eine orientalische Liebesgeschichte von Elsa Sophia von KamphoevenerBazilikon, nicht wahr, das wei?? ein jeder, das ist so eine kleine gr??ne Pflanze, die ??berall bei uns zum W??rzen verwendet wird...Mit harmlosen Worten setzt diese spannende, orientalische Geschichte ein. In ihrem Zentrum: eine junge, unerschrockene G??rtnerin, die das Herz ihres sch??nen, reichen, doch ein wenig einf??ltigen Nachbarn gwinnen will. Da werden trennende Hecken durchbohrt und reiche Mannsbilder aus Liebe zu stinkenden Fischverk??ufern, sch??ne Frauen verwandeln sich in grauenhaft schachspielende Tuaregs, ein Bey heiratet ein Erdloch, Schwangerschaften werden verheimlicht, einem schlafenden J??ngling der Hintern versohlt und die Braut auf ihrer Hochzeit geohrfeigt.....Eine zauberhafte Geschichte ??ber die verschlungenen Wege der Liebe, voll erstaunlicher Volten, weiblicher Klugheit und subtiler Vieldeutigkeit.Bea von Malchus ??ber sich selbst:Ich wurde am 1. Mai 1959 geboren, am Tag der Arbeit. Erfreulicherweise hie?? Arbeiten an diesem Tag immer nur eins: Bowle trinkend unterm Maibaum sitzen und mehr Freizeit fordern. Das hat mich gepr??gt. Bereits bei meiner Geburt zeigte ich Flagge: Stei??lage!Wenn ich als Kind mit dem Gartenschlauch einen Regenbogen  in die Sonne spritzte, wartete ich gespannt, ob jemand - Jesus vielleicht - mir ein Gehalt daf??r ??berwiese. In der Schule war ich gut, hatte oft Nasenbluten und durfte mich dann hinlegen.Meinen Freischwimmer errang ich, indem ich ins Becken kippte, dort 20 Minuten im ?toten Mann? verharrte und dann die notwendigen zwei Schwimmz??ge bis zur Leiter hinter mich brachte. Sp??ter wurde ich Eiskunstl??uferin. Fans behaupten, ich h??tte den dreifachen Toeloop einmal fast gestanden. Aber seien wir ehrlich, die sind geschmiert! Wie ich zu zwei Universit??tsabschl??ssen kam?! Ich wei?? es manchmal selber nicht mehr - ich glaube vor allem durch viel Schlaf.Danach ging ich zum Theater, als Regisseurin und Schauspielerin. Hm. Was soll ich sagen? Kino ist sch??ner!1996 begann ich Geschichten zu erz??hlen. Und das tu ich immer noch.Ich mag den Fr??hling und den Regen. Ich liebe den Duft alter Kirchen, Creme brulee ? und wenn Sportler vor Entt??uschung weinen. Meine Lieblingsfarben sind Borretschbl??ten-Blau und das Gelb vom ersten Zitronenfalter. Im Herbst koche ich Dinge ein, lache laut und bastle ein wenig. An Weihnachten leg ich mich ans Feuer und verspeise ein Reh. Am allerliebsten aber tu ich gar nichts.Hier sind meine 19 Orden!1 Freischwimmer, 2 Eistanz und 5 Eiskunstlaufdiplome, 1 gro??es und 1 kleines Latinum, 1 Segelschein, 1 Abitur, 1 Bronzepokal in lateinamerikanischen T??nzen, 2 Hochschulabschl??sse und 4 TheaterpreiseFoto: Marc Wilhelmhttps://www.beavonmalchus.de/",
            "startDateTime": "8/6/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442321289&a=774719&m=13738"
        },
        {
            "id": "e255",
            "title": "A Cappella Nacht",
            "description": "mit den Pop-Jazz-Ensembles 5Pac, TT&C, The Peers5Pac ist eine A-cappella-Gruppe, die sich im Jahre 2016 an der Musikhochschule Freiburg formierte und im Dezember 2016 erstmals ??ffentlich auftrat. Seither bestreitet das Ensemble zahlreiche regionale und internationale Konzerte, die sie beispielsweise im Jahr 2018 nach Fossano (I) zum renommierten A-cappella-Festival ?Vocalmente? f??hrten. Es folgten wegweisende Impulse durch Inspiratoren der Szene, wie z.B. Jan B??rger (Maybebop), Kim Nazarian (New York Voices) oder Peder Karlsson (Ex-Real Group). Regelm????ige Unterst??tzung erhielt die Gruppe dar??ber hinaus durch Julian Kn??rzer (Unduzo).Eine gro??e Zahl selbstgeschriebener Arrangements und Eigenkompositionen bildet das Repertoire der Gruppe, welches von Jazz ??ber Pop bis hin zu Hip-Hop ein breites Genrespektrum abdeckt. Clara Wolters ? SopranRaffaela Dilles ? MezzosopranDavid Brooke ? TenorSebastian Oberlin ? BaritonPaul Dre??ler ? Bass Website: https://5pac.jimdosite.com/ Seit 2016 begeistern TT&C mit einer herzlichen B??hnenshow und mitrei??enden Arrangements - ein junges A-cappella-Ensemble, das sich zum Ziel setzt, seinem Publikum mit vielseitigen Arrangements aus Pop, Rock und Jazz genauso viel Spa?? zu bereiten wie sich selbst! Der dynamische Sechserpack hat sich im Studium an der Musikhochschule Freiburg gefunden und befasst sich seither damit, das B??hnenprogramm durch zahlreiche selbst geschriebene Arrangements zu erweitern und sich dabei gemeinsam musikalisch weiterzuentwickeln. So sind die Sechs ??ber die vergangenen Jahre zu einer kleinen musikalischen Familie zusammengewachsen, die voller Vorfreude in ihre gemeinsame Zukunft blickt.Mirjam Hettich ? SopranJuliane Gehring ? MezzosopranTheresa Jensen ? AltDavid Brooke ? TenorFabian K??hn ? Bariton & BeatboxJoachim K??stler ? Bass Website: https://tassen-teller-and-co.jimdosite.com/ ?The Peers? hat sich 2019 aus Studierenden der Musikhochschule Freiburg gegr??ndet: Lorena Kempf, Eva Abzieher, Philippe Neumann und seit kurzer Zeit als Bass+Beatboxer Fabian K??hn. Wir schreiben unsere Arrangements selbst und bewegen uns stilistisch zwischen Pop/Rock.https://www.instagram.com/thepeers_acappellaFotos:5Pac: Dorothea H??rzTT&C: Steffen SchwendnerThe Peers: Tim Renkert",
            "startDateTime": "8/7/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442321305&a=774719&m=13738"
        },
        {
            "id": "e256",
            "title": "Operette sich wer kann",
            "description": "In ihrer neuen Produktion bringen die ?Sch??nen? ausufernde Lebenslust auf die B??hne. Mit ihrer bew??hrten, operettenversierten Handschrift entfalten sie ein unterhaltsames Spiel mit der leichten Muse.?Operette sich wer kann? spielt mit der Absurdit??t der Operette und pr??sentiert vorbehaltlos, was an gehobenem Unsinn und frechen Anz??glichkeiten in ihr steckt. So wird die Operette wieder zu dem, was sie urspr??nglich einmal war: eine vitale und vitalisierende Kunstform, die die Lage der Welt mit s??ffisanter Leichtigkeit kommentiert - gestern so wie heute.Zeitgem???? arrangiert sind die Ausschnitte aus der ?Blume von Hawaii? (Paul Abraham), dem ?Wei??en R??ssl? (Ralph Benatzky), der ?Fledermaus? (Johan Strau??) und anderen. Kalmans ?Czardasf??rstin? ist ebenso zu Gast wie die ?Lustige Witwe? von Franz Lehar.Serviert werden die Lieder und Szenen von drei charmanten jungen Musikern: Katrin Mayer (Sopran), Rub??n Olivares (Tenor) und Max Langer (Klavier) gehen mit Herzschmerz, Witz, Ironie und Kitsch auf eine musikalische Reise zwischen Waikiki und Vara?din, zwischen Berlin und Wien.Als schlagfertiger Operettenf??hrer mit dabei ist Klaus G??lker, langj??hriger Leiter der Redaktion Unterhaltung im SWR Studio Freiburg.Ein Programm zum Durchatmen, Entspannen und Genie??en!Leopold Kern (Konzeption)Herbert Wolfgang (Regie)Die Produktion wird gef??rdert im Impulsprogramm ?Kunst trotz Abstand? des Ministeriums f??r Wissenschaft, Forschung und Kunst Baden-W??rttemberg.www.dieschoenen.comFoto: Doreen Eich",
            "startDateTime": "6/18/21 20:00",
            "venueId": "v9",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442321469&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/z6elxrGJ.jpeg"
        },
        {
            "id": "e257",
            "title": "Rhapsody in Blue",
            "description": "?Wunderpianist? Kamenz und pocket orchestra freiburg mit Gershwins Klangfest ?Rhapsody in Blue? ? pr??ludiert von Mussorgskis tiefgr??ndigem Klavierzyklus ?Bilder einer Ausstellung?.Foto: Mat HennekEine Kooperation mit den Albert Konzerten",
            "startDateTime": "7/25/21 20:30",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442321483&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/Qw4jMALu.jpeg"
        },
        {
            "id": "e258",
            "title": "Trionfo dei Piffari",
            "description": "Stadtpfeifer im Europa der RenaissanceIm Europa der Renaissance bestanden die bekanntesten Musikensembles aus Blasmusikern der deutschsprachigen L??nder, die ihr Handwerk mit nach Italien, Spanien und Frankreich brachten. Professionelle Musiker mussten in der Lage sein, vorhandenes Notenmaterial mit eigenen Improvisationen zu verbinden und den Werken immer neue Formen zu verleihen. Gleichzeitig zu dieser Praxis entwickelten Komponisten wie Ludwig Senfl, Caspar Othmayer u.a. eine Mischung zwischen h??fischer und b??rgerlicher Musiktradition, die sich schnell verbreitete.Im Konzert ?Trionfo dei Piffari? begeben sich die Musiker der Capella de la Torre auf eine Reise durch das Europa der fr??hen Neuzeit, in dem sie verschiedene Musikstile und Traditionen dieser Zeit wieder neu erfahrbar machen. Die Technik der Improvisation ??ber vorgegebene Stimmen oder Lieds??tze spielt dabei eine besondere Rolle.Besetzung Capella de la Torre:Schalmei, Pommer, Posaune, DulzianSchlagzeug und Laute/ OrgelKatharina B??uml, LeitungFoto: Anna Kristina Bauerhttps://www.capella-de-la-torre.de/",
            "startDateTime": "8/22/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442321485&a=774719&m=13738"
        },
        {
            "id": "e259",
            "title": "Musik vom Goldenen Horn",
            "description": "Ein angenehmes und wohklingendes Stelldichein illustrer G??ste, die t??rkische Musik im Gep??ck haben.Annette Maye - Klarinetten Muhittin Temel  -  Kanun, GesangMurat Coskun  -  Perkussion, GesangG??ste:Malika Coskun - Perkussion, GesangYaschar Coskun - Perkussion, GesangFotos (c) Yoshi Toscani und Ellen SchmaussEine Kooperation mit Tamburi Mundi.",
            "startDateTime": "7/23/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442322017&a=774719&m=13738"
        },
        {
            "id": "e260",
            "title": "Ging hinaus ich in den Garten",
            "description": "Ein multisensorisches Lustwandeln durch die Welt der Kr??uter, Fr??chte und BlumenLeitung: Bernhard SchmidtFoto: Markus Br??cknerDas John Sheppard Ensemble Freiburg wurde 1995 von Johannes Tolle gegr??ndet. Es besteht aus ca. 32 S??ngerinnen und S??ngern, die in w??chentlichen Proben anspruchsvolle Vokalmusik erarbeiten. Die meisten Mitglieder des Ensembles sind Laien mit mehrj??hrigem Gesangsunterricht. Sie bringen neben der ambitionierten Leidenschaft f??r Musik und einer Neigung zu unkonventionellen Projekten die Bereitschaft mit, ihre musikalischen F??higkeiten konsequent auszubauen und aufeinander abzustimmen. Konzertreisen f??hrten u. a. in die Schweiz, nach Frankreich, Finnland und England.Gerne ist das Ensemble zu Gast bei Festivals und Musikreihen, wie z. B. beim Musikzauber Franken oder der Stunde der Kirchenmusik in Stuttgart oder Heilbronn.Im Herbst 2017 konnte sich das Ensemble beim Landeschorwettbewerb Baden-W??rttemberg in Bretten durch einen hervorragenden Erfolg f??r den Deutschen Chorwettbewerb qualifizieren.",
            "startDateTime": "7/24/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442322019&a=774719&m=13738"
        },
        {
            "id": "e261",
            "title": "900 Jahre sind genug.",
            "description": "Der gute Vorsatz f??r 2021 steht: Freiburg will sich feiern. Alle B??rgerinnen und B??rger sind aufgefordert mitzuhelfen. Jubil??umsberater sind in der ??kocity unterwegs und verbreiten gute und nachhaltige Laune. Das Jubil??um ist nicht mehr aufzuhalten. Aus diesem Grunde Matthias Deutschman sich entschlossen, sein 40-j??hriges B??hnenjubil??um ganz in den Dienst der 900-Jahr-Feierlichkeiten zu stellen und die Schwarzwaldmetropole mit einer Jubil??umsgala zu feiern. Wir verbeugen uns vor dieser Stadt, mal sehen, wie tief wir kommen ? Foto: Philipp v. DitfurthEine Kooperation mit dem Vorderhaus und der Stadt Freiburghttp://www.matthiasdeutschmann.de",
            "startDateTime": "7/30/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442322039&a=774719&m=13738"
        },
        {
            "id": "e262",
            "title": "Ot Azoy / Wie man so sagt ...",
            "description": "Mit spr??hendem Charme pr??sentieren die Yankeles eine emotionsgeladene Klangwelt, die zum Tanzen, Tr??umen und Schmunzeln anregt! Infiziert durch die mitrei??enden Kl??nge der jiddischen Musik und des bessarabischen Lebensgef??hls malen sie in Wort und Ton ?eine und tausend Musikgeschichten?.Charlotte Mercier - ViolineNico Hutter - KlarinetteKarin Fleck - AkkordeonPhilipp Gerhard - Kontrabass, SprecherPhilipp Kurzke - PercussionFoto: Rainer Muranyi",
            "startDateTime": "8/1/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442322043&a=774719&m=13738"
        },
        {
            "id": "e263",
            "title": "Robert Neumann",
            "description": "Pianistische Highlights aus (Fr??h)Klassik und (Sp??t)Romantik ? Robert Neumann, der hochbegabte Senkrechtstarter am Klavier, vereint sie zu einem Klavierabend der Extraklasse!Programm:Carl Philipp Emanuel Bach, Fantasia fis-Moll Wq 67Chopin, Sonate Nr. 2 b-Moll op. 35Haydn, Variationen f-Moll Hob. XVII/6Rachmaninow, Corelli-Variationen op. 42Eine Kooperation mit den Albert KonzertenFoto: Marco Borggrevehttp://www.neumann-robert.de",
            "startDateTime": "8/15/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442322059&a=774719&m=13738"
        },
        {
            "id": "e264",
            "title": "Grobe Schnitzer",
            "description": "Grobe Schnitzer sind aus dem Leben nicht wegzudenken. Gerade bei Instrumenten aus Holz. Wer hat eigentlich dem Kind die Blockfl??te geschenkt? Das ist eine Frage, die sich manche Eltern ein Leben lang stellen. Vor allem, wenn das Kind dann die Fl??te nicht mehr aus der Hand legt und zusammen mit anderen eine Band gr??ndet.Im neuen Programm von Wildes Holz geht es um genau diese groben Schnitzer, aus denen etwas Neues entsteht. Denn mit Fehlern muss man kreativ umgehen, sonst wird??s langweilig. Und selbst aus den gr??bsten Schnitzern kann etwas entstehen, wenn man Improvisationstalent und Humor hat. Und Instrumente aus Holz. Das ist klar. Virtuose akustische Live-Konzerte ohne Genre-Grenzen, spontane Komik und kraftvolles Spiel sind seit ??ber 20 Jahren die Markenzeichen von Wildes Holz. Im neuen Programm zeigen sie zudem ihr musikalisches Draufg??ngertum. Denn wer Fehler vermeidet, macht alles richtig. Aber wer Fehler kultiviert, der macht Musik. Oder eben grobe Schnitzer. Man muss sich halt auch mal was leisten.Wildes Holz wurde 1998 von dem Blockfl??tisten Tobias Reisige zusammen mit dem Kontrabassisten Markus Conrads und dem Gitarristen Anto Karaula gegr??ndet. Seitdem spielt die Band regelm????ig und abendf??llend auf allen Arten von Kleinkunstb??hnen und Festivals. Nach Antos tragischem Tod im Jahr 2018 gelang 2019 der Neuanfang mit dem Programm ?H??hen und Tiefen? und dem algerischen Gitarristen Djamel Laroussi. F??r ?Grobe Schnitzer? ist nun Johannes Behr an der Gitarre. Johannes ist urspr??nglich Jazzgitarrist, aber auch in allen anderen Musikstilen zu Hause und bereichert so die Experimentierfreude der Band.Foto: Harald Hoffmannwww.wildes-holz.de",
            "startDateTime": "8/27/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442322061&a=774719&m=13738"
        },
        {
            "id": "e265",
            "title": "Robert Schumann: Liederkreis",
            "description": "Der Zyklus ist mein Romantischstes?, so Robert Schumann 1840 ??ber seinen Liederkreis opus 39.Seine Vertonung der kongenialen Gedichte Joseph von Eichendorffs, darunter der ?Mondnacht?, ?Zwielicht?und ?sch??ne Fremde? machen den Liederkreis zu einem der bedeutendsten Liederzyklen der Musikgeschichte.Johannes Tolle studierte Dirigieren, Schul- und Kirchenmusik sowie Germanistik in Freiburg und Trossingen. Neben seinen Studien u.a. bei Robert Levin (Klavier), Manfred Schreier (Dirigieren) und Hans Michael Beuerle (Chorleitung) besuchte er zahlreiche Meisterkurse, u.a. bei Eric Ericsson, Max Pommer und John Eliot Gardiner.Seit 1993 ist Johannes Tolle k??nstlerischer Leiter der Musiktage Vaudreuille in S??dfrankreich, bei denen er 2013 Claudio Monteverdis Oper ?Orfeo? dirigierte und j??hrlich einw??chige Chor-Ateliers anbietet. Von 1997-2003 war Johannes Tolle Dirigent der Knabenkantorei Basel. 1997 gr??ndete er das John-Sheppard-Ensemble, das er bis 2012 leitete. Im Jahr 2000 wurde er zum k??nstlerischen Leiter des Konzertchores Cantate Basel gew??hlt, den er bis 2007 dirigierte. Mit diesen Ensembles realisiert er ein vom 16.-21. Jahrhundert reichendes Spektrum von Vokalmusik, in regelm????iger Zusammenarbeit mit profilierten Instrumentalensembles wie dem Kammerorchester Basel, dem Barockorchester Capriccio Basel, Les Cornets Noirs und dem pocket orchestra Freiburg. Engagements beim WDR-Rundfunkchor, dem Theater Basel, dem Balthasar-Neumann-Chor und den Neuen Vocalsolisten Stuttgart erg??nzen seine vielf??ltigen musikalischen Aktivit??ten.Johannes Tolle ist auch als Pianist und Liedbegleiter gefragt, wie bei Recitals mit Tobias Berndt, Nuria Rial oder der argentinischen Mezzosopranistin Marisa Martins.Johannes Tolle ist Gr??nder und Gesch??ftsf??hrer der Reservix GmbH. Der geb??rtige Berliner Tobias Berndt begann seine musikalische Ausbildung im Dresdner Kreuzchor. Er studierte bei Hermann Christian Polster in Leipzig und setzte seine Ausbildung bei Rudolf Piernay in Mannheim fort. Zu seinen Lehrern geh??ren au??erdem Dietrich Fischer-Dieskau, Thomas Quasthoff, Wolfram Rieger, Norman Shetler und Irwin Gage.Ausgezeichnet mit mehreren Stipendien gewann Tobias Berndt den Wettbewerb Das Lied ? International Song Competition in Berlin, den Internationalen Johannes-Brahms-Wettbewerbes in P??rtschach und den Cantilena Gesangswettbewerbes in Bayreuth. Zudem wurde er Preistr??ger beim Bundeswettbewerb Gesang Berlin, beim internationalen Wettbewerb f??r Liedkunst der Hugo-Wolf-Akademie in Stuttgart, bei der internationalen Sommerakademie des Mozarteums in Salzburg, beim Internationalen Wettbewerb Franz Schubert und die Musik der Moderne in Graz und beim Internationalen Schubert Wettbewerb in Dortmund.Als Konzerts??nger hat sich Tobias Berndt mittlerweile weit ??ber die Landesgrenzen hinaus etabliert. In j??ngster Zeit arbeitete er mit Dirigenten wie Hans Christoph Rademann, Philippe Herreweghe, Helmuth Rilling, Christoph Spering, Michael Sanderling, Andrey Boreyko, Teodor Currentzis, Joshard Daus, Enoch zu Guttenberg und Ludwig G??ttler und sang Konzerte in der Berliner und K??lner Philharmonie, der Tonhalle in Z??rich und in D??sseldorf, dem Concertgebouw Amsterdam, im Leipziger Gewandhaus und im Herkulessaal M??nchen. Weiterhin gastierte Tobias Berndt bei bedeutenden Festivals wie dem Prager Fr??hling, dem Festival de la Chaise-Dieu, dem Musikfest Stuttgart und dem Herrenchiemsee.Foto: Baschi Bender",
            "startDateTime": "8/29/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442322063&a=774719&m=13738"
        },
        {
            "id": "e266",
            "title": "bass solo",
            "description": "Deutschlands f??hrender Jazzbassist legt ein reines Soloprogramm vor. Kein Netz, kein doppelter Boden. Ilg macht den Kontrabass erfassbar und begreifbar.?Ich wei?? nicht, ob ich Jazzmusiker geworden w??re, wenn es den Kontrabass nicht g??be.? Kann man seinem Instrument eine sch??nere Liebeserkl??rung unterbreiten?Der Freiburger Bassist Dieter Ilg gilt seit Jahrzehnten als absolut zuverl??ssiger Begleiter sowie als erfinderische Pers??nlichkeit mit eigener Handschrift des europ??ischen Jazz. Wenn er sich allein mit seinem Kontrabass vor sein Publikum stellt, verzichtet er auf Loops, Pedale, Effektger??te und andere M??tzchen. Selbst der Bogen bleibt zumeist auf dem Bassverst??rker liegen. Stattdessen schl??gt sein Soloprogramm einen Bogen ??ber seine Erfahrungen der letzten 35 Jahre.Dieter Ilg spielt Eigenkompositionen, erweist seinem langj??hrigen Duopartner Charlie Mariano seine Reverenz, transformiert eine Arie aus der Oper Rigoletto, streift ein paar Standards und tanzt ??ber deutsche und koreanische Volkslieder. Seine Programmatik fasst er mit einer ganz einfachen Formel zusammen: Die pure Lust am Kontrabass.Dieter Ilg, der mit seinem Instrument buchst??blich Hunderten von Jazzmusikern den R??cken gest??rkt und in jeder nur denkbaren Konstellation gespielt hat, g??nnt sich und seinem Publikum den Luxus, sich mal ganz auf sich allein zu konzentrieren.?Wenn Ilg seinem Standbass weich flie??ende, singendmelodi??se Kl??nge entlockt, ??ber einem Ton minutenlang improvisiert oder die Finger impulsiv auf die dicken Saiten niedergehen l??sst, ? dann gehen manchem Zuh??rer die Augen ob der hohen Virtuosit??t und das Herz ob der atemberaubenden Intensit??t des Dargebotenen auf.?Neue Osnabr??cker Zeitunghttps://dieterilg.de/Foto: Till Br??nner",
            "startDateTime": "9/4/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29446580025&a=774719&m=13738"
        },
        {
            "id": "e267",
            "title": "Folk Songs",
            "description": "Norwegische Balladen und Volkslieder in neuen, zeitlosen Arrangements, untermalt von den T??nen der Hardanger fiddle, der Shrutibox und Glockenst??ben.Anna Maria FrimanLinn Andrea FuglsethJorunn Lovise HusanEs ist eine ebenso faszinierende wie einzigartige Klangwelt, in der sich die virtuosen S??ngerinnen des Trio Medi??val bewegen. Das 1997 in Oslo gegr??ndete Vokalensemble hat sich auf drei klar um-rissene Repertoirebereiche spezialisiert: zum einen Eigenbearbeitungen mittelal-terlicher Balladen und Lieder aus Norwegen, zum anderen polyphone, f??r das Ensemble arrangierte mittelalterliche Musik aus England, Frankreich und Italien, und schlie??lich zeitge-n??ssische Werke, von denen viele eigens f??r das Ensemble komponiert wurden. Seit einigen Jahren arbeitet das Trio au??erdem verst??rkt mit Musikern und Ensembles der Jazz- und World-Szene wie Rolf Lislevand, Nils ??kland, Sinikka Langeland, Arve Henriksen oder dem Mats Eilertsen Trio zusammen und l??sst dabei nochmals neuartige Klangwelten entstehen.Foto: Ingvil Skeie Ljoneshttps://www.triomediaeval.no/",
            "startDateTime": "9/5/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29446580027&a=774719&m=13738"
        },
        {
            "id": "e268",
            "title": "Philipp Scharrenberg - Realit??t f??r Quereinsteiger",
            "description": "VOR DEM THEATERVERGN??GEN EMPFEHLEN WIR:SPEISEN IM SCHARFRICHTERRESTAURANT ODER IM ROMANTISCHEN ARKADENINNENHOF. MONTAG BIS SAMSTAG AB 17 UHRTISCHRESERVIERUNG ERBETEN UNTER 0851 - 35 900Foto: Pierre JarawanF??hlen auch Sie sich, als fehlten Ihnen die n??tigen Qualifikationen f??r dieses Leben? Hat man auch Sie nie auf die Existenz vorbereitet? W??nschen Sie sich einen neuen Blick auf Dinge, die Sie eh nicht ??ndern k??nnen? Dann kann ich Ihnen auch nicht helfen.Immer wieder ist die Rede von der ?Realit??t?. Aber was ist das eigentlich, und wie kommt man dahin? Wir leben heute in der Glitzerwelt des Organisierten Verbrauchens, im sch??tzenden CompUterus der Filterblase, unter einer von Algorithmen gestrickten Flickendecke aus Fakt und Fake. ??berall ? nur nicht in der Realit??t. Das l??sst sich ??ndern.In diesem kleinen Pers??nlichkeitscrash-Kurs der VHS (Vers-Humor-Schmiede) legt der preisgekr??nte Kabarettist und B??hnendichter Philipp Scharrenberg die Scheuklappen ab, um hinter den scho(e)nenden Schleier zu schauen. Mit quirliger Kreativit??t und sprachverspielt beweist er als Realit??tstrainer, wie komisch und erfrischend es sein kann, den nackten Tatsachen ins Auge zu sehen, bis sie err??ten. Daf??r reimt, rappt, singt, liest und erz??hlt er, bis sich Tacheles und Klartext ?Na, dann gute Nacht? sagen. Ein bissig-heiterer Realitycheck f??r alle, die sich an ihrem Weltbild sattgesehen haben!??brigens, kennen Sie Schr??dingers Katze? Die, die in einer Box sitzt und von der man nicht wei??, ob sie tot ist oder lebendig ? bis man hineinschaut? So ist das auch mit Kleinkunstprogrammen: Man wei?? nie, wie sie sind, bis man drin war. Schr??dingers Kabarett. Also bis bald.www.philippscharrenberg.com",
            "startDateTime": "12/17/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478182329&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/eIo3xM4T.jpeg"
        },
        {
            "id": "e269",
            "title": "marotte Figurentheater - Der Kleine K??nig feiert Weihnachten",
            "description": "Nach den Geschichten von Hedwig Munck f??r Kinder 3 JahrenFr??hliche Weihnachten, kleiner K??nig!Der kleine K??nig kann es kaum erwarten, bis er das letzte T??rchen ??ffnen darf.Doch bis dahin gibt es noch viel zu tun: Pl??tzchen backen, Geschenke einwickeln, rodeln.Rodeln? Dann ist es endlich soweit ? diesmal wird der Heilige Abend ein ganz besonderes Fest ?Mehr Infos: http://marotte-figurentheater.de",
            "startDateTime": "12/19/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478182331&a=774719&m=13738"
        },
        {
            "id": "e270",
            "title": "Philipp Weber - KI: K??nstliche Idioten!",
            "description": "Der Homo digitalis und seine analogen AffenGestern ist das Heute von morgen, richtig. Aber wie schnell ist heute das Morgen von gestern? Der Mensch rast in die Zukunft: Digitalisierung, Gentechnik, K??nstliche Intelligenz! Doch wo ist die Zeitmaschine, die saubere Fusionsenergie, das Bier zum Downloaden? Wird der Mensch durch Maschinen ersetzt ? oder befreit? Kommt das ?Ende der Arbeit?? Super, dann haben wir endlich Zeit f??r was Sinnvolles! Aber wann h??tte der Mensch jemals was Sinnvolles gemacht, nur weil er daf??r Zeit hat? Doch es gibt Hoffnung! Denn in der Zukunft wartet jemand auf Sie: Philipp Weber. Denn das wichtigste R??stzeug f??r alles Kommende war, ist und wird immer sein: der Humor!",
            "startDateTime": "12/12/21 19:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478183121&a=774719&m=13738"
        },
        {
            "id": "e271",
            "title": "ANTILOPEN GANG",
            "description": "?Abbruch Abbruch? ist der vieldeutige Titel des dritten Albums der Antilopen Gang, mit dem Danger Dan, Koljah und Panik Panzer ein beeindruckendes Manifest der R??ckkehr zur Realit??t im Hip-Hop gelungen ist. Seit der Ver??ffentlichung ihres Deb??ts ?Aversion? im Jahr 2014 hat sich die Antilopen Gang Schritt f??r Schritt ein eigenes Freigehege erschaffen und sich dort jeden Wunsch erf??llt, der auf ihrer Bucketlist stand: Von der eigenen Kunst leben zu k??nnen, m??glichst viele Konzerte auf riesigen B??hnen zu spielen, durch Shitstorms zu waten, Punk komplett neu zu erfinden und danach wieder zu beerdigen, sich ausgiebig zu streiten.So steht nun das dritte Antilopen-Album an der Schwelle zu einem neuen Jahrzehnt f??r nichts weniger als eine emblematisch neue Lesart der Tradition urbaner Musik!",
            "startDateTime": "4/12/22 20:00",
            "venueId": "v12",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478183449&a=774719&m=13738"
        },
        {
            "id": "e272",
            "title": "Thomas Reis - Kracher, Knaller, Kabarett",
            "description": "Das Beste zum SchlussZum Jahreswechsel l??sst es einer unserer Lieblingskabarettisten, der Wahl-Freiburger Thomas Reis, dem Anlass entsprechend krachen und z??ndet erneut seine Lieblingspointen exklusiv im Vorderhaus.Sie erwartet ein Kabarettabend des frivolen Intellekts wider den Mief der Toleranzigkeit, voll satirischer B??ller, politisch, saftig, menschlich, komisch, philosophisch, aber mit Gewissheit stets unkorrekt.??berlegen Sie nicht lange und kaufen sie Tickets f??r einen Abend, der viel bunter als der Silvesterhimmel vor der T??r sein wird, den Sie ??brigens nach Ende der Veranstaltung immer noch sehen k??nnen, ohne sich vorher die F????e platt zu stehen und den Arsch abzufrieren.Im Fr??hjahr 2020 wurde Thomas Reis mit dem Ehrenpreis des Kleinkunstpreises des Landes Baden-W??rttemberg f??r sein (bisheriges) Gesamtwerk ausgezeichnet. Mehr Infos: http://thomasreis.de/Foto: Dominic Reichenbach",
            "startDateTime": "12/31/21 17:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478184127&a=774719&m=13738"
        },
        {
            "id": "e273",
            "title": "Theater mit der 13 ? Marias kleiner Esel",
            "description": "Eine Weihnachtsgeschichte nach Gunhild Sehlin f??r Kinder ab 4 Jahren**KUNST KOMMT VON KENNEN**Es gab viele Esel in Nazareth. Alles flei??ige Arbeitstiere. Nur ein Esel war faul und bockig genauso wie sein Knecht. Darum war er schmutzig und alle lachten ihn aus. Nur Maria liebte den kleinen Esel und kraulte ihn trotzdem.Eines Tages erlie?? der Kaiser den Befehl: Alle sollten sich in der Stadt ihrer V??ter z??hlen lassen! So mussten Josef und Maria von Nazareth nach Bethlehem reisen, wo doch Maria bald ihr Kindlein bekommen sollte. Josef wollte f??r die Reise einen Esel kaufen, doch die waren teuer. Schlie??lich bekam er nur den schmutzigen, bockigen Esel. Josef wunderte sich, wie sehr sich Maria ??ber das Tier freute. Und auch alle anderen Tiere im Stall nahmen es gut auf. Wie h??bsch war das Eselchen, als Maria es striegelte. Und bald sollte es ihr Helfer. und Besch??tzer werden! Mehr Infos: http://www.theater-mit-der-13.de",
            "startDateTime": "12/15/21 10:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478184131&a=774719&m=13738"
        },
        {
            "id": "e274",
            "title": "Voodoo J??rgens - Bummerl Tour 2021",
            "description": "Ohne Schm??h: Als Ende 2016 ?Ansa Woar? das Deb??talbum von Voodoo J??rgens erschien, bekam es durch die Bank Lobeshymnen und Top-Bewertungen; gleichzeitig schrieben wohlwollende Medien wie der Musikexpress im aufmunternden Ton, dass diese Musik nun aber wirklich zu ??sterreichisch, zu raunzend, zu fordernd, letztlich auch zu ?leiwand? sei, um von den goldenen Schallplatten der rund um diese Zeit durchstartenden und sehr breitenwirksamen ??sterreichischen Erfolgs-Acts zu tr??umen. Es kam anders: ?Ansa Woar? stieg ? als wohl erstes ??sterreichisches Indie-Album ??berhaupt ? von null auf eins in die Verkaufscharts ein, holte im Rekordtempo Gold-Status und sorgte selbst beim deutschen Nachbarn f??r volle Hallen und klingelnde Kassen; und das eben ohne Anbiederung an Erfolgsformeln, ohne das Schielen auf Verkaufszahlen und H??rgewohnheiten, sondern durch klassische Mundpropaganda basierend auf dem Charisma eines beinahe gescheiterten und f??nf vor zw??lf aus dem Underground nach oben gesp??lten Hallodris.",
            "startDateTime": "10/10/21 20:00",
            "venueId": "v12",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478184157&a=774719&m=13738"
        },
        {
            "id": "e275",
            "title": "CARROUSEL - CINQ Tour 2021/2022",
            "description": "CARROUSEL kehren mit einem neuen Album endlich auf die B??hne zur??ck (V??: 03.09.21 | Jazzhaus Records). Weil dem charmanten Duo der Kontakt zum Publikum sehr gefehlt hat, steht der Herbst 2021 sowie das Fr??hjahr 2021 ganz im Zeichen von neuer Musik und ausgiebigem Touren samt Band. Die vielf??ltigen und dynamischen Songs klingen modern, ihr Stil und ihre Melodien sind stets poppig und die franz??sischen Texte sind voller Poesie. Im Mittelpunkt steht die Energie und die Live Emotionen mit dem Publikum - eine Einladung zum Tr??umen, Mitsingen und Tanzen, um die Zeit zu vergessen. Voil??!",
            "startDateTime": "1/25/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478184195&a=774719&m=13738"
        },
        {
            "id": "e276",
            "title": "Wildes Holz - Grobe Schnitzer",
            "description": "In Goslar sind sie l??ngst keine Unbekannten mehr und k??nnen sich vor Ort ??ber eine gro??e Fan-Base freuen. Zuletzt haben sie das Kraftwerk im Doppel mit den Zucchini Sistaz gerockt. Die Band Wildes Holz zeigt seit ??ber 20 Jahren, dass eine Blockfl??te im Grunde ein Rock-Instrument ist, dessen Gefahr f??r Minderj??hrige nicht zu untersch??tzen ist. F??r das neue Programm ?grobe Schnitzer? wird der Staffelstab des Gitarrenparts an Johannes Behr weitergegeben. Eigentlich sollte die Premiere im April im Ebertbad stattfinden, diese wird aber wegen der Corona-Pandemie erst am 28.9.2021 sein.Im neuen Programm von Wildes Holz geht es um diese groben Schnitzer, aus denen etwas Neues entsteht. Denn mit Fehlern muss man kreativ umgehen, sonst wird ?s langweilig. Und selbst aus den gr??bsten Schnitzern kann etwas entstehen, wenn man Improvisationstalent und Humor hat. Und Instrumente aus Holz. Das ist klar.Virtuose akustische Live-Konzerte ohne Genre-Grenzen, spontane Komik und kraftvolles Spiel sind seit ??ber 20 Jahren die Markenzeichen von Wildes Holz. Im neuen Programm zeigen sie zudem ihr musikalisches Draufg??ngertum. Denn wer Fehler vermeidet, macht alles richtig. Aber wer Fehler kultiviert, der macht Musik. Oder eben grobe Schnitzer. Man muss sich halt auch mal was leisten.",
            "startDateTime": "11/20/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29503848321&a=774719&m=13738"
        },
        {
            "id": "e277",
            "title": "Souvenir de Florence - Streichsextette von Tschaikowsky & Dvorak",
            "description": "Frielinghaus EnsembleStreichsextette Dvo???k & TschaikowskyAnton??n Dvo???k Streichsextett A-Dur, op. 48Peter Iljitsch Tschaikowsky Streichsextett d-Moll, op. 70 ??Souvenir de Florence??Frielinghaus EnsembleGustav Frielinghaus, Leonard Fu, Violine | Alejandro Regueira Caumel,S??o Soulez Larivi??re, Viola | Oliver L??onard, Jakob Schall, VioloncelloVon der Elphi ins Stadthaus:Seit der Er??ffnungssaison ist das Frielinghaus Ensemble regelm??ssig in der Elbphilharmonie sowie in weiteren deutschen Konzerts??len zu Gast. ??ber die gerade ver??ffentlichte CD urteilte die S??ddeutsche Zeitung mit ?Leidenschaftlich und zart? und Radio Bremen sprach von ?unheimlicher Power und ganz viel Lust am Musikmachen?.Erweitert man ein Streichquartett um eine Bratsche und ein Cello, ver??ndert sich auch der Klang. Er wird dunkler, dichter, bisweilen fast sinfonisch. Kein Wunder, dass die Romantiker das Streichsextett besonders liebten. Die beiden Werke des Konzertabends kommen wie klingende Selbstportr??ts ihrer Sch??pfer daher: Das ??bersch??umend musikantische, vom b??hmischen Volkston gepr??gte Sextett op. 48 von Dvo???k und ??Souvenir de Florence?? von Tschaikowsky, das der russische Komponist in Erinnerung an einen Aufenthalt in der toskanischen Stadt schrieb und dessen schwelgerisches Melos von einer f??r ihn ungew??hnlichen Heiterkeit gepr??gt ist.Jetzt ist das Ensemble um den Hamburger Geiger Gustav Frielinghaus, ebenfalls Primarius des Amaryllis Quartetts, live im Stadthaus Ulm zu erleben. Die S??dwestpresse beschrieb das Spiel des Frielinghaus Ensembles als ?leidenschaftsvoll? und ?mit vollem Risiko?.",
            "startDateTime": "6/22/21 20:00",
            "venueId": "v24",
            "offerURL": "https://www.awin1.com/pclick.php?p=29514548829&a=774719&m=13738"
        },
        {
            "id": "e278",
            "title": "Klangbl??ten im japanischen Garten - Kurzkonzert mit traditioneller und komponierter japanischer Musik",
            "description": "1990 ??bergab die Partnerstadt Matsuyama ein gro??artiges Geschenk an die B??rger Freiburgs: den japanischen Garten am Seepark. Seither haben wir einen zauberhaften Ort der Ruhe und sp??ren hier die Naturverbundenheit japanischer Kultur. Mehrklang hat f??r diesen Ort ein besonderes Programm mit traditioneller und komponierter japanischer Musik entwickelt: eine musikalische Verbeugung und Ausdruck der Wertsch??tzung f??r diesen Garten. Das Konzert pr??sentiert die japanische Akaishi Daiko-Trommelgruppe, traditionelle Gagaku-Instrumente, sowie die Komposition ?Raintree? f??r 2 Marimbas und Vibraphon von Toru Takemitsu und ein Werk f??r Akkordeon und Blockfl??te von Toschio Hosokawa.",
            "startDateTime": "6/20/21 16:00",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=29524429341&a=774719&m=13738"
        },
        {
            "id": "e279",
            "title": "B??hmische D??rfer - Cargo-Theater",
            "description": "Die neue Theaterproduktion ?B??hmische D??rfer? des Cargo-Theater ist eine autobiografische Auseinandersetzung der beiden Geschwister Carla und Leon Wierer mit dem Leben ihres Gro??vaters. Dieser k??mpfte im Zweiten Weltkrieg als Soldat in Stalingrad. Was k??nnte ihnen der junge Mann, den sie nur von einem Foto kennen, alles vererbt haben? Einen bestimmten Gang, eine besondere Art zu denken? Alptr??ume, oder den Granatsplitter, den er aus Stalingrad in seiner Schulter mitbrachte?",
            "startDateTime": "6/17/21 20:30",
            "venueId": "v12",
            "offerURL": "https://www.awin1.com/pclick.php?p=29524429447&a=774719&m=13738"
        },
        {
            "id": "e280",
            "title": "FREISTIL Dinner-Krimi Mord am Filmset im Dattler/ Freiburg - Mit Vier-G??nge Men?? und Ap??ritif",
            "description": "Sie befinden sich im Restaurant Dattler, in dem gerade ein Filmteam den Kriminalfilm Fahr zur H??lle, mein Schatz! dreht. Dabei bilden Sie zusammen mit den anderen G??sten die Statisten f??r zwei der Filmszenen. Der Regisseur R??diger Emmerich hat allerdings bisher nur erfolglose Filme gedreht und streitet sich st??ndig mit dem arroganten und selbstverliebten Hauptdarsteller Leander Lau??mann. Die sch??chterne Nebendarstellerin Katja Niemann ist offensichtlich eine Fehlbesetzung, die divenhafte Schauspielerin Nina Voss hasst Leander und der schwule und bissige Nebendarsteller Detlev Ruck w??rde lieber selber die Hauptrolle spielen. Da wird einer der K??nstler am Filmset ermordet. Doch der unf??hige Polizeiobermeister Dieter Dr??sel, der in diesem Mordfall ermittelt, liegt mit seinen Verd??chtigungen st??ndig daneben. So bleibt bis zum Schlu?? offen, wer der M??rder war.Nur gut, da?? Sie zwischendurch ein edles Vier-G??nge Men?? serviert bekommen. So haben Sie Zeit, das Erlebte zu verdauen und mit den anderen G??sten zu diskutieren, wer der T??ter gewesen sein k??nnte. Und als einer der Statisten d??rfen Sie beim Filmdreh sogar ein bi??chen mitwirken: In zwei der Szenen werden Sie mit den anderen Statisten gemeinsam vor Entsetzen schreien oder sp??ter begeistert mitschnippen, wenn die Hauptdarstellerin singt. Damit das auch klappt, macht der Regisseur vorher ein paar Stimm- und Lockerungs??bungen mit Ihnen und den anderen G??sten.",
            "startDateTime": "6/18/21 19:00",
            "venueId": "v29",
            "offerURL": "https://www.awin1.com/pclick.php?p=29534371877&a=774719&m=13738"
        },
        {
            "id": "e281",
            "title": "FREISTIL Dinner-Krimi Mord auf dem Betriebsfest im Dattler/ Freiburg - Mit Vier-G??nge Men?? und Ap??ritif",
            "description": "Sie arbeiten in einer Firma, die Kondome herstellt und feiern mit den Kolleg/innen im Restaurant Dattler das j??hrliche Betriebsfest. Die naive Chefin hat den Betrieb erst vor kurzem geerbt und ist mit der Leitung des Unternehmens offensichtlich v??llig ??berfordert. Der Assistent der Chefin ist ein Geizhals, der ein hartes Sparprogramm durchgesetzt hat und insgeheim die F??den in der Hand h??lt. Der Leiter der Personalabteilung, der auch Betriebsrat ist, versucht vergeblich, sich gegen die Sparpl??ne der Firma zu wehren. Und die h??bsche Praktikantin pr??sentiert die neue Werbekampagne f??r das geplante XXL-Kondom. Da passiert ein Mord, dem einer der Feiernden zum Opfer f??llt. Hat die Konkurrenzfirma etwas mit dem Mord zu tun oder stammt der T??ter etwa aus den eigenen Reihen?Nur gut, da?? Sie zwischendurch ein edles Vier-G??nge Men?? serviert bekommen. So haben Sie Zeit, das Erlebte zu verdauen und mit den anderen G??sten zu diskutieren, wer der T??ter ist. Aber keine Angst: Au??er gemeinsam mit allen Kolleg/innen den Refrain des Firmenliedes zu singen, m??ssen Sie hier nicht mitspielen!",
            "startDateTime": "9/24/21 19:00",
            "venueId": "v29",
            "offerURL": "https://www.awin1.com/pclick.php?p=29534372115&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/CXqLjZPz.jpeg"
        },
        {
            "id": "e282",
            "title": "FREISTIL Dinner-Krimi Mord auf der Single-Party im Dattler/ Freiburg - Mit Vier-G??nge Men?? und Ap??ritif",
            "description": "Sie sind Gast einer Single-Party. Holger Horn, der Besitzer der Online Single-B??rse Partner-Schiff, sorgt als Kapit??n verkleidet f??r Stimmung und leitet einige Kennenlern-Spiele an. Sein Mitarbeiter Olaf Ochsenreiter spielt den Amor und stellt Liebesbotschaften zu. Die angetrunkene, aber unattraktive Christina Helfering und die h??bsche Sonja, zwei G??ste der Party, machen den Pers??nlichkeitstest zur Partnersuche und bekommen ein Date-Coaching f??r das erste Date. Da passiert ein Mord, dem einer der Anwesenden zum Opfer f??llt. Wird der eifers??chtige Polizist Friedemann Tal, der seine eigene Ehefrau auf der Party erwischt, diesen Fall aufkl??ren? Oder hat er selber etwas mit dem Mord zu tun?Wie gut, da?? Sie zwischendurch ein edles Vier-G??nge Men?? serviert bekommen. So haben Sie Zeit, das Erlebte zu verdauen und mit den anderen G??sten zu diskutieren, wer der T??ter ist.Und vielleicht haben Sie auch Gl??ck und d??rfen als Frau beim Burgfr??ulein-Menuett mittanzen oder als Mann beim Date-Coaching-Rollenspiel testen, wie gut Ihre Antworten auf die Fragen der Dame sind.",
            "startDateTime": "7/23/21 19:00",
            "venueId": "v29",
            "offerURL": "https://www.awin1.com/pclick.php?p=29534373273&a=774719&m=13738"
        },
        {
            "id": "e283",
            "title": "Stunchile - Modellprojekt",
            "description": "`Erdige, bluesgetr??nkte Rock-Kracher treffen auf atmosph??rische, zeitlose Melodien mit Ohrwurm ? Charakter`. So k??nnte man den energiegeladenen Sound des brandneuen Rock Trio??s STUNCHILE aus dem S??den Deutschlands wohl am besten beschreiben.Obwohl weder die quirlige Frontfrau Leonie, noch Gitarrist Chris oder Drummer Fabi jemals W??sten Luft geschnuppert haben und das Trio urspr??nglich am Rande des Schwarzwald gro?? geworden ist, schaffen ihre Songs eine Atmosph??re, die einen schnurstracks auf die unendlichen Weiten kilometer-langer Highways mitten durch eine riesige W??stenlandschaft katapultiert. Erinnerungen an Tarantio??s `From Dusk till Dawn` gepaart mit ZZ Top??s `La Grange` werden wach, der `Southern Spirit` mit eine Prise Janis Joplin im Gep??ck. Zusammen Whiskey trinken mit Bands wie Wolfmother, Rival Sons oder auch mit gro??artigen Performerinnen ?? la Aretha Franklin.STUNCHILE verstehen es all diese Attribute zu vereinen und sie sich zu eigen zu machen, denn angestaubt klingt ihr m??chtiger Rocksound niemals. Moderner Rock mit einem guten Schuss Oldschoolness !!!!",
            "startDateTime": "6/19/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29534374785&a=774719&m=13738"
        },
        {
            "id": "e284",
            "title": "Biergeheimnis - Escape Walk durch die Brauerei GANTER",
            "description": "Werdet Mitarbeiter der Brauerei GANTER!Euer erster Arbeitstag schickt euch auf eine Zeitreise durch die Freiburger Brauerei. Anl??sslich der 150 Jahr Feier der Brauerei sollen die Original-Etiketten vom 1865 gebrauten Hellen Lager pr??sentiert werden. Die Firmenleitung hat Zeitdruck, den die Pr??sentation von den verschwundenen Etiketten soll bald stattfinden. Kannst Du mit Deinem Team helfend eingreifen?- Laufstrecke ca. 800m durch die Brauerei- Dauer ca. 90 min. zzgl. m??glichem Abschlussgetr??nk- geeignet f??r 3 - 9 Personen- geeignet f??r Jugendliche ab 16 Jahren- Start- und Zielpunkt: Brauerei Ganter, Freiburg- Schwierigkeitsgrad: mittel. Geeignet f??r Anf??nger - Fortgeschrittene",
            "startDateTime": "7/17/21 13:00",
            "venueId": "v31",
            "offerURL": "https://www.awin1.com/pclick.php?p=29542220057&a=774719&m=13738"
        },
        {
            "id": "e285",
            "title": "Yatao - Modellprojekt",
            "description": "Als DAS Handpan Duo Deutschlands, haben Malte und Alex sich in den vergangenen Jahren einen festen Platz in der Handpan Welt verschafft. Im Internet millionenfach geklickt, auf Konzerten von tausenden Menschen besucht - blicken sie auf sechs intensive Jahre zur??ck, die sie musikalisch, sowie menschlich haben reifen lassen. Wer Yatao kennt freut sich schon auf die ber??hrenden Momente auf den Konzerten, die weit hinaus gehen ??ber den puren Genuss von Musik. Sie lassen das Publikum teilhaben an den H??hen und Tiefen ihrer Freundschaft - eine Freundschaft die im Klang ihren Ausdruck findet. Nicht nur auf Konzerten, sondern auch auf Workshops teilen die beiden jungen M??nner ihre Faszination f??r das Instrument und ber??hren auch dort durch die Lebendigkeit und Authentizit??t die ihnen nachgesagt wird.",
            "startDateTime": "7/3/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29542221141&a=774719&m=13738"
        },
        {
            "id": "e286",
            "title": "Leoniden - Modellprojekt",
            "description": "Gerade wurden die Leoniden als ?Beste Band? f??r die 1Live-Krone nominiert, jetzt k??ndigt sie ihr drittes Album ?Complex Happenings Reduced To A Simple Design? f??r den 20.08.2021 an. Ihre Tour verschiebt die Band Corona-bedingt aus dem Fr??hjahr in den September 2021. ?Nach einem durchaus abgefuckten und komplizierten Jahr voller durchkreuzter Pl??ne und abgesagter Konzerte sind wir ??belst froh dar??ber, dass wir das heftigste und aufwendigste Projekt, das wir jemals gemacht haben, heute hier ank??ndigen k??nnen: Unser neues Album ?Complex Happenings Reduced To A Simple Design? erscheint am 20. August 2021 und kann bereits ab Donnerstag bei uns im Shop vorbestellt werden. Das waren die good News, es gibt allerdings auch weniger gute Neuigkeiten. Ihr habt es ja sicher auch schon ein bisschen geahnt: Wir m??ssen unsere Tour nochmal verschieben. Aber das hat trotzdem etwas Gutes. So k??nnen wir das Album direkt mit euch feiern - vis-??-vis, Arm und Arm und nicht im Livestream oder so! Leute, das wird eine riesige Party mit neuen Songs, Action ohne Ende und ordentlich Nachholbedarf in allen Bereichen! Tourtickets behalten selbstverst??ndlich ihre G??ltigkeit.",
            "startDateTime": "6/27/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29542221161&a=774719&m=13738"
        },
        {
            "id": "e287",
            "title": "Mozart im Hof",
            "description": "Wolfgang Amadeus Mozart (1756 - 1791)Sinfonie Nr. 10 G-Dur KV 74Violinkonzert Nr. 4 D-Dur KV 218 Violinkonzert Nr. 5 A-Dur KV 219 Freiburger BarockorchesterGottfried von der Goltz, Violine & LeitungIn den 1770er Jahren stand Wolfgang Amadeus Mozart am Scheideweg. Der 14j??hrige war den Schuhen des artistischen Wunderkindes entwachsen und wollte sich zu einem angesehenen, respektierten Komponisten entwickeln. In dieser Zeit entstanden zahlreiche Kompositionen, ??berwiegend Sinfonien und Solokonzerte, die den jungen Meister von seiner experimentellen Seite zeigen: farbenreiche Instrumentierungen, k??hne Harmonien und das Spiel mit tradierten Formen pr??gen das Klangbild dieser Schaffensphase. Das Freiburger Barockorchester widmet sich mit drei Kompositionen aus der Feder Mozarts diesen kreativen Jahren und unterstreicht mit seinem temperamentvollen, nuancierten Spiel Mozarts jugendliche Vitalit??t. Neben einer Sinfonie erklingen zwei Violinkonzerte, in denen Gottfried von der Goltz als Solist und Leiter des FBO brillieren kann.Foto (c) Britt Schilling",
            "startDateTime": "8/21/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29550059011&a=774719&m=13738"
        },
        {
            "id": "e288",
            "title": "Wovon tr??umst du, kleiner B??r? // 5+ Jahre",
            "description": "Bernhard, ein kleiner B??r, kann den Winter gar nicht leiden. Zum ersten Mal soll er sich alleine eine Winterschlafh??hle einrichten, denn die Zeit der gro??en Familienh??hlen mit Mutter und Geschwistern ist vorbei. Nun muss Bernhard f??r sich selber sorgen und auch das mag der gem??tliche Winterschl??fer absolut nicht. Doch auf der Suche nach dem perfekten Pl??tzchen f??r den Winter, trifft der B??r auf zwei Siebenschl??fer. Gemeinsam wollen Sie in einem Lastwagen die kalte Jahreszeit ??berstehen, als sie sich unerhofft auf eine traumhaft-sch??ne Reise in den warmen S??den machen.",
            "startDateTime": "7/4/21 16:00",
            "venueId": "v10",
            "offerURL": "https://www.awin1.com/pclick.php?p=29572281537&a=774719&m=13738"
        },
        {
            "id": "e289",
            "title": "Gun Love // 15+ Jahre",
            "description": "?Gun Love? ? eine poetische Geschichte voll hartem Realismus. Im Mittelpunkt steht das M??dchen Pearl, welches mit seiner Mutter in einem alten Ford Mercury aufw??chst. Wie eine Ballade entspinnt sich diese liebevolle Mutter-Tochter-Geschichte im tiefen S??den der Vereinigten Staaten. Angesiedelt auf der R??ckbank des r??derlosen Autos, zwischen einer M??llkippe, einem Trailerpark und zwei Highways, wird hier der amerikanische Traum in sein Gegenteil verkehrt. Denn die Welt, drau??en vor der Windschutzscheibe, ist den Waffen verfallen und diese finden unvermeidlich und mit unaufhaltsamer Zerst??rungskraft auch den Weg in Pearls Leben.Gun Love is a hypnotic story of family, community and America?s love affair with firearms, told from the perspective of a sharp-eyed teenager. Fourteen-year-old Pearl lives in the front seat of a broken-down car and her mother Margot lives in the back. Together they survive on a diet of love songs and stolen cigarettes.Life on the edge of a Florida trailer park is strange enough, but when the pastors ?Guns for God? programme brings Eli Redmond to town Pearl?s world is upended. Eli pays regular visits to Margot in the back seat, forcing Pearl to find a world beyond the car. This world is marked by guns and their deadly potential finds the way into Pearls live.",
            "startDateTime": "7/2/21 19:00",
            "venueId": "v10",
            "offerURL": "https://www.awin1.com/pclick.php?p=29572281541&a=774719&m=13738"
        },
        {
            "id": "e290",
            "title": "Der Sandler - Autorenlesung mit Markus Ostermair",
            "description": "In Der Sandler wird eine Geschichte erz??hlt, die eigentlich gar nicht erz??hlt werden darf. Denn sie handelt von der Scham des sozialen Abstiegs ? und diese Scham macht die Betroffenen schweigen. Der Sandler ist deshalb eine fiktive Geschichte, die Obdachlose ins Zentrum stellt und trotz aller Fiktion ein realistisches und vielschichtiges Bild ihres Alltags auf den M??nchner Stra??en vermittelt.Einer von ihnen ist Karl Maurer. Er m??andert durch die Stadt, besucht Suppenk??chen und Kleiderkammern und manchmal wird er von den Bildern seines fr??heren Lebens eingeholt ? von seiner Frau und seiner kleinen Tochter, der Zeit als Mathematiklehrer und dem Kind, das ihm vors Auto lief. Gleichzeitig durchstreift auch sein Freund Lenz die Stadt auf der Suche nach ihm. Lenz, ein Zettelschreiber und Utopist, merkt, dass es mit ihm zu Ende geht. Er will Karl seine unfertigen Notizen vermachen und, was noch viel wichtiger ist, den Schl??ssel zu seiner Wohnung, die er geerbt hatte, in der er sich aber geweigert hatte, zu leben. Lenz? Tod ist ein Wendepunkt. Die Wohnung k??nnte Karls Chance sein, die diffusen, stets auf die lange Bank geschobenen Pl??ne, sein Leben wieder in den Griff zu bekommen, in die Tat umzusetzen. Gleichzeitig merkt auch Kurt, ein Haftentlassener, der stets den Angriff f??r die beste Verteidigung h??lt, dass er sein Leben ??ndern muss. Auch er sucht eine Bleibe, die er mit niemandem mehr zu teilen braucht.Der Sprachlosigkeit der Obdachlosen setzt Markus Ostermair eine Sprache entgegen, die nahe an ihr Leben heranf??hrt, ohne dabei zu werten, zu romantisieren oder voyeuristisch zu sein. Eine Kooperation mit dem Literaturhaus Freiburg___Im Rahmen der Veranstaltungsreihe F??r alle reicht es nicht widmet sich das Theater im Marienbad seit Dezember 2019 in den unterschiedlichsten k??nstlerischen Formen bestehenden Ungleichheiten und Ungerechtigkeiten in unserer Gesellschaft. Vom 30.06. ? 06.07.2021 blicken wir in Theaterproduktionen f??r Kinder, Jugendliche und Erwachsene, einer Lesung und einer Diskursveranstaltung auf das Thema Obdach.Der Themenschwerpunkt Obdach ist eine Kooperation gestaltet vom Theater im Marienbad im Rahmen der Veranstaltungsreihe F??r alle reicht es nicht und Unter Freiburgs D??chern ohne Dach, einem Projekt zur 900-Jahr-Feier der Stadt Freiburg von Renate Obermaier und Heinzl Spagl.",
            "startDateTime": "7/6/21 20:00",
            "venueId": "v10",
            "offerURL": "https://www.awin1.com/pclick.php?p=29572281545&a=774719&m=13738"
        },
        {
            "id": "e291",
            "title": "Unter Freiburgs D??chern ohne Dach - Podiumsdiskussion",
            "description": "Im Rahmen der Veranstaltungsreihe F??r alle reicht es nicht widmet sich das Theater im Marienbad seit Dezember 2019 in den unterschiedlichsten k??nstlerischen Formen bestehenden Ungleichheiten und Ungerechtigkeiten in unserer Gesellschaft. Vom 30.06. ? 06.07.2021 blicken wir in Theaterproduktionen f??r Kinder, Jugendliche und Erwachsene, einer Lesung und einer Diskursveranstaltung auf das Thema Obdach.Der Themenschwerpunkt Obdach ist eine Kooperation gestaltet vom Theater im Marienbad im Rahmen der Veranstaltungsreihe F??r alle reicht es nicht und Unter Freiburgs D??chern ohne Dach, einem Projekt zur 900-Jahr-Feier der Stadt Freiburg von Renate Obermaier und Heinzl Spagl.",
            "startDateTime": "7/3/21 17:00",
            "venueId": "v10",
            "offerURL": "https://www.awin1.com/pclick.php?p=29572281649&a=774719&m=13738"
        },
        {
            "id": "e292",
            "title": "Samantha Fish - Kill Or Be Kind",
            "description": "Die genresprengende US Gitarristin, S??ngerin und Songwriterin Samantha Fish ver??ffentlicht am 20. September in Deutschland ihr mit Spannung erwartetes neues Werk ?Kill Or Be Kind? (inakustik). Es ist das erste Album der 30-J??hrigen beim legend??ren Nashville Label ROUNDER. Samantha fasziniert das Publikum rund um den Globus mit ihrer z??ndenden Live-Performance ? und begeisterte unl??ngst auch in Deutschland mit ihrem sensationellen Gitarrenspiel und fulminanten Liveshow. Mit ?Kill Or Be Kind? schickt sich die ?Wonder Woman? aus Kansas City an, den ganz gro??en internationalen Durchbruch zu schaffen!Die begnadete Gitarristin aus Kansas City flirtet auf ?Kill Or Be Kind? ganz ungeniert und selbstverst??ndlich mit dem traditionellem Blues ihrer Heimat, verschiebt dabei die Grenzen des Genres jedoch hin zu ihrem ganz eigenen, unverkennbaren Sound. So st????t der Memphis Soul Song ?She Don??t Live Here Anymore? durch das eindringliche Vibrato der Gitarre dicht an die Grenze zur County Music. ?Love Your Lies? hingegen ??berzeugt durch einen Spagat aus Punk, Rockabilly und Soul,w??hrend ?You Got It Bad (Better Than You Ever Had?) als klassischer Blues Rocker punktet.",
            "startDateTime": "3/15/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29580521921&a=774719&m=13738"
        },
        {
            "id": "e293",
            "title": "TANZNETZ Freiburg & friends - Kurze Tanzst??cke aus Freiburg und Ba-W??",
            "description": "Das tanznetz|freiburg l??sst Revue passieren, nimmt Anlauf f??r die Zukunft und l??dt alle Akteur*innen der letzten Jahre sowie G??ste aus anderen St??dten und alle Interessierten zum Mitfeiern ein. Bei ?Tanznetz Freiburg & friends ? kurze Tanzst??cke aus Freiburg und BaW??? am 3. Juli werden kurze St??cke (5 bis 15 Min.) von Freiburger K??nstler*innen und G??sten gezeigt (Dauer insg. 2 Std.).",
            "startDateTime": "7/3/21 20:00",
            "venueId": "v12",
            "offerURL": "https://www.awin1.com/pclick.php?p=29580523039&a=774719&m=13738"
        },
        {
            "id": "e294",
            "title": "Quadro Nuevo - Wunder Welt Musik",
            "description": "Seit fast 20 Jahren Tourleben ist Quadro Nuevo auf der Suche nach der Seele des Tango. Unz??hlige Orte haben die abenteuerlustigen Virtuosen bereist, verwegene Spielweisen ausgelotet, sich damit zweimal den ECHO geholt. Anfang 2014 packten sie wieder einmal ihre Instrumente ein: keine Tournee sollte es diesmal werden, sondern eine Expedition ins sommerliche Buenos Aires. Sie bezogen Quartier in einer alten Stadtvilla, probten tagelang in der flirrenden Mittagshitze, schw??rmten abends aus, st??rzten sich kopf??ber in die Szene, mischten sich mit den argentinischen Musikern, begleiteten T??nzer, begegneten ber??hmten Tangueros und verr??ckten Stra??enpoeten, f??hrten n??chtliche Gespr??che bis zum Morgengrauen und berauschten sich an schwerem Wein und frischem Tango direkt von der Quelle. Diese musikgewordenen Erlebnisse formten sich zum neuen Quadro Nuevo-Album ?TANGO !?",
            "startDateTime": "5/18/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=24419022781&a=774719&m=13738"
        },
        {
            "id": "e295",
            "title": "Ernst Paul D??rfler: Nestw??rme - Lesung und Vogelwanderung",
            "description": "Nach drei Jahren b??rokratischer H??rden und staatlicher Pr??fungen erschien 1986 Ernst Paul D??rflers erstes Buch ?Zur??ck zur Natur?? und wurde zum Kulturbuch der ostdeutschen Umweltbewegung. Wenig sp??ter zog der promovierte ??kochemiker, Natursch??tzer und Autor mit seiner Familie nach Ostberlin, um dort die Gr??ne Partei der DDR mitzugr??nden und eine ??kologische Politik zu fordern. Sein j??ngstes Buch ?Nestw??rme? (Hanser, 2019) ist eine Liebeserkl??rung an die V??gel, ein Appell an das Umweltgewissen unserer Gesellschaft und eine augenzwinkernde Aufforderung, das eigene Leben hin und wieder aus einer neuen Perspektive zu betrachten: Faire partnerschaftliche Beziehungen, ein Leben mit der Sonne statt nach der Uhr und Gewaltverzicht ? die Vogelwelt scheint unserer einiges vorauszuhaben. ?Ernst Paul D??rfler ist nicht nur ein bedeutender Natursch??tzer. Er ist auch ein intimer Kenner bedrohter heimischer Vogelarten?, sagt Jonathan Franzen. Als solcher l??dt D??rfler im Anschluss der Lesung zu einer Vogelwanderung ein.---Foto: ?? Peter-Andreas HassiepenDas Projekt wird gef??rdert im Impulsprogramm ?Kunst trotz Abstand? des Ministeriums f??r Wissenschaft, Forschung und Kunst Baden-W??rttemberg sowie im Rahmen von ?Neustart Kultur? der Beauftragten der Bundesregierung f??r Kultur und Medien durch den Deutschen Literaturfonds e. V.Datum: 11.07.2021, 10:30 UhrOrt: WaldHaus Freiburg, Wonnhaldestra??e 6Eintritt: 9/6 EuroDie Personenzahl f??r die Wanderung ist begrenzt. Anmeldung unter info@literaturhaus-freiburg.de WeltgartenAu??er Haus",
            "startDateTime": "7/11/21 10:30",
            "venueId": "v11",
            "offerURL": "https://www.awin1.com/pclick.php?p=29588575505&a=774719&m=13738"
        }
    ],
    "votings": [
        {
            "username": "max1990",
            "experienceId": "e1",
            "vote": "4",
            "lastUpdateDateTime": "6/19/21 13:17"
        },
        {
            "username": "max1990",
            "experienceId": "e2",
            "vote": "2",
            "lastUpdateDateTime": "6/19/21 13:42"
        },
        {
            "username": "santa-lucia",
            "experienceId": "e2",
            "vote": "5",
            "lastUpdateDateTime": "5/27/21 9:27"
        }
    ],
    "experience-parts": [
        {
            "experienceId": "e2",
            "partId": "ep1",
            "title": "Le Samourai"
        },
        {
            "experienceId": "e2",
            "partId": "ep2",
            "title": "Painting and Guns"
        },
        {
            "experienceId": "e3",
            "partId": "ep1",
            "title": "Schwarzes Loch"
        }
    ],
    "experience-part-customizations": [
        {
            "experienceId": "e2",
            "partId": "ep2",
            "customizedContentJSON": "{\"description\": \"In einer Reihe von Arbeiten mit dem Titel 'Painting & Guns' besch??ftigt sich Friedemann Hahn mit dem Schriftsteller William S. Burroughs (1914-1997).}"
        },
        {
            "experienceId": "e2",
            "partId": "ep2",
            "customizationLabel": "paintery",
            "customizedContentJSON": "{\"description\": \"William S. Burroughs war au??erdem ein begeisterter Fotograph und expressionistischer Maler.\", \"link\": \"http://www.artnet.com/artists/william-s-burroughs/\"}"
        },
        {
            "experienceId": "e2",
            "partId": "ep2",
            "customizationLabel": "music",
            "customizedContentJSON": "{\"description\": \"William S. Burroughs arbeitete gemeinsam mit Nirvana-Frontmann Kurt Cobain am Album 'The Priest They Called Him'.\"}"
        },
        {
            "experienceId": "e2",
            "partId": "ep2",
            "customizationLabel": "writing",
            "customizedContentJSON": "{\"description\": \"William S. Burroughs l??sst sich der Beat-Literatur zuordnen. Er schrieb oft ??ber mystische Themen, v.a. in 'Electronic Revolution', einem seiner bekanntesten Werke.\"}"
        }
    ]
};
