const vocabularyLists = {
    reviewCard: [
        { word: "After/before + Ving", translation: "Après/avant + infinitif" },
        { word: "Afterwards (adv.)", translation: "Ensuite, après, par la suite" },
        { word: "As soon as/when + present", translation: "Dès que/quand + présent" },
        { word: "At first/at last", translation: "Au début/enfin, finalement" },
        { word: "Currently (adv.)", translation: "Actuellement" },
        { word: "Immediately (adv.)", translation: "Immédiatement" },
        { word: "Recently (adv.)", translation: "Récemment" },
        { word: "Subsequently (adv.)", translation: "Ultérieurement" },
        { word: "During (+ Nominal Group)", translation: "Pendant (+ groupe nominal)" },
        { word: "In the end", translation: "Finalement, au bout du compte, en fin de compte" },
        { word: "Meanwhile (adv.)", translation: "Pendant ce temps-là, en attendant" },
        { word: "Accordingly", translation: "En conséquence" },
        { word: "As a result/therefore", translation: "Par conséquent" },
        { word: "Because + Verbal Group", translation: "Parce que + groupe verbal" },
        { word: "Because of (+ Nominal Group)", translation: "À cause de (+ groupe nominal)" },
        { word: "Consequently", translation: "Donc, c'est pourquoi" },
        { word: "Due to (+ Nominal Group)", translation: "En raison de (+ groupe nominal)" },
        { word: "Hence", translation: "D'où" },
        { word: "Since", translation: "Comme" },
        { word: "So, therefore", translation: "Donc" },
        { word: "Also", translation: "Aussi" },
        { word: "As well as", translation: "Ainsi que" },
        { word: "Besides (adv.)", translation: "De plus" },
        { word: "Furthermore/in addition/moreover", translation: "De plus" },
        { word: "Alternatively, otherwise (adv.)", translation: "Sinon, autrement" },
        { word: "By comparison", translation: "Par comparaison, par rapport à" },
        { word: "Conversely (adv.)", translation: "Inversement" },
        { word: "However/even so", translation: "Cependant, néanmoins, toutefois" },
        { word: "In contrast", translation: "En revanche" },
        { word: "Instead", translation: "À la place" },
        { word: "Instead of + Ving", translation: "Au lieu de" },
        { word: "On the contrary", translation: "Au contraire" },
        { word: "However + adj.", translation: "Avoir beau" },
        { word: "In the same way, similarly", translation: "De la même façon" },
        { word: "Likewise", translation: "De même, également" },
        { word: "Although/even though (+ Verbal Group)", translation: "Bien que" },
        { word: "At any rate", translation: "De toute façon" },
        { word: "At least", translation: "Au moins" },
        { word: "Despite/in spite of (+ Nominal Group)", translation: "Malgré/en dépit de (+ groupe nominal)" },
        { word: "In any case", translation: "Dans tous les cas" },
        { word: "Nevertheless", translation: "Néanmoins" },
        { word: "Still", translation: "Encore" },
        { word: "While", translation: "Pendant que" },
        { word: "Yet", translation: "Cependant" },
        { word: "If/whether....or", translation: "Si/que...ou" },
        { word: "On condition that", translation: "À condition que" },
        { word: "Provided that", translation: "Pourvu que" },
        { word: "Unless", translation: "À moins que" },
        { word: "Not only....but also", translation: "Non seulement...mais aussi" },
        { word: "Neither....nor", translation: "Ni...ni" },
        { word: "If the sentence is negative, use 'or' only", translation: "Si la phrase est négative, utilisez seulement 'ou'" },
        { word: "Either....or", translation: "Soit...soit // ou...ou" },
        { word: "Both....and", translation: "À la fois...et" },
        { word: "No sooner....than", translation: "À peine...que" },
        { word: "Hardly....when", translation: "À peine...que" },
        { word: "Whether....or", translation: "Que...ou" }
    ],

    falseFriends1: [
        { word: "achieve", translation: "réaliser, accomplir" },
        { word: "actually", translation: "en réalité" },
        { word: "advertisement (advert, ad)", translation: "publicité (commerce)" },
        { word: "publicity", translation: "publicité, fait de rendre public" },
        { word: "agenda", translation: "ordre du jour" },
        { word: "what's on the agenda?", translation: "quel est l'ordre du jour ?" },
        { word: "ancient", translation: "antique" },
        { word: "appoint", translation: "désigner, nommer" },
        { word: "appointment", translation: "rendez-vous (affaire...)" },
        { word: "attend", translation: "assister à (conf., séminaire)" },
        { word: "assist", translation: "aider" },
        { word: "balance", translation: "équilibre, bilan" },
        { word: "to end", translation: "achever" },
        { word: "currently, presently", translation: "actuellement" },
        { word: "a warning", translation: "un avertissement" },
        { word: "diary, organizer", translation: "un agenda" },
        { word: "old, previous, former", translation: "ancien" },
        { word: "pay a salary", translation: "appointer" },
        { word: "wages, salary", translation: "des appointements" },
        { word: "wait for", translation: "attendre" },
        { word: "scales", translation: "une balance" },
        { word: "strike the right balance", translation: "trouver le juste équilibre" },
        { word: "basket", translation: "un panier" },
        { word: "blank", translation: "vierge (page, espace)" },
        { word: "bless", translation: "bénir" },
        { word: "campaign", translation: "campagne (élections, pub, milit.)" },
        { word: "camping", translation: "le fait de vivre sous tente, camping (activité)" },
        { word: "cap", translation: "bonnet, capsule (bouteille), capuchon (stylo)" },
        { word: "sneakers, trainers", translation: "des baskets" },
        { word: "white", translation: "blanc" },
        { word: "injure, hurt", translation: "blesser" },
        { word: "countryside", translation: "la campagne" },
        { word: "campsite, camping area", translation: "un camping" },
        { word: "cape", translation: "un cap (géo.)" },
        { word: "cloak", translation: "une cape" },
        { word: "cave", translation: "une grotte" },
        { word: "cellar", translation: "la cave" },
        { word: "charge with", translation: "accuser de" },
        { word: "be in charge of", translation: "être responsable de" },
        { word: "load", translation: "charger" },
        { word: "compromise", translation: "un compromis" },
        { word: "conductor", translation: "contrôleur, chef d'orchestre" },
        { word: "driver", translation: "conducteur" },
        { word: "consider + Ving", translation: "envisager, considérer" },
        { word: "contemplate + Ving", translation: "envisager, contempler" },
        { word: "control", translation: "contrôler, avoir la main sur" },
        { word: "convenient", translation: "commode, qui convient, adapté" },
        { word: "it's in jeopardy, in danger", translation: "c'est compromis" },
        { word: "study, take into account", translation: "considérer" },
        { word: "gaze at", translation: "contempler" },
        { word: "check", translation: "contrôler, vérifier" },
        { word: "practical", translation: "concret, pragmatique" },
        { word: "corpse", translation: "un cadavre" },
        { word: "counsel", translation: "conseil (avis formel d'un expert, en droit)" },
        { word: "council", translation: "conseil, assemblée" },
        { word: "body", translation: "un corps" },
        { word: "advice (uncountable)", translation: "des conseils, avis, opinion" },
        { word: "give a piece / a word of advice", translation: "donner un conseil" },
        { word: "course", translation: "un cours, stage de formation" },
        { word: "cover", translation: "couverture (de livre), couvrir un sujet de reportage" },
        { word: "race", translation: "une course" },

    ],

    falseFriends2: [
        { word: "main course, second course", translation: "plat principal d'un menu, 2ème plat" },
        { word: "blanket", translation: "couverture de lit" },
        { word: "coverage", translation: "couverture d'assurance" },
        { word: "current", translation: "actuel" },
        { word: "current account", translation: "compte courant (banque)" },
        { word: "running water", translation: "eau courante" },
        { word: "cry", translation: "pleurer" },
        { word: "shout, scream", translation: "crier" },
        { word: "damage", translation: "les dégâts" },
        { word: "what's the damage?", translation: "combien ça coûte ?" },
        { word: "damages", translation: "les indemnités" },
        { word: "the damages amount to $2,000", translation: "les dommages s'élèvent à 2 000 $" },
        { word: "shopping", translation: "emplettes" },
        { word: "have (a) date", translation: "rendez-vous amoureux/petit(e) ami(e)" },
        { word: "deceive", translation: "tromper" },
        { word: "deception", translation: "la tromperie" },
        { word: "dedicated (person)", translation: "dévouée" },
        { word: "delay", translation: "un retard" },
        { word: "demand", translation: "exiger" },
        { word: "deserve", translation: "mériter" },
        { word: "during", translation: "au cours de" },
        { word: "editor", translation: "rédacteur en chef" },
        { word: "eventually", translation: "en fin de compte" },
        { word: "disappoint", translation: "décevoir" },
        { word: "disappointment", translation: "la déception" },
        { word: "sign for someone", translation: "dédicacer à" },
        { word: "deadline", translation: "date butoir, ultimatum, délai" },
        { word: "ask", translation: "demander" },
        { word: "clear away", translation: "desservir (plat)" },
        { word: "for", translation: "pendant" },
        { word: "publisher", translation: "éditeur" },
        { word: "perhaps, possibly", translation: "éventuellement" },
        { word: "expandability", translation: "capacité d'expansion d'un ordi." },
        { word: "expend on something, on doing something", translation: "consacrer du temps à ..." },
        { word: "expand", translation: "s'étendre" },
        { word: "extravagant", translation: "dépensier" },
        { word: "fabric", translation: "tissus" },
        { word: "figure", translation: "chiffre, silhouette, figure géométrique, dessin" },
        { word: "wild, excessive, outrageous", translation: "extravagant" },
        { word: "factory, production unit, plant", translation: "une fabrique, usine" },
        { word: "a face", translation: "une figure, visage" },
        { word: "fire", translation: "feu (source de chaleur)" },
        { word: "light", translation: "feu (fumeur)" },
        { word: "have you got a light / can you give me a light?", translation: "avez-vous du feu ? / pouvez-vous me donner du feu ?" },
        { word: "fluently", translation: "parler couramment une langue" },
        { word: "a lighter", translation: "un briquet" },
        { word: "be fluent in English", translation: "parler couramment l'anglais" },
        { word: "footing", translation: "balance, basis, position" },
        { word: "be on a friendly footing with someone", translation: "avoir une relation amicale avec quelqu'un" },
        { word: "be on an equal footing", translation: "être sur un pied d'égalité" },
        { word: "a form", translation: "un formulaire, une silhouette" },
        { word: "to form", translation: "constituer un groupe" },
        { word: "a shape", translation: "forme géométrique" },
        { word: "formidable", translation: "redoutable" },
        { word: "furniture", translation: "les meubles" },
        { word: "gas (oline)", translation: "de l'essence (US), du gaz" },
        { word: "hardly", translation: "à peine, guère" },
        { word: "go jogging", translation: "faire un footing" },
        { word: "a form of...", translation: "une forme de ..." },
        { word: "train", translation: "former, éduquer" },
        { word: "formidable", translation: "wonderful, great" },
        { word: "supplies", translation: "les fournitures" },
    ],

    falseFriends3: [
        { word: "hard (adj. + adv.)", translation: "dur, durement" },
        { word: "ignore", translation: "ne pas tenir compte de ..." },
        { word: "work hard", translation: "travailler dur" },
        { word: "pretend not to see", translation: "faire semblant de ne pas voir" },
        { word: "inconvenient", translation: "qui ne convient pas" },
        { word: "inconvenience", translation: "désagrément, ennui" },
        { word: "information", translation: "les renseignements" },
        { word: "a piece of information", translation: "un renseignement" },
        { word: "inhabited", translation: "habité" },
        { word: "injure", translation: "blesser" },
        { word: "introduce someone", translation: "présenter quelqu'un" },
        { word: "journey", translation: "voyage court" },
        { word: "labour", translation: "main d'œuvre" },
        { word: "Labour", translation: "Parti Travailliste" },
        { word: "lack [læk ] of", translation: "manquer de" },
        { word: "large", translation: "grand" },
        { word: "lecture", translation: "conférence" },
        { word: "library", translation: "une bibliothèque" },
        { word: "location", translation: "lieu, situation (géo.)" },
        { word: "magic", translation: "la magie" },
        { word: "mail", translation: "le courrier" },
        { word: "email", translation: "courrier électronique"},
        { word: "snail mail", translation: "courrier normal" },
        { word: "a meeting", translation: "une réunion" },
        { word: "not to know", translation: "ignorer" },
        { word: "drawbacks, disadvantages", translation: "les inconvénients" },
        { word: "the news", translation: "les informations, actualités" },
        { word: "uninhabited", translation: "inhabité" },
        { word: "abuse, insult", translation: "injurier" },
        { word: "put something in, introduce something into", translation: "introduire" },
        { word: "show someone in a place", translation: "introduire quelqu'un dans un lieu" },
        { word: "a day", translation: "une journée" },
        { word: "ploughing, plowing (US)", translation: "le labour (agriculture)" },
        { word: "a lake", translation: "un lac" },
        { word: "wide", translation: "large" },
        { word: "reading", translation: "la lecture" },
        { word: "a bookshop", translation: "une librairie" },
        { word: "rental", translation: "une location (voiture, appartement)" },
        { word: "magical", translation: "magique" },
        { word: "a message", translation: "un mail" },
        { word: "(air) show, display", translation: "un meeting aérien" },
        { word: "political, sports meeting", translation: "meeting pol., sport." },
        { word: "mess", translation: "un fouillis, désordre" },
        { word: "mass", translation: "une messe" },
        { word: "money", translation: "de l'argent" },
        { word: "a note", translation: "un billet (bank), une note (musique), remarque" },
        { word: "pain", translation: "la douleur" },
        { word: "pamphlet", translation: "brochure, leaflet" },
        { word: "parking", translation: "le stationnement" },
        { word: "to pass", translation: "réussir un examen" },
        { word: "a patron", translation: "un client (régulier), mécène" },
        { word: "thank you for your patronage!", translation: "merci de votre fidélité !" },
        { word: "a pension", translation: "une pension (argent)" },
        { word: "petrol", translation: "de l'essence (UK)" },
        { word: "photograph", translation: "une photographie" },
        { word: "a piece", translation: "un morceau" },
        { word: "plain", translation: "clair, simple, une plaine (géo.)" },
        { word: "a policy", translation: "une politique, stratégie" },
        { word: "political", translation: "politique (adj.)" },
        { word: "a precedent", translation: "un précédent" },
        { word: "premium", translation: "prime d'assurance" },
        { word: "preservative", translation: "qui préserve, conserve" },
        { word: "prevent something / from Ving", translation: "empêcher, éviter" },
    ],

    falseFriends4: [    
        { word: "previous", translation: "précédent" },
        { word: "change", translation: "de la monnaie" },
        { word: "a mark (US), a grade (UK)", translation: "une note (évaluation)" },
        { word: "grief", translation: "la peine" },
        { word: "a satirical tract, a lampoon", translation: "un pamphlet" },
        { word: "a parking lot/space/area", translation: "un parking" },
        { word: "to take an exam, sit for an exam", translation: "passer un examen" },
        { word: "the boss, manager", translation: "le patron" },
        { word: "pattern", translation: "(couture) patron" },
        { word: "a boarding house", translation: "une pension (maison)" },
        { word: "oil", translation: "du pétrole" },
        { word: "a photographer", translation: "un photographe" },
        { word: "a play", translation: "une pièce (théâtre)" },
        { word: "a coin", translation: "une pièce (monnaie)" },
        { word: "a patch", translation: "(couture) une pièce" },
        { word: "a room", translation: "une pièce (habitation)" },
        { word: "politics", translation: "la politique" },
        { word: "a politician", translation: "un politique" },
        { word: "full", translation: "plein" },
        { word: "previous, preceding, earlier", translation: "précédent (adj.)" },
        { word: "bonus", translation: "prime (extra money)" },
        { word: "condom", translation: "un préservatif" },
        { word: "flourishing, luxuriant", translation: "exubérant, qui prolifère" },
        { word: "remark", translation: "faire remarquer" },
        { word: "warn", translation: "avertir, prévenir" },
        { word: "planned, scheduled, expected", translation: "prévu" },
        { word: "creeping", translation: "rampant" },
        { word: "to notice", translation: "remarquer" },
        { word: "rest", translation: "se reposer" },
        { word: "resume", translation: "reprendre une activité" },
        { word: "a reunion", translation: "des retrouvailles" },
        { word: "appointment", translation: "rendez-vous (affaire)" },
        { word: "make an appointment", translation: "prendre rendez-vous" },
        { word: "stay, remain", translation: "rester" },
        { word: "sum up, summarize", translation: "résumer" },
        { word: "a meeting", translation: "une réunion" },
        { word: "sensible", translation: "raisonnable" },
        { word: "smoking", translation: "qui fume" },
        { word: "society", translation: "la société des hommes" },
        { word: "spot", translation: "tache, salissure, lieu, endroit" },
        { word: "stage", translation: "une scène (théâtre), étape" },
        { word: "surname", translation: "nom de famille" },
        { word: "sympathetic", translation: "compatissant" },
        { word: "tour", translation: "visite, voyage organisé" },
        { word: "train", translation: "former (intellectuellement), un train" },
        { word: "vacancy (ies)", translation: "poste vacant, chambre d'hôtel libre" },
        { word: "sensitive", translation: "sensible" },
        { word: "a tuxedo", translation: "un smoking" },
        { word: "company, firm, business", translation: "une société, entreprise" },
        { word: "commercial, advert", translation: "spot publicitaire" },
        { word: "spot light", translation: "spot (lampe)" },
        { word: "training-course", translation: "un stage (formation continue)" },
        { word: "training-period (UK), internship (US)", translation: "un stage (pratique en entreprise)" },
        { word: "nickname", translation: "un surnom" },
        { word: "friendly", translation: "sympathique" },
        { word: "a tower", translation: "une tour" },
        { word: "a trick", translation: "un tour (ruse)" },
        { word: "vacations (US), holidays (UK)", translation: "des vacances" },
        { word: "coach", translation: "entraîner (physique)" },
        { word: "fees", translation: "des vacations (honoraires)" },
        { word: "short term contract", translation: "des vacations (travail)" }
    ],
    
    toeicWords2: [
        { word: "in addition", translation: "de plus" },
        { word: "incentives", translation: "avantages, motivations" },
        { word: "instead", translation: "à la place" },
        { word: "in the meantime", translation: "pendant ce temps" },
        { word: "to intend to do", translation: "avoir l'intention de" },
        { word: "inwardly", translation: "secrètement" },
        { word: "later", translation: "plus tard" },
        { word: "likewise", translation: "de même, de la même façon" },
        { word: "lobby", translation: "hall d'entrée" },
        { word: "mandatory", translation: "obligatoire" },
        { word: "moreover", translation: "de plus" },
        { word: "most", translation: "la plupart" },
        { word: "nearly", translation: "presque" },
        { word: "neither...nor", translation: "ni...ni" },
        { word: "nevertheless", translation: "néanmoins" },
        { word: "next to", translation: "à côté de" },
        { word: "not only...but", translation: "non seulement...mais" },
        { word: "now that", translation: "maintenant que" },
        { word: "on behalf of", translation: "au nom de" },
        { word: "once", translation: "une fois que" },
        { word: "on the contrary", translation: "au contraire" },
        { word: "on the other hand", translation: "d'un autre côté" },
        { word: "onto", translation: "sur" },
        { word: "otherwise", translation: "sinon" },
        { word: "overall", translation: "dans l'ensemble" },
        { word: "over the years", translation: "au cours des années" },
        { word: "owing to", translation: "dû à" },
        { word: "payroll", translation: "ensemble du personnel" },
        { word: "premises", translation: "locaux, bâtiments" },
        { word: "prior to", translation: "avant de" },
        { word: "promptly", translation: "rapidement, sans délai" },
        { word: "provided", translation: "pourvu que, à la condition que" },
        { word: "randomly", translation: "au hasard" },
        { word: "rather than", translation: "plutôt que" },
        { word: "regarding", translation: "concernant" },
        { word: "regardless of", translation: "en dépit de, malgré" },
        { word: "reportedly", translation: "d'après certaines informations" },
        { word: "a resort", translation: "station, lieu de vacances, hôtel" },
        { word: "roughly", translation: "approximativement" },
        { word: "responsible for", translation: "être responsable de" },
        { word: "seldom", translation: "rarement" },
        { word: "similarly", translation: "de la même façon" },
        { word: "since", translation: "depuis, depuis que" },
        { word: "so", translation: "si, tellement" },
        { word: "somehow", translation: "d'une manière ou d'une autre" },
        { word: "soon", translation: "bientôt" },
        { word: "so that", translation: "de sorte que" },
        { word: "still", translation: "encore, pourtant" },
        { word: "such", translation: "tel" },
        { word: "suitably", translation: "convenablement" },
        { word: "therefore", translation: "par conséquent" },
        { word: "thorough", translation: "complet, minutieux, rigoureux" },
        { word: "thoroughfare", translation: "artère, rue principale" },
        { word: "throughout", translation: "partout dans, pendant" },
        { word: "toward", translation: "vers" },
        { word: "unless", translation: "à moins que" },
        { word: "until", translation: "jusqu'à" },
        { word: "be urged to", translation: "être incité à" },
        { word: "utilities", translation: "les charges" },
        { word: "up to", translation: "jusqu'à" },
        { word: "a venue", translation: "un lieu, une salle pour un évènement" },
        { word: "whereas", translation: "tandis que" },
        { word: "whether", translation: "si" },
        { word: "while", translation: "pendant que" },
        { word: "within", translation: "au sein de, à l'intérieur de" },
        { word: "whole", translation: "tout entier" },
        { word: "yearly membership", translation: "adhésion à l'année" }
    ],

    toeicWords1: [
        { word: "above", translation: "au-dessus de" },
        { word: "achievement", translation: "accomplissement, réussite" },
        { word: "almost", translation: "faillir/presque" },
        { word: "along", translation: "le long de" },
        { word: "alongside", translation: "à côté de, aux côtés de" },
        { word: "also", translation: "aussi" },
        { word: "altogether", translation: "complètement, au total" },
        { word: "among", translation: "parmi" },
        { word: "anyone", translation: "n'importe qui" },
        { word: "anyhow", translation: "de toutes façons" },
        { word: "array", translation: "une sélection, un éventail de" },
        { word: "as", translation: "comme" },
        { word: "aside from", translation: "à part" },
        { word: "as a result", translation: "par conséquent" },
        { word: "as a whole", translation: "dans son entier" },
        { word: "as for", translation: "quant à" },
        { word: "as well as", translation: "ainsi que" },
        { word: "back office", translation: "services administratifs" },
        { word: "barely", translation: "à peine, tout juste" },
        { word: "beside", translation: "à côté de" },
        { word: "between", translation: "entre" },
        { word: "beyond", translation: "au delà" },
        { word: "both X and Y", translation: "à la fois" },
        { word: "cabinet", translation: "meuble de rangement" },
        { word: "catering", translation: "traiteur" },
        { word: "consequently", translation: "par conséquent" },
        { word: "to complete", translation: "achever" },
        { word: "corporate policies", translation: "des politiques d'entreprise" },
        { word: "critical", translation: "crucial, essentiel" },
        { word: "to deem", translation: "considérer" },
        { word: "despite", translation: "en dépit de" },
        { word: "diligently", translation: "avec application, assidûment" },
        { word: "due to", translation: "en raison de" },
        { word: "eager to", translation: "impatient de, souhaiter vivement" },
        { word: "earnings", translation: "les gains" },
        { word: "either...or", translation: "ou...ou" },
        { word: "eventually", translation: "finalement" },
        { word: "even so", translation: "néanmoins, toutefois" },
        { word: "expenses", translation: "les dépenses" },
        { word: "facilities", translation: "les infrastructures, établissement, installation, équipement" },
        { word: "formerly", translation: "autrefois, anciennement" },
        { word: "furthermore", translation: "de plus" },
        { word: "greater", translation: "plus grand" },
        { word: "headquarters", translation: "le siège social" },
        { word: "henceforth", translation: "dorénavant" },
        { word: "however", translation: "cependant, néanmoins" },
        { word: "impending", translation: "imminent" }
    ]
};

