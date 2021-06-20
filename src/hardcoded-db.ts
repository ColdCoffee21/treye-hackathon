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
            "name": "Museum für Neue Kunst",
            "streetAddress": "Marienstraße 10a",
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
            "streetAddress": "Bertoldstraße 46",
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
            "streetAddress": "Festivalgelände am Mundenhof",
            "zipCode": "79111",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "48.009",
            "longitude": "7.78056"
        },
        {
            "id": "v5",
            "name": "Festivalgelände am Mundenhof",
            "streetAddress": "Lehenerwinkelweg",
            "zipCode": "79111",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "48.009",
            "longitude": "7.78056"
        },
        {
            "id": "v6",
            "name": "Bürgerhaus am Seepark",
            "streetAddress": "Gerhart-Hauptmann-Straße 1",
            "zipCode": "79110",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "48.0224",
            "longitude": "7.81114"
        },
        {
            "id": "v7",
            "name": "Bürgerhaus Zähringen ",
            "streetAddress": "Lameystraße 2",
            "zipCode": "79108",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "48.0414",
            "longitude": "7.83172"
        },
        {
            "id": "v8",
            "name": "Freizeichen",
            "streetAddress": "Haslacher Straße 43",
            "zipCode": "79115",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.993",
            "longitude": "7.8331"
        },
        {
            "id": "v9",
            "name": "DIE SCHÖNEN / Musiktheater im E-WERK",
            "streetAddress": "Ferdinand Weiß Str. 6a",
            "zipCode": "79106",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9942",
            "longitude": "7.83475"
        },
        {
            "id": "v10",
            "name": "Theater im Marienbad",
            "streetAddress": "Marienstraße 4",
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
            "streetAddress": "Kaiser-Joseph-Straße 167",
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
            "streetAddress": "Franziskanerstraße 11",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9966",
            "longitude": "7.84957"
        },
        {
            "id": "v17",
            "name": "Paulussaal",
            "streetAddress": "Dreisamstraße 3",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9959",
            "longitude": "7.8508"
        },
        {
            "id": "v18",
            "name": "Jazzhaus",
            "streetAddress": "Schnewlinstraße 1",
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
            "name": "Alemannische Bühne",
            "streetAddress": "Gerberau 15",
            "zipCode": "79098",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9959",
            "longitude": "7.8508"
        },
        {
            "id": "v21",
            "name": "The Great Räng Teng Teng",
            "streetAddress": "Grünwälderstraße 6",
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
            "streetAddress": "Münsterplatz 24",
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
            "streetAddress": "Habsburgerstraße 9",
            "zipCode": "79104",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "48.0107",
            "longitude": "7.85545"
        },
        {
            "id": "v27",
            "name": "Hochschule für Musik",
            "streetAddress": "Schwarzwaldstraße 141",
            "zipCode": "79102",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9889",
            "longitude": "7.8721"
        },
        {
            "id": "v28",
            "name": "Ensemblehaus Freiburg",
            "streetAddress": "Schützenallee 72",
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
            "streetAddress": "Waldseestraße 84",
            "zipCode": "79117",
            "city": "Freiburg",
            "country": "Deutschland",
            "latitude": "47.9534",
            "longitude": "7.89661"
        },
        {
            "id": "v31",
            "name": "Brauerei Ganter",
            "streetAddress": "Schwarzwaldstraße 43",
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
            "title": "Führung – Piktogramme, Lebenszeichen, Emojis",
            "description": "Eine Führung durch die Ausstellung „Piktogramme, Lebenszeichen, Emojis: Die Gesellschaft der Zeichen“ findet am Sonntag, 27. Juni, um 15 Uhr im Museum für Neue Kunst statt. Die Teilnehmer_innen tauchen ein in die Geschichte des modernen Piktogramms und lernen Zeichensysteme unterschiedlicher Künstler_innen und Gestalter_innen kennen.",
            "startDateTime": "6/27/21 15:00",
            "endDateTime": "6/27/21 16:00",
            "venueId": "v1",
            "offerURL": "https://www.freiburg.de/pb/site/freiburg_museen/node/525489/zmdetail_23712838/index.html?nodeID=23712838"
        },
        {
            "id": "e2",
            "title": "FORESTA NERA – Eine Ausstellung zu ausgewählten Werken von Friedemann Hahn",
            "description": "Große Formate, kräftige Farben mit schnellen Pinselstrichen aufgetragen: das machen die Gemälde von Friedemann Hahn (*1949) aus. Sie tragen Titel wie „Painting and Guns“, „Glauser“, „Le Samourai“ oder „Lichtung (nach E. L. Kirchner)“, die auf vielfältige, komplexe Bezugsrahmen verweisen. Hahns Werk kreist um Geschichten, die sich aus Literatur, Kunst und Künstlerpersönlichkeiten, Meilensteinen des Film noir und Werken der Populärkultur speisen. Dabei sind es besonders moderne Legenden um Personen, die sich an gesellschaftlichen Abgründen bewegen, die Hahn faszinieren und die er immer wieder neu verhandelt.\r\n\r\nDas Museum für Neue Kunst präsentiert in einer komprimierten Werkschau Arbeiten aus dem eigenen Bestand, ergänzt um Leihgaben des Künstlers. In einem Raum der Ständigen Sammlung sucht die Präsentation den Maler, der ein leidenschaftlicher Kinogänger und Büchernarr ist, zu umreißen.\r\n\r\nFriedemann Hahn ist der Region eng verbunden, lange Zeit war der Südschwarzwald sein Lebens- und Schaffensmittelpunkt. Geboren in Singen am Hohentwiel, studierte er Malerei in der Freiburger Außenstelle der Staatlichen Akademie Karlsruhe bei Peter Dreher und an der Akademie in Düsseldorf bei K. O. Götz. 1991 wurde er als Professor an die Kunsthochschule Mainz berufen, dort leitete er bis 2014 eine Klasse für Malerei. Mittlerweile lebt er in Schleswig-Holstein und schreibt, malt und geht auf lange Spaziergänge mit seinem Hund Käpt’n.\r\n\r\nZur Ausstellung erscheint ein deutsch-englischsprachiges Lesebuch, das neben zahlreichen Abbildungen Texte von acht Autor_innen versammelt, die sich mit der Bilderwelt Friedemann Hahns beschäftigen.",
            "startDateTime": "4/1/21 0:00",
            "endDateTime": "8/29/21 23:59",
            "venueId": "v1",
            "offerURL": "https://www.freiburg.de/pb/1694452.html",
            "imageURL": "https://www.freiburg.de/pb/site/freiburg_museen/get/params_E2129844617/1694743/Foresta-Nera,%202009%20-ge%C3%A4nderter%20Farbraum.jpg"
        },
        {
            "id": "e3",
            "title": "Einsteins Universum",
            "description": "Schwerkraft ist ein alltägliches Phänomen. Doch Albert Einstein beschreibt in seiner Allgemeinen Relativitätstheorie die Gravitation ganz anders, als uns der gesunde Menschenverstand glauben macht. Raum und Zeit sind laut Einstein miteinander verwoben zu einer vierdimensionalen Raum-Zeit. Mit erstaunlichen Konsequenzen: Es muss Schwarze Löcher geben, was Einstein selbst nicht glauben konnte.\r\n\r\nAuch eine zweite Folge seiner Theorie hielt Einstein zunächst für »ganz und gar abscheulich“: Das Universum dehnt sich aus. Dank der rätselhaften „dunklen Energie« vielleicht sogar in alle Ewigkeit. Und es hatte einen Anfang, den sogenannten Urknall.\r\nTrotz mancher Ungeheuerlichkeit hat Einsteins Theorie sich großartig bewährt – zuletzt beim experimentellen Nachweis der Gravitationswellen.",
            "startDateTime": "6/22/21 19:30",
            "endDateTime": "6/22/21 20:30",
            "venueId": "v3",
            "offerURL": "http://www.planetarium-freiburg.de/pb/1472533.html",
            "imageURL": "http://www.planetarium-freiburg.de/pb/site/freiburg_planetarium/get/params_E232493600/1472539/programm_einstein_1200px.jpg"
        },
        {
            "id": "e4",
            "title": "MUNDOLOGIA: Neuseeland",
            "description": "Paradies am Ende der Welt?Unberührte Natur, einsame Strände, eine besondere Kultur mit faszinierenden Mythen - Neuseeland steht für viele Sehnsüchte und Wünsche. Wenn nicht dort, wo soll sonst das irdische Paradies zu finden sein? Viele haben ein Bild von dieser südpazifischen Inselgruppe im Kopf, eine Vorstellung vom Paradies auf Erden. Ist es das? Um dies herauszufinden machte sich Tobias Hauser auf die Reise ans andere Ende der Welt. Was er dabei erlebt und gesehen hat, welche Bilder die alten Vorstellungen ersetzt und welche Erzählungen für ihn bestätigt wurden, das berichtet er in seinem neuen Vortrag. Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "3/21/22 19:30",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418900361&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/JohiQJAn.jpeg"
        },
        {
            "id": "e5",
            "title": "MUNDOLOGIA: Costa Rica",
            "description": "Reise in den tropischen Garten EdenIn Costa Rica begrüßen sich die Einheimischen mit ?Pura Vida?, ?Pralles Leben?. Damit bringen sie auf den Punkt, was die schmale Landbrücke zwischen den Kontinenten so einzigartig macht: Exotische Artenvielfalt von Pflanzen und Tieren wie nirgendwo sonst auf der Erde. Leuchtend grüner Urwald, der bis an die Ufer von zwei Weltmeeren reicht und dem Land seinen Namen gegeben hat: Costa Rica, reiche Küste. In seiner kenntnisreichen, spannenden und unterhaltsamen Reportage zeigt MUNDOLOGIA Gründer Tobias Hauser die Schönheit der verschiedenen Regionen.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "3/22/22 19:30",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418908155&a=774719&m=13738"
        },
        {
            "id": "e6",
            "title": "Johann König",
            "description": "Johann König, der einzige garantiert glutenfreie Geschmacksverstärker des deutschen Humors, zieht sich erneut die Tourschuhe an und geht mit frisch gebackenem Programm und Hemd auf große Bühnenreise. Dank sprachlicher Entzugsentgleisungen und seinem windigen Gespür für das Unerdenkliche kommt er überraschend wie eine schwangere Eidechse um die Ecke spaziert und holt sein Publikum da ab, wo es gar nicht ist. Aber beide Seiten ahnen bereits, dass sie sich bald treffen werden. Denn eines ist sicher: Johann König bekommt sie alle. Dabei dichtet, singt und schweigt der Meister der unkalkulierten Pausen solange, bis alle erkennen: Das Leben ist eine riesengroße ?Milchbrötchenrechnung?. Inhaltlich geht es wie immer um alles: Um die Unvernunft der anderen und den eigenen Wahnwitz vom Balkon bis zum Keller, wo das Eingemachte steht. Ob geschredderte Küken, vegane Zirkusbesuche, Flugobst aus der Nachbarstadt, Automotorengeräuschherstellung für Elektrofahrzeuge oder Kindersklaven in den eigenen vier Wänden. Deutschlands erster und wahrscheinlich auch letzter Bio-Komiker drückt mit diesen Themen unbemerkt kleine fiese Stachel ins weiche Fleisch der amüsierwilligen Masse und reflektiert so meisterhaft die Narrheit ihres eigenen Tuns. Daher auch sein viel zitierter Spitzname: ?Igel mit Spiegel?.Ist das noch Comedy? Oder doch schon Kabarett? Auf alle Fälle. Unerbittlich. Kritisch. Abbaubar.Außerdem geht es ihm in diesem Programm auch um den halsbrecherischen Spagat zwischen Arbeit und Familie. Darum, auf der Bühne einen Brüller nach dem anderen raus hauen zu müssen. Und auf der anderen Seite die kleinen Brüllaffen im eigenen Heim nicht zu hauen.",
            "startDateTime": "5/21/22 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418910729&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/WMv5GYh2.jpeg"
        },
        {
            "id": "e7",
            "title": "Bummelkasten - Tour 2021",
            "description": "Bummelkastens Musikvideos werden täglich tausendfach geklickt. Die Berliner Ein-Mann-Band hat sich mit ihrem komplett mundgemachten Debutalbum Irgendwas Bestimmtes gerade genüsslich in die deutschen Kindermusikregale gefläzt und euphorisiert damit Kinder, Eltern und Nicht-Eltern. Ihre Songs entfalten einen Sog, dem man sich nur schwer entziehen kann. Kein Wunder: Dieser popfidele A-Capella-Beatbox-Sound - welcher mit seinen detailreichen Arrangements sowie seiner vokalen als auch musikalischen Verspieltheit herrlich ungeleckt und unterhaltsam daherkommt - sucht nicht nur in der Kindersparte seinesgleichen. Mit anspruchsvollen Texten und eigensinnigem Humor lehnt sich Bummelkasten weit aus der Schublade und ergründet damit künstlerisches Neuland.",
            "startDateTime": "11/1/21 15:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418937419&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/fz2JdPM1.jpeg"
        },
        {
            "id": "e8",
            "title": "Christoph Sieber - Mensch bleiben",
            "description": "Eben noch im ZDF mit Kollege Tobias Mann zu sehen wechselte der Kabarettist ganz aktuell zum Kleinkunst-Sender schlechthin und moderiert ab 2021 die legendären ?Mitternachtsspitzen? im WDR. Und natürlich ist Sieber auch weiterhin auf der Bühne präsent. Ganz aktuell mit seinem neuen Programm ?Mensch bleiben?. Wie er das geschafft hat während der vergangenen Monate und vor allem, warum sich das ganz allgemein für einen selbst und die ganze Spezies lohnt, davon erzählt er mit seinem schonungslosen, satirischen Blick auf Politik, Kunst und Gesellschaft. Warum werden die, denen wir unsere Kinder anvertrauen, schlechter bezahlt als die, denen wir unser Geld anvertrauen? Und wie konnte es so weit kommen, dass wir Konsumenten sind, User, Zuschauer, Politiker, Migranten, Deutsche, aber immer seltener Mensch? Mit seinem aufklärerischen und selbstbespiegelnden Humor öffnet Christoph Sieber das passende Ventil, um über seine Antworten nicht zu verzweifeln.",
            "startDateTime": "10/8/22 19:30",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418942183&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/ldFk7eqF.jpeg"
        },
        {
            "id": "e9",
            "title": "Die Nacht der Musicals",
            "description": "Tanz der Vampire, Mamma Mia, Der König der Löwen,The Greatest Showman, Das Phantom der Oper, Cats, Rocky uvm.Nach erfolgreichen Tourneen und vielen ausverkauften Hallen kommt Die Nacht der Musicals ab Dezember 2019 wieder nach Deutschland, Österreich und in die Schweiz. Mit einem immer neuen und abwechslungsreichen Programm, begeistert die erfolgreichste Musicalgala aller Zeiten bereits weit über 2 Millionen Besucher.Das Programm lässt keine Wünsche offen. In einer über zweistündigen Show gelingt es den Darstellern eine bunte Mischung bekannter Musicals Hits aus ?Tanz der Vampire?, ?Rocky?, ?Das Phantom der Oper?, ?Mamma Mia?, ?Cats? und vielen weiteren Musicals darzubieten und für einen Abend voller Gänsehautmomente im Zuschauerraum zu sorgen. Die jährlich wachsenden Zuschauerzahlen bringen Die Nacht der Musicals dazu, immer neue Musicals ins Programm aufzunehmen. So konnte im Vorjahr z.B. mit ?Grease? begeistert werden. In diesem Jahr folgen die besten Szenen aus dem Broadway Verkaufsrenner ?The Greatest Showman?, unter anderem mit dem Hit ?This is me?. Lebe deine Träume ist das Motto des Jungen P.T. Barnum, der mit dem Song ?Million Dreams? dem Publikum seinen Traum, die Zirkuswelt vorstellt. Er verwirklicht sich diesen und wird damit zum Pionier der Manege. Eine spannende Geschichte zum Staunen und mitfiebern, in der weder Liebe noch Dramatik ausbleiben.Natürlich dürfen bei Die Nacht der Musicals auch die beliebtesten Hits aus dem Disney-Musical Der König der Löwen oder ?Frozen? nicht fehlen. Dabei verschmelzen die modernen Lieder zu einer untrennbaren Einheit mit den zeitlosen Klassikern.Die herausragenden Darsteller verbreiten durch ihre Stimmgewalt und das schauspielerische Talent jede Menge Emotionen und garantieren einen unvergesslichen Abend für Jung und Alt. Abgerundet wird Die Nacht der Musicals durch animierte Choreografien, aufwändige und farbenfrohe Kostüme, sowie ein perfekt auf die Show abgestimmtes Licht- und Soundkonzept.",
            "startDateTime": "10/30/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418944781&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/O8xeVDK8.jpeg"
        },
        {
            "id": "e10",
            "title": "Dieter Nuhr - Kein Scherz - Zusatztermin",
            "description": "Kein Scherz!Dieter Nuhr ist der Meister der entspannten Comedy und der König der befreienden Pointe. In seinem Programm ?Kein Scherz!? beweist er wieder einmal: Das Leben ist kein Witz, kann aber trotzdem Spaß machen. Dieter Nuhr widersetzt sich dem Zeitgeist dauernder Erregung, seziert unser mediengestörtes Weltbild und hält dagegen mit seiner entwaffnenden Unaufgeregtheit. Ja, wir alle wissen, die Welt wird untergehen! Aber es wird voraussichtlich noch ein paar Millionen Jahre dauern.Dieter Nuhr löst seelische Verkrampfungen durch wohlbegründete Fröhlichkeit. Wer einmal einen Auftritt von ihm erlebt hat, weiß: Was wirklich lustig ist, ist oft kein Scherz!Dieter Nuhr kontert die ritualisierte Empörung in unserem Land mit abwägenden Gedanken und gelassener Heiterkeit. Er seziert mit seinen entlarvenden Pointen die Verkrampftheit der Ideologen und befreit sein Publikum vom Zwangsdenken der Besserwisser. Seine Abende gelten als heilsame Therapie für Angstgestörte.Dieter Nuhr löst Verspannungen mit Argumenten und heilt die Weltangst der Zuschauer durch die überwältigende Kraft seiner extrem lustigen Gedanken! Millionen haben seine Auftritte gesehen, seine Sendungen verfolgt und seine Bücher gelesen. Ein Abend mit Dieter Nuhr ist nicht nur saukomisch! Er verdeutlicht auch: Man kann Massen begeistern, in dem man sich dem Mainstream verweigert. Ihm zuzuhören ist ein Genuss.Nuhr beweist: Humor kann schlau sein, Optimismus ist möglich, Denken macht Spaß! Ein Abend mit Dieter Nuhr zeigt: Die Wirklichkeit ist oft lustiger als jeder Witz, und Lachen ist - das ist kein Scherz! - extrem befreiend!",
            "startDateTime": "4/1/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418949023&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/Rz3ey5Sc.jpeg"
        },
        {
            "id": "e11",
            "title": "The King´s Singers - ?Love Songs?",
            "description": "Das Albert-Konzert mit den King?s Singers am 20. September 2020 im Paulussaal Freiburg konnte infolge der behördlichen Auflage zur Eindämmung der Verbreitung desr Corona-Pandemia leider nicht mit dem geplanten Besucher-Umfang stattfinden. Wir bitten Sie daher um Verständnis für eine erneute Verschiebung des Konzerts.Neuer Konzerttermin ist nun Sonntag, der 11. Juli 2021 um 20 Uhr im Paulussaal Freiburg.Ihre Eintrittskarten behalten für den neuen Konzerttermin ihre Gültigkeit und müssen nicht eingetauscht werden. Bringen Sie Ihre Karten einfach zum neuen Konzerttermin mit.Sollten Sie den neuen Konzerttermin nicht wahrnehmen können, können Sie Ihre Karten an der Vorverkaufsstelle, an der sie erworben wurden, zurückgeben.Für privatwirtschaftliche Veranstalter, die keine öffentlichen Zuschüsse bekommen, wie die Albert Konzerte ist die Corona-Krise eine große Herausforderung. Wir bitten Sie deshalb um eine solidarische Geste:- Unterstützen Sie uns im Rahmen der Aktion #seidabeiSchenkDeinTicket und verzichten auf die Rückerstattung der von Ihnen bereits bezahlten Tickets oder einzelner Tickets. Bitte teilen Sie uns mit, falls Sie eine Spendenbescheinigung benötigen.- Tauschen Sie Ihr bereits bezahltes Ticket ein gegen einen Umtauschgutschein, der für beliebige zukünftige Albert-Konzerte eingelöst werden kann.Bitte nehmen Sie für beide Aktionen ebenfalls Kontakt zur der Vorverkaufsstelle auf, an der Sie Ihre Tickets erworben haben. Ihre Mitwirkung bedeutet uns sehr viel! Herzlichen Dank!Bitte beachten Sie: Aufgrund der behördlichen Auflagen sind verschiedene Vorverkaufsstellen aktuell nur einschränkt erreichbar. Es kann daher bei der Rückerstattung zu Verzögerungen kommen.Hier die Kontaktdaten der wichtigsten Vorverkaufsstellen:BZ-Karten-Service, Tel. 0761 ? 496-8888, Email: mitarbeiter.kartenservice@bz-ticket.deBuchhandlung Rombach, Tel. 0761 ? 4500-2432, Email: klassik@rombach.deReservix, Tel. 0761 ? 88788-11, Email: tickets@reservix.deAD ticket, Tel. 0180 - 6050400Falls Sie Ihre Karten direkt bei den Albert Konzerten erworben haben und eine Rückerstattung wünschen, senden Sie Ihre Karten bitte zusammen mit Angabe Ihrer Kontoverbindung an das Kartenbüro der Albert Konzerte: Albert Konzerte GmbH, Postfach 1349, 79013 FreiburgFür Rückfragen steht Ihnen das Kartenbüro der Albert Konzerte gerne zur Verfügung:Tel. 0761 ? 289442, Email: info@albert-konzerte.de-----------------------------------------------------------------------------------------------Royale Klangpracht - Sie sind die unangefochtenen Könige der a­-cappella­-Kunst: The King´s Singers, ein  Ensemble, das seit über 50 Jahre für unver­gleichliche Klangkultur steht. Kultstatus genießen die Konzerte der britischen Edelkehlen vor allem dank des schier grenzenlosen Repertoires, aus dem sie schöpfen: jeder Auftritt eine bunte Bon­bonschachtel, randvoll mit ausgefeilten Arrangements aller Jahr­hunderte und (fast) aller Länder. Neben ihren stimmlichen Höchst­leistungen feiert man The King´s Singers auch für ihre ansteckend gute Laune: Die entspringt fraglos einer ungebrochenen Neugier, sich als Schatzgräber durch die  Jahrhunderte zu wühlen, sich mal der lupenreinen Perfektion der Renaissancemusik zu widmen, dann wieder dem romantischen Überschwang hinzugeben und letztlich alles mit den Perlen aus Popmusik und Moderne zu garnieren.Dass der Funke jedes Mal aufs Neue von den Sängern auf das Publikum überspringt, dafür garantiert auch die viel zitierte Che­mie zwischen den Persönlichkeiten: Hier stehen nicht bloß sechs Kollegen nebeneinander, hier hat sich eine eingeschworene Künst­lergemeinschaft gefunden. 1968 gaben sechs Studenten des renommierten King´s College ihr erstes Konzert in London ? was zunächst nur ein ambitioniertes Projekt unter Freunden war, wurde schnell eine Erfolgsgeschichte. Mit ihren fabelhaften Stimmen, abwechslungsreichen Program­men von Bach bis zu den Beatles und ihrem unwiderstehlichen britischen Charme eroberten sie im Sturm die Kirchen­ und Konzertbühnen weltweit ? und kehren nach ihrem gefeierten Al­bert­-Konzert im Oktober 2018 nun mit ?Love Songs? zu uns zurück.The King?s SingersPatrick Dunachie, CountertenorEdward Button, CountertenorJulian Gregory, TenorChristopher Bruerton, BaritonNick Ashby, BaritonJonathan Howard, Bass?Love Songs?Arlen, It?s a New World | Trad., I Love My Love | Simon and Garfunkel, April come she will | Sarah McLachlan, When she loved me | Anonymous, Dindirin | Brahms, Vineta | Elgar, Deep in my soul | Hill, Remembered Love | Janequin, Au joly jeu | di Lasso, Im Mayen, Toutes les nuits, Chi chilichi? | Trad., Tuoll on mun kultani | Sibelius, Rakastava | Beliebte Close Harmony-Klassiker und brandneue Überraschungen aus dem leichteren Repertoire der King?s Singers",
            "startDateTime": "7/11/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418956759&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/evVkgOE0.jpeg"
        },
        {
            "id": "e12",
            "title": "PAUL PANZER - Midlife Crisis ...willkommen auf der dunklen Seite",
            "description": "Dass das Leben kein Ponyhof ist, scheint allgemein bekannt. Doch was die ?goldene Mitte? für uns alle bereithält, damit konnte selbst PAUL PANZER nicht rechnen. Denn sind die Kinder erst erwachsen und die Frau auf Weltreise, heißt?s auch für Paul: ?Kleiner Mann was nun??In seinem neuen Programm begibt sich Ausnahmekünstler PAUL PANZER auf eine emotionale Geisterbahnfahrt durch das Tal der Tränen, durch das wir alle einmal müssen.PAUL PANZER live in der Krise seinen Lebens ... wahrlich zum Totlachen für jeden der nicht drinsteckt!",
            "startDateTime": "12/9/21 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418974867&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/gRAxCkLL.jpeg"
        },
        {
            "id": "e13",
            "title": "Beethoven 250 - The Power of Humanity",
            "description": "Wir bitten Sie sehr herzlich um Ihr Verständnis, dass infolge der gesetzlichen Corona-Verordnungen der Termin des Albert-Sonderkonzertes Beethoven 250 ? The Power of Humanity, bislang 3. Juli 2021, nochmals verschoben werden muss.Neuer Konzerttermin ist nun Sonntag, der 10. Juli 2022 um 20 Uhr im Konzerthaus Freiburg.Ihre Eintrittskarten behalten für den neuen Konzerttermin ihre Gültigkeit und müssen nicht eingetauscht werden. Bringen Sie Ihre Karten einfach zum neuen Konzerttermin mit.Sollten Sie den neuen Konzerttermin nicht wahrnehmen können, können Sie Ihre Karten an der Vorverkaufsstelle, an der sie erworben wurden, zurückgeben.Für privatwirtschaftliche Veranstalter, die keine öffentlichen Zuschüsse bekommen, wie die Albert Konzerte ist die Corona-Krise eine große Herausforderung. Wir bitten Sie deshalb um eine solidarische Geste:- Unterstützen Sie uns im Rahmen der Aktion #seidabeiSchenkDeinTicket und verzichten auf die Rückerstattung der von Ihnen bereits bezahlten Tickets oder einzelner Tickets. Bitte teilen Sie uns mit, falls Sie eine Spendenbescheinigung benötigen.- Tauschen Sie Ihr bereits bezahltes Ticket ein gegen einen Umtauschgutschein, der für beliebige zukünftige Albert-Konzerte eingelöst werden kann.Bitte nehmen Sie für beide Aktionen ebenfalls Kontakt zur der Vorverkaufsstelle auf, an der Sie Ihre Tickets erworben haben. Ihre Mitwirkung bedeutet uns sehr viel! Herzlichen Dank!Bitte beachten Sie: Da verschiedene Vorverkaufsstellen aufgrund der behördlichen Auflagen aktuell nur eingeschränkt besetzt und erreichbar sind, kann es bei der Rückerstattung zu Verzögerungen kommen.Hier die Kontaktdaten der wichtigsten Vorverkaufsstellen:BZ-Karten-Service, Tel. 0761 ? 496-8888, Email: mitarbeiter.kartenservice@bz-ticket.deBuchhandlung Rombach, Tel. 0761 ? 4500-2432, Email: klassik@rombach.deReservix, Tel. 0761 ? 88788-11, Email: tickets@reservix.deAD ticket, Tel. 0180 - 6050400Falls Sie Ihre Karten direkt bei den Albert Konzerten erworben haben und eine Rückerstattung wünschen, senden Sie Ihre Karten bitte zusammen mit Angabe Ihrer Kontoverbindung an das Kartenbüro der Albert Konzerte: Albert Konzerte GmbH, Postfach 1349, 79013 FreiburgFür Rückfragen steht Ihnen das Kartenbüro der Albert Konzerte gerne zur Verfügung:Tel. 0761 ? 289442, Email: info@albert-konzerte.de-----------------------------------------------------------------------------------------------Auch 250 Jahre nach der Geburt des ?Titanen? Ludwig van Beethoven sind die humanitären und aufklärerischen Ideen des Musikgenies noch immer aktuell. Das politisch-menschliche Feuer seiner Werke und seines Denkens begriff Beethoven als prometheische Berufung. In seinem Jubiläumsjahr lassen die Albert Konzerte diesen Geist in Form eines Community-Dance-Projekts erfahrbar werden ? in Kooperation mit dem Akademischen Orchester Freiburg unter Leitung seines Chefdirigenten Joonas Pitkänen und dem Vertiefungskurs Tanz an der Universität Freiburg, dem Showteam Matrix, dem ?kick for girls?- Flüchtlingskinder-Projekt und der Wentzinger-Realschule. Konzipiert wurde das exklusive Projekt von Leander Hotaki, Intendant der Albert Konzerte, gemeinsam mit Christina Plötze, Tanzdozentin der Freiburger Universität, der die choreographische Leitung obliegt.Gemeinsam verweben die Akteure Choreographien mit von Idealen durchdrungenen Werken des großen Komponisten. Mit ?Die Geschöpfe des Prometheus? schrieb Beethoven eine Ballettmusik, deren Sujet ? der Titan bringt den Menschen das Feuer und emanzipiert sie dadurch von der Herrschaft der Götter ? klare aufklärerische Intention verfolgt. Ein zentrales Werk in diesem Zusammenhang ist Beethovens 9. Symphonie mit Friedrich Schillers ?Ode an die Freude? im 4. Satz. Als besonders wirkmächtig hat sich das Verständnis der Symphonie als Ausdruck höchster Humanität erwiesen, das dem Satz ?alle Menschen werden Brüder? programmatisches Gewicht verleiht ? eine solche Interpretation hat die Verwendung der Ode als Europahymne möglich gemacht. So steht die Europahymne heute als Sinnbild der ?Einheit in der Vielfalt?, die auch der grundlegende Gedanke des Community-Dance-Projekts ?The Power of Humanity? ist: Kinder, Jugendliche und junge Erwachsene unterschiedlicher sozialer Herkunft werden an klassische Musik herangeführt ? so wie Prometheus den Menschen das Feuer bringt, entzündet die Musik Beethovens das kreative Potential der jungen Menschen. In der tänzerischen Auseinandersetzung werden Toleranz, Offenheit und interkulturelle Vielfalt unmittelbar erlebbar.Programm:Beethoven:Symphonie Nr. 3 Es-Dur op. 55 ?Eroica?, FinalsatzLeonoren-Ouvertüre Nr. 3 op. 72aEgmont-Ouvertüre op. 84Die Geschöpfe des Prometheus. Ballettmusik op. 43?Ode an die Freude? aus der 9. Symphonie d-Moll op. 125Akademisches Orchester FreiburgJoonas Pitkänen, DirigentShowteam MatrixVertiefungskurs Tanz an der Universität FreiburgSchüler der Wentzinger-Realschulekick for GirlsUnter der Schirmherrschaft des Rektors der Universität Freiburg Prof. Dr. Dr. h. c. Hans-Jochen SchiewerMit freundlicher Unterstützung des Vereins der Freunde und Förderer der Albert Konzerte e.V.Klimaneutrales KonzertKlima-Patenschaft: Frau Sabine Bronner",
            "startDateTime": "7/10/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418981247&a=774719&m=13738"
        },
        {
            "id": "e14",
            "title": "HARRY G - Hoamboy",
            "description": "HOAMBOY ? so der Titel des neuesten Programms von Harry G ? ist mehr als nur ein Wortspiel, es ist eine exakte Beschreibung seiner Person. Auf der einen Seite ein Bayer mit Vorliebe für Tradition, auf der anderen Seite ein weltoffener und neugieriger Kosmopolit, der mit großer Leidenschaft und offenen Augen und Ohren sein jeweiliges Umfeld nach Themen durchsucht die es ?wert? sind, auf der Bühne besprochen zu werden. Und das tut er auf ganz eigene und unnachahmliche Weise. Ob in seiner typisch grantigen Art, süffisant, zynisch oder einfach ganz still betrachtend: Wenn sich Harry G auf der Bühne mit Trends, Zeitgeschehen und Menschen auseinandersetzt braucht sein Publikum starke Lachmuskeln. Ein Abend mit Harry G ist nicht zum Ausruhen, es ist ein Abend voller Energie und Intensität, der man sich als Zuschauer nicht entziehen kann. Ab Dezember 2019 geht Harry G mit seinem dritten Bühnenprogramm ?HOAMBOY? auf Tour.",
            "startDateTime": "10/16/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418995043&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/OhTAZPFo.jpeg"
        },
        {
            "id": "e15",
            "title": "Anna Depenbusch - Tour 2020",
            "description": "Preisgekrönte Pop-Poetin ANNA DEPENBUSCH 2020 wieder auf Tour Leidenschaft und Temperament, Kreativität und Poesie, Humor und Ironie: Diese Charaktereigenschaften zeichnen ANNA DEPENBUSCH aus ? und das nicht nur auf, sondern auch hinter der Bühne. Die Hamburger Liedermacherin zeigte mit ihrem letzten Studioalbum ?Das Alphabet der Anna Depenbusch in schwarz-weiß?, dass es nicht mehr als ein Klavier und ihrer Stimme bedarf,um  für  ein  paar  Stunden  in eine Welt voller  Phantasie einzutauchen.In  dieser  verschmelzen Geschichten, die das Leben schreibt,Anekdoten,Wahrheiten, Träume,Wünsche und Sehnsüchte in einer  Symbiose  miteinander. Egal  ob  sie  flüstert  oder  pfeift,  sie  streichelt  oder  bebt,  sie neckisch scherzt oder  einfach  nur  ganz  tief  berührt:  ?Anna  Depenbusch  ist  in  ihrem Fach,  dem  modernen Chanson, das Maß aller Dinge? (Hannoversche Allgemeine Zeitung). Nicht von ungefähr kommt es, dass sie bereits mit dem Deutschen Chansonpreis und dem Fred-Jay Preis ausgezeichnet wurde.Nachdem sie 2018 als Special Guest auf der Tour von Tina Dico sowie auf ihrer eigenen großen Deutschlandtour in ausverkauften Konzertstätten wie der Kölner Kulturkirche, dem Leipziger Kupfersaal oder der Hamburger Elbphilharmonie begeisterte, konzentriert sie sich 2019 voll und ganz auf die kreative Schaffensphase ihres neuen Albums. ?Eine Frau, ein Klavier und sonst nichts. Purer Genuss?  ?so wie der Generalanzeiger Bonn den minimalistischen und doch so wirkungsvollen Einsatz dieser beiden  Elemente  an ANNA  DEPENBUSCH schätzt,  soll  sich  auch  das  kommende  Album  auf Klavierklänge, Sprache und Gesang fokussieren: ?Ich erzähle Geschichten, die jeder kennt und stelle sie in meinen Liedern in ein ganz einzigartiges Licht?.Zwischen der Leidenschaft einer Edith Piaf, der Eleganz  einer  Tori  Amos  und  dem  kraftvollen  Entertainment  eines  Billy  Joel,  überrascht  die Liedermacherin  vor  allem  mit  ihrem besonderen  Gespür  für Rhetorik und  der  Freude  an  bildhaften Wortspielen.  Ihre Authentizität  spiegelt  sich  in  ihren  Moderationen wieder,  durch welche  die Zuschauer mühelos den Eindruck gewinnen, sie nach dem Konzertereignis besser zu kennen.ANNA  DEPENBUSCH hat  sich  für  ihr  neues  Programm ganz  bewusst historisch  und  musikalisch bedeutsame Konzerthäuser  ausgesucht,  deren Wände  ihre  ganz  eigenen  Geschichten  erzählen. Gleichzeitig  bieten  die Kulissen das  perfekte  Ambiente für intime  Momente  im  Dialog  mit den Konzertbesuchern. ?Mit dem neuen Programm komme ich mir und dem Publikum besonders nah? ?eine Erkenntnis und gleichzeitig ein Versprechen, das die Künstlerin für ihre anstehende Tour gibt.",
            "startDateTime": "10/17/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=24419000733&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/SBvwxLgA.jpeg"
        },
        {
            "id": "e16",
            "title": "The Freddie Mercury Show",
            "description": "The King of Queen is Back: The Freddie Mercury Show kommt ab Februar 2020 auf große Tournee durch ganz Deutschland. Freddie Mercury füllte als Frontmann der Band Queen die größten Stadien weltweit.Er ging als charismatischer Sänger, genialer Songschreiber und Showman in die Pop-Geschichte ein, dies stellte er bei jedem Konzert erneut unter Beweis. Seine Karriere begann im Alter von 17 Jahren als er nach London zog und dort Gitarrist Brian May und Schlagzeuger Roger Taylor kennenlernte. Mit ihnen gründete er die Band ?Queen?. Vier Jahre später schafften sie mit dem Hit ?Killer Queen? den internationalen Durchbruch ? von da an folgte ein Hit nach dem anderen. Mercury war für seinen dekadenten und aufregenden Lebensstil bekannt, so feierte er wilde Partys auf der ganzen Welt oder zog mit einer verkleideten Lady Di um die Häuser Londons. Trotz seiner schweren HIV-Erkrankung lebte er seine Leidenschaft für die Musik bis zu seinem Tod im Jahr 1991 voll und ganz aus und stand dabei mit all seiner Kraft bis zuletzt im Studio. Unter dem Motto ?The King of Queen is Back? erleben die Zuschauer in der rund 90-minütigen Show alle bekannten Hits von Mercury und Queen. Ausgezeichnete Tänzer, Top SängerInnen sowie eine ausgefalleneBühnenshow versetzen das Publikum in eine andere Zeit.",
            "startDateTime": "12/22/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=24419025117&a=774719&m=13738"
        },
        {
            "id": "e17",
            "title": "Max Raabe & Palast Orchester - Guten Tag, liebes Glück",
            "description": "?Statt Cannes und Nizza / säß ich mit Pizza / viel lieber mit dir Hand in Hand?. Es sind Zeilen wie diese aus ?Côte d ?Azur?, die die Lieder von Max Raabe so unverkennbar und beliebt machen. Erschienen ist ?Côte d ?Azur? auf dem Gold-prämierten Album ?Der perfekte Moment .. wird heut verpennt?. Max Raabe & Palast Orchester schöpfen für ihr neues Konzertprogramm 2020 aus dieser Quelle und bringen ausgewählte Titel frisch arrangiert mit Spielwitz und Virtuosität auf die Bühne. Verwoben wird der ?Raabe-Pop? mit alt-geliebten und neu entdeckten Liedern aus den 20er/30er Jahren. Im Mai 2019 werden Max Raabe & Palast Orchester außerdem zusammen mit ganz besonderen Gästen ein eigenes ?MTV unplugged? Konzert aufnehmen. Titel und Erfahrungen aus dieser Produktion werden die Konzert-Tour 2020 beeinflussen. Foto: Majid Moussavi",
            "startDateTime": "6/9/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=24721634983&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/2LRqe2dN.jpeg"
        },
        {
            "id": "e18",
            "title": "BIBI BLOCKSBERG - Alles wie verhext",
            "description": "Bibi Blocksberg, die berühmteste kleine Hexe Deutschlands, geht ab 2020 mit ihrem Musical ?Alles wie verhext!? wieder auf große Tournee durch Deutschland, Österreich und die Schweiz. Zum 40-jährigen Jubiläum der Serie ist das neue Original-COCOMICO Musical bis 2023 landauf, landab LIVE zu erleben!Überall begeisterte ZuschauerVier erfolgreiche Bibi Blocksberg Live-Musicals aus der Feder von Produzent und Autor Marcell Gödde und seinem COCOMICO Theater wurden bereits von 1,2 Millionen Zuschauern in über 1350 Aufführungen gesehen.In vielen Städten ist demnächst einfach ?Alles wie verhext!?, wenn Bibi Blocksberg mit ihrem Besen Kartoffelbrei herbeigeflogen kommt. Insgesamt finden von 2020 bis 2023 über 300 Aufführungen vor vielen, vielen kleinen und großen begeisterten Zuschauerinnen und Zuschauern statt!Bibi Blocksberg ?Alles wie verhext!? - Das MusicalJeder kennt das, es gibt Tage, an denen einfach alles schiefläuft! Das fängt morgens schon beim Aufstehen mit dem falschen Fuß an und zieht sich über den ganzen Tag. Dann ist einfach ?Alles wie verhext!?. Einen solchen Tag hat auch die kleine, freche Hexe Bibi Blocksberg erwischt: Schon morgens gibt es ein Riesendurcheinander mit ihren Eltern Barbara und Bernhard Blocksberg zu Hause. Und auch in der Schule will einfach gar nichts klappen. Bibis Lehrerin Frau Müller-Riebensehl bringt das ganz schön auf die Palme! Abends ist dann auch noch Walpurgisnacht auf dem Blocksberg. Dieses Jahr sollen dort Bibi und Barbara Blocksberg zusammen mit Oma Grete das große Hexenfeuer entfachen. Aber was wird Walpurgia, die Vorsitzende des Hexenrates bloß dazu sagen, wenn dort auch alles schief läuft?Da ist richtig was los!Wird es den Hexen der Familie Blocksberg an diesem ?verhexten? Tag gelingen, das Hexenfeuer zur Walpurgisnacht wie vorgesehen zu entzünden? Die kleinen und großen Hexen-Fans im Saal dürfen Bibi, ihrer Mutter und ihrer Oma sogar dabei helfen, denn bei diesem Familien-Pop-Musical ist Mitmachen dringend erwünscht ? gerne auch verkleidet. Kleine und große Hexen in Kostümen sind herzlich willkommen! Und wenn mit Hilfe der Kinder und aller Zuschauerinnen und Zuschauer alles gut ausgeht, wird Karla Kolumna, die rasende Reporterin aus Neustadt beruhigt schreiben können: Es WAR alles wie verhext.Mitreißende Inszenierung, tolle neue Lieder und wieder einmal ganz viel ?Hex hex!?Das Bibi Blocksberg-Musical ?Alles wie verhext!?, original und exklusiv vom Cocomico Theater aus Köln: Ein hexischer Spaß für die ganze Familie!",
            "startDateTime": "1/5/23 17:00",
            "venueId": "v7",
            "offerURL": "https://www.awin1.com/pclick.php?p=25168951107&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/ba2TnKGV.jpeg"
        },
        {
            "id": "e19",
            "title": "RUSSKAJA - NO ONE IS ILLEGAL Tour 2019",
            "description": "RusskajaMit neuem Highspeed-Turbo-Polka-Album auf Tour.Egal ob World Music, Mainstream, Indie oder Metallfestival; die Power von Russkaja kennt keine musikalischen Grenzen und der Fan, egal ob Alternativ, Hippie oder Metal dreht beim Bandhit ?Psycho Traktor? regelrecht ab. Frag nach bei Wacken, denn die Staubwolke hängt heute noch über dem Ort. Über 700 Auftritte weltweit; alleine 2018 wurden über 50 Konzerte platt gemacht. Beweis genug für den Beliebtheitsgrad der Band.Mit ihrem Motto ?nichts und niemand wird uns aus dem Sattel werfen? verbreiten sie die Lebensfreude des Ostens und sagen: ?Du musst kein russisch sprechen, um Russkaja zu verstehen!? Man kann bei Russkaja schon fast behaupten, dass sie über die Jahre ihren eigenen Stil kreiert haben: eine Mischung aus Balkan, Metal, Polka, Estam Rock, Rock ?n? Roll und Metal. Die Hochgeschwindigkeit-Sensation mit ihrem russischen Turbo-Polka bietet mit ihrer Musik den Soundtrack zu vielem und ist die wohl erfolgreichste Musik-Kolchose auf diesem Planeten.",
            "startDateTime": "3/4/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25861065769&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/F2xdMVje.jpeg"
        },
        {
            "id": "e20",
            "title": "CHIPPENDALES",
            "description": "Die Chippendales rufen zum Ungehorsam auf!Zum ersten Mal in ihrer seit 1992 bestehenden deutschen Tourgeschichte werden die Chippendales in diesem Jahr nicht auf Tour gehen. Die ursprünglich für den 17.10. bis 21.11.2020 terminierte Deutschlandtour der Chippendales kann aufgrund der anhaltenden Pandemiesituation nicht stattfinden. Die Gesundheit der Künstler, Fans und Mitarbeiter hat oberste Priorität. Der Großteil der Showtermine konnte in 2021 verschoben werden. Bereits erworbene Tickets behalten ihre Gültigkeit. Die Traummänner geben alles, um die perfekte Show hinzulegen. Neben Erotik, Leidenschaft und Humor, beeindrucken sie ihre Fans mit Live-Gesang, atemberaubendem Tanz und spektakulären Live-Performances an Klavier und Gitarre. Ein sexy Bühnenfeuerwerk! Wie keine Zweiten verstehen es die durchtrainierten Gentlemen den richtigen Ton zu treffen und nahezu alle Fantasien zu bedienen: von sanft und gefühlvoll über lustig und locker bis dominant und leidenschaftlich. Sie sind die weltweite Nummer Eins der Entertainment-Shows für Frauen, sie sind DAS ORIGINAL und das spürt man auch! Diese besonderen Ladies? Nights kitzeln die ungezogene Seite heraus und sorgen für eine wilde Party!",
            "startDateTime": "11/18/21 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863757581&a=774719&m=13738"
        },
        {
            "id": "e21",
            "title": "Klavierabend Grigory Sokolov",
            "description": "Wir bitten Sie sehr herzlich um Ihr Verständnis, dass infolge der gesetzlichen Verordnungen zur Eindämmung der Corona-Pandemie der Termin des Klavierabends mit Grigory Sokolov, bislang 26. Juni 2021, nochmals verschoben werden muss. Neuer Konzerttermin ist nun Sonntag, der 29. Mai 2022.Das Programm wird zu einem späteren Zeitpunkt bekannt gegeben.Ihre Eintrittskarten behalten für den neuen Konzerttermin ihre Gültigkeit und müssen nicht eingetauscht werden. Bringen Sie Ihre Karten einfach zum neuen Konzerttermin mit.Sollten Sie den neuen Konzerttermin nicht wahrnehmen können, können Sie Ihre Eintrittskarten an der Vorverkaufsstelle, an der Sie diese erworben haben, zurückgeben.Bitte beachten Sie: Da viele Vorverkaufsstellen aufgrund der aktuellen Situation nur eingeschränkt besetzt und erreichbar sind, kann es bei der Rückerstattung zu Verzögerungen kommen.Hier die Kontaktdaten der wichtigsten Vorverkaufsstellen:BZ-Karten-Service, Tel. 0761 ? 496-8888, Email: info@bz-karten-service.deBuchhandlung Rombach, Tel. 0761 ? 4500-2432, Email: klassik@rombach.deReservix, Tel. 0761 ? 88788-11, Email: tickets@reservix.deAD ticket, Tel. 0180 ? 6050400Falls Sie Ihre Karten direkt bei den Albert Konzerten erworben haben, senden Sie Ihre Karten bitte zusammen mit Angabe Ihrer Kontoverbindung an das Kartenbüro der Albert Konzerte:Albert Konzerte GmbH, Postfach 1349, 79013 FreiburgFür Rückfragen steht Ihnen unser Kartenbüro gerne zur Verfügung:Tel. 0761 ? 289442, Email: info@albert-konzerte.de-----------------------------------------------------------------------------------------Grigory Sokolov ist eine monolithische Größe im Musikbetrieb. Nach einer Solistenkarriere unter über 200 Dirigenten, mit den besten Orchestern und auf den bedeutendsten Konzertpodien der Erde, gelangte der Meisterpianist zu überlebensgroßem Ruhm durch Reduktion ? durch die Konzentration auf die Intimität von Solo-Klavierabenden, zu denen sich jede noch so weite Pilgerreise lohnt. Denn auch wenn Sternstunden wie etwa das »Salzburg Recital« inzwischen bei Deutsche Grammophon dokumentiert sind, ersetzt nichts den lebendigen Zauber, die Sogkraft, mit der Sokolov die Konzertgäste in sein Universum zieht.Sobald der Ausnahmepianist die Tasten berührt, wird alles unwichtig ? außer der Musik. Vernachlässigbar werden die Werke lediglich, wenn es um Werbung geht: Oft gibt Grigory Sokolov seine konkreten Programme erst kurzfristig bekannt. Dies macht die Vorfreude auf seine ausgefeilten, klug gebauten Konzertsolitäre freilich nur noch größer. Erleben Sie einen der größten Pianisten unserer Zeit nach seinem gefeierten Albert-Klavierabend im April 2019 nun erneut im Konzerthaus Freiburg!Das Programm wird zu einem späteren Zeitpunkt bekannt gegeben.Mit freundlicher Unterstützung von Frau Sabine Bronner",
            "startDateTime": "5/29/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863760667&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/biZ0jOFS.jpeg"
        },
        {
            "id": "e22",
            "title": "Dr. Mark Benecke - Bakterien, Gerüche und Leichen",
            "description": "Dr. Mark Benecke ist Vorsitzender der Deutschen Dracula Gesellschaft. Er ist Mitglied des Komitees des Nobelpreises für kuriose, wissenschaftliche Forschungen. Außerdem ist er ein erfolgreicher Autor, Politiker, Donaldist, er ist der bekannteste Kriminalbiologe der Welt und er ist Spezialist für forensische Entomologie (Insektenkunde). Sein Aufgabengebiet: fast aussichtslose Mordfälle. Wenn kein Ausweg mehr zu sehen ist, wird Mark Benecke gerufen. Jeder Tatort ist eine Fundgrube an Beweisen. Man sieht sie nicht auf den ersten Blick, aber seine Helfer, die Maden und Fliegen, können wichtige Antworten geben. Nicht der Tod ist Benecke? s Job, sondern das Leben nach dem Tod. Wenn Maden den Mörder entlarven, hat Benecke alles richtig gemacht. Selbst kleinste Lebewesen auf der Leiche können den entscheidenden Hinweis zur Aufklärung geben. Einen perfekten Mord gibt es nicht, denn Insekten schlafen nie.",
            "startDateTime": "10/23/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863769407&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/DE4pqwRz.jpeg"
        },
        {
            "id": "e23",
            "title": "Wiener Johann Strauß Konzert Gala - Die K&K Philharmoniker, Dirigent",
            "description": "Sie ist ein Garant für frisches Lebensgefühl, Vitalität und Sinneslust ? die »Wiener Johann Strauß Konzert-Gala«. Seit 1996 zog Matthias Georg Kendlingers Exportschlager »Made in Austria« mehr als 1 Million Liebhaber in 19 europäischen Ländern in seinen Bann ? ein musikalischer Jungbrunnen, an dem selbst Könige und Kaiser ihre wahre Freude hätten ? Kultstatus inbegriffen!",
            "startDateTime": "1/13/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863773627&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/iulfsJS9.jpeg"
        },
        {
            "id": "e24",
            "title": "MUNDOLOGIA: Hans Kammerlander Manaslu",
            "description": "Erleben Sie die Bergsteigerlegende Hans Kammerlander mit seinem neuen Vortrag über die Abenteuer am Manaslu.Der Südtiroler Hans Kammerlander gehört zu den erfolgreichsten Extrem-Bergsteigern unserer Zeit. In seiner Biografie stehen mehr als 2500 Klettertouren, rund 50 Erstbegehungen und 60 Alleinbegehungen großer Alpenwände. Er bestieg zwölf der vierzehn Achttausender. Er fuhr mit Ski vom Gipfel des Everest ab und durch die steilen Flanken des Nanga Parbat. Ein Gipfel gehört dir erst, wenn du wieder unten bist - denn vorher gehörst du ihm.Hans KammerlanderWeitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "11/14/21 18:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863777545&a=774719&m=13738"
        },
        {
            "id": "e25",
            "title": "PIETRO LOMBARDI & Band - Live - Tour 2021",
            "description": "Für den einfachen Jungen aus Karlsruhe wurde Deutschland sucht den Superstar zum Jackpot ? seine Lieblingsphrase, die er während DSDS prägte. Pietro Lombardi gewann die achte Staffel der Erfolgsshow mit Dieter Bohlen.  Pietro Lombardi wurde 1992 als Sohn eines Italieners geboren und wuchs in Karlsruhe auf. 2010 bewarb sich der leidenschaftliche Hobby-Sänger bei ?Deutschland sucht den Superstar? ? von Beginn an galt er als Zuschauerliebling, bekam in den Live-Shows stets die meisten oder zweitmeisten Anrufe. Vor allem die weiblichen Fans liebten seine nette, leicht verplante und natürliche Art. Pietro Lombardi tanzte, sang und quatschte sich in die Herzen der Zuschauer und gewann die Show 2011 vor.   Pietros Siegersingle ?Call my Name? verkaufte sich binnen einer Woche nach dem Finale von DSDS 300.000 Mal, erreichte Platin-Status und natürlich Platz eins der Charts in Deutschland, Österreich und der Schweiz. Auch das Album ?Jackpot? schoss an die Chartspitze in Deutschland und Österreich.   Im Sommer 2017 stürmt  Pietro Lombardi gemeinsam mit Kay One die Spitze der Single Charts und bringt mit Senorita den Sommer zurück. Nach der viel besprochenen Trennung von seiner Partnerin Sarah im vergangenen Herbst performt Pietro Lombardi in Senorita wie ihn seine Fans am meisten lieben - als gutgelaunter und charismatischen Sunnyboy!",
            "startDateTime": "12/17/21 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863778937&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/amsoEqKP.jpeg"
        },
        {
            "id": "e26",
            "title": "Kastelruther Spatzen - live 2021",
            "description": "Sie sind Inbegriff und die erfolgreichsten Vertreter der volkstümlichen Schlagermusik. Keiner verkörpert diese Stilrichtung besser als sie. Die Kastelruther Spatzen werden im Frühjahr 2020 mit ihrem neuen Programm zum aktuellen Album ?Feuervogel flieg?auf Tournee gehen!?Feuervogel flieg? ist der märchenhafte Titel des neuen Albums der Kastelruther Spatzen. Ein Titel, der Spannendes erwarten lässt, denn die legendäre Geschichte des magisch glühenden Vogels, alter Mythologie entstammend, repräsentiert die bewegte Schicksalslinie unser aller Leben und diente vielen Generationen als Inspiration. Den Kastelruther Spatzen war es über all die Jahre immer ein wichtiges Anliegen, Geschichten aus dem wahren Leben zu wunderschönen Liedern zu formen. Beeindruckend und erstaunlich gleichermaßen, haben die Kastelruther Spatzen seit 36 Jahren ihre Stilistik erhalten und dabei immer wieder neue und wegweisende Inhalte in ihre Lieder einfließen lassen. Stillstand gab es nie. Emotional und ergreifend erzählen die Spatzen mit ?Feuervogel flieg? ihre oft selbsterlebten Geschichten und Erfahrungen.Es ist ein Teil ihres Erfolgsgeheimnisses, dass sie nicht nur die schöne heile Welt besingen, sondern ihre Lieder aus dem Hier und Jetzt des Lebens entworfen sind, Glück und Leid gleichermaßen aufgreifen. Die Botschaft ihrer Lieder ist authentisch, wie das Leben selbst. Und diese Wahrhaftigkeit kommt bei den Menschen an. Bis heute haben die Kastelruther Spatzen mit ihrem ureigenen Musikstil nahezu alles gewonnen, was es in der Musikwelt ihres Genres zu gewinnen gibt. Sie haben fünfmal die Goldene Stimmgabel sowie mehrere Kronen der Volksmusik erhalten und zudem den Grand Prix der Volksmusik gewonnen. Diese drei Award-Shows selbst sind mittlerweile TVGeschichte. Aber die Kastelruther Spatzen stehen nach wie vor in alter Frische am Zenit des Erfolgs. Ihre 13 (!) Echos sind längst im großen Buch der Branchengeschichte eingetragen und gelten in Deutschland als unverrückbares Maß der Dinge.36 Jahre Erfolg, 36 Jahre Kontinuität! Sie sind die bekanntesten und beliebtesten Botschafter ihrer Heimatregion, des wunderschönen Südtirols. Mit ihrem ersten Album ?Viel Spaß und Freude? begannen sie einst ihren einzigartigen internationalen Karriereweg. Und nomen est omen: Ungebrochen und mehr denn je begeistern sie mit Spaß und Freude auch heute ihre einmalige und große Fangemeinde. Tournee und Album ?Feuervogel flieg? bündeln gekonnt die Stärken der Band: Ergreifende Geschichten und tiefgründige Erzählungen gefasst in emotionale, schicksalhafte Songs ebenso wie die Liebe zu ihrer Heimat Südtirol und das Heimkommen nach einer großen Tournee, zum Ausdruck gebracht in fröhlichen oder liebevoll sanften Titeln. Im besten Spatzen-Stil darf man sich diesmal auch auf Schlager freuen, der das Publikum in jedem Fall von den Stühlen hebt.Die sieben Vollblutmusiker aus den Dolomiten bald wieder live auf Deutschlands Bühnen! Jede Menge Lebensfreude und bewegende Momente. Das ganze ?Spatzen-Universum? an einem Abend ? glaubhaft, aufrichtig, stark. Sie lassen den Feuervogel fliegen!",
            "startDateTime": "10/22/21 19:30",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863779053&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/LbUfAGo2.jpeg"
        },
        {
            "id": "e27",
            "title": "Simple Minds - Celebrating 40 Years of Hits Live",
            "description": "Foto: Dean Chalkley40 Years Of Hits Simple Minds auf ausgiebiger Deutschlandtour im Frühjahr 2020 Die  Simple  Minds  sind  musikalische  Pioniere  ? und  das  seit  40  Jahren.  Sie  haben  die  Post-Punk-Ära bestimmend geprägt, als der wütende Krach    von    1977    in    tausenderlei    Sounds zersplitterte.  Sie  haben  den  stylischen  Art-Rock von  David  Bowie  genauso  organisch  in  ihre Songs   übernommen   wie   das   elektronische Disco-Geplucker    von    Donna    Summer.    Sie haben  sich  und  ihre  Musik  vielfach  gedreht, verwandelt   und   erneuert.   Die   Simple   Minds wurden   zu   einer   der   größten   Bands   des Planeten,  standen  mit  ihrem  Überhit  ?Don?t  You (Forget About Me)? an der Spitze der US-Charts und  mit  fünf  ihrer  Alben  in  Großbritannien  auf Platz eins. Sie haben 60 Millionen Platten verkauft und die größten Stadien der Welt bis auf den letzten Platz ausverkauft. Oder um es mit den Worten von Jim Kerr zu sagen: ?Ich bin immer  sehr  stolz,  wenn  die  Leute  fragen:  Welche  Simple  Minds  meinst  du?  Die Avantgarde, die Art-Rocker, die Popband, das Ambient-Projekt, die Instrumentalgruppe,  die  politischen  Texter,  die  Folker,  die  Stadionrocker?  All  diese Stile gleichzeitig zu beherrschen, war immer die Quintessenz der Simple Minds und etwas    ganz    Besonderes.?    Das    war    und    ist    der    Motor, der    die    beiden Gründungsmitglieder  und  Kindheitsfreunde,  Sänger  Jim  Kerr  und  Gitarrist  Charlie Burchill, schon immer und bis heute, nach 40 gemeinsamen Jahren, antreibt. Dieses Jubiläum wollen die Simple Minds angemessen feiern. Zum einen erscheinen Anfang November  2019  das  Best-of-Album  ?40:  The  Best  Of  ? 1979-2019?  und  bereits Anfang Oktober das monströse Vier-CD-Live-Album ?Live In The City Of Angels? mit Songs aus allen Dekaden, mit allen großen Hits und selten gespielten Stücken ? zur Erinnerung: die erste und  überaus  erfolgreiche Live-Platte  hieß  ?Live  In  The  City  Of Light?. Zum anderen gehen die Simple Minds auf eine riesige Welttournee, die sie für sage und  schreibe  15  Termine  auch  zu  uns  nach  Deutschland  führt.  Auch  wenn  dabei Musik  aus allen  Teilen  der  langen und  sehr erfolgreichen Karriere gespielt  wird  und mit  Sicherheit  alle  Fan-Favoriten  dabei  sein  werden,  legen  Kerr  und  Burchill  doch großen Wert darauf, auch heute noch kreativ zu sein. ?Wir sind keine Rockband, die sich  gleich  bleibt.  Andererseits  haben  wir  nicht  das Line-up  gewechselt,  um  cool  zu wirken?,  sagt  Kerr.  ?Wir  machen  das,  weil  es  großartig  ist,  so  viele  unglaubliche Musiker an Bord zu haben. Ich bin sehr dankbar für das, was wir erreicht haben, aber ich  bin  auch  immer  noch  verrückt  genug,  zu  glauben,  dass  wir  immer  neue  Höhen erreichen  können.  Darum  machen  wir  das,  was  wir  tun:  Songs  schreiben,  Platten aufnehmen,  live  spielen.?  Und  Burchill  ergänzt:  ?Es  gab  viele  Inkarnationen  der Simple  Minds,  aber  wir  haben  immer  unsere  Identität  bewahrt.  So  ein  Vermächtnis kann  eine  Bürde  sein,  wenn  man  das  zulässt.  Aber  für  uns  war  es  ein  stetiger Antrieb.? Wenn zwei Musiker nach all den erfolgreichen Jahren immer noch so heiß darauf sind, live zu spielen, wenn sie es schaffen, sich immer wieder neu zu erfinden wie  zuletzt  mit  der  gefeierten  Platte  ?Walk  Between  Worlds?,  und  wenn  eine  Band immer  noch  so  überzeugend  gute  Konzerte  spielt  wie die  Simple  Minds,  kann  man ihnen  nichts  anderes  wünschen  als:  Alles  Gute  zu  40  Jahren  und  viele,  viele wunderbare Auftritte im kommenden Frühjahr!",
            "startDateTime": "3/17/22 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863780707&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/wPtionRE.jpeg"
        },
        {
            "id": "e28",
            "title": "Hundreds - The Current Tour",
            "description": "HUNDREDS kommen 2020 auf die Club-Bühnen zurückNach ihrer bereits ausverkauften Orchester-Show in der Elbphilharmonie anlässlich des 10-jährigen Bandjubiläums, kehren HUNDREDS im Frühling 2020 mit lauteren Tönen, einer beeindruckenden Performance und Lichtshow zurück zu ihren Wurzeln und spielen ihre große THE CURRENT Tour.Die Geschwister Eva und Philipp Milner zählen zu den großen Erlebnissen elektronischer Popmusik. Neben einem musikalischen Rückblick auf die letzte Dekade werden HUNDREDS Songs des neuen Albums, das für den Frühling 2020 angekündigt ist, präsentieren.Das Publikum erwarten behutsam arrangierte und mit großer Begeisterung vorgetragene Elektropop-Songs, die in ihrer melancholischen Ausstrahlung einzigartige und euphorisierende Abende versprechen.",
            "startDateTime": "5/10/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863780763&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/dAFbFr4Z.jpeg"
        },
        {
            "id": "e29",
            "title": "The Kilkennys - World Tour 2020",
            "description": "Die Vier Mann Frischzellen Kur des Irish Folk auch 2020 auf Deutschlandtournee! Seit über zwei Jahrzehnten sorgt die Band aus dem irischen Kilkenny international für frischen Wind in der Irish Folk Szene. Ob Eigenkomposition oder Neuinterpretation alter Klassiker ?im Zusammenspiel der vier Schulfreunde entsteht regelmäßig eine besondere Magie, die auch ein junges Publikum für die traditionelle irische Musik begeistert. Sind Robbie Campion (git, bj, mand, voc), Davey Cashin (git, bj, mand, whistle, voc), Tommy Mackey (b, git, voc) und Mick Martin (bodhran, whistle, uillean pipes, git, voc) alias The Kilkennys die rechtmäßigen Nachfolger legendärer Bands wie The Dubliners oder The Chieftains? Eine klare ?Ja/Nein? Antwort ist hier nicht so einfach, denn neben der Gemeinsamkeit der weltweiten Verbreitung traditioneller irischer Folk- und Songwriterkunst verfügen die Kilkennys nämlich über ein Alleinstellungsmerkmal, das die genannten Bands nicht hatten: Den vier Musikern aus dem Ort Kilkenny gelingt es, die Musiktradition ihrer Heimat um eine moderne Note zu erweitern, die die auch ein junges Publikum, das mit Irish Folk bisher wenig anfangen konnte, begeistert.Dass dies gelingt, liegt nicht zuletzt an ihren mitreißenden Konzerten, die jeden Konzertsaal im Handumdrehen in einen Irish Pub verwandeln und das gesamte Publikum zum Mitsingen bringen ? und das schließt selbst die zurückhaltendste Konzertbesucher*in mit ein! Jedes Bandmitglied beherrscht mehrere Instrumente, darunter traditionell irische wie den irischen Dudelsack Uillean Pipes oder die Rahmentrommel Bodhran, meisterhaft und bringt sein Können songdienlich ein. Unvergessen auch: Das absolute Markenzeichen der Kilkennys ? der gemeinsame Harmoniegesang, der bei absolut jedem im Publikum für Gänsehautmomente sorgt.Deshalb ist es nicht weiter verwunderlich, dass The Kilkennys die meiste Zeit des Jahres auf Tournee sind: Ob in Europa, den USA oder neuerdings Indien, wo sie als einer der erfolgreichsten tourenden irischen Act aller Zeiten gelten und ihre Konzerte regelmäßig kurz nach Ankündigung ausverkauft sind. Eines der allerersten Länder, in denen die Band ausserhalb ihrer Heimat getourt ist und Erfolge feiern konnte, ist Deutschland. Kein Wunder also, dass es zwischen den deutschen Fans und den Kilkennys eine besondere Verbindung gibt, die bis heute anhält. Deshalb ist die Freude auf beiden Seiten groß, wenn die Kilkennys im Oktober 2020 für 13 Konzerte durch ihre ?zweite Heimat? reisen!Foto: Mark Zanderink",
            "startDateTime": "10/2/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863780777&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/plLHMeNW.jpeg"
        },
        {
            "id": "e30",
            "title": "BHZ - Tour 2021",
            "description": "Für alle, die dabei waren. Geschichte wurde geschrieben. Für alle, die nicht dabei waren. Geschichte wird geschrieben. BHZ Tour 2020. BHZ Live bedeutet: Moshpits zur Einlass Mucke vor der Show. Aufwärmen für den Abriss. Die Clubs und Hallen glühen. Liebe von der Crowd, für die Crowd. Gang. Die Day-Ones haben das kommen sehen. Alle anderen begreifen es spätestens jetzt. Wenn ihr am nächsten Tag dann ohne Stimme aufwacht, spürt ihr den Nachklang des Abends: Irgendwas zwischen der liebevollsten Umarmung und einem Tritt in die Fresse. BHZ auf Tour. 2020. Wir sehen uns. Foto: Louise Amelie Müller und Aljaz Fuis",
            "startDateTime": "3/8/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863780909&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/vbClW7QJ.jpeg"
        },
        {
            "id": "e31",
            "title": "ORSO - Hooray for Hollywood - Filmmusik ? Musik im Film",
            "description": "ACHTUNG: aufgrund der Corona-Pandemie wird das Konzert auf einen noch unbestimmten Termin verschoben! Sobald wir mehr wissen, werden wir unsere Kunden informieren! Filmmusikkonzert des ORSOphilharmonic unter der Leitung von Wolfgang RoeseRund 200 Mitwirkende präsentieren unter dem Motto ?Filmmusik - Musik im Film? weltberühmte Melodien sowie Überraschendes und Unbekanntes aus fast 100 Jahren Filmschaffen. Von aktuellen Blockbustern über Filmklassiker bis hin zu klassischen Werken, die durch das Medium Film erst bekannter wurden, reicht das Spektrum.Neben der orchestralen Farbenpracht eines John Williams stehen zarte Chorklänge aus ?Les Choristes?. Hans Zimmers Piraten stehen Hanns Eislers Arbeitermillieu gegenüber. Borodin und Barber treffen Spiderman und James Bond, während Alice im Wunderland Figuren aus Star Wars und Harry Potter begegnet.Erleben Sie das Hollywood der 30er und 40er Jahre bis heute in einem vielfältigen Konzertprogramm.Mehr Info und Hörbeispiele unter www.fimu.orso.co",
            "startDateTime": "10/24/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863785567&a=774719&m=13738"
        },
        {
            "id": "e32",
            "title": "MUNDOLOGIA: Terra ? Ein Porträt der Erde",
            "description": "Michael Martin präsentiert sein neues Fotoprojekt: TERRA ? Ein Porträt der Erde. Michael Martin unternimmt hierfür in den Jahren 2017 bis 2020 mehr als dreißig Reisen und Expeditionen in weltweit ausgewählte Gebiete, welche die Vielfalt der Landschaften und Lebensformen auf der Erde zeigen. Natürlich stehen wieder Wüsten und Eisregionen auf dem Reiseplan, aber Michael Martin ist auch in Regenwäldern, auf Vulkanen, in Steppen und Savannen sowie auf Ozeanen unterwegs. Sein Ziel ist ein geographisches Portrait des Planeten Erde, das nicht nur die Erdgeschichte, sondern auch Zukunftsfragen einschließt. Der Kartenvorverkauf hat begonnen.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "2/3/23 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863789321&a=774719&m=13738"
        },
        {
            "id": "e33",
            "title": "Rolando Villazón & Xavier de Maistre - Serenata latina",
            "description": "Infolge der gesetzlichen Verordnungen zur Eindämmung der Corona-Pandemie und der damit einhergehenden unsicheren Planungssituation kann das Albert-Sonderkonzert mit Rolando Villazón & Xavier de Maistre am 2. Juli 2021 im Konzerthaus Freiburg leider nicht stattfinden.Wir freuen uns, dass es uns in Zusammenarbeit mit allen Beteiligten gelungen ist, das Konzert erneut zu verlegen. Neuer Konzerttermin ist nun Samstag, der 19. März 2022 um 18 Uhr im Konzerthaus Freiburg.Ihre Eintrittskarten behalten für den neuen Konzerttermin ihre Gültigkeit und müssen nicht eingetauscht werden. Bringen Sie Ihre Karten einfach zum neuen Konzerttermin mit.Sollten Sie den neuen Konzerttermin nicht wahrnehmen können, können Sie Ihre Eintrittskarten an der Vorverkaufsstelle, an der sie erworben wurden, zurückgeben. Aufgrund der aktuellen Situation sind verschiedene Vorverkaufsstellen nur eingeschränkt besetzt und erreichbar. Es kann daher bei der Rückerstattung zu Verzögerungen kommen.Hier die Kontaktdaten der wichtigsten Vorverkaufsstellen:BZ-Karten-Service, Tel. 0761 ? 496-8888, Email: info@bz-karten-service.deBuchhandlung Rombach, Tel. 0761 ? 4500-2432, Email: klassik@rombach.deReservix, Tel. 0761 ? 88788-11, Email: tickets@reservix.deAD ticket, Tel. 0180 ? 6050400Sollten Sie Ihre Karten direkt bei den Albert Konzerten erworben haben, senden Sie Ihre Karten bitte zusammen mit Angabe Ihrer Kontoverbindung an das Kartenbüro der Albert Konzerte:Albert Konzerte GmbH, Postfach 1349, 79013 FreiburgFür Rückfragen steht Ihnen das Kartenbüro der Albert Konzerte gerne zur Verfügung:Tel. 0761 ? 289442, Email: info@albert-konzerte.de-----------------------------------------------------------------------------------------Startenor tourt erstmals mit Harfenist Xavier de MaistreNur drei Konzerte in DeutschlandDer aus Mexiko stammende Opernsänger Rolando Villazón wartet im Herbst mit einem ganz besonderen Tournee-Programm auf: Erstmals in seiner Karriere überhaupt haben Klassikfans die Chance, ein lateinamerikanisches Programm zu erleben, bei dem er vom weltberühmten Harfenisten Xavier de Maistre begleitet wird. Musikliebhaber dürfen sich auf das kongeniale Zusammenspiel zweier Weltstars freuen: Sie werden eine ?Serenata latina? mit Stücken von Villa-Lobos, Ginastera, Silvio Rodriguez, Maria Grever, Guastavino u.a. zum Besten geben.Mit seinem allseits bekannten und beliebten Temperament und seinem mexikanischen Herzblut wird Rolando Villazón bei seinem Liederabend pure Emotion und musikalischen Hochgenuss erzeugen. Die ausgewählten Stücke von einigen der beliebtesten Komponisten Lateinamerikas wurden eigens für das Programm vom Tenor und dem Weltstar an der Harfe, Xavier de Maistre, neu bearbeitet und arrangiert. Die Veröffentlichung des dazugehörigen Albums ist für den Sommer 2020 geplant. Der musikalische Dialog der beiden Ausnahmekünstler verspricht ganz viel Corazón und technische Raffinesse.       Rolando Villazón ist ein Multigenie und es gibt kaum etwas, was er nicht kann. Neben seinen weltweiten Auftritten als einer der begnadetsten Operntenöre unserer Zeit widmet sich der Publikumsliebling zahllosen weiteren Leidenschaften: Er führt Regie, er moderiert, er schreibt Bücher, er zeichnet... Bei allen Begabungen ist er jedoch der Musik stets treu geblieben und hat seit seinem triumphalen Debüt bei den Salzburger Festspielen 2005 an der Seite von Anna Netrebko Standing Ovations in den bedeutendsten Opernhäusern der Welt geerntet und unzählige Auszeichnungen entgegengenommen. 2017 wurde er zum Mozart-Botschafter der Internationalen Stiftung Mozarteum Salzburg sowie zum Intendant der Mozart-Woche ernannt. Karitativ engagiert er sich seit vielen Jahren als Botschafter der RED NOSES Clowndoctors International. Im Dezember inszeniert er an der Deutschen Oper am Rhein Düsseldorf ?I puritani? von Vincenzo Bellini.Der in Toulon geborene Xavier de Maistre studierte das Harfenspiel am heimischen Konservatorium und verfeinerte seine Kunst im Anschluss bei Catherine Michel und Jacqueline Borot in Paris. 1998 wurde ihm die Ehre zuteil, als erster französischer Musiker bei den Wiener Philharmonikern zu agieren. Als Solist spielte er bereits unter Sir Simon Rattle, Sir André Previn, Riccardo Muti oder Daniele Gatti. Auf seinem aktuellen Album ?Serenata Espanola? arbeitete er mit der legendären Kastagnetten-Spielerin Lucero Tena. ?Die Harfe klingt mal sphärisch wie eine Glasharmonika, mal kehlig wie eine spanische Laute.?, so beschreibt Die Zeit de Maistres Harfenspiel. Bei den Albert Konzerten gab Xavier de Maistre im März 2019 ein gefeiertes Debüt mit der Filarmónica Joven de Colombia unter der Leitung von Andrés Orozco-Estrada.",
            "startDateTime": "3/19/22 18:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863790671&a=774719&m=13738"
        },
        {
            "id": "e34",
            "title": "Rabih Abou Khalil - Live 2022",
            "description": "Seine CDs sind hochkarätige Highlights in den Sammlungen zahlreicher Musikliebhaber, wahre Stilikonen ? musikalischer wie auch optischer Natur! Seine Konzerte sind großartige, hochvirtuose, weltmusikalische Höhepunkte zahlloser Festivals und Konzerttourneen. Soeben erschien, nach längerer Wartezeit, seine CD ?The Flood and the Fate of the Fish? bei enja records. Rabih Abou - Khalil ist ein Grenzgänger zwischen den Welten der von traditioneller arabischer Musik und europäischer Klassik bis hin zum offenen Jazz. Gleich einem Wanderer zwischen den Kulturen verbindet der im Libanon geborene und nach langem Aufenthalt in Deutschland mittlerweile in Frankreich lebende Oud-Virtuose und Komponist, arabische, europäische und amerikanische Musik zu einer hochintelligenten Melange, fernab jeglicher Worldmusic-Moden. Unvoreingenommen, mit wachem Geist, hoher spielerischer und kompositorischer Kompetenz und einer guten Portion Humor gelingt es ihm auf außergewöhnliche Weise, die oftmals konträren Welten miteinander zu verschmelzen. So scharte er auch große Namen aus der Welt des Jazz wie Charlie Mariano, Kenny Wheeler oder Joachim Kühn um sich, aber auch Klassiker: das Ensemble Modern, das Balanescu Quartett, das Kronos Quartett oder das BBC Symphony Orchestra. Seine Arbeit ist so erfolgreich, dass ihm in einem Jahr gleich fünfmal der Jazz Award verliehen wurde; 2002 erhielt er eine Ehrenurkunde zum Preis der deutschen Schallplattenkritik für sein Gesamtwerk.  Seine komplexen Kompositionen vereinen arabische Metren und Tonskalen wie auch ausgeprägte Improvisationen. Das Ergebnis ist eine frische Musik, faszinierend komplex, mitreißend virtuos, hochsinnlich. Kongeniale Begleiter und jahrelange Weggefährten sind der US-Amerikaner Jarrod Cagwin an Drums und Percussion sowie der italienische Akkordeonist Luciano Biondini.",
            "startDateTime": "1/30/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863792143&a=774719&m=13738"
        },
        {
            "id": "e35",
            "title": "Marc Amacher & Band - GrandHotel-Tour 2022",
            "description": "Roadhouse. Laut Wörterbuch steht hinter dem Begriff schlicht ?ein Wirtshaus oder eine Raststätte an der Landstraße?. Doch für Bluesfans hat das Wort eine tiefere Bedeutung: Darunter versteht man eine eher rowdyhaft Spelunke, in der wild getanzt, ausgiebig gebechert und laut und heftig musiziert wird. Mit seiner neuen LP Roadhouse nimmt Bluesrocker Marc Amacher den Hörer mit in diese hemmungslose Welt, wo alles erlaubt ist und Regeln nur da sind, um gebrochen zu werden. Das höchst explosive Album ist fest in der Bluestradition verankert, steht aber gleichzeitig für einen Musiker, der gerne die Grenzen des Genres auslotet.Marc Amacher begeisterte nicht nur Publikum und Jury von «The Voice of Germany» im Jahre 2016: Seine rauchige Stimme fällt immer und überall auf. Einordnen lässt er sich nicht gerne ? er macht spontan, emotional, dynamisch Musik. Der Autodidakt bekam seine erste Gitarre von seinem Großvater, die seither zu seinem ständigen Wegbegleiter wurde. Marc´s musikalische Einflüsse reichen von John Lee Hooker und R.L. Burnside über Jack White bis hin zu Motörhead oder AC/DCAmacher macht nicht Musik, er ist Musik, lebt Musik ? mit Leib und Seele. Der echte Blues, der originale Boogie-Woogie und der authentische Rock n´ Roll gehen mit seiner rauchiger Stimme direkt unter die Haut. So verwundert es kaum, dass ihm und seiner Band die Ehre zu Teil wurde, im Jahre 2019 drei Arenen- Shows in Berlin, Mannheim und Wien für `Mister Slowhand` Eric Clapton eröffnen zu dürfen und für sein im April 2019 erschienenes Studioalbum `Roadhouse` (Jazzhaus Records/ In-Akustik) den Preis der deutschen Schallplattenkritik in der Sparte `Blues` entgegennehmen zu dürfen. ?Amacher?, das ist Musik aus Leidenschaft und eine mitreißende Show ? faszinierend und immer wieder überraschend.Ganz ungefährlich ist der Genuss nicht: Er macht süchtig.",
            "startDateTime": "5/14/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863792559&a=774719&m=13738"
        },
        {
            "id": "e36",
            "title": "High South - peace, love & harmony  - Tour 2020",
            "description": "Ein Sound, der nach Sonne, Freiheit, der American Westcoast und wie kaum ein anderer nach den großen Vorbildern der Band klingt: legendäre 60s & 70s Harmony Vocal Groups wie THE EAGLES, THE BYRDS, AMERICA oder CROSBY,STILLS,NASH AND YOUNG. Die Magie und Zeitlosigkeit, die in den Songs aus diesem Jahrzehnt steckt, wurde nie durch irgendwelche Modeerscheinungen zerrieben und HIGH SOUTH sind genau diejenige Band, die den Spirit dieser Zeit in die Zukunft führen wird.Das Debütalbum ?NOW? schaffte es in einigen europäischen Ländern auf Anhieb in die Top 10 der Album-Charts und auch das zweite, von Chuck Ainlay, seines Zeichens u.a. Produzent von Dire Straits Mastermind Mark Knopfler, geschaffene Werk ?HIGH SOUTH? schaffte es wieder in die Top 10 und Top 20.Für das am 6. März 2020 angesetzte dritte Album ?PEACE, LOVE & HARMONY? kamen Produzenten- und Songwriterlegenden Stan Lynch und Josh Leo an Bord, um den Sound echter handmade american music noch authentischer umzusetzen. Zahlreiche namhafte Gäste von Bands wie Tom Petty and the Heartbreakers, The Doobie Brothers, The Allmann Brothers Band oder The Mavericks wirkten bei den Aufnahmen mit.Die gleichnamige Tour zum Album wird das Publikum wieder auf eine Zeitreise führen, in eine musikalische Ära, für die sich heute mehr Menschen begeistern, als jemals zuvor...",
            "startDateTime": "10/11/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863793055&a=774719&m=13738"
        },
        {
            "id": "e37",
            "title": "Umse - Guck ma einer an - Tour",
            "description": "Hip-Hop-Träume werden jetzt wahr. Nach Durch die Wolkendecke (2018) meldet sich Umse mit einem besonderen Album zurück. Es ist alles wie gehabt und doch völlig verändert auf ?Uno?, das in Gänze von der US-Beatmaker-Legende Nottz produziert wurde. Diese transatlantische Kollabo lässt Umses Flow Flügel wachsen, die klassischen, ungeschliffenen Sample-Beats von Nottz lassen ihn noch schärfer auf den Punkt kommen. Zusammen schalten die beiden alle Fragen von Zeit, Ort und Relevanz aus und machen eine perfekte Hip-Hop-Platte ? der alten Schule, wenn man so will. ?Uno? ist ein Statement für diesen ewig gültigen Sound, für das Rap-Handwerk und eine künstlerische Haltung zwischen Selbstvertrauen und Durchhalteparolen. Nur wenn du dir in diesem Spiel selbst treu bleibst, tun es die anderen auch.",
            "startDateTime": "3/26/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863793915&a=774719&m=13738"
        },
        {
            "id": "e38",
            "title": "Patricia Kelly - One More Year Tour 2021",
            "description": "2017 kommt The Kelly Family wieder zusammen und feiert ein riesiges Comeback. Das neue Album ?We Got Love? schießt direkt auf Platz 1 und erreicht in Deutschland und anderen europäischen Ländern dreifach Platin. Bisher verkaufte es sich 700.000 Mall. Die ersten Arena Konzerte in der Dortmunder Westfalenhalle sind innerhalb weniger Minuten ausverkauft. Die darauffolgende ?We Got Love? - Arena Tour ist ebenfalls ausverkauft und mehr als 400.000 Menschen in 7 Ländern haben The Kelly Family live gesehen. The Kelly Family ist größer als jemals zuvor und die Saga geht weiter. Eine weitere Arena Tour und Open Airs folgen 2019/2020 mit 49 Konzerten in 7 Ländern: Deutschland, Schweiz, Österreich, Polen, Tschechische Republik, Niederlande und Belgien. Nun geht Sie mit Ihren eigenen Album ?One More Year? auf Tour. Gleichnamiges Album wird am 6. März 2020 veröffentlicht.",
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
            "description": "Mit einem vielversprechenden neuen Studio-Album geht die Henrik Freischlader Band im Herbst 2020 auf Tour und freut sich darauf, überall dort zu spielen, wo handgemachte Musik noch gefragt ist. Abseits jeglicher Inszenierungen und Showelemente darf sich das Publikum auf eine Band freuen, die jeden Abend musikalisch neu und anders gestalten kann, und die Tradition des Blues durch die Flexibilität jedes Einzelnen sensibel in die heutige Zeit überführt. Henrik Freischlader hat sich in den vergangenen 15 Jahren seinen Platz in der Bluesszene erspielt. Mit 9 Studio- und 6 Livealben, gemeinsamen Auftritten mit BB King, Gary Moore, Peter Green und Johnny Winter, sowie unzähligen Konzerten in kleinen und großen Clubs, hat sich der Autodidakt seinem Publikum vorgestellt und freut sich heute über eine treue Fangemeinde. Moritz Meinschäfer (Schlagzeug), Armin Alic (Bass), Roman Babik (Hammond Orgel) und Marco Zügner (Saxophon) komplettieren seit zwei Jahren eine Band, die sich auch abseits der Bühne als eine Gemeinschaft versteht. Die Freude am Zusammenspiel, der Spaß an Dynamik und Improvisation und ganz besonders die Liebe zum kleinsten Detail zeichnen die fünf Musiker aus. Die rockige Ausrichtung früherer Tage trifft auf moderne und mitreißende Grooves und leidenschaftliche Soloeinlagen der einzelnen Musiker. ?Wenn eine Band es schafft, 20 Minuten lang bei Zimmerlautstärke über ein Drei-Ton-Riff so intensiv zu improvisieren, dass nicht eine Sekunde Langeweile aufkommt und das Publikum so mucksmäuschenstill zuhört, dass man eine Gitarrensaite hätte fallen hören können ? dann ist das große Kunst.",
            "startDateTime": "11/20/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863796933&a=774719&m=13738"
        },
        {
            "id": "e41",
            "title": "SDP - Die Unendlichste Tour 2022",
            "description": "Die Unendlichste Tour 2019Zu ihrer letzten Tour pilgerten insgesamt mehr als 130.000 Fans, die JubiläumsShow in der Berliner Wuhlheide im August 2019 mit 17.000 Besuchern war nach nur 20 Tagen restlos ausverkauft. Was lang ersehnt wurde, ist nun endlich offiziell: SDP gehen 2019 mit neuem Album auf Tour! Mit über 350 Mio. Views auf YouTube, den unzähligen Headliner-Slots auf allen großen Festivals und ihrem Status als eine der erfolgreichsten deutschen Bands im Streaming-Bereich ist klar, dass es bei SDP aktuell nur einen Weg gibt: steil nach oben. In der hiesigen Medienlandschaft bleiben Vincent und Dag dabei, zum Teil ganz bewusst, weitestgehend unter dem Radar. So werden die Jungs - vor allem in Anbetracht des mittlerweile überwältigenden Erfolges - ihrem Titel als ?Die Bekannteste Unbekannte Band der Welt? mehr als gerecht. Kein Wunder also, dass die Spannung auf das für den 1. März 2019 angekündigte Album der Westberliner Kultband unaufhaltsam steigt! Auch auf ?Die Unendlichste Geschichte? ? dem 9. Studioalbum in 20 Jahren Bandgeschichte - bleiben SDP sich treu: ?Wir versuchen immer wieder Neues auszuprobieren. Sowohl von den Themen der Songs her, den stilistischen Mischungen und Brüchen, aber auch hinsichtlich des Klanges unserer Stimmen. Aber trotzdem haben wir anscheinend einen eigenen Stil entwickelt und können gar nicht anders, als ein richtiges SDP-Album zu machen.? Keine andere deutsche Band schafft eine ähnlich schamlose Fusion der Genres. Die aberwitzige musikalische Mischung aus ruhigeren und emotionalen Liedern, knallbunten Motivationssongs und harten Rocksongs gibt es 2019 dann endlich auch wieder live!",
            "startDateTime": "5/26/22 19:30",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863798633&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/Pv18hXLQ.jpeg"
        },
        {
            "id": "e42",
            "title": "Richterkabarett - In dubio prosecco!",
            "description": "Das Richterkabarett vermittelt Ihnen seine Sicht auf die Welt der Justiz und die restliche Welt nicht durch Übertreibung, sondern durch Untertreibung. Was bleibt ihm auch übrig, wenn - richterlicher Durchschnitt das Maß aller Dinge ist,- Flüchtlinge entweder im Mittelmeer oder im Paragraphen-Meer untergehen,- Politiker/innen in Zwangshaft kommen sollen  und ? außer Erdogan - übelst beschimpft werden dürfen, - Kopftücher mit Kreuzen bekämpft werden,- 90-jährige ehemalige KZ-Wächter vor das Jugendgericht kommen, - Heimatgefühle nur noch Rechtsradikalen vorbehalten sind und - jedes dumme Volk sich für das Volk hält?Die vom Kölner Theaterregisseur Janosch Roloff betreuten Szenen, Glossen und Gesänge zeigen es auf: Richter sind auch nur Unmenschen.Nach Gastspielen zuletzt in Koblenz, München, Mannheim, Leipzig, Frankfurt, Darmstadt und Düsseldorf gastieren sie 2020 in Weimar, Freiburg und Hamburg. Dabei gibt es wieder Neue und Neues aus der Anstalt des Rechts, dem Land der Richter und Blender. Bei diesem Richtfest gilt natürlich: In dubio prosecco!",
            "startDateTime": "9/24/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863798755&a=774719&m=13738"
        },
        {
            "id": "e43",
            "title": "Fischer-Z - Swimming In Thunderstorms - Tour 2020",
            "description": "John Watts ist schon seit 42 Jahren mit seiner Band FISCHER-Z im Geschäft. In seiner erfolgreichen Karriere hat der Rockmusiker 20 Alben veröffentlicht und insgesamt 2 Mio. Alben verkauft. Dabei waren Künstler wie Peter Gabriel, Steve Cropper und Dexy?s Midnight Runners? Brass Section Feature Artists. FISCHER-Z kann auf über 3.000 Konzerte weltweit zurückblicken und ist mit James Brown in Ost-Berlin, mit The Police und den Dire Straits auf Tour aufgetreten. Sogar Bob Marley begleitete er auf dessen letzter europäischer Festival-Tour. In den letzten Jahren hat sich der musikalisch vielseitige John Watts außerdem einen Ruf als MultimediaKünstler zugelegt und schreibt auch Theaterstücke und Gedichte. Dabei ist all seinen beeindruckenden und facettenreichen Werken eine Begeisterung, Leidenschaft und Menschlichkeit gemeinsam. Watts? verschmitzte Kreativität lässt sich bereits am Bandnamen ablesen, ein Wortspiel mit dem Ausdruck ?fish?s head? (Fischkopf): mit britischen Akzent ausgesprochen ergibt sich klanglich ?Fischer-Z?. Fish?s Head war auch der Name des fünften Albums der Formation. Auch für die Entstehung seiner Alben greift John Watts, der sich als junger Künstler mit FISCHER-Z durch die Punk Clubs gerockt hat, zu kreativen Mitteln. Für das Album ?It has to be? sprach er mit Fremden in zehn europäischen Ländern und schrieb für jeden Menschen und seine Geschichte einen Song. Für ?Ether Music & Film? nahm er, ausgerüstet nur mit seinem Laptop, Songs mit Musikern auf Straßen und in ihren Wohnungen auf. Das Jahr 2017 war ein besonders intensives für FISCHER-Z. Die Band feierte das 40. Jubiläum der ersten Show, die Veröffentlichung des 20. Studioalbums ?Building Bridges? und kehrte zu den Venues von früher zurück: große Locations ausverkauft, erneute Auftritte auf den großen Festivals der Welt. Mit dem Launch der innovativen F-Card, einer kreditkartengroßen USB-Chipkarte, die unveröffentlichte Tracks und Fanclub-Vorteile bereithält, beschreitet FISCHER-Z zudem neues Terrain im Marketing. 2019 feiern FISCHER-Z nun mit der Veröffentlichung von ?Swimming in Thunderstorms? am 30. August 2019 ihr Jubiläum ?40 Jahre erfolgreiche Albumgeschichte?. Das neue Album ist persönlich, politisch, leidenschaftlich ? wie viele seiner Vorgänger. Die Dekonstruktion der lange etablierten parlamentarischen Demokratie durch Online-Kanäle und -Einflüsse, die Verschiebung des Verständnisses von Moral, Diplomatie und Anstand im öffentlichen Sektor beschäftigt wohl jeden aufgeklärten Politikinteressierten. So auch John Watts, der seine Sicht auf die Dinge in einer zeitgemäßen Form musikalisch verarbeitet. Während Watts sein Songwriting auf gewohnt höchstem Niveau und seinen eigenwilligen Beobachtungswitzes beibehält, hat er für das neue Album eine Gruppe von Musikern gefunden, die der Breite und Tiefe seiner musikalischen Ideen gerecht werden. Diese neue Formation aus John Watts als Sänger und Gitarrist, Sin Banovic am Schlagzeug, David Purdye am Bass, Adrien Rhodes am Keyboard und Marian Menge an der zweiten Gitarre wird als bleibende neue Band vorgestellt. Support Act auf der Tournee wird der brillante amerikanische Singer-Songwriter Luke Elliot sein.",
            "startDateTime": "10/22/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863799563&a=774719&m=13738"
        },
        {
            "id": "e44",
            "title": "Walter Trout - Survivor Blues ? European Tour 2020",
            "description": "Walter Trout ist wohl das, was man sich unter einem harten Hund vorstellen darf: Der US-Gitarrist mischt seit mehr als einem halben Jahrhundert an vorderster Stelle im Rockzirkus mit, und längst schon gilt er als einer der wichtigsten Blues- und insbesondere Bluesrock-Protagonisten aller Zeiten. Zu einem kaum noch für möglich gehaltenen erneuten künstlerischen Höhenflug setzte der heute 67-Jährige an, nachdem er 2014 von einer lebensbedrohlichen Erkrankung genesen und wieder zu Kräften gekommen war.Walter Trout hatte unter anderem mit John Lee Hooker, bei Canned Heat und in John Mayalls Band gespielt, bevor er ab 1990 unter eigenem Namen mehr als zwanzig Platten veröffentlichte und unermüdlich tourte. 2014 aber kam die Zäsur: Nachdem ihn lange gesundheitliche Probleme plagten, sah Trout dem Tod ins Auge. Er wurde mit einer unheilbaren Lebererkrankung in eine Spezialklinik in Nebraska eingeliefert, wo ihm eine Organtransplantation das Leben rettete. Weil er nicht ausreichend krankenversichert war, musste die Operation mit einer groß angelegten Spendenaktion finanziert werden. Dass dies gelang, erfüllt den Musiker seinen eigenen Worten zufolge bis heute mit unendlicher Dankbarkeit. ?Jetzt bin ich in der Lage, so gut zu spielen wie seit Jahren nicht?, gab er gleich nach seiner Rekonvaleszenz zu Protokoll, ?ich fühle mich wie neu geboren und kann es kaum erwarten, wieder unterwegs zu sein.?Gesagt, getan ? zur Freude und zum Erstaunen seiner Fans in aller Welt geht es seither in rascher Folge Schlag auf Schlag: Auf das bewegende Comeback-Album ?Battle Scars? (2015) folgten ein hervorragender Konzertmitschnitt namens ?Alive in Amsterdam? (2016) und wenig später der von Trout mit einem Allstar-Lineup eingespielte und bald nach Erscheinen mit vier ?Blues Rock Album Of The Year? ausgezeichnete Longplayer ?We?re All in This Together? (2017). Während ?We?re All in This Together? noch nachwirkte, machte Trout sich bereits darüber Gedanken, wie es anschließend weitergehen solllte. Inzwischen ist klar: Er arbeitete am Konzept eines sehr speziellen Blues-Coveralbums. Trout erklärt: ?Dabei hatte ich nicht so etwas wie eine Zusammenstellung viel strapazierter Greatest Hits im Kopf. Nein, ich wollte etliche fast in Vergessenheit geratene alte Bluessongs neu aufnehmen, die bisher selten oder noch nie gecovert worden sind. So nahmen die Dinge ihren Lauf.? Was aus diesen Überlegungen entstanden ist, zeigt sich jetzt auf Walter Trouts neuem Output ?Survivor Blues?. Das Album erschien am 25. Januar 2019 auf CD, digital, sowie als Doppel-LP mit beigelegtem Download-Code bei der Mascot Label Group.?Ich habe großen Respekt vor Musikern wie Neil Young oder Bob Dylan, die sich weit aus dem Fenster lehnen und dabei immer wieder mit Überraschungen aufwarten?, sagt Walter Trout. ?Bei ihnen weiß man nie so genau, womit sie als nächstes um die Ecke kommen.? Trout selbst hält es gerne ebenso. Ein Dutzend Stücke fanden letztlich den Weg auf ?Survivor Blues?, darunter Titel von Jimmy Dawkins (?Me, My Guitar And The Blues?), Sunnyland Slim (?Be Careful How You Vote?), Otis Rush (?It Takes Time?), Luther Johnson (?Woman Don?t Lie?), J.B. Lenoir (?God?s Word?), Hound Dog Taylor (?Sadie?) und Mississippi Fred McDowell (?Goin? Down To The River?). Darüber hinaus zieht Trout wieder einmal vor seinem Freund und Mentor John Mayall den Hut, mit einer Neuinterpretation des Mayall-Stückes ?Nature?s Disappearing? von dessen 1970 erschienem Album ?USA Union?.Aufgenommen wurde ?Survivor Blues? mit Produzent Eric Corne in Los Angeles, im Studio des früheren The-Doors-Gitarristen Robby Krieger, der beim Stück ?Goin´ Down To The River? einen Gastauftritt hat. Die hier zu hörende Band setzt sich neben Walter Trout selbst aus Bassist Johnny Griparic, Skip Edwards an den Keyboards und Drummer Michael Leasure zusammen. Erklärtes Ziel aller Beteiligten war es, besagte Blues-Traditionals nicht etwa Note für Note nachzuspielen, sondern diese gänzlich neu arrangiert auf ein zeitgemäßes Level im unverkennbaren Trout-Stil zu heben. Die Idee für den Albumtitel stammt vom Walter Trouts Frau und Managerin Marie ? doppeldeutig spielt er sowohl auf das auf dem Album vertretene Songmaterial als auch auf Trouts persönliches Schicksal an, das sich mit viel Glück zum Guten gewendet hat. Walter Trout selbst bringt das Ganze mit einem Augenzwinkern so auf den Punkt: ?Meine Karriere läuft wie geschmiert, meinen Kindern geht es prima, Marie und ich lieben uns wie am ersten Tag, und mit meiner Gesundheit ist alles in Butter. Alles in allem sieht es ganz so aus, als hätte ich gerade die beste Zeit meines Lebens.?",
            "startDateTime": "9/14/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863801679&a=774719&m=13738"
        },
        {
            "id": "e45",
            "title": "Die Boogie Woogie Weihnachtsexplosion zum 3. Advent",
            "description": "Thomas Scheytt, Christoph Pfaff, Hiram Mutschler-------------------------------------------------Bitte beachten Sie die Corona-Hinweise unten und die Informationen bei Ihrer Online-Buchung!-------------------------------------------------2016  feierten sie ihr 25-jähriges Bestehen, seit langem zählen sie zur Spitze in der internationalen Blues- & Boogie - Szene: Christoph Pfaff, Thomas Scheytt, Hiram Mutschler und ihre BOOGIE CONNECTION.?Wenn der Boogie nicht in Amerika, sondern im Schwarzwald entstanden wäre, dann stünde als Geburtsstätte Freiburg in den Jazzlexika und die Musik würde dann so klingen, wie sie die Boogie Connection spielt. Die dreiköpfige Band braut eine heiße Mischung aus Blues, Boogie, Rhythm`n`Blues und Soul?, schreibt das Jazzpodium. Mit über hundert Konzerten pro Jahr, darunter Auftritten bei nahezu allen bedeutenden Jazzfestivals in Deutschland und im europäischen Ausland, gehören sie zu den erfolgreichsten Bands, die Freiburg je hervorgebracht hatBOOGIE CONNECTION ?Noch spartanischer geht es nicht: Ein Piano, eine Gitarre und ein Schlagzeug ? mehr braucht es nicht, um die Fans binnen kürzester Zeit von ihren Stühlen zu holen.? (Südkurier)?Eine heiße Mischung aus Blues, Soul, Boogie-Woogie und totalem Rhythm`n`Blues, wie man sie einzigartiger Weise nur mit der Boogie Connection aus Freiburg/Breisgau erleben kann. In diesem Musikgenre sind Christoph Pfaff, Thomas Scheytt und Hiram Mutschler nach wie vor die unerreichten Könige der internationalen Live-Jazz-Szene.? (Schaffhauser Nachrichten)Besetzung: Christoph Pfaff: Gesang, Gitarre, MundharmonikaThomas Scheytt: PianoHiram Mutschler: Schlagzeug--------------------------------------------------------------------------------------------------------------------------------------------------------Aktuelle Hinweise:Die Bestuhlung am Tisch weicht von dem bei der Buchung angezeigten Saalplan ab, um die Mindestabstände der Corona-Verordnung gewährleisten zu können. Die Stuhlanordnung am Tisch wird vorgegeben, bitte behalten Sie diese während der gesamten Vorstellung bei.Bitte bringen Sie eine Mund-Nasen-Bedeckung mit, der Ein- und Auslass wird nur mit einer Mund-Nasen-Bedeckung gestattet.Für Gruppenbuchungen ab 5 Personen kontaktieren Sie bitte direkt die Alemannische Bühne unter: info@alemannische-buehne.de oder Tel: 0761 39229 zu folgenden Telefonzeiten (ab 10.08.20): dienstags und donnerstags von 10.00 Uhr -11.30 Uhr. Wir werden versuchen, Ihre Gruppe an einen Tisch oder- je nach Gruppengröße- an nebeneinanderliegende Tische zusammenzusetzen. Wir danken Ihnen für Ihre Unterstützung und Ihr Verständnis bzgl. der aus der aktuellen Situation resultierenden Veränderungen Ihres Theaterbesuchs bei uns. Wir freuen uns auf Sie und einen schönen Abend in unserem Theater! Bis bald in Ihrer Alemannischen Bühne Freiburg.",
            "startDateTime": "12/12/21 19:00",
            "venueId": "v20",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867270543&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/VZUwyO1C.jpeg"
        },
        {
            "id": "e46",
            "title": "BLACK SEA DAHU",
            "description": "Zu ertrinken kann auch eine Form der Kapitulation sein. Du wählst, immer tiefer ins Wasser zu waten, und lässt dich dann von den Wellen verzehren, unterwirfst deine gesamte Existenz ihrer zähen und unnachgiebigen Kraft. Denn es gibt nichts, was dich wieder an Land erwartet. No Fire In The Sand, die Folge-EP zum gelobten Debütalbum White Creatures von Black Sea Dahu, handelt von dieser Art von Resignation. Von diesem besonderen post-Beziehung / Tiefwasser-Trauma; gezeichnet mit pointillistischer und poetischer Genauigkeit. Die Musik ebbt an und fließt zwischen Verleugnung, Schuld, Wut, Qual und Selbstmitleid. Aber die Fähigkeit, der Wille und der Drang, über diese qualvollen Wahrheiten zu sprechen, wirkt auch seltsam ermächtigend. Wie sein Vorgänger entstand No Fire in the Sand im einem abgelegenen Studio auf der wunderschönen norwegischen Insel Giske, wieder von Gavin Gardiner (The Wooden Sky) aufgenommen und produziert. Die Musik ist im rohen, leidenschaftlichen, urbanen Folk verwurzelt, der auch schon auf White Creatures zu hören ist. Nur etwas dunkler, etwas tiefer. Und obwohl die Arrangements kraftvoll und vielschichtig bleiben, sind diese neuen Stücke emotional noch direkter und noch aufschlussreicher. Und fordern vollständige Hingabe und Aufmerksamkeit.",
            "startDateTime": "3/17/22 21:00",
            "venueId": "v21",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867275365&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/UcNXVXkV.jpeg"
        },
        {
            "id": "e47",
            "title": "Torsten Sträter",
            "description": "Torsten Sträter entert am Samstag, dem 14.08., mit seinem ?Sommer Spezial? die Bühne der Volksbank Arena. Er tritt regelmäßig bei Fernsehsendungen wie Nuhr im Ersten und Extra 3 auf oder brilliert aktuell bei Formaten wie ?LOL: Last One Laughing? oder beim Gipfeltreffen mit Johann König und Olaf Schubert. Bekannt wurde Sträter mit seinen unverwechselbaren Geschichten und nie enden wollenden Sätzen. Es wird ein Abend in sonorstem Deutsch, eine große Tüte Pointen lässig runtergebrummt - dazu, dazwischen, oben drüber: Geschichten, die man jetzt mal nicht von YouTube oder aus dem TV kennt. Der Mann mit der Mütze, ein absoluter Genuss für jeden Fan des gepflegten Humors.",
            "startDateTime": "3/30/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867275771&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/nt1YgK1K.jpeg"
        },
        {
            "id": "e48",
            "title": "die feisten - Das Feinste der feisten",
            "description": "Alles verändert sich, das ist unabänderlich. Selbst im Paradies ist nicht mehr alles so, wie es einmal war: Der Song ?Adam & Eva? erzählt die Geschichte, die wir alle aus der Kinderbibel kennen, mit den Augen der feisten. Funky Grooves auf der Mandoline lassen Lücken für Worte und Gedanken, wie sie nur die beiden frischgekürten Träger des Kleinkunstpreises 2017 erklingen lassen können. Ihre ungewöhnliche Sicht auf die Welt lässt Lieder entstehen, die den unvorbereiteten Konzertbesucher vor Lachen nicht in den Schlaf kommen lassen.",
            "startDateTime": "10/30/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867277033&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/dVr6XNwR.jpeg"
        },
        {
            "id": "e49",
            "title": "MUNDOLOGIA-Seminar: Streetfotografie",
            "description": "Das Leben spielt auf der StraßeBereits seit den Anfängen der Fotografie gibt es kaum ein Foto-Genre, welches selbst die großen Fotografen so in ihren Bann zieht, wie die Straßenfotografie. In diesem 3,5-stündigen Theorie- Seminar vermitteln wir die wichtigsten Grundlagen und beschäftigen uns eingehend mit dem heutigen Verständnis der Straßenfotografie.Weitere Informationen zu diesem Seminar finden Sie unter www.mundologia.de!",
            "startDateTime": "2/5/22 15:30",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867278031&a=774719&m=13738"
        },
        {
            "id": "e50",
            "title": "Grandsheiks - playing Frank Zappa feat. Napoleon Murphy Brock",
            "description": "Die GRANDSHEIKS werden seit vielen Jahren von Publikum und Presse für ihre Virtuosität und musikalische Vielseitigkeit gefeiert. Mit ausgefeilten Arrangements, leidenschaftlicher Spielfreude und dem nötigen Humor bringen sie die einzigartigen Kompositionen des Meisters zum Strahlen. Sie begeistern Insider wie Neulinge. Die komplizierten Strukturen, überraschenden Wendungen und schnellen Tempowechsel werden lustvoll und scheinbar schwerelos präsentiert. Natürlich kommt bei aller Komplexität auch der nötige Humor nicht zu kurz. Eine elektrisierende Hommage an das avantgardistische Genie Zappa! NAPOLEON MURPHY BROCK, Grammy Gewinner und legendärer Frontmann der Mothers Of Invention? ist ein treuer Freund der Band. Er ist regelmäßig als Gast mit den GRANDSHEIKS auf Tour,  für ihn eine der besten Zappa-Bands Europas: ?The GRANDSHEIKS are grandmasters of Zappa-music!?",
            "startDateTime": "11/5/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867285069&a=774719&m=13738"
        },
        {
            "id": "e51",
            "title": "MUNDOLOGIA: Bertrand Piccard - Der Jahrhundertpionier",
            "description": "Stargast des 18. MUNDOLOGIA-FestivalsBertrand Piccard ist Spross einer weltberühmten Forscher-Dynastie: Der Großvater eroberte mit einem Gasballon die Stratosphäre, der Vater in einer Tauchkapsel die Tiefsee. Bertrand selbst schrieb mit dem ersten Nonstop-Ballonflug rund um die Welt und der Erdumrundung im Solarflieger Luftfahrtgeschichte. Erleben Sie einen großen Vordenker und Visionär unserer Zeit live!Vortrag in deutscher Sprache.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "2/5/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867289591&a=774719&m=13738"
        },
        {
            "id": "e52",
            "title": "MUNDOLOGIA: Überirdisch - Die Welt von oben",
            "description": "Drohnenfotografie der Extraklasse: Mit fliegenden Kameras lässt uns der Schweizer Fotograf Stefan Forster die Schönheit der Erde neu erleben. Seine spektakulären Fotos, aufgenommen auf fünf Kontinenten, zeigen Natur- und Kulturlandschaften, Berge und Küsten, Siedlungen und Städte aus ungewohnten Perspektiven und offenbaren abstrakte Muster. Eine bildgewaltige Show der Superlative, spannend und witzig kommentiert.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "2/6/22 18:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867290575&a=774719&m=13738"
        },
        {
            "id": "e53",
            "title": "Jamaram Meets Jahcoustix - Live 2021",
            "description": "Die Party geht weiter - 20 Jahre Road-Circus mit Reggae, Dubwise und Worldmusic! 20 Jahre JAMARAM!!Wir sind noch lange nicht platt, der runde Geburtstag wird nach 12 Alben und über 2.000 Konzerten in 30 Ländern mit diversen Releases und noch mehr Live-Konzerten ausgelassen gefeiert. Freut euch mit uns auf Hits und Sensationen aus 20 Jahren Bandgeschichte und auf unseren langjährigen Compañero und Reggae-Veteranen JAHCOUSTIX, der 2020 bei einem Großteil der Shows mit im Boot ist. Seid dabei, es wird definitiv fett!",
            "startDateTime": "11/12/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867290635&a=774719&m=13738"
        },
        {
            "id": "e54",
            "title": "Bobby Sparks - Schizophrenia Tour 2022",
            "description": "Es hat gedauert, um diese außergewöhnliche Sammlung unterschiedlichster Songs zu produziern. Aber es hat sich mehr als gelohnt - zeigt sich darin doch das breite musikalische Vokabular und der schier unerschöpfliche Schaffensdrang des Keyboarders Bobby Sparks. Vom slammenden Funk bis zu langsamen, groovigen Soul-Balladen und Streifzügen in die Genres Straight-ahead-Jazz, Fusion, Orchester- und Weltmusik: das sehr passend betitelte Album Schizophrenia - The Yang Project vereinigt eine Vielzahl verschiedener Musikstile in sich, ohne dabei das Gesamtbild aus den Augen zu lassen",
            "startDateTime": "5/15/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867290641&a=774719&m=13738"
        },
        {
            "id": "e55",
            "title": "Das Phantom der Oper - Die Originalproduktion von Sasson/Sautter",
            "description": "DAS PHANTOM DER OPERDie Originalproduktion von Sasson/Sautter mit Deborah Sasson und Uwe KrögerDie erfolgreiche Tournee Produktion kommt zurück mit einer hochkarätigen Starbesetzung.Nach dem überragenden Erfolg der Tournee 2019/20 und auf Wunsch ihrer Fans, konnte Weltstar Deborah Sasson ein weiteres Mal dafür gewonnen werden, in der Saison 2020/21 in der Rolle der Christine auf der Bühne zu stehen. Das Zusammenspiel der Sängerin mit Deutschlands Musicalstar Nummer 1, Uwe Kröger, der weiterhin die Rolle des Phantoms übernimmt, wurde vom Publikum und von der Presse allerorts gefeiert.Christine ist von zwei faszinierenden Männern hin- und hergerissen, ihrem geheimnisvollen Mentor, dem Phantom der Oper, und ihrer Jugendliebe, dem reichen und attraktiven Grafen Raoul. Ein echtes Musicalhighlight!Das spektakuläre Bühnenbild, das sowohl von den effektvollen, dreidimensionalen Videoprojektionen des international gefeierten Multimediakünstlers Daniel Stryjecki als auch von den grandiosen Bühnenelementen, gebaut von Michael Scott der Metropolitan Opera in New York, lebt, wurde noch einmal mit neuen Elementen überarbeitet. Der dramatische Sturz des Lüsters, das geheimnisvolle Stelldichein auf dem Dach der Oper, die unterirdische Bootsfahrt, die unheimliche Begegnung auf dem Friedhof und die furchterregende Unterwelt der Oper werden nun noch plastischer dargestellt.Seit 2010 fesselt ?Das Phantom der Oper? des Autoren Teams Deborah Sasson und Jochen Sautter die Zuschauer auf über 500 Bühnen Europas. Damit ist diese musikalische Neuinszenierung, die einst zum 100. Geburtstags des 1910 von Gaston Leroux geschriebenen Romans ?Le Fantôme de lOpéra? entstand, eines der erfolgreichsten Tournee Musicals Europas. Die Produktion hebt sich von allen bisherigen musikalischen Interpretationen des Literaturstoffes ab, indem es sich näher an die Romanvorlage hält und in Teilen der von Sasson komponierten Musik bekannte Opernzitate einbindet.Die Rolle der Christine interpretiert die weltweit gefeierte Bostoner Sopranistin und Echo Klassik Preisträgerin Deborah Sasson. Ihre facettenreiche und kraftvolle Stimme ist perfekt für diese Mischung aus Oper und Musical. Das Phantom wird von Uwe Kröger gespielt, der seit seinem Durchbruch in der Rolle des Todes in der Welturaufführung von Elisabeth die Herzen des Publikums eroberte. Er spielte unter anderem die Hauptrollen in den Uraufführungen Rebecca, Mozart, Der Besuch der alten Dame, Heidi und in den deutschsprachigen Erstaufführungen von Sunset Boulevard, Miss Saigon, Doctor Dolittle, The Addams Family sowie Napoleon am Londoner Westend. Nun schlüpft er bei dieser Produktion in die Rolle des von der Welt gefürchteten und innerlich zerrissenen Phantoms.Jochen Sautter ist in der Rolle des reichen, attraktiven Grafen Raoul de Chagny zu sehen.Des Weiteren wirkt ein großes Ensemble ausgewählter Sänger, Tänzer und Schauspieler aus dem deutschsprachigen Raum mit.Autoren: Deborah Sasson und Jochen SautterMusikarrangements: Peter MossLiedtexte und Dialoge: Jochen SautterKomposition und Musikalische Gestaltung: Deborah SassonRegie und Choreografie: Jochen SautterBühnenausstattung: Michael ScottMultimedia Technik: Daniel StryjeckiMusikalische Direktion: Sebastian Peter ZippelKünstlerischer Gesamtleitung: Deborah Sasson und Jochen Sautter",
            "startDateTime": "3/4/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25898706309&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/cfeTPvCi.jpeg"
        },
        {
            "id": "e56",
            "title": "Andrew Lloyd Webber Musical Gala - Honouring one of the greatest Musical Composers",
            "description": "Eine mitreißende Musical-Show Gala zeigt die Vielseitigkeit Andrew Lloyd Webbers auf? Hört man Titel wie ?Don?t Cry for me Argentina?, ?Memories? oder ?Starlight Express?, erklingt bei denmeisten Menschen sofort die dazugehörige Melodie im Kopf. Welthits wie diese und viele weitere bekannte Musical-Melodien nehmen das Publikum mit auf eine Reise in die wunderbare Welt des KomponistenAndrew Lloyd Webber. Großartige Sänger und Tänzer präsentieren die eingängigen Musical-Titel vor einerminimalistischen Kulisse und fast ohne Requisite. Einzig der Gesang, die farbenfrohen Kostüme sowie das Multimediadesign (entworfen von dem polnischen Künstler Daniel Stryjecki) entführen das Publikum unter anderem in die Pariser Katakomben des Phantoms, auf die Schienen von Starlight Express oder auf Los Angeles bekannteste Straße, den Sunset Boulevard. Instrumental begleitet werden die Akteure aus dem Londoner West End von einem14-köpfigen, internationalen Orchester, das unter der Leitung des Dirigenten und Arrangeurs Piotr Oleksiak die Stücke ebenso gefühlvoll wie professionell interpretiert.Durch die Show führt Musicaldarsteller Tyrone Chambers. Zwischen den Gesangsstücken unterhält er das Publikum mit spannenden Informationen rund um Lord Andrew Lloyd Webber sowie mit Hintergründen oder der Entstehungsgeschichte der einzelnen Werke.Der aus New Orleans stammende, stimmgewaltige Tenor verleiht der Veranstaltung mit seiner Lässigkeit undseinem unvergleichlichen Soul einen Hauch von Broadway.Jochen Sautter (Konzeption und Regie) und Deborah Sasson (künstlerische und musikalische Beratung) haben mit der Gala zu Ehren des größten zeitgenössischen Musical-Komponisten ein kurzweiliges Unterhaltungsprogramm geschaffen.",
            "startDateTime": "12/26/21 19:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25898708069&a=774719&m=13738"
        },
        {
            "id": "e57",
            "title": "THE CORONAS - live 2020",
            "description": "THE CORONAS ist eine vierköpfige Indie-Rockband aus Terenure, Dublin. Gegründet wurden sie unter dem Namen ?Kiros?, als die Musiker gerade 15 Jahre alt waren. Seit 2003 haben die vier Freunde, die seit gemeinsamen Highschool-Zeiten zusammen auftreten, verlässlich jede ihrer Veröffentlichungen hoch in die irischen Charts gebracht.Ihr lebendiger Alternative-Rock mit unleugbarem Pop-Appeal hat auch in den USA gezündet, wo die jungen Iren im Rahmen ihrer Tournee begeisterte Reaktionen ernteten.Das erste Album ?Heroes or Ghosts? wurde im Oktober 2007 veröffentlicht, und kam in den irischen Charts auf Platz 24. Das zweite Album ?Tony Was An Ex-Con? wurde am 25. September 2009 veröffentlicht und erreichte Platz 3. Es gewann 2010 den Meteor Award für das beste Album, vor U2 und Snow Patrol. 2011 veröffentlichte die Band ihr drittes Studioalbum Closer to You, das von Tony Hoffer (The Kooks) produziert wurde.Nun sind sie zurück und kommen mit einem neuen Album im Gepäck auf Deutschland Tour.",
            "startDateTime": "10/29/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25953872885&a=774719&m=13738"
        },
        {
            "id": "e58",
            "title": "Mad Caddies - Celebrating 26 Years - European Tour 2021",
            "description": "Schon immer wurden die Mad Caddies von vielen Seiten beeinflusst: Seit ihrer Gründung in Solvang 1995 verbindet die Band klassischen Reggea, Dub, Ska, Dancehall, Two-tone und Punk zu ihrem einzigartigen Stil.Seit 20 Jahren macht Mad Caddies Musik, die sich nicht den klassischen Genres zuordnen lässt - mit dem Punk-Cover Album Punk Rocksteady beweisen sie, dass sie in der Lage sind, etwas Außergewöhnliches zu kreieren.",
            "startDateTime": "8/8/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25953872915&a=774719&m=13738"
        },
        {
            "id": "e59",
            "title": "MUNDOLOGIA: Irak - Kurdistan",
            "description": "Eine Reise ins unbekannte KurdistanDen Irak bringt man in Europa vor allem mit Krieg und Krisen in Verbindung. Der Freiburger Fotograf David Lohmüller war mehrfach im Norden des Landes unterwegs und zeigt in seiner eindrucksvollen Reportage eine einzigartige Region, die weitaus mehr zu erzählen hat: Großartige Landschaften, pulsierende Städte, bunte Basare, traditionelle Feste und der Alltag der Menschen ? Einblicke in eine Region, die kaum jemand kennt.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "11/14/21 14:30",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863777567&a=774719&m=13738"
        },
        {
            "id": "e60",
            "title": "MUNDOLOGIA: Markus Lanz live ? Grönland",
            "description": "GRÖNLAND ? Meine Reisen ans Ende der WeltNormalerweise interviewt er Menschen mit interessanten Geschichten. Doch seit fast 15 Jahren tauscht Markus Lanz das Fernsehstudio regelmäßig mit einer der extremsten und faszinierendsten Regionen der Welt: Grönland. Der in den Dolomiten aufgewachsene Markus Lanz scheute keine Strapazen, die derartige Expeditionen mit sich bringen. Immer wieder besuchte er die Jäger von Siorapaluk, dem nördlichsten Dorf der Welt, und zog mit ihnen und ihren Hundeschlitten tagelang über das zugefrorene Meer, um zu jagen. Er übernachtete im Februar bei Temperaturen um minus 40 Grad in Biwaks, erlebte lebensbedrohliche Schneestürme und staunte über das Polarlicht. Immer wieder hielt er die großartige Szenerie auf Bildern fest: Menschen bei ihrer archaischen Arbeit, Eisberge in nahezu unwirklichem Licht, aber auch Kinder, die in acht Grad kaltem Wasser schwimmen, Jäger und deren rätselhafte Verbindung zu ihren Hunden, Fischer in ihren winzigen Booten, bedroht von gewaltigen Eisbergen. Vermutlich gibt es wenige Menschen, die Grönland so ursprünglich erlebt, fotografiert und gefilmt haben wie Markus Lanz ? eine Welt, die es so vermutlich nicht mehr lange geben wird. Erleben sie zusammen mit ihm einen besonderen Abend und tauchen sie ein in eine raue Welt, voller Schönheit, aber auch Härte und Entbehrung.In einer aufwändig produzierten Multivisionsshow präsentiert Markus Lanz nun seine Fotos und Filmaufnahmen auf der Bühne und lässt das Publikum teilhaben an seinen Erfahrungen und Erlebnissen.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "3/18/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=25995090319&a=774719&m=13738"
        },
        {
            "id": "e61",
            "title": "Profilerin Suzanne Grieger-Langer - Deppen-Detox",
            "description": "?Cool im Kreuzfeuer? zu bleiben ist die Spezialität von Profiler Suzanne Grieger-Langer. Als Expertin in der Welt der Kriminalstatistik und der Manipulation weiß sie wie man sich zur Wehr setzen muss. Und dieses Wissen gibt sie nun wieder auf der Bühne Preis. Machen Sie sich gefasst auf einen Abend, den Sie so schnell nicht vergessen werden. Live on stage entschlüsselt die berühmteste Profilerin Deutschlands den Code des konzentrierten Rufmords. Doch dabei belässt es Susanne Grieger-Lange nicht. Konkret benennt sie Aggressoren und zeigt auf, wie man sich am besten davor schützen kann. Gepaart mit einer Portion Humor und feingeistiger Realsatire öffnet die gebürtige Detmolderin aus Nordrhein-Westfalen ihrem Publikum die Augen. Damit verfolgt die charismatische Analytikerin ein klares Ziel: Betrüger zu entlarven und Schädlingen das Handwerk zu legen. Eine Live-Show von Profiler Suzanne Grieger-Langer ist ein Dreiklang der Darbietung: enthüllend, fesselnd und aufwühlend. Lassen Sie sich ein auf ein Erlebnis der besondern Art, das Sie viele Dinge in einem neuen Licht sehen lassen wird. Jetzt Ticket sichern!",
            "startDateTime": "9/28/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26011939099&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/JfsQksIL.jpeg"
        },
        {
            "id": "e62",
            "title": "Kaya Yanar - Fluch der Familie",
            "description": "Unsere Familie können wir uns nicht aussuchen, für manche ist es ein Segen, für andere ein Fluch. Soll man seine Eltern ehren, auch wenn sie bekloppt sind? Auf ihren Rat hören, auch wenn sie nicht wissen, wie man ne Tür auf macht?Kaya hatte eine ?spezielle Familie?: ein strenger Vater, eine ängstliche Mutter und ein hochintelligenter aber komplizierter Bruder. Dann auch noch der Migrationshintergrund. Er hatte damals nur zwei Optionen: Entweder Komiker oder Klapse.In der Klapse wollten sie ihn nicht, und Kaya entdeckte die Formel: Comedy=Schmerz + Zeit. Jetzt im besten Alter angekommen, reflektiert Kaya nicht nur über seine Kindheit und Familie, sondern auch über sich und seine zukünftige Familie. Kaya will unbedingt Vater werden und verhindern, dass seine Kinder eines Tages ein Bühnenprogramm schreiben müssen, um ihren Vater zu verarbeiten.Wird er ein guter Vater sein? Wird er seine Traumata rechtzeitig therapiert haben? Wird er Fluch oder Segen der Familie werden? Keine Ahnung, aber es wird auf jeden Fall lustig werden, in Kaya Yanars neuem Bühnenprogramm: ?Der Fluch der Familie?, kommst Du, Guckst Du, Lachst Du!",
            "startDateTime": "3/13/22 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=26011939197&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/biRVmZRK.jpeg"
        },
        {
            "id": "e63",
            "title": "Murphy´s Celtic Legacy",
            "description": "Murphy´s Celtic Legacy ist eine faszinierende Produktion mit epischen Original-Soundtrack und einem Team von Tänzerinnen und Tänzern, die Weltmeister sind. Der Produzent: Chris Hannon, zugleich auch Star der Show und ehemaliger Tänzer in Michael Flatleys ?Lord of the Dance? Murphy´s Celtic Legacy hat bereits Großbritannien, den Nahen Osten, Zypern, Frankreich und Irland bereist und auf über 27 Kreuzfahrten an Bord der MSC Cruise Lines teilgenommen. Hannon?s Produktion setzt neue Maßstäbe! Neben einer hervorragenden Live-Band kommt auch ein charismatischer Sprecher zum Einsatz, denn die Show ist nicht nur die Aneinanderreihung von einzelnen Szenen, sondern erzählt die Geschichte zweier irischer Volksstämme. Ein wahrer Reigen von überwältigenden Tanzszenen unterstützt durch ein beeindruckendes Lichtkonzept.",
            "startDateTime": "11/17/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26011939545&a=774719&m=13738"
        },
        {
            "id": "e64",
            "title": "VIDA - Die Showsensation aus Argentinien",
            "description": "Ganz Argentinien in einem Tanz. VIDA! macht es leicht, sich hinreißen zu lassen, bis man nicht mehr sitzen mag. Standing Ovation und immer wieder Zwischenapplaus. F.A.Z. Nicole Nau & Luis Pereyra & Company bringen denechten Tango Argentino in seiner magischenund puren Formzurück.VIDA. Die Showsensation aus Argentinien. Aufregend. Verführerisch. Unkonventionell. Lebendig. Südamerikanische Emotion. VIDA! Hier stehen Vollblutkünstler auf der Bühne, die alles können. Welterstklasse Artisten aus Argentinien legen fantastische Musik- und Tanz-, Stepp- und Show-Einlagen der Superlative hin. Der betörende Reiz wird durch den fließenden Rollentausch der Tänzer zu Musiker und Sänger intensiviert. Magistral interpretiert von Nicole Nau & Luis Pereyra und Compan?ia. Erstmals zeigt Pereyra nun den Music Hall Argentino. Diese markante Epoche der kraftvollen 70er Jahre, die später die Welt eroberte. Die Tangostars Die deutsche Tänzerin Nicole Nau aus Düsseldorf hat es geschafft, sich an die Spitze des argentinischen Olymp zu tanzen und ziert dort Briefmarken der argentinischen Post. Luis Pereyra wird nicht umsonst der Fred Astaire Argentiniens genannt, seine Werke mit dem TONY Award ausgezeichnet (der Oskar für Musicals). 1992 sah Lady Diana den Tänzer Luis Pereyra im Aldwych Theatre London auf der Bühne und lud ihn am nächsten Tag in den Buckingham Palace ein. 1990 tanzte Luis Pereyra in den Paramount Studios. Al Pacino persönlich übernahm die Präsentation. . 2016 tanzten Nicole Nau & Luis Pereyra für die Kameras des Bayerischen Filmpreises.",
            "startDateTime": "10/26/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26011939549&a=774719&m=13738"
        },
        {
            "id": "e65",
            "title": "Kari Bremnes - Tour 2020",
            "description": "Dieser Veranstaltungstermin fällt leider aus. Ein Ersatztermin wird so bald wie möglich angeboten. Alle Tickets behalten ihre Gültigkeit. Weitere Infos hier: https://pavillon-hannover.de/infos-zu-corona/Das Songwriting des modernen Skandinaviens verkörpert sie wie keine andere. In ihrer mittlerweile mehr als drei Jahrzehnte andauernden Karriere brachte die atemberaubende Kari Bremnes fünfzehn Soloalben hervor. Die Norwegerin, die dabei nicht zu altern scheint, hat in ihrer Heimat längst Ikonenstatus. Bei ihren Konzerten lauschen die Fans atemlos einer mysteriösen Melange aus arktischem Folk, gebremstem Pop und elaboriertem Jazz und werden dabei ganz selbstvergessen. Dann aber kommt Kari Bremnes, diese Anmut aus dem Norden, macht einen leisen Scherz, singt eine verwunschene Note, und schon ist die Realität wieder präsent. Nur halt viel schöner als zuvor.http://www.karibremnes.no/",
            "startDateTime": "3/25/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=26023878379&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/IyRyRCHf.jpeg"
        },
        {
            "id": "e66",
            "title": "Faisal Kawusi - Anarchie",
            "description": "Foto: Guido SchröderEr ist und bleibt der sympathische Afghane von nebenan: Faisal Kawusi. Der 26-jährige Comedian startet im Februar 2019 mit seinem zweiten Soloprogramm ?Anarchie? durch. Darin nimmt Faisal kein Blatt vor den Mund und setzt sich auf seine charmante Art und Weise mit den Dingen auseinander, die er tagtäglich selbst erlebt. Absurde Geschichten und große Pointen sind vorprogrammiert, wenn sich das Ausnahmetalent der deutschen Comedyszene den Tabuthemenunserer Gesellschaft widmet.In seinem zweiten Programm erzählt uns Faisal anschaulich von den zahlreichen Vorurteilen, mit denen das Comedy Schwergewicht konfrontiert wird. Wie sieht der Alltag eines Afghanen in Deutschland aus? Mit welchen Klischees muss er sich immer wieder auseinandersetzen? Das alles und noch viel mehr erzählt uns Faisal mit einer großen Portion schwarzem Humor. So, wie es nur jemand kann, der all dies am eigenen großen Leib erfahren hat. Lustig, selbstironisch, liebenswürdig und ziemlich frech. Dabei spielt das Allroundtalent mit seinen afghanischen Wurzeln und überrascht immer wieder aufs Neue mit seinem großen Improvisationstalent.Faisal versteht sich dabei als Bindeglied zwischen den Generationen und Kulturen und erzählt ganz ungefiltert, was er denkt. Faisal hat mit seinem ersten Soloprogramm ?Glaub nicht alles, was du denkst? die Zuschauer bei mehr als 300 Live Auftritten begeistert. Die Ausstrahlung seines Live-Programms bei RTL verfolgten 1,86 Millionen Zuschauer. Unvergessen bleibt seine mitreißende Performance bei RTLs ?Let?s Dance? in 2017. Auf seinem YouTube-Channel mit über 222.000 Abonnenten sorgt er regelmäßig für Furore. Aber das waren nur die ersten Schritte auf der Karriereleiter: Inzwischen brilliert der Pfundskerl in seiner eigenen Comedy-Late-Night in SAT.1: ?Die Faisal Kawusi Show?, in der er illustre Gäste aus Comedy, Musik und Showbiz begrüßt.",
            "startDateTime": "12/11/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418943851&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/VaJZ51Td.jpeg"
        },
        {
            "id": "e67",
            "title": "NightWash Live",
            "description": "NightWash LiveStand-Up Comedy ist LIVE am lustigsten!NightWash ist die Marke für Stand-up Comedy in Deutschland und wurde 2016 hierfür mit dem Deutschen Comedypreis ausgezeichnet. Mit über 200 Live-Terminen pro Jahr ist NightWash zudem die erfolgreichste Live Comedy-Show im deutschsprachigen Raum.Künstler wie Luke Mockridge, Felix Lobrecht, Carolin Kebekus, Chris Tall oder Faisal Kawusi hatten einen Ihrer ersten Auftritte bei NightWash.NightWash LiveMainz ? Zitadelle25.07.2021, 20:00 Uhrmit dabei sind:Jan van Weyde (Moderator)Jan van Weyde ist ein Stand-Up Comedian und Synchronsprecher aus Köln. Er lebt so zusagen von Ersprochenem. EIGENTLICH wollte Jan aber etwas ganz anderes, nämlich in der Königsdisziplin antreten. Er wollte auf die Stand-Up Bühnen dieser Welt. 2014 dann die Initialzündung - Mit der Geburt seiner kleinen Tochter dachte er sich ganz unbescheiden: Moment mal, ich bin Gott! Ich habe einen Menschen gemacht! Dann kann ich auch auf eine Bühne gehen und Leute zum Lachen bringen! Und das kann Jan van Weyde - Ein Mann, ein Mikro.El Mago MasinEl Mago Masin kam über die Liedermacherbühnen auf die Kabarettbühnen. Er kletterte geschickt herüber, so dass er nun virtuoses Gitarrenspiel und wahnwitzige Lieder mit anarcho-komischen Geschichten verknüpft. Auf unzähligen Bühnen versuchten in den vergangenen Jahren viele Freidenker ihn zu begreifen, doch er ist einfach unfassbar!Maria Clara GropplerWährend sie noch mit großen Rehaugen die Bambi Karte ausspielt, schießt sie mit knallhartem Humor einen Bock nach dem anderen.Gerade erst fertig mit dem Abitur, startet Maria Clara Groppler schon mit 17 Jahren als StandUp Comedian durch und erzählt ganz offen und ehrlich aus ihrem Leben. Sie ist das wohl jüngste Talent in der Comedy Szene, aber unschuldig ist sie definitiv nicht! Zwischen damenhaft und derbe, haut sie ihre Witze und Anekdoten ganz trocken und lässig raus.Serkan Ates-SteinEr schafft es, sich und seine Generation aufs Korn zu nehmen, indem er Anekdoten zum Besten gibt oder mit derbem Sprechgesang glänzt. Aber wer jetzt denkt, das käme plump-salopp daher, der kann sich bei Serkan auf wohl pointierte Comedy freuen. Zwischendurch untermalt er seine Auftritte mit Percussion- Imitationen, im Volksmund auch Beat Box genannt. Kurz: Eine bunte Tüte ohne Lakritze.NightWash bringt die frischeste Stand-Up Comedy angesagter Comedians und Newcomer, überraschende Showeinlagen gepaart mit dem allerbesten Publikum auf die Bühne. Jede Show ein Unikat auf höchstem Niveau. Hier bleibt garantiert kein Auge trocken! Comedy der Extraklasse!NightWash Live - Stand-Up Comedy at its best!Die Veranstaltungsreihen finden unter den vorgegebenen, geltenden Sicherheits- und Hygiene-Vorschriften statt.",
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
            "description": "Irgendwie scheinen Kleinstädte in der Nähe von Stuttgart wie Bietigheim oder eben Schorndorf im Moment die kreativsten Zellen für aufregende neue Musik zu sein. Majan zählt mit seinem Potpourri aus Rap, Dancehall und Klavierballaden auf jeden Fall zu den vielversprechendsten Newcomern der Zeit. Spätestens seit dem Song ?1975? mit Cro, der Jugglerz-Kollabo ?Nie da? und dem grandiosen ?Tag ein, Tag aus? ist Majan nicht nur den Hip-Hop Fans ein Begriff.Seine Sprache ? völlig egal, in welcher Sprache er gerade unterwegs ist ? ist herrlich direkt und einfach, oft auch bitter ehrlich. Majans Sound, der mal klar und grade, mal rhythmisch vertrackt, gemeinsam mit dem Berliner Produzenten-Duo Kilian & Jo entsteht, ist neu, einzigartig und vertraut zugleich. Das kommt als klassischer Popsong daher, dann als Rap-Track mit jamaikanischen Laid-back-Vibes oder rüpelhaftem Turnup-Beat, mal entstehen elektronische UK-four-to-the-floorNummern, dann wieder ganz nackte Balladen am Klavier. Majan kann alles und hebtden HipHop und noch zwei, drei Genres auf einen neues Level.",
            "startDateTime": "12/2/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=26074707427&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/8x7zXak3.jpeg"
        },
        {
            "id": "e70",
            "title": "Ray Wilson & Band - Genesis Classic",
            "description": "Ray Wilson, der Ex-Sänger von GENESIS, präsentiert zum 20jährigen Bühnenjubiläum mit seiner Bandund dem Berlin Symphony Ensemble die größten Hits der Bandgeschichte.Facettenreiche Songstrukturen aus der progressiven Rock-Ära der Band sowie die Pop-Hits der 1970er bis 1990erJahre verschmelzen mit klassischen Streicher-Arrangements - eine neue Dimension von GENESIS, ohne daß die Songsihren Originalcharakter verlieren. Garant dafür ist die einmalige Stimme von Ray Wilson, welcher allein mit dem letztenGENESIS-Album ?Calling All Stations? das drittbestverkaufte der Bandgeschichte eingesungen hat. Mit ihremMainstream-Rock wurde GENESIS zu einer der kommerziell erfolgreichsten Musikgruppen der 1980er und 1990erJahre. Insgesamt verkaufte GENESIS über 150 Millionen Scheiben weltweit. Im März 2010 wurde GENESIS alswichtige und einflussreiche Band in die berühmte ?Rock?n?Roll Hall of Fame? aufgenommen.Ray Wilsons internationale Musikkarriere begann 1994 mit der Grunge-Sensation STILTSKIN, als er die Charts mit demNummer-1-Hit ?Inside? stürmte. Der Song lief jahrelang als weltweiter TV-Spot der Jeansfirma ?Levi?s?.1997 wurde der Schotte dann Mitglied der britischen Rocklegende GENESIS, wo er Phil Collins als Sänger ersetzte. Mitdem gemeinsam produzierten GENESIS-Album ?Calling All Stations? ging es auf eine erfolgreiche Stadion-Tournee durchganz Europa und Nordamerika.Nach der Auflösung von GENESIS spielte Ray Wilson in Deutschland u.a. mit Musikgrößen wie Marius Müller-Westernhagen und den ?Turntablerocker?. Mit den ?Scorpions? und den Berliner Philharmonikern stand er gemeinsamzum Eröffnungskonzert der EXPO-Weltausstellung in Hannover auf der Bühne.2003 veröffentlichte Ray Wilson sein erstes Solo-Album ?Change? und stellte es während seiner Tournee - mit über 50Shows allein in Deutschland - gemeinsam mit Joe Jackson und der Band SAGA vor. Für den Song ?Yet Another Day? vomgleichen Album arbeitete er mit dem holländischen Star-DJ Armin Van Buuren zusammen; der Song erreichte mühelosPlatz 1 in den Dance-Charts. Ray Wilson ging in den folgenden Jahren auf Europa-Tour mit Dolores O?Riordan von denCRANBERRIES und SUPERTRAMP-Frontmann Roger Hogdson.Ray Wilson gilt als sympathischer Ausnahmesänger und hat sich mit seiner charismatischen Bühnenpräsenz weltweiteinen Namen als exzellenter Entertainer gemacht. Mit typisch schottischer Gelassenheit kombiniert er die Energie derRock-Musikmit komplexen Songtexten.Mit seinem neuen Projekt ?GENESIS Classic? erfüllt sich der Schotte einen ganz persönlichen Traum: die erfolgreichstenHits von GENESIS auf großer Bühne in Originalversion ?unplugged? zu spielen, die klassischen Keyboard-Sequenzenersetzt durch Streicher-Arrangements.Im Repertoire hat RayWilson selbstverständlich alle Hits wie Follow You, Follow Me - No Son Of Mine - Carpet Crawlers -Land of Confusion - Not About Us - Jesus He Knows Me ? Congo ? I Can?t Dance ? aber auch Solo-Hits von seinenehemaligen Bandkollegen Peter Gabriel ?Solsbury Hill?,Mike & theMechanics ?Another Cup Of Coffee? und Phil Collins?Another Day in Paradise?.RayWilson, der vom ?Classic Rock Magazin? als einer der erstklassigen Sänger Großbritanniens ausgezeichnet wurde, istbekannt für seine starke Bühnenpräsenz und begeisternden Auftritte. GENESIS Classic verspricht ein einzigartigesKonzerterlebnis für jeden, der gute Live-Musik zu schätzen weiß.Besetzung:RayWilson - Vocals, Acoustic Guitar | SteveWilson - Godin Acoustic, 12 String and Backing VocalsDarek Tarczewski - Piano | Alicja Chrzaszcz ? Violin | Basia Szelagiewicz ? Violin IMarcin Kajper ? Saxofon",
            "startDateTime": "3/12/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=26090827645&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/SqdfqrbM.jpeg"
        },
        {
            "id": "e71",
            "title": "MUNDOLOGIA: Südafrika",
            "description": "Von Kapstadt zum KrügerparkEs gibt genügend Gründe, um nach Südafrika zu reisen. Das Land hat landschaftlich und kulturell enorm viel zu bieten und beeindruckt mit einer einzigartigen Tier- und Pflanzenwelt. Der Berliner Fotokünstler Dirk Bleyer hat Südafrika über drei Jahre immer wieder bereist und großartige Bilder vom äußersten Süden des afrikanischen Kontinents gemacht.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "1/16/22 11:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=26112218203&a=774719&m=13738"
        },
        {
            "id": "e72",
            "title": "Reinhold Messner live Nanga Parbat - mein Schicksalsberg",
            "description": "Reinhold Messner ?Nanga Parbat ? mein Schicksalsberg?Bei kaum einem anderen Berg liegen Ruhm und Tragödie so nah beieinander wie beim 8.125 m hohen Nanga Parbat. Reinhold Messner vereint dabei beides wie kein Anderer. Untermalt mit nie gesehenen Bildern und Filmen spannt Messner bei seinem Live-Vortragden Bogen von all den Alpinisten, die am Nanga Parbat Geschichte geschrieben haben bis zu seiner eigenen bewegenden und spannenden Geschichte.Er berichtet von Albert Mummery dem besten Bergsteiger seiner Zeit, der 1895 beim Übergang von der Diamir- zur Rakhiot-Seite verschwindet, vom unvergessenen Willo Welzenbach, ?Eispapst? genannt, der 1934 ? zuletzt ausgegrenzt ? mit acht Männern imSchneesturm stirbt; von Hermann Buhl, der 1953 gegen den Befehl des Expeditionsleiters allein und als Erster den Gipfel erreicht ? eine Sternstunde des Alpinismus! Wie gut 50 Jahre später, als Steve House die Rupalwand direkt in Zweierseilschaft meistert.Zum Schluss erzählt er von seiner eigenen schicksalhaften Expedition von 1970, die sein Leben bis heute geprägt hat. Nach der erfolgreichen Durchsteigung der höchsten Steilwand der Erde ? der Rupalwand, durch die Brüder Messner kommt es im Abstieg zur Tragödie. Höhenkrank geworden, kann Günther nicht zurück ins Biwak. Ein Absturz wäre gewiss. Also führt Reinhold ihn durch die 4000 Meter hohe Diamir-Flanke trotz Lawinengefahr, Weglosigkeit und Verzweiflung bis zum Wandfuß, wo eine Eislawine Günther begräbt, während Reinhold voraus ist, um nach einem Ausweg aus der Gefahrenzone zu suchen. Nachdem er seinen Bruder nicht finden kann, schleppt er sich tagelang talwärts; mit erfrorenen Händen und Füßen, ohne Nahrung in einer menschenleeren Gegend. Dem Tode näher als dem Leben stößt er, dank dreier Holzfäller die ihn talwärts tragen, auf seine Expeditionsmannschaft, die auf dem Heimweg ist.Acht Jahre später gelingt ihm mit dem ersten Alleingang eines Achttausenders an der Diamir-Wand die Glanzleistung seines Lebens. Obwohl ein Erdbeben den Berg erschüttert und anschließend ein Wettersturz den Solo-Gänger 48 Stunden in der Todeszone festhält.Nach der Hölle hat er damit den Himmel auf seinem persönlichen Schicksalsberg berührt.Über den Referenten:Reinhold Messner wurde 1944 in Südtirol/Italien geboren. Schon als Fünfjähriger begann er mit dem Bergsteigen und hat seit 1969 mehr als hundert Reisen in die Gebirge und Wüsten dieser Erde unternommen. Dabei gelangen ihm viele Erstbegehungen, die Besteigung aller 14 Achttausender und eine Längsdurchquerung Grönlands. Im Gegensatz zu modernen Abenteuer-Darstellern war Reinhold Messner nie um Rekorde bemüht, ihm geht es um das Ausgesetztsein in möglichst unberührten Naturlandschaften und das Unterwegssein mit einem Minimum an Ausrüstung. Er hielt Vorträge in ganz Europa, den USA, Japan, Australien, Südamerika, drehte Dokumentarfilme undveröffentlichte Artikel, u.a. in »Stern«, »Spiegel«, »GEO«, »Epoca«, »Espresso«, »National Geographic«. Seine Buchveröffentlichungen wurden in mehr als ein Dutzend Sprachen übersetzt.",
            "startDateTime": "11/15/21 19:30",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26112219501&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/B1ZCGuo9.jpeg"
        },
        {
            "id": "e73",
            "title": "MUNDOLOGIA: GTA - Zu Fuß durch die Alpen",
            "description": "Die Grande Traversata delle Alpi ist eine der spannendsten Alpendurchquerungen, da sie nur schwer zugängliche, von der Entvölkerung am meisten betroffene Alpentäler berührt. Vom nördlichsten Punkt des Piemont führt die Route mit gewaltiger 4000er Kulisse auf alten Saumwegen durch den italienischen Westalpenbogen bis ans Mittelmeer.Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "11/23/21 19:30",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=26147037963&a=774719&m=13738"
        },
        {
            "id": "e74",
            "title": "MUNDOLOGIA: Auf dem Landweg nach Australien",
            "description": "Kostya Abert führt eine Reisemobilgruppe von Europa nach Australien und wird unterwegs vor große Herausforderungen gestellt. Spektakuläre Wege, wie jene am Rande des Himalaya-Gebirges mit tiefen Abgründen auf der einen und überhängenden Felsen auf der anderen Seite, sind Alltagssituationen der Wohnmobilisten und nichts für schwache Nerven. Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "11/22/21 19:30",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=26156704591&a=774719&m=13738"
        },
        {
            "id": "e75",
            "title": "Hagen Rether - Liebe",
            "description": "Foto: Klaus ReineltDie Welt wird täglich ungerechter, das Geflecht aus politischen und wirtschaftli­chen Abhängigkeiten immer dichter: Vor diesem Hintergrund lässt Hagen Rether Strippenzieher, Strohmänner und Sündenböcke aufziehen. Den so genannten gesellschaftlichen Konsens stellt er vom Kopf auf die Füße und die System­fragen gleich im Paket: Von der Religions?freiheit? über das Wirtschaftswachstum bis zur staatlichen ?Lizenz zum Töten? kommt alles auf den Tisch. Doch die Verantwortung tragen nicht ?die Mächtigen? allein ? wir, ihre mehr oder weniger willigen Kollaborateure, müssen uns wohl am eigenen Schopf aus unserer Komfortzone ziehen, um nicht in den Abgrund zu stürzen, den wir gemeinsam geschaufelt haben.Der wahrhaft unbequeme Kabarettist entlarvt so manchen Volkszorn samt seiner auf ?Die da oben? zielenden Empörungsrhetorik als Untertanentum ? den Unwillen, unsere eigenen, fatalen Gewohnheiten zu überwinden. Kabarett verändert nichts? Rethers ebenso komisches wie schmerzhaftes, bis zu dreieinhalbstündiges Programm infiziert das Publikum mit gleich zwei gefährlichen Viren: der Unzufrieden­heit mit einfachen Erklärungen und der Erkenntnis, dass wir alle die Kraft zur Veränderung haben.LIEBE, so der seit Jahren konstante Titel des ständig mutierenden Programms, kommt darin nicht vor, zumindest nicht in Form von Herzen, die zueinander finden ? und romantisch kommt allenfalls einmal die Musik des vielseitigen Pianisten daher. Was aber in seinem fulminanten Plädoyer für das Mitgefühl sichtbar wird, ist die Menschenliebe eines Kabarettisten, der an Aufklärung und an die Möglichkeit zur Umkehr noch am Abgrund glaubt.",
            "startDateTime": "11/7/21 19:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26184396469&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/uyuvPAtH.jpeg"
        },
        {
            "id": "e76",
            "title": "Die Sterne",
            "description": "DIE STERNEEin selbstbetiteltes Album. Auf dem Cover: der Sänger ? das letzte verbliebene Ur-Mitglied ? ganz allein als aus allen Zeiten geplumpster Dichterfürst, als leicht lädierter, aber wissender Dandy. Ein erstes Hören, und plötzlich sitzt man da, mit lauter Hits in den rauschenden Ohren und zig Textfetzen, die einem durch den Kopf spuken, und ist wie durchgeschüttelt von einem Album, das immer wieder von Freiheit und Verstrickung, von Möglichkeiten und Zwängen handelt. Das neue Album von Die Sterne ist da. Ein Album, auf das man - ohne es zu wissen - so sehr gewartet hat. Eine Platte, die wie keine zweite angeschlossen ist an die Themen unserer Tage ? und die trotzdem einlädt auf eine eskapistische Reise durch unerhörte Soundlandschaften. Es lebe der Widerspruch! Es leben Die Sterne!Die Fakten zuerst: Mit Bassist Thomas Wenzel und Schlagzeuger Christoph Leich haben zwei wichtige Gründungsmitglieder vor anderthalb Jahren die Band verlassen. Auf ?Die Sterne? bilden Jan Philipp Janzen und Phillip Tielsch, beide Mitglieder der Kölner Band Von Spar, die Rhythmusgruppe. Neben den Sterne-Livemusikern Dyan Valdes und Max Knoth wirken zudem u.a. das Kaiser Quartett, Carsten ?Erobique? Meyer und die Düsseldorf Düsterboys mit. Krautige Flächen treffen auf Italo-Pop, verspulten Folk, Psychedelia und Disco. Es funkelt an allen Ecken und Enden. Es ist ein Sound, den man in dieser Überstrahltheit (nicht nur von Die Sterne!) noch nicht kannte ? und der doch ganz ihr eigener ist. Vielleicht klingt so die Freiheit.Das Album vor oben beschriebenem personellen Hintergrund schlicht ?Die Sterne? zu nennen, ist eine sehr lässige Ansage: Die Sterne im Jahr 2020, das ist ein offenes System, in dem freilich mehr denn je der Blick auf das Kontinuierliche dieser musikalischen Institution frei wird: Frank Spilker, seine Songs, Texte und Themen. Seine künstlerische Coolness und seine Dringlichkeit als soziales Wesen.Die ersten Sekunden der Platte tönen, als wäre ein Vintage-Synthesizer in Bob Dylans ?Tangled Up In Blue? gekracht, am Ende wird WahWah-befeuerter Rave-Pop draus. ?Das Herz schlägt aus nach allen Seiten?, singt Spilker über unseren unperfekten Empathiemuskel; Widersprüchlichkeit als menschlichste Form der Libertät.Mit ?Der Palast ist leer? erreicht die Platte einen ersten Höhepunkt: Michael Rother steigt bei Stereolab ein. Kaum freut man sich über die Cowbell, wehen orchestrale Wolken um die Zinnen. Der Text formuliert nur scheinbar eine Utopie von Unbeherrschtheit. Man ist geneigt, sofort mitstürmen zu wollen, aber Spilker kennt kein Schwarzweiß: Was, wenn sich wirklich niemand mehr um uns kümmerte? Unerhört ? man ahnt es nicht!?Der Sommer in die Stadt wird fahren? ist flirrender Italo-Pop mit psychedelisch-dräuender Schlagseite (Man denke: Lucio Battisti, circa 1977) und einem herrlich gespreizten Text. Wieder spielt das Kaiser Quartett ganz groß auf. Vielleicht auch ein Lied über falsche Sehnsüchte und Idealisierung. Immer gut, wenn Fragen bleiben.?Du musst gar nichts? ? fast ein Hausbesetzer-Funk-Pop-Stück wie es Kölner Spät-Kraut-Bands wie Dunkelziffer oder die Phantom Band in den 80ern hätten machen können ? nimmt das Kernthema der Platte wieder auf: Wenn man tatsächlich gar nichts muss, jeder Zwang und jedes Ritual weg ist ? dann bleibt nur noch der Blick in den Abgrund der Freiheit. Beängstigend.Nach dem bereits vorab veröffentlichten ?Hey Dealer?, bei dem die Flaming Lips der ?Embryonic?-Ära auf eine Wagenladung Pilze vorbeischauen, schubst ?Unterschiedlich subtil? den Hörer auf spiegelglatte Wave-Pop-Flächen. Es geht um Macht und Manipulation. Und gerade, als man sich zu fragen beginnt, ob Spilker hier von politischer Einflussname oder den Zwängen modernen Band-Marketings singt, errichtet das Kaiser Quartett mal eben wieder eine dieser unglaublichen Streicher-Kathedralen. Eine Welt voller Möglichkeit, nur: Was ist Gift und was ist Medizin?Mit ?Das Elend kommt (nicht)? wird es grimmig: Während eine psychotische Fuzz-Gitarre mehr und mehr freidreht, wird klar: Es ist halbwegs müßig, den offensichtlichen Konsensfeind in zig Talkshows zu bequatschen, wenn der wahre Gegner viel näher ist, als man wahrhaben möchte. Und wo wir schon beim Konsensfeind sind: ?Die Message?? irgendwo zwischen Dr. John und P-Funk verortet ? macht endgültig klar: Für Faschismus gibt es keine Ausreden und Erklärungen. Der Fall liegt ganz einfach: ?Der Arsch ist die Message.? Lässiger als hier kann man den Müll nicht runtertragen.In ?Wir kämen wieder vor? schaut der Sänger auf ein Umfeld zwischen Paralyse und faulem Arrangement beim Tanz mit den Verbrechern. ?Ihr wollt ein Wir - hier gibt?s kein Uns / Integriert euch doch selbst - passt euch doch an!?, singt Spilker, und dann hebt dieser schöne Popsong ab in die Neil-Young-Umlaufbahn. ?Die besten Demokratien? spinnt diesen Gedanken weiter ins Große. Im Fadenkreuz: Das Heucheln von Zivilisiertheit in westlichen Kulturen (?Wir finden eine Lösung - gib mir das Problem / Wir stehen ein für Werte und wir wollen Werte sehn?). Ein Flexatone wird geschüttelt, Die Sterne funkeln wieder Arthur Russells Disco Anarcho. Da ist noch Licht im Palast, aber, wie gesagt: Du musst gar nichts!Jetzt klingt sie langsam aus, diese Zauberplatte. Aber wie wunderbar weird: Auf den retro-futuristischen Dub-Pop ?Drinks & Love? folgt ganz zum Schluss das von einem Tanpura-Sample durchsponnene ?Halbvergangener Tag?, das den Eindruck nahelegt, Frank Spilker und seine Mitmusiker hätten am Abend zuvor mit Syd Barrett und der Incredible String Band durchgemacht. Hedonismus, altes Haus: eine oberflächliche, aber ewig verführerische Form der Freiheit.Und dann, obwohl man sich jetzt wie durchgeschüttelt fühlt und es im Kopf nur so wimmelt vor frisch angestoßenen Gedanken ? und Fragen! ? , will man das alles gleich noch mal hören. Diesmal aber lauter. Weil man tanzen will. Und dann tanzt man. Man tanzt die Freiheit und die Verstricktheit. Das klare Dagegen und die Widersprüchlichkeit. Die Ambivalenz und die Eindeutigkeit. Aber niemals mit den Verbrechern! Der Arsch ist die Message!Gut, dass Die Sterne wieder da sind. Gut, dass Frank Spilker wieder Lieder singt.Wir kommen wieder vor.präsentiert von : dq agency, Musikexpress,TAZ, Byte.FM & Kaput Magazin",
            "startDateTime": "10/10/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=26227540155&a=774719&m=13738"
        },
        {
            "id": "e77",
            "title": "MUNDOLOGIA: Madagaskar",
            "description": "Das Erbe von LemuriaAls vor 250 Millionen Jahren Gondwana auseinanderbricht, Afrika nach Norden und Indien gen Osten wandern, bleibt Madagaskar als Splitter dieses Urkontinents im Indischen Ozean zurück. Durch die völlige Isolation haben hier Arten überlebt, die in anderen Teilen der Welt längst ausgestorben sind. In ihrer Film- und Fotomultivision gehen Katja und Josef Niedermeier den Geheimnissen des Inselstaats auf den Grund. Weitere Informationen und Bilder zu diesem MUNDOLOGIA-Vortrag finden Sie unter www.mundologia.de",
            "startDateTime": "1/8/22 19:30",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=26263587159&a=774719&m=13738"
        },
        {
            "id": "e78",
            "title": "Eure Mütter",
            "description": "Eure MütterBITTE NICHT AM LUMPI SAUGEN! ? Die neue Show!VERLEGUNG vom 16.03.2020 bzw. 16.05.2021 - Alle erworbenen Tickets behalten Gültigkeit!Die Katze ist aus dem Sack! Aber der Hund fast schon im Beutel:?Bitte nicht am Lumpi saugen!? - die neue Show von EURE MÜTTER ist da.Über 20 Jahre ist es her, dass das Stuttgarter Comedy-Trio erstmals eineBühne betrat und im Anschluss die Welt der Unterhaltung komplett auf linksdrehte. In ganz Deutschland und darüber hinaus wurden sie im Nu zuLieblingen des Comedy-Publikums mit ihrer einzigartigen Mischung aus Wort,Musik und Akrobatik. Okay, vielleicht ist ?Akrobatik? etwas übertrieben. IhreMischung aus Wort, Musik und meisterhaftem Tanz? Ja, also gut: Es ist eineMischung aus Wort, Musik und entspanntem Sitzen auf bequemen Stühlen. Injedem Fall einzigartig.Hunderttausende Live-Zuschauer und 50 Millionen YouTube-Views späterpräsentieren EURE MÜTTER mit ?Bitte nicht am Lumpi saugen!? nun zweiStunden völlig neues Material, für das ganz klar gilt:Volles Rohr - all killer, no filler!",
            "startDateTime": "10/9/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=26335910145&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/gn7NFQ0q.jpeg"
        },
        {
            "id": "e79",
            "title": "German Brass  - Tournee",
            "description": "In der Formation GERMAN BRASS haben sich zehn Top-Musiker vereinigt, von denen jeder einzelne zu den besten seines Fachs gehört. Zusammen sind sie Weltspitze und bieten einzigartigen, unerreichten Musikgenuss. Was die Alchemisten des Mittelalters vergeblich versuchten, gelingt den Musikern im gemeinsamen Spiel mit Leichtigkeit: Sie machen Blech zu Gold. Gold für die Ohren ihres Publikums. Ob sie den bewegenden Bach spielen, den wuchtigen Wagner aus ihrer Charts notierten CD »Celebrating Wagner« oder moderne Evergreens ? der Sound von GERMAN BRASS trifft auch das anspruchsvollste Publikum ins Herz.Seit Jahrzehnten schreibt GERMAN BRASS als unverzichtbarer Bestandteil der weltweiten Musikszene eine beeindruckende Erfolgsgeschichte. Die Zeiten, in denen Pioniergeist gefragt war, um diese Musikrichtung überhaupt zu etablieren, sind inzwischen längst Geschichte. Seit vielen Jahren füllt das Spitzenensemble die großen Konzertsäle im In- und Ausland. Kritiker und Musikliebhaber in ganz Europa, in Asien und Amerika verneigen sich vor den Musikern.",
            "startDateTime": "12/12/21 18:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26348608957&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/qq3WkjaQ.jpeg"
        },
        {
            "id": "e80",
            "title": "Sol Gabetta & Alexei Volodin",
            "description": "Sonatenkunst mit Charisma - ?Ich komme sehr gerne hierher?, gibt Sol Gabetta unumwunden zu. Freiburg ist der charismatischen Cellistin ans Herz gewachsen. Und die Zuneigung beruht auf Gegenseitigkeit. Deshalb ist es eine Selbstverständlichkeit, dass Sol Gabetta bereits seit einem Jahrzehnt zu einer festen Größe der Albert Konzerte geworden ist. Vor fünf Jahren gaben sie und Alexei Volodin hier ihr gemeinsames Duo-Debüt in einem ebenso einfühlsamen wie temperamentvollen und begeistert umjubelten Sonatenabend.Wenn das Duo nun nach Freiburg zurückkehrt, stehen abermals drei Sonaten von ganz unterschiedlichem Charakter im Fokus. Schwelgerisch und zugleich voller sublimer Zartheit präsentiert sich etwa Brahms´ ?Regenlied?-Violinsonate bearbeitet für Cello, während César Franck in seiner A-Dur-Sonate mit farbenprächtigen Harmonien das Tor zur musikalischen Moderne öffnet. Zu dieser zählt Benjamin Brittens Cellosonate. Seinem Freund Mstislav Rostropowitsch widmete er sie und verfasste mit ihr ein charaktervolles Porträt des berühmten Cellisten.Programm der 1. Aufführung um 17:30 Uhr:Brahms, Violinsonate Nr. 1 G-Dur op. 78 (arr. für Violoncello in D-Dur)Franck, Sonate A-Dur für Violine und Klavier FWV 8 (arr. für Violoncello von Jules Delsart)Programm der 2. Aufführung um 20:30 Uhr:Britten, Sonate C-Dur für Violoncello und Klavier op. 65Franck, Sonate A-Dur für Violine und Klavier FWV 8 (arr. für Violoncello von Jules Delsart)Aufführungsdauer: ca. 70 min ohne Pause ? keine Bewirtung in den Foyers ?Sol Gabetta, VioloncelloAlexei Volodin, KlavierBitte beachten Sie die Schutz- und Hygienemaßnahmen gegen eine veranstaltungsbedingte Ausbreitung der COVID-19 Pandemie unter https://www.konzerthaus.freiburg.de",
            "startDateTime": "3/5/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26348611587&a=774719&m=13738"
        },
        {
            "id": "e81",
            "title": "5.300 km zu Fuß durch Europa - Reisevortrag: Einfach mal loslaufen - Jakobswege in Europa",
            "description": "Im August 2017 ist Witali mit seiner Freundin Svenja auf ein ungewöhnliches Abenteuer aufgebrochen. Entlang von Jakobswegen und spektakulären Fernwanderwegen sind sie Teile von Europa zu Fuß durchgewandert. Erst 2600 km zu zweit und anschließend 1700 km alleine von Norwegen bis nach Portugal.Jetzt lässt ihn das Gehen nicht mehr los und er will im Sommer erneut für 1500 km von Köln nach Edinburgh aufbrechen, vielleicht auch einen Teil davon Barfuß. In diesem Vortrag erzählt er von den eindrucksvollen Landschaften, die es direkt vor der Haustür gibt. Den wundervollen Menschen denen er begegnet ist und was es bedeutet, mit seiner Freundin, als auch alleine mehrere Monate am Stück durch Sonne, Wind und Schnee zu laufen. Witali nimmt dich nicht nur mit auf sein Abenteuer zu Fuß, sondern viel mehr auf sein persönliches und auch philosophisches Abenteuer die Welt anders zu betrachten.",
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
            "description": "Ein herrschaftsfreier Monolog für Fleischesser und Dieselfahrer - Vegetarier und Veganer willkommen?Immer, wenn man die Meinung der Mehrheit teilt, ist es Zeit sich zu besinnen.? (Mark Twain). Doch Besinnung ist nicht angesagt. Für Innehalten und Nachdenken fehlt uns die Zeit, denn in spätestens 10 Jahren, so die Vorhersagen der Experten haben wir den ?point of no return erreicht und dann wird die Erde unbewohnbar. Panik ist die angemessene Reaktion. Besser fühlt man sich deshalb bei der besinnungslosen Mehrheit aufgehoben Die Mehrheitsmeinung bestimmt in Demokratien den Fortgang der politischen Entwicklungen. Bei sinkender Wahlbeteiligung allerdings kann eine Minderheit die Mehrheit überstimmen. Das ist normal und passiert immer wieder.Bruno Jonas lässt sich dabei gedanklich von Ambrose Bierce leiten, der gesagt hat: Redekunst ist die Verschwörung von Sprache und Handeln, um den Verstand zu hintergehen. Das Angebot, um sich das Hirn vernebeln zu lassen, ist vielfältig. Wer achtet schon auf sprachmanipulative Strategien, wenn sie unterhaltsam sind? Kant hat fälschlicherweise geglaubt, der Mensch müsse sich aus seiner selbstverschuldeten Unmündigkeit befreien. Heute befinden wir uns in einer Phase, in der sich der Mensch freiwillig in die Unmündigkeit aufmacht, weil es für ihn bequemer ist und mehr Spaß bringt.mehr Infos: http://bruno-jonas.deFoto: Ralf Wilschewski",
            "startDateTime": "11/20/21 19:30",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=26397227683&a=774719&m=13738"
        },
        {
            "id": "e84",
            "title": "Avishai Cohen Big Vicious - Live 2020",
            "description": "Der Trompeter Avishai Cohen (nicht zu verwechseln mit dem Bassisten gleichen Namens) ist eine der führenden Persönlichkeiten der internationalen Jazz-Szene und ein gefragter Trompeter seiner Generation. Obwohl tief in der Bebop- und Post-Bop-Tradition verwurzelt, gibt Cohen dem Jazz mit seinem modernen, lyrischen und unverwechselbaren Stil neue Impulse. Seinen Post-Bop-Stil kombiniert er mit energiereichen Improvisationen und Bezügen auf Größen wie Don Cherry, John Coltrane, Ornette Coleman und Dizzy Gillespie.",
            "startDateTime": "5/1/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867291155&a=774719&m=13738"
        },
        {
            "id": "e85",
            "title": "SIMPLY THE BEST - Die Tina Turner Story",
            "description": "Zum 80. Geburtstag auf großer Tour: Die Erfolgs-Show um die Rock-Legende Tina Turner 2019 ist das Jahr besonderer Tina Turner-Jubiläen: Vor 35 Jahren erschien ihr über 20 Millionen Mal verkauftes und mit vier Grammys ausgezeichnetes Album ?Private Dancer?, der Start eines unglaublichen Comebacks und einer Weltkarriere. Zu Ehren des 80. Geburtstags der ?Queen of Rock? geht ?Simply The Best - Die Tina Turner Story? auf große Tournee durch Deutschland, Österreich und Italien.?Simply The Best? schildert mit viel Live-Musik und beeindruckenden Szenen das bewegte Leben der Rock-Ikone: Von den Anfangserfolgen, der harten Zeit mit einem drogensüchtigen und gewalttätigen Ehemann, dem Scheitern einer großen Liebe und schließlich, nach der Trennung, Tinas Neuanfang und raketenartiger Aufstieg in den 80ern bis hin zur Filmmusik von ?James Bond 007 - Goldeneye? Mitte der 90er.Anna Mae Bullock, geboren am 26. November 1939 in Brownsville, Tennessee (USA), aufgewachsen in Nutbush, wurde als Tina Turner zum Weltstar und zur Legende. Ab 1958 an der Seite ihres späteren Ehemannes Ike Turner. 1984 startete sie ein überragendes Comeback als Solo Künstlerin, das in diesem Ausmaß nur mit dem von Elvis vergleichbar ist. 2009 ging die Sängerin mit dem unverwechselbaren Timbre das letzte Mal auf Welttournee. Diese Tour war der großartige Abschluss einer außergewöhnlichen Karriere: Ein halbes Jahrhundert Rock-Geschichte mit Höhen und Tiefen, mit Aufstieg und Fall - und über 180 Millionen verkauften Tonträgern, unzähligen Nummer 1-Hits und Chartplatzierungen wie ?Simply The Best?, ?Private Dancer? oder ?We Dont Need Another Hero?.Starring: Dorothea Fletcher als Tina Turner",
            "startDateTime": "1/14/22 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418944489&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/zJc9Yjao.jpeg"
        },
        {
            "id": "e86",
            "title": "Urban Priol - Wie im Film",
            "description": "Wie im Film. Das neue Kabarettprogramm von URBAN PRIOL.Man kennt das Gefühl: Du wachst auf und denkst dir ? ich bin im falschen Film. Aber nicht einmal das Murmeltier grüßt dich. Deutschland im Jahr 2010: Ein Land ohne Agenda, eine Regierung ohne Kompaß. Ein Regierungsprogramm mit dem Motto: -?Scheitern als Chance.?Stolz verkündet die Praktikanten-Combo von Schwarz-Gelb: -?Wir fahren in der Krise auf Sicht!?So did the ?Titanic?. Als kleines Prinzip Hoffnung muss herhalten, dass die Eisberge, die auf Kollisionskurs liegen, dank der Klimaerwärmung bis zum Crash abgeschmolzen sind. Und die selbsternannten Weltklimaretter feiern es schon als Erfolg, dass bei ihren verbalen Ausblähungen immerhin kein Methangas freigesetzt wird. Da sehnt man sich nach großem Kino, hofft darauf, dass irgendwann Bruce Willis erscheint und mit einem Satz die Probleme löst: -?Geben Sie mir den Präsidenten!?Man stelle sich das in seiner ganzen Erbärmlichkeit bei uns vor: Bruce Willis verlangt nach dem Präsidenten und es erscheint ? Horst Köhler, der gerade bei einer Charity-Gala ein Fohlen getauft hat und ganz herzlich von seiner Frau grüßen lässt.Der tägliche Irrsinn in unserer Banaldemokratie der herbeigetwitterten Facebook-Jünger zwischen mehrwertsteuerreduzierten Stundenhotels und westerwellschen Gockeleien ? gewogen und zu seicht empfunden.Mittendrin im tagesaktuellen Dickicht: Urban Priol. Er verknüpft Zusammenhänge, durchleuchtet das Dunkel, bringt Sprechblasen zum Platzen. Bis man verwundert den Kopf schüttelt: Wie im Film.Natürlich mit Überlänge. Demnächst in Ihrem Theater. James Bond will return.",
            "startDateTime": "4/2/22 19:30",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=26450369829&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/nEr3iRAD.jpeg"
        },
        {
            "id": "e87",
            "title": "DER NUSSKNACKER",
            "description": "RUSSISCHES KLASSISCHES STAATSBALLETT - DER NUSSKNACKERMusik von P. I. TschaikowskyKlassisches Ballett in 2 AktenDer Nussknacker ist Weihnachten!Schon seit über hundert Jahren nimmt Peter Tschaikowskys Ballett ?Der Nussknacker? einen festen Platz in der Theater- und Musikkultur der ganzen Welt ein. Jeden Winter freuen sich Jung und Alt über die Gelegenheit, noch einmal in die zauberhafte Atmosphäre dieses Balletts einzutauchen.Allein in der Zeit der Kindheit, in der Traum und Wirklichkeit so untrennbar verbunden sind, ist es möglich, sich von einem Moment zum anderen in die wunderbare Märchenwelt zu begeben, in den schönen Prinzen zu verlieben, der die Gefühle selbstverständlich erwidert, aber auch ungewöhnliche Abenteuer am Weihnachtsbaum zu erleben. Der mitternächtliche Stundenschlag kündigt sodann die Erfüllung der unglaublichsten Wünsche an.Von Peter Tschaikowsky im Jahr 1892 komponiert, nach einer literarischen Vorlage des romantischen Märchens von E.T.A. Hoffmann, hat ?Der Nussknacker? sofort die Herzen des Publikums weltweit erobert. Mit dem Russischen Klassischen Staatsballett gelangt der Zuschauer in eine wunderbare Welt, in der lebendig gewordene Puppen tanzen, die bewaffneten Mäusescharen unter dem Druck der Spielzeug-Armee zurückweichen, und am Ende das Gute und die Liebe triumphieren. Die berauschende Schönheit der Musik, das tänzerische Können der Tänzerinnen und Tänzer sowie die exquisite klassische Choreographie bescheren nicht nur den erfahrenen Liebhabern des klassischen Balletts, ob Jung oder Alt ein wahres Fest!Veranstalter: P.T.F. Deutsch-Russische Kulturförderungs GmbHMehr Info unter:  www.klassisches-ballett.com",
            "startDateTime": "12/18/21 16:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=26484174889&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/PgqqW3yd.jpeg"
        },
        {
            "id": "e88",
            "title": "Klavierduo Tal & Groethuysen",
            "description": "Aufgrund des städtischen Veranstaltungsverbotes zur Eindämmung der Verbreitung des Coronavirus kann das Albert-Konzert mit den Klavierduo Tal & Groethuysen, Sergey Malov und Raphaela Gromes am 2. April 2020 in der Musikhochschule Freiburg leider nicht stattfinden.Das Konzert wird verschoben auf Freitag, den 23. Juli 2021 um 20 Uhr in der Musikhochschule Freiburg.Abonnenten der Albert Konzerte haben hierzu eine gesonderte Info per Post erhalten.Ihre Eintrittskarten behalten für den neuen Konzerttermin ihre Gültigkeit und müssen nicht eingetauscht werden. Bringen Sie Ihre Karten einfach zum neuen Konzerttermin mit.Sollten Sie den neuen Konzerttermin nicht wahrnehmen können, können Sie Ihre Karten an der Vorverkaufsstelle, an der sie erworben wurden, zurückgeben.Für privatwirtschaftliche Veranstalter, die keine öffentlichen Zuschüsse bekommen, wie die Albert Konzerte ist die Corona-Krise eine große Herausforderung. Wir bitten Sie deshalb um eine solidarische Geste:- Unterstützen Sie uns im Rahmen der Aktion #seidabeiSchenkDeinTicket und verzichten auf die Rückerstattung der von Ihnen bereits bezahlten Tickets oder einzelner Tickets. Bitte teilen Sie uns mit, falls Sie eine Spendenbescheinigung benötigen.- Tauschen Sie Ihr bereits bezahltes Ticket ein gegen einen Umtauschgutschein, der für beliebige zukünftige Albert-Konzerte eingelöst werden kann.Bitte nehmen Sie für beide Aktionen ebenfalls Kontakt zur der Vorverkaufsstelle auf, an der Sie Ihre Tickets erworben haben. Ihre Mitwirkung bedeutet uns sehr viel! Herzlichen Dank!Bitte beachten Sie: Da sehr viele Vorverkaufsstellen aufgrund der behördlichen Auflagen aktuell nicht erreichbar und/oder geschlossen sind, bitten wir Sie, bei Ihrer Vorverkaufsstelle die aktuellen Service- und Öffnungszeiten zu erfragen und sich dort zu informieren, ob die Veranstaltung aufgrund der längeren Bearbeitungszeiten bereits zum Storno bzw. für Umtauschgutscheine freigeschaltet wurde.Hier die Kontaktdaten der wichtigsten Vorverkaufsstellen:BZ-Karten-Service, Tel. 0761 ? 496-8888, Email: mitarbeiter.kartenservice@bz-ticket.deBuchhandlung Rombach, Tel. 0761 ? 4500-2432, Email: klassik@rombach.deReservix, Tel. 0761 ? 88788-11, Email: tickets@reservix.deAD ticket, Tel. 0180 - 6050400Falls Sie Ihre Karten direkt bei den Albert Konzerten erworben haben und eine Rückerstattung wünschen, senden Sie Ihre Karten bitte zusammen mit Angabe Ihrer Kontoverbindung an das Kartenbüro der Albert Konzerte: Albert Konzerte GmbH, Postfach 1349, 79013 FreiburgFür Rückfragen steht Ihnen das Kartenbüro der Albert Konzerte gerne zur Verfügung:Tel. 0761 ? 289442, Email: info@albert-konzerte.de-----------------------------------------------------------------------------------------Als eines der weltweit führenden Klavierduos begeistern die israelische Pianistin Yaara Tal und ihr deutscher Partner Andreas Groethuysen immer wieder auf bedeutenden Konzertpodien wie dem Concertgebouw Amsterdam, der Mailänder Scala, den Salzburger Festspielen und dem Wiener Musikverein. Bei den Albert Konzerten reizen Tal & Groethuysen die symphonischen Qualitäten des Konzertflügels aus und lassen so Orchesterklassiker von Beethoven und Schubert einmal anders lebendig werden. Unterstützt werden sie in diesem Konzert von Cello-Jungstar Raphaela Gromes und dem experimentierfreudigen Multi-Instrumentalisten Sergey Malov: Beide präsentieren sich auch solo in Beethovens posthum entdecktem Werkfragment, das er zwei unbekannten Wiener Brillenträgern zugedacht hatte.Programm:Mendelssohn, Hebriden-Ouvertüre op. 26Beethoven, Duo Es-Dur für Viola und Violoncello WoO 32 ?Duett mit zwei obligaten Augengläsern?Schubert, Symphonie Nr. 7 h-Moll D 759 ?Unvollendete?Beethoven, Symphonie Nr. 5 c-Moll op. 67Klavierduo Tal & GroethuysenSergey Malov, ViolineRaphaela Gromes, Violoncello",
            "startDateTime": "7/23/21 20:00",
            "venueId": "v27",
            "offerURL": "https://www.awin1.com/pclick.php?p=26484174893&a=774719&m=13738"
        },
        {
            "id": "e89",
            "title": "Sergej Krylov | Violine",
            "description": "Aufgrund des städtischen Veranstaltungsverbotes zur Eindämmung der Verbreitung des Coronavirus kann das Albert-Konzert mit den Sergej Krylov und Michail Lifits am 8. Mai 2020 in der Musikhochschule Freiburg leider nicht stattfinden.Das Konzert wird verschoben auf Montag, den 19. Juli 2021 um 20 Uhr in der Musikhochschule Freiburg.Abonnenten der Albert Konzerte haben hierzu eine gesonderte Info per Post erhalten.Ihre Eintrittskarten behalten für den neuen Konzerttermin ihre Gültigkeit und müssen nicht eingetauscht werden. Bringen Sie Ihre Karten einfach zum neuen Konzerttermin mit.Sollten Sie den neuen Konzerttermin nicht wahrnehmen können, können Sie Ihre Karten an der Vorverkaufsstelle, an der sie erworben wurden, zurückgeben.Für privatwirtschaftliche Veranstalter, die keine öffentlichen Zuschüsse bekommen, wie die Albert Konzerte ist die Corona-Krise eine große Herausforderung. Wir bitten Sie deshalb um eine solidarische Geste:- Unterstützen Sie uns im Rahmen der Aktion #seidabeiSchenkDeinTicket und verzichten auf die Rückerstattung der von Ihnen bereits bezahlten Tickets oder einzelner Tickets. Bitte teilen Sie uns mit, falls Sie eine Spendenbescheinigung benötigen.- Tauschen Sie Ihr bereits bezahltes Ticket ein gegen einen Umtauschgutschein, der für beliebige zukünftige Albert-Konzerte eingelöst werden kann.Bitte nehmen Sie für beide Aktionen ebenfalls Kontakt zur der Vorverkaufsstelle auf, an der Sie Ihre Tickets erworben haben. Ihre Mitwirkung bedeutet uns sehr viel! Herzlichen Dank!Bitte beachten Sie: Da sehr viele Vorverkaufsstellen aufgrund der behördlichen Auflagen aktuell nicht erreichbar und/oder geschlossen sind, bitten wir Sie, bei Ihrer Vorverkaufsstelle die aktuellen Service- und Öffnungszeiten zu erfragen und sich dort zu informieren, ob die Veranstaltung aufgrund der längeren Bearbeitungszeiten bereits zum Storno bzw. für Umtauschgutscheine freigeschaltet wurde.Hier die Kontaktdaten der wichtigsten Vorverkaufsstellen:BZ-Karten-Service, Tel. 0761 ? 496-8888, Email: mitarbeiter.kartenservice@bz-ticket.deBuchhandlung Rombach, Tel. 0761 ? 4500-2432, Email: klassik@rombach.deReservix, Tel. 0761 ? 88788-11, Email: tickets@reservix.deAD ticket, Tel. 0180 - 6050400Falls Sie Ihre Karten direkt bei den Albert Konzerten erworben haben und eine Rückerstattung wünschen, senden Sie Ihre Karten bitte zusammen mit Angabe Ihrer Kontoverbindung an das Kartenbüro der Albert Konzerte: Albert Konzerte GmbH, Postfach 1349, 79013 FreiburgFür Rückfragen steht Ihnen das Kartenbüro der Albert Konzerte gerne zur Verfügung:Tel. 0761 ? 289442, Email: info@albert-konzerte.de------------------------------------------------------------------------------------------Ein virtuoser Violinist aus Russland trifft einen phänomenalen Pianisten aus Usbekistan: Dem letzteren attestiert die Frankfurter Allgemeine Zeitung ?beglückende Klangfarbenfreudigkeit?, ersterer gehört als Meisterschüler von Salvatore Accardo und Protegé von Mstislav Rostropowitsch seit Jahren zur international ersten Riege der Geigensolisten. Gemeinsam meistern sie einen Querschnitt durch die Romantik mit Perlen der Violinliteratur: Tschaikowskys traumverlorene ?Meditation? trifft auf Edvard Griegs von skandinavischer Folklore durchdrungene c-Moll-Violinsonate, gekrönt von César Francks mitreißender, tief bewegender Violinsonate in A-Dur.Neues Programm:Tschaikowsky, Méditation (aus Souvenir d´un lieu cher op. 42)Grieg, Sonate für Violine und Klavier Nr. 3 c-Moll op. 45Franck, Sonate für Violine und Klavier A-Dur FWV 8Sergej Krylov, ViolineMichail Lifits, Klavier",
            "startDateTime": "7/19/21 20:00",
            "venueId": "v27",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418981269&a=774719&m=13738"
        },
        {
            "id": "e90",
            "title": "Konstantin Wecker - UTOPIA. Eine Konzertreise",
            "description": "KONSTANTIN WECKER ? UTOPIAeine Konzertreise mit multimedialer Bühnenshow ?Utopia. Eine Konzertreise? heißt die neue Bühnenproduktion von und mit Konstantin Wecker, bei der Wecker sein Publikum auf eine sehr persönliche Suche nach Utopia mitnehmen wird, eine sehnsuchtsvolle Reise in eine herrschaftsfreie Welt. Zu hören sind neu komponierte Lieder (Alles Allen, Utopia) kombiniert mit (fast) vergessenen, aber noch immer gültigen Titeln (Revoluzzer, Und das soll dann alles gewesen sein), beliebten Wecker-Klassikern, sowie eigenen Texten, Gedichten und Gedanken im Dialog mit solchen von geschätzten Weggefährt*innen, Künstler*innen, Autor*innen, Philosoph*innen und politischen Aktivist*innen. ?Nein ich hör nicht auf zu träumen von der herrschaftsfreien Welt? singt Wecker in seinem Lied Den Parolen keine Chance. Sein neues Programm führt diesen Gedanken nun konsequent weiter. Utopia ist eine musikalische Laudatio und ein leidenschaftliches künstlerisches Plädoyer dafür, das angeblich ?nicht Realisierbare? endlich möglich werden zu lassen bevor die Realisten unsere Welt endgültig zerstört haben. Ein Blick in deutsche Wörterbücher verrät viel über Macht und Herrschaft. Dort wird das Wort Utopie als eine ?nicht realisierbare Idee? bzw. als ?Hirngespinst? und das Adjektiv utopisch als ?nach dem Unmöglichen strebend? bezeichnet. Aber wer sagt eigentlich, dass eine Utopie ?nicht realisierbar? oder ?unwirklich sein sollte. Und wer hat definiert, dass ein in vielen Momenten schon gelebtes Utopia unmöglich ist? Es gibt keinen besseren Moment für Utopien als den gegenwärtigen: Jeder Augenblick ist ewig? singt Konstantin Wecker in seinem Lied SoScheeSchoA und sagt zu seinem Utopia-Projekt: ?Wir müssen heute das Utopische gemeinsam suchen, denken, fordern, es leben und dafür handeln! Was wäre die Alternative angesichts der möglichen Vernichtung des gesamten Planeten??Auf diesem Weg braucht es gemeinsame Entdeckungen und Erlebnisse, die Mut machen, die eigene Angst und Ohnmacht zu überwinden: ?Die Vertreter des Machbaren, Notwendigen, des angeblich Realistischen und einzig Realisierbaren hatten lange genug Zeit. Sie können nur zerstören. Ihre Show ? oder besser gesagt, ihr Business ? darf nicht weiter gehen?, sagt Konstantin Wecker. ?Es reicht!? Für ihn ist es höchste Zeit für eine umfassende Laudatio, für eine Ode auf all jene Utopist*innen, die seit Jahrhunderten denunziert und verfolgt werden, und die meistens ganz richtig liegen mit ihrer Kritik und ihren Visionen.Utopia wird eine sehr persönliche und politische Zeitreise in Vergangenheit und Zukunft, um all die eigenen, fremden und kollektiven Sehnsüchte, Rebellionen, Ideen und gelebten Momenten zu entdecken, in denen eine herrschaftsfreie Weltgesellschaft heute längst entsteht und lebendig wird.",
            "startDateTime": "12/16/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=26641057873&a=774719&m=13738"
        },
        {
            "id": "e91",
            "title": "Teddy Show - Neues Programm",
            "description": "Seine YouTube-Fans kennen und  lieben ihn: Tedros ?Teddy? Teclebrhan. Inzwischen hat der Schauspieler auch auf  der Comedy-Bühne Kultstatus  erreicht. Ab  Februar  2020 kommt Teddy mit einem neuen Programm wieder auf große Tour. Nach seiner kleinen intimen ?ClubTour?,  die  ihn 2019 nach Kiel,  Lüneburg  und Lübeck  bringt, zieht es den  Comedian wieder auf   die größeren   Bühnen   in   Deutschland, Österreich und der Schweiz. Am 18. April 2020 präsentiert Teddy seine brandneue Live-Show in  der  Sporthalle  in  Hamburg. Was  Teddy  sich dafür   alles   überlegt hat,wird   noch   nicht verraten.  Aber  es  wird  garantiert  wieder  eine große Show werden, die so einige Überraschungen zu bieten hat. Denn keiner vereint Comedy, Musik, Tanz und Schauspielerei so gekonnt zu einem einzigartigen und manchmal auch sehr verrückten Erlebnis wie Teddy.Teddy ist u.a. bekannt für seine Rollen als Ernst Riedler, Antoine, Percy und Lohan Cohan, in denen  er  sich humorvoll,  zweideutig und schauspielerisch gekonnt  an  verschiedensten Klischees und Stereotypen entlang hangelt. Der 35-Jährige arbeitet dabei mit Dialekten und Jugendsprache  und macht  Aussagen  wie ?Hasch du überhaupt gelernt?!? oder ?Ich tu hasseln? zu Running Gags unter seinen Fans. Mit  seinem ersten Live-Programm ?Was labersch du...?!? füllte er in  über  100  Shows  in Deutschland, Österreich und der Schweiz die Hallen. Sein Auftritt in der Stuttgarter Schleyer-Halle wurde an zwei Tagen von insgesamt 19.000 Zuschauern besucht, die Live-Show als DVD aufgezeichnet  und  bei  Netflix  veröffentlicht.  Teddys populäres YouTube-Video ?Umfrage zum Integrationstest? zähltmittlerweile über 36 Millionen Aufrufe.",
            "startDateTime": "10/11/21 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=26733788821&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/vQFR8N40.jpeg"
        },
        {
            "id": "e92",
            "title": "Element Of Crime",
            "description": "Seit 33 Jahre spielen sie ihre Songs. Und bringen ihre Platten heraus, genauso wie sie sich das vorstellen, eine nach der anderen. Es gibt wenig Vergleichbares, keine andere deutschsprachige Band, die diese eigenartige Mischung aus Folkrock und Blues, Artrock und Kinderlied, Krachorgie und Schmalzmelodie in die Welt brächte, ohne auch ? wie es scheint ? nur einen Moment darüber nachzudenken, ob das gerade in den Zeitgeist passt oder nicht, ob das für neue oder alte Medien taugt, ob das einer versteht, ob sie das überhaupt selber verstehen, ob das nun traurig oder lustig, hässlich oder schön, Tiefsinn oder Spinnerei ist.Auf den ersten Blick sieht alles nach Verweigerung aus: Sie weigern sich, immer das Gleiche zu machen und sie weigern sich, sich neu zu erfinden. Sie weigern sich, sich der Streaming- und YouTube- Landschaft anzupassen. Sie geben ihre Musik nicht für Werbung her. Sie spielen lieber dreimal im Tempodrom als einmal in der Max-Schmeling- Halle. Sie lassen sich nicht festnageln und so weiter und so fort, man könnte es noch lange fortführen, aber das kann das Geheimnis ihres Erfolges nicht sein, das sind alles nur Dinge, die nicht getan werden, aber geliebt wird man nur für das, was man tut, nicht für das, was man lässt.Und so entsteht ein anderes Bild dieser Band: Einer Band, die einen so unverwechselbaren Stil in Sachen Song, Sound und Haltung hat, dass man nur zwei Möglichkeiten hat: Man kann das mögen oder eben auch nicht. Nie sind ELEMENT OF CRIME nur ?irgendwie interessant? oder ?auch ganz okay?.Und da wären wir bei ?Schafe, Monster und Mäuse?. Ist das ein Verweis auf das Vorgängerwerk ?Lieblingsfarben und Tiere?? Wohl kaum. Ein Monster ist kein Tier und eine Maus ist keine Farbe. Es ist aber sicher auch keine zufällige Wahl. Es ist der Titel eines Songs auf dem Album, der von Träumen erzählt, der Welt ?hinter geschlossenen Lidern?, in der eigene, andere Gesetze gelten, diktiert vom Unterbewusstsein, kontrolliert und durchkreuzt vom Über-Ich. Das ist auch eine gute Metapher für das poetische Prinzip bei Element of Crime: Die musikalische und textliche Arbeit mit Assoziationen, unterbewussten, improvisierten Elementen, das wie zufällige Ineinander-stürzen der Stilmittel, das Arbeiten mit und das Durchbrechen von bekannten Mustern, das Kaleidoskop der Klangfarben, Melodien, improvisierten Kakophonien, das ganze psychedelische Instrumentarium, mit dem diese Band seit so langer Zeit ohne mit der Wimper zu zucken hantiert.?Schafe, Monster und Mäuse?: Da gibt es Soulballaden wie ?Am ersten Sonntag nach dem Weltuntergang?, Chansons wie ?Bevor ich dich traf?, Folksongs wie ?Die Party am Schlesischen Tor?, Pubrockkracher wie ?Ein Brot und eine Tüte?, Desert-Rock-Aufschneidereien wie ?Stein, Schere, Papier? und vieles mehr. Und dann ist wieder alles anders, wenn bei ?Am ersten Sonntag? Jakob Iljas artrockige Kaputtgitarre in den Soloteil sägt, wenn bei ?Bevor ich dich traf? die wienerischen Geigen in die letzte Strophe einfräsen, wenn bei ?Die Party am Schlesischen Tor? eine psychedelisch krachende Blaskapelle durchs Bild wankt, ständig Dinge passieren, auf die man nicht gefasst sein kann, Richard Pappik die Tempi verschleppt und beschleunigt, wie es gerade sein muss, mit Rhythmen und Klangfarben jongliert und überhaupt sein schmutziges Spiel mit einer Rockmusik spielt, die auf dieser Platte immer wieder neu definiert wird und Sven Regeners knarzige Stimme dazu Poesie verteilt, als werfe er Fleischfetzen auf einen Grill aus alten Ölfässern. Musik und Text, da taumeln sie zusammen in die aufgehende Sonne und stützen sich gegenseitig wie zwei erschöpfte Partygänger nach einer langen Nacht am Schlesischen Tor. Zerzauste Vögel, die von ihren Familien unterstützt werden, der Hendl- Jahn, eine Gratiszigarre beim Kauf eines neues Lebens, wo Stürme, Blitze und Donner nicht Wetter, sondern ein Arsenal gegen gute Laune sind, die Frau vom Supermarkt, Black Friday beim Sterni im Späti ... wer bitte bringt sowas in so wunderbar klingenden Texten unter??Schafe, Monster und Mäuse? ist ein langes, ultrapsychedelisches Album geworden, das längste in der Geschichte der Band. Es ist, als wollten ELEMENT OF CRIME das Albumformat, für das diese Band von Anfang an wie keine zweite geschaffen war, bis auf das Äußerste ausreizen, vielleicht ein letztes Mal, man weiß nicht, wie es weitergehen wird damit, die Welt verändert sich.Aber, und das ist das Entscheidende: Die Lieder bleiben.Charlotte Goltermann (Berlin, 2018)",
            "startDateTime": "8/4/21 19:15",
            "venueId": "v4",
            "offerURL": "https://www.awin1.com/pclick.php?p=26757244803&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/eugt0yju.jpeg"
        },
        {
            "id": "e93",
            "title": "The Australian Pink Floyd Show - All That You Feel",
            "description": "THE AUSTRALIAN PINK FLOYD SHOW, die weltweit bekannteste und erfolgreichste Pink Floyd Tribute-Band, kommt auf große Deutschland-tour. Die Tournee umfasst insgesamt 18 Termine ? darunter Berlin, Hamburg, München, Frankfurt, Köln, Oberhausen, Stuttgart und Leipzig. Es ist bereits die dreizehnte Produktion, mit der die Australier die Pink-Floyd-Fans hierzulande begeistern. Das neue Programm unter dem Motto ?All That You Feel? präsentiert die größten Hits der Alben ?Meddle?, ?The Dark Side of The Moon?, ?Wish You Were Here?, ?Animals?, ?The Wall? und weitere Klassiker aus allen Schaffensphasen von Pink Floyd. Die herausragende Show ist eine perfekte Huldigung an die Herren Barrett, Waters, Gilmour, Wright und Mason. Angesichts des satten, aber sensibel ausgesteuerten Sounds und Stimmen, die wie die der Originale klingen, zerstreuen sich bei den Konzerten der Band schnell jegliche Zweifel daran, dass hier niemand anderes als leidenschaftliche und hochprofessionelle Musiker auf der Bühne stehen. Durch ihr detailverliebtes Können, den Sound und die Show von Pink Floyd so perfekt wie möglich zu reproduzieren, gelingt es THE AUSTRALIAN PINK FLOYD SHOW, das breite Spektrum zwischen den psychedelischen Träumen der 1960er Jahre und dem Bombast der 1980er Jahre auf einzigartige Art und Weise auf die Bühne zu bringen. Mit ihren von Tour zu Tour programmatisch wechselnden Shows gelingt es ihnen dabei stets, den Klang und die Atmosphäre eines Pink Floyd-Konzertes perfekt wiederzugeben. In Kombination mit einer aufwändigen Licht- und Lasershow, neuen Animationen auf einer LED-Wand, die die Musik visuell untermalen sowie riesigen, aufblasbaren Figuren auf der Bühne, werden die Deutschlandauftritte von THE AUSTRALIAN PINK FLOYD SHOW auch 2020 wieder zu einem einmaligen Konzerterlebnis und zum Muss für jeden Pink Floyd-Fan. Was 1988 in Australien mit dem Aushang eines Zettels mit der Aufschrift ?Sänger und Keyboarder für Band gesucht. Professionelle Einstellung Voraussetzung. Wir spielen nur Pink Floyd? in einem Plattenladen in Adelaide begann, füllt über dreißig Jahre später große Hallen auf der ganzen Welt. Über die Jahre ist THE AUSTRALIAN PINK FLOYD SHOW längst zu einer musikalischen Institution geworden, die Maßstäbe setzt. Kein Wunder, lautete das Credo der Australier doch von Anfang an: So nah am Original wie nur möglich. Dass sie ihr Handwerk perfekt beherrschen, hat THE AUSTRALIAN PINK FLOYD SHOW bereits einem Millionenpublikum bewiesen und selbst kritischste Fans überzeugt. Foto: Ben Donoghue",
            "startDateTime": "3/11/22 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=26885418375&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/hP5CNxpg.jpeg"
        },
        {
            "id": "e94",
            "title": "Fantasy - Die große Casanova Arena Tour 2020/2021",
            "description": "Das deutsche Schlager-Erfolgs-Duo FANTASY konnte mit Klaus Leutgeb einen neuen Tourneeveranstalter für sich gewinnen.Mit der Unterzeichnung des Tourneevertrages zwischen dem Duo FANTASY, Manager Andreas FERBER und Klaus LEUTGEB, CEO der LEUTGEB ENTERTAINMENT GROUP, wurde ein deutliches Zeichen für die Zukunft des Schlagerduos gesetzt und die Weichen in Richtung eines progressiv-erfolgreichen internationalen Show- und Entertainmentkurses gestellt.Event-Profi Klaus Leutgeb sieht die an ihn übertragene Aufgabe der Tourneeorganisation für das Erfolgsduo FANTASY als willkommene Herausforderung und hat bereits Großes vor. Im Rahmen einer mit Ende 2020 startenden Tournee die 45 Konzerte in Deutschland, der Schweiz und Österreich umfasst, wird mit einem großartigen Bühnendesign und einer einzigartigen konzeptuellen Neugestaltung der Showelemente, ein erfolgsorientierter Weg beschritten um das Erfolgsduo in das gebührende Rampenlicht zu setzen und den Fans unvergessliche Konzerterlebnisse bei FANTASY 2.0 zu bieten.Nur wenige Künstler verstehen es, wie FANTASY, tausende Fans auf eine Reise, in eine Phantasiewelt mit ausgelassener Partystimmung, stillen Momenten, Gedanken an Leidenschaft und Liebe mitzunehmen. Großartige Unterhaltung ist wie bei jedem FANTASY-Konzert auch bei der 2020 startenden Tournee garantiert!Seit mehr als 20 Jahren beweisen Freddy Malinowski und Martin Hein, dass die Begriffe Fantasy und Schlagererfolg untrennbar zusammengehören. Ein Meilenstein der Fantasy Karriere war sicherlich die Tournee 2012 mit Schlagerkönigin Andrea BERG. Als Vorgruppe konnte FANTASY dort begeistern und tausende neue Fans für sich gewinnen. Seither ist das Duo aus den großen TV-Shows nicht mehr wegzudenken und sorgt bei seinen einzigartigen Live-Konzerten für ausverkaufte Arenen. Sie haben sich definitiv in die erste Reihe der deutschsprachigen Schlagerszene eingereiht.Original-Content von: Leutgeb Entertainment Group GmbH, übermittelt durch news aktuell Diese Meldung kann unter https://www.presseportal.de/pm/129052/4222178 abgerufen werden.Die Liste der Auszeichnungen, die das Duo mit den spektakulär schönen Bühnenshows verliehen bekam, ist lange und umfasst neben zahlreichen Gold- und Platinauszeichnungen ihrer Alben, im gesamten deutschsprachigen Raum, 5 Echo Nominierungen und 3 Auszeichnungen in Folge (2017, 2018, 2019) beim Fest der Besten aus den Händen von Florian Silbereisen. Ein Ende ihrer außergewöhnlichen Karriere ist noch lange nicht in Sicht und die eingeschworene Fangemeinde von FANTASY darf sich jetzt schon auf die Konzerttournee 2020/21 freuen.",
            "startDateTime": "5/18/22 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=26960048875&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/OJecbjWG.jpeg"
        },
        {
            "id": "e95",
            "title": "Dschungelbuch - das Musical - Das Musical-Erlebnis für die ganze Familie!",
            "description": "Musical-Macher schaffen unvergessliche Show mit furiosem Happy-EndBestens ausgebildete Musical-Darsteller bringen dank mitreißender Songs, temporeicher Choreographien und witziger Dialoge Leben in den Urwald. Mit einem farbenfrohen Bühnenbild und eindrucksvollen Kostümen entsteht die prachtvolle Dschungelwelt. Die bunte Reise durch den geheimnisvollen Urwald wird mit Licht- und Nebeleffekten stimmungsvoll in Szene gesetzt.Das Theater Liberi inszeniert den Bestseller von Rudyard Kipling als modernes Musical für die ganze Familie. Unterhaltsame Eigenkompositionen und temporeiche Choreographien versprechen ein spannendes Live-Erlebnis für Kinder ab vier Jahren, Eltern und Großeltern.Freunde und Feinde machen Moglis Dschungelleben zum großen AbenteuerMithilfe seines treuen Freundes und Lehrers Balu und dem weisen Panther Baghira erlernt Mogli die Gesetze des Dschungels, um in das Wolfsrudel aufgenommen zu werden. Dabei erlebt er den Urwald mit all seinen Schönheiten. Aber auch den Gefahren: Der dreisten Affenbande, der hypnotisierenden Schlange Kaa und vor allem dem gefährlichen Tiger Shir Khan! Und als ihm dann noch das Mädchen aus dem Dorf begegnet, steht Moglis Welt endgültig auf dem Kopf?Freundschaften, die Grenzen überwindenSeit über hundert Jahren fasziniert die Geschichte vom Findelkind Mogli ganze Generationen. Das Theater Liberi lässt die Welt des Jungen, der von Wölfen im Dschungel aufgezogen wird, zu neuem Leben erwachen. In dem Wolfsrudel um Oberhaupt Akela, dem herzensguten Bären Balu und dem weisen Panther Baghira hat Mogli eine neue Familie gefunden, die ihm die Gesetze des Dschungels lehrt. Aufregende und große Abenteuer stehen bevor, denn Mogli trifft nicht nur auf eine wilde Affenbande, sondern auch auf ulkige Geier und die geheimnisvolle Schlange Kaa. Aber der Urwald birgt auch Gefahren: Der Tiger Shir Khan fürchtet seine Stellung als König des Dschungels und will das Menschenkind vertreiben. Mogli beginnt sich zu fragen, wo er eigentlich hingehört. Und als ihm dann noch das Mädchen mit der roten Blume begegnet, steht seine Welt endgültig auf dem Kopf?Auf der Suche nach der eigenen IdentitätIn der unterhaltsamen Adaption von Liberi-Autor Helge Fedder geht das Findelkind Mogli auf Identitätssuche. Dabei lehrt ihn die Gemeinschaft im Dschungel, was Zugehörigkeit und Geborgenheit bedeuten. ?Mogli versucht zu verstehen, wer er ist und wo er eigentlich hingehört. Zum Glück stehen ihm seine Freunde dabei hilfreich zur Seite?, verrät Balu-Darsteller Okan ?en. Moglis Reise wird begleitet von den eigens komponierten Titeln der Musiker Christoph Kloppenburg und Hans Christian Becker. ?Mal humorvoll, mal ernst, aber immer unterhaltsam?, beschreibt Kloppenburg die Stücke. ?Musikalisch ist alles dabei: eine groovende Affenbande, Shir Khan als König des Rock n Roll und ein funkiges Finale.?",
            "startDateTime": "1/6/23 11:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=27041815885&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/J3gwpz2T.jpeg"
        },
        {
            "id": "e96",
            "title": "MICHAEL SCHULTE - ?HIGHS & LOWS? TOUR 2020",
            "description": "?Beruhigend, lebensfroh und voller Energie? (FFH), so kennt man MICHAEL SCHULTE bei allem was er tut. Nachdem  sich  der  Singer-Songwriter mit ?You  Let  Me  Walk  Alone? beim  Eurovision Songcontest 2018 in die Herzen aller Zuschauer gesungen hat, könnte auch 2019 nicht besser für ihn laufen: Nach ausverkauften Konzerten auf seiner ?Dreamer? Tour, ist er mit seiner Radiohymne ?Back To The Start? und weiteren Songs auf zahlreichen Festivals und Open-Airs quer durch ganz Deutschland  unterwegs.  Mit  seinem  Sommer-Hit und  seiner  kommenden  Single  ?All  I  Need?  (VÖ 16.08.19) liefert er gleichzeitig den ersten Vorgeschmack auf seinen nächsten großen musikalischen Coup: Das anstehende Album ?Highs & Lows? (VÖ 25.10.19).Mit dem Album-Titel verspricht MICHAEL SCHULTE seinen Fans auch weiterhin ehrliche, ungeschönte und  vor allen Dingen  persönliche  Einblicke  in  sein  Leben:?Aus  den  Tiefen  des  Lebens  gestärkt rauskommen und die Höhen genießen und zu schätzen wissen?Das ist das große Thema auf diesem Album.?Mittlerweile Familienvater, hat sich sowohl das Songwriting, als auch das Privatleben von MICHAEL SCHULTE verändert: ?Musikalisch gehen die Album-Songs sehr stark in die Richtung der letzten drei Singles, auch wenn man natürlich ein paar neue Sachen ausprobiert. Was einem aber sicherlich  auffällt  ist,  dass  die  Inhalte  und  Texte  der  Songs teilweise  anders  sind?denn  ich bin mittlerweile in einem ganz anderen Abschnitt meines Lebens angelangt und setze mich mit anderen Themen auseinander.?Diese spürbare Nahbarkeit schätzen Fans und Medien gleichermaßen: Nicht umsonst wird ihm trotz ?Schulte-Fieber?  (Focus)  nachgesagt,  dass  er  immer  ?bodenständig,  symphatisch,  norddeutsch? geblieben ist (t-online). Spätestens bei der Verleihung des Bambi-Publikumspreises zeigte MICHAEL SCHULTE, dass er auf seinem Weg nach ?You Let Me Walk Alone? mit sicher nicht alleine ist ?und dieser noch lange nicht vorbei ist. Auf seiner ?Highs & Lows? Tour 2020 wird ereinen Blick in den Rückspiegel, gleichzeitig aber auch in die Zukunft wagen. Foto: © Sandra Ludewig",
            "startDateTime": "10/7/21 20:00",
            "venueId": "v22",
            "offerURL": "https://www.awin1.com/pclick.php?p=27041816427&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/erjh2q9P.jpeg"
        },
        {
            "id": "e97",
            "title": "OTTO - Live 2021",
            "description": "Ottos bisher letzte Tour endete am 17. Oktober 2017. Am 4. April 2021 soll?s wieder losgehen: OTTO ? live! 900 Tage werden inzwischen vergangen sein. ?Und zwar genau 900?, behauptet Otto. ?Ich zähle nämlich die Tage, an denen ich nicht auf Tour sein darf.? An diesen Tagen ist einiges passiert: Otto hat drei Geburtstage gefeiert, darunter sogar einen runden. Bei der Gelegenheit ist er zum Ehrenbürger seiner Heimatstadt Emden ernannt worden, dort ist sogar eine Fußgängerampel mit seiner speziellen Gangart bestückt worden, Otto hat im Fernsehen seine Geheimakte aufgeblättert, der Bundespräsident hat ihm ein echtes Verdienstkreuz angehängt, mehrere Museen haben sein malerisches Werk gezeigt, seine Große Ottobiographie ist erschienen, ein Spielfilm ist in Arbeit, und Ottos Anerkennung als Weltkulturerbe ist wohl nur noch eine Frage der Zeit.Wer OTTO vorher noch einmal live und im Original sehen möchte, sollte die Gelegenheit also nutzen ? die neue Tournee führt wieder in gut 75 Städte und kreuz und quer durch den gesamten deutschlachenden Raum: von Aurich bis Zürich, von Neu Brandenburg bis Wiener Neustadt.Otto hat sich nicht verändert: das erste O steht weiter für Ostfriesland, das erste T für Tempo, das zweite für Timing, und das zweite O für ?Oje, wie schnell die Zeit vergeht!?Deswegen haben wir Otto gefragt, was uns bei seiner nächsten Tournee erwartet. Otto muss nicht lange nachdenken: ?Ich wäre ein komischer Komiker, wenn ich heute, eineinhalb Jahre vor dem Start, schon wüsste, was ich 2021 auf der Bühne machen werde ? ich weiß bloß eins, meine Gitarre werde ich auf jeden Fall mitnehmen, und deswegen heißt bis dahin natürlich: Üben, üben, üben! Das gilt auch für mich ? vor allem aber fürs Publikum. Das muss die Texte ja fehlerlos mitsingen können ...? Er grinst. ?Ich verlass mich auf Euch!?",
            "startDateTime": "11/1/22 20:07",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=27041816465&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/zItsOLW9.jpeg"
        },
        {
            "id": "e98",
            "title": "Sarah Lesch",
            "description": "Sarah Lesch ist eine der großen Songwriterinnen der neuen deutschen Liedermacherszene. Sich berufend auf die Tradition, auf das Geradeheraussprechen, aber mit dem Blick und der Haltung im Jetzt, im Morgen. Mit mittlerweile vier Alben und unzähligen Konzerten im Gepäck wirbt Sarah Lesch weiter beständig für Weniger Ich, mehr Wir: Ihre Songs stellen die richtigen Fragen, reichen die Hand, bieten Hilfe an, werden zu Begleitern. Mit Den Einsamen zum Troste erscheint nun eine Auswahl an Liedern, die die Künstlerin selbst durchs Leben begleiten.Sarah wird mit dem neuen Album ?Der Einsamkeit zum Trotze?, den Liedern und Geschichten und mit einer akustischen Besetzung unterwegs sein.https://sarahlesch.de/Haltet euch bitte an die jeweils geltenden Maßnahmen des Stufenplans der Hessischen Landesregierung. Diese findet ihr unter:https://soziales.hessen.de/.../aktuelle-informationen-coronaoder https://www.hanau-corona.de/Wir freuen uns trotz Einschränkungen sehr darauf, zusammen mit euch wieder tolle Abende in gemütlicher Atmosphäre zu genießen!Eure Teams vom KUZ und EllisGefördert vom Hessischen Ministerium für Wissenschaft und Kunst im Rahmen des Kulturpakets 2 des Landes Hessen und unterstützt durch DIEHL+RITTER/INS FREIE!",
            "startDateTime": "7/28/21 20:30",
            "venueId": "v5",
            "offerURL": "https://www.awin1.com/pclick.php?p=26031008459&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/jMywTQgq.jpeg"
        },
        {
            "id": "e99",
            "title": "Joel Brandenstein - Frei Tour 2021",
            "description": "?Brandenstein berührt und bewegt mit seiner ehrlichen Art, mit seiner Underdog- Geschichte und den einfühlsamen Texten.? (RP Online)Eine unverwechselbare Stimme, unterlegt mit handgemachten Songs aus dem eigenen Kellerstudio: So startete JOEL BRANDENSTEIN 2011 seine Musikkarriere. Mit über 550.000 Fans auf Facebook, 125.000 Instagram-Follower und insgesamt über 200 Millionen Videoabrufen auf YouTube ist der Singer-Songwriter längst im Zentrum der deutschen Musikszene angekommen.2017 gelingt JOEL BRANDENSTEIN mit seinem Debüt-Album ?Emotionen? das, wovon viele Künstler nur träumen: der Direkteinstieg von 0 auf Platz 1 in den deutschen Album-Charts. Heute steht sein erstes Werk kurz vor Gold-Status. Der gebürtige Ratinger erzählt in seinen emotionalen und ehrlichen Texten Geschichten über gescheiterte Liebe, den Mut, zu träumen und den Facettenreichtum zwischenmenschlicher Beziehungen. Er thematisiert Alltägliches, ja Mitten-aus-dem-Leben-Gegriffenes, und hat sich damit direkt in die Herzen seiner Fans gesungen. Auch live und in Farbe kann JOEL BRANDENSTEIN das Publikum mit rauchiger Stimme, Nahbarkeit und seiner Bühnenpräsenz begeistern, gar verzaubern: Vier ausverkaufte Tourneen und rund 50.000 verkaufte Tickets sprechen für sich.Nach diesen Riesenerfolgen kehrt JOEL BRANDENSTEIN nun mit seinem zweiten Album ?Frei?  (VÖ 01.05.2020) zurück ins Rampenlicht. Einen Vorgeschmack auf dieses brachte das ausverkaufte Pre-Release-Konzert am 10. August 2019 in der Mitsubishi-Electric-Halle in Düsseldorf. ?Ich habe mich FREI gemacht von Dingen, die mir nicht guttun, FREI gemacht von falschen Freunden, FREI gemacht von meinen Zweifeln?, so der Singer-Songwriter über sein neues Album. Und kein Zweifel: Dieses Gefühl wird er auch auf der anstehenden Tour auf die Bühne übertragen.  Foto: Silvana Madamski & Vincent Franken",
            "startDateTime": "11/7/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=27094458271&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/daGQEWhQ.jpeg"
        },
        {
            "id": "e100",
            "title": "Suchtpotenzial - Sexuelle Belustigung",
            "description": "Die Ulmer Stadtmusikantin Ariane Müller lernte die Berlinerin Julia Gámez Martin 2011 am Theater Ulm kennen.Beide waren als Gäste bei der Rocky Horror Show und bei Hair auf der Wilhelmsburg engagiert. Im Frühjahr 2013 schrieben sie ihre ersten eigenen Lieder und im Sommer war das komplette Programm fertig.Das Projekt SUCHTPOTENZIAL war geboren.Im selben Jahr wurden sie Finalistinnen des Troubadour Chanson-Preises, traten in München beim Kulturpreis der Wirtschaft auf, bei der Comedystube in Tübingen und spielten ihr Programm auch beim Bundespresseball in Berlin.2014 startete gleich mit einem aphrodisierenden Auftakt nach Maß:Der Kleinkunstpreis des Landes Baden-Württemberg geht an: Suchtpotenzial!Frisch ausgezeichnet ging das Power-Duo nun regelmäßig auf Tournee und hat zwischenzeitlich schon weit über 600 bundesweite Auftritte gespielt (Stand Dez 2019), 2 Debut-Singles, 3 Alben zu den Programmen und eine DVD veröffentlicht, beim damaligen Bundespräsident Joachim Gauck gespielt und auf Tele 5 die erste eigene Musiksendung im Fernsehen moderiert.Zwischenzeitlich gab und gibt es regelmäßige TV-Auftritte und Hörfunk-Einsätze, u.a. bei der ARD/WDR (Gerburg Jahnkes`Ladies Night, CouchClub, Prix Pantheon, Kabarettfest), beim BR (Bühnensport mit Hannes Ringlstetter & Constanze Lidner), beim MDR (Comedy mit Karsten, MDR um Vier), bei der ARD/Einsfestival (Nightwash Live und Naughty Girls mehrmals), Tele 5 (Fat Chicken Club), beim SWR (Comedycouch, Stuttgarter Besen), HR (Hörfest, Comedy Tower, hr1 Satire-Lounge), RBB (Radio 1 Radio Show, Das Große Kleinkunst Festival), NDR (Comedy Contest), ZDF/3-SAT (Pufpaffs Happy Hour) und viele weitere.Festivals: Köln Comedy, Humorzone Dresden, Lachmesse Leipzig, Open Flair Eschwege u.v.m.",
            "startDateTime": "6/24/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=27124071041&a=774719&m=13738"
        },
        {
            "id": "e101",
            "title": "ALTE BEKANNTE",
            "description": "ALTE BEKANNTE - Das Leben ist schön - TourMit seinem zweiten Programm und dem gleichnamigen zweiten Studioalbum ?Das Leben ist schön? geht das A-cappella-Quintett Alte Bekannte, Nachfolgeband der legendären Wise Guys, ab Sommer 2019 auf Deutschlandtour.Die schon jetzt große Fangemeinde und alle erstmaligen Konzertbesucher erwartet ein extrem kurzweiliger Abend, an dessen Ende die Allermeisten wohl aus dem Konzertsaal schweben und sagen werden: ?Das Leben ist ja wirklich schön!? ? auch wenn Alte Bekannte selbstverständlich wissen, dass ihre These durchaus diskutabel ist.Im Mittelpunkt der Tour stehen die Songs der neuen CD, die das erfolgreiche Debütalbum ?Wir sind da!? (Platz 23 der deutschen Albumcharts) in Sachen Vielseitigkeit, Witz und musikalischer Finesse sogar noch übertrifft. ?Das Leben ist schön? landete sogar auf Platz 9 der deutschen Albumcharts und ist somit das erste Top-Ten-Album der Band.Aber natürlich werden weder die beliebtesten Hits der ersten CD noch ausgewählte ?Perlen? aus dem riesigen Kanon der Wise Guys fehlen. Dazu kommen Coverversionen berühmter Songs mit zum Teil aberwitzigen neuen Texten aus der Feder von Daniel ?Dän? Dickopf, der als Ex-Frontmann der Wise Guys auch bei Alte Bekannte textlich vorangeht. Seine Kompositionen und die seiner (zum Teil) neuen Kollegen Clemens Schmuck, Ingo Wolfgarten und Nils Olfert garantieren zudem eine musikalische Bandbreite, die ihresgleichen sucht. Björn Sterzenbach, der Fünfte im Bunde, brilliert auf der Bühne zudem als Bassist und überzeugt neben Dän und Clemens auch als charmanter Moderator.Die Konzertbesucher erleben einen Abend mit alten Bekannten, an dessen Ende man tatsächlich wieder glaubt, dass das Leben schön ist. Was will man mehr?Ermäßigter VVK-Preis für Kinder & Jungendliche bis 14 Jahre.",
            "startDateTime": "11/6/22 18:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=27133529219&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/djHBJ40V.jpeg"
        },
        {
            "id": "e102",
            "title": "Öffentlicher Stadtrundgang Freiburg - Gässle, Bächle und das Münster",
            "description": "Erleben Sie das malerische und grüne Freiburg bei einem schönen Rundgang durch die Altstadt. Ihr Tourguide zeigt Ihnen die berühmten ?Freiburger Bächle?, die kleinen Wasserläufe entlang der Straßen und Gassen, die verwinkelten ?Gässle? und die vielen bunten Rheinkieselmosaike, die Freiburg sein ganz besonderes Flair verleihen. Lassen Sie sich zum Münsterplatz mit seinen schönen Bürgerhäusern und Profanbauten führen und sehen Sie auch den traditionellen Bauernmarkt (vormittags) und die zahlreichen Cafés.Start der Tour ist der Rathausplatz, wo Ihr Guide bereits auf Sie wartet. Schon auf dem Rathausplatz gibt es zahlreiche historische Gebäude zu entdecken. Von hier aus geht es dann über die Kaiser-Joseph-Straße, der ehemaligen Großen Gass´ des mittelalterlichen Freiburgs, zum Freiburger Münster, dem kulturellen Mittelpunkt der historischen Altstadt und herausragenden Beispiel mittelalterlicher Gotik. Entdecken Sie gemeinsam mit dem Guide die bizarr geformten Wasserspeier, den filigranen Kirchturm und den bunten Bauernmarkt auf dem Münsterplatz. Im Anschluss entdecken Sie einige der historischen Sehenswürdigkeiten um das Münster herum: das historische Kaufhaus, die Alte Wache, das Haus zum schönen Eck und viele mehr. Weiter geht es dann über die Konviktstraße, eine der schönsten Gassen Freiburgs, bis hin zum ?Handwerkerviertel",
            "startDateTime": "6/17/21 10:30",
            "venueId": "v14",
            "offerURL": "https://www.awin1.com/pclick.php?p=27133530287&a=774719&m=13738"
        },
        {
            "id": "e103",
            "title": "Helge Schneider - Die Wiederkehr des blaugrünen Smaragdkäfers",
            "description": "Helge Schneider - Die Wiederkehr des blaugrünen Smaragdkäfers  welcome to the future! 2020 wird HELGE SCHNEIDER wieder richtig aufdrehen, MOPPELCHEN MUSS  HÜPFEN!  Wenn  die  anderen  schon  mit  einem  Bein  im  Wohnzimmer vor dem Fernsehapparat sich eine Flasche Bier zurechtrücken, um Fußball oder Donna Leon zu gucken, räumt DER RUBINROTE HÖLLENSTORCH seine Garage aus und seine Orgel in den Anhänger! ?Rente? Kenn ich nicht!? (so der  BLONDE  HASHDAG-KIKI!)  Der  65-jährige  (sieht  aus  wie  12!)  mit  dem Gehirn eines Gorillas rastet förmlich aus, wenn er auf seine ?wohlverdiente Ruhe? nach unzähligen Konzertreisen angesprochen wird! ?AUSGESTOPFTE BESSERWISSER!?  Sein  Gesicht  spricht  Bände.  (Und  zwar  alle  Bände  von  Brockhaus.)  Es  gibt  auf unserer  Erde  keinen  Superstar,  der  so  außergewöhnlich  belesen  ist  wie  Helge Schneider! (TRUE LOVE = DURCH UND DURCH LAFF!) ?Ich lese alles! Ob Wein, ob Äpfel.  Und  zwischendurch  mal  ?SCHLEIFSPUREN  AUF  DEM  TEPPICH?,  mein Lieblingsbuch!  Das  reicht,  um  mich  am  heutigen  BILLARDSTANDARD  zu messen!? Der Entertainer und Multiinstrumentalist (normaler Kassenpatient mit Zusatzversicherung!) ist in fast allen Städten zu sehen.  ?ICH FREUE MICH AUF DICH! LOL!? WGIDD!!!!!  Hochachtungsvoll: Helge Schneider  Das neue Album ?Partypeople ? beim Fleischer? gibt es seit 2. August 2019 im Handel.",
            "startDateTime": "7/30/21 19:30",
            "venueId": "v4",
            "offerURL": "https://www.awin1.com/pclick.php?p=27177789245&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/i7t7h0JP.jpeg"
        },
        {
            "id": "e104",
            "title": "Dr. Leon Windscheid - Altes Hirn, neue Welt",
            "description": "Dr. Leon Windscheid: ALTES HIRN, NEUE WELT ? PSYCHOLOGIE LIVE ERLEBEN   Nach einer nahezu restlos ausverkauften Tour 2019 gibt es auch im neuen Jahr kein Halten für Leon Windscheid. Der Shootingstar der Wissenschafts-Unterhaltung setzt seine Tour 2020 fort und bereist die Republik in der Mission, den Menschen ihr eigenes Hirn ein wenig näher zu bringen. Denn seitdem wir vor 300.000 Jahren als Homo sapiens auf der Bildfläche erschienen, wurde in unseren Köpfen nicht mehr renoviert. Ötzi und DJ Ötzi haben die gleichen grauen Zellen, die aber mit völlig unterschiedlichen Herausforderungen umgehen müssen.   Denn für die Welt, in der wir heute leben, wurde unser Hirn ursprünglich nicht gemacht. Wir können googeln, statt zu denken. Algorithmen finden für Singles alle elf Minuten die große Liebe. Lichtschalter können sprechen, Autos alleine fahren. Und ohne Smartphone aus dem Haus, fühlt sich an wie ein Abenteuer.  Alles wird immer schneller, digitaler und effizienter. Kein Wunder, dass sich viele Menschen überfordert fühlen. Burn-out, Depression und Stress sind Volkskrankheiten. Dagegen helfen sollen Meditation per App, Glücks-Coaching oder Gehirnjogging. Aber braucht unser Hirn solche Innovationen? In  seinem  ersten  Liveprogramm  nimmt  der  Psychologe  und  Bestsellerautor  Leon  Windscheid  sein Publikum  mit  auf  eine  Reise  zu  den  Gefühlen  und  Gedanken,  die  wir  zunehmend  vergessen,  oder schon ganz verloren haben. Humorvoll und fesselnd erklärt er, weshalb wir Langeweile wieder suchen sollten,  warum  Ziellosigkeit  ans  Ziel  führen  kann  und  wieso  richtiges  Alleinsein  uns  vor  Einsamkeit schützt.   Entlang der neuesten Erkenntnisse aus Psychologie und Hirnforschung gelingt ein Spagat zwischen Unterhaltung, Wissenschaft und Aha-Momenten. Nach diesem Abend wissen Sie, warum Sie ticken, wie Sie ticken. Und vor allem, wie Sie auch in Zukunft nicht austicken. Edutainment at its best.  Einen  Vorgeschmack  auf  Leon  kann  man  sich  seit  neuestem  auch  in  seinem  Podcast  ?Betreutes Fühlen? holen, in dem er sich zusammen mit Atze Schröder wöchentlich einem Gefühl widmet.",
            "startDateTime": "11/22/21 20:00",
            "venueId": "v23",
            "offerURL": "https://www.awin1.com/pclick.php?p=27177789443&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/cFr5Jbfa.jpeg"
        },
        {
            "id": "e105",
            "title": "Dieter Thomas Kuhn & Band - Über den Wolken 2.0 / 2.1",
            "description": "Nach der Tour ist vor der Tour, das gilt auch für Dieter Thomas Kuhn & Band!29 Konzerte stehen für 2020 an: Auftakt ist am 8./9. Mai 2020 in Bielefeld und Tour-Finale wird am 18./19. September 2020 in Hanau sein. Dazwischen können DTK-Fans und alle, die es werden wollen, sich auf wunderbare Live-Spektakel freuen. Imposante Spielorte stehen wieder auf dem Plan, darunter dreimal Freilichtbühne Killesberg Stuttgart(22./23.05. und 16.07.20), Tollwood Festival München (04.07.20), Tanzbrunnen Köln (11.07.20) und Waldbühne Berlin (01.08.20). Davon konnten sich übrigens im vergangenen Sommer 2019 so viele Fans, wie noch nie zuvor überzeugen: Fast 125.000 verkaufte Tickets bei 25 Konzertterminen (17x ausverkauft).?Dieter Thomas Kuhn macht süchtig?, ?Papst des schlechten Geschmacks?, ?Kuhnis verwandeln jedes Konzert in ein Sonnenblumenmeer der Liebe?, ?Was machen diese Kuhnis mit diesen Klamotten im normalen Leben?, diese und andere Schlagzeilen begleiten Dieter Thomas Kuhn & Band seit jeher. Und es ist wahr: Dieter Thomas Kuhn & Band-Konzerte bringen Menschen zusammen, die nettesten und verrücktesten Menschen der Welt. Jedes Kuhn-Konzert bringt Farbe in die Städte.und verrücktesten Menschen der Welt. Jedes Kuhn-Konzert bringt Farbe in die Städte. Schon der Anfahrtsweg zur Konzertlocation ist ein farbenfrohes Happening. Da wird jede U-Bahn zum Schlagerchor! Aber bei DTK geht es nicht um Schlager im herkömmlichen Sinn, hier wird Schlager neu interpretiert. Hier geht es um die schönsten Schlager für ein Publikum, das sonst nichts mit Schlager am Hut hat!Foto: philipp feldtkeller HPT",
            "startDateTime": "8/6/21 20:00",
            "venueId": "v4",
            "offerURL": "https://www.awin1.com/pclick.php?p=27207310973&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/FxWcUJMm.jpeg"
        },
        {
            "id": "e106",
            "title": "Les Brünettes - Live 2022",
            "description": "Les Brünettes sind in ihrem neuen Programm 4 ganz bei sich selbst angekommen.Sie verarbeiten, in ausschließlich eigenen Songs, was in ihrem Jetzt passiert: Esgeht um Liebe; ob zum eigenen Kind, zum Geliebten oder um die verlorene Liebezu sich selbst. Um Geburtserfahrungen und #hashtags. Sie stellen auch Fragenaußerhalb der eigenen Befindlichkeiten: Was bedeutet Freiheit? Wohin mit der Wutüber herrschende Ungerechtigkeiten, insbesondere gegen Frauen? Les Brünettesgeht es um das Einstehen für Werte, um die Verantwortung für unseren Planeten.Und darum, dass Humor manchmal einfach die beste Antwort ist?Stilistisch treffen Funk- und House-Beats auf Rap und Chanson, auf souligeElemente oder einfach auf bestes Pop-Songwriting. Das durchgängige Motiv?Groove! Man hört beatbox, body percussion, Klatschen, Stampfen, es wirdgehaucht und geküsst!",
            "startDateTime": "3/18/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27207311341&a=774719&m=13738"
        },
        {
            "id": "e107",
            "title": "Circolo 2021 - Freiburgs Weihnachts-Circus",
            "description": "Vorhang auf, Manege frei! Wenige Tage vor Heiligabend bis ins neue Jahr öffnet der Freiburger Weihnachts-Circus wieder seine Zelte! Auf dem Programm steht ein höchst komisches, schwindelerregendes und atemberaubendes Spektakel für große und kleine Circusfans. Mit dabei sind zahlreiche international renommierte Künstler, Artisten und das Circolo Orchester. Auch für ein vielfältiges Catering-Angebot ist gesorgt.Akrobatik, Showeinlagen und mitreißende Musik versetzen das Publikum in helles Staunen; dem Besucher wird eine mitreißende Performance internationaler Sonderklasse geboten. Musikalische Untermalung kommt wie immer vom sagenhaften Circolo Orchester, welches auch den kleinsten Trick um ein Vielfaches versüßt.Seien Sie dabei, wenn der Freiburger Weihnachts-Circus seine Zelte aufschlägt und lassen Sie sich von den talentierten Artisten und Artistinnen begeistern!",
            "startDateTime": "12/18/21 19:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=27216597067&a=774719&m=13738"
        },
        {
            "id": "e108",
            "title": "Circolo 2021 - Freiburgs Weihnachts-Circus - Badenovatag",
            "description": "Vorhang auf, Manege frei! Wenige Tage vor Heiligabend bis ins neue Jahr öffnet der Freiburger Weihnachts-Circus wieder seine Zelte! Auf dem Programm steht ein höchst komisches, schwindelerregendes und atemberaubendes Spektakel für große und kleine Circusfans. Mit dabei sind zahlreiche international renommierte Künstler, Artisten und das Circolo Orchester. Auch für ein vielfältiges Catering-Angebot ist gesorgt.Akrobatik, Showeinlagen und mitreißende Musik versetzen das Publikum in helles Staunen; dem Besucher wird eine mitreißende Performance internationaler Sonderklasse geboten. Musikalische Untermalung kommt wie immer vom sagenhaften Circolo Orchester, welches auch den kleinsten Trick um ein Vielfaches versüßt.Seien Sie dabei, wenn der Freiburger Weihnachts-Circus seine Zelte aufschlägt und lassen Sie sich von den talentierten Artisten und Artistinnen begeistern!",
            "startDateTime": "12/30/21 15:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=27216597111&a=774719&m=13738"
        },
        {
            "id": "e109",
            "title": "Circolo 2021 - Freiburgs Weihnachts-Circus - Silvestergala",
            "description": "Vorhang auf, Manege frei! Wenige Tage vor Heiligabend bis ins neue Jahr öffnet der Freiburger Weihnachts-Circus wieder seine Zelte! Auf dem Programm steht ein höchst komisches, schwindelerregendes und atemberaubendes Spektakel für große und kleine Circusfans. Mit dabei sind zahlreiche international renommierte Künstler, Artisten und das Circolo Orchester. Auch für ein vielfältiges Catering-Angebot ist gesorgt.Akrobatik, Showeinlagen und mitreißende Musik versetzen das Publikum in helles Staunen; dem Besucher wird eine mitreißende Performance internationaler Sonderklasse geboten. Musikalische Untermalung kommt wie immer vom sagenhaften Circolo Orchester, welches auch den kleinsten Trick um ein Vielfaches versüßt.Seien Sie dabei, wenn der Freiburger Weihnachts-Circus seine Zelte aufschlägt und lassen Sie sich von den talentierten Artisten und Artistinnen begeistern!",
            "startDateTime": "12/31/21 21:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=27216597115&a=774719&m=13738"
        },
        {
            "id": "e110",
            "title": "Rogers - Plus Special Guest",
            "description": "Donnerstag, 3. September, Beginn 20 Uhr, Einlass 19 UhrPunkrock-Vierer aus Düsseldorf mit erhobenen Mittelfinger quer durch die Republik",
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
            "title": "Programmänderung: Orchesterkonzert Musikalische Wunder (anstatt Freischütz)",
            "description": "Wir bitten um Ihr Verständnis, dass das geplante Programm mit Webers Freischütz aufgrund der ausladenden Komposition mit Solisten, Chor und großem Orchester und der Nichtvereinbarkeit mit den Corona-bedingten Vorgaben geändert werden muss. Stattdessen präsentieren wir Ihnen ein Orchesterkonzert mit unserem Künstlerischen Leiter Gottfried von der Goltz. Karten behalten ihre Gültigkeit.Neues Programm: Musikalische Wunder Obwohl Joseph Haydn knapp 25 Jahre älter als Wolfgang Amadeus Mozart war, verband die beiden weit mehr als eine väterliche Freundschaft. Beide Komponisten begegneten sich auf Augenhöhe und inspirierten sich gegenseitig. Mozart verehrte Haydns gutmütige und humorvolle Art, Haydn erkannte früh das Wunderkind im kleinen Amadeus. Doch nicht nur Mozart vollbrachte musikalische Wunder, sondern auch sein Mentor Haydn. Als seine 96. Sinfonie in D-Dur in London uraufgeführt wurde, stürzte ein Kronleuchter von der Decke des Konzerthauses. Verletzt wurde niemand ? dank Haydn: das Publikum war so vernarrt in den Komponisten, dass es das Parterre verließ und sich dicht um ihn drängte, als er die Bühne betrat. Wolfgang Amadeus Mozart (1756-1791)Violinkonzert Nr. 4 D-Dur KV 218Sinfonie Nr. 24 Es-Dur KV 182Joseph Haydn (1732-1809)Sinfonie Nr. 96 D-Dur ?The Miracle?Freiburger BarockorchesterGottfried von der Goltz Solist und KonzertmeisterIn Kooperation mit der Gesellschaft der Freunde und Förderer des Freiburger Barockorchesters e.V.",
            "startDateTime": "6/25/21 17:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551866133&a=774719&m=13738"
        },
        {
            "id": "e113",
            "title": "Markus Krebs - Pass auf... kennste den?!",
            "description": "Ein einfacher Stehtisch, ein Barhocker, eine Flasche Bier ? für einen Abend mit Markus Krebs braucht es nicht mehr. Humor-Prinzip? Irgendwas zwischen Kneipen-Kumpel und Witze-Papst.Mit seinem Ruhrpott-Charme bedient Markus Krebs exzellent die Humor-Zentren des Publikums. Egal ob intelligente Komik oder kalauernde Wortschöpfungen ? in seinem vierten Solo-Programm ?Pass auf...kennste den?!? schreckt der bezopfte Mann mit Sonnenbrille und legendärer schwarzen Wollmütze vor keinem Flachwitz zurück. Markus Krebs ist bekannt für seine gnadenlos-kompromisslosen Pointen-Abfolgen, die ihn innerhalb der deutschen Comedy-Szene einzigartig machen. In seinem letzten Solo-Programm ?Permanent Panne? folgte Gag auf Gag. Im neuen Programm führt der selbsternannte ?Mann hinter dem Bauch? diese Tradition fort und beschert seinem Publikum einen Abend voller Lachkrämpfe und ohne Atempausen. Wer den Abend mit Markus Krebs verbringt, nimmt nichts mit. Es gibt keine Botschaft, dafür aber eine Show bestehend aus Pointen der komödiantischen Spitzenklasse.",
            "startDateTime": "12/5/21 20:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551872209&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/XRjjFj2t.jpeg"
        },
        {
            "id": "e114",
            "title": "Varieté am Seepark 2021",
            "description": "Jedes Jahr wieder im November heißt es im Bürgerhaus am Seepark: ?Vorhang auf!? für die Weltklasse der Artistik, Akrobatik, Comedy und Magie!Internationale Top-Künstler entführen beim Varieté am Seepark in eine Welt voller Zauber, Magie und Witz. Charme und akrobatische Vielfalt schaffen ein kleines Kunstwerk, das unvergessliche Momente garantiert. Künstler von Weltrang aus nah und fern setzen Träume und Illusionen ins Rampenlicht und bieten dem hochverehrten Publikum mitreißende Inszenierungen von temperamentvollem, vielseitigem Programm! Für Groß und Klein, Jung und Alt sind diese brillianten Darstellungen immer wieder ein großes Erlebnis! Atemberaubendes, glamouröses und herrlich Komisches - all das verspricht das Varieté am Seepark seinen Gästen während der Show-Zeiten im November!",
            "startDateTime": "11/4/21 16:00",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551881725&a=774719&m=13738"
        },
        {
            "id": "e115",
            "title": "Varieté am Seepark 2021 - Sonderveranstaltung ADAC",
            "description": "Jedes Jahr wieder im November heißt es im Bürgerhaus am Seepark: ?Vorhang auf!? für die Weltklasse der Artistik, Akrobatik, Comedy und Magie!Internationale Top-Künstler entführen beim Varieté am Seepark in eine Welt voller Zauber, Magie und Witz. Charme und akrobatische Vielfalt schaffen ein kleines Kunstwerk, das unvergessliche Momente garantiert. Künstler von Weltrang aus nah und fern setzen Träume und Illusionen ins Rampenlicht und bieten dem hochverehrten Publikum mitreißende Inszenierungen von temperamentvollem, vielseitigem Programm! Für Groß und Klein, Jung und Alt sind diese brillianten Darstellungen immer wieder ein großes Erlebnis! Atemberaubendes, glamouröses und herrlich Komisches - all das verspricht das Varieté am Seepark seinen Gästen während der Show-Zeiten im November!",
            "startDateTime": "11/6/21 16:00",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551881751&a=774719&m=13738"
        },
        {
            "id": "e116",
            "title": "Varieté am Seepark 2021 - Sonderveranstaltung Badische Zeitung",
            "description": "Jedes Jahr wieder im November heißt es im Bürgerhaus am Seepark: ?Vorhang auf!? für die Weltklasse der Artistik, Akrobatik, Comedy und Magie!Internationale Top-Künstler entführen beim Varieté am Seepark in eine Welt voller Zauber, Magie und Witz. Charme und akrobatische Vielfalt schaffen ein kleines Kunstwerk, das unvergessliche Momente garantiert. Künstler von Weltrang aus nah und fern setzen Träume und Illusionen ins Rampenlicht und bieten dem hochverehrten Publikum mitreißende Inszenierungen von temperamentvollem, vielseitigem Programm! Für Groß und Klein, Jung und Alt sind diese brillianten Darstellungen immer wieder ein großes Erlebnis! Atemberaubendes, glamouröses und herrlich Komisches - all das verspricht das Varieté am Seepark seinen Gästen während der Show-Zeiten im November!",
            "startDateTime": "11/7/21 15:00",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551881753&a=774719&m=13738"
        },
        {
            "id": "e117",
            "title": "Varieté am Seepark 2021 - Badenovatag",
            "description": "Jedes Jahr wieder im November heißt es im Bürgerhaus am Seepark: ?Vorhang auf!? für die Weltklasse der Artistik, Akrobatik, Comedy und Magie!Internationale Top-Künstler entführen beim Varieté am Seepark in eine Welt voller Zauber, Magie und Witz. Charme und akrobatische Vielfalt schaffen ein kleines Kunstwerk, das unvergessliche Momente garantiert. Künstler von Weltrang aus nah und fern setzen Träume und Illusionen ins Rampenlicht und bieten dem hochverehrten Publikum mitreißende Inszenierungen von temperamentvollem, vielseitigem Programm! Für Groß und Klein, Jung und Alt sind diese brillianten Darstellungen immer wieder ein großes Erlebnis! Atemberaubendes, glamouröses und herrlich Komisches - all das verspricht das Varieté am Seepark seinen Gästen während der Show-Zeiten im November!",
            "startDateTime": "11/11/21 16:00",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551881755&a=774719&m=13738"
        },
        {
            "id": "e118",
            "title": "Jazzchor Freiburg & New York Voices - 30 Jahre Vocal Jazz",
            "description": "JAZZCHOR FREIBURG & NEW YORK VOICES30 years of vocal jazzDie legendären New York Voices kommen nach Freiburg, um die Bühne mit dem Jazzchor zu teilen. Zweimal 30 Jahre Vocal Jazz der Extraklasse: Die Voices gelten als führendes Jazzvokalquartett, das fast die ganze Welt bereist und mit Künstlern wie dem Count Basie Orchestra und Paquito d´Riviera zusammengearbeitet hat. Immer schon war dieses Ensemble Inspiration für den preisgekrönten Jazzchor Freiburg, der mit seinen eigen/art/igen Programmen bislang in 15 Ländern Europas und Asiens konzertierte. Darüber hinaus stießen dem Chor Projekte mit Bobby McFerrin, Torun Eriksen und den Bamberger Symphonikern immer wieder neue musikalische Türen auf. Zum Jubiläum nun sind die Freiburger und New Yorker am gleichen Abend zu hören, einzeln und gemeinsam.Fotocredits:New York Voices: Sandrine Lee",
            "startDateTime": "10/3/21 18:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551882151&a=774719&m=13738"
        },
        {
            "id": "e119",
            "title": "Boy Harsher - Support: HIDE",
            "description": "Boy Harsher sorgen für den kaputten Soundtrack einer dystopischen Realität, niemand sonst erschafft so intensive und fesselnde Klangwelten wie das Duo aus Northampton, Massachusetts. Augustus Muller entwickelt den Unterbau der Tracks aus präzisen, kraftvollen Beats und sägende Synthies, während Jae Matthews dazu wahlweise ätherisch haucht, singt oder sich auch die Seele aus dem Leib schreit. Diese kathartischen und magnetisierenden Tracks sind eine wirkliche Alternative und avancierten nicht nur in Neo Dark Wave Untergrund Kreisen zu echten kleinen Hits.",
            "startDateTime": "3/24/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27559850785&a=774719&m=13738"
        },
        {
            "id": "e120",
            "title": "HISS - 25 Jahre Jubiläumstour",
            "description": "Im Jahre 1995 traten Österreich, Schweden und Finnland der EU bei, wurde Jacques Chirac französischer Staatspräsident und Borussia Dortmund nach 32 Jahren wieder Deutscher Meister. Rory Gallagher und Konrad Zuse starben, die DVD wurde erfunden, man trug bauchfrei und das schöne Lied Max Don´t Have Sex With Your Ex war in den deutschen Charts. Viele der erwähnten Ereignisse sind inzwischen in Vergessenheit geraten, Moden kamen und gingen, Erfindungen wurden obsolet.Das Jahr 1995 bleibt uns aber in Erinnerung, war es doch das Gründungsjahr der Kapelle HISS. Seither sind sie zu Wasser, zu Lande und in der Luft unterwegs, haben 2487 Konzerte gespielt und 8 Platten aufgenommen, traten in zahllosen Fernsehsendungen auf, wurden mit Preisen überhäuft, haben Kritiker überzeugt und Tausende Fans gewonnen.Trotz aller Hindernisse und Gefahren ziehen diese Teufelskerle weiterhin ungerührt um die Welt, um uns ihre Mischung aus Folk und Ska, aus Walzer und Blues, aus Polka und Roll nahezubringen. Mag ihnen die Zeit auch die eine oder andere Furche in die Gesichter gezogen haben, ihre Musik ist noch immer frisch, ihre Auftritte sind noch immer voller Kraft und ihre Texte eine Liebeserklärung an den Humor und das Leben.Im Jubiläumsjahr bringen uns HISS einen Querschnitt durch 25 Jahre ihres Schaffens, Bewährtes und Neues, Tanzbares und Nachdenkliches, Leises und Lautes, Langsames, Schnelles und sehr Schnelles.",
            "startDateTime": "7/17/21 19:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27559850851&a=774719&m=13738"
        },
        {
            "id": "e121",
            "title": "The Gardener & The Tree - Tour 2021",
            "description": "The Gardener & The Tree haben sich in den letzten Jahren klammheimlich zu einem der erfolgreichsten Musikexports  der  Schweiz  gespielt.  Sie  füllen  die Clubs  nicht  nur  in  der Heimat,  sondern  spielten bereits     drei     fast     ausverkaufte     Deutschland -Tourneen quer durch die Republik und begeisterten  das  Publikum   auf   Festivals   wie   Hurricane   oder Southside.The  Gardener  &  The  Tree  überzeugen  mit  ihrem unverwechselbarenIndiefolk und der charakteristischen   Gesangsstimme   von   Manuel Felder. Der sieht auf den ersten Blick eher aus wie der Rüpel in der letzten Reihe des Klassenzimmers,mit dem man Unfug   an richtenund   unbedingt befreundet  sein  möchte.  Was  dann  aber  aus  seiner  Kehle  kommt  und aus  den Instrumenten  seiner  Bandkollegen,  ergibt  so  eine  eingängige  Symbiose,  dass  man sich  fragt,ob  sie  statt  zur  Schule gegangen  zu  sein schon  lebenslang  gemeinsam musizieren.All  dies  führt  dazu,  dass  man The  Gardener  &  The  Tree  wahrscheinlich  nicht  mehr lange als  Geheimtipp  ankündigen  kann,  denn  meistens  muss  man  sich  sputen,um noch eines der heißbegehrten Tickets zu ergattern. Die Konzertzwangspause nutzte die  Band  intensiv im  dunklen  Proberaum,  deshalb  ist  die Vorfreude bei  der  Band bereits jetzt riesig und sie werden mit neuen und alten Songs im Gepäck die Bühnen entern.Präsentiert werden die Konzerte von SCHALL., Bedroomdisco und MusikBlog.de.",
            "startDateTime": "2/23/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27559852365&a=774719&m=13738"
        },
        {
            "id": "e122",
            "title": "Neue Wunderbare Band - Live 2020",
            "description": "Wildgewordene Fahrradfahrer, überzeugte Veganer, Bau- und Selbsthilfegruppen: Wenn sich jemand mit den Befindlichkeiten der Freiburger auskennt, ist es die Neue Wunderbare Band, die ins Jazzhaus das ganz besondere Flair der Schwarzwaldmetropole bringt. Mit viel Augenzwinkern, versteht sich.Die Bandmitglieder Jack Huttmann (Gesang), Mike Sillmann (Bass), Hans Brugger (Schlagzeug), Dieter Bauer (Gitarre), Martin Glönkler (Keyboard) und die Sängerinnen Sandra Klein-Gißler und Christiane Laube legen sich ordentlich ins Zeug, um ihrem Publikum eine anschauliche musikalische Stadtführung zu bieten.Die rockigen und super arrangierten Songs mit ihren respektlosen, aber nie bösartigen Texten machen einfach Laune und spiegeln mit scharfer Beobachtungsgabe das Lebensgefühl in der Green City perfekt wider, was sich auch im aktuellsten Stück ?Martinshorn? widerspiegelt.Kurzum, die Neue Wunderbare Band verfügt nicht nur über Witz und Humor, sondern auch über musikalische Professionalität und jede Menge Ausstrahlung. Oder, um es in schönster Facebook-Manier auszudrücken: Daumen hoch.Die Neue Wunderbare Band ist somit die eigentliche Stadtkapelle der Green City Bächle Metropole.",
            "startDateTime": "9/5/21 19:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27559854147&a=774719&m=13738"
        },
        {
            "id": "e123",
            "title": "Shalosh - `Broken Balance` Tour 2022",
            "description": "Shaloshs Erfolgsgeschichte geht weiter. ?Broken Balance soll neu und frisch sein. Wir wollten die Extreme mehr ausreizen, wollten mehr links und rechts schauen und dramatischer sein. Man wird neue Facetten finden?, sind sich die Mitglieder des israelischen Trios einig. Im vergangenen Jahr wurden von der Kritik Namen wie e.s.t., GoGo Penguin und The Bad Plus in Stellung gebracht, als es um ihre ACT-Debüt-CD ?Onwards and Upwards? ging. ?Schwerelos swingende Grooves bis zum treibenden Techno-Beat? wurden gehört und auch ?an deutscher Klassik geschultes? Schwelgen. Und Optimismus, weil ?das Allermenschlichste nun einmal die Hoffnung ist?. Um die auszudrücken, springt Shalosh aus den Schubladen. Gute Musik ist nötig, und die machen Pianist Gadi Stern, Kontrabassist David Michaeli und Schlagzeuger Matan Assayag. In Hunderten von Konzerten rund um den Globus haben sie ihr breit gefächertes Publikum davon überzeugt vom Rockfestival bis in den intimen Jazzclub.",
            "startDateTime": "3/27/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27559854209&a=774719&m=13738"
        },
        {
            "id": "e124",
            "title": "3. ZWERGENKONZERT: Die Freiburger Stadtmusikanten",
            "description": "Die Freiburger Stadtmusikanten ab 3 JahrenEs war einmal ein Esel, ein Hund, ein Kater und ein Hahn, die machten sich auf den Weg in die Stadt, um dort Musiker zu werden. Ob ihnen das gelingen wird und welch riesiges Abenteuer die Tiere auf ihrem Weg erleben, das erfahrt ihr in unserem Märchen-Zwergenkonzert.",
            "startDateTime": "7/4/21 10:00",
            "venueId": "v28",
            "offerURL": "https://www.awin1.com/pclick.php?p=27564310035&a=774719&m=13738"
        },
        {
            "id": "e125",
            "title": "Kling, Glühwein, klingelingeling - die Weihnachts-City-Tour mit Betty BBQ",
            "description": "Kling, Glühwein, klingelingeling - die Weihnachts-City-Tour mit Betty BBQ! Mit einem Feuerwerk an Gags und Schallala bereitet euch Schwarzwald Drag Queen Betty BBQ mit einer City Tour durch das vorweihnachtliche Freiburg auf das Fest des Jahres vor. Betty BBQ erzählt von den Wirren der Weihnachtszeit, von Bowle, Glühwein und dem Christmas-Schwips. Dabei klärt sie so wesentliche Fragen, wie ob ein auf der Weihnachtsfeier gezeugtes Baby eigentlich ein ?Punschkind? ist, wie es sich anfühlt, wenn nicht nur der Baum alle Lampen an hat und warum es es in Freiburg so einen schönen Weihnachtsmarkt gibt. Inkl. Aufwärmer unterwegs!Dauer: 60-70 minBitte Corona-bedingt beachten:Eine Einkehr in geschlossenen Räumen findet auf dieser City-Tour nicht statt.Bei der Durchführung unserer City-Touren steht die Sicherheit und das Entertainment unserer Gäste im Vordergrund. Damit jeder beruhigt und regel-konform hieran teilnehmen kann,- muss zwingend bei unseren Stadtführungen zu anderen Personen, wo immer möglich, ein Mindestabstand von 1,5 Metern eingehalten werden. - bitten wir alle unsere Gäste eine nicht-medizinische Alltagsmaske oder eine vergleichbare Mund-Nasen-Bedeckung zu tragen.- und bitten ebenfalls ganz im Sinne der verantwortlichen Eigenkontrolle, nur dann an unseren City-Touren teilzunehmen, wenn Sie sich gesund fühlen und insbesondere kein Fieber haben.",
            "startDateTime": "11/17/21 18:30",
            "venueId": "v16",
            "offerURL": "https://www.awin1.com/pclick.php?p=27595043937&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/4YhoiNM2.jpeg"
        },
        {
            "id": "e126",
            "title": "Hallöchen, Hallöchen Freiburg! - Die Travestie City Tour mit Betty BBQ",
            "description": "Die Mutti Freiburgs, Schwarzwald Drag Queen Betty BBQ, lässt es sich nicht nehmen, euch höchstpersönlich eine hinreißende City Tour anzubieten! Denn: ?Freiburg ist weit mehr als nur die Kaiser-Joseph-Straße und das Münster!? ? Wenn das jemand weiß ist es unser stadtbekanntes Fräulein BBQ! Egal ob lustige Anekdoten aus dem Nachtleben der Grande Dame oder neuester Stadtklatsch: Schwarzwald Drag Queen Betty BBQ entführt euch in Freiburgs Historie und schillernde Gegenwart!Dauer: 60-70 minBitte Corona-bedingt beachten:Eine Einkehr in geschlossenen Räumen und der Verzehr von Alkohol findet auf dieser City-Tour nicht statt.Bei der Durchführung unserer City-Touren steht die Sicherheit und das Entertainment unserer Gäste im Vordergrund. Damit jeder beruhigt und regel-konform hieran teilnehmen kann,- muss zwingend bei unseren Stadtführungen zu anderen Personen, wo immer möglich, ein Mindestabstand von 1,5 Metern eingehalten werden. - bitten wir alle unsere Gäste eine nicht-medizinische Alltagsmaske oder eine vergleichbare Mund-Nasen-Bedeckung zu tragen.- und bitten ebenfalls ganz im Sinne der verantwortlichen Eigenkontrolle, nur dann an unseren City-Touren teilzunehmen, wenn Sie sich gesund fühlen und insbesondere kein Fieber haben.",
            "startDateTime": "6/17/21 18:30",
            "venueId": "v16",
            "offerURL": "https://www.awin1.com/pclick.php?p=27595044137&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/oJ7BGYMg.jpeg"
        },
        {
            "id": "e127",
            "title": "Schwere Buben, leichte Mädels - die Rotlicht City Tour",
            "description": "Das älteste Gewerbe der Welt umrankt der Hauch des Verruchten, des Verbotenen und aber auch der Verlockung. Einer unserer Betty BBQ Tour-Guides nimmt euch nun mit auf eine Zeitreise in das Rotlichtmillieu Freiburgs der 70er, 80er und 90er Jahre und erzählt von schweren Buben und leichten Mädels. Verpasst auf keinen Fall die spannenden Geschichten aus einer Zeit, als manche Straßen in Freiburg leise in ein schummriges rotes Licht getaucht waren! In der ?Schnecken? Vorstadt, unweit des Schwabentors, war seit dem Mittelalter das ?Gewerbe? zuhause. Hier tranken die Polizisten morgens mit den Huren einen Kaffee im legendären Cafe Ruef. Hier lebten die Bürger neben Zuhältern, Prostituierten und Schlägern und kauften ihre Lange Rote im ?Würschtle-Puff?. In der Arena-Bar stand die Freiburger Prominenz nachts mit leicht bekleideten Damen am Tresen und am anderen Ende der Innenstadt stieg Gina Wildkatze, die Chefin der Playboy Bar, in einem langen weißen Pelzmantel aus ihre Limousine. Für ihre 15 Bar-Mädchen ließ sie einst echte, weiße Nerzbikinis nähen. Und mit etwas Glück läuft euch sogar Betty BBQ, die Mutti Freiburgs, höchstpersönlich über den Weg, die sicher die eine oder andere schlüpfrige Geschichte aus ihrem bunten Leben berichten kann.Dauer: ca 1 h 40 minBitte Corona-bedingt beachten:Eine Einkehr in geschlossenen Räumen und der Verzehr von Alkohol  findet auf dieser City-Tour nicht statt.Bei der Durchführung unserer City-Touren steht die Sicherheit und das Entertainment unserer Gäste im Vordergrund. Damit jeder beruhigt und regel-konform hieran teilnehmen kann,- muss zwingend bei unseren Stadtführungen zu anderen Personen, wo immer möglich, ein Mindestabstand von 1,5 Metern eingehalten werden. - bitten wir alle unsere Gäste eine nicht-medizinische Alltagsmaske oder eine vergleichbare Mund-Nasen-Bedeckung zu tragen.- und bitten ebenfalls ganz im Sinne der verantwortlichen Eigenkontrolle, nur dann an unseren City-Touren teilzunehmen, wenn Sie sich gesund fühlen und insbesondere kein Fieber haben.",
            "startDateTime": "6/19/21 18:30",
            "venueId": "v16",
            "offerURL": "https://www.awin1.com/pclick.php?p=27595044451&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/V1ccQt9z.jpeg"
        },
        {
            "id": "e128",
            "title": "Mammal Hands - Shadow Work Tour 2021",
            "description": "Shadow Work ist ihr dritttes Album und das erste selbst produzierte. Aufgenommen in den  80 Hertz Studios (Gondwana Records) ist das Werk ein Resultat aus 18 Monaten Tour und intensiven Schreib-Sessions. Die Energie ihrer berauschenden Live-Performance beeinflusste den Schreibprozess und trotzdem beinhaltet Shadow Work eine ruhige reflektierende Seite, die dem Album eine emotionale Bandbreite verleiht, welche den Zuhörenden Zugang zu Mammal Hands Welt gewährt.",
            "startDateTime": "2/20/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27626601409&a=774719&m=13738"
        },
        {
            "id": "e129",
            "title": "Pablo Held Trio - feat. Nelson Veras",
            "description": "Sein aktuelles Album, welches im Frühjahr 2020 erschien, wird das Trio mit dem brasilianischen Gitarristen Nelson Veras einspielen, welcher bei einigen gemeinsamen Auftritten augenblicklich den Geist und die Philosophie des Trio aufsog und der Musik dabei neue Impulse gab. Nelson ist kein gewöhnlicher Gitarrist, weil sein Spiel nicht gitarristisch ist, sondern einen unvergleichlichen Musiker offenbart, befindet der berühmte Gitarrist Lionel Loueke. Er ist jemand, der nie das Offensichtliche spielt, sondern immer wieder überrascht und dazu eine phänomenale Technik hat - ein außergewöhnlicher Musiker.",
            "startDateTime": "12/12/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27626601453&a=774719&m=13738"
        },
        {
            "id": "e130",
            "title": "MATIJA - byebyeskiesofyesterday - Tour 2021",
            "description": "Wir schreiben das Jahr 2020. Die Popkultur ist zersplittert, diffus, wesentlich schnelllebiger als noch vorwenigen Jahren. Die Gitarre gilt unter Kids nicht mehr als das aller-coolste Instrument. Und trotzdemgibt es die Künstler, die sich den Trends nicht unterwerfen und weder alt noch abgehangen wirken. Hörtman Matija, gibt es viel zu entdecken: Upbeat-Funk, Alternative Welten, Indie-Disko, ein verzweifeltesLiebeslied. Und nicht zuletzt der Blick auf den Wandel der Zeit.Das Münchener Trio um Frontmann Matt Kovac ist ehrlich, detailverliebt und impulsiv. Und vor allemeins: präsent auf Deutschlands Bühnen. Ihr Live-Auftritte sind noch unvorhersehbarer als 2020. Bereitsdas Jahr zuvor war ein großartiges Jahr für Matija: eigene Tour mit ersten ausverkauften Konzerten,das erste Netflix Feature eines Songs in einer Serie, die erste Award Nominierung, Tour Support für dieKytes im Mai plus zahlreiche Festival Gigs inkl. c/o pop, Dockville, Reeperbahn Festival, Nürnberg pop,Sound of the Forest & Waves Vienna.Die weltweite Corona-Krise, die die Live-Branche beinahe stillstehen lässt, geht auch an Matija nichtspurlos vorbei. Aus zwei Touren, die für 2020 geplant waren, ist nun eine 19-Show starke Tour Anfang2021 gewachsen. Dann kommt endlich die Zeit das zweite Studioalbum byebyeskiesofyesterday, dasam 9. Oktober 2020 über das Hamburger Label Clouds Hill erscheinen wird, live zu präsentieren.",
            "startDateTime": "11/7/21 20:00",
            "venueId": "v21",
            "offerURL": "https://www.awin1.com/pclick.php?p=27633297151&a=774719&m=13738"
        },
        {
            "id": "e131",
            "title": "Miss Allie - Die kleine Singer-Songwriterin mit Herz",
            "description": "Die kleine Singer-Songwriterin mit HerzSchon frech: Da steht sie, und los geht?s bevor sie es selbst beabsichtigt. Miss Allie ist sofort präsent, ganz direkt und unwiderstehlich einnehmend. Das gilt fürs Publikum ebenso wie für eine Menge Preise landauf, landab, die man als so junge, frische Singer-Songwriterin einsammeln kann, wenn man viel Herzblut und eine akustische Gitarre mitbringt. Fassungslos authentisch und mit verwegener Entschlossenheit spielt sich ?Die kleine Singer-Songwriterin mit Herz? in die Herzen ihrer ZuhörerInnen.  Wovon sie ein Lied singen kann? Nachdem auf ihrem ersten deutschen Album ihr Herz in die Toilette sprang und sie mit ?Schweinesteak Medium?, ?Du kleine Süße? oder später mit ?Dieter ? Das Regeltagebuch? erste virale Hits geschaffen hat, sind es auch auf ihrem neuen Album ?Aus Scheiße wird Gold? die besonderen, intensiven Momente im alltäglichen Auf und Ab des Lebens, die bei Miss Allie ins Zentrum rücken. Sie spürt diese Erlebnisse überall auf, nimmt sie liebevoll bis spöttisch an die Hand und stellt sie mit ganz eigenem Charme und Humor ins Rampenlicht. Der Ton wechselt von fröhlich, kokett, verspielt über rockig-zupackend bis hin zu ergreifend ehrlicher und tiefer Emotion. Die Gefühle von Sehnsucht bis Klartext; ein paar Takte Politisches können zwischendrin auch mal anklingen, weibliche Anliegen sowieso. Miss Allie würzt ihre Lieder mit überraschenden Wendungen sowie erfrischender Improvisation und bleibt am Puls der ZuschauerInnen, die sie scharenweise zu ihren Allie-ierten macht. Wer die Schublade braucht, sollte für Miss Allie eine sehr große aufmachen, changiert sie doch spielerisch zwischen wunderschönen Popsongs und klassischem Liedermachen. Teilweise sind ihre Songs gar musikalische Stand-Ups, mit denen sie eine ganz neue Farbe auf ComedyBühnen bringt. Am Ende bleibt immer Miss Allie ? die schlagfertige, emotionale Singer-Songwriterin, die einfach macht und strahlt. Ein wahrhaftiges LiveErlebnis.  Vor Jahren war die Straße ihre Bühne. Heute spielt sie ausverkaufte Solokonzerte, tritt in diversen TV-Shows und Radiosendungen auf. Dabei besticht sie mit ihrer ansteckend fröhlichen und herzensguten Art und ihrer einzigartigen Musik.Photocredit: Philipp Eisermann",
            "startDateTime": "2/11/22 20:00",
            "venueId": "v7",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863775025&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/4J2GAlXu.jpeg"
        },
        {
            "id": "e132",
            "title": "Danny Bryant & Bigband - Means Of Escape Tour 2020",
            "description": "Means Of Escape Tour 2020Präsentiert von Gitarre & Bass, Musix, Eclipsed?BIG? war die Erfüllung eines Traums, der den britischen Bluesrockgitarristen und Sänger ?Danny Bryant seit Beginn seiner steilen Karriere begleitet hat. Der Traum, seine Songs mit einer ?neunköpfigen Bigband ungeschminkt vor Publikum aufzunehmen, wurde Anfang 2017 in die Realität umgesetzt. Der charismatische Musiker präsentierte, unterstützt durch ?Keyboards, Bass, Schlagzeug, Rhythmus-Gitarre und einer vollen vierköpfigen Bläsersektion, seine Songs bei drei exklusiven Shows in Deutschland und in den Niederlanden seinem Publikum. Das Ergebnis war so fulminant, dass der Mitschnitt mit der Veröffentlichung des ?doppelten Live-Albums ?BIG? (Jazzhaus Records/in-akustik, No. 1 Amazon-Bestseller Kategorie ?Blues?) gefeiert wurde.                        Nach seiner bisher erfolgreichsten Tournee im vergangenen Herbst und Auftritten bei namhaften europäischen Festivals wird ?Britain?s National Blues Treasure? (Classic Rock Magazine, UK) auch 2020 bei wenigen, exklusiven Konzerten mit Bigband-Besetzung live in mehreren Ländern zu sehen sein. Der sich seit einigen Jahren in stetigem Aufwind befindende Brite wird auf der anstehenden Europa-Tour sein neues Studioalbum ?Means Of Escape? (Jazzhaus Records) live vorstellen. Das Werk ist nicht nur das 11. Studioalbum des von der Kritik hochgelobten Gitarristen, es ist auch das erste von ihm selbst produzierte Album. Mit Hilfe von Grammy-Preisträger Toningenieur Ian Dowling (Adele) und Mixer Eddie Spear (Rival Sons, U2) entstand ein Album, das den Hörer auf eine emotionale Achterbahnfahrt mitnimmt und Danny Bryant durchgängig in Bestform zeigt.",
            "startDateTime": "12/11/21 19:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27643975005&a=774719&m=13738"
        },
        {
            "id": "e133",
            "title": "Das ist Wahnsinn! - Tour 2022",
            "description": "Bodenständig, sympathisch, ehrlich und das Herz am rechten Fleck, das sind Attribute, die Wolfgang Petry seit jeher auszeichnen. Wolfgang ?Wolle? Petry startete seine einzigartige Karriere vor über 40 Jahren! 2006 beendete er sie ohne Vorwarnung abrupt. Acht Jahre nach seinem Abschied von der Bühne brachte er 2014 mit ?Einmal noch? ein Remix-Album seiner großen Hits heraus. Das Album ging direkt von Null auf 1 und erreichte Gold. Ein Jahr später überraschte Petry mit dem rockigen Studio-Album ?Brandneu?, welches ebenfalls direkt auf Platz 1 schoss. Im März 2016 erschien das Doppel-Album ?40 Jahre - 40 Hits? mit allen seinen Erfolgen von 1976 ? 2016. Und nun wird mit ?WAHNSINN! Das Musical mit den Hits von Wolfgang Petry? das großartige Petry-Gefühl zurück auf die Bühne kommen.",
            "startDateTime": "1/16/22 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=27654193737&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/0NC1M8ph.jpeg"
        },
        {
            "id": "e134",
            "title": "JEREMIAS - live 2021",
            "description": "Liebe:r Ticketinhaber:innen,leider muss das Konzert von Jeremias auf Grund der aktuellen Auflagen und Richtlinien zur Eindämmung des Coronavirus vom 27.02.2021 auf den 27.06.2021 verschoben werden. Ein persönliches Statement von Jeremias wird auf ihren Social Media Kanälen zu finden sein.Bei uns im E-Werk wird die Veranstaltung jetzt corona-konform im Saal mit festen Sitzplätzen stattfinden, mit allen üblichen Hygiene- und Abstandsmaßnahmen. Durch die Abstandsregel verringert sich allerdings unsere Kapazität erheblich, so dass Jeremias an diesem Tag zwei Shows spielen. Falls Ihr am neuen Termin teilnehmen wollt, müsst Ihr Euch im Vorfeld für eine der beiden Zeiten entscheiden, damit wir Euch entsprechend Sitzplätze buchen können. 1. Show: 27.06.2021  Einlass 17:00 Uhr / Beginn 18:00 Uhr2. Show: 27.06.2021  Einlass 20:00 Uhr / Beginn 20:30 UhrBitte meldet Euch mit Angabe des Namens des Ticketkäufers und der Anzahl der umzubuchenden Tickets bei uns per Mail an info@e-werk.de zurück. Falls Ihr eine Bestellung gemacht habt, die zu einer anderen Buchung gehört ? und Ihr also zusammensitzen wollt, brauchen wir natürlich alle Namen. Wir bearbeiten nach Mail-Eingang die Umbuchungen bestmöglich und würden Euch informieren, falls die gewünschte Uhrzeit nicht mehr verfügbar ist.  Solltet Ihr am Ersatztermin nicht können oder wollen, meldet Euch bitte auch bei uns, wir beantragen dann die Rückerstattung. Liebe Grüße aus dem E-WerkKulturzentrum E-Werk",
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
            "description": "Foto: Tim BrueningBOSSE strotzt vor frischen musikalischen Ideen, unnachahmlichem Wortwitz und bemerkenswerter Tiefenschärfe in seinem Blick auf die Dinge. ER wirbelt auf. Künstlerisch, thematisch, emotional. Mit Hüftschwung und Haltung. Mit Leichtigkeit und Bodenhaftung. ?Alles ist jetzt? ist modern, hell und klar. Wach und voller Energie. Produziert von Jochen Naaf (Polarkreis 18, Peter Licht, Maxim), der auch bei den Alben ?Taxi? und ?Wartesaal? schon das Mischpult geregelt hat und Tobi Kuhn (Die Toten Hosen, Feine Sahne Fischfilet, Milky Chance). Das letzte Album ?Engtanz? stieg als erstes seiner Alben direkt auf Platz 1 in die deutschen Albumcharts ein. Der Vorgänger ?Kraniche? ist mit GOLD dekoriert. Festivalauftritte auf den größten Hauptbühnen des Landes, 13.000 Fans beim eigenen Open-Air-Konzert auf der Hamburger Trabrennbahn, in zwei Minuten ausverkaufte Clubs und ausverkaufte Hallen. Zu einem der etabliertesten und anerkanntesten Künstler im Live-Business zu gehören: wohl die schönste Auszeichnung für Kontinuität und das größte Geschenk, was einem das eigene Publikum machen kann. Sein Antrieb: Jeder Schritt nach vorne setzt Energie frei. Jedes durchschwitzte Konzert Liebe. Jedes neue Album Dankbarkeit. Von außen heute mehr denn je: Wertschätzung und uneingeschränkte Sympathie. Für eine bemerkenswerte Künstlerkarriere. Fernab von Eitelkeiten und Starallüren. Voller Tiefe und Nachhaltigkeit. ?Alles ist jetzt? erscheint am 12. Oktober in einer Standard- und in einer Deluxe-Version. Diese wartet zusätzlich zu den 12 neuen Songs noch mit Akustik-Umsetzungen von acht der neuen Songs auf, vier davon eingespielt mit dem Kaiser Quartett aus Hamburg. Zusätzlich gibt es für alle Freunde der schwarzen Rille ?Alles ist jetzt? auch als Vinyl, BOSSE-Fans werden sich besonders über eine limitierte Holz-/Plexiglas-Box freuen. Diese enthält neben der Deluxe-Edition des Albums auch Aufnahmen des Konzertes auf der Hamburger Trabrennbahn vom August 2017 auf Live-CD und Live-DVD sowie weitere Überraschungen, die für strahlende Augen sorgen dürften.",
            "startDateTime": "7/29/21 19:30",
            "venueId": "v4",
            "offerURL": "https://www.awin1.com/pclick.php?p=27731520527&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/ExquPuDb.jpeg"
        },
        {
            "id": "e137",
            "title": "Kytes - Special Guest: Pool",
            "description": "Die Geschichte von Michael Spieler, Timothy Lush, Kerim Öke und Thomas Sedlacek dreht und windet sich bereits seit 2012.Seit der Schülerband machen sie in verschiedenen Konstelationen zusammen Musik, in dieser Zeit haben die Münchner viel an ihrem Sound und Songwriting gearbeitet und 2015 die ON THE RUN EP unter dem Milky Chance Label Lichtidicht Records released. Es folgte die erste Tour durch die Republik und eine große Festival Runde mit Stationen beim SXSW 2016 in Austin / Texas, Melt! Festival und MS Dockville. Das Debüt Album HEADS AND TALES, im September 2016 veröffentlicht, landete auf #14 der iTunes Alternative Charts, die Songs wurden bis dato mehr als 7 Millionen mal auf Spotify gestreamt.Kytes begannen im Sommer 2017 die Arbeiten am Nachfolgealbum zusammen mit dem Wiener Produzenten Filous, parallel dazu spielten sie auf weiteren europäischen Festivals u.a. The Great Escape (UK), Sziget (HUN) und FM4 Frequency (AU). Im April diesen Jahres headlineten Kytes die egoFM Feste und eröffneten quer durch Europa den Abend für die Indie-Heros Shout Out Louds und Everything Everything. Jetzt gehen Kytes, die mittlerweile mehr als 250 Shows auf dem Buckel haben, mit viel neuer unveröffentlichter Musik im Gepäck für 5 exklusive, kleine Club Konzerte auf Tour.",
            "startDateTime": "11/27/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27731523535&a=774719&m=13738"
        },
        {
            "id": "e138",
            "title": "Zugezogen Maskulin - 10 Jahre Abfuck Tour",
            "description": "Zwei junge Männer verlassen ein ehemaliges Reichsbahn-Gebäude, in dem sich nach der Wende Musikstudios eingenistet haben. Keine Highclass-Studios, wie die beiden sie im Rahmen ihres Praktikums kennengelernt haben, wenn Interviews anstehen und sich Rapper vor ihnen in tiefen Ledersesseln aalen, von ihren Alben erzählen, von den anstehenden Touren, vom Erfolg ? und die beiden jungen Männer zuhören und nicken ? mit einem Aufnahmegerät in der Hand.Jedenfalls sieht es danach aus, im Kopf läuft jedoch was ganz anderes ab, sie wollen selber im tiefen Ledersessel sitzen, vor einem dankbaren Publikum, denn trotz aller Versicherungen sich selbst oder ihrem Chef gegenüber: Eigentlich wollen die beiden selber Rapper sein.Oder noch besser: Rapstars.Und vielleicht kommen sie jetzt diesem Ziel näher, denn heute, in diesem kleinen, etwas heruntergekommenen Studio, ist ihre erste gemeinsame Platte fertig geworden. Der Titel, eine Mischung aus Selbstbewusstsein und Provinz-Komplex. Aber er verfängt gut, mal gucken, was man noch damit anfängt, mit diesem schrägen Namen, mit ZUGEZOGEN MASKULIN.Passt ja auch, 2010 ist ein schräges Jahr, neues Jahrzehnt, neue Superlative, die wahrscheinlich so nicht mehr zu überbieten sind: Die Schweinegrippe besorgt die Menschen, ein Vulkan sorgt dafür, dass in manchen Teilen Europas kein Flugzeug startet und ein SPD-Politiker sorgt mit seinem Buch für einen, vorher undenkbaren, Rechtsruck ? wenigstens hat man schon länger nicht mehr von den Dönermorden gehört.Was beide zu diesem Punkt nicht wissen, nur hoffen: Die Rapstarträume werden sich erfüllen. Es wird rauschhaft, Anerkennung, dieses bohrende Verlangen nach Anerkennung, Geld, Ruhm, all das gibt es bald ? aber der Kater wird gigantisch. Und was die beiden nicht wissen können, aber ahnen: Dieses schräge Jahrzehnt wird noch schriller und seltsamer, mit Verwerfungen, an die man sich im Sommer des Jahres 2020 gewöhnt hat, die bei Bandgründung noch unvorstellbar sind: es werden 10 JAHRE ABFUCK.Und so berichten ZUGEZOGEN MASKULIN auf 10 JAHRE ABFUCK von der Ankunft aus der deutschen Provinz in Berlin, ?geblendet von den Lichtern, fühlte mich wie Ivan Drago? und davon, wie man bei ?Rap.de? Menschen interviewt, die einige Jahre später anderen Menschen in Syrien den Kopf abschneiden werden. GRIM104 und TESTO erzählen vom trüben Weg hin zum Erfolg, als ?ZM auf dem Normiefest? spielten, vor Typen mit Deutschlandhut und mit DJ Ötzi als Kontrastprogramm.Blicken auf Männer und einengende Männlichkeitskonzeptionen, wenn im Hort aus ?zwei Decken und zwei Stühlen? eine ?Liebeshöhle? wird, in der ein Spielkamerad Küsse auf den Bauch verteilt ? und blicken auf Frauen, aus den Augen eines Incel-Raubtiers, dessen Geilheit kein Ventil gesetzt ist und aus den Augen des feministischen Posterboys, dem ein ?The Future is female? genauso schnell von den Lippen geht, wie der bedrohlich-aufdringliche Anruf nachts um 3.Huldigen ?König Alkohol?, der zwar ?alles zerstört, alles kaputt um mich rum?, aber dessen Zauberkraft auch für Abenteuer und Legendenbildung sorgt. Dann, langsam kommt er, ?Der Erfolg?, erkennt man, dass man ein ?Traumprinz wie Dieter Bohlen? ist und wenn es nicht klappt mit den Girls, scheiss drauf ?wieviel Klicks hat denn dein Neuer, wenn ich fragen darf?? Lachen irre beim ?Tanz auf dem Vulkan?, gegen das bedrohliche Brodeln der Lava aus NSU, AFD, aus Nordkreuz und VS.Und landen in der Gegenwart, wenn man begreift, dass Musik machen und Musik verkaufen eventuell zusammen gehören, wenn man gemeinsam mit AHZUMJOT seine Fans zum Kauf der Deluxe-Box einschwört, ?ich liebe euch so sehr, ihr dämlichen Viecher?. Wenn die Bühnen groß und größer werden, man unter den irritierten Blicken von Angela Merkel und 40.000 schockierten Zuschauern ein Feiertagsprogramm mit ZM-Klassikern wie ?Endlich Wieder Krieg? bestreitet, ?Auftritt Brandenburger Tor, ausgebuht/ aber gut bezahlt ? fühlt sich geil an.?Und wenn man vielleicht langsam müde wird und hofft, dass der Sommer langsam vorbeigeht, wenn man sich wünscht, dass der schwere Goldschmuck endlich dafür sorgt, dass man still und heimlich beim Baden ertränkt wird. Und dass, wenn einem solche Gedanken kommen, vielleicht an der Zeit ist zu gehen. Zeit für einen ?EXIT?.Dass dieser rauschhafte Rückblick trotzdem so zeitgeistig, weltläufig und aktuell klingt, ist vor allem AHZUMJOT zu verdanken, der als Executive Producer auf 10 JAHRE ABFUCK gearbeitet hat. Der 30-Jährige Hamburger hat der Platte ein minimalistisches und elegantes Soundbild verliehen, in den Produktionen wurde jeder unnötige Pomp abgestoßen, kein Geigen-und-Piano-Pathos, sondern finstere Bass Music und zerhackte, zerschnittene Samples, die ineinander gewirbelt werden.Immer wieder tauchen Soundreferenzen auf obskure Youtube-Schnipsel auf, von ?Kai der Brecher? bis hin zu ?Pufferfish eating carrots?. Gespräche aus dem Studio werden mitgeschnitten, kleine Hörspiele mit prominenten Gastsprechern in den Songs versteckt. Denn bei aller Modernität, es klingt nie glatt, nie beliebig, immer werden Kanten und Brüche in die Songs eingebaut. Diese Weirdness blitzt immer wieder auf den Produktionen von SILKERSOFT auf, der neben AHZUMJOT für die Beats auf dem dritten Studio-Album von Zugezogen Maskulin verantwortlich ist.Und so ist 10 JAHRE ABFUCK Rückschau und Aufbruch zugleich: In einen eleganten und hypermodernen Sound eingepackt, schreiben GRIM104 und TESTO über längst verblasste Anfänge, wühlen im Morast zwischen der Kindheit und ersten Gehversuchen auf Bühnen, Beziehungen und Selbstbehauptungen. Und blicken gleichzeitig in eine Zukunft, die alles sein kann: Hamsterrad oder Emanzipation, strahlende Zukunft oder, hoffen wir es nicht, 10 JAHRE ABFUCK.",
            "startDateTime": "9/13/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27774151457&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/RJ4UCceg.jpeg"
        },
        {
            "id": "e139",
            "title": "FREIBURGerLEBEN: Flying Dinner Regional",
            "description": "Seit wann stellt sich die Frage ?Gabel  oder  Finger?? Reiner Wein oder gepanschtes Bier? Putzt man die Finger am Tischtuch ab oder benützt man doch lieber eine Serviette? Was sagt das Salzfass über den gesellschaftlichen Rang aus?Erleben Sie mit uns das etwas andere Dinner - Sie wollen nicht immer nur ganz klassisch essen gehen und einen Abend wie jeden anderen erleben? Dann ist das Flying Dinner genau das Richtige für Sie! Sie erleben  die wunderschöne Altstadt und genießen dabei in verschiedenen Restaurants leckere badische Spezialitäten und badischen Wein.   Dieses Erlebnisdinner bietet Ihnen ein 3-Gänge-Menü plus Aperitif. Die Entdeckungstour durch die Stadt dauert circa 2 Stunden und endet mit dem Hauptgang und Dessert in einem Restaurant. Ganz nebenbei erfährt man auch noch etwas über die (kulinarische) Stadtgeschichte und erlebt die schönsten Gassen Freiburgs.Dauer der Führung: Ca. 2 StundemInkl. Führung + Aperitif + Vorspeise mit Glas Wein + Hauptgang mit Glas Wein + DessertDurchführung der Tour bei mindestens 6 Personen. Sollten es weniger Teilnehmer sein behalten wir uns vor bis 2 Tage vor Beginn der Führung die Tour zu stornieren.",
            "startDateTime": "6/19/21 17:30",
            "venueId": "v15",
            "offerURL": "https://www.awin1.com/pclick.php?p=27795639897&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/rc4DeUiK.jpeg"
        },
        {
            "id": "e140",
            "title": "Chris Tall - Schönheit braucht Platz!",
            "description": "CHRIS TALLS NEUES BÜHNENPROGRAMM: SCHÖNHEIT BRAUCHT PLATZ!Ab März 2020 auf Tournee!Nach den großen Erfolgen seiner beiden Soloprogramme ?Selfie von Mutti? und ?Und jetzt ist Papa dran!?, mit denen er die Arenen des Landes füllte, legt der preisgekrönte Comedian Chris Tall nach. Ab März 2020 geht der Hamburger auf Tournee, um seine Fans aufs Neue zu begeistern. ?Schöner, schneller, breiter? ist die  Devise, denn curvy Chris feiert die Anmut: sich selbst! Mama und Papa sind abgemeldet, jetzt kommt das richtige Leben!Vom Cluburlaub zu vierstündigen Operninszenierungen, vom Stadion zu Babyparties, vom Binge-Watching zum Haustierkauf mit einem endlich gelungenen Date: Chris versucht jeder Situation etwas Positives abzugewinnen und verhilft der Schönheit zu ihrem Recht; auch wenn das ab und an gehörig schief geht! So quält er sich z.B. durch einen Tag Hochkultur, um am Ende seine geschundene Seele mit zwei Karten für ein HSV-Spiel zu befrieden. Die neue Whatsapp-Gruppe seiner Kumpels mit dem Namen ?Happa happa Dudu ? Babyface Emoji? speichert er zwar mit Würgegedanken ab, begibt sich aber dennoch in die Höhle des Löwen und nimmt an einem Geburtsvorbereitungskurs teil. Schließlich macht man das so für seine Brudis?Chris Tall ist das Sprachrohr mehrerer Generationen: Genüsslich seziert er selbst erlebte Geschichten und zieht sich und alle Beteiligten durch den Kakao. Es geht um Fami l ie, Freundschaft, den Struggle im Alltag als junger Mensch und natürlich ums Essen. Farbendiäten und viel zu enge MRT-Röhren führen ihn zu der wunderbaren Einsicht, dass man Schweinefilet auch mit Quinoa, Hirse und Chiasamen panieren kann. Und obwohl er einige Vorlieben seiner neuen Freundin (z.B. Guppies als Haustiere) niemals verstehen wird, weiß er, dass sie genau die richtige für ihn ist. Denn was ist am Ende schöner als die Liebe?Dabei ist keine Show wie die andere. Immer wieder stellt Chris seine eigenen Gags auf den Kopf und tritt in komischen Schlagabtausch mit seinem Publikum, um am Ende festzustellen: Verdammt, jetzt habe ich mich schon wieder selbst verarscht! Diese Interaktionen mit den Zuschauern lassen auch ihn selbst immer wieder Gänsehaut- Momente live in seiner Show erleben. So kamen in Oldenburg beispielsweise mit dem Zutun von Chris Tall 8000 Euro Spendengelder für die junge Lisa zusammen, die aufgrund einer Spastik in ihren Beinen im Rollstuhl sitzt. Wie so oft sprach der Komiker sie im Rahmen seiner ?darf er das??-Thematik an. ?Ihre Krankenkasse zahle keine besonderen Hilfsmittel für den Aufbau ihrer Muskeln, der? Kosten-Nutzen-Faktor` sei nicht gegeben?, so Lisa. Nun kann sich die bemerkenswerte Frau ein spezielles Fahrrad kaufen.Sein Live-Publikum liegt Chris Tall sowieso am Herzen! ?Ich habe die besten Fans der Welt?, sagt der junge Komiker immer wieder in Interviews. Und so steht auch im Jahr 20/21 wieder eine Arena-Tour an, ?denn die besten Fans sind auch die Schönsten und brauchen deswegen Platz!?",
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
            "description": "Gegründet 1969 in London, England, sind WISHBONE ASH eine der einflussreichsten Gitarrenbands in der Gesichte des Rocks. Gleichermaßen inspiriert durch britischen Folk, amerikanischen Jazz und R&B, erspielte die Band sich öffentliche Zustimmung und Kritikerlob. Energie und Melodie haben The ASH zu einem schwer zu überbietenden Act gemacht, der aktuell durch eine neue Generation treuer Rockfans entdeckt wird. Über die Jahre hat die Band mit diversen musikalischen Genres experimentiert, von Folk, Blues und Jazz bis hin zu Pedal-to-the-Metal Rock und Electronica. Egal in welchem Stil, WISHBONE ASH?s unverkennbares Alleinstellungsmerkmal ist ihr Zusammenspiel zweier Leadgitarren, das unter anderem Bands wie Thin Lizzy, Lynryd Skynryd, Iron Maiden und Opeth beeinflusste.Als wahre Krieger der Straße legt die Band jährlich rund 30.000 Meilen zurück, das entspricht etwa einer Erdumrundung. Den Sommer werden WISHBONE ASH im Studio verbringen, um ein neues Album aufzunehmen. Damit bringen sie ihren künstlerischen Output auf 25 Studioalben, 11 Livealben, sowie fünf Live-DVDs und die DVD Rockumentation ?This is Wishbone Ash?. Ebenfalls erhältlich sind die fünfte Roadworks CD ?Live in Sacramento?, die während der Nordamerika-Tour in 2018 aufgenommen wurden, und die ersten offiziellen Re-Releases von ?Twin Barrels Burning? aus 1982 und ?Raw to the Bone? aus 1985.Zusätzlich kommen zum Jubiläum auch einige ältere Aufnahmen wieder ans Licht, so z.B. Snapper Records? neuester Release, ?Live in Glasgow? von 1977. Ebenso der legendäre und sehnsüchtig erwartete TV-Mitschnitt ?Live from Rockpalast? (Deutschland, 1970er Jahre), der demnächst beim Label ?Made in Germany Music? erhältlich sein wird. Doch damit nicht genug: WISHBONE ASH halten noch eine Vielzahl anderer Projekte bereit - das 50-jährige Jubiläum wird umfangreich mit Veröffentlichungen und Ereignissen begleitet.2015 erschienen Andy Powells musikalische Memoiren mit dem Titel ?Eyes Wide Open: True Tales of a Wishbone Ash Warrior,? an dem auch der renommierte irische Musikjournalist Colin Harper mitgeschrieben hat (verfügbar als E-Book für Kindle oder Apple iBook). ?Es ist ein ziemliches Unterfangen 46 Jahre als tourender Musiker in dieser einen Band in Buchform zu bringen,? so Powell ?Ich habe viele Veränderungen in der Musikindustrie und auch generell in der Welt gesehen, wie man sich vielleicht vorstellen kann.? Fest steht: keine andere Rockband in der Geschichte hat mehr mit dem Twin-Guitar-Konzept gespielt als WISHBONE ASH.",
            "startDateTime": "1/15/22 20:00",
            "venueId": "v22",
            "offerURL": "https://www.awin1.com/pclick.php?p=27911470567&a=774719&m=13738"
        },
        {
            "id": "e143",
            "title": "Zweierpasch - Live 2021",
            "description": "Poetisch, politisch, polyphon: Zweierpasch gehen über Grenzen - sprachlich und geografisch. Mitihrem rebellischen World HipHop prägt die Band aus Freiburg und Straßburg die Szene auf ihreganz eigene Weise. Das haben die lyrischen Grenzgänger bei Tourneen in Europa, Afrika und Asienbewiesen. 2017 waren sie Freiburgs Band des Jahres. Im November 2018 haben sie in Paris denAdenauer-de-Gaulle-Preis erhalten. 2019 spielten sie im westafrikanischen Mali vor 10.000 Fans.Im Zeichen von Frieden, Austausch und Toleranz touren sie mit deutsch-französischen Tracks durchdie Welt. Im November ist ihr 4. Studioalbum erschienen: ?Un peu d?Amour? (Jazzhaus Records).",
            "startDateTime": "10/8/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27911473263&a=774719&m=13738"
        },
        {
            "id": "e144",
            "title": "Heinrich Del Core - GLÜCK g´habt!",
            "description": "?GLÜCK g?habt!? ? wenn man in Mexiko im Schlaf überfallen wird und gesund aus der Nummer raus kommt?GLÜCK g?habt!? ? wenn du dich selber beim Schnarchen nicht hörst?GLÜCK g?habt!? ? hat Heinrich Del Core in der letzten Zeit häufig - und genau das gibt er in seinem neuen Programm zum Besten. Heinrich Del Core nimmt uns erneut mit auf eine Reise durch den Alltag - absolut skurril, alltagstauglich und irrwitzig zugleich. In seinem Handgepäck hat er neue, herrlich komische Geschichten, unzählige Lacher und eine Menge an Humor dabei ?und seine Schuhe! Seine roten Schuhe!Der halbe Restitaliener versteht es mit seiner sympathischen, schwäbischen Leichtigkeit die Alltagsituationen so detailgetreu wiederzugeben, dass das Publikum sofort in seinem Bann gezogen wird und seinem Charme nicht auskommt. Ein unvergleichlicher Mix aus Situationskomik, Charisma und Sprachwitz. Mit Heinrich Del Core treffen sich Italien, Deutschland, Comedy und Kabarett.Diesmal dreht sich alles rund ums Glück -der Italo-Schwabe macht keinen Halt vor Polizeikontrollen und Saunabesuchen. Auch was es mit der Einverständniserklärung beim Sex in Schweden auf sich hat wird er in seiner unnachahmlichen Art erläutern. Selbst seine Urlaubserlebnisse und Bahnfahrten bis hin zur Darmspiegelung werden nicht ausgelassen. Eins ist sicher ? Das Publikum wird weiterhin mit wahren Begebenheiten des Alltags einen ganzen Abend lang bestens unterhalten!Der zahlreich preisgekrönte (siehe unten) Kabarettist und Comedian überzeugt mit seinem neuen sehr kurzweiligen und pointenreichen Programm und schafft eine einzigartige Verbindung und Nähe zum Publikum, das sich immer wieder selber in seinen irrwitzig erzählten Geschichten lachend wiederfinden wird??",
            "startDateTime": "2/19/22 20:00",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=27934833331&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/FF81QfYb.jpeg"
        },
        {
            "id": "e145",
            "title": "The World of Hans Zimmer - A Symphonic Celebration - The Official Tribute",
            "description": "Foto: Frank EmbacherOscar-, Grammy- & Golden Globe-Gewinner Hans Zimmer ist zweifellos einer der bekanntesten und einflussreichsten Filmkomponisten unserer Zeit. Mit seinen überwältigenden Klangwelten hat er das zeitgenössische Kino geprägt wie kein anderer Komponist. Die Liste der Blockbuster-Produktionen, denen er mit seinen Soundtracks Dramatik und emotionale Tiefe schenkte, ist schier endlos. Der König der Löwen, Gladiator, Fluch der Karibik, Da Vinci Code ? Sakrileg, The Dark Knight und Inception sind nur einige der bekanntesten. Mit dem atemraubenden Filmscore zum Christopher Nolan - Kinohit Dunkirk erhielt Hans Zimmer im Januar 2018 seine elfte Oscar-Nominierung. Ende April 2018 begann die ?The World of Hans Zimmer ? A Symphonic Celebration? Konzertreise durch Deutschland, die im Herbst 2018 erstmals in die Verlängerung geht und im Frühjahr 2019 sowohl in Deutschland als auch im europäischen Ausland weitere Termine nach sich zieht. Eine Tour, begleitet von langjährigen Freunden und Kollegen des Rockstars der Filmkomponisten, für die Hans Zimmer als Kurator und musikalischer Leiter steht, auch wenn er bei diesen Konzerten nicht persönlich auftritt. Im Gegensatz zu Hans Zimmers bekannter ?Live?-Tournee, bei der der Sound auf seine Band und die elektronischen Klänge der Musik ausgerichtet ist, werden die Werke von Hans Zimmer bei ?The World of Hans Zimmer ? A Symphonic Celebration? erstmals überhaupt für Orchester präsentiert. Dafür hat Hans Zimmer höchstpersönlich in monatelanger Feinarbeit zu seinen Soundtracks opulente Konzertsuiten erstellt. Für die Welturaufführungen seiner neu arrangierten Werke von ?König der Löwen? bis ?Gladiator? hatte sich der Filmkomponist zur Premiere im April 2018 Deutschland ausgesucht. Neu ist auch, dass erstmals bildgewaltige Projektionen von Filmsequenzen für das Publikum gezeigt werden. Auch hier hat Hans Zimmer im Vorfeld der künstlerischen Leitung genau kommuniziert, welche Szenen ihm wichtig sind und eingesetzt werden sollen. Des Weiteren werden einige renommierte Solisten aus Hans Zimmers Talentschmiede, die größtenteils ebenfalls schon seine ?Live?-Tournee begleiteten, Teil der Show sein. Dazu gehört auch Pedro Eustache, Flötist der Fluch der Karibik Reihe. Durch die Leitung von Gavin Greenaway, Soundtrack-Dirigent von Hans Zimmer - dem er nach eigenen Worten mehr vertraut als sich selbst ? wird das große Symphonieorchester ein eindringliches und unvergessliches Konzerterlebnis für das Publikum zelebrieren. Dazwischen geben Hans Zimmer sowie langjährige Freunde und Kollegen in kurzen Videoeinspielungen immer wieder spannende und amüsante Einblicke hinter die Kulissen seiner Studioarbeit. Mit ?The World of Hans Zimmer ? A Symphonic Celebration? erschafft Hans Zimmer eine einzigartige Gelegenheit, Orchestermusik einer neuen Generation vorzustellen, die Kultur des Orchesters zu bewahren und diese in eine weniger elitäre Welt zu versetzen. Die Zuschauer können in die aufregende ?World of Hans Zimmer? eintauchen ? mit all ihren vielschichtigen und faszinierenden Facetten.",
            "startDateTime": "2/27/22 19:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=27934833403&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/7WMMLJk4.jpeg"
        },
        {
            "id": "e146",
            "title": "The Magical Music of Harry Potter - Live in Concert",
            "description": "DAS EINMALIGE FILMMUSIK-ERLEBNISThe Magical Music of Harry Potter - Live in Concert mit den Weasley Brüdern!Das musikalisch Beste aus allen Harry Potter Filmenund dem Musical mit dem London Philhamonic & Symphonic Film-OrchestraDie Harry Potter Filme sind die erfolgreichsten Filme der Kinogeschichte, nun kommt die preis- gekrönte Filmmusik in einem einmaligen Konzertabend mit den Weasley-Brüdern erstmals nach..(stadt)...! Original-Darsteller, Starsolisten, ein Chor und Symphonieorchester werden die musikalische Welt von Harry Potter am (datum)...in....(Halle)...zum Leben erwecken, Karten fuer dieses einmalige Ereignis gibt es ab sofort bei uns!Die Besucher werden die musikalisch bedeutendsten Momente des Harry Potter Mythos erleben. Das Programm umfasst die Film-Soundtracks des vierfachen Oscarpreistragers John Williams, Patrick Doyle, Nicolas Hooper und des weiteren Oscarpreisträgers Alexander Desplat sowie die beste Musik aus ?Harry Potter und das verwunschene Kind?, das mit Preisen in London und New York überhäuft und zum erfolgreichsten Theaterstück der Welt wurde.Wenige ausgewählte Konzerte werden von Oscarpreisträger Alexandre Desplat dirigiert, bei allen Konzerten mit dabei sind Publikumslieblinge und Mitglieder der Weasley Familie, welche mit al- lerlei Spaß und guter Laune das Konzert zu einem unvergesslichen Erlebnis machen. Der Abend präsentiert eine musikalische Reise in eine magische Welt mit Freundschaft, Abenteuer, Liebe und Zusammenhalt in der gefahrlichen Welt der Magier. Die Besucher erwartet eine Welt der Illusion sowie modernste Technologie mit einer Licht- , Ton- und Laserinszenierung sowie eine einzigartige Klangdimension, die Gänsehaut erzeugt. Visuelle und magische Effekte werden die Herzen aller Harry Potter-Fans höher schlagen lassen.Die Werke wurden von vier Komponisten geschrieben und das Publikum erlebt an diesem Abend ein musikalisches ?Best of Harry Potter? aus allen acht Filmen und dem Musical. John Williams (Star Wars, ET, Indiana Jones, Jurassic Park) komponierte die Musik für die ersten drei Filme, das Publikum darf sich auf Titel freuen wie die berühmte Hedwig?s Theme, das Leitmotiv der Har- ry-Potter-Verfilmungen, sowie auf Double Trouble - das klassische Hogwarts-Motiv mit einem Kinderchor, welches sogar Anklang in modernen Shakespeare-Inszenierungen nimmt - , sowie den lustigen Aunt Marges Waltz und Witches, Wands and Wizards. Teil des Programm sind außerdem Werke wie die ?Hogwarts Hymne? von Patrick Doyle, der mit seiner Musik im vierten Harry Potter Film in die mysteriöse und dunkle Welt des trimagischen Turniers entführt. Ni- cholas Hooper hat mit ?Dumbledores Farewell? im fünften und sechsten Harry Potter Film den Reifeprozess Harrys mitgestaltet und Alexandre Desplat mit ?Lily`s Theme? in den letzten beiden Werken der Filmreihe das grandiose und unvergessliche Finale komponiert.KARTEN SICHERNThe MAGICAL Music of Harry Potter ist ein magischer Abend, der sie verzaubern wird- mit seiner Aura, Stimmung und immensen Klangwelten - ein einzigartiges Erlebnis.",
            "startDateTime": "2/27/22 15:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=27934835975&a=774719&m=13738"
        },
        {
            "id": "e147",
            "title": "Bülent Ceylan - Luschtobjekt",
            "description": "Von der ?Generation Instagram? lernen, heißt siegen lernen! Deswegen zeigt BÜLENT seinem Publikum nicht die kalte Schulter, sondern die rasierte Brust. Bülent macht sich zum LUSCHTOBJEKT! Optik statt Inhalt, Nippel statt Nietzsche! Kabarettpreise müssen warten. Bülent bedient als LUSCHTOBJEKT alle nur denkbaren Geschlechter und Vorlieben: osmanophile Kurpfalz-Lover, Langhaar-Fetischisten oder Liebhaber großer Nasen und kleiner Bärte... bei BÜLENT packt jeden die Wolluscht! Und wer Intelligenz sexy findet, wird natürlich auch befriedigt nach Hause gehen.Aber BÜLENT macht sich in seinem 11. Live-Programm nicht nur selbst zum LUSCHTOBJEKT, er macht sich auch über Luschtobjekte lustig. Über seine eigenen (Frauenfüße und Gummifrösche) und über die anderer Leute. Denn heute kann offenbar alles ein LUSCHTOBJEKT sein:Autos, Schuhe, Smartphones... es gibt sogar Menschen, die Atomkraftwerke lieben. Selbst Götter sind objektophil! Und weil der Donnergott THOR bekanntlich gebürtiger Mannheimer ist, verrät er bei BÜLENT weltexklusiv und zum ersten Mal, wo, wann und wie bei ihm der Hammer hängt. Das wird luschtig, versprochen!Foto: S-Promotion",
            "startDateTime": "4/21/22 20:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=27967700467&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/KgoqYFd2.jpeg"
        },
        {
            "id": "e148",
            "title": "Die Boogie Woogie Weihnachtsexplosion zum 3. Advent",
            "description": "2016 feierten sie ihr 25-jähriges Bestehen, seit langem zählen sie zur Spitze in der internationalen Blues- & Boogie - Szene: Christoph Pfaff, Thomas Scheytt, Hiram Mutschler und ihre BOOGIE CONNECTION.?Wenn der Boogie nicht in Amerika, sondern im Schwarzwald entstanden wäre, dann stünde als Geburtsstätte Freiburg in den Jazzlexika und die Musik würde dann so klingen, wie sie die Boogie Connection spielt. Die dreiköpfige Band braut eine heiße Mischung aus Blues, Boogie, Rhythm`n`Blues und Soul?, schreibt das Jazzpodium. Mit über hundert Konzerten pro Jahr, darunter Auftritten bei nahezu allen bedeutenden Jazzfestivals in Deutschland und im europäischen Ausland, gehören sie zu den erfolgreichsten Bands, die Freiburg je hervorgebracht hatBOOGIE CONNECTION ?Noch spartanischer geht es nicht: Ein Piano, eine Gitarre und ein Schlagzeug ? mehr braucht es nicht, um die Fans binnen kürzester Zeit von ihren Stühlen zu holen.? (Südkurier)?Eine heiße Mischung aus Blues, Soul, Boogie-Woogie und totalem Rhythm`n`Blues, wie man sie einzigartiger Weise nur mit der Boogie Connection aus Freiburg/Breisgau erleben kann. In diesem Musikgenre sind Christoph Pfaff, Thomas Scheytt und Hiram Mutschler nach wie vor die unerreichten Könige der internationalen Live-Jazz-Szene.? (Schaffhauser Nachrichten)Besetzung: Christoph Pfaff: Gesang, Gitarre, MundharmonikaThomas Scheytt: PianoHiram Mutschler: Schlagzeug",
            "startDateTime": "12/12/21 19:00",
            "venueId": "v20",
            "offerURL": "https://www.awin1.com/pclick.php?p=27994356999&a=774719&m=13738"
        },
        {
            "id": "e149",
            "title": "basta - In Farbe",
            "description": "Ein Zuviel an Grau musste man von basta noch nie befürchten. Beständig versorgen die fünf Jungs im besten Alter ihr Publikum seit Jahren mit lebensprallen Liedern, umwerfend komischen Geschichten und feinsinnigen Balladen und arbeiten so unentwegt an der kulturellen Kolorierung für eine Bunte Republik Deutschland. Dass das a cappella, also nur mit Stimmen geschieht, ist dabei fast schon Nebensache. Ganze Orchester und Bands entstehen vor den inneren Augen und Ohren des Publikums. Auch hier ist es der (musikalische) Farbenreichtum, der souveräne Zugriff auf alle erdenklichen Genres und Stilrichtungen, der basta so auszeichnet. Nachdem sie uns bei ihrer letzten Show ?Freizeichen? mit dem Büroshanty ?Cut, copy & paste? begeistert haben, spendieren sie uns dieses Mal mit ihrer Dancenummer ?Reggaeton im Altersheim? eine weitere so unwahrscheinliche wie geniale Kombination zweier Welten, die nach einmaligen Hören nicht mehr voneinander zu trennen sind. Diese irrwitzigen und doch so passenden Kombinationen sind neben ihrer umwerfenden Bühnenpräsenz so etwas wie bastas Markenzeichen: ?Kranke Männer? verbindet klassischen Hardrock mit maskuliner Wehleidigkeit, ?Mein Auto? alpine Ländlerromantik mit einer satirischen Hymne auf des Mannes besten Freund, das Auto. Apropos Satire: Dass Gesellschaftskritik bei basta nie mit erhobenem Zeigefinger und Moralpredigten, sondern immer sympathisch und mit einem verschmitzten Lächeln dargereicht wird, ist ihre große Stärke. basta schmieren uns keinen Honig um den Mund. Dass es manchmal schwer ist, dieses Leben, davon wissen und singen sie. Aber sie zeigen uns, dass wir das Recht haben, über all die Zumutungen zu schmunzeln. ?Das Leben ist kein Wandtattoo? heißt es bei ihnen, und dass dieser Satz schon fast selber zum Sinnspruch taugt, ist auch wieder eine so typische basta-Ironie. Nein, basta nehmen das Leben ernst und humorvoll zugleich, und das muss man ihnen erstmal nachmachen. Sie gewinnen jeder schmerzlichen, traurigen oder auch nur banalen Situation einen neuen Blickwinkel ab und machen ihn damit schöner. Und was einem den einen oder anderen Tag normal, alltäglich und grau erschienen haben mag, das sieht man spätestens nach dem Besuch einer basta-Show: in Farbe.",
            "startDateTime": "3/16/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=24485891229&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/xc1MrHLz.jpeg"
        },
        {
            "id": "e150",
            "title": "Aynsley Lister - Euro Tour 2021",
            "description": "Nach sieben Studioalben, drei Live-Alben und regelmäßigen, ausverkauften Tourneen in ganz Europa muss man AYNSLEY LISTER eigentlich nicht mehr groß vorstellen. Der britische Gitarrist, Sänger und Songwriter hat sich in der Blues/Rock-Szene in den letzten 18 Jahren einen exzellenten Ruf erspielt und konnte auch für sein letztes Werk, das 2013 veröffentlichte Album ?Home?, seiner mittlerweile mehr als ansehnlichen Sammlung von Auszeichnungen gleich drei neue hinzufügen: bei den British Blues Awards 2014 wurde der Titeltrack des Albums ?Home? als ?Song Of The Year? ausgezeichnet, Anysley Lister wurde ?Songwriter of the Year? und 2015 setzte sich der Musiker als ?Guitarist of the Year? gegen die Konkurrenz durch.",
            "startDateTime": "11/10/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27559852625&a=774719&m=13738"
        },
        {
            "id": "e151",
            "title": "Steiner & Madlaina - Win Win Tour",
            "description": "Wer  Nora  Steiner  und  Madlaina  Pollina  in  den vergangenen Jahren mal live gesehen hat ?zum Beispiel   auf   ihren   langen   Touren,   auf   dem Southside/Hurricane   Festival   oder   auf   dem Lollapalooza ?der müsste ihren Live-Qualitäten, ihrem Charisma, ihren Stimmen und nicht zuletzt ihren Songs bereits erlegen sein. Und das dürfte mittlerweile   einigen   passiert   sein,   denn   die beiden haben den alten Mythos des ?Hochspielens? ernst   genommen   und   in   den letzten  Jahren  über  150  Konzerte  abgerissen, davon allein 110 im letzten Jahr.Nora   und   Madlaina   kennen   sich   dabei   seit Schultagen  in  ihrer  Heimat  Zürich ?und  genau das  ist  es,  was  man  bei  jeder  Performance  spürt.  Außerdem  stehen  sie  seit Teenagertagen    auf   Bühnen,    Holzkästen,    Festivalwiesen,    in    Hinterhöfen,    in ?Dönerläden vor fünf motzenden Gästen? wie Nora sich lachend erinnert oder seit ein paar Jahren auch immer wieder im Studio. Ihr Debütalbum ?Cheers? kam 2018 und mischte überwiegend  deutsche  Lieder  mit  einer  Handvoll  englischer  und  dem wundervollen ?Herz vorus id Wand? auf Schwyzerdütsch. Auf ihrem zweiten Album ?Wünsch mir Glück?haben  Steiner  &  Madlaina  nun  ihre Sprache in Sound, Haltung und Wort gefunden. Und dabei fällt sofort auf: Alle Songs sind auf Deutsch getextet. ?Geplant war das nicht unbedingt?, erzählt Madlaina, ?das kam  eher  so  raus.  Wir  wollten,  dass  die  Texte  mehr  Gewicht  bekommen  und  ich glaube, unsere Ansprüche an uns sind auch ein bisschen gewachsen. Die Songs auf Deutsch  waren  am  Ende die besten. ?Nora ergänzt: ?Es hatte natürlich Einfluss, dass  wir  viel  in  Deutschland  auf  Tour  waren,  oft  mit  Bands,  die  nur  auf  Deutsch singen.? Auf große Tour geht es mit neuem Album dann im Herbst 2021.  ?Wünsch mir Glück? erscheint am 29. Januar 2021 via Glitterhouse Records.",
            "startDateTime": "11/17/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28024602993&a=774719&m=13738"
        },
        {
            "id": "e152",
            "title": "EHRLICH BROTHERS - MAGIC MOMENTS",
            "description": "Es geht wieder los! Die Ehrlich Brothers mit zwei spektakulären  Shows auf Tournee: MAGIC MOMENTS und DREAM & FLY! Nach monatelangem Stillstand kommt Schwung in den Weg zurück zur Normalität.  Viele Maßnahmen und Lockerungen tragen dazu bei, dass bald wieder  Veranstaltungen stattfinden werden. Die Sehnsucht nach Live-Events ist so groß,  dass eine Reihe an Zusatzshows in den Tourplan der Ehrlich Brothers aufgenommen  wurden. Zur Freude ihrer Fans werden die Starmagier gleich mit zwei Shows quer  durch Deutschland unterwegs sein: Mit DREAM & FLY rocken sie die größten  Arenen der Republik, während sie mit MAGIC MOMENTS eine Show für mittelgroße  Arenen konzipiert haben. Alle Veranstaltungen finden unter Berücksichtigung der  jeweils geltenden Corona-Auflagen statt. MAGIC MOMENTS ist ebenso spektakulär wie die größere Tourproduktion DREAM  & FLY in den großen Arenen. Klein heißt bei den Weltrekord-Magiern aber immer  noch 14 statt 22 LKW (40-Tonner). Die beiden Starmagier haben für MAGIC  MOMENTS ein ?Best of? ihrer Lieblingsillusionen aus den Erfolgsshows ?Magie ? Träume erleben?, FASZINATION und DREAM & FLY zusammengestellt. Außerdem  werden sie die Premiere von einigen brandneuen Kunststücken feiern.  MAGIC MOMENTS bietet die Möglichkeit, die Zauberbrüder in kleinerem Rahmen zu  erleben. Es zeichnet die sympathischen Magier aus, dass sie neben den  einzigartigen Großillusionen auch die leisen Töne und das charmant-witzige Spiel mit  den Zuschauern beherrschen.",
            "startDateTime": "6/26/22 13:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=28030608413&a=774719&m=13738"
        },
        {
            "id": "e153",
            "title": "Kat Frankie - The Shiny Things Tour - Neues Datum",
            "description": "Nach einer ausverkauften Elbphilharmonie und einer umjubelten Tour mit dem A-cappella-Projekt B O D I E S Anfang 2020, kehrt Kat Frankie nun zu den Grundlagen zurück: Gitarren, Schlagzeug, Tasten. Ihr kommendes Album knüpft an den Art-Rock der 90er Jahre an, mit einer guten Portion Bombast. Frankie versteht es, bei ihrem Publikum Gänsehaut auszulösen. Es wird Spaß machen, dramatisch und laut sein, und Sie werden es nicht verpassen wollen.Im Oktober 2021 kommt die Ausnahmekünstlerin auf Tour nach Deutschland.Kat Frankie wurde letztes Jahr mit dem VUT Award als ?Bester Act? und dem Preis für Popkultur als ?Beste Künstlerin? ausgezeichnet.",
            "startDateTime": "10/28/21 20:00",
            "venueId": "v22",
            "offerURL": "https://www.awin1.com/pclick.php?p=28054818011&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/y6DKRbxU.jpeg"
        },
        {
            "id": "e154",
            "title": "JULES AHOI - Dear____Tour",
            "description": "Wenn JULES AHOI mit seiner fünfköpfigen Band auf die Bühne geht, schweben alle im Raumauf einer gemeinsamen musikalischen Welle. Bekannt geworden ist der deutsche Singer-Songwriter mit seinem ?Saltwaterfolk?, den er in Liedern wie ?Robinson Crusoe? oder ?Salt& Sun? manifestiert hat. 2020 stehen für JULES AHOI alle Zeichen auf Veränderung,künstlerische Weiterentwicklung und intensive Verarbeitung eines neuen Lebensabschnitts.Das musikalische Ergebnis dieser Umbruchphase: Das im Juni 2020 veröffentlichte Album?DEAR ____?.?Ich habe zum ersten Mal in meinem Leben das Gefühl, angekommen zu sein?, so JULESAHOI. Die erste Singleauskopplung ?3 AM? war der Auftakt einer Platte, auf der vielUnerwartetes und Überraschendes geschieht ? erstaunliche Wendungen und Brüche,reizvolle Variationen überkommener Konventionen, die Integration von Sounds aus demiPhone-Speicher und von Stilmitteln aus ganz unterschiedlichen Genres. Musikalisch ist?DEAR ____? ein gewaltiger Schritt nach vorne geworden ? fort vom reinen Folk und Folkrockhin zu etwas, was man auf der Suche nach Etikettierungen als Alternative Pop, Art Pop oderArt Folk bezeichnen mag.Neben der soundtechnischen Wandlung ist aber auch ein neues Mindset von JULES AHOIerkennbar. Mit 18 Jahren zog er ans Meer ? erst nach Kiel, anschließend an die französischeAtlantikküste. Dort entdeckte er das Surfen für sich und verdiente seine Brötchen alsSurflehrer, mit Modeljobs und Straßenmusik. Das Lebensgefühl an der Küste nutzte er alsInspirationsquelle für eine Vielzahl an Songs. Wo im 2016 erschienenen Debütalbum?Between Lines?, in ?EUPHORIA / fragments? (2017) und der EP ?Echoes? (2019) ehrlichverträumteSoundlandschaften thematisch orientiert am Ausreißen und dem Freiheitsgefühlam Meer zu hören sind, handelt ?DEAR ____? vom Ende des Vagabund-Lebens. JULES AHOIbeschäftigt sich mit dem Schaffen eines Zuhauses und setzt sich mit Gefühlen wieVerständnislosigkeit, Ohnmacht und persönlichen Verlusten wie dem seines Vatersauseinander. Mit 30 Jahren fasst er zusammen, was ihn als Mensch und Künstler bewegt,erschüttert, begeistert, bestürzt hat. Eines der 15 Songbeispiele dafür: Die zweite Single ?Oh,Agnes? ? ein Lied, das von Erziehung und Geschlechterrollen handelt, von Identität undderen Entstehungsprozess.?DEAR ____? ist ohne jeden Zweifel eine zutiefst persönliche Platte. Weil JULES AHOI jedochuniverselle Themen anspricht und eine ebenso emotionale wie klug durchdachteSoundsprache dafür gefunden hat, dürfen sich alle von ihr angesprochen fühlen, die einMindestmaß an Empathie und ein Herz für spannende Kunst haben. Auf den Unterstrich desAlbumtitels kann jeder und jede einen anderen Namen einsetzen. JULES AHOI würde ?Papa?dorthin schreiben, vielleicht auch ?Mama? ? oder den Namen seiner Ex-Freundin.Nachdem er mit seiner Band über 200 Konzerte, zwei fast ausverkaufte Tourneen und vierShowcases auf dem Reeperbahnfestival 2019 gespielt hat, gilt diese ganz persönlicheEinladung auch allen Musikliebhaber/innen, die ihn live erleben wollen.Pressebild(c) Laura Patricia Most",
            "startDateTime": "10/21/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28089104243&a=774719&m=13738"
        },
        {
            "id": "e155",
            "title": "TurnGala 2020/2021 - Bizzar - Die einzigartige Show in Baden-Württemberg und Niedersachsen",
            "description": "Seltsame Gestalten, skurrile Situationen und sonderbare, nie gesehene Bewegungen - das alles präsentiert die Bizzar Tour. Sei es wortlose Komik oder das Außer-Kraft-Setzen physikalischer Gesetze. Wie das Geht? Diese Frage wird sich durch die gesamte Show voller bizarrer Körperkultur ziehen. Erleben Sie Situationen und Momente, die Sie nicht für möglich gehalten hätten.",
            "startDateTime": "12/29/21 14:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=25863801653&a=774719&m=13738"
        },
        {
            "id": "e156",
            "title": "Turbostaat + Support - Rattenlinie Nord",
            "description": "Die neue Platte von Turbostaat erschien Anfang 2020. Es ist das siebte Studioalbum und heißt Uthlande ; ein alter Begriff für die Inseln, Halligen und Marschen vor dem nordfriesischen Festland. Bei diesem Titel und den dazugehörigen Liedern kommen  unterschiedliche Gedanken in den Kopf, die aber miteinander zusammenhängen: man denkt an John Donne, an etwas, das man zwischenzeitlich aus den Augen verloren hat und an Tobert Knopp, den Bassisten der Band.John Donne eröffnete im 17. Jahrhundert eines seiner Prosastücke mit dem Satz ?No Man is an Iland?. Die Doppelbedeutung lässt sich im modernen Englischen nur noch phonetisch nachvollziehen, denn ?Iland? heißt sowohl ?Insel? als auch ?Ich-Land?. Im Deutschen klingt Simmels ?Niemand ist eine Insel? nur halb so aufregend. Es sagt aber dasselbe: ich kann mich noch so sehr als Einzelstück aufführen, wenn etwas von dir weg ist, ist auch etwas von mir weg. Und wenn ich weg bin, ist ein Teil vom Ganzen weg. Vielleicht geht der Titel in die Richtung dieses Bildes. Ein Teil der Uthlande ist ja bereits Einzelstück für Einzelstück im Meer versunken. Ein anderer Teil kämpft dagegen an. Und so sieht es auch ein bisschen mit dem Ich-Land und seiner Umgebung aus, das immer schon der zentrale Bezugspunkt der Turbostaat-Lyrik war. Man erinnere sich kurz an die beiden Vorgänger-Alben. Das letzte behandelte die Frage des menschenwürdigen Lebens, verpackt in die Geschichte des Aufbruchs an den nicht existenten Ort Abalonia. Das vorletzte erzählte von den Orten, an denen die Angst ?regiert?, was ein ziemlich guter Ausdruck für das ist, was die Angst macht.Und nach Utopie und Dystopie rückt auf dieser Platte nun eine dritte Variante in den Vordergrund: Übrigbleiben und Beharren im Mosaik der Möglichkeiten. Wo diese Möglichkeiten schon mal nicht liegen, beschreibt etwa ?Brockengeist?, eines der sehr poppigen, fließenden Stücke der Platte. Mit Blick auf das gegenwärtige Popkultur-Geschehen heißt es dort fast lakonisch: ?Wer den Schnee umarmt, wird die Kälteakzeptieren?. Und dann eins mit ihr. In diesem Sinne lässt sich das am Ende eingestreute Ton Steine Scherben-Zitat wohl auch als alternative Standortbestimmung verstehen.Turbostaat sind ein Role Model für eine ganze Generation von deutschsprachigen Post-Punk-Bands. Manche Leute sind mit ihnen älter geworden, manche haben sie dabei aus den Augen verloren. Manche sind selbst schon wieder weg. Wer nach 21 Jahren noch da ist, gehört zu den Übriggebliebenen und den Beharrlichen. Die ersterelevante Frage ist dabei, wie man das musikalisch meistert. Wer die Entwicklung der Band verfolgt hat, wird sagen, dass sie sich gleich zu Beginn einen sehr soliden eigenen musikalischen Rahmen und Stil aufgebaut hat, der über die einzelnen Platten hinweg immer wieder etwas justiert und gut dosiert weiterentwickelt wurde. Und jetzt?Gibt es noch die Schafe auf dem Deich, den Leuchtturm, den Nebel und immer diesen Wind. Aber man ist auf dem falschen Weg, wenn man in diesen Zutaten bloß ?den Norden? als Landschaft und Region erkennen will und nicht Bilder für die Orte, an denen sich das soziale Wetter zusammenbraut. Es gibt immer noch diese fast privat wirkende Politisierung, deren Botschaft einen nicht gleich anspringt. Aber man muss sich auf dieser Platte schon sehr anstrengen, sie zu überhören. Wie in dem wütenden und energischen ?Rattenlinie Nord?, in dem der aktuelle völkische Frühling von seinem Ende aus gedacht wird. Am Ende der von ihnen angerichteten Verheerungen trifft man die Bande immer auf der Flucht ? vor allem vor der Verantwortung. Und dann, auch das gehört zur illusionslosen Wahrheit, geht es wieder von vorne los.",
            "startDateTime": "10/28/21 20:00",
            "venueId": "v30",
            "offerURL": "https://www.awin1.com/pclick.php?p=28139495405&a=774719&m=13738"
        },
        {
            "id": "e157",
            "title": "Malaka Hostel - Global Umpa 2022",
            "description": "Malaka Hostel:Global Umpa Music! Das ist völlige Eskalation auf der Bühne! Die Kojoten rufen zumTanze!Wenn der Wahnwitz brodelt, fühlen sich die Weltenbummler zuhause. Und ihr Zuhause,das ist zuallererst die Bühne. Doch was heißt hier Bühne? Wenn Malaka Hostel auftreten,reißen sie spielend die unsichtbare Mauer zwischen Band und Publikum nieder.Sie singen spanisch, deutsch, tschechisch oder englisch ? Musik ist ihre ?WorldLanguage?. Folkloristisches, egal ob vom Balkan oder aus den Anden, findet seinen Platz? getragen von Malaka Hostels groovenden Beats, während die aus Trompeten undMundharmonika bestehende Brass Section lossprudelt. Da finden Ska, Polka, BalkanBeats und Rockriffs genauso gut zusammen wie Gipsy-Swing, Folk oder griechischerRebetiko.Frollein Smilla:Die achtköpfige Band Frollein Smilla aus Berlin beweist mit ihrem zweiten Studioalbum Freak Cabareterneut, dass sie keinem gängigen Genre zugeordnet werden kann. Zu hören sind 13 extrem unterschiedliche,tanzballadensouljazzpiratinnenliebesfunkige neue Songs. Dennoch verbindet diese 13 Tracks derbläserlastige Smilla-Sound und Desna Wackerhagens einprägsame Stimme. Ein roter Faden, welcherbereits 2016 auf Golden Future etabliert wurde. Gesungen wird wieder viel mehrstimmig und auf Deutschoder Englisch, diesmal sogar auch einmal auf Spanisch. Que Podemos Cambiar stellt die Frage was wirmachen können, um unsere Welt zu verändern ? vielleicht sollten eben nicht nur Genre-Grenzen abgeschafftwerden. Die Urbesetzung ? Schlagzeug, Klavier, Akkordeon, Akustikgitarre, Posaune, Trompete und Gesang? wurde durch E-Bass, Kontrabass, E-Gitarre, Klassische Gitarre und Flügelhorn erweitert.",
            "startDateTime": "3/11/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867286433&a=774719&m=13738"
        },
        {
            "id": "e158",
            "title": "Wolfgang Haffner & Band - Live 2021",
            "description": "Wolfgang Haffner ist ein exzellenter, ja ein begnadeter Schlagzeuger, das weiß man längst nicht nur in der Jazzwelt. Zahlreiche prominente Zusammenarbeiten mit unterschiedlichsten Künstlern und Bands, bei denen der fränkische Musiker seine Spuren hinterlassen hat - national wie international - sprechen für sich und auch das Trophäenregal mit Auszeichnungen und Preisen füllt sich zusehends. Er wird gelobt und verehrt für seine unglaubliche technische Brillanz und seine geniale Musikalität, die besonders bei seinen eigenen Kompositionen und Projekten zur Geltung kommt.Mit seinen Alben unter eigenem Namen gehört Haffner heute zu den erfolgreichsten deutschen Jazzmusikern und -bandleadern. Er ist ein ausgesprochener Meister darin, Stimmungen zu erzeugen und weiterzugeben, den Hörer mit auf eine Reise in seine Klangwelten zu nehmen. So darf man es auch bei seinem neuesten Projekt mit demTitel ?Kind Of Tango? (VÖ: 28.02.2020), dem letzten Teil seiner Trilogie mit akustischer Band erwarten. Deren ersten beiden Teile ?Kind Of Cool? (2015) mit 50s Jazz- und Bop Exkursionen und ?Kind Of Spain? (2017), wo traditionelle spanische Musik mit Jazz zusammen trifft, sind bereits mit großem Erfolg auf dem Label ACT erschienen, mit ?Kind Of Spain? tourte er außerdem mehr als zwei Jahre durch Europa, Asien undAfrika.",
            "startDateTime": "7/26/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28276210533&a=774719&m=13738"
        },
        {
            "id": "e159",
            "title": "Christian Ehring - Antikörper",
            "description": "Wer hätte damit gerechnet, dass die Natur so hinterhältig zuschlägt? Ein saudummes und zugleich perfides Virus verhindert von einem Tag auf den anderen, dass man noch unbefangen leben, arbeiten, reisen, feiern, lieben kann. Eine Unverschämtheit. Eine Zumutung. Ja, eine narzisstische Kränkung. Nichts ist mehr wie es war. Ganz normale Menschen sagen plötzlich seltsame Dinge wie ?Kontaktnachverfolgung?, ?Polymerase-Kettenreaktion? oder ?Markus Söder könnte ich mir als Kanzler vorstellen?.   Obwohl Christian Ehring an diesem Abend über alles andere lieber sprechen würde als über SARS-CoV-2, holt ihn das Thema immer wieder ein. Weil die Pandemie nun mal alle Facetten des Politischen und des Privaten berührt - und weil in der Krise nicht nur alte Gewissheiten zerbröseln, sondern leider auch alte Freundschaften.Ehrings neues Bühnensolo ist ein hintergründiger satirischer Monolog über eine Gesellschaft im Krisenmodus, über Kommunikationsprobleme, Verschwörungserzählungen, Cancel Culture und den Versuch, im Gespräch zu bleiben, wo es keine gemeinsame Sprache mehr gibt.Christian Ehring ist Moderator der NDR-Satiresendung ?Extra 3? und Side-Kick von Oliver Welke in der ?ZDF heute Show?. Seine bissigen Analysen der politischen Großwetterlage gehören für viele zum wöchentlichen Pflichtprogramm.",
            "startDateTime": "3/27/22 19:00",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=28320784909&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/jzwP1xgw.jpeg"
        },
        {
            "id": "e160",
            "title": "Sebastian Pufpaff - Wir nach",
            "description": "Gretel fing an zu weinen und sprach: ?Wie sollen wir nun aus dem Wald kommen?? Hänsel aber tröstete sie: ?Wart nur ein Weilchen, bis der Mond aufgegangen ist, dann wollen wir den Weg schon finden.?Wissen Sie was, die Welt geht unter und wir fahren mit Vollgas darauf zu, ja, das stimmt. Aber wir sind die Lenker. Sie haben das Steuer in der Hand. Die Richtung ist nicht in Stein gemeißelt, vorgegeben oder gar eine Einbahnstraße. Die Richtung ist unsere Entscheidung. Also, packen Sie die Sonnencreme ein, nehmen Sie ihre besten Vorurteile mit und lassen Sie uns auf eine Reise gehen. Wohin? In die Mitte des Humors, denn da entspringt der Sinn des Lebens: Lachen! Ich verspreche Ihnen anzukommen, denn dafür stehe ich mit meinem Namen. Ihr Pufpaff.P.S. Sorry, aber es kann sein, dass Sie auf dem Weg gehörig was abkriegen, aber das lachen wir weg. Keine Sorge!mehr Infos: http://www.pufpaff.deFoto: Manuel Berninger",
            "startDateTime": "11/13/21 19:30",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=28372651065&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/nTtT6C6C.jpeg"
        },
        {
            "id": "e161",
            "title": "Simon Pearce - PEA(r)CE on Earth",
            "description": "Simon Pearce hat immer noch nicht genug oder besser gesagt, er fängt jetzt erst richtig an. Nach dem großen Erfolg seines ersten abendfüllenden Solo Programms ?Allein unter Schwarzen? kommt der Prince Charming? (Süddeutsche Zeitung) der neuen Kabarett & Comedy Szene mit seinem zweiten Streich daher. PEA®CE on Earth! Den Weltfrieden will er nicht auf der Bühne ausrufen, aber sich zumindest auf die Suche machen, wie man seinem inneren Frieden ein bisschen näher kommen kann. Eigentlich bringt er, als Sohn einer bayerischen Volksschauspielerin und eines Nigerianers, das perfekte Rüstzeug für den inneren Frieden mit. Ein bisschen Hakuna Matata hier und ein bisschen ?Sei Ruah haben? da. Aber leider stört immer irgendetwas diese ?innere Ruhe?. Menschen, die auf der Rolltreppe nebeneinander stehen, Hausmeister mit dem Laubbläser um acht Uhr früh, Vorurteilsüberladene Menschen, oder einfach die unbehagliche Situation in einem Flugzeug zu sitzen. Ja, meistens ist es Angst in ihren verschiedenen Facetten. Mit einer fulminanten Mischung aus lustigen Anekdoten, die einem seine persönlichen Ängste näherbringen, und gesellschaftskritischen Querverweisen, schafft es der ?Eddy Murphy aus Puchheim? (Freisinger Tageblatt) gleichermaßen zum Lachen, wie auch zum Nachdenken anzuregen und vielleicht eine kleine Anleitung zu geben, wie man ?zur Ruhe? kommt. Simon Pearce tut, was er am liebsten macht. Er nimmt das Leben nicht zu schwer und teilt seine Erfahrungen, lebhaft erzählt und pointiert, mit dem Publikum. Er hat einfach Spaß; am Leben und auf der Bühne und daran lässt er einen gerne Teilhaben. Und wenn er die Menschen damit auch noch zum Nachdenken anregen kann, sind die besten Voraussetzungen für sein großes Ziel ja schon mal gegeben: Pea(r)ce on Earth!",
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
            "title": "Neujahrskonzert - Streichquintette von Dvorák und Mendelssohn",
            "description": "Programm:Felix Mendelssohn Bartholdy Streichquintett A-Dur, op. 18Antonín Dvo?ák Streichquintett Es-Dur, op. 97Ebenso wie in der berühmten »Sinfonie aus der Neuen Welt« verbindet Dvo?ák im Streichquintett tschechische Volklore mit Reiseeindrücken und lässt daraus seine »amerikanische« Klangsprache entstehen: Zugleich kunstvoll und immer spontan wirkend.Nicht minder mitreißend ist das von jugendlicher Frische sprühende Streichquintett von Mendelssohn. Und zugleich ein sehr persönlicher Moment: Der langsame Satz, quasi ein »Lied ohne Worte«, geschrieben als musikalischer Nachruf für einen Freund, den Geiger Eduard Ritz. Im Scherzo dann wieder der typisch Mendelssohn?sche Sommernachtstraum-Klang.Das Frielinghaus Ensemble vereint befreundete und international ausgezeichnete Kammermusiker, Solisten und Orchestermusiker, die in unterschiedlichen Besetzungen aus Deutschland und dem europäischen Ausland zusammen kommen.Fester Bestandteil ist eine jährlich stattfindende Norddeutschland-Tour neben weiteren Konzerten in ganz Deutschland und der Schweiz. 2018 gab das Ensemble sein Elbphilharmonie Debüt und ist seitdem regelmäßig im Konzertsaal an der Elbe zu hören. Zudem dokumentieren zahlreiche Aufnahmen das künstlerische Schaffen des Ensembles.Frielinghaus EnsembleGustav Frielinghaus, Leonard Fu, ViolineAlejandro Regueira Caumel, Sào Soulez Larivière, ViolaJakob Schall, Violoncello»Musik sicher genießen«Der Saalplan ist der aktuellen Situation angepasst und berücksichtigt zwischen allen Doppel- und Einzelplätzen den 1,5m Mindestabstand.",
            "startDateTime": "1/7/22 20:00",
            "venueId": "v24",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551885531&a=774719&m=13738"
        },
        {
            "id": "e164",
            "title": "Die Toten Ärzte - Geht nicht, gibt´s nicht!",
            "description": "Wenn preisgekrönten DIE TOTEN ÄRZTE aus ihrer grellbunten Partygruft steigen, erwartet euch ein Powerpaket der Toten Hosen und Ärzte Songs aus nahezu 35 Jahren Rockgeschichte. Das Blitzgewittergemisch aus No 1 Hits des Dauerbrenner- Doppelpacks konnte in den zurückliegenden 17 Jahren bei über 800 Konzerten weit mehr als 1 Millionen Zuschauer in Ihre wundervolle Welt der ?DIE TOTEN ÄRZTE? entführenDie Presse bezeichnet sie im Sinne des Ärzte Slogans als ?die kurioseste Coverband der Welt? bezeichnet, die Band selbst sieht sich eher als eine Riesentüte Spaß.Am besten: einfach mal selber dabei sein sich überzeugen!",
            "startDateTime": "2/4/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867291179&a=774719&m=13738"
        },
        {
            "id": "e165",
            "title": "El Flecha Negra - Live 2021",
            "description": "Im Sommer 2014 starteten El Flecha Negra zu dritt mit Gitarre, Kontrabass, Cajon und dreistimmigem Gesang als Straßenmusiker und entwickelten sich zu einer gefragten Live-Band, die für  ihre energiegeladene Bühnenshow bekannt ist. 2015 erschien El Flecha Negras Debütalbums ?Schwarzwald?. Sie spielten mehr als 200 Konzerte in Deutschland und dem benachbarten Ausland. 2016 unternahm die Band eine gefeierte Tour in Chile. Mit den Aufnahmen zu ?Tropikal Passport? entwickelte sich der Bandsound weiter. Mit zwei Trompeten, traditionellen Flöten und psychedelischer Chicha-Gitarre wuchs El Flecha Negra zu einem Quintett -  Eine charismatische, multikulturelle Band aus vier verschiedenen Ländern und zwei Kontinenten.In den dreizehn Songs auf Tropikal Passport? erzählen die Musiker von El Flecha Negra von ihren Wünschen und Träumen wie dem Zusammenwachsen der Kontinente, von Freiheit und Liebe, vom Aufbrechen und Reisen sowie von der Freiheit, bleiben zu dürfen und zu genießen - es sind ihre persönlichen Geschichten, die sie dorthin gebracht haben, wo sie heute stehen.",
            "startDateTime": "11/26/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28450210357&a=774719&m=13738"
        },
        {
            "id": "e166",
            "title": "Silje Nergaard - Live 2021",
            "description": "Die Phalanx Norwegischer Jazz-Sängerinnen ? wobei man das Wort Jazzsängerinnen bitte nicht auf die Goldwaage legen möge ? ist Legende. Ihr Aushängeschild seit vielen Jahren heißt Silje Nergaard.Sie gehört zu den erfolgreichsten europäischen Jazzsängerinnen. Schon als 16-Jährige trat sie 1982 auf dem berühmtesten Festival ihrer Heimat auf ? Molde. Ihre Musiker: die verwaiste Band von Jaco Pastorius. Dann entdeckte Pat Metheny die Sängerin und verhalf ihr zu ihrem ersten Plattenvertrag. Seit ihrem Debütalbum ?Tell Me Where You?re Going?, mit dem sie 1990 Platz 7 der norwegischen Pop-Charts erklomm, ist sie aus der genreübergreifenden skandinavischen Musikszene nicht mehr wegzudenken. Sie zählt zu den ganz wenigen Protagonisten des Jazz, die sich auch in der Popwelt großer Beliebtheit erfreuen, denn jede Art von Scheuklappen sind ihr fremd.Die Norwegerin mit der sanften Stimme ist für ihren gefühlvollen Perfektionismus bekannt und dafür, dass sie sich in ihren Liedern auch ernsthafte Gedanken zum Leben in unserer Welt macht. Für ihr neuestes Werk und ihre Tournee hat sie unter dem Titel ?For You A Thousand Times? Lieder geschrieben, die in mitreißenden Melodien von vergangenen Begegnungen und der Kraft der Erinnerung inspiriert wurden.",
            "startDateTime": "10/31/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28456693463&a=774719&m=13738"
        },
        {
            "id": "e167",
            "title": "The HAMBURG BLUES BAND feat. Chris Farlowe & Krissy Matthews - Friends for a LIVEtime Vol. II-Tour",
            "description": "39 Jahre St. Pauli Blues! Seit fast 4 Jahrzehnten touren fünf Typen durch überfüllte Clubs, die mit zum Besten gehören, was die europäische Bluesszene zu bieten hat. Die Hamburg Blues Band steht für intensiven, clever arrangierten und live umwerfenden Roots Blues, der regelmäßig Puristen ins mentale Wanken bringt. Denn die die Truppe um den oft mit Joe Cocker verglichenen Sänger Gert Lange, vermengt brettharten Gitarren-Bluesrock so spielfreudig wie traditionsbewusst mit Soul, Psychedelic, Rhythm & Blues, Boogie & sogar Ausflüge in Jazz Gefilde.",
            "startDateTime": "1/5/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28479604129&a=774719&m=13738"
        },
        {
            "id": "e168",
            "title": "Guided City Walk Freiburg - Open Tour Freiburg",
            "description": "What will I see on a Freiburg Germany open tour?After welcoming you to Freiburg your guide will introduce the modern Freiburg to you with Key numbers about the city and its people. From there you will go to Gerichtslaube, which is the oldest administrative building in Freiburg. On the way to Freiburg Cathedral you stop at the Walfischhaus, home of Erasmus of Rotterdam during the days of the reformation. The highlight of the Freiburg Germany tour is the cathedral, officially called the Freiburger Münster. After admiring the historic merchant hall and passing through the Konviktstrasse you will finally reach the Schwabentor, one of the two remaining city gates of Freiburg.",
            "startDateTime": "6/19/21 12:30",
            "venueId": "v14",
            "offerURL": "https://www.awin1.com/pclick.php?p=28485609155&a=774719&m=13738"
        },
        {
            "id": "e169",
            "title": "Viktoria Tolstoy - Stations Tour 2021",
            "description": "Kristallklar, dynamisch, wild und vibrierend, trotzdem gleichzeitig prosaisch und erdverbunden ? eine der brillantesten Stimmen Skandinaviens: Wenn Viktoria Tolstoy einen Song vorträgt, interpretiert sie ihn nicht einfach, sie formt und prägt ihn auf einzigartige Weise. 2020 kehrt sie nach Deutschland zurück, um ihr neues Album ?Stations? (VÖ: 31.01.20/ACT Music) vorzustellen. ?Es geht ums Reisen,? erklärt Tolstoy, ?von Station zu Station, wie in meinem Leben als Musikerin. Aber nicht nur um das Unterwegssein des Körpers, sondern auch des Geistes. Im Raum wie in der Zeit. Mit alten und neuen Songs, auch Originals, die eigenes für dieses Album und sein Thema entstanden sind. Es liegt ganz im Auge des Betrachters, wie er diese musikalischen Reisen interpretiert. ? Eine künstlerische Ader hat Tradition in der Familie der schwedischen Sängerin. Ihr Ururgroßvater war der legendäre russische Nationaldichter Leo Tolstoi. Schon die sehr junge Viktoria machte ihren Weg durch die Stockholmer Jazzclubs und spielte mit führenden schwedischen Jazzern wie Svante Thuresson. 1994, mit 20, nahm sie ihr erstes Album auf. Zwei Jahre später, mit dem Album ?För Älskad? wurde sie in ihrer Heimat über Nacht zum Popstar. Was den Boden bereitete für die Zusammenarbeit mit Esbjörn Svensson und e.s.t.: Er produzierte und schrieb die Songs für ?White Russian?, die erste skandinavische Platte, die beim legendären Blue Note Label erschien. Auch Nils ?Mr. Red Horn? Landgren produzierte und spielte mit ihr. Seither hat sich Tolstoy als eine der führenden Stimmen des Gegenwartsjazz etabliert.",
            "startDateTime": "10/24/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28485609207&a=774719&m=13738"
        },
        {
            "id": "e170",
            "title": "Triosence - Tour 2022",
            "description": "Ob hierzulande oder irgendwo sonst auf der Welt ? überall, wo die drei Musiker von triosence auftreten faszinieren und begeistern sie ihr Publikum. ?Der neue Meilenstein in Sachen Jazztrio?, ?Ein unter die Haut gehendes Highlight!? und ?Exempel für musikalische Dreieinigkeit? sind nur einige der Pressestimmen, die das Trio auf internationaler Ebene feiern ? und seit ihrem Gründungsjahr 1999 dürfen triosence stolz auf eine beeindruckende Trophäensammlung sein ? vom 1. Preis bei Jugend jazzt, über diverse Kultur- und Kompositionspreise bis hin zum besten Neueinstieg in die internationalen Jazzcharts in Deutschland reicht ihr Portfolio.Dabei sind die drei Musiker von Anbeginn sowohl musikalisch, als auch im Hinblick auf ihre Karriere ihren ureigenen Weg gegangen - haben sich von ihrer Intuition leiten lassen und sind ihren Idealen stets treu geblieben.Unverwechselbar der Stil, den die Band entwickelt hat und den sie selber als ?songjazz? bezeichnen. Denn was die Musik des Trios neben der Gleichberechtigung der Instrumente vor allem auszeichnet sind die Stärke und Klarheit ihrer Melodien. Eine Einfachheit und Klarheit, die niemals banal oder gar einfältig daherkommt, sondern durch diese beeindruckend reduzierte Struktur in die Schönheit und Tiefe der Musik abtauchen lässt. Und dem Hörer damit ganz viel Raum für Emotionen, Gedanken, gar Träume schenkt. Zu einem hohen Grad lyrisch und poetisch bilden die Melodien den Kern aller Kompositionen. In Kombination mit der stilistischen Bandbreite aus Jazz, Fusion, Folk, Pop und Worldmusic überzeugt dies nicht nur eingefleischte Jazzkenner, sondern auch jene, die mit Jazz bislang eher wenig anzufangen wussten.Zum 20-jährigen Band-Jubiläum präsentieren triosence nun ihr brandneues Album Scorpio Rising ? und beweisen damit einmal mehr, welch intuitive Kraft, wie viel alles miteinander verbindende Vielfalt der Musik innewohnen kann. Einem nahezu philosophischen Ansatz folgend, setzt Bernhard Schüler sich hier in seinen Kompositionen mit der universellen Verbundenheit allen Seins auseinander. Der Mensch als Teil eines sich zu allen Zeiten wechselseitig beeinflussenden kosmischen Geschehens ? wie es seit tausenden von Jahren von der Astrologie beschrieben wird. Dabei lassen triosence jede theoretische Schwere dieser großen Thematik musikalisch weit hinter sich. So poetisch beschwingt wie kraftvoll energiegeladen verbinden sie sich in ihren Klangwelten ? wohl wissend, das der Zuhörer stets unverzichtbarer Teil ihres musikalischen Kosmos ist...!",
            "startDateTime": "2/13/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28517999511&a=774719&m=13738"
        },
        {
            "id": "e171",
            "title": "Beatrice Egli & BAND LIVE 2020",
            "description": "?Deutschland sucht den Superstar?, ?Echo? und ?Liebling des Jahres?-Award Gewinnerin Beatrice Egli kommt 2020 nach Ludwigsburg. Mit Hits, wie ?Mein Herz?, ?Irgendwann? und ?Herz an? feiert die Schlagersängerin in Deutschland, Österreich und der Schweiz Chart­erfolge und begeistert ihre Fans. Nach einer kleinen Auszeit meldet sich die fröhliche Schweizerin 2019 mit positiven Erfahrungen und dem neuen Album ?Natürlich!? zurück.",
            "startDateTime": "12/7/21 19:00",
            "venueId": "v25",
            "offerURL": "https://www.awin1.com/pclick.php?p=28539652171&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/ApdVwZOg.jpeg"
        },
        {
            "id": "e172",
            "title": "Eva Klesse Quartett - creatures & states Tour 2020",
            "description": "Der Zweijahresrhythmus bleibt gewahrt, auch beim vierten Album des Eva Klesse Quartetts. Ende Oktober 2018 erschien Miniatures - Ten Songs For Chamber Jazz Quartet, begleitet von begeisterten Medienreaktionen. Viele lobten besonders die traumwandlerisch sicheren Interaktionen der Band und ihre charakteristische, variable Klangsprache. ?In den Stücken dieses Albums ist kaum ein Takt so, wie man ihn erwarten würde. Kein Klischee. Kein Abfeiern von Effekten. Sondern die Lust am instrumentalen Gespräch,? konstatierte BR-Klassik und Matthias Wegner attestierte im Deutschlandfunk Kultur: ?...ein wunderbarer Gesamtsound: unaufgeregt, aber dennoch voller Tiefe.? Ulrich Steinmetzger notierte in der Leipziger Volkszeitung: ?Die kontinuierliche Weiterentwicklung der Band, die auf feine Details und milde Stimmungen setzt und nicht auf vordergründige Überrumpelung, ist höchst faszinierend.?Nun also das nächste Kapitel dieser künstlerischen Erfolgsgeschichte: creatures & states. Erneut machtdie reflektierte, 2015 mit einem Jazz-Echo ausgezeichnete Band ihren Fokus klar: das musikalischeErzählen imaginärer Geschichten, die eigene Erlebnisse abstrahieren und sich aus Emotionen speisen.Strategische Überlegungen spielen dabei entschieden keine Rolle. Zentral ist hingegen der gemeinsamweiterentwickelte Sound, der sich bewusst von kurzlebigen Trends fernhält. Weil das, was heute hip ist,morgen schon von der nächsten Mode überholt sein kann.",
            "startDateTime": "1/16/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27216597173&a=774719&m=13738"
        },
        {
            "id": "e173",
            "title": "Matou Noir - Kinderkonzert",
            "description": "Endlich darf der schwarze Kater wieder nach draußen! Am 9. Oktober 2021 kannst du ihn gleich zwei Mal beobachten: Um 15 Uhr streunt er mit seinen kleinen und großen Freunden um die Bühne und hat viele verrückte Instrumente mitgebracht. Wie klingt ein Kazoo? Was kommt aus der Shruti Box? Wer oder was ist denn die Bombo? Lasst uns gemeinsam zu den Klängen der Welt tanzen und singen!Um 20 Uhr schmeißt sich unser Kater dann in Schale und spielt auf, was er bei seinen Streifzügen auf der Straße gefunden hat: Ein bisschen Balkan, ein wenig Klezmer, einige Tango-Reste, und immer ein Tanzbein in der Luft!Christian Armin (Kontrabass), Christian Buchholz (Cello, Akkordeon), Camilla Chimiak (Gesang, Kazoo), Ladislav Douda (Akkordeon), Johannes Kettel (Gitarre), Philipp Kurzke (Cajón, Percussions) und Philipp Tepper (Geige) laden in den Tanzkeller zur Musikjonglage.",
            "startDateTime": "11/5/22 15:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28539653917&a=774719&m=13738"
        },
        {
            "id": "e174",
            "title": "Matou Noir - Abendkonzert",
            "description": "Endlich darf der schwarze Kater wieder nach draußen! Am 9. Oktober 2021 kannst du ihn gleich zwei Mal beobachten: Um 15 Uhr streunt er mit seinen kleinen und großen Freunden um die Bühne und hat viele verrückte Instrumente mitgebracht. Wie klingt ein Kazoo? Was kommt aus der Shruti Box? Wer oder was ist denn die Bombo? Lasst uns gemeinsam zu den Klängen der Welt tanzen und singen!Um 20 Uhr schmeißt sich unser Kater dann in Schale und spielt auf, was er bei seinen Streifzügen auf der Straße gefunden hat: Ein bisschen Balkan, ein wenig Klezmer, einige Tango-Reste, und immer ein Tanzbein in der Luft!Christian Armin (Kontrabass), Christian Buchholz (Cello, Akkordeon), Camilla Chimiak (Gesang, Kazoo), Ladislav Douda (Akkordeon), Johannes Kettel (Gitarre), Philipp Kurzke (Cajón, Percussions) und Philipp Tepper (Geige) laden in den Tanzkeller zur Musikjonglage.",
            "startDateTime": "11/5/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28539653919&a=774719&m=13738"
        },
        {
            "id": "e175",
            "title": "Emil Brandqvist Trio - Tour 2021",
            "description": "Das Geheimnis dieses Trios liegt dabei in der raren Gabe, einen ganz eigenen Sound entwickelt zu haben, der geprägt wird durch die filigranen Klangmalereien von Namensgeber Emil Brandqvist am Schlagzeug und den mal sensibel dahingetupften, mal rasant rollenden Neo-Klassizismen des finnischen Pianisten Tuomas A. Turunen. Die stoisch treibende Kraft im Kontrabass-Spiel von Max Thornberg verleiht dem Trio dabei einen unverwechselbaren Körper. Wie gewohnt zeichnet sich für die meisten Kompositionen Emil Brandqvist verantwortlich, aber es ist schon gute Tradition, dass der in Südfrankreich lebende Tuomas A. Turunen auch kompositorisch mitwirkt.",
            "startDateTime": "10/19/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28555131415&a=774719&m=13738"
        },
        {
            "id": "e176",
            "title": "Tingvall Trio - Tour 2022",
            "description": "Piano Trios gibt es weltweit viele, die klassische Basisformation des Jazz hat in den letzten Jahres ein fulminantes Revival erlebt. Doch wenn man nach der Essenz aller derzeit tourenden Trios dieser Bewegung sucht, sticht, wenn es um die Akzeptanz beim Publikum und den unverwechselbaren, eigenständigen Sound geht, aus internationaler Perspektive das Tingvall Trio aus Hamburg hervor.Wie nur wenige vor Ihnen haben sie einen ganz eigenen, wiedererkennbaren Sound entwickelt, der auf griffigen, bildhaften Melodien und der  unverwechselbaren Dynamik zwischen poetischen Balladen und energetischen Rhythmen basiert, die auch mit Elementen aus Rock und Pop liebäugeln. Nachdem Ihr letztes Album No.1 der Jazzcharts war und sogar die Popcharts erreichte, wenden sie sich mit dem brandneuen Programm auch verstärkt weltmusikalischen Welten zu, die zwischen arabischen Sounds und lateinamerikanischer Fröhlichkeit pendeln: DANCE",
            "startDateTime": "5/8/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28555131419&a=774719&m=13738"
        },
        {
            "id": "e177",
            "title": "René Sydow - Heimsuchung",
            "description": "René Sydow sucht wieder die Kabarettbühnen heim. Sein viertes Programm sollte gleichzeitig sein heiterstes werden. Ein fröhliches Feuerwerk der Boshaftigkeit gegen Politiker, Prominenz und Political Correctness. Doch leider steht auch noch die ?Heim- Suchung? für den eigenen Opa an und angesichts des aktuellen Pflegenotstands gibt es zumindest aus privater Sicht keinen Anlasszur Heiterkeit.Wie können wir in Würde altern? Was ist ein Menschenleben überhaupt wert? Und sind das nur private Fragen oder ist das Private doch politisch? Ist das noch Kabarett oder geht es schon um Leben und Tod? Und warum ist dieser Abend trotzdem so erschreckend lustig geworden??Solche Männer braucht das Land. Zornige Intellektuelle, die das Volk aus seiner Lethargie peitschen. Die moralisch sind, ohne zu moralisieren. Unerbittlich in ihrer Analyse, aber immer menschenfreundlichund optimistisch. René Sydow ist all das.? Bergsträßer Anzeiger?Dieter Hildebrandt hätte gejubelt.? Die GlockeSydow hat zahlreiche Preise erhalten, u.a. den Klagenfurter Herkules2018, Jury- und Publikumspreis, Tegtmeiers Erben 2017,Publikumspreis, den Schwäbischen Kabarettpreis 2017 sowieden Deutschen Kabarett-Preis 2016, Förderpreis.2018, Jury- und Publikumspreis, Tegtmeiers Erben 2017,Publikumspreis, den Schwäbischern Kabarettpreis 2017 sowieden Deutschen Kabarett-Preis 2016, Förderpreis.Foto:Steffen Suuck",
            "startDateTime": "9/12/21 19:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585169351&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/hHP7arVU.jpeg"
        },
        {
            "id": "e178",
            "title": "Andy Strauß - Life of Andy",
            "description": "?Life of Andy? ist das neue Bühnenprogramm von Andy Strauß. Ende 2019 bekam er während der U20-Meisterschaften im Poetry Slam einen Preis für sein Lebenswerk und das Brechen sämtlicher Bühnenpoesie-Regularien überreicht. Jetzt ist der Poetry Slammer, Techno-DJ und Stand-Up-Chaot in der Midlife-Crisis angekommen und macht das beste draus, nämlich: Sich drüber lustig.Ein Abend so unvorhersehbar wie das Leben selbst. Ob Life-Hörspiel, Erzählungen oder bisher noch nicht dagewesene Bühnenkunst-Form: in allem macht der Vogel eine so gute Figur, wie sie viele Menschen nach sieben Jahren Yoga nicht beherrschen. Und das, obwohl er selbst gar kein Yoga macht. Oder doch?Wenn sie nicht vorbei kommen, werden sie es nicht herausfinden.Mehr Infos: http://establishmensch.deFoto: Matthias Stehr",
            "startDateTime": "9/10/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170045&a=774719&m=13738"
        },
        {
            "id": "e179",
            "title": "Mathias Tretter - Sittenstrolch",
            "description": "?Ich war immer neidisch auf Komiker in Diktaturen ? wenn jeder Witz Dein letzter sein kann, fühlst Du Dich gebraucht.? Soweit ist es glücklicherweise noch nicht, aber die schiere Anzahl ehrenamtlicher Bedenkenträger zeigt ihm doch: Selten war ein Strolch so nötig wie heute! Tweets werden aus sittlicher Überlegenheit getippt und kommen mit der Moralkeule. ?Mein siebtes Solo. Das erste mit Humor?, verspricht Tretter, über den die Presse schreibt: ?Wer es nicht schafft, sich von der Couch aufzuraffen, wird auch nie erleben, wie unterhaltsam, erhellend und herrlich komisch so ein Kleinkunstabend mit politischem Kabarett sein kann. Tretter schafft es bei gleichbleibend hohem intellektuellem Anspruch in einem derart unverschämt locker-nonchalanten Duktus zu reden und zu spielen, dass man in Gedanken noch kein halbes Mal abschweift.?",
            "startDateTime": "9/18/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170071&a=774719&m=13738"
        },
        {
            "id": "e180",
            "title": "Carmela de Feo - Allein unter Geiern",
            "description": "Seit Jahren ist La Signora in Sachen Unterhaltung auf den morschen Brettern, die die Welt bedeuten, unterwegs. Ob auf einem toten Esel zum Erfolg oder mit einem lahmen Gaul durchs Leben, La Signora ist für jede Situation mit ihrem Friedhofsmodenchic perfekt gekleidet.Klein, Hummeltaile und Haarnetz! Tödlicher Gags pflastern ihren Weg, die Leute geiern sich einen ab, aber nach der Show kräht kein Aas mehr nach ihr. Wie allein kann man sein, wenn selbst die Geier nicht mehr über einen kreisen?Die Rabattmarke des deutschen Kabarett zeigt in ihrem neuen Programm, dass Schicksal durchaus Spaß machen kann. Wenn das Leben in ruhigen Bahnen verläuft, ist La Signora zur Stelle und stellt die Weichen auf Chaos. Atheisten werden gläubig und Heilige fallen der Wollust anheim. La Signora ist eine anbetungswürdige Verführerin, aber auch eine verführte Angeberin. Da wo andere sich bemühen abzunehmen, legt La Signora noch einen drauf. Justitia ist blind, aber die Schicksalsgöttin mit ihren neapolitanischen Hühneraugen hat den Durchblick.Doch allen Geiern sollte klar sein: Um sich auf eine Henkersmahlzeit zu freuen, braucht man schon eine gute Portion Galgenhumor! Außerdem, wahre Schönheit von innen! Und wenn nicht, dann setzt man sich eben allein unter Geiern ein Haarnetz auf!La Signora - Nie eingeladen, aber überall dabei.Mehr Infos: http://carmeladefeo.deFoto: Harald Hoffmann",
            "startDateTime": "9/11/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170073&a=774719&m=13738"
        },
        {
            "id": "e181",
            "title": "Tino Bomelino - Mann muss die Dinge nur zu Ende",
            "description": "Hi! Ich bin der Tino.So ein Ankündigungstext soll ja vor allem neugierig machen und ich hoffe da jetzt ein bisschen auf deine Mitarbeit.Stell dir vor du sitzt in deiner Küche mit deiner Lieblingsperson. Sie lobt deine neue Hose und erzählt dir fast beiläufig, dass sie gestern beim Soloprogramm von tino bomelino war.?Es war sehr lustig! Glaub mir!? sagt sie.Du glaubst ihr.?Der hat eine Powerpoint-Präsentation gehalten mit Verbesserungsvorschlägen für Tiere!? sagt sie und grunzt ein bisschen beim Kichern ? typisch Lieblingsperson!Sie hat erfahrungsgemäß einen guten Geschmack bei sowas.Du vertraust ihr.?Das klingt ja genial!? sagst du. (Deine Worte, nicht meine!)Was sie leider vergessen hat, zu erwähnen: Ich mache auch Stand-up und Musik mit Gitarre und Loopstation ? aber das nehm? ich ihr nicht übel. Bei all dem geht es unter anderem um die beiden großen Themen: die Liebe und wie man jemanden umarmt, der einen Rucksack aufhat. Drückt man da den Rucksack mit oder versucht man mit dem Arm in die Ritze zwischen Rücken und Rucksack zu kommen?Übrigens echt schöne Hose!Eine letzte Sache noch:Mit Penetranz und Durchhaltevermögen kann man alles schaffen. Man muss die Dinge nur zu EndeMehr Infos: http://bomelino.de",
            "startDateTime": "9/16/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170633&a=774719&m=13738"
        },
        {
            "id": "e182",
            "title": "Sia Korthaus - Im Kreise der Bekloppten",
            "description": "Wat?? Schon 25 Jahre Solokabarett? Da kommt einiges an Blödsinn zusammen!Alles begann auf einer kleinen Insel im Atlantik. Dort pferchte Sia deutsche Urlauber in einen Raum, nicht größer als eine Abstellkammer, um an ihnen ihr erstes Soloprogramm zu testen. Mit Erfolg! Denn von einer Insel kommt man nicht so schnell weg.Mittlerweile geht Sia nach drei Duos und acht Soloprogrammen in Deutschland in die neunte Runde. Gott sei Dank spielt sie mittlerweile in größeren Räumen, so dass nicht nur das Publikum mehr Platz hat, sondern auch Sia ihr komplettes Spektrum der Darstellungskunst zeigenkann: Schauspiel, Gesang und Tanz im fliegenden Wechsel, und sie ist dabei irre komisch.Viele liebgewonnene Figuren tauchen wieder auf, u.a. Biggi, die mit schlichten Worten die Welt erklärt, Werner, auch nicht gerade ein Hirnchirurg und die tabulose Oma Emmi, die der Jugend so manche Schamesröte ins Gesicht treibt.Mit all diesen Alter Egos und den aktuellen Komikern, die momentan unsere Welt regieren, ist Sia Korthaus mitten im Kreise der Bekloppten.Mehr Infos: https://www.siakorthaus.deFoto: Tanya Davidow",
            "startDateTime": "9/17/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170635&a=774719&m=13738"
        },
        {
            "id": "e183",
            "title": "Peter Spielbauer - Pfitsch Göng",
            "description": "Das neue plastisch-elastische Solo-Theater-Stück des Philosokomikers Peter Spielbauer behandelt primär den Umstand, dass wir auf einer Kugel sitzen und durchs Weltall fliegen. Eine abstruse Situation?! Wie gehen wir damit um??Spielbauer verdichtet Lösungsvorschläge in »PFITSCH GÖNG«. Eine don-quichotische Übung mittels persönlicher Eckdaten zu kosmischen Koordinaten. Inklusive der kürzesten Geschichte der Menschheit ever; eventuell sogar mit Love-Story. Hört sich groß an, passt aber in einen Sack. Ein weiterer poetischer Welterklärungsversuch von Peter Spielbauer.Sonne Sonne scheine, lass uns nicht alleine?!Sonne Sonne move, give me my daily groove?!",
            "startDateTime": "9/23/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170637&a=774719&m=13738"
        },
        {
            "id": "e184",
            "title": "marotte Figurentheater - Pettersson zeltet!",
            "description": "Für Kinder ab 5 JahrenDer alte Pettersson will mit seinem Kater Findus angeln gehen. Auf seinem Dachboden hat Pettersson eine Flitzebogenwurfangel erfunden und will sie nun mit Findus am See ausprobieren.Das Zelt nehmen sie auch gleich mit, um einen Ausflug in die Berge zu machen.Aber aus der Zeltidylle wird nichts! Und das nur wegen der blöden Hühner, die partout auch ausprobieren wollen, wie das ist, in einem Zelt zu schlafen. Spiel: Thomas HänselRegie: Jörg BrettschneiderMehr Infos: http://marotte-figurentheater.de",
            "startDateTime": "9/19/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170639&a=774719&m=13738"
        },
        {
            "id": "e185",
            "title": "Physical Graffiti - The Very Best Of Led Zeppelin - European Tour 2022",
            "description": "PHYSICAL GRAFFITI - Schon zahlreiche Bands haben versucht die Songs von Led Zeppelin so originalgetreu wie möglich wiederzugeben und zu interpretieren, doch nur wenige waren wirklich erfolgreich.Im Jahre 1997 änderte sich dies allerdings. Die Band Red Stuff, die hauptsächlichSongs aus den siebziger Jahren spielte, wurde von ihren Fans aufgefordert ihr Led Zeppelin Repertoire auszuweiten, was zur Gründung einer der wahrscheinlich besten Tribute-Bands - namens Physical Graffiti- führte.Der Name Physical Graffiti ist gleichzeitig Titel des 1975 erschienenen Albums von LedZeppelin, wodurch ein direkter Bezug zur Originalband hergestellt wird, denn wenn dieses Stichwort fällt, weiß jeder Rockfan, was und vor allem wer gemeint ist. Letztere sind in gewisser Weise Vergangenheit, doch ihr musikalisches Erbe wird mit großem Stolz und Leidenschaft von Physical Graffiti am Leben erhalten.Jedes Bandmitglied weißt einen enormen musikalischen Background auf. Der englische und in Holland lebende Sänger Andrew Elt beispielsweise spielte bereits in Bands wie Gin On The Rocks, Sleeze Beez und tourt mit dem Gitarrenvirtuosen Walter Trout. Dort fungierte er zunächst als Tour-Manager, später stand er gemeinsam mit der Band auf der Bühne und gab sowohl seingesangliches als auch instrumentales Können zum Besten. Generell ist Andrew Elt als einsehr gefragter Sänger für Rocksessions, denn mit seiner Stimme vermager die originären Tonlagen von Bands wie Led Zeppelin, Deep Purple, Guns N? Roses,AC/DC, Van Halen usw. verblüffend gut nachempfinden.Der irische Bassist Dave Harrold brachte sich das Gitarre spielen selbst bei, widmete sich jedoch relativ schnell dem Bass und stellte mit diesem sein Können in den holländischen Bands Re-Experience, Clemens V.D. Ven Band und Boerenleenband unter Beweis.Schließlich hat er noch die Mandoline in sein Repertoire aufgenommen, womit er seineKollegen von Physical Graffiti bei einigen wundervollen Led Zeppelin Akustik-Nummern in typischer John Paul Jones-Manier begleitet.Der Gitarrist Daniel Verberk begann mit 11 Jahren mit diesem Instrument, arbeitetespäter als Backline-Techniker für Vengeance, war daraufhin Gitarrist in den Bands Heavy70?s und The Moon und tourte seit 2006 als Stagemanager und Backline-Techniker für diverse internationale Acts. Jan Gabriel ist der Schlagzeuger von Physical Graffiti. Seit langer Zeit tourt er mitseiner Big Band durch die USA und Europa. Zudem unterstützt er u.a. Bands wie dieGuano Apes auf der Bühne. Ferner ist er in unterschiedlichen klassischen Orchestern aktiv und als Lehrer betreut er das Projekt Band Apart, in dem Quentin Tarantino´s Filmmusik gespielt wird.Physical Graffiti zeigen auf der Bühne ihr großes künstlerisches Talent, indem sie gekonnt die Songs von Led Zeppelin interpretieren. Physical Graffiti rocken !",
            "startDateTime": "3/10/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28585170643&a=774719&m=13738"
        },
        {
            "id": "e186",
            "title": "Die Traumausstatter ? Das Tak und die fliegende Trommel",
            "description": "Das Tak und die fliegende Trommel - für Kinder ab 3 JahrenDas Tak geht mit seiner fliegenden Trommel auf Reisen ? Dabei besucht es Orte, die es noch nie gesehen hat. Ganz egal, wo es hinkommt, ob bei den Wichteln im Wald oder in der Gemüseküche: Überall wird Musik gemacht! Und das Allerbeste ist: Auch wenn man gerade gar kein Instrument hat, kann man ganz leicht den eigenen Körper und die eigene Stimme zum Klingen bringen! Wie das geht, zeigen uns Die Traumausstatter. Währenddessen muss das Publikum aber nicht still sitzen, sondern darf selber kräftig klatschen, klopfen und trommeln und sich überhaupt auf viele verschiedene Arten am gemeinsamen Musizieren beteiligen. Die Welt ist voller Rhythmen und Musik. Dabei kann es manchmal auch ganz schön laut und wild zugehen!Reinsetzen, anschnallen und Propeller an!Mehr Infos: http://www.dietraumausstatter.de/Foto: Ellen Schmauss",
            "startDateTime": "9/26/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28596161447&a=774719&m=13738"
        },
        {
            "id": "e187",
            "title": "FREIBURGerLEBEN: Probiertour über den Freiburger Bauernmarkt rund ums Münster",
            "description": "Schlendern Sie mit uns über den Münstermarkt. Neben zahlreichen Geschichten und Geschichtchen kommt natürlich auch die Gaumenfreunde nicht zu kurz. Schmecken Sie kleine Köstlichkeiten, die je nach Saison varieren. Ein Gläschen Gutedel oder die ?Freiburger Rote? dürfen dabei nicht fehlen. Plaudern Sie mit den Marktbeschickern. Bei dieser Tour erschmecken Sie Freiburg nicht nur, sondern erleben sie von ihrer authentischten Seite. Und zum Abschluss darf natürlich etwas Süßes nicht fehlen! Vom Frühjahr bis in den Herbst freuen wir uns, Sie über den Bauernmarkt zu führen!Durchführung der Tour bei mindestens 6 Personen. Sollten es weniger Teilnehmer sein behalten wir uns vor bis 2 Tage vor Beginn der Führung die Tour zu stornieren.",
            "startDateTime": "6/19/21 11:00",
            "venueId": "v15",
            "offerURL": "https://www.awin1.com/pclick.php?p=28607886961&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/OvnQESPA.jpeg"
        },
        {
            "id": "e188",
            "title": "FREIBURGerLEBEN: Die Freiburger Genuss Tour",
            "description": "Die Freiburger Stadtherren kamen und gingen, zum Glück aber blieben ihre Köstlichkeiten wie Schwarzwälder Schinken, Gugelhupf oder der Markgräfler. Bei dieser originellen Tour werden nicht nur Augen und Ohren angesprochen, von der einen oder anderen Spezialität darf auch gekostet werden. Wir überraschen Ihre Sinne. Inkl. Café/Tee und Köstlichkeiten.Durchführung der Tour bei mindestens 6 Personen. Sollten es weniger Teilnehmer sein behalten wir uns vor bis 2 Tage vor Beginn der Führung die Tour zu stornieren.",
            "startDateTime": "6/26/21 16:00",
            "venueId": "v15",
            "offerURL": "https://www.awin1.com/pclick.php?p=28607888257&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/wK20pXJj.jpeg"
        },
        {
            "id": "e189",
            "title": "FREIBURGerLEBEN: Weinführung",
            "description": "Eine abwechslungsreiche Weinführung: ?Schlürfen musst Du, nicht saufen!?heißt ein alter alemannischer Weinspruch. Wussten Sie, dass es bereits Ende des 15. Jahrhunderts ein Reinheitsgebot für die Weinherstellung gab, das in Freiburg seinen Ursprung hat? Der Pfarrer von St. Martin die erste badische Winzergenossenschaft gegründet hat? Freiburg, die größte Weinbaustadt Deutschland ist? Unser Rundgang zu Bilderbuchfassaden und historischen Weinkellern öffnet tiefe Blicke in Stadt- und Weingeschichte(n). Trocken wird es dabei nicht zugehen. Kleine Weinproben runden den Spaziergang ab. Durchführung der Tour bei mindestens 6 Personen. Sollten es weniger Teilnehmer sein behalten wir uns vor bis 2 Tage vor Beginn der Führung die Tour zu stornieren.",
            "startDateTime": "7/10/21 16:30",
            "venueId": "v15",
            "offerURL": "https://www.awin1.com/pclick.php?p=28607888305&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/F9z6WqyA.jpeg"
        },
        {
            "id": "e190",
            "title": "FREIBURGerLEBEN: Höhepunkte der Altstadt",
            "description": "Entdecken Sie mit uns den ?betenden Teufel?, den echten ?Bobbele? und die ?knackige Rote?. Auf unserem unterhaltsamen Rundgang durch die historische Innenstadt erleben Sie die bedeutendsten Sehenswürdigkeiten. Begleiten Sie uns über Bächle und Gässle zu stattlichen Bürgerhäusern, machen Sie mit uns die Reise von der mittelalterlichen Kleinstadt zur Ökohauptstadt Deutschlands. Authentisch zeigt sich der Bauernmarkt, einmalig Freiburgs Wahrzeichen, das Münster mit seiner mittelalterlichen Bilderwelt.Freiburg kennt viele Seiten, wir haben für Sie die spannendsten herausgesucht.Wir achten auf Ihre und unsere Gesundheit.Innenbesichtigungen sind nach wie vor nicht möglich. Das Münster werden wir von außen besichtigen und Ihnen dabei Informationen zum Innenraum geben. Als Gruppe dürfen wir nicht hineingehen.Wir wissen, dies ist alles sehr aufwendig, aber wir freuen uns, Ihnen endlich wieder unser großartiges Freiburg zeigen zu dürfen.",
            "startDateTime": "6/19/21 12:15",
            "venueId": "v15",
            "offerURL": "https://www.awin1.com/pclick.php?p=28613752713&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/SKfDNj9q.jpeg"
        },
        {
            "id": "e191",
            "title": "LIVE: Acht Eimer Hühnerherzen",
            "description": "ACHT EIMER HÜHNERHERZEN sind ein halbakustisches NylonPunk Trio mit den drei Musikstilen Powerviolence-Folk, Kakophonie und Bindungsangst. Sie spielen Wandergitarren-Hardcore mit Fuzz und Driver für Alleinerziehende, Alleinerzogene, Allergiker und alle Heiter-Depressiven.Am 27.3.2020 erscheint ihr zweites Album (mit dem Titel ?album?) auf dem auch weiterhin die Regeln von Punk, Folk und Songwritertum eiskalt ignoriert werden. Alles bleibt handgemacht ohne Tricks und Effekte, aber Spiralgalaxien-entfernt von ?Unplugged?-Patina und -Pathos - diesmal noch schneller und Punk-affiner getaktet. Denn die Welt und ihre Probleme drehen sich inzwischen ja auch immer schneller und man muss ja mit der Zeit gehen. Und ?wer pennt, kommt in Zement.Apocalypse Vega - Gesang, Gitarre, DriverHerr Bottrop - Bass, GesangFuzz Bene Diktator - Drums, Gesang",
            "startDateTime": "4/23/22 20:30",
            "venueId": "v21",
            "offerURL": "https://www.awin1.com/pclick.php?p=25867287277&a=774719&m=13738"
        },
        {
            "id": "e192",
            "title": "FREIBURGerLEBEN: Schokoladen Tour",
            "description": "400 Jahre Habsburger haben die Kaffeehaus-Tradition Freiburgs geprägt. Bei einem gemütlichen Spaziergang durch die historische Altstadt erleben sie die Freiburger Stadtgeschichte von ihrer Schokoladenseite. EIn Na(s)chmittag der besonderen Art! Inkl. Tasse Kaffee / heiße Schokolade und Schokoladen Spezialitäten.Durchführung der Tour bei mindestens 6 Personen. Sollten es weniger Teilnehmer sein behalten wir uns vor bis 2 Tage vor Beginn der Führung die Tour zu stornieren.",
            "startDateTime": "7/9/21 16:00",
            "venueId": "v15",
            "offerURL": "https://www.awin1.com/pclick.php?p=28646109297&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/WpguafTX.jpeg"
        },
        {
            "id": "e193",
            "title": "Matthias Deutschmann + Silver City Trio - 900 Jahre sind genug!",
            "description": "mit Helmut Lörscher (p), Bernd Heitzler (b) und Matthias Daneck (dr)Der gute Vorsatz für 2021 steht: Freiburg will sich feiern. Alle Bürgerinnen und Bürger sind aufgefordert mitzuhelfen. Jubiläumsberater sind in der Ökocity unterwegs und verbreiten gute und nachhaltige Laune. Das Jubiläum ist nicht mehr aufzuhalten. Aus diesem Grunde habe ich mich entschlossen mein 40jähriges Bühnenjubiläum ganz in den Dienst der 900-Jahr-Feierlichkeiten zu stellen und unsere Schwarzwaldmetropole mit einer Jubiläumsgala zu feiern. Wir verbeugen uns vor dieser Stadt, mal sehen, wie tief wir kommen ? Am Flügel begleitet Helmut Lörscher.Mehr Infos: http://www.matthiasdeutschmann.deFoto: Philipp v. Ditfurth",
            "startDateTime": "9/26/21 19:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28663500321&a=774719&m=13738"
        },
        {
            "id": "e194",
            "title": "Jean Philippe Kindler - Deutschland umtopfen.",
            "description": "Liebe Bürger:nnen, liebes Volk, liebe Umweltsa?ue!Ich weiß, ich weiß. Es macht Sie alles so traurig. All das Leid der Welt. Die Ungerechtigkeit. Die Armut. Die AfD. Ich sehe Ihre Betroffenheit ja auf Instagram. Und dennoch: In solchen Zeiten istes wichtig, dass Sie auch mal auf sich achten! Lassen Sie sich vom Leid dieser Welt nicht das eigene Glück versauen. Denn für jede politische Krise gibt es eine passende Atemübung. DerGender Pay Gap la?sst sich wunderbar wegtanzen. Es ist doch scho?n, wenn Sie Ihre U?berstunden nicht bezahlt bekommen, denn dafür dürfen Sie Ihren Chef ja ?Bro? nennen. Ausbeutung darfendlich nur dann Ausbeutung sein, wenn sie bemerkt wird! Ich verstehe Sie. Die Schere zwischen Arm und Reich la?sst Sie unruhig schlafen. Da müssen Politiker wie ich natürlich sofort aktiv werden. Zeit für den Herabschauenden Hund! Spannen Siedie Zehen an. Atmen Sie tief ein. Und wenn Sie die Knie durchdrücken, dann lassen Sie mal alles los! Zeitarbeit. Lohndumping. Raus damit. Der Nahostkonflikt? Nicht mit Ihnen. Sie sind imMoment. Sie sind authentisch. Denken Sie daran, was die Positive Psychologie sagt: Werden arme Menschen ausgebeutet, dann will der Karmagott sie dazu bewegen, sich endlich selbst zuverwirklichen!Es ist nun endlich mal wieder Zeit für SIE. SIE haben sich ihr Glück verdient. SIE werden aufblühen. Für den harten Weg nach oben hatten SIE na?mlich nichts außer das richtigeGeschlecht, eine satte Erbschaft und einen deutschen Namen. SIE sind self-made! Finden Sie, dass das ironisch klingt? Ja, so ist es auch gemeint. Denn in unserer Gesellschaft blühen Menschen nur deswegen auf, weil anderen konsequent das Wasser abgegraben wird. Wenn Siedas auch scheiße finden, bissige Satire, Albernheit und Kritik aber mo?gen, dann kommen Sie doch einfach zu meinem neuen Soloprogramm. Liebe Freundinnen und Freunde, umverteilen wargestern. Ich will blühende Landschaften für alle! Dementsprechend meine Forderung: Wir müssen ?DEUTSCHLAND UMTOPFEN?!Mehr Infos: https://www.jeanphilippekindler.deFoto: Fabian Stürtz",
            "startDateTime": "9/30/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28663500323&a=774719&m=13738"
        },
        {
            "id": "e195",
            "title": "Stuttgarter Kammerorchester",
            "description": "Aufgrund der gesetzlichen Verordnungen zur Eindämmung der Corona-Pandemie konnte das Albert-Konzert mit Arabella Steinbacher & Stuttgarter Kammerorchester (Ersatzkonzert für Sheku Kanneh-Mason, Mirga Gra?inyte-Tyla & City of Birmingham Symphony Orchestra) am 25. November 2020 im Konzerthaus Freiburg leider nicht stattfinden.Wir freuen uns, dass es uns in Zusammenarbeit mit allen Beteiligten gelungen ist, das Konzert zu verlegen. Neuer Konzerttermin ist nun Freitag, der 2. Juli 2021 im Konzerthaus Freiburg. Wir informieren Sie, falls die Veranstaltung als Doppel-Konzert mit reduzierter Besucherzahl durchgeführt werden muss.Abonnenten der Albert Konzerte haben hierzu eine gesonderte Info per Post erhalten.Programm:Mozart, Violinkonzert Nr. 1 B-Dur KV 207Mendelssohn, Streichersymphonie Nr. 6 Es-Dur MWV N 6Mozart, Violinkonzert Nr. 5 A-Dur KV 219 ?Türkisches?Arabella Steinbacher, ViolineSusanne von Gutzeit, KonzertmeisterinStuttgarter Kammerorchester",
            "startDateTime": "7/2/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=27551891095&a=774719&m=13738"
        },
        {
            "id": "e196",
            "title": "Hazel Brugger - Kennen Sie diese Frau?",
            "description": "Hazel Brugger ist nicht nur bekannt geworden, sondern auch erwachsen: Mittlerweile ist Deutschlands ?Beste Komikerin 2020? Hausbesitzerin, Ehefrau und Mutter. Aber der Lockdown hat auch Hazel nicht völlig kalt gelassen und so muss sich die deutschamerikanische Schweizerin im Chaos zwischen YouTube, Shitstorms, eigener Firma, älter werdenden Eltern und bankrotten Künstlerkolleg*innen immer wieder die Frage stellen: Was will ich eigentlich wirklich ? und inwiefern ist das weiblich??Konzentriert. Schnörkellos. Saucool. Hazel lässt alle Gockel-Allüren ihrer männlichen Kollegen weg.?Josef Hadermehr Infos: https://hazelbrugger.com/Foto: Peter Hauser",
            "startDateTime": "11/9/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=28807177697&a=774719&m=13738"
        },
        {
            "id": "e197",
            "title": "Lennart Schilgen - Engelszungenbrecher",
            "description": "Einmal den Kopf schief gelegt, schon sieht die Welt ganz anders aus ? Lennart Schilgen findet Blickwinkel, aus denen das vermeintlich Feststehende auf einmal wackelig erscheint. Und bringt es dann in seinen Liedern zum Kippen: Vom Tragischen ins Komische, vom Schönen ins Schräge. Oder auch mal umgekehrt. Mit Wortwitz und Ironie singt er über innere und äußere Schweinehunde, Black-Metal-Bands, die Liebe und alle anderen, die sich nicht wehren können. Doch meistens will man sich gar nicht wehren. Sondern lieber verhalten mitsingen, schließlich sind die Melodien so hübsch eingängig. Gelegentlich ist das sogar erlaubt, oft scheitert es aber daran, dass es anders weitergeht, als vermutet: mit verwegenen Reimen und Zeilensprüngen dreht er sich selbst das Wort im Munde um, wird vom Draufgänger zum Dran-Vorbei-Schleicher oder vom halben Hemd zum Hooligan. Dazu spielt er abwechselnd Klavier und Gitarre, versiert und vielseitig, mal zart, mal rabiat ? aber stets im Sinne der Texte, vorgetragen mit grundsolider Heiterkeit und bisweilen bedenklichem Mienenspiel. Was dabei herauskommt ist subtiler Wahnsinn zum Wohlfühlen. Oder, um es mit dem letzten Satz seines Pressetextes zu sagen: Geschichten, wie sie das Leben gerne geschrieben hätte. Mehr Infos: https://www.lennartschilgen.de/",
            "startDateTime": "10/31/21 19:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857757675&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/qpDqwNRw.jpeg"
        },
        {
            "id": "e198",
            "title": "Uli Boettcher - Ich bin Viele",
            "description": "Wer sind wir?Diese simple Frage ist grundsätzlich schwer zu beantworten, weil wir alle immer viele sind. So auch Uli Boettcher. In ?Ich bin Viele? begibt er sich auf die Suche nach seinen verschiedenen Ichs, die allesamt Aufhänger für Geschichten aus seinem Leben sind und dem Verwandschaftsbestiarium, in dem er aufgewachsen ist.In Boettchers neuem Programm finden sich alte Bekannte wieder, wie seine Frau und sein Sohn, aber auch neue Figuren, wie die Erb-Tante oder sein Nachbar.Im Laufe dieses Abends kristallisieren sich auf höchst unterhaltsame Weise persönliche Facetten heraus, auf die Boettcher selbst nicht immer stolz sein, über die ein anderer aber immerhin ausgiebig lachen kann.Mehr Infos: http://www.uliboettcher.de",
            "startDateTime": "10/3/21 19:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857758309&a=774719&m=13738"
        },
        {
            "id": "e199",
            "title": "Patrizia Moresco - #Lach_mich",
            "description": "Dolce Vita im Hamsterrad, so hat sich die Moresco ihre Zukunft nicht vorgestellt. Früher war sie ihrer Zeit voraus, jetzt kommt sie nur noch hechelnd hinterher. Das Problem mit dem Leben auf der Überholspur ist, du kommst viel schneller dahin, wo du gar nicht hin willst. Wo ist der Stau, wenn man ihn braucht?Zum Ausgleich fliegt man zum Detoxen nach Indien, zum Meditations- und Yogaretreat, aber wehe im Strandcafé gibt?s kein Wlan, dann ziehen im sonnigen Paradies ganz dunkle Wolken auf. Wenn du nicht täglich ein Selfie postest, glaubt doch keiner, dass du noch lebst. Wie bekloppt ist das, früher waren Haus und Auto ein Statussymbol, heute zeigt man sein gesamtes Leben auf Instagram. Und ganz wichtig sind Follower und Likes. Die bestimmen heute deinen Wert. Like mich am Arsch, sagt die Moresco. Mehr Infos: http://www.patriziamoresco.de",
            "startDateTime": "10/1/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857758313&a=774719&m=13738"
        },
        {
            "id": "e200",
            "title": "Vince Ebert - Make Science Great Again!",
            "description": "Make Science Great Again!90 Prozent der Amerikaner halten die Evolutionstheorie für unbewiesenen Mumpitz. 34 Prozent bezweifeln, dass die Erde eine Kugel ist und sieben Prozent glauben, dass braune Kühe Schokomilch geben.Alles Fake News aus dem Land der unbegrenzten Möglichkeiten? Vince Ebert wollte es genau wissen und startete ein spektakuläres Experiment: Ein ganzes Jahr in den USA!Er traf auf IT-Spezialisten aus dem Silicon Valley und in New York auf Wallstreet-Banker. In Cape Canaveral sprach er mit Raketenwissenschaftlern und in Harvard mit Genderforscher-Unterstrich-Studenten-Unterstrich-Sternchen-Innen.Stets auf der Suche nach den elementarsten Fragen: Wie kann es sein, dass eine Nation, die zum Mond flog, nicht in der Lage ist, eine funktionsfähige Duscharmatur herzustellen? Woher kommt die uramerikanische Angst vor unpasteuristierter Milch? Und kann man wirklich vom Tellerwäscher zum Millionär werden? Oder doch nur zum Geschirrspüler?Amerika - ein Land, das polarisiert und irritiert. Dort gibt es schwarz und weiß, Liebe und Hass, Freiheit und Todesstrafe, Prüderie und Brustvergrößerungen, Eliteunis und Käse in Sprühdosen.Amerikanische Schüler halten Hitler für eine Staubsaugermarke und glauben, die Ukraine liegt in Portugal. In Montana kommen auf jeden Einwohner drei Kühe, jeder achte Amerikaner hat schon einmal bei MacDonalds gejobbt und ein Viertel glaubt an Wiedergeburt. Trotzdem sind die USA die führende Wissenschaftsnation der Welt. Oder vielleicht sogar deshalb?Ab Herbst 2020 ist Vince Ebert zurück auf Deutschlands Bühnen. Mit vielen Antworten, Einsichten und einem brandneuen Programm: Make Science Great Again! ? eine witzige und kulturübergreifende Abrechnung mit Irrationalität, Denkfehlern und gegenseitigem Überlegenheitsgefühl.Die Veranstaltungsreihen finden unter den vorgegebenen, geltenden Sicherheits- und Hygiene-Vorschriften statt.",
            "startDateTime": "10/30/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857758479&a=774719&m=13738"
        },
        {
            "id": "e201",
            "title": "FIL - Die Expertise war bedeutend höher",
            "description": "Fil wieder. Wer ihn noch nicht kennt, sollte das sofort ändern. In einer aus den Fugen geratenen Welt ist er der verlässliche Fels. Der verlässliche Fels im hässlichen Pelz. Und er frisst einen grässlichen Wels.In ?Die Expertise war bedeutend höher? beantwortet unser Freund singend und sprechend die großen Fragen unserer aus den Fasern geschleuderten Welt in der das Böse längst gesiegt hat. Mit kecker Warmherzigkeit hält er uns einen Spiegel vor und führt uns zärtlich ein in die altehrwürdige Kunst des Lachens. Fil erläutert, warum es nicht nur grüne, sondern auch rote E-Roller gibt und wie es sein kann, dass wir dennoch nicht glücklich sind. Als erster deutscher Comedian überhaupt unternimmt er den Versuch, den Riss durch die Gesellschaft zu kitten, indem er AFD-Wählern mit dem Song ?Nazischweine, lasst mich nicht alleine? eine Hand entgegenstreckt.Er arbeitet sich an sämtlichen Themen und Brennpunkten der letzten Woche ab, so dass ihr hinterher einsichtig und mit disruptiv erweitertem Horizont zugeben werdet: ?Das war echt gut?.Und so ist es. So ist Fil. Echt gut. Und gerecht. Er ist ein guter aufrechter Mensch, der euer Eintrittsgeld verdient.Foto: Julia Tham",
            "startDateTime": "10/21/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857758981&a=774719&m=13738"
        },
        {
            "id": "e202",
            "title": "Johannes Floehr - Ich bin genau mein Humor",
            "description": "Wenn Super Mario kein Italiener wäre, sondern Deutscher: Hieße er dann ?Toller Jochen?? Oder ?Prima Klaus?? Was machen Putzerfische, die im Aquarium immer an der Scheibe herumsaugen, in der freien Natur? Schwimmen die ein Leben lang durch den Ozean auf der ewigen Suche nach einer Fensterscheibe und sterben dann total enttäuscht? Die SPD, was ist da eigentlich schon wieder los? Und Einräder - warum fallen sie nicht um? Wer sich solche Fragen stellt, der braucht keine Antworten, sondern eine Bühne. Und auf eben diese stellt sich der sympathische Zwei-Meter-Mann Johannes Floehr mit seinen frechen Scherzen nun schon seit einigen Jahren. Zum Beispiel mit seinem neuen Programm, in dem es Stand-up, Texte, Videos und Auszüge aus seinen beiden Büchern ?Buch? (2018) und ?Dialoge? (2019) geben wird. Mehr Infos: https://www.johannesfloehr.deFoto: Fabian Stürtz",
            "startDateTime": "10/29/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857759153&a=774719&m=13738"
        },
        {
            "id": "e203",
            "title": "Matthias Brodowy - Keine Zeit für Pessimismus",
            "description": "Matthias Brodowy ist ein klassischer Künstler: Ein Hypochonder, der in der nächsten Sekunde irgendeinen über ihn einbrechenden Super-Gau erwartet. Im Zweifel einen dinosauriesken Meteoriteneinschlag. Und gerade deswegen ist er der Meinung, dass definitiv keine Zeitmehr für Pessimismus ist. Klingt widersprüchlich? Höchstens so widersprüchlich wie das Leben.Aber eigentlich ist es die einzige Chance, das Ruder rumzureißen. Denn den Kopf in den Sand zu stecken, ist definitiv nicht atmungsaktiv!Warum also nicht der Apokalypse ein Bein stellen und einfach mal handeln? Mit einem Lächeln im Gesicht, denn es wäre zu schade, die Welt Leuten zu überlassen, denen man es sowieso nie rechtmachen kann. Dieser Kabarettabend ist ein klares Ausrufezeichen für alle, die auch dann noch ein Apfelbäumchen pflanzten, wenn morgen die Welt unterginge. Entweder im Garten oder virtuell vom Sofa aus. Geht ja heute alles auch online und im Netz ist sowieso die Hölle los. Also: Aufbruch! Und falls wir unsicher sind: Ran an den Rollator! Gibt?s bestimmt bald auch mit E-Motor! Wenn einem das Wasser bis zum Hals steht, gilt ein Grundsatz: Keine Zeit für Pessimismus!Und dann? Konfetti! Biologisch abbaubar.Brodowys zehntes Programm ist wie immer politisch, literarisch,musikalisch! Darüber hinaus frönt der selbsternannte Vertreter fürgehobenen Blödsinn gerne auch der gepflegten Albernheit und dergrotesken Geschichte.Matthias Brodowy steht seit 1989 auf der Kabarettbühne, wurde vonHanns-Dieter Hüsch entdeckt und gefördert und erhielt zahlreicheKabarettpreise, darunter das ?Schwarze Schaf?, den ?Prix Pantheon?und den Deutschen Kleinkunstpreis.Regie: Rolf Claussenhttps://www.brodowy.de/",
            "startDateTime": "10/7/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857759715&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/LMeRoDD6.jpeg"
        },
        {
            "id": "e204",
            "title": "Inka Meyer - Zurück in die Zugluft",
            "description": "Was ist passiert? Als Kind war jeder Tag ein Sonntag. Als Student immer Freitag. Und heute ist irgendwie ständig Montag. Jüngst fiel mir eine alte ToDo-Liste von 2015 in die Hände. Und siehe da, alles noch brandaktuell! Und mein Arzt meint auch noch, ich solle mich mehr bewegen. Wieso? Ich laufe dreimal täglich Amok. Unser Alltag ist ein Ausnahmezustand, der zur Regel wurde. Bleibt nur eins: Die Flucht. Doch wohin? Auf vegane Pilgerfahrt nach Sankt Augustin auf dem Kompostweg? Nein. Ins Theater! Das Programm ?Zurück in die Zugluft? von Inka Meyer ist eine hochkomische Suche nach dem verlorenen Spaß im Leben. Die Tochter eines friesischen Orientexperten gilt im Kabarett als die Fährtenleserin im Dickicht der Moderne. Im Anschluss an ihre Show werden Sie laut ausrufen: ?Freunde! Wenn ihr Probleme braucht, ich bin immer für euch da.?Mehr Infos: https://www.inkameyer.deFoto: Simon Büttner",
            "startDateTime": "10/8/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857759939&a=774719&m=13738"
        },
        {
            "id": "e205",
            "title": "Volkmar Staub - Ausreden",
            "description": "PREMIERENach dem Programm ?Lacht kaputt, was Euch kaputt macht? ist ?Ausreden? die Fortsetzung des Lachfurors gegen die Dummheit und gegen die Machenschaften der Mächtigen.Seitensprünge werden zu Geschäftsreisen, Lobbyismus wird zum harmlosen Gedankenaustausch und Schokoladenmissbrauch wird zur Power-Diät. Ausreden sind allgegenwärtig. Privat wie politisch. Tagespolitisch immer aktuell, aber auch etwas tiefer schürfend, schaut Staub in Politik, Wirtschaft und gesellschaftlichem Alltag den Vollpfosten und -pföstinnen auf die Pfo(s)ten und reflektiert den Stillstand der laufenden Ereignisse. Dabei streift er auch die Ironiederlagen seiner altlinken Generation. ?Toking baut mei Tschenereischen?Das politische Kabarettprogramm ?Ausreden? ist kluge Unterhaltung und ansteckend lächerlich. Die Lage ist hoffnungslos, aber nicht ernst.Volkmar Staub will sich aber auch selber mal ausreden. Vor Euch. Unsägliches sagbar machen und über Unredliches reden bedeutet eine Satzsuche im Wörtersee. Ob als Song, Gedicht oder satirischer Lauftext.Volkmar Staub setzt sich ab gegen die ganze Massen-Satierhaltung und Satierquälerei im Fernsehen, wo jeder Gag die Mittel heiligt und fragt sich: Ist diese Welt denn zu fassen? Und wenn, dann mit Worten? Sagts und lächelt gewinnend mit verlorenen Sätzen.Hochaktuell, subversiv und altersböse!Mehr Infos: http://www.volkmar-staub.deFoto: Hermann Baque",
            "startDateTime": "10/9/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857759941&a=774719&m=13738"
        },
        {
            "id": "e206",
            "title": "Sebastian 23 - Cogito, ergo, dumm",
            "description": "Wir leben in einer Zeit, in der ein amerikanischer Präsident den Klimawandel leugnet, in TV-Shows Partnerwahl anhand entblößter Körperteile betrieben wird oder Günther Jauch als der klügste Deutsche gilt, weil er Quiz-Antworten korrekt von einem Bildschirm ablesen kann. Man könnte denken, der Mensch ist dumm und die Menschheit erst recht. Aber ist das wirklich so?Sebastian 23 ist Bestsellerautor, Poetry Slammer und Komiker. Und er ist selbst sehr dumm. Sagt zumindest seine Exfreundin. Bewundern wir gemeinsam die weisen Worte des ehemaligen US-Vizepräsident Don Quayle: ?Nicht die Umweltverschmutzung schädigt die Umwelt, sondern die Verunreinigungen in Luft und Wasser.? Verlieben Sie sich zudem in den NPD-Politiker, der 2017 forderte, arabische Zahlen als Hausnummern abzuschaffen und stattdessen ?normale Zahlen? einzusetzen.In seinem neuen Programm geht Sebastian 23 entlang wirklich haarsträubender, absurder und vor allem unterhaltsamer Beispiele am Ende dem Phänomen Dummheit selbst auf den Grund. Mehr Infos: http://sebastian23.orgFoto: Friederike Becht",
            "startDateTime": "10/10/21 19:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857759951&a=774719&m=13738"
        },
        {
            "id": "e207",
            "title": "Strohmann-Kauz - Sitzläder - der letzte Stammtisch",
            "description": "?Sitzläder? ist das jüngste Stück Theaterkabarett mit den kultigen Senioren Ruedi und Heinz. Die alten Freunde hauen ab aus dem Altersheim und steigen ein in ihre längst geschlosseneStammbeiz. Doch wo sie sich Gemütlichkeit erhoffen, überrascht sie das volle Leben. Am Stammtisch kriegen sie Besuch von aufsässigen Zeitgenossen und sitzengebliebenen Kameraden.Ungewollter ziviler Ungehorsam stürzt das liebenswürdige Rentnerduo in eine abenteuerliche Geschichte. Zufälle und überraschende Wendungen zwingen die treuen Weggefährten ihnenunbekannte Rollen zu spielen. Ruedi und Heinz lassen nicht nur Erinnerungen nachsitzen, sie kämpfen für ihren neuen, alten Zufluchtsort.Strohmann-Kauz erzählt eine Geschichte über Erinnerungen und Leidenschaft, entlebte Dorfkerne und entleerte Innenstädte, über junge Nostalgie, echte Freundschaft und alte Kampfbereitschaft.Die Schauspieler Matthias Kunz und Rhaban Straumann sind wie immer kabarettistisch, gesellschaftspolitisch aktuell und überraschend.Mehr Infos: https://www.strohmann-kauz.chFoto: Remo Buess",
            "startDateTime": "10/14/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28857759955&a=774719&m=13738"
        },
        {
            "id": "e208",
            "title": "BERGE - Das Heiligste der Welt",
            "description": "In Marianne Neumann und Rocco Horn haben sich zwei Menschen gefunden, die einen ähnlichen Blick auf die Welt haben: Das, was die Welt bewegt, was sie zerstört und was dringend zu erhalten ist an Werten und Wahrhaftigkeiten, all dies sprechen sie in ihren Songs an.Nach ihrem Debütalbum ,Keine Spur?, mit dem die Berliner bereits in der Szene auf sich aufmerksam machen konnten, folgte 2015 ?Vor uns die Sinnflut?. Insbesondere die Single ,10.000 Tränen?, ein berührendes Stück über Tierschutz und die moralische Zweifelhaftigkeit moderner Massentierhaltung, fand breiten Anklang, avancierte nach und nach zu einem viralen Hit und steht aktuell bei Youtube bei über fünf Millionen Plays. Die Konzerte zu diesem Album gerieten in der Folge immer größer und euphorischer. Denn Berge-Konzerte, bei denen das Duo von einer Live-Band begleitet wird, sind eben wahrlich Manifestationen des Positiven.",
            "startDateTime": "12/16/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28886911383&a=774719&m=13738"
        },
        {
            "id": "e209",
            "title": "KAYA YANAR - AUSRASTEN! für Anfänger - Tour 2019/2020",
            "description": "Kaya Yanar rastet gerne mal aus. Nicht sehr oft, aber immer öfter. Liegt es tatsächlich an ihm oder an allen anderen? Dieser und anderen Fragen geht der Comedian in seinem neuen Live-Programm ?Ausrasten! für Anfänger? nach.Wir leben in einer Zeit, die so stressig und verrückt ist, dass sich der Komiker fragen muss: Ist gelegentliches Ausrasten notwendig, um halbwegs gesund in der Birne zu bleiben? Und wenn ja, wie macht man das am besten? Warten, bis einem alles zu viel wird? Und dann Auswandern, Burn-out oder Amok? Natürlich nicht. Der Comedian weiß, wie es richtig geht: Ausrasten ja, aber mit Stil, Eleganz und vor allem viel Humor.Kaya Yanar bringt so einiges an Lebenserfahrung in Sachen (ungezügeltes) Temperament mit, denn er regt sich ständig über alles auf: öffentliche Toiletten, Staus, Autofahrer, Radfahrer, Fußgänger ? je nachdem, wie er gerade unterwegs ist ?, alte Menschen, junge Menschen, Kinder, Babys, TV-Sender, Ausländer, Inländer, die Liste ließe sich endlos fortsetzen. ?Je älter ich werde, desto mehr merke ich, wie meine Toleranz für Bullshit immer dünner wird. Als 10-Jähriger freust du dich auf die große weite Welt. Als 20-Jähriger hat man schon ein paar Deppen kennengelernt. Als 30-Jähriger denkt man: Ok, nicht alles super hier, aber man kommt klar. Aber als 40-Jähriger: Oh Gott! Das kann doch so nicht weitergehen!??Ausrasten für Anfänger? bietet zwei Stunden Lebenshilfe der besonderen Art mit ?Doktor Yanar?: witzig, intelligent, humorvoll, selbstironisch und zum AUSRASTEN! lustig.",
            "startDateTime": "9/26/21 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=24418943201&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/UciJzRvB.jpeg"
        },
        {
            "id": "e210",
            "title": "Ass-Dur - QUINT-ESSENZ",
            "description": "Ass-Dur, das sind neuerdings: Dominik Wagner und Florian Wagner. Zwei Männer ? zwei Pianisten ? zwei Brüder! Der eine kann was, der andere auch. Die Wagner-Brüder versprechen höchste musikalische Leistung, Komik vom Feinsten und natürlich ? sonst wäre es nicht Ass-Dur ? sind sich die beiden nie einig.Mit frischem Schwung starten die Wagners die Ass-Dur-Saison mit ihrem neuen Programm QUINTESSENZ. Und hier tobt nicht nur die Männer- und Musikerkonkurrenz, nun kommt das ?BrotherBattle? hinzu. Spielt Dominik besser Klavier als Florian die Geige? Ist Florian charmanter oder  Dominik schlauer? Die beiden begeistern ihr Publikum mit Klaviermusik, Gesang und schrägen Ideen, vor allem aber mit einem Bühnenspiel, das seines gleichen sucht, aber nicht findet. Ass-Dur bringt Klassik ins Kabarett-Theater und Kabarett ins Konzerthaus. Ihre Herzen schlagen für die Musik - wenn auch nicht immer im Gleichklang (und Dominiks auch noch für schlechte Witze), und so bringen sie Klassik- und Popmusik aus unterschiedlichen Stilrichtungen zusammen. Und das Publikum lauscht mal andächtig und mal klatscht es mit. Musikalisch, lustig, schlagfertig und von klein auf in Position fechten die Wagner-Brüder mit Geige und Bogen um die Gunst des Publikums.-----------------------------------------Dominik Wagner studierte an der Hochschule für Musik ?Hanns Eisler? in Berlin Musik-Theaterregie. Es folgte eine Regieassistenz bei Hans Neuenfels an der Münchner Staatsoper. 2013 schrieb, inszenierte und produzierte er sein erstes Musical ?Sarg Niemals Nie? zusammen mit Jörn-Felix Alt und Christoph Reuter. Seitdem feierte ?Sarg Niemals Nie? erfolgreiche Gastspiele in der Bar jeder Vernunft, im Deutschen Theater München, im Kammertheater Karlsruhe, in der Neuköllner Oper, u.a.. 2015 folgte die Uraufführung des Musicals ?Perfect Town?. Dominik Wagner ist seit 12 Jahren Teil von Ass-Dur und arbeitet neben seiner Bühnentätigkeit als Coach, Autor und Regisseur für andere Künstler.Florian Wagner studierte an der Hochschule für Musik und Theater München Schulmusik und Gehörbildung. 2015 war er Pianist der Tour-Version der Stage-Produktion von Ich war noch niemals in New York, sowie 2016 von Tanz der Vampire. Bei der Uraufführung des Musicals Sarg niemals nie in der Neuköllner Oper in Berlin 2014 war er musikalischer Leiter. 2015 wurde das Musical Perfect-Town, zu dem er die Musik schrieb, in München uraufgeführt. Florian arbeitet unter anderem bei fastfood Improtheater, Volxgesang Das Mitsing-Konzert und dem Gospelchor St. Lukas. Seit 2017 ist er als Korrepetitor für die Bayerische Theaterakademie August-Everding tätig. Zudem hat er jeweils einen Lehrauftrag für Schulpraktisches Klavierspiel an der LudwigMaximilians-Universität und der Hochschule für Musik und Theater München. Florian Wagner ist als Pianist, Sänger, Arrangeur, Komponist und Musikkabarettist tätig.https://www.ass-dur.de/",
            "startDateTime": "11/6/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28926754699&a=774719&m=13738"
        },
        {
            "id": "e211",
            "title": "Ingo Börchers - Das Würde des Menschen",
            "description": "Haltung bewahren und Bewährtes aufgeben. Vorübergehend stehen bleiben. Den Ausnahmezustand zur Regel machen.Und: Fragen stellen. Wollen wir das Digitale als Werkzeug oder als Habitat begreifen? Gibt es ein Davor und Danach?Oder eher ein Davor und Seitdem? Vielleicht gar ein Davor und Ab Jetzt? Es schlägt die Stunde der Utopien. Die Utopie ist befreundet mit dem Konjunktiv. In ihr steckt das Mögliche. Und hat damit immer das Potenzial zur zukünftigen Wirklichkeit. Auch der Fall der Mauer war bis zum tatsächlichen Fall nichts anderes als Utopie. Man muss mit allem rechnen. Sogar mit dem Guten!Das Würde des Menschen - das sind philosophisch-satirische Gedankenspiele von und mit Ingo Börchers; das ist Kabarett einmal anders gedacht: Nicht Was ist schlecht gelaufen?, sondern Wie könnte es besser sein?. Mehr Infos: https://www.ingoboerchers.de/Foto: Nicolay Georgiew",
            "startDateTime": "11/5/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28926758815&a=774719&m=13738"
        },
        {
            "id": "e212",
            "title": "JUSTIN SULLIVAN solo - Surrounded Tour 2021",
            "description": "NEW MODEL ARMYs FRONTMANN Justin Sullivan VERÖFFENTLICHT BRANDNEUES STUDIOALBUM?SURROUNDED?Am 28. Mai 2021 veröffentlicht Justin Sullivan mit ?Surrounded? sein zweites Soloalbum ? achtzehn Jahre nach seinem gefeierten Debüt?Album ?Navigating by the Stars? (2003). ?Surrounded? ist eine Sammlung von sechzehn neuen Songs, die in den ersten Wochen des Lockdowns 2020 geschrieben wurden. Allesamt großartige Kompositionen, die Sullivans Liebe zum Geschichtenerzählen, zu weiten Landschaften und unvergesslichen Atmosphären verdeutlichen.Größtenteils zu Hause aufgenommen, enthält das Album auch Beiträge von Gast?Musikern, darunter Jon Thorne am Bass (Lamb), an der Harfe Tom Moth (Florence and the Machine ? und Bruder des NMA?Bassisten Ceri Monger), sowie Streicherarrangements der befreundeten Komponisten Tobias Unterberg, Henning Nugel und Shir?Ran Yinon. Ebenfalls zuhören sind die aktuellen Mitglieder von New Model Army. Das Album wurde von Lee Smith in den Greenmount Studios in Leeds abgemischt, dem Co?Produzenten der letzten Alben von New Model Army, darunter auch ihr 2019er Erfolgsalbum ?From Here?, mit dem die Band ihre bislang höchste Chartplatzierungen weltweit erzielte.www.newmodelarmy.org",
            "startDateTime": "9/13/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28926758837&a=774719&m=13738"
        },
        {
            "id": "e213",
            "title": "marotte Figurentheater - Der kleine Eisbär",
            "description": "nach den Büchern von Hans de Beer für Kinder ab 3 JahrenHoch oben im Norden, wo Eis und Schnee ewig sind, wohnt Lars, der kleine Eisbär. Lars kann schon auf dem Rücken seines Vaters reiten und mit einer Pfote Fische fangen. Nur schwimmen, das kann er noch nicht so gut. Eines Tages passiert etwas Schreckliches. Lars treibt ganz allein auf einer Eisscholle auf das offene Meer hinaus. Doch dabei erlebt er sein erstes Abenteuer. Ein Stück für die ganz Kleinen. Darüber, wie schön es ist, die Welt zu entdecken. Und über das schönste Wort, wenn man genug gesehen hat: Nach Hause ...https://www.marotte-figurentheater.de/",
            "startDateTime": "10/17/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28952448833&a=774719&m=13738"
        },
        {
            "id": "e214",
            "title": "marotte Figurentheater - Vom kleinen Maulwurf, der wissen wollte, wer ihm auf den Kopf gemacht hat",
            "description": "Nach dem bekannten Kinderbuch von Wolf Erlbruch für Kinder ab 3 JahrenAls der kleine Maulwurf eines Tages seinen Kopf aus der Erde streckte, passierte es: Es war rund und braun und das Schlimmste war, es landete direkt auf seinem Kopf!Wer war das?Die Ziege war es nicht, der Hase war es nicht, das Pferd war es nicht. Die Fliege war es auch nicht, aber die weiß, wer es war.Wie der kleine Maulwurf zu seinem Recht kommt, erzählt die bekannte Geschichte mit Spannung, Witz und Poesie.Mehr Infos: http://marotte-figurentheater.de",
            "startDateTime": "11/14/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28952448853&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/7P99JvyY.jpeg"
        },
        {
            "id": "e215",
            "title": "Theater Tiefflieger - Die grandiose Clownshow",
            "description": "Für Kinder ab 4 JahrenHingehen! Mitmachen! Ablachen! Wenn Paul der Tiefflieger auf der Bühne landet, beginnt die Wahnsinns-Show und Lachen bis zum Umfallen ist angesagt. Der Todessprung wird gewagt. Bälle sausen umher. Der Clown stürzt von einer ?Banane?, manchmal direkt ins Publikum... Wenn ihm die Lust vergeht, von allen ausgelacht zu werden, dreht er den Spieß einfach um. Er holt sich seine Schauspieler auf die Bühne, die er dann zu Tieren und anderem verwandelt. Immer mehr Wunderdinge holt er aus den Koffern heraus und baut das Unnütze ein in kleine Geschichten, die nur leben durch die Fantasie, die er in den Kindern und Erwachsenen weckt. Nur mit Hilfe der Zuschauer kann das alles gut gehen! Wer das verpasst, ist selber schuld.  Mehr Infos: http://www.theater-tiefflieger.de",
            "startDateTime": "10/10/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28952449215&a=774719&m=13738"
        },
        {
            "id": "e216",
            "title": "Theater Kunstdünger - Hannah und die Bohnenranke",
            "description": "Für Kinder ab 5 JahrenDie Geschichte eines Kindes, das mit Leichtigkeit das Richtige entscheidet. Eine arme Witwe lebt allein mit ihrem Kind. Als die einzige Kuh keine Milch mehr gibt, soll Hannah sie auf dem Markt verkaufen. Unterwegs trifft sie einen Mann, der ihr für die Kuh fünf Zauberbohnen anbietet. Hannah nimmt das Angebot an. Ihre Mutter ist zornig, als Hannah mit fünf Bohnen und ohne Kuh nach Hause kommt und wirft die Bohnen aus dem Fenster. Doch am nächsten Morgen sind die Bohnen riesig gewachsen und reichen bis zum Himmel.Hannah klettert zweimal nach oben ins Land der Wolken. Beim ersten Mal stiehlt sie dem dort lebenden Riesen einen Beutel voll Gold, beim zweiten Mal ein Huhn, das goldene Eier legt.Bei ihrem dritten Ausflug ins Reich der Riesen verfolgt sie der Riese. Bevor er Hannah aber erreichen kann, die dieses Mal die goldene Zauberharfe des Riesen mit nach Hause nimmt, zerhackt Hannah die Bohnenranke. Der Riese stürzt zu Boden und stirbt. Dank der goldenen Eroberungen haben Hannah und die Mutter, sowie das ganze Dorf von nun an ein gutes Auskommen. Mehr Infos: https://www.theater-kunstduenger.de/",
            "startDateTime": "10/24/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=28952449217&a=774719&m=13738"
        },
        {
            "id": "e217",
            "title": "Cara - Live 2021",
            "description": "CARA ist eine multinationale, mit zwei Irish Music Awards ausgezeichnete Celtic Folk-Band.Die fünf MusikerInnen kommen aus Irland, Schottland und Deutschland und haben in den 15 Jahren ihres Bestehens einen ausgezeichneten Ruf erworben für ihre innovativen Arrangements, ihre Eigenkompositionen und Songwriting, die virtuose Darbietung und eine charismatische Bühnenpräsenz.CARA steht für die gelungene Verbindung von Gesang gleich zweier herausragender Sängerinnen mit den rasanten irischen Instrumentalstücken auf allerhöchstem Niveau. Virtuose Soli auf dem irischen Dudelsack, rasante Geigenpassagen, ergreifende Balladen, meisterhaftes Spiel auf Gitarre und Bodhrán ? die Liste könnte noch lange weitergehen. Abgerundet durch die charmant-humorvolle Präsentation garantiert ein Abend mit Cara höchsten musikalischen Genuss und beste Unterhaltung.Dies brachte ihnen Tourneen und umjubelte Konzerte in den USA, Australien, Irland, Schottland, Dänemark, Deutschland, Frankreich, Benelux, Österreich, Italien und der Schweiz.",
            "startDateTime": "10/20/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=26927306677&a=774719&m=13738"
        },
        {
            "id": "e218",
            "title": "Yatao - Tour 2021",
            "description": "Als DAS Handpan Duo Deutschlands, haben Malte und Alex sich in den vergangenen Jahren einen festen Platz in der Handpan Welt verschafft. Im Internet millionenfach geklickt, auf Konzerten von tausenden Menschen besucht - blicken sie auf sechs intensive Jahre zurück, die sie musikalisch, sowie menschlich haben reifen lassen. Wer Yatao kennt freut sich schon auf die berührenden Momente auf den Konzerten, die weit hinaus gehen über den puren Genuss von Musik. Sie lassen das Publikum teilhaben an den Höhen und Tiefen ihrer Freundschaft - eine Freundschaft die im Klang ihren Ausdruck findet. Nicht nur auf Konzerten, sondern auch auf Workshops teilen die beiden jungen Männer ihre Faszination für das Instrument und berühren auch dort durch die Lebendigkeit und Authentizität die ihnen nachgesagt wird.",
            "startDateTime": "7/3/21 19:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=27559854019&a=774719&m=13738"
        },
        {
            "id": "e219",
            "title": "Les Yeux d?la Tête - Live 2021",
            "description": "Schon bald 15 Jahre Les Yeux D?La Tête! Nachdem sie 2016 und 2017 ausgiebig ihr Zehnjähriges gefeiert hatten, mit grandiosen Konzerten versteht sich, nutzten sie 2018 um ihre 4. CD aufzunehmen. Die dann Anfang 2019, gleichzeitig zur Tour, erschienen ist. Dann kam erstmal 2020. Im Sommer 2021  soll die 5. CD erscheinen ? zum 15 jährigen Jubiläum im Herbst. Mit ein bisschen Glück klappt das dann auch mit der Tour dieses Jahr!Die fünf Musiker haben uns schon seit 2008 auf eine ganz besondere musikalische Reise mitgenommen: schier platzend vor Energie und Spielfreunde, entführen und entführten sie in die Spelunken Paris?, in die ganz eigene Untergrund-Welt der Metrostationen, aber auch an die Ufer der Seine oder auf eine Hochzeit in Osteuropa. Ob Sinti-Swing, französischer Chanson, poetischer Punk oder Jazz, Les Yeux D?La Tête bedienen sich unverkrampft verschiedenster musikalischer Einflüsse. Über 100 eindrucksvolle Konzerte (hierzulande) später, haben ihre Auftritte nichts an Intensität und guter Laune eingebüßt.Sie erzählen dabei weiterhin eindrucksvoll und sensibel von den Themen des Alltags ? von Liebe, Freude und Spaß am Feiern und über die ganzen Verrückten da draußen, die uns tagtäglich begegnen. Mal himmelhoch-jauchzend auf dem Tresen einer Bar tanzend (oder gleich auf den Dächern), mal betrübt am Seine-Ufer sitzend, erzeugen sie eine mitreißende farbenfrohe Atmosphäre, die unvergessliche Konzerte erleben lässt!",
            "startDateTime": "10/15/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=28992262409&a=774719&m=13738"
        },
        {
            "id": "e220",
            "title": "Die Mathias Richling Show",
            "description": "Er beobachtet gerne Menschen und die Politik. Auf diese Weise versucht er den politischen Menschen zu ergründen: Kabarettist und Satiriker Mathias Richling lebt vom Sinn und Unsinn der Politik. Auch in seiner neuen Show ?Der Richling Code? hat Richling sich mit Themen wie Gentechnik, Umwelt-Desaster und der Bankenkrise beschäftigt. Dabei schlüpft Richling wie gewohnt in die Rollen verschiedener Persönlichkeiten, um so das Widersprüchliche zu parodieren.Die neue Richling-Show über den Missbrauch in Deutschland ist ebenso zukunftsweisend wie vergangenheitsbewältigend: unser reales Leben und sein virtuelles, vielfach verschlüsseltesAbbild, das sich aus vielen Daten-Pixel zusammensetzt, sind ebenso Thema des neuesten Pro-gramms wie Gentechnik oder Bankenkrise und natürlich das gesamte Führungspersonal des Deutschland-Konzerns. Richling, der von vielen Kritikern als der bester Parodist der deutschen Kabarettszene gefeiert wird, bringt seine jüngsten Beobachtungen wie immer in literarisch anspruchsvolle Form. Über seine Texte gibt es bereits Magister- und Doktorarbeiten. Niemand aus Politik und Show bleibt verschont. Man sollte also nicht versäumen, die Qualität der völlig neuen Richling-Parodien von Angela Merkel über Winfried Kretschmann bis Helmut Schmidt live zu überprüfen. (Foto: Rafael Kroetz)",
            "startDateTime": "12/9/22 20:00",
            "venueId": "v7",
            "offerURL": "https://www.awin1.com/pclick.php?p=29017919113&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/uEieFKiD.jpeg"
        },
        {
            "id": "e221",
            "title": "Simin Tander - Unfading Tour 2021",
            "description": "Nach ihrem zweiten großartigen Soloalbum Where Water Travels Home (Jazzhaus Records) und der international gefeierten Zusammenarbeit mit dem norwegischen Pianisten Tord Gustavsen auf dem ECM-Album What Was Said (Jahrespreis der deutschen Schallplattenkritik) öffnet die deutsch-afghanische Sängerin Simin Tander eine neue Tür in ihrer künstlerischen Laufbahn. Unfading heißt ihr neues Werk, das sie mit einem frisch formierten und ungewöhnlich besetzten Quartett eingespielt hat. Darauf verwebt die Künstlerin mühelos den schöpferischen, weiblichen Fluss eines geerdeten Songwritings mit Echos des Archaischen, verknüpft die Kraft von Liedern voller emotionaler Tiefe mit Passagen improvisatorischer Freiheit.",
            "startDateTime": "11/23/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29075433075&a=774719&m=13738"
        },
        {
            "id": "e222",
            "title": "Tito & Tarantula - 8 Arms to hold you Tour 2021",
            "description": "Tito & Tarantula  - 8 ARMS TO HOLD YOU Tour 2020   Nach Ihrer erfolgreichen Albumtour in 2019 kehren Tito & Tarantula im Herbst 2021 für weitere Zusatztermine  nach Europa zurück.  ?8 ARMS TO HOLD YOU? fängt die Farben und Gerüche der Wüste ein, ist leidenschaftlich und romantisch. Zusammen mit Titos? elektrisierenden Vocals ein weiteres Meisterstück in seiner langen und erfolgreichen Karriere als Musiker, Komponist und Schauspieler.  Geboren in Mexico und als Sohn eines Fallenstellers in der Wildnis Alaskas aufgewachsen, begann Tito Larrivas Karriere in Los Angeles. Mit den PLUGZ und später den CRUZADOS nahm diese schnell Fahrt auf. Eine Top10 Single und ein Cover auf dem Billboard Magazin später wurde Larriva Teil der L.A. Musik- und Filmszene der 80er Jahre. Im Probenraum nebenan machten die Red Hot Chili Peppers ihre ersten Gehversuche. Emmylou Harris, Jeff Porcaro (der früh verstorbene TOTO Drummer) waren seine Nachbarn. Zeitgleich begann auch die Schauspielkarriere des ausgebildeten Ballett-Tänzers.  Nach dem Debüt als ?Hammy? in der ?Pee-wee Herman Show? (1981) arbeitete er mit Patrick Swayze (Roadhouse), Johnny Depp (Once Upon A Time In Mexico), Antonio Banderas (Desperados 2), mit Mel Gibson und Milla Jovovic in Wim Wenders ? ?The Million Dollar Hotel?, David Byrne (True Stories), Cheech Marin (Born In East LA), in dem Oscar-prämierten Kurzfilm ?Session Man? sowie mit R. Rodriguez (Grindhouse). Tito Larriva schrieb Musik für über 50 Filme (u.a. die Titelsongs für ?Machete? 2010 und ?Machete kills? 2013) und Fernsehserien.  Der Startschuss für Tito & Tarantula war Robert Rodriguez ? Angebot an ?From Dusk Till Dawn? (1995) mitzuarbeiten. Die legendäre Performance als Vampire Hausband der ?Titty Twister? Bar und der weltweite Erfolg des Films brachte die Band (als Support von Joe Cocker) erstmals nach Europa. Der Europa-Release des Debüt Albums ?Tarantism? mit den Klassiker Songs aus ?From Dusk Till Dawn?, ?After Dark?, ?Angry Cockroaches?, sowie ?Strange face of love? folgte 1997. Diese Songs markieren den Beginn einer neuen Ära amerikanischer Filmmusik und stellen Tito Larrivas außergewöhnliche Fähigkeiten als Sänger und Komponist unter Beweis.  Tito & Tarantula entstand aus den wöchentlichen Sessions, die Larriva unter dem Namen Tito & Friends mit stets herausragenden Musikern der L.A. Szene veranstaltete. Neben den Gitarristen Steven Hufsteter von dem gesagt wird, er hätte Bob Dylans Angebot, in seine Band einzusteigen abgelehnt, war die Band mit Hochkarätern wie dem Gitarristen Peter Atanasoff (Norah Jones, Ricky Lee Jones) und den Drummern Alfredo Ortiz (Beastie Boys/Gogol Bordello) und Rafael Gayol (A-ha, Leonard Cohen) in Europa, Asien Nord und Südamerika auf Tournee. www.titoandtarantula.com www.facebook.com/TitoAndTarantulaOfficial",
            "startDateTime": "10/27/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29116421157&a=774719&m=13738"
        },
        {
            "id": "e223",
            "title": "Stunchile - Live 2021",
            "description": "`Erdige, bluesgetränkte Rock-Kracher treffen auf atmosphärische, zeitlose Melodien mit Ohrwurm ? Charakter`. So könnte man den energiegeladenen Sound des brandneuen Rock Trio´s STUNCHILE aus dem Süden Deutschlands wohl am besten beschreiben.Obwohl weder die quirlige Frontfrau Leonie, noch Gitarrist Chris oder Drummer Fabi jemals Wüsten Luft geschnuppert haben und das Trio ursprünglich am Rande des Schwarzwald groß geworden ist, schaffen ihre Songs eine Atmosphäre, die einen schnurstracks auf die unendlichen Weiten kilometer-langer Highways mitten durch eine riesige Wüstenlandschaft katapultiert. Erinnerungen an Tarantio´s `From Dusk till Dawn` gepaart mit ZZ Top´s `La Grange` werden wach, der `Southern Spirit` mit eine Prise Janis Joplin im Gepäck. Zusammen Whiskey trinken mit Bands wie Wolfmother, Rival Sons oder auch mit großartigen Performerinnen à la Aretha Franklin.STUNCHILE verstehen es all diese Attribute zu vereinen und sie sich zu eigen zu machen, denn angestaubt klingt ihr mächtiger Rocksound niemals. Moderner Rock mit einem guten Schuss Oldschoolness !!!!",
            "startDateTime": "6/19/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29137678675&a=774719&m=13738"
        },
        {
            "id": "e224",
            "title": "DOTA - Wir rufen Dich, Galaktika - Tour 2021",
            "description": "Die Berliner Band DOTA um die Musikerin Dota Kehr veröffentlicht ein neues Album. Aus feinsinnigen und vielschichten Texten stricken sie eingängige Popsongs, in denen Platz ist für sanfte Poesie, Politisches und Partystimmung, für Melancholisches und Albernes ? mit so mühelosen Übergängen dazwischen, dass die Tragweite mancher Gedanken erst beim zweiten oder dritten Hören einsickert.",
            "startDateTime": "12/3/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29164331719&a=774719&m=13738"
        },
        {
            "id": "e225",
            "title": "Die Udo Jürgens Story - Sein Leben, seine Liebe, seine Musik!",
            "description": "Packende Melodien, ein einzigartiger Charakter und ein unsterbliches Lebenswerk: Udo Jürgens begeisterte auf seinen Tourneen Millionen von Fans. Im Rahmen eines emotionalen Liederabends geht ?Die UDO JÜRGENS Story? in diesem besonderen Jahr 2019 wieder auf Tour. Denn am 30. September wäre der Ausnahmekünstler 85 Jahre alt geworden, am 21. Dezember jährt sich sein Todestag zum fünften Mal. Über die Hommage an den Grandseigneur der deutschen Unterhaltungsmusik schwärmt sogar Tochter Jenny Jürgens: ?Ein Muss für alle Udo-Fans!?.Der Österreicher, der 1966 den Grand Prix Eurovision de la Chanson gewann, feierte mit dem Lied ?Merci, Chérie? einen Welthit mit Hitparaden-Spitzenpositionen in über 20 Ländern. So wurde der Chansonnier zu einem der bedeutendsten Entertainer des 20. und frühen 21. Jahrhunderts. Mit mehr als 100 Millionen verkauften Tonträgern und über 50 veröffentlichten Musikalben war er einer der kommerziell erfolgreichsten männlichen Solokünstler der Welt. Fünf Jahre nach seinem Tod bietet sich mit ?Die UDO JÜRGENS Story? für alle Fans die Gelegenheit, ihrem Idol noch einmal ganz nahe zu kommen. Der amüsante, kurzweilige und unterhaltsame Konzertabend wurde zusammengestellt von Gabriela Benesch, die im Jahr 2014 in Wien als beste Theaterschauspielerin des Jahres ausgezeichnet wurde. Der ausgebildete Pianist Alex Parker singt dabei die Werke des unvergessenen Schlagerbarden, als stünde dieser persönlich auf der Bühne. Die musikalische Zeitreise beinhaltet alle großen Hits wie ?Mit 66 Jahren?, ?Griechischer Wein? und ?Ich War Noch Niemals In New York?. Für den gleichnamigen Kinofilm durfte Parker sogar den Titelsong einsingen. Ganz im Stil des Entertainers begleitet er sich selbst am Klavier. Tochter Jenny Jürgens schwärmte nach der Premiere von ?Die UDO JÜRGENS Story?: ?Ein Muss für alle Udo-Fans!?Quelle: www.cofo.de",
            "startDateTime": "3/10/22 20:00",
            "venueId": "v19",
            "offerURL": "https://www.awin1.com/pclick.php?p=29201144259&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/0q6J5Ufk.jpeg"
        },
        {
            "id": "e226",
            "title": "Sophie Passmann - Komplett Gänsehaut",
            "description": "»Ich bin jetzt 27 Jahre alt und ich habe nur einen Lebenstraum: 28 Jahre alt werden.« Bloß nicht so werden, wie alle anderen um sich herum. Bloß nicht so werden, wie man schon längst ist. Bloß schnell  Erwachsen  werden,  um  in  die  transzendentale  Form  des  Verklärens  eintauchen  zu  dürfen,  die Jugend als »die beste Zeit des Lebens« zu feiern. Sophie Passmann teilt aus gegen alle, am verheerends-ten aber gegen sich selbst und ihresgleichen.  Dies  ist  kein  Memoir,  kein  Roman,  keine  Biographie,  es  ist:  literarischer  Selbsthass.  Das  finden  Sie anmaßend? Genau das ist es und genau das will Sophie Passmann: sich anmaßen, das zu tun, was sie tun möchte. Komplett Gänsehaut einfach. Sophie Passmann ist Moderatorin und Autorin. Ihr Buch ?Alte Weiße Männer? war ein Bestseller, für die Musikbibliothek  von  KiWi  schrieb  sie  über  Frank  Ocean.  Zu  beiden  Büchern  sind  die  Hörbücher  als Autorinnenlesungen bei tacheles! erschienen. Für das ZEITMagazin schreibt Sophie Passmann monatlich die  Kolumne  ?Alles  oder  Nichts?.  Ihr  Kultur-Podcast  ?Jubel  und  Krawall?  mit  Matthias  Kalle  erscheint wöchentlich bei audible. In der Zeit, die übrig bleibt, redet sie auf Instagram über Politik und auf Twitter zettelt sie Streit mit alten weißen Männern an.",
            "startDateTime": "5/5/22 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29201148027&a=774719&m=13738"
        },
        {
            "id": "e227",
            "title": "King King - Live 2022",
            "description": "Keine Frage ? die Bluesrocker aus Glasgow schwimmen auf einer Erfolgswelle. King King haben dank ihres letzten Albums ?Exile & Grace? (VÖ Herbst 2017) einen Quantensprung in ihrer Karriere gemacht. Das Album war auf Platz 31 der britischen Albumcharts und wurde von Classic Rock zum ?Blues Album of the Year? gekrönt. Dazu kommen Top Plätze bei den iTunes und Amazon Charts ? King King sind nun definitiv im Mainstream angekommen. Auf ihren Lorbeeren ausruhen wollen sich Alan Nimmo (Vocals/Gitarre), Zander Greenshields (Bass), Andrew Scott (Drums) und Jonny Dyke (Orgel/Piano) aber keinesfalls. ?Wir sind noch nicht am Ziel. Wir wollen diese Band soweit bringen, wie wir können.?",
            "startDateTime": "10/12/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29201148147&a=774719&m=13738"
        },
        {
            "id": "e228",
            "title": "Patrick Salmen - Ekstase",
            "description": "Patrick Salmen zelebriert mit sonorer Stimme und staubtrockenem Humor die literarische Gattung der Kurzgeschichte wie kaum ein anderer. Mit feinem Gespür für liebenswerte und absurde Details geht es um nichts weniger als die Idiotie der Menschheit. Salmens gesammelte Anekdoten und Alltagsbeobachtungen reichen von bitterböse bis zartbitter. Weil der Wahnsinn kein Ende nimmt, hat er seine Gedanken darüber bereits in mehreren Programmen und Büchern zusammengetragen. Und die trägt er jetzt vor. Jetzt kommt Ekstase ? und zwar wörtlich. Sogar für Selbstversuche war sich Salmen nicht zu schade, um der Tragikomik unseres Alltags auf den Grund zu gehen. Nicht nur Hygge, Digital Detox und Influencer bekommen ihr Fett weg: Der Zuhörer erhält auch ein wertvolles Live Coaching. Darauf gibt er sein Wort. Und sogar ganze Sätze.",
            "startDateTime": "10/20/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29222264577&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/nshs760a.jpeg"
        },
        {
            "id": "e229",
            "title": "el mago masin - 100 Jahre Liegestuhl",
            "description": "El Mago Masin hat einen Fünfjahresplan gemacht. Im Liegestuhl. Dabei ist er eingeschlafen. Um im Hamsterrad der Leistungsgesellschaft im Liegestuhl mithalten zu können, bleibt nur eins: Er braucht einen Privatsekretär, eine neue Gitarre und jemanden, der seine Pflanze gießt, wenn er auf Tour geht, um sein konziliantes Publikum mit neuen Liedern und konspirativen Erlebnissen zu amüsieren. Obwohl: Seine Zimmerpflanze neben ihm wirkt sattgrün und kräftig. Seit Jahren goss er sie zuverlässig, bis er nun bemerkt, dass er sich um eine Plastikpflanze kümmert.Eine sehr wichtige Zeitung bezeichnete El Mago Masin einst als Liedermacher mit Peter-Pan-Syndrom. Treffend, denn am Ende findet er ein Igelbaby und backt einen Pustekuchen. Während draußen die Welt immer komplexer wird, wollen wir ein unterschätztes, klappbares Möbelstück feiern, das für Ruhe und Gelassenheit steht. Eine funkelnde Hommage an den Liegestuhl. Denn im Liegestuhl sind wir alle gleich - gleich glücklich.Raus aus dem Alltag, rein in den kuriosen Kosmos von El Mago Masin!Mehr Infos: http://elmagomasin.de/Foto: Enrico Meyer",
            "startDateTime": "11/27/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29222264823&a=774719&m=13738"
        },
        {
            "id": "e230",
            "title": "Nils Wülker - GO Tour 2021",
            "description": "Preisgekrönter Trompeter und Komponist Nils Wülker mit letztem Teil seiner Album-Trilogie ?GO? auf Deutschlandtournee Der Kreis schließt sich. Mit ?GO?, Nils Wülkers energischer Exkursion in die elegante Elektronik, komplettiert sich eine über mindestens fünf Jahre erlebte Albumtrilogie.Für diese entführte uns der charismatische Trompeter und Songschreiber, der 2019 zum vierten Mal mit dem German Jazz Award in Gold dekoriert wurde, mit dem ersten Teil ?UP? in den Pop und mit dem Nachfolger ?ON? zum HipHop. Das dritte und abschließende Werk ?GO? (ab 4. Sep) wird noch im gleichen Herbst seine Bühnenfeuertaufe mit einer umfangreichen Deutschlandtournee begehen.Nils Wülkers zehntes Studioalbum ist zwar mit all den analogen Synthesizern, dem Arpeggiator, den organischen Loops und Beats »maximal nicht live«, wie er selbst  sagt, besticht dafür im Kontrast mit dem direktesten und dynamischsten Trompetenspiel jenseits seiner Livealben und Konzerte ? eine Lektion, die der 42-jährige »große Melodiker« (Die Zeit) seinem 2019 erschienenen Livealbum ?Decade? verdankt. Produziert mit Ralf Christian Mayer (Clueso, Fanta 4) und komplett selbst komponiert, zeigt ?GO? die bisher extremste Seite des vielfach preisgekrönten Musikers - eingespielt mit Mitgliedern seiner beliebten Liveband, dazu dem Wiener Keyboarder Albin Janoska (SOHN) und dem amerikanischen Trompeter Theo Croker im alles andere als sterilen Corona-Distanz-Duo ?Highline?.Klar, dass mit dem bewährten, druckvollen Bandsound auch die Liveumsetzung dieses Albums seine ganz besondere Magie entfalten wird, wovon man sich zum Jahresende ausgiebig überzeugen werden kann.",
            "startDateTime": "11/9/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29222268837&a=774719&m=13738"
        },
        {
            "id": "e231",
            "title": "Die Stützen der Gesellschaft - Leseshow",
            "description": "Mit Fee, Frank Glötgen, Alex Burkhard und Sven KemmlerOb Henrik Ibsen diese Show im Sinn hatte, als er 1877 in seiner Münchner Wohnung das gleichnamige Theaterstück schrieb? Man kann davon ausgehen! Und deshalb üben sich Fee, Frank Klötgen, Alex Burkhard und Sven Kemmler seit vielen Jahren mit großem Zuspruch im Stützen der Gesellschaft. Optisch in den Zwanzigern und textlich immer brandneu und stilistisch vielfältig.Und das völlig zurecht. Denn sind wir ehrlich: Es braucht ein paar tragende Stützen in dem vor lauter Chirurgenpraxen und Anwaltskanzleien schon morschen Gerüst unserer geldigsten aller eher kleinen Weltstädte. Stützen, die alles versprechen und ab und zu sogar etwas halten, zum Beispiel die Gesellschaft. Und sei es auch nur die Spaßgesellschaft. Doch die Vier vergessen auch nicht die verdienten Menschen, die in der Vergangenheit stützten. Und so erwecken sie in jeder Show eine ehemalige Stütze unserer Stadt literarisch zum Leben. Ob berühmte Nasen wie Kästner, Rilke, Brecht und Thoma, oder zunächst unbekanntere Namen wie Fanny zu Reventlow, Erich Mühsam, Muhammad Iqbal und besagter Henrik Ibsen ? sie alle leisten ihnen an den stets außergewöhnlichen Abenden Gesellschaft. Sven Kemmler ist regelmäßig im Vorderhaus zu sehen und Alex Burkhard war 2019 bei der Lesereihe ?unter sternen ? vorlesen im August? zu Gast.Mehr Infos: http://die-stuetzen.de/",
            "startDateTime": "11/26/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29222268891&a=774719&m=13738"
        },
        {
            "id": "e232",
            "title": "marotte Figurentheater - Der Grüffelo",
            "description": "Ein Stück für Jung und Alt ab 4 Jahren**KUNST KOMMT VON KENNEN**Der große Wald ist voller Gefahren. Da ist es gut, wenn man einen starken Freund hat. Und wenn man keinen hat, erfindet man sich eben einen. So wie die kleine Maus, die jedem, der sie fressen will, mit dem schrecklichen Grüffelo droht. Dabei gibt`s Grüffelos gar nicht. Oder doch?Mehr Infos: https://www.marotte-figurentheater.de/",
            "startDateTime": "11/15/21 10:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29275547763&a=774719&m=13738"
        },
        {
            "id": "e233",
            "title": "Jess Jochimsen - Meine Gedanken möchte ich Manchmal nicht haben",
            "description": "Jess Jochimsen will raus aus seinem Gedankenkarussell. Zumindest für einenAbend. Und mal nachschauen, was die Pandemie übrig gelassen hat ... Also machtder Freiburger Kabarettist und Autor Inventur im Kopf und sucht nach denGeschichten, die im Radau der letzten Zeit untergegangen sind.Jess Jochimsens neues Programm ist ein kabarettistischer Gedankenaustausch,eine fortlaufende Bestandsaufnahme der politischen Lage, ein Herantasten an dieZeitrechnung ?nach C.?.Zurückgelehnt und entschleunigt dreht Jess Jochimsen den notorischenRechthabern den Ton ab und beweist, was Satire alles sein darf: anrührend, klug,musikalisch und nicht zuletzt sehr lustig. Und zum guten Schluss zeigt erUrlaubsbilder. Für Daheimgebliebene.",
            "startDateTime": "10/15/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29275547847&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/BkWP9NC3.jpeg"
        },
        {
            "id": "e234",
            "title": "Claudia Pichler - Eine Frau weißblau",
            "description": "Am liebsten hätte Claudia einfach ihre Ruhe. Doch weder in der Großstadt noch in ländlicher Idylle gelingt das: München, die Weltstadt mit Herzrhythmusstörungen schwankt zwischen Baustellenlärm, Boazn-Romantik, Großdemo, Kultur-Happening und ständigem Warten auf die depperte S-Bahn. Und auch in der bayerisch-ländlichen Idylle tummeln sich die freizeitwütigen Erlebnisjunkies, immer auf der Suche nach dem perfekten Foto. Und Claudia lässt sich halt gern provozieren: von Menschen, die ihre Höflichkeit und Zurückhaltung schamlos ausnutzen, von Menschen - ach ge, sagen wir´s wie es ist - von Männern, die sie chronisch unterschätzen und sich selbst pathologisch überschätzen. Dabei hat die echte Münchnerin eh ihr eigens Päckchen zu tragen: Ist sie doch seit Geburt zerrissen zwischen bayerischer Tradition und Münchner Moderne. In Aubing zweisprachig aufgewachsen, dahoam Boarisch, outdoor Hochdeutsch. Eine Jugend zwischen Fredl Fesl und den Ärzten, Biermösl Blosn und Backstreet Boys, Dampfnudel und Calippo Cola. Bis heute dauert der Struggle an: Statt einer veritablen SchafkopfPartie legt sie sich lieber Tarot-Karten, statt Äpfel am nächsten Obststandl zu kaufen, gibt sie lieber eine Bestellung beim Universum auf. Ihren bairischen Dialekt liebt sie, aber bei so manch übereifrigen Dialekt-Polizist stellen sich ihr die Nackenhaare auf. Bevor sie sich aufregt, weil jemandem ein ?Tschüss? entfleucht, sucht sie lieber nach den schönsten bairischen Komplimenten, weil geschimpft wird eh viel genug.So bahnt sich Claudia ihren Weg durch den Freistaat, beobachtet, schnappt auf oder manchmal über und macht sich ihren ganz eigenen Reim auf ihr bayerisches Universum - humorvoll, charmant, nixscheißert und mit dem ein oder andern Lied garniert.Mehr Infos: https://claudiapichler.com/Foto: Josepha und Markus",
            "startDateTime": "11/19/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29275548707&a=774719&m=13738"
        },
        {
            "id": "e235",
            "title": "Lauschelieder - Pfiffige Musik  für  kleine Ohren",
            "description": "Für Kinder ab 3 JahrenMit Humor und Begeisterung bringen die vier Musiker*innen der Band Lauschelieder eine bunte Kinderliedermischung aus Musikstilen wie Jazz, Salsa oder Swing auf die Bühne. Das junge Publikum wird durch aktives Mitgestalten in das Konzert eingebunden und geht mit der Band auf eine kurzweilige musikalische Reise. Da wird Gorilla Rudi zum Rockstar, der Wanderbär erzählt von seinen Abenteuern, und die Trolle entführen in die Welt der Fabelwesen.Es ist eindrucksvoll, wie sehr die eingängigen Lieder schon die Allerkleinsten gespannt zuhören lassen und zum Mitmachen animieren. Das musikalische Gehör wird durch unkonventionelle Rhythmen, Taktwechsel und kreative Instrumentierungen wie nebenbei geschult. So gibt es neben dem Spaß am Mitsingen und Tanzen immer wieder Neues zu erlauschen ? auch für große Ohren.Mehr Infos: https://www.lauschelieder.de/",
            "startDateTime": "10/16/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29275548711&a=774719&m=13738"
        },
        {
            "id": "e236",
            "title": "Vagabündel Figurentheater - Der Papierflieger",
            "description": "Ein Stück für Jung und Alt ab 5 Jahren**KUNST KOMMT VON KENNEN**Ein Figurentheater über Einsamkeit, Freundschaft und Lebensfreude frei nach dem Bilderbuch ?Der Besuch?von Antje Damm. Erzählt wird von der älteren Dame Louise, die zurückgezogen in ihrer Wohnung lebt bis eines Tages ein Papierflieger in ihre graue Welt fliegt. Dies führt sie mit dem Jungen Max zusammen, der ihre Welt auf den Kopf stellt und die Farbe in Louises Leben zurückbringt. Mehr Infos: https://www.figurentheater-vagabuendel.de/Foto: Jennifer Rohrbacher",
            "startDateTime": "10/20/21 10:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29275548715&a=774719&m=13738"
        },
        {
            "id": "e237",
            "title": "Jan Philipp Zymny  surREALITÄT",
            "description": "Wer würde es in Zeiten alternativer Fakten wagen die Wirklichkeit selbst zu kritisieren? In Zeiten, in denen die Menschen den Blick für die Realität immer mehr verlieren? In Zeiten, in denen man sich Esoterik und pseudowissenschaftlichen Theorien hingibt und wieder anfängt rückwärts zu denken? Nur jemand, der gedanklich völlig außerhalb davon steht! Der junge Künstler Jan Philipp Zymny präsentiert in seinem mittlerweile vierten abendfüllenden Soloprogramm unter dem Titel ?surREALITÄT? Betrachtung, Kritik und Verbesserungsvorschlag der Wirklichkeit, wobei er Stand Up, Kurzgeschichten, philosophische Überlegungen und surreale Absurditäten der Bauart Nonsens wild, aber keines Falls planlos durchmischt. Klassischer Zymny eben. Ein Abend für alle, denen gewöhnliche Comedy zu doof, Philosophie zu anstrengend und die Realität zu langweilig ist. ?Der Autor greift die Sprache auf und mahnt an, dass sich echte politische Haltungen nicht auf ein Demonstrationsplakat schreiben ließen. Dass er damit Ross und Reiter nennt, ohne Namen in den Mund zu nehmen, das ist ein höchst eleganter Schachzug. Überhaupt macht es großen Spaß, den zuweilen herrlich albernen Gedanken dieses Künstlers zu lauschen: inhaltlich und vor allem sprachlich ?? Allgemeine Zeitung Mainzmehr Infos: https://zymny.tv/Foto: Fabian Stürtz",
            "startDateTime": "4/28/22 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29275548723&a=774719&m=13738"
        },
        {
            "id": "e238",
            "title": "Gogol & Mäx - Concerto Humoroso",
            "description": "Größte Heiterkeit in Theatersälen und Konzerthäusern von den Niederlanden, Concertgebouw Amsterdam, bis ins spanische Hochgebirge, Festival de teatre Esterri d´Àneu, Pyrenäen. Herzlich Willkommen in der herrlich grotesken und umwerfend komischen Welt der Konzertakrobaten.Was diese meisterlichen Komiker auf den Theaterbühnen Europas darbieten, ist schlichtweg atemberaubend: Zwei prall gefüllte Stunden des Lachens und Staunens über die akrobatische und musikalische Kunstfertigkeit und die schier unbegreifliche Instrumentenvielfalt.Und wenn im grandiosen »Finale grande« die Pianisten-Ballerina im rosafarbenen Rüschenkleid auf filigranem Stahl balanciert, dann hat es den Anschein, als könne sich selbst die auf dem Klavier thronende Bachbüste vor Lachen kaum mehr auf ihrem Sockel halten.mehr Infos: https://www.gogolmaex.de/Foto: Karin Bühler",
            "startDateTime": "12/29/21 19:30",
            "venueId": "v17",
            "offerURL": "https://www.awin1.com/pclick.php?p=29323556037&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/HcF9qw9M.jpeg"
        },
        {
            "id": "e239",
            "title": "ALEX & Joschi - Scherz mit Herz",
            "description": "Familienprogramm für alle ab 3 JahrenErleben sie die beiden Akrobatik-Komiker ALEX & Joschi in einer tollen Darbietung voller Lachen und Fröhlichkeit. Die Gegensätze von groß und klein, eingebildet und naiv, elegant und tollpatschig, verkörpert durch die beiden, sorgen in rasch vorgeführten Szenen und Kunststücken immer wieder für komische Momente, die zu schallendem Gelächter führen. Fiebern sie bei Akrobatik, Jonglage, Artistik, Phantasie und magischen Momenten so lange mit, bis Schweiß und Lachtränen ?ießen.Mehr Infos: http://akrobatik-clowns.de/",
            "startDateTime": "11/28/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29323557179&a=774719&m=13738"
        },
        {
            "id": "e240",
            "title": "Flohzirkus Orquestra - Musik, Clownerie und Mitmachspaß",
            "description": "Für Kinder ab 3 JahrenDas Flohzirkus Orquestra ist bekannt für einen bunten, rhythmusbetonten Mix aus Reggae, Ska-, Chanson und Folkelementen. Die Lieder entführen ihr Publikum in imaginäre Welten u. a. des Zirkus, der Piraten sowie Tiere und interpretieren in eindrucksvollen Bildern zentrale Kinderthemen wie Zugehörigkeit, Identität, Streben nach Selbstbestimmung und Freude am Leben. Warum z.B. hat die Schlange Sue das Zirkusleben satt und will erst mal beim lispelnden Sören einziehen. Oder wie können die Kinder der armen Anja Ameise helfen aus ihr einen Tausendfüßler zu machen? Wie kann es sein, dass ein tapferer Steuermann wasserscheu ist? Das Programm wird ergänzt durch kurze clowneske Show-Einlagen, Zaubereien und Mitmach-Angeboten, die die Aufmerksamkeit der kleinen und großen Zuschauer*innen fesseln.Mehr Infos: https://flohzirkus-orquestra.jimdofree.com/",
            "startDateTime": "11/20/21 15:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29323558241&a=774719&m=13738"
        },
        {
            "id": "e241",
            "title": "Theatergeist Berlin - Das schönste Ei der Welt",
            "description": "Nach Helme Heine für Kinder ab 4 JahrenDrei Hühner haben ein gewaltiges Problem, das auch manche Menschen umtreibt. Wer bloß ist die Schönste? Pünktchen hat ein toll gemustertes Federkleid, Latte schicke lange Beine und Feder einen prachtvollen Kamm. Der König entscheidet: ?Schönheit kommt von innen!? und veranstaltet einen Wettbewerb: wer das schönste Ei legen kann, die solle die Schönste sein. Doch alsbald taucht die Frage auf: Was heißt überhaupt ?schön?? Eine Geschichte über den Wert des Einzelnen, seine Einzigartigkeit und eben: Schönheit! Mehr Infos: http://www.theatergeist.de/",
            "startDateTime": "11/21/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29323558243&a=774719&m=13738"
        },
        {
            "id": "e242",
            "title": "Husten - Tour 2022",
            "description": "Jetzt erst echt.Die Husten-Tour von 2020 und dann 2021 ist auf 2022 verschoben.Dafür sind gleich ein paar Termine und Städte hinzugekommen.Wir gehen also ins dritte Jahr Lampenfieber.Ach ja, bald gibt?s auch schon wieder neue Musik.Wir sehen uns, oder?2022!Husten sind Moses Schneider, Gisbert zu Knyphausen und der dünne Mann.",
            "startDateTime": "10/6/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29389103243&a=774719&m=13738"
        },
        {
            "id": "e243",
            "title": "Lagwagon - Tour 2022",
            "description": "LAGWAGONLive 2022Lagwagon ist eine der wichtigsten Bands der SoCal-Punk-Ära der 90er-Jahre. Ursprünglich Section 8 genannt, besteht Lagwagon zum Zeitpunkt ihres Debüts ?Duh? 1992 aus dem Sänger Joey Cape, den Gitarristen Chris Flippin und Shawn Dewey, Bassist Jesse Buglione und Schlagzeuger Derrick Plourde. Zwei Jahre später folgt das Album ?Thrashed? und 1995 bereits ?Hoss?. Plourde verlässt die Band kurz danach und wird durch den ehemaligen Rich Kids On LSD-Schlagzeuger Dave Raun ersetzt. In der zweiten Hälfte der 90er-Jahre ist die Band weiter aktiv und veröffentlicht mit ?Double Plaidinum? und ?Let?s Talk About Feelings? zwei weitere Studioalben. Nach fünf Jahren des Durchatmens versammeln sich Lagwagon erneut, um 2003 ?Let?s Talk About Leftovers? herauszubringen ? nach wie vor sind ihre Songs ebenso politisch wie persönlich.Anfang 2005 begeht der ehemalige Schlagzeuger Derrick Plourde Selbstmord, die Band widmet ihm das im selben Jahr erschienene Album ?Resolve?. ?Hang?, Lagwagons achtes Album, und das erste nach einer neunjährigen Pause, erscheint 2014 und ?Railer?, eine Scheibe, die sich wieder voll und ganz auf den Sound der Anfangsjahre besinnt, wird 2019 veröffentlicht. Bald, und zwar im Sommer 2022, ist Lagwagon, diese Band, deren T-Shirts nach wie vor auf etlichen Festivals auftauchen (egal, ob sie dort spielen oder nicht) wieder live zu erleben!",
            "startDateTime": "6/23/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29396083969&a=774719&m=13738"
        },
        {
            "id": "e244",
            "title": "Thomas Reis - Mit Abstand das Beste",
            "description": "Kracher, Knaller und KabarettDas Beste zum Schluss von Thomas ReisDas Schönste kommt zum Schluss: Ein kabarettistisches Feuerwerk der besonderenArt. Zum Jahresende lässt es Thomas Reis dem Anlass entsprechend krachen undzündet seine Lieblingspointen des sich gen Ende neigenden Jahres. Das wird mitSicherheit ein Knaller zur Überwindung der Jahresendzeitstimmung.Wer unter Festtagsmelancholie, Familienkater und Verdauungsproblemen leidet, der isthier richtig, wer mit seiner Weihnachtsplanung völlig überfordert ist, erst recht. Jetztmüssen Sie nicht mehr überlegen: Ach, was machen wir nur mit diesem Dezember?Kaufrausch? Glühwein? Zuckerschock? Glotzkoma, Couchkartoffeln oder Gruppensex?Nehmen Sie sich etwas vor. Schmunzeln, grübeln und lachen Sie, bis die Uhrabgelaufen ist. Ein Kabarettabend des frivolen Intellekts wider den Mief derToleranzigkeit, voll satirischer Böller, politisch, saftig, menschlich, komisch,philosophisch, vielleicht alphabetisch, aber mit Gewissheit stets unkorrekt und vielbunter als der trübe Nieselregen vor der Tür. Ein Besuch im gut geheizten Theater ist injedem Fall besser als sich draußen den Arsch abzufrieren.PS: Vor 30 Jahren nannte ihn die Schwäbische Zeitung: Eine Leuchtrakete amKleinkunsthimmel. Jetzt lässt er?s wirklich krachen.",
            "startDateTime": "3/25/22 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29400842285&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/LdKdL75Q.jpeg"
        },
        {
            "id": "e245",
            "title": "Sulaiman Masomi - kunterbunt und farbenblind",
            "description": "Wissen Sie, warum die Menschen auf den alten Schwarz-Weiß-Fotos immer so ernst guckten? Nein? Nicht schlimm, denn Sulaiman Masomis neues Programm ?kunterbunt & farbenblind? beantwortet diese und andere noch nie gestellte Fragen. Wenn Sie schon immer wissen wollten, wie man als Ausländer eine Wohnung bekommt, ob man als Künstler mehr Sex hat und warum Farbenblindheit eigentlich eine gute Sache sein kann, dann sind Sie bei ihm gut aufgehoben. Mit einer kunterbunten Mischung aus Slam Poetry, Musik, Comedy und Kabarett wandelt das preisgekrönte Multitalent Masomi zwischen allen Genres und lässt sich mit seiner stets humoristisch-feinsinnigen Art nicht in irgendeine Schublade packen. Dabei widmet sich der studierte Literaturwissenschaftler allen Aspekten der menschlichen Psyche und des alltäglichen Zusammenlebens in einer multikulturellen Welt. Masomi malt Bilder, in dem jedes Wort zum Pinselstrich eines facettenreichen Gemäldes wird. Ein Bild, das Sie staunen und schenkelklopfend lachen lässt, um sich direkt danach daran zu verschlucken.Mehr Infos: http://www.sulaiman.de/Foto: Marvin Ruppert",
            "startDateTime": "1/14/22 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29400843189&a=774719&m=13738"
        },
        {
            "id": "e246",
            "title": "JUNGE JUNGE! - Hut ab!",
            "description": "Hut ab!? ist der gewagte Mix aus erstaunlicher und mitreißender Zauberkunst und quirliger Comedy des Zauberduos JUNGE JUNGE!. Eine abwechslungsreiche Show irgendwo zwischen Revue und Reisefieber, Comedy und Zauberteppich ? on Tour direkt vorbei an Frau Antje aus Holland, Darth Vader und dem berühmten Glockenspiel von der schönen Kalinka.Fragen werden gelöst, ob Flötentöne tatsächlich den Geist derartig beeinflussen, dass sich kleinste geistige Schwingungen in komplette Arien oder bekannte Opernmelodien in Magierhirnen umwandeln lassen. Was passiert, wenn Messer gezückt werden in Verbindung mit dem heimlichen Papierhütchenspiel ? alles messerscharfe Statistik? Gibt es sie wirklich, die Erinnerung, wenn magische Bücher ihre Geheimnisse preisgeben und Sie in Ihre Vergangenheit reisen?Eine Show mit den richtigen Antworten. JUNGE JUNGE! ziehen alle Register der Zauberkunst und der guten Unterhaltung. Hut ab! für den Musik-Comedy-Zauber-Mix.",
            "startDateTime": "3/24/22 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29417420651&a=774719&m=13738"
        },
        {
            "id": "e247",
            "title": "Jürgen Becker - Die Ursache liegt in der Zukunft",
            "description": "So, da woll?n wir uns mal nen schönen Abend machen! Denn noch ist es ruhig. Aber jeder spürt: Das bleibt nicht so. Der Kapitalismus basiert auf unendlichem Wachstum. Doch wie soll das auf einem endlichen Planeten funktionieren?  Das Finale unseres fossilen Feuer werks kollabiert ausgerechnet mit einem China-Kracher. Selbst neoliberale Ökonomen zucken mittlerweile schuldig mit den Schultern und sprechen von Marktversagen. Ökologie & Ökonomie verwirbeln gewaltig unser Gewohnheitsrecht und unsere Nebenkostenabrechnung. Recken wir also die Hände zum Heiz pilz und fahren nach der Party voll im SUV vor die Wand? Jürgen Becker entwickelt den optimalen Optimismus ohne Opiate und holt uns alle unter seine warme Decke. Dort wird genau recherchiert, was die Welt zusammenhält, wenn sie auseinander fällt ? und wie es sich für alle so richtig rechnet, Sie jetzt zu retten. Sein Humor lüftet durch, hält das Zeitfenster auf Kipp und macht den Chancen Avancen. Man geht nach Hause und denkt: Da geht noch was! www.juergen-becker-kabarettist.de, Foto: Künstler/Agentur",
            "startDateTime": "12/11/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29417420699&a=774719&m=13738"
        },
        {
            "id": "e248",
            "title": "Matthias Egersdörfer - Nachrichten aus dem Hinterhaus",
            "description": "Gehen sie durch die große Eingangstür des Mietshauses, dann geradeaus weiter durch das Tor. Jetzt stehen sie im Hinterhof, links neben ihnen die Abfalleimer, die riechen mal weniger, mal mehr. Schreiten sie am besten zügig weiter, rechts herum, vorbei an der alte Kastanie, die ihre Äste in das bisschen Himmel reckt. Gleich dahinter befindet sich der Eingang zum Hinterhaus. Über ein schmales Treppenhaus kommen Sie in den zweiten Stock hinauf. Vor Ihnen befindet sich nun die rote Eingangstür. Dahinter haust der Egers mit der Frau. Treten Sie ein! Hinten in der Wohnung, da liegt er im Bett und träumt seine lustigen Nachrichten. Im Wohnzimmersessel sitze er und schüttelt den Kopf deswegen. Kommen Sie mit in die Küche, da hat er gerade ein Käsebrot gegessen, man kann den Käse noch riechen. Jetzt lehnt er sich zum Küchenfenster hinaus. Sie können ihm direkt über die Schulter blicken. Man hört die alte Frau Schlitzbier aus dem Vorderhaus husten. Einen Stock darunter plärren die Bahulgenkinder und die Kindsmutter; es geht um die Feuerkäfer vom Bub, die im Bett herumlaufen, sie plärren so laut, dass einem schier die Synapsen aus dem Ohr herausfallen. Schnell schließt der Egersdörfer das Fenster wieder und da hat er Sie entdeckt. Doch sie brauchen keine Angst zu haben, er tut ihnen nichts. Er kocht ihnen sogar einen Kaffee. Sie müssen sich nur zu ihm an den Küchentisch setzen und ihm zuhören und schon erzählt er Ihnen, was es mit dem Husten und den Käfern auf sich hat und welche Nachrichten aus dem Hinterhaus es noch gibt. Er ist ein guter Erzähler und sie das perfekte Publikum.Mehr Infos: http://egers.deFoto: Stephan Minx",
            "startDateTime": "11/19/22 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29417421587&a=774719&m=13738"
        },
        {
            "id": "e249",
            "title": "Catastrophe Waitress - Live 2021",
            "description": "Eingängig, eigenwillig und selbstgemacht! Mit ihrem markanten zweistimmigen Gesang, Violine, Kontrabass, geschmeidigem Drum-Teppich und breit gefächertem Keys-Sound hinterlässt die Freiburger Band Catastrophe Waitress ihren ganz eigenen Eindruck. Es lohnt sich den Witz und die Raffinesse des Quintetts live zu erleben und durch ein reiches Retro-Indie-Folk-Pop\u0002Programm beschwingt in den Abend zu starten!",
            "startDateTime": "7/16/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29417422207&a=774719&m=13738"
        },
        {
            "id": "e250",
            "title": "Hammond Jazz Night - feat. Manfred Junker Organ Trio",
            "description": "Der Name ist Konzept: Die Freiburger Konzertreihe Hammond Jazz Night dreht sich rund um die legendäre Hammond B3 Orgel die mit ihrem unverwechselbaren Klang seit über 60 Jahren im Jazz und den angrenzenden musikalischen Genres eine nicht mehr wegzudenkende Rolle spielt.Neben Bandformationen, bei denen dieser Sound zum festen Bestandteil gehört, stellt Gastgeber und Hammond Organist Thomas Bauser für die 12 Konzerte zwischen Oktober und März regelmäßig neue Besetzungen mit nationalen und internationalen Musikern zusammen.Dem Zuhörer bietet sich dabei die Möglichkeit die einzelnen Gastmusiker auch unabhängig ihrer festen Bandprojekte in teilweise völlig neuem Kontext zu erleben, was durch ein jeweils speziell ausgesuchtes Programm weit über den Charakter einer reinen Session hinausgeht.Die Liste der bisher bei der Hammond Jazz Night aufgetreten Musiker ist lang, neben namhaften US-amerikanischen Grössen beinhaltet sie viele renomierte Namen der deutschen und vorwiegend auch der schweizerischen Jazzszene.",
            "startDateTime": "7/13/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29417422721&a=774719&m=13738"
        },
        {
            "id": "e251",
            "title": "RÄUMEN - ein Spiel von Haben und Sein // 6+ Jahre",
            "description": "Um in einen weißen Raum Ordnung zu bringen, muss erstmal etwas hinein. Vier Performer*innen und ein Musiker bringen Dinge mit: die sie brauchen? Die sie lieben? Die sie einfach nicht loswerden? Die sie glauben, haben zu müssen? Sie richten sich ein, sie verschieben, bauen um, füllen auf. Sie verlieren den Überblick und lieben das Chaos. Die Dinge gehören ihnen und sie gehören den Dingen. Ebenso die großen und kleinen Geschichten, die sich alle hinter diesen Dingen verstecken und darauf warten, erzählt zu werden. Womit anfangen??RÄUMEN - ein Spiel von Haben und Sein ist eine performative, musikalische Auseinandersetzung mit den Dingen, die wir lieben und die uns beherrschen, ein Versuch über ungeöffnete Schubladen und liebgewonnene Dinge. Das Stück sucht nach neuen Ordnungen und befragt dabei stetig unsere Beziehung zum Besitz in einer kapitalistisch geprägten Welt. Pulk fiktion ist eine 2007 gegründete Performancegruppe, zusammengesetzt aus einem heterogenen Pulk von Künstler*innen aus verschiedensten Bereichen. Sie erarbeitet in unterschiedlichen Konstellationen Produktionen für Kinder, Jugendliche und Erwachsene und nimmt sich stets den Fragen und Lebensperspektiven junger Menschen an, die im Vorhinein in Interviews mit dem Zielpublikum erarbeitet werden. Die interdisziplinären Produktionen, meist Stückentwicklungen, wurden auf diverse nationale und internationale Festivals eingeladen und mit zahlreichen Preisen ausgezeichnet.",
            "startDateTime": "6/27/21 16:00",
            "venueId": "v10",
            "offerURL": "https://www.awin1.com/pclick.php?p=29425480747&a=774719&m=13738"
        },
        {
            "id": "e252",
            "title": "Haydn: Die Schöpfung - Chorkonzert",
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
            "title": "Bazilikonmädchen",
            "description": "Eine orientalische Liebesgeschichte von Elsa Sophia von KamphoevenerBazilikon, nicht wahr, das weiß ein jeder, das ist so eine kleine grüne Pflanze, die überall bei uns zum Würzen verwendet wird...Mit harmlosen Worten setzt diese spannende, orientalische Geschichte ein. In ihrem Zentrum: eine junge, unerschrockene Gärtnerin, die das Herz ihres schönen, reichen, doch ein wenig einfältigen Nachbarn gwinnen will. Da werden trennende Hecken durchbohrt und reiche Mannsbilder aus Liebe zu stinkenden Fischverkäufern, schöne Frauen verwandeln sich in grauenhaft schachspielende Tuaregs, ein Bey heiratet ein Erdloch, Schwangerschaften werden verheimlicht, einem schlafenden Jüngling der Hintern versohlt und die Braut auf ihrer Hochzeit geohrfeigt.....Eine zauberhafte Geschichte über die verschlungenen Wege der Liebe, voll erstaunlicher Volten, weiblicher Klugheit und subtiler Vieldeutigkeit.Bea von Malchus über sich selbst:Ich wurde am 1. Mai 1959 geboren, am Tag der Arbeit. Erfreulicherweise hieß Arbeiten an diesem Tag immer nur eins: Bowle trinkend unterm Maibaum sitzen und mehr Freizeit fordern. Das hat mich geprägt. Bereits bei meiner Geburt zeigte ich Flagge: Steißlage!Wenn ich als Kind mit dem Gartenschlauch einen Regenbogen  in die Sonne spritzte, wartete ich gespannt, ob jemand - Jesus vielleicht - mir ein Gehalt dafür überwiese. In der Schule war ich gut, hatte oft Nasenbluten und durfte mich dann hinlegen.Meinen Freischwimmer errang ich, indem ich ins Becken kippte, dort 20 Minuten im ?toten Mann? verharrte und dann die notwendigen zwei Schwimmzüge bis zur Leiter hinter mich brachte. Später wurde ich Eiskunstläuferin. Fans behaupten, ich hätte den dreifachen Toeloop einmal fast gestanden. Aber seien wir ehrlich, die sind geschmiert! Wie ich zu zwei Universitätsabschlüssen kam?! Ich weiß es manchmal selber nicht mehr - ich glaube vor allem durch viel Schlaf.Danach ging ich zum Theater, als Regisseurin und Schauspielerin. Hm. Was soll ich sagen? Kino ist schöner!1996 begann ich Geschichten zu erzählen. Und das tu ich immer noch.Ich mag den Frühling und den Regen. Ich liebe den Duft alter Kirchen, Creme brulee ? und wenn Sportler vor Enttäuschung weinen. Meine Lieblingsfarben sind Borretschblüten-Blau und das Gelb vom ersten Zitronenfalter. Im Herbst koche ich Dinge ein, lache laut und bastle ein wenig. An Weihnachten leg ich mich ans Feuer und verspeise ein Reh. Am allerliebsten aber tu ich gar nichts.Hier sind meine 19 Orden!1 Freischwimmer, 2 Eistanz und 5 Eiskunstlaufdiplome, 1 großes und 1 kleines Latinum, 1 Segelschein, 1 Abitur, 1 Bronzepokal in lateinamerikanischen Tänzen, 2 Hochschulabschlüsse und 4 TheaterpreiseFoto: Marc Wilhelmhttps://www.beavonmalchus.de/",
            "startDateTime": "8/6/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442321289&a=774719&m=13738"
        },
        {
            "id": "e255",
            "title": "A Cappella Nacht",
            "description": "mit den Pop-Jazz-Ensembles 5Pac, TT&C, The Peers5Pac ist eine A-cappella-Gruppe, die sich im Jahre 2016 an der Musikhochschule Freiburg formierte und im Dezember 2016 erstmals öffentlich auftrat. Seither bestreitet das Ensemble zahlreiche regionale und internationale Konzerte, die sie beispielsweise im Jahr 2018 nach Fossano (I) zum renommierten A-cappella-Festival ?Vocalmente? führten. Es folgten wegweisende Impulse durch Inspiratoren der Szene, wie z.B. Jan Bürger (Maybebop), Kim Nazarian (New York Voices) oder Peder Karlsson (Ex-Real Group). Regelmäßige Unterstützung erhielt die Gruppe darüber hinaus durch Julian Knörzer (Unduzo).Eine große Zahl selbstgeschriebener Arrangements und Eigenkompositionen bildet das Repertoire der Gruppe, welches von Jazz über Pop bis hin zu Hip-Hop ein breites Genrespektrum abdeckt. Clara Wolters ? SopranRaffaela Dilles ? MezzosopranDavid Brooke ? TenorSebastian Oberlin ? BaritonPaul Dreßler ? Bass Website: https://5pac.jimdosite.com/ Seit 2016 begeistern TT&C mit einer herzlichen Bühnenshow und mitreißenden Arrangements - ein junges A-cappella-Ensemble, das sich zum Ziel setzt, seinem Publikum mit vielseitigen Arrangements aus Pop, Rock und Jazz genauso viel Spaß zu bereiten wie sich selbst! Der dynamische Sechserpack hat sich im Studium an der Musikhochschule Freiburg gefunden und befasst sich seither damit, das Bühnenprogramm durch zahlreiche selbst geschriebene Arrangements zu erweitern und sich dabei gemeinsam musikalisch weiterzuentwickeln. So sind die Sechs über die vergangenen Jahre zu einer kleinen musikalischen Familie zusammengewachsen, die voller Vorfreude in ihre gemeinsame Zukunft blickt.Mirjam Hettich ? SopranJuliane Gehring ? MezzosopranTheresa Jensen ? AltDavid Brooke ? TenorFabian Kühn ? Bariton & BeatboxJoachim Köstler ? Bass Website: https://tassen-teller-and-co.jimdosite.com/ ?The Peers? hat sich 2019 aus Studierenden der Musikhochschule Freiburg gegründet: Lorena Kempf, Eva Abzieher, Philippe Neumann und seit kurzer Zeit als Bass+Beatboxer Fabian Kühn. Wir schreiben unsere Arrangements selbst und bewegen uns stilistisch zwischen Pop/Rock.https://www.instagram.com/thepeers_acappellaFotos:5Pac: Dorothea HörzTT&C: Steffen SchwendnerThe Peers: Tim Renkert",
            "startDateTime": "8/7/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442321305&a=774719&m=13738"
        },
        {
            "id": "e256",
            "title": "Operette sich wer kann",
            "description": "In ihrer neuen Produktion bringen die ?Schönen? ausufernde Lebenslust auf die Bühne. Mit ihrer bewährten, operettenversierten Handschrift entfalten sie ein unterhaltsames Spiel mit der leichten Muse.?Operette sich wer kann? spielt mit der Absurdität der Operette und präsentiert vorbehaltlos, was an gehobenem Unsinn und frechen Anzüglichkeiten in ihr steckt. So wird die Operette wieder zu dem, was sie ursprünglich einmal war: eine vitale und vitalisierende Kunstform, die die Lage der Welt mit süffisanter Leichtigkeit kommentiert - gestern so wie heute.Zeitgemäß arrangiert sind die Ausschnitte aus der ?Blume von Hawaii? (Paul Abraham), dem ?Weißen Rössl? (Ralph Benatzky), der ?Fledermaus? (Johan Strauß) und anderen. Kalmans ?Czardasfürstin? ist ebenso zu Gast wie die ?Lustige Witwe? von Franz Lehar.Serviert werden die Lieder und Szenen von drei charmanten jungen Musikern: Katrin Mayer (Sopran), Rubén Olivares (Tenor) und Max Langer (Klavier) gehen mit Herzschmerz, Witz, Ironie und Kitsch auf eine musikalische Reise zwischen Waikiki und Vara?din, zwischen Berlin und Wien.Als schlagfertiger Operettenführer mit dabei ist Klaus Gülker, langjähriger Leiter der Redaktion Unterhaltung im SWR Studio Freiburg.Ein Programm zum Durchatmen, Entspannen und Genießen!Leopold Kern (Konzeption)Herbert Wolfgang (Regie)Die Produktion wird gefördert im Impulsprogramm ?Kunst trotz Abstand? des Ministeriums für Wissenschaft, Forschung und Kunst Baden-Württemberg.www.dieschoenen.comFoto: Doreen Eich",
            "startDateTime": "6/18/21 20:00",
            "venueId": "v9",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442321469&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/z6elxrGJ.jpeg"
        },
        {
            "id": "e257",
            "title": "Rhapsody in Blue",
            "description": "?Wunderpianist? Kamenz und pocket orchestra freiburg mit Gershwins Klangfest ?Rhapsody in Blue? ? präludiert von Mussorgskis tiefgründigem Klavierzyklus ?Bilder einer Ausstellung?.Foto: Mat HennekEine Kooperation mit den Albert Konzerten",
            "startDateTime": "7/25/21 20:30",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442321483&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/Qw4jMALu.jpeg"
        },
        {
            "id": "e258",
            "title": "Trionfo dei Piffari",
            "description": "Stadtpfeifer im Europa der RenaissanceIm Europa der Renaissance bestanden die bekanntesten Musikensembles aus Blasmusikern der deutschsprachigen Länder, die ihr Handwerk mit nach Italien, Spanien und Frankreich brachten. Professionelle Musiker mussten in der Lage sein, vorhandenes Notenmaterial mit eigenen Improvisationen zu verbinden und den Werken immer neue Formen zu verleihen. Gleichzeitig zu dieser Praxis entwickelten Komponisten wie Ludwig Senfl, Caspar Othmayer u.a. eine Mischung zwischen höfischer und bürgerlicher Musiktradition, die sich schnell verbreitete.Im Konzert ?Trionfo dei Piffari? begeben sich die Musiker der Capella de la Torre auf eine Reise durch das Europa der frühen Neuzeit, in dem sie verschiedene Musikstile und Traditionen dieser Zeit wieder neu erfahrbar machen. Die Technik der Improvisation über vorgegebene Stimmen oder Liedsätze spielt dabei eine besondere Rolle.Besetzung Capella de la Torre:Schalmei, Pommer, Posaune, DulzianSchlagzeug und Laute/ OrgelKatharina Bäuml, LeitungFoto: Anna Kristina Bauerhttps://www.capella-de-la-torre.de/",
            "startDateTime": "8/22/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442321485&a=774719&m=13738"
        },
        {
            "id": "e259",
            "title": "Musik vom Goldenen Horn",
            "description": "Ein angenehmes und wohklingendes Stelldichein illustrer Gäste, die türkische Musik im Gepäck haben.Annette Maye - Klarinetten Muhittin Temel  -  Kanun, GesangMurat Coskun  -  Perkussion, GesangGäste:Malika Coskun - Perkussion, GesangYaschar Coskun - Perkussion, GesangFotos (c) Yoshi Toscani und Ellen SchmaussEine Kooperation mit Tamburi Mundi.",
            "startDateTime": "7/23/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442322017&a=774719&m=13738"
        },
        {
            "id": "e260",
            "title": "Ging hinaus ich in den Garten",
            "description": "Ein multisensorisches Lustwandeln durch die Welt der Kräuter, Früchte und BlumenLeitung: Bernhard SchmidtFoto: Markus BrücknerDas John Sheppard Ensemble Freiburg wurde 1995 von Johannes Tolle gegründet. Es besteht aus ca. 32 Sängerinnen und Sängern, die in wöchentlichen Proben anspruchsvolle Vokalmusik erarbeiten. Die meisten Mitglieder des Ensembles sind Laien mit mehrjährigem Gesangsunterricht. Sie bringen neben der ambitionierten Leidenschaft für Musik und einer Neigung zu unkonventionellen Projekten die Bereitschaft mit, ihre musikalischen Fähigkeiten konsequent auszubauen und aufeinander abzustimmen. Konzertreisen führten u. a. in die Schweiz, nach Frankreich, Finnland und England.Gerne ist das Ensemble zu Gast bei Festivals und Musikreihen, wie z. B. beim Musikzauber Franken oder der Stunde der Kirchenmusik in Stuttgart oder Heilbronn.Im Herbst 2017 konnte sich das Ensemble beim Landeschorwettbewerb Baden-Württemberg in Bretten durch einen hervorragenden Erfolg für den Deutschen Chorwettbewerb qualifizieren.",
            "startDateTime": "7/24/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442322019&a=774719&m=13738"
        },
        {
            "id": "e261",
            "title": "900 Jahre sind genug.",
            "description": "Der gute Vorsatz für 2021 steht: Freiburg will sich feiern. Alle Bürgerinnen und Bürger sind aufgefordert mitzuhelfen. Jubiläumsberater sind in der Ökocity unterwegs und verbreiten gute und nachhaltige Laune. Das Jubiläum ist nicht mehr aufzuhalten. Aus diesem Grunde Matthias Deutschman sich entschlossen, sein 40-jähriges Bühnenjubiläum ganz in den Dienst der 900-Jahr-Feierlichkeiten zu stellen und die Schwarzwaldmetropole mit einer Jubiläumsgala zu feiern. Wir verbeugen uns vor dieser Stadt, mal sehen, wie tief wir kommen ? Foto: Philipp v. DitfurthEine Kooperation mit dem Vorderhaus und der Stadt Freiburghttp://www.matthiasdeutschmann.de",
            "startDateTime": "7/30/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442322039&a=774719&m=13738"
        },
        {
            "id": "e262",
            "title": "Ot Azoy / Wie man so sagt ...",
            "description": "Mit sprühendem Charme präsentieren die Yankeles eine emotionsgeladene Klangwelt, die zum Tanzen, Träumen und Schmunzeln anregt! Infiziert durch die mitreißenden Klänge der jiddischen Musik und des bessarabischen Lebensgefühls malen sie in Wort und Ton ?eine und tausend Musikgeschichten?.Charlotte Mercier - ViolineNico Hutter - KlarinetteKarin Fleck - AkkordeonPhilipp Gerhard - Kontrabass, SprecherPhilipp Kurzke - PercussionFoto: Rainer Muranyi",
            "startDateTime": "8/1/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442322043&a=774719&m=13738"
        },
        {
            "id": "e263",
            "title": "Robert Neumann",
            "description": "Pianistische Highlights aus (Früh)Klassik und (Spät)Romantik ? Robert Neumann, der hochbegabte Senkrechtstarter am Klavier, vereint sie zu einem Klavierabend der Extraklasse!Programm:Carl Philipp Emanuel Bach, Fantasia fis-Moll Wq 67Chopin, Sonate Nr. 2 b-Moll op. 35Haydn, Variationen f-Moll Hob. XVII/6Rachmaninow, Corelli-Variationen op. 42Eine Kooperation mit den Albert KonzertenFoto: Marco Borggrevehttp://www.neumann-robert.de",
            "startDateTime": "8/15/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442322059&a=774719&m=13738"
        },
        {
            "id": "e264",
            "title": "Grobe Schnitzer",
            "description": "Grobe Schnitzer sind aus dem Leben nicht wegzudenken. Gerade bei Instrumenten aus Holz. Wer hat eigentlich dem Kind die Blockflöte geschenkt? Das ist eine Frage, die sich manche Eltern ein Leben lang stellen. Vor allem, wenn das Kind dann die Flöte nicht mehr aus der Hand legt und zusammen mit anderen eine Band gründet.Im neuen Programm von Wildes Holz geht es um genau diese groben Schnitzer, aus denen etwas Neues entsteht. Denn mit Fehlern muss man kreativ umgehen, sonst wird´s langweilig. Und selbst aus den gröbsten Schnitzern kann etwas entstehen, wenn man Improvisationstalent und Humor hat. Und Instrumente aus Holz. Das ist klar. Virtuose akustische Live-Konzerte ohne Genre-Grenzen, spontane Komik und kraftvolles Spiel sind seit über 20 Jahren die Markenzeichen von Wildes Holz. Im neuen Programm zeigen sie zudem ihr musikalisches Draufgängertum. Denn wer Fehler vermeidet, macht alles richtig. Aber wer Fehler kultiviert, der macht Musik. Oder eben grobe Schnitzer. Man muss sich halt auch mal was leisten.Wildes Holz wurde 1998 von dem Blockflötisten Tobias Reisige zusammen mit dem Kontrabassisten Markus Conrads und dem Gitarristen Anto Karaula gegründet. Seitdem spielt die Band regelmäßig und abendfüllend auf allen Arten von Kleinkunstbühnen und Festivals. Nach Antos tragischem Tod im Jahr 2018 gelang 2019 der Neuanfang mit dem Programm ?Höhen und Tiefen? und dem algerischen Gitarristen Djamel Laroussi. Für ?Grobe Schnitzer? ist nun Johannes Behr an der Gitarre. Johannes ist ursprünglich Jazzgitarrist, aber auch in allen anderen Musikstilen zu Hause und bereichert so die Experimentierfreude der Band.Foto: Harald Hoffmannwww.wildes-holz.de",
            "startDateTime": "8/27/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442322061&a=774719&m=13738"
        },
        {
            "id": "e265",
            "title": "Robert Schumann: Liederkreis",
            "description": "Der Zyklus ist mein Romantischstes?, so Robert Schumann 1840 über seinen Liederkreis opus 39.Seine Vertonung der kongenialen Gedichte Joseph von Eichendorffs, darunter der ?Mondnacht?, ?Zwielicht?und ?schöne Fremde? machen den Liederkreis zu einem der bedeutendsten Liederzyklen der Musikgeschichte.Johannes Tolle studierte Dirigieren, Schul- und Kirchenmusik sowie Germanistik in Freiburg und Trossingen. Neben seinen Studien u.a. bei Robert Levin (Klavier), Manfred Schreier (Dirigieren) und Hans Michael Beuerle (Chorleitung) besuchte er zahlreiche Meisterkurse, u.a. bei Eric Ericsson, Max Pommer und John Eliot Gardiner.Seit 1993 ist Johannes Tolle künstlerischer Leiter der Musiktage Vaudreuille in Südfrankreich, bei denen er 2013 Claudio Monteverdis Oper ?Orfeo? dirigierte und jährlich einwöchige Chor-Ateliers anbietet. Von 1997-2003 war Johannes Tolle Dirigent der Knabenkantorei Basel. 1997 gründete er das John-Sheppard-Ensemble, das er bis 2012 leitete. Im Jahr 2000 wurde er zum künstlerischen Leiter des Konzertchores Cantate Basel gewählt, den er bis 2007 dirigierte. Mit diesen Ensembles realisiert er ein vom 16.-21. Jahrhundert reichendes Spektrum von Vokalmusik, in regelmäßiger Zusammenarbeit mit profilierten Instrumentalensembles wie dem Kammerorchester Basel, dem Barockorchester Capriccio Basel, Les Cornets Noirs und dem pocket orchestra Freiburg. Engagements beim WDR-Rundfunkchor, dem Theater Basel, dem Balthasar-Neumann-Chor und den Neuen Vocalsolisten Stuttgart ergänzen seine vielfältigen musikalischen Aktivitäten.Johannes Tolle ist auch als Pianist und Liedbegleiter gefragt, wie bei Recitals mit Tobias Berndt, Nuria Rial oder der argentinischen Mezzosopranistin Marisa Martins.Johannes Tolle ist Gründer und Geschäftsführer der Reservix GmbH. Der gebürtige Berliner Tobias Berndt begann seine musikalische Ausbildung im Dresdner Kreuzchor. Er studierte bei Hermann Christian Polster in Leipzig und setzte seine Ausbildung bei Rudolf Piernay in Mannheim fort. Zu seinen Lehrern gehören außerdem Dietrich Fischer-Dieskau, Thomas Quasthoff, Wolfram Rieger, Norman Shetler und Irwin Gage.Ausgezeichnet mit mehreren Stipendien gewann Tobias Berndt den Wettbewerb Das Lied ? International Song Competition in Berlin, den Internationalen Johannes-Brahms-Wettbewerbes in Pörtschach und den Cantilena Gesangswettbewerbes in Bayreuth. Zudem wurde er Preisträger beim Bundeswettbewerb Gesang Berlin, beim internationalen Wettbewerb für Liedkunst der Hugo-Wolf-Akademie in Stuttgart, bei der internationalen Sommerakademie des Mozarteums in Salzburg, beim Internationalen Wettbewerb Franz Schubert und die Musik der Moderne in Graz und beim Internationalen Schubert Wettbewerb in Dortmund.Als Konzertsänger hat sich Tobias Berndt mittlerweile weit über die Landesgrenzen hinaus etabliert. In jüngster Zeit arbeitete er mit Dirigenten wie Hans Christoph Rademann, Philippe Herreweghe, Helmuth Rilling, Christoph Spering, Michael Sanderling, Andrey Boreyko, Teodor Currentzis, Joshard Daus, Enoch zu Guttenberg und Ludwig Güttler und sang Konzerte in der Berliner und Kölner Philharmonie, der Tonhalle in Zürich und in Düsseldorf, dem Concertgebouw Amsterdam, im Leipziger Gewandhaus und im Herkulessaal München. Weiterhin gastierte Tobias Berndt bei bedeutenden Festivals wie dem Prager Frühling, dem Festival de la Chaise-Dieu, dem Musikfest Stuttgart und dem Herrenchiemsee.Foto: Baschi Bender",
            "startDateTime": "8/29/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29442322063&a=774719&m=13738"
        },
        {
            "id": "e266",
            "title": "bass solo",
            "description": "Deutschlands führender Jazzbassist legt ein reines Soloprogramm vor. Kein Netz, kein doppelter Boden. Ilg macht den Kontrabass erfassbar und begreifbar.?Ich weiß nicht, ob ich Jazzmusiker geworden wäre, wenn es den Kontrabass nicht gäbe.? Kann man seinem Instrument eine schönere Liebeserklärung unterbreiten?Der Freiburger Bassist Dieter Ilg gilt seit Jahrzehnten als absolut zuverlässiger Begleiter sowie als erfinderische Persönlichkeit mit eigener Handschrift des europäischen Jazz. Wenn er sich allein mit seinem Kontrabass vor sein Publikum stellt, verzichtet er auf Loops, Pedale, Effektgeräte und andere Mätzchen. Selbst der Bogen bleibt zumeist auf dem Bassverstärker liegen. Stattdessen schlägt sein Soloprogramm einen Bogen über seine Erfahrungen der letzten 35 Jahre.Dieter Ilg spielt Eigenkompositionen, erweist seinem langjährigen Duopartner Charlie Mariano seine Reverenz, transformiert eine Arie aus der Oper Rigoletto, streift ein paar Standards und tanzt über deutsche und koreanische Volkslieder. Seine Programmatik fasst er mit einer ganz einfachen Formel zusammen: Die pure Lust am Kontrabass.Dieter Ilg, der mit seinem Instrument buchstäblich Hunderten von Jazzmusikern den Rücken gestärkt und in jeder nur denkbaren Konstellation gespielt hat, gönnt sich und seinem Publikum den Luxus, sich mal ganz auf sich allein zu konzentrieren.?Wenn Ilg seinem Standbass weich fließende, singendmelodiöse Klänge entlockt, über einem Ton minutenlang improvisiert oder die Finger impulsiv auf die dicken Saiten niedergehen lässt, ? dann gehen manchem Zuhörer die Augen ob der hohen Virtuosität und das Herz ob der atemberaubenden Intensität des Dargebotenen auf.?Neue Osnabrücker Zeitunghttps://dieterilg.de/Foto: Till Brönner",
            "startDateTime": "9/4/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29446580025&a=774719&m=13738"
        },
        {
            "id": "e267",
            "title": "Folk Songs",
            "description": "Norwegische Balladen und Volkslieder in neuen, zeitlosen Arrangements, untermalt von den Tönen der Hardanger fiddle, der Shrutibox und Glockenstäben.Anna Maria FrimanLinn Andrea FuglsethJorunn Lovise HusanEs ist eine ebenso faszinierende wie einzigartige Klangwelt, in der sich die virtuosen Sängerinnen des Trio Mediæval bewegen. Das 1997 in Oslo gegründete Vokalensemble hat sich auf drei klar um-rissene Repertoirebereiche spezialisiert: zum einen Eigenbearbeitungen mittelal-terlicher Balladen und Lieder aus Norwegen, zum anderen polyphone, für das Ensemble arrangierte mittelalterliche Musik aus England, Frankreich und Italien, und schließlich zeitge-nössische Werke, von denen viele eigens für das Ensemble komponiert wurden. Seit einigen Jahren arbeitet das Trio außerdem verstärkt mit Musikern und Ensembles der Jazz- und World-Szene wie Rolf Lislevand, Nils Økland, Sinikka Langeland, Arve Henriksen oder dem Mats Eilertsen Trio zusammen und lässt dabei nochmals neuartige Klangwelten entstehen.Foto: Ingvil Skeie Ljoneshttps://www.triomediaeval.no/",
            "startDateTime": "9/5/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29446580027&a=774719&m=13738"
        },
        {
            "id": "e268",
            "title": "Philipp Scharrenberg - Realität für Quereinsteiger",
            "description": "VOR DEM THEATERVERGNÜGEN EMPFEHLEN WIR:SPEISEN IM SCHARFRICHTERRESTAURANT ODER IM ROMANTISCHEN ARKADENINNENHOF. MONTAG BIS SAMSTAG AB 17 UHRTISCHRESERVIERUNG ERBETEN UNTER 0851 - 35 900Foto: Pierre JarawanFühlen auch Sie sich, als fehlten Ihnen die nötigen Qualifikationen für dieses Leben? Hat man auch Sie nie auf die Existenz vorbereitet? Wünschen Sie sich einen neuen Blick auf Dinge, die Sie eh nicht ändern können? Dann kann ich Ihnen auch nicht helfen.Immer wieder ist die Rede von der ?Realität?. Aber was ist das eigentlich, und wie kommt man dahin? Wir leben heute in der Glitzerwelt des Organisierten Verbrauchens, im schützenden CompUterus der Filterblase, unter einer von Algorithmen gestrickten Flickendecke aus Fakt und Fake. Überall ? nur nicht in der Realität. Das lässt sich ändern.In diesem kleinen Persönlichkeitscrash-Kurs der VHS (Vers-Humor-Schmiede) legt der preisgekrönte Kabarettist und Bühnendichter Philipp Scharrenberg die Scheuklappen ab, um hinter den scho(e)nenden Schleier zu schauen. Mit quirliger Kreativität und sprachverspielt beweist er als Realitätstrainer, wie komisch und erfrischend es sein kann, den nackten Tatsachen ins Auge zu sehen, bis sie erröten. Dafür reimt, rappt, singt, liest und erzählt er, bis sich Tacheles und Klartext ?Na, dann gute Nacht? sagen. Ein bissig-heiterer Realitycheck für alle, die sich an ihrem Weltbild sattgesehen haben!Übrigens, kennen Sie Schrödingers Katze? Die, die in einer Box sitzt und von der man nicht weiß, ob sie tot ist oder lebendig ? bis man hineinschaut? So ist das auch mit Kleinkunstprogrammen: Man weiß nie, wie sie sind, bis man drin war. Schrödingers Kabarett. Also bis bald.www.philippscharrenberg.com",
            "startDateTime": "12/17/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478182329&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/eIo3xM4T.jpeg"
        },
        {
            "id": "e269",
            "title": "marotte Figurentheater - Der Kleine König feiert Weihnachten",
            "description": "Nach den Geschichten von Hedwig Munck für Kinder 3 JahrenFröhliche Weihnachten, kleiner König!Der kleine König kann es kaum erwarten, bis er das letzte Türchen öffnen darf.Doch bis dahin gibt es noch viel zu tun: Plätzchen backen, Geschenke einwickeln, rodeln.Rodeln? Dann ist es endlich soweit ? diesmal wird der Heilige Abend ein ganz besonderes Fest ?Mehr Infos: http://marotte-figurentheater.de",
            "startDateTime": "12/19/21 11:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478182331&a=774719&m=13738"
        },
        {
            "id": "e270",
            "title": "Philipp Weber - KI: Künstliche Idioten!",
            "description": "Der Homo digitalis und seine analogen AffenGestern ist das Heute von morgen, richtig. Aber wie schnell ist heute das Morgen von gestern? Der Mensch rast in die Zukunft: Digitalisierung, Gentechnik, Künstliche Intelligenz! Doch wo ist die Zeitmaschine, die saubere Fusionsenergie, das Bier zum Downloaden? Wird der Mensch durch Maschinen ersetzt ? oder befreit? Kommt das ?Ende der Arbeit?? Super, dann haben wir endlich Zeit für was Sinnvolles! Aber wann hätte der Mensch jemals was Sinnvolles gemacht, nur weil er dafür Zeit hat? Doch es gibt Hoffnung! Denn in der Zukunft wartet jemand auf Sie: Philipp Weber. Denn das wichtigste Rüstzeug für alles Kommende war, ist und wird immer sein: der Humor!",
            "startDateTime": "12/12/21 19:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478183121&a=774719&m=13738"
        },
        {
            "id": "e271",
            "title": "ANTILOPEN GANG",
            "description": "?Abbruch Abbruch? ist der vieldeutige Titel des dritten Albums der Antilopen Gang, mit dem Danger Dan, Koljah und Panik Panzer ein beeindruckendes Manifest der Rückkehr zur Realität im Hip-Hop gelungen ist. Seit der Veröffentlichung ihres Debüts ?Aversion? im Jahr 2014 hat sich die Antilopen Gang Schritt für Schritt ein eigenes Freigehege erschaffen und sich dort jeden Wunsch erfüllt, der auf ihrer Bucketlist stand: Von der eigenen Kunst leben zu können, möglichst viele Konzerte auf riesigen Bühnen zu spielen, durch Shitstorms zu waten, Punk komplett neu zu erfinden und danach wieder zu beerdigen, sich ausgiebig zu streiten.So steht nun das dritte Antilopen-Album an der Schwelle zu einem neuen Jahrzehnt für nichts weniger als eine emblematisch neue Lesart der Tradition urbaner Musik!",
            "startDateTime": "4/12/22 20:00",
            "venueId": "v12",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478183449&a=774719&m=13738"
        },
        {
            "id": "e272",
            "title": "Thomas Reis - Kracher, Knaller, Kabarett",
            "description": "Das Beste zum SchlussZum Jahreswechsel lässt es einer unserer Lieblingskabarettisten, der Wahl-Freiburger Thomas Reis, dem Anlass entsprechend krachen und zündet erneut seine Lieblingspointen exklusiv im Vorderhaus.Sie erwartet ein Kabarettabend des frivolen Intellekts wider den Mief der Toleranzigkeit, voll satirischer Böller, politisch, saftig, menschlich, komisch, philosophisch, aber mit Gewissheit stets unkorrekt.Überlegen Sie nicht lange und kaufen sie Tickets für einen Abend, der viel bunter als der Silvesterhimmel vor der Tür sein wird, den Sie übrigens nach Ende der Veranstaltung immer noch sehen können, ohne sich vorher die Füße platt zu stehen und den Arsch abzufrieren.Im Frühjahr 2020 wurde Thomas Reis mit dem Ehrenpreis des Kleinkunstpreises des Landes Baden-Württemberg für sein (bisheriges) Gesamtwerk ausgezeichnet. Mehr Infos: http://thomasreis.de/Foto: Dominic Reichenbach",
            "startDateTime": "12/31/21 17:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478184127&a=774719&m=13738"
        },
        {
            "id": "e273",
            "title": "Theater mit der 13 ? Marias kleiner Esel",
            "description": "Eine Weihnachtsgeschichte nach Gunhild Sehlin für Kinder ab 4 Jahren**KUNST KOMMT VON KENNEN**Es gab viele Esel in Nazareth. Alles fleißige Arbeitstiere. Nur ein Esel war faul und bockig genauso wie sein Knecht. Darum war er schmutzig und alle lachten ihn aus. Nur Maria liebte den kleinen Esel und kraulte ihn trotzdem.Eines Tages erließ der Kaiser den Befehl: Alle sollten sich in der Stadt ihrer Väter zählen lassen! So mussten Josef und Maria von Nazareth nach Bethlehem reisen, wo doch Maria bald ihr Kindlein bekommen sollte. Josef wollte für die Reise einen Esel kaufen, doch die waren teuer. Schließlich bekam er nur den schmutzigen, bockigen Esel. Josef wunderte sich, wie sehr sich Maria über das Tier freute. Und auch alle anderen Tiere im Stall nahmen es gut auf. Wie hübsch war das Eselchen, als Maria es striegelte. Und bald sollte es ihr Helfer. und Beschützer werden! Mehr Infos: http://www.theater-mit-der-13.de",
            "startDateTime": "12/15/21 10:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478184131&a=774719&m=13738"
        },
        {
            "id": "e274",
            "title": "Voodoo Jürgens - Bummerl Tour 2021",
            "description": "Ohne Schmäh: Als Ende 2016 ?Ansa Woar? das Debütalbum von Voodoo Jürgens erschien, bekam es durch die Bank Lobeshymnen und Top-Bewertungen; gleichzeitig schrieben wohlwollende Medien wie der Musikexpress im aufmunternden Ton, dass diese Musik nun aber wirklich zu österreichisch, zu raunzend, zu fordernd, letztlich auch zu ?leiwand? sei, um von den goldenen Schallplatten der rund um diese Zeit durchstartenden und sehr breitenwirksamen österreichischen Erfolgs-Acts zu träumen. Es kam anders: ?Ansa Woar? stieg ? als wohl erstes österreichisches Indie-Album überhaupt ? von null auf eins in die Verkaufscharts ein, holte im Rekordtempo Gold-Status und sorgte selbst beim deutschen Nachbarn für volle Hallen und klingelnde Kassen; und das eben ohne Anbiederung an Erfolgsformeln, ohne das Schielen auf Verkaufszahlen und Hörgewohnheiten, sondern durch klassische Mundpropaganda basierend auf dem Charisma eines beinahe gescheiterten und fünf vor zwölf aus dem Underground nach oben gespülten Hallodris.",
            "startDateTime": "10/10/21 20:00",
            "venueId": "v12",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478184157&a=774719&m=13738"
        },
        {
            "id": "e275",
            "title": "CARROUSEL - CINQ Tour 2021/2022",
            "description": "CARROUSEL kehren mit einem neuen Album endlich auf die Bühne zurück (VÖ: 03.09.21 | Jazzhaus Records). Weil dem charmanten Duo der Kontakt zum Publikum sehr gefehlt hat, steht der Herbst 2021 sowie das Frühjahr 2021 ganz im Zeichen von neuer Musik und ausgiebigem Touren samt Band. Die vielfältigen und dynamischen Songs klingen modern, ihr Stil und ihre Melodien sind stets poppig und die französischen Texte sind voller Poesie. Im Mittelpunkt steht die Energie und die Live Emotionen mit dem Publikum - eine Einladung zum Träumen, Mitsingen und Tanzen, um die Zeit zu vergessen. Voilà!",
            "startDateTime": "1/25/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29478184195&a=774719&m=13738"
        },
        {
            "id": "e276",
            "title": "Wildes Holz - Grobe Schnitzer",
            "description": "In Goslar sind sie längst keine Unbekannten mehr und können sich vor Ort über eine große Fan-Base freuen. Zuletzt haben sie das Kraftwerk im Doppel mit den Zucchini Sistaz gerockt. Die Band Wildes Holz zeigt seit über 20 Jahren, dass eine Blockflöte im Grunde ein Rock-Instrument ist, dessen Gefahr für Minderjährige nicht zu unterschätzen ist. Für das neue Programm ?grobe Schnitzer? wird der Staffelstab des Gitarrenparts an Johannes Behr weitergegeben. Eigentlich sollte die Premiere im April im Ebertbad stattfinden, diese wird aber wegen der Corona-Pandemie erst am 28.9.2021 sein.Im neuen Programm von Wildes Holz geht es um diese groben Schnitzer, aus denen etwas Neues entsteht. Denn mit Fehlern muss man kreativ umgehen, sonst wird ?s langweilig. Und selbst aus den gröbsten Schnitzern kann etwas entstehen, wenn man Improvisationstalent und Humor hat. Und Instrumente aus Holz. Das ist klar.Virtuose akustische Live-Konzerte ohne Genre-Grenzen, spontane Komik und kraftvolles Spiel sind seit über 20 Jahren die Markenzeichen von Wildes Holz. Im neuen Programm zeigen sie zudem ihr musikalisches Draufgängertum. Denn wer Fehler vermeidet, macht alles richtig. Aber wer Fehler kultiviert, der macht Musik. Oder eben grobe Schnitzer. Man muss sich halt auch mal was leisten.",
            "startDateTime": "11/20/21 20:00",
            "venueId": "v26",
            "offerURL": "https://www.awin1.com/pclick.php?p=29503848321&a=774719&m=13738"
        },
        {
            "id": "e277",
            "title": "Souvenir de Florence - Streichsextette von Tschaikowsky & Dvorak",
            "description": "Frielinghaus EnsembleStreichsextette Dvo?ák & TschaikowskyAntonín Dvo?ák Streichsextett A-Dur, op. 48Peter Iljitsch Tschaikowsky Streichsextett d-Moll, op. 70 »Souvenir de Florence«Frielinghaus EnsembleGustav Frielinghaus, Leonard Fu, Violine | Alejandro Regueira Caumel,Sào Soulez Larivière, Viola | Oliver Léonard, Jakob Schall, VioloncelloVon der Elphi ins Stadthaus:Seit der Eröffnungssaison ist das Frielinghaus Ensemble regelmässig in der Elbphilharmonie sowie in weiteren deutschen Konzertsälen zu Gast. Über die gerade veröffentlichte CD urteilte die Süddeutsche Zeitung mit ?Leidenschaftlich und zart? und Radio Bremen sprach von ?unheimlicher Power und ganz viel Lust am Musikmachen?.Erweitert man ein Streichquartett um eine Bratsche und ein Cello, verändert sich auch der Klang. Er wird dunkler, dichter, bisweilen fast sinfonisch. Kein Wunder, dass die Romantiker das Streichsextett besonders liebten. Die beiden Werke des Konzertabends kommen wie klingende Selbstporträts ihrer Schöpfer daher: Das überschäumend musikantische, vom böhmischen Volkston geprägte Sextett op. 48 von Dvo?ák und »Souvenir de Florence« von Tschaikowsky, das der russische Komponist in Erinnerung an einen Aufenthalt in der toskanischen Stadt schrieb und dessen schwelgerisches Melos von einer für ihn ungewöhnlichen Heiterkeit geprägt ist.Jetzt ist das Ensemble um den Hamburger Geiger Gustav Frielinghaus, ebenfalls Primarius des Amaryllis Quartetts, live im Stadthaus Ulm zu erleben. Die Südwestpresse beschrieb das Spiel des Frielinghaus Ensembles als ?leidenschaftsvoll? und ?mit vollem Risiko?.",
            "startDateTime": "6/22/21 20:00",
            "venueId": "v24",
            "offerURL": "https://www.awin1.com/pclick.php?p=29514548829&a=774719&m=13738"
        },
        {
            "id": "e278",
            "title": "Klangblüten im japanischen Garten - Kurzkonzert mit traditioneller und komponierter japanischer Musik",
            "description": "1990 übergab die Partnerstadt Matsuyama ein großartiges Geschenk an die Bürger Freiburgs: den japanischen Garten am Seepark. Seither haben wir einen zauberhaften Ort der Ruhe und spüren hier die Naturverbundenheit japanischer Kultur. Mehrklang hat für diesen Ort ein besonderes Programm mit traditioneller und komponierter japanischer Musik entwickelt: eine musikalische Verbeugung und Ausdruck der Wertschätzung für diesen Garten. Das Konzert präsentiert die japanische Akaishi Daiko-Trommelgruppe, traditionelle Gagaku-Instrumente, sowie die Komposition ?Raintree? für 2 Marimbas und Vibraphon von Toru Takemitsu und ein Werk für Akkordeon und Blockflöte von Toschio Hosokawa.",
            "startDateTime": "6/20/21 16:00",
            "venueId": "v6",
            "offerURL": "https://www.awin1.com/pclick.php?p=29524429341&a=774719&m=13738"
        },
        {
            "id": "e279",
            "title": "Böhmische Dörfer - Cargo-Theater",
            "description": "Die neue Theaterproduktion ?Böhmische Dörfer? des Cargo-Theater ist eine autobiografische Auseinandersetzung der beiden Geschwister Carla und Leon Wierer mit dem Leben ihres Großvaters. Dieser kämpfte im Zweiten Weltkrieg als Soldat in Stalingrad. Was könnte ihnen der junge Mann, den sie nur von einem Foto kennen, alles vererbt haben? Einen bestimmten Gang, eine besondere Art zu denken? Alpträume, oder den Granatsplitter, den er aus Stalingrad in seiner Schulter mitbrachte?",
            "startDateTime": "6/17/21 20:30",
            "venueId": "v12",
            "offerURL": "https://www.awin1.com/pclick.php?p=29524429447&a=774719&m=13738"
        },
        {
            "id": "e280",
            "title": "FREISTIL Dinner-Krimi Mord am Filmset im Dattler/ Freiburg - Mit Vier-Gänge Menü und Apéritif",
            "description": "Sie befinden sich im Restaurant Dattler, in dem gerade ein Filmteam den Kriminalfilm Fahr zur Hölle, mein Schatz! dreht. Dabei bilden Sie zusammen mit den anderen Gästen die Statisten für zwei der Filmszenen. Der Regisseur Rüdiger Emmerich hat allerdings bisher nur erfolglose Filme gedreht und streitet sich ständig mit dem arroganten und selbstverliebten Hauptdarsteller Leander Laußmann. Die schüchterne Nebendarstellerin Katja Niemann ist offensichtlich eine Fehlbesetzung, die divenhafte Schauspielerin Nina Voss hasst Leander und der schwule und bissige Nebendarsteller Detlev Ruck würde lieber selber die Hauptrolle spielen. Da wird einer der Künstler am Filmset ermordet. Doch der unfähige Polizeiobermeister Dieter Drösel, der in diesem Mordfall ermittelt, liegt mit seinen Verdächtigungen ständig daneben. So bleibt bis zum Schluß offen, wer der Mörder war.Nur gut, daß Sie zwischendurch ein edles Vier-Gänge Menü serviert bekommen. So haben Sie Zeit, das Erlebte zu verdauen und mit den anderen Gästen zu diskutieren, wer der Täter gewesen sein könnte. Und als einer der Statisten dürfen Sie beim Filmdreh sogar ein bißchen mitwirken: In zwei der Szenen werden Sie mit den anderen Statisten gemeinsam vor Entsetzen schreien oder später begeistert mitschnippen, wenn die Hauptdarstellerin singt. Damit das auch klappt, macht der Regisseur vorher ein paar Stimm- und Lockerungsübungen mit Ihnen und den anderen Gästen.",
            "startDateTime": "6/18/21 19:00",
            "venueId": "v29",
            "offerURL": "https://www.awin1.com/pclick.php?p=29534371877&a=774719&m=13738"
        },
        {
            "id": "e281",
            "title": "FREISTIL Dinner-Krimi Mord auf dem Betriebsfest im Dattler/ Freiburg - Mit Vier-Gänge Menü und Apéritif",
            "description": "Sie arbeiten in einer Firma, die Kondome herstellt und feiern mit den Kolleg/innen im Restaurant Dattler das jährliche Betriebsfest. Die naive Chefin hat den Betrieb erst vor kurzem geerbt und ist mit der Leitung des Unternehmens offensichtlich völlig überfordert. Der Assistent der Chefin ist ein Geizhals, der ein hartes Sparprogramm durchgesetzt hat und insgeheim die Fäden in der Hand hält. Der Leiter der Personalabteilung, der auch Betriebsrat ist, versucht vergeblich, sich gegen die Sparpläne der Firma zu wehren. Und die hübsche Praktikantin präsentiert die neue Werbekampagne für das geplante XXL-Kondom. Da passiert ein Mord, dem einer der Feiernden zum Opfer fällt. Hat die Konkurrenzfirma etwas mit dem Mord zu tun oder stammt der Täter etwa aus den eigenen Reihen?Nur gut, daß Sie zwischendurch ein edles Vier-Gänge Menü serviert bekommen. So haben Sie Zeit, das Erlebte zu verdauen und mit den anderen Gästen zu diskutieren, wer der Täter ist. Aber keine Angst: Außer gemeinsam mit allen Kolleg/innen den Refrain des Firmenliedes zu singen, müssen Sie hier nicht mitspielen!",
            "startDateTime": "9/24/21 19:00",
            "venueId": "v29",
            "offerURL": "https://www.awin1.com/pclick.php?p=29534372115&a=774719&m=13738",
            "imageURL": "https://media.konzertkasse.de/CXqLjZPz.jpeg"
        },
        {
            "id": "e282",
            "title": "FREISTIL Dinner-Krimi Mord auf der Single-Party im Dattler/ Freiburg - Mit Vier-Gänge Menü und Apéritif",
            "description": "Sie sind Gast einer Single-Party. Holger Horn, der Besitzer der Online Single-Börse Partner-Schiff, sorgt als Kapitän verkleidet für Stimmung und leitet einige Kennenlern-Spiele an. Sein Mitarbeiter Olaf Ochsenreiter spielt den Amor und stellt Liebesbotschaften zu. Die angetrunkene, aber unattraktive Christina Helfering und die hübsche Sonja, zwei Gäste der Party, machen den Persönlichkeitstest zur Partnersuche und bekommen ein Date-Coaching für das erste Date. Da passiert ein Mord, dem einer der Anwesenden zum Opfer fällt. Wird der eifersüchtige Polizist Friedemann Tal, der seine eigene Ehefrau auf der Party erwischt, diesen Fall aufklären? Oder hat er selber etwas mit dem Mord zu tun?Wie gut, daß Sie zwischendurch ein edles Vier-Gänge Menü serviert bekommen. So haben Sie Zeit, das Erlebte zu verdauen und mit den anderen Gästen zu diskutieren, wer der Täter ist.Und vielleicht haben Sie auch Glück und dürfen als Frau beim Burgfräulein-Menuett mittanzen oder als Mann beim Date-Coaching-Rollenspiel testen, wie gut Ihre Antworten auf die Fragen der Dame sind.",
            "startDateTime": "7/23/21 19:00",
            "venueId": "v29",
            "offerURL": "https://www.awin1.com/pclick.php?p=29534373273&a=774719&m=13738"
        },
        {
            "id": "e283",
            "title": "Stunchile - Modellprojekt",
            "description": "`Erdige, bluesgetränkte Rock-Kracher treffen auf atmosphärische, zeitlose Melodien mit Ohrwurm ? Charakter`. So könnte man den energiegeladenen Sound des brandneuen Rock Trio´s STUNCHILE aus dem Süden Deutschlands wohl am besten beschreiben.Obwohl weder die quirlige Frontfrau Leonie, noch Gitarrist Chris oder Drummer Fabi jemals Wüsten Luft geschnuppert haben und das Trio ursprünglich am Rande des Schwarzwald groß geworden ist, schaffen ihre Songs eine Atmosphäre, die einen schnurstracks auf die unendlichen Weiten kilometer-langer Highways mitten durch eine riesige Wüstenlandschaft katapultiert. Erinnerungen an Tarantio´s `From Dusk till Dawn` gepaart mit ZZ Top´s `La Grange` werden wach, der `Southern Spirit` mit eine Prise Janis Joplin im Gepäck. Zusammen Whiskey trinken mit Bands wie Wolfmother, Rival Sons oder auch mit großartigen Performerinnen à la Aretha Franklin.STUNCHILE verstehen es all diese Attribute zu vereinen und sie sich zu eigen zu machen, denn angestaubt klingt ihr mächtiger Rocksound niemals. Moderner Rock mit einem guten Schuss Oldschoolness !!!!",
            "startDateTime": "6/19/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29534374785&a=774719&m=13738"
        },
        {
            "id": "e284",
            "title": "Biergeheimnis - Escape Walk durch die Brauerei GANTER",
            "description": "Werdet Mitarbeiter der Brauerei GANTER!Euer erster Arbeitstag schickt euch auf eine Zeitreise durch die Freiburger Brauerei. Anlässlich der 150 Jahr Feier der Brauerei sollen die Original-Etiketten vom 1865 gebrauten Hellen Lager präsentiert werden. Die Firmenleitung hat Zeitdruck, den die Präsentation von den verschwundenen Etiketten soll bald stattfinden. Kannst Du mit Deinem Team helfend eingreifen?- Laufstrecke ca. 800m durch die Brauerei- Dauer ca. 90 min. zzgl. möglichem Abschlussgetränk- geeignet für 3 - 9 Personen- geeignet für Jugendliche ab 16 Jahren- Start- und Zielpunkt: Brauerei Ganter, Freiburg- Schwierigkeitsgrad: mittel. Geeignet für Anfänger - Fortgeschrittene",
            "startDateTime": "7/17/21 13:00",
            "venueId": "v31",
            "offerURL": "https://www.awin1.com/pclick.php?p=29542220057&a=774719&m=13738"
        },
        {
            "id": "e285",
            "title": "Yatao - Modellprojekt",
            "description": "Als DAS Handpan Duo Deutschlands, haben Malte und Alex sich in den vergangenen Jahren einen festen Platz in der Handpan Welt verschafft. Im Internet millionenfach geklickt, auf Konzerten von tausenden Menschen besucht - blicken sie auf sechs intensive Jahre zurück, die sie musikalisch, sowie menschlich haben reifen lassen. Wer Yatao kennt freut sich schon auf die berührenden Momente auf den Konzerten, die weit hinaus gehen über den puren Genuss von Musik. Sie lassen das Publikum teilhaben an den Höhen und Tiefen ihrer Freundschaft - eine Freundschaft die im Klang ihren Ausdruck findet. Nicht nur auf Konzerten, sondern auch auf Workshops teilen die beiden jungen Männer ihre Faszination für das Instrument und berühren auch dort durch die Lebendigkeit und Authentizität die ihnen nachgesagt wird.",
            "startDateTime": "7/3/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29542221141&a=774719&m=13738"
        },
        {
            "id": "e286",
            "title": "Leoniden - Modellprojekt",
            "description": "Gerade wurden die Leoniden als ?Beste Band? für die 1Live-Krone nominiert, jetzt kündigt sie ihr drittes Album ?Complex Happenings Reduced To A Simple Design? für den 20.08.2021 an. Ihre Tour verschiebt die Band Corona-bedingt aus dem Frühjahr in den September 2021. ?Nach einem durchaus abgefuckten und komplizierten Jahr voller durchkreuzter Pläne und abgesagter Konzerte sind wir übelst froh darüber, dass wir das heftigste und aufwendigste Projekt, das wir jemals gemacht haben, heute hier ankündigen können: Unser neues Album ?Complex Happenings Reduced To A Simple Design? erscheint am 20. August 2021 und kann bereits ab Donnerstag bei uns im Shop vorbestellt werden. Das waren die good News, es gibt allerdings auch weniger gute Neuigkeiten. Ihr habt es ja sicher auch schon ein bisschen geahnt: Wir müssen unsere Tour nochmal verschieben. Aber das hat trotzdem etwas Gutes. So können wir das Album direkt mit euch feiern - vis-à-vis, Arm und Arm und nicht im Livestream oder so! Leute, das wird eine riesige Party mit neuen Songs, Action ohne Ende und ordentlich Nachholbedarf in allen Bereichen! Tourtickets behalten selbstverständlich ihre Gültigkeit.",
            "startDateTime": "6/27/21 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29542221161&a=774719&m=13738"
        },
        {
            "id": "e287",
            "title": "Mozart im Hof",
            "description": "Wolfgang Amadeus Mozart (1756 - 1791)Sinfonie Nr. 10 G-Dur KV 74Violinkonzert Nr. 4 D-Dur KV 218 Violinkonzert Nr. 5 A-Dur KV 219 Freiburger BarockorchesterGottfried von der Goltz, Violine & LeitungIn den 1770er Jahren stand Wolfgang Amadeus Mozart am Scheideweg. Der 14jährige war den Schuhen des artistischen Wunderkindes entwachsen und wollte sich zu einem angesehenen, respektierten Komponisten entwickeln. In dieser Zeit entstanden zahlreiche Kompositionen, überwiegend Sinfonien und Solokonzerte, die den jungen Meister von seiner experimentellen Seite zeigen: farbenreiche Instrumentierungen, kühne Harmonien und das Spiel mit tradierten Formen prägen das Klangbild dieser Schaffensphase. Das Freiburger Barockorchester widmet sich mit drei Kompositionen aus der Feder Mozarts diesen kreativen Jahren und unterstreicht mit seinem temperamentvollen, nuancierten Spiel Mozarts jugendliche Vitalität. Neben einer Sinfonie erklingen zwei Violinkonzerte, in denen Gottfried von der Goltz als Solist und Leiter des FBO brillieren kann.Foto (c) Britt Schilling",
            "startDateTime": "8/21/21 20:15",
            "venueId": "v13",
            "offerURL": "https://www.awin1.com/pclick.php?p=29550059011&a=774719&m=13738"
        },
        {
            "id": "e288",
            "title": "Wovon träumst du, kleiner Bär? // 5+ Jahre",
            "description": "Bernhard, ein kleiner Bär, kann den Winter gar nicht leiden. Zum ersten Mal soll er sich alleine eine Winterschlafhöhle einrichten, denn die Zeit der großen Familienhöhlen mit Mutter und Geschwistern ist vorbei. Nun muss Bernhard für sich selber sorgen und auch das mag der gemütliche Winterschläfer absolut nicht. Doch auf der Suche nach dem perfekten Plätzchen für den Winter, trifft der Bär auf zwei Siebenschläfer. Gemeinsam wollen Sie in einem Lastwagen die kalte Jahreszeit überstehen, als sie sich unerhofft auf eine traumhaft-schöne Reise in den warmen Süden machen.",
            "startDateTime": "7/4/21 16:00",
            "venueId": "v10",
            "offerURL": "https://www.awin1.com/pclick.php?p=29572281537&a=774719&m=13738"
        },
        {
            "id": "e289",
            "title": "Gun Love // 15+ Jahre",
            "description": "?Gun Love? ? eine poetische Geschichte voll hartem Realismus. Im Mittelpunkt steht das Mädchen Pearl, welches mit seiner Mutter in einem alten Ford Mercury aufwächst. Wie eine Ballade entspinnt sich diese liebevolle Mutter-Tochter-Geschichte im tiefen Süden der Vereinigten Staaten. Angesiedelt auf der Rückbank des räderlosen Autos, zwischen einer Müllkippe, einem Trailerpark und zwei Highways, wird hier der amerikanische Traum in sein Gegenteil verkehrt. Denn die Welt, draußen vor der Windschutzscheibe, ist den Waffen verfallen und diese finden unvermeidlich und mit unaufhaltsamer Zerstörungskraft auch den Weg in Pearls Leben.Gun Love is a hypnotic story of family, community and America?s love affair with firearms, told from the perspective of a sharp-eyed teenager. Fourteen-year-old Pearl lives in the front seat of a broken-down car and her mother Margot lives in the back. Together they survive on a diet of love songs and stolen cigarettes.Life on the edge of a Florida trailer park is strange enough, but when the pastors ?Guns for God? programme brings Eli Redmond to town Pearl?s world is upended. Eli pays regular visits to Margot in the back seat, forcing Pearl to find a world beyond the car. This world is marked by guns and their deadly potential finds the way into Pearls live.",
            "startDateTime": "7/2/21 19:00",
            "venueId": "v10",
            "offerURL": "https://www.awin1.com/pclick.php?p=29572281541&a=774719&m=13738"
        },
        {
            "id": "e290",
            "title": "Der Sandler - Autorenlesung mit Markus Ostermair",
            "description": "In Der Sandler wird eine Geschichte erzählt, die eigentlich gar nicht erzählt werden darf. Denn sie handelt von der Scham des sozialen Abstiegs ? und diese Scham macht die Betroffenen schweigen. Der Sandler ist deshalb eine fiktive Geschichte, die Obdachlose ins Zentrum stellt und trotz aller Fiktion ein realistisches und vielschichtiges Bild ihres Alltags auf den Münchner Straßen vermittelt.Einer von ihnen ist Karl Maurer. Er mäandert durch die Stadt, besucht Suppenküchen und Kleiderkammern und manchmal wird er von den Bildern seines früheren Lebens eingeholt ? von seiner Frau und seiner kleinen Tochter, der Zeit als Mathematiklehrer und dem Kind, das ihm vors Auto lief. Gleichzeitig durchstreift auch sein Freund Lenz die Stadt auf der Suche nach ihm. Lenz, ein Zettelschreiber und Utopist, merkt, dass es mit ihm zu Ende geht. Er will Karl seine unfertigen Notizen vermachen und, was noch viel wichtiger ist, den Schlüssel zu seiner Wohnung, die er geerbt hatte, in der er sich aber geweigert hatte, zu leben. Lenz? Tod ist ein Wendepunkt. Die Wohnung könnte Karls Chance sein, die diffusen, stets auf die lange Bank geschobenen Pläne, sein Leben wieder in den Griff zu bekommen, in die Tat umzusetzen. Gleichzeitig merkt auch Kurt, ein Haftentlassener, der stets den Angriff für die beste Verteidigung hält, dass er sein Leben ändern muss. Auch er sucht eine Bleibe, die er mit niemandem mehr zu teilen braucht.Der Sprachlosigkeit der Obdachlosen setzt Markus Ostermair eine Sprache entgegen, die nahe an ihr Leben heranführt, ohne dabei zu werten, zu romantisieren oder voyeuristisch zu sein. Eine Kooperation mit dem Literaturhaus Freiburg___Im Rahmen der Veranstaltungsreihe Für alle reicht es nicht widmet sich das Theater im Marienbad seit Dezember 2019 in den unterschiedlichsten künstlerischen Formen bestehenden Ungleichheiten und Ungerechtigkeiten in unserer Gesellschaft. Vom 30.06. ? 06.07.2021 blicken wir in Theaterproduktionen für Kinder, Jugendliche und Erwachsene, einer Lesung und einer Diskursveranstaltung auf das Thema Obdach.Der Themenschwerpunkt Obdach ist eine Kooperation gestaltet vom Theater im Marienbad im Rahmen der Veranstaltungsreihe Für alle reicht es nicht und Unter Freiburgs Dächern ohne Dach, einem Projekt zur 900-Jahr-Feier der Stadt Freiburg von Renate Obermaier und Heinzl Spagl.",
            "startDateTime": "7/6/21 20:00",
            "venueId": "v10",
            "offerURL": "https://www.awin1.com/pclick.php?p=29572281545&a=774719&m=13738"
        },
        {
            "id": "e291",
            "title": "Unter Freiburgs Dächern ohne Dach - Podiumsdiskussion",
            "description": "Im Rahmen der Veranstaltungsreihe Für alle reicht es nicht widmet sich das Theater im Marienbad seit Dezember 2019 in den unterschiedlichsten künstlerischen Formen bestehenden Ungleichheiten und Ungerechtigkeiten in unserer Gesellschaft. Vom 30.06. ? 06.07.2021 blicken wir in Theaterproduktionen für Kinder, Jugendliche und Erwachsene, einer Lesung und einer Diskursveranstaltung auf das Thema Obdach.Der Themenschwerpunkt Obdach ist eine Kooperation gestaltet vom Theater im Marienbad im Rahmen der Veranstaltungsreihe Für alle reicht es nicht und Unter Freiburgs Dächern ohne Dach, einem Projekt zur 900-Jahr-Feier der Stadt Freiburg von Renate Obermaier und Heinzl Spagl.",
            "startDateTime": "7/3/21 17:00",
            "venueId": "v10",
            "offerURL": "https://www.awin1.com/pclick.php?p=29572281649&a=774719&m=13738"
        },
        {
            "id": "e292",
            "title": "Samantha Fish - Kill Or Be Kind",
            "description": "Die genresprengende US Gitarristin, Sängerin und Songwriterin Samantha Fish veröffentlicht am 20. September in Deutschland ihr mit Spannung erwartetes neues Werk ?Kill Or Be Kind? (inakustik). Es ist das erste Album der 30-Jährigen beim legendären Nashville Label ROUNDER. Samantha fasziniert das Publikum rund um den Globus mit ihrer zündenden Live-Performance ? und begeisterte unlängst auch in Deutschland mit ihrem sensationellen Gitarrenspiel und fulminanten Liveshow. Mit ?Kill Or Be Kind? schickt sich die ?Wonder Woman? aus Kansas City an, den ganz großen internationalen Durchbruch zu schaffen!Die begnadete Gitarristin aus Kansas City flirtet auf ?Kill Or Be Kind? ganz ungeniert und selbstverständlich mit dem traditionellem Blues ihrer Heimat, verschiebt dabei die Grenzen des Genres jedoch hin zu ihrem ganz eigenen, unverkennbaren Sound. So stößt der Memphis Soul Song ?She Don´t Live Here Anymore? durch das eindringliche Vibrato der Gitarre dicht an die Grenze zur County Music. ?Love Your Lies? hingegen überzeugt durch einen Spagat aus Punk, Rockabilly und Soul,während ?You Got It Bad (Better Than You Ever Had?) als klassischer Blues Rocker punktet.",
            "startDateTime": "3/15/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=29580521921&a=774719&m=13738"
        },
        {
            "id": "e293",
            "title": "TANZNETZ Freiburg & friends - Kurze Tanzstücke aus Freiburg und Ba-Wü",
            "description": "Das tanznetz|freiburg lässt Revue passieren, nimmt Anlauf für die Zukunft und lädt alle Akteur*innen der letzten Jahre sowie Gäste aus anderen Städten und alle Interessierten zum Mitfeiern ein. Bei ?Tanznetz Freiburg & friends ? kurze Tanzstücke aus Freiburg und BaWü? am 3. Juli werden kurze Stücke (5 bis 15 Min.) von Freiburger Künstler*innen und Gästen gezeigt (Dauer insg. 2 Std.).",
            "startDateTime": "7/3/21 20:00",
            "venueId": "v12",
            "offerURL": "https://www.awin1.com/pclick.php?p=29580523039&a=774719&m=13738"
        },
        {
            "id": "e294",
            "title": "Quadro Nuevo - Wunder Welt Musik",
            "description": "Seit fast 20 Jahren Tourleben ist Quadro Nuevo auf der Suche nach der Seele des Tango. Unzählige Orte haben die abenteuerlustigen Virtuosen bereist, verwegene Spielweisen ausgelotet, sich damit zweimal den ECHO geholt. Anfang 2014 packten sie wieder einmal ihre Instrumente ein: keine Tournee sollte es diesmal werden, sondern eine Expedition ins sommerliche Buenos Aires. Sie bezogen Quartier in einer alten Stadtvilla, probten tagelang in der flirrenden Mittagshitze, schwärmten abends aus, stürzten sich kopfüber in die Szene, mischten sich mit den argentinischen Musikern, begleiteten Tänzer, begegneten berühmten Tangueros und verrückten Straßenpoeten, führten nächtliche Gespräche bis zum Morgengrauen und berauschten sich an schwerem Wein und frischem Tango direkt von der Quelle. Diese musikgewordenen Erlebnisse formten sich zum neuen Quadro Nuevo-Album ?TANGO !?",
            "startDateTime": "5/18/22 20:00",
            "venueId": "v18",
            "offerURL": "https://www.awin1.com/pclick.php?p=24419022781&a=774719&m=13738"
        },
        {
            "id": "e295",
            "title": "Ernst Paul Dörfler: Nestwärme - Lesung und Vogelwanderung",
            "description": "Nach drei Jahren bürokratischer Hürden und staatlicher Prüfungen erschien 1986 Ernst Paul Dörflers erstes Buch ?Zurück zur Natur?? und wurde zum Kulturbuch der ostdeutschen Umweltbewegung. Wenig später zog der promovierte Ökochemiker, Naturschützer und Autor mit seiner Familie nach Ostberlin, um dort die Grüne Partei der DDR mitzugründen und eine ökologische Politik zu fordern. Sein jüngstes Buch ?Nestwärme? (Hanser, 2019) ist eine Liebeserklärung an die Vögel, ein Appell an das Umweltgewissen unserer Gesellschaft und eine augenzwinkernde Aufforderung, das eigene Leben hin und wieder aus einer neuen Perspektive zu betrachten: Faire partnerschaftliche Beziehungen, ein Leben mit der Sonne statt nach der Uhr und Gewaltverzicht ? die Vogelwelt scheint unserer einiges vorauszuhaben. ?Ernst Paul Dörfler ist nicht nur ein bedeutender Naturschützer. Er ist auch ein intimer Kenner bedrohter heimischer Vogelarten?, sagt Jonathan Franzen. Als solcher lädt Dörfler im Anschluss der Lesung zu einer Vogelwanderung ein.---Foto: © Peter-Andreas HassiepenDas Projekt wird gefördert im Impulsprogramm ?Kunst trotz Abstand? des Ministeriums für Wissenschaft, Forschung und Kunst Baden-Württemberg sowie im Rahmen von ?Neustart Kultur? der Beauftragten der Bundesregierung für Kultur und Medien durch den Deutschen Literaturfonds e. V.Datum: 11.07.2021, 10:30 UhrOrt: WaldHaus Freiburg, Wonnhaldestraße 6Eintritt: 9/6 EuroDie Personenzahl für die Wanderung ist begrenzt. Anmeldung unter info@literaturhaus-freiburg.de WeltgartenAußer Haus",
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
            "customizedContentJSON": "{\"description\": \"In einer Reihe von Arbeiten mit dem Titel 'Painting & Guns' beschäftigt sich Friedemann Hahn mit dem Schriftsteller William S. Burroughs (1914-1997).}"
        },
        {
            "experienceId": "e2",
            "partId": "ep2",
            "customizationLabel": "paintery",
            "customizedContentJSON": "{\"description\": \"William S. Burroughs war außerdem ein begeisterter Fotograph und expressionistischer Maler.\", \"link\": \"http://www.artnet.com/artists/william-s-burroughs/\"}"
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
            "customizedContentJSON": "{\"description\": \"William S. Burroughs lässt sich der Beat-Literatur zuordnen. Er schrieb oft über mystische Themen, v.a. in 'Electronic Revolution', einem seiner bekanntesten Werke.\"}"
        }
    ]
};
