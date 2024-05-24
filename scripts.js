const vocabularyLists = {
    list1: [
        { word: "apple", translation: "pomme" },
        { word: "book", translation: "livre" },
        // Ajouter d'autres mots
    ],
    toeicWords: [
        { word: "above", translation: "au-dessus de" },
        { word: "achievement", translation: "accomplissement, réussite" },
        // Ajouter d'autres mots
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
    document.getElementById('view-list-btn').classList.remove('revealed');

    //document.querySelector('.revealed').classList.add('hidden');
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