document.getElementById('start-btn').addEventListener('click', () => {
    const selectedList = document.getElementById('vocabulary-list').value;
    resetFlashcards();
    shuffleFlashcards(selectedList);
    startFlashcards(selectedList);
});

document.getElementById('view-list-btn').addEventListener('click', () => {
    const selectedList = document.getElementById('vocabulary-list').value;
    toggleVocabularyList(selectedList);
});

function toggleVocabularyList(list) {
    const vocabularyListContainer = document.getElementById('vocabulary-list-container');
    if (vocabularyListContainer.classList.contains('hidden')) {
        viewVocabularyList(list);
    } else {
        hideVocabularyList();
    }
}

function viewVocabularyList(list) {
    const vocabularyListContainer = document.getElementById('vocabulary-list-container');
    const vocabularyListDisplay = document.getElementById('vocabulary-list-display');
    vocabularyListDisplay.innerHTML = '';
    vocabularyLists[list].forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${item.word}</strong>: ${item.translation}`;
        vocabularyListDisplay.appendChild(listItem);
    });
    vocabularyListContainer.classList.remove('hidden');
}

function hideVocabularyList() {
    const vocabularyListContainer = document.getElementById('vocabulary-list-container');
    vocabularyListContainer.classList.add('hidden');
}

let currentIndex = 0;
let knownWords = [];
let unknownWords = [];
let showTranslation = false;
let totalWords = 0;

function resetFlashcards() {
    currentIndex = 0;
    knownWords = [];
    unknownWords = [];
    showTranslation = false;
    totalWords = 0;
    document.getElementById('flashcard-container').classList.add('hidden');
    document.getElementById('known-words-counter').classList.add('hidden');
    document.getElementById('vocabulary-list-container').classList.add('hidden');
    document.getElementById('known-words-counter').textContent = 'Known words: 0/0';
    //document.getElementById('view-list-btn').classList.add('hidden');
    document.getElementById('start-btn').classList.add('hidden');
    document.getElementById('vocabulary-list').classList.add('hidden');
    document.getElementById('liste').classList.add('hidden');
    document.getElementById('slogan').classList.add('hidden');
}

function showIndex() {
    document.getElementById('start-btn').classList.remove('hidden');
    document.getElementById('vocabulary-list').classList.remove('hidden');
    document.getElementById('liste').classList.remove('hidden');
    document.getElementById('slogan').classList.remove('hidden');
}



function shuffleFlashcards(list) {
    unknownWords = [...vocabularyLists[list]].sort(() => Math.random() - 0.5);
}

function startFlashcards(list) {
    totalWords = unknownWords.length;
    KnownWordsCounter();
    updateFlashcard();
    document.getElementById('flashcard-container').classList.remove('hidden');
    document.getElementById('known-words-counter').classList.remove('hidden');
    document.getElementById('github-link').classList.remove('hidden');
    updateKnownWordsCounter();
}

function updateFlashcard() {
    if (unknownWords.length > 0) {
        const currentWord = unknownWords[currentIndex];
        const cardContent = document.getElementById('card-content');
        cardContent.innerHTML = `<strong>${currentWord.word}</strong>`;
        cardContent.setAttribute('data-translation', currentWord.translation);
        showTranslation = false;
    } else {
        console.log('Updating known words counter before alert');
        updateKnownWordsCounter(); 
        setTimeout(() => {
            alert('You have reviewed all the words!');
            resetFlashcards();
            showIndex();
        }, 0); 
    }
}

document.getElementById('flashcard').addEventListener('click', () => {
    const cardContent = document.getElementById('card-content');
    if (showTranslation) {
        cardContent.innerHTML = `<strong>${unknownWords[currentIndex].word}</strong>`;
    } else {
        cardContent.textContent = cardContent.getAttribute('data-translation');
    }
    showTranslation = !showTranslation;
});

document.getElementById('know-btn').addEventListener('click', () => {
    knownWords.push(unknownWords[currentIndex]);
    updateKnownWordsCounter();
    unknownWords.splice(currentIndex, 1);
    if (currentIndex >= unknownWords.length) {
        currentIndex = 0;
    }
    
    updateFlashcard();
});

document.getElementById('dont-know-btn').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= unknownWords.length) {
        currentIndex = 0;
    }
    updateFlashcard();
});

function updateKnownWordsCounter() {
    const counter = document.getElementById('known-words-counter');
    counter.textContent = `Known words: ${knownWords.length}/${totalWords}`;
}

function KnownWordsCounter() {
    const counter = document.getElementById('known-words-counter');
    counter.textContent = `Known words: 0/${totalWords}`;
}

//swipe
/*
// Ajouter fonctionnalité de swipe pour interagir avec les cartes
const flashcard = document.getElementById('flashcard');
let startX;

flashcard.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

flashcard.addEventListener('touchend', (event) => {
    const endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) {
        // Swipe left
        document.getElementById('know-btn').click();
    } else if (endX - startX > 50) {
        // Swipe right
        document.getElementById('dont-know-btn').click();
    }
});
*/
