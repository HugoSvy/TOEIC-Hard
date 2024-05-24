const vocabularyLists = {
    toeicFaille: [
        { word: "double kill", translation: "double kill" },
        { word: "triple kill ", translation: "triple kill " },
        { word: "quadrakill", translation: "quadrakill" },
        { word: "PENTAKILL", translation: "PENTAKILL" },
        { word: "Ace", translation: "Ace" },   
    ],

    toeicWords: [
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
        { word: "impending", translation: "imminent" },
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
    document.getElementById('view-list-btn').classList.add('hidden');
    document.getElementById('start-btn').classList.add('hidden');
    document.getElementById('vocabulary-list').classList.add('hidden');
    document.getElementById('liste').classList.add('hidden');
    document.getElementById('slogan').classList.add('hidden');
}


function shuffleFlashcards(list) {
    unknownWords = [...vocabularyLists[list]].sort(() => Math.random() - 0.5);
}

function startFlashcards(list) {
    totalWords = unknownWords.length;
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
        alert('You have reviewed all the words!');
        resetFlashcards();
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
    unknownWords.splice(currentIndex, 1);
    if (currentIndex >= unknownWords.length) {
        currentIndex = 0;
    }
    updateKnownWordsCounter();
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
});*/


