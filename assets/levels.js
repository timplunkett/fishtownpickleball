const spicyLevel = 4.4;
const levelsMap = {
  'first':  'Cucumber', // 2.0,
  'second': 'Gherkin', // 2.5,
  'third':  'Sweet Pickle', // 3.0,
  'fourth': 'Bread and Butter', // 3.5,
  'fifth':  'Dill', // 4.0,
  'final':  'Spicy Pickle', // 4.5+,
};
const levels = Object.keys(levelsMap);

// Make the first level visible.
document.querySelector('.questions').style.display = 'block';

/**
 * Displays a level to the user.
 */
const displayResult = (level) => {
  document.querySelectorAll('.level-result').forEach(result => result.innerHTML = level);
  document.querySelector('.level--results').style.display = 'block';
};

/**
 * Toggles questions.
 */
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('admin') !== null) {
  const levelButton = document.getElementById('level-show-all');
  levelButton.style.display = 'block';
  levelButton.addEventListener('click', (e) => {
    if (e.currentTarget.innerText === 'Show all') {
      document.querySelectorAll('.questions').forEach(q => {
        if (q.style.display !== 'block') {
          q.classList.add('temporarily-shown');
          q.style.display = 'block';
        }
      });
      e.currentTarget.innerText = 'Hide all';
    }
    else {
      document.querySelectorAll('.questions.temporarily-shown').forEach(q => {
        q.style.display = 'none';
        q.classList.remove('temporarily-shown');
      });
      e.currentTarget.innerText = 'Show all';
    }
  });
}

document.getElementById('level--form').addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  // Combine the flat results into a structured array keyed by level.
  const results = {};
  for (const [key, entry] of data.entries()) {
    if (key === 'dupr' && !isNaN(entry) && entry >= spicyLevel) {
      results['fifth'].push(entry);
    }
    if (!results[key]) {
      results[key] = [];
    }
    results[key].push(entry);
  }

  // Remove all levels without 5 or more attributes checked.
  for (const result in results) {
    if (results[result].length < 5) {
      delete results[result];
    }
  }

  // Find the first level without enough attributes.
  const key = levels.filter(level => !(level in results)).shift();

  // Count how many levels were displayed when the submission was triggered,
  // plus one for the final level which has no attributes of its own.
  const visible = Object.values(document.querySelectorAll('.questions')).filter(el => el.style.display !== 'block').length + 1;

  // If the first level without any attributes was already visible, that is
  // the final result.
  if (key === 'final' || levels.indexOf(key) + visible < levels.length) {
    displayResult(levelsMap[key]);
  }
  else {
    // Show the next section.
    const nextLevel = document.querySelector('.questions--' + key);
    nextLevel.style.display = 'block';
    // Set focus to the first input of the new section.
    nextLevel.querySelector('input').focus();
    // Hide any previously displayed results.
    document.querySelector('.level--results').style.display = 'none';
  }

});
