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
    '',
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

displayOriginalSentence();
