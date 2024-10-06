const wordsForSentence = [
  ['He’s', 'She’s', 'They’re'],
  [
    'harsh',
    'quiet',
    'bold',
    'distant',
    'calm',
    'carefree',
    'laid-back',
    'guarded',
    'cautious',
    'playful',
    'patient',
    'firm',
    'cold',
    'skeptical',
    'confident',
    'blunt',
    'detached',
    'fearless',
    'introverted',
    'stubborn',
  ],
  ['yet', 'but', 'though', 'and', 'however'],
  [
    'fiercely',
    'deeply',
    'surprisingly',
    'quite',
    'often',
    'easily',
    'rarely',
    'arduously',
    'predictably',
  ],
  [
    'kind-hearted',
    'determined',
    'reserved',
    'empathetic',
    'full of energy',
    'meticulous',
    'driven',
    'open',
    'adventurous',
    'serious',
    'quick to act',
    'gentle in nature',
    'warm inside',
    'full of hope',
    'uncertain at times',
    'considerate',
    'emotionally invested',
    'hesitant',
    'socially active',
    'persuaded',
  ],
];

function displayOriginalSentence() {
  const words = document.querySelectorAll('.word');

  for (let i = 0; i < wordsForSentence.length; i++) {
    words[i].textContent =
      wordsForSentence[i][
        Math.floor(Math.random() * wordsForSentence[i].length)
      ];
  }
}

function changeIndividualWords() {
  const words = document.querySelectorAll('.word');

  words.forEach((word, index) => {
    word.dataset.index = index;
  });

  words.forEach((word) => {
    word.addEventListener('click', () => {
      words[word.dataset.index].textContent =
        wordsForSentence[word.dataset.index][
          Math.floor(
            Math.random() * wordsForSentence[word.dataset.index].length
          )
        ];
    });
  });
}

function applyAnimation() {
  const words = document.querySelectorAll('.word');

  words.forEach((word) => {
    const duration = Math.floor(Math.random() * 5000) + 10000;
    word.style.animation = `upanddown ${duration}ms infinite linear`;
  });
}

displayOriginalSentence();
changeIndividualWords();
applyAnimation();
