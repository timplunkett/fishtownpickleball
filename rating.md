---
layout: default
permalink: rating
title: Pickleball Skill Level Self-Evaluation
---
# Find your pickleball skill level

<div class="description">
  Below is a series of questions to self-evaluate your current pickleball skill
  level. Select the checkbox for each statement that you confidently believe
  describes your pickleball ability. The results are private and are not saved.
  Once you are given a pickle-type, please got to your discord profile to save
  it here.
</div>
<div class="rating">
<form id="rating--form">
  <div class="questions questions--newbie">
    <div class="question">
      <input name="newbie" type="checkbox" value="1" />
      <label>I know where to stand at the beginning of each point</label>
    </div>
    <div class="question">
      <input name="newbie" type="checkbox" value="2" />
      <label>I usually get my serves "in"</label>
    </div>
    <div class="question">
      <input name="newbie" type="checkbox" value="3" />
      <label>I usually let the return of serve bounce</label>
    </div>
    <div class="question">
      <input name="newbie" type="checkbox" value="4" />
      <label>I am getting the hang of keeping score</label>
    </div>
    <div class="question">
      <input name="newbie" type="checkbox" value="5" />
      <label>I can often keep the ball in play</label>
    </div>
    <div class="question">
      <input name="newbie" type="checkbox" value="6" />
      <label>I know what a dink shot is</label>
    </div>
  </div>

  <div class="questions questions--beginner">
    <div class="question">
      <input name="beginner" type="checkbox" value="1" />
      <label>I have the basic rules down 100%</label>
    </div>
    <div class="question">
      <input name="beginner" type="checkbox" value="2" />
      <label>I am working on getting my serves &amp; return of serves deeper</label>
    </div>
    <div class="question">
      <input name="beginner" type="checkbox" value="3" />
      <label>I am working on getting my dinks shallower/lower</label>
    </div>
    <div class="question">
      <input name="beginner" type="checkbox" value="4" />
      <label>I am capable of hitting a few dinks in a row</label>
    </div>
    <div class="question">
      <input name="beginner" type="checkbox" value="5" />
      <label>I can usually hit backhand shots when I need to</label>
    </div>
    <div class="question">
      <input name="beginner" type="checkbox" value="6" />
      <label>I'm trying to add more power or softness to my game</label>
    </div>
  </div>

  <div class="questions questions--novice">
    <div class="question">
      <input name="novice" type="checkbox" value="1" />
      <label>I know almost all of the "special case" rules</label>
    </div>
    <div class="question">
      <input name="novice" type="checkbox" value="2" />
      <label>My serves &amp; returns are almost always deep</label>
    </div>
    <div class="question">
      <input name="novice" type="checkbox" value="3" />
      <label>I sometimes try to hit a 3rd shot drop shot</label>
    </div>
    <div class="question">
      <input name="novice" type="checkbox" value="4" />
      <label>I try to be strategic about how and where I hit the ball</label>
    </div>
    <div class="question">
      <input name="novice" type="checkbox" value="5" />
      <label>I have a wide variety of shots in my arsenal</label>
    </div>
    <div class="question">
      <input name="novice" type="checkbox" value="6" />
      <label>I actively work with my partner to win the point</label>
    </div>
  </div>

  <div class="questions questions--intermediate">
    <div class="question">
      <input name="intermediate" type="checkbox" value="1" />
      <label>I can often anticipate my opponents' shots</label>
    </div>
    <div class="question">
      <input name="intermediate" type="checkbox" value="2" />
      <label>I often finish the point when my opponent gives me an opening</label>
    </div>
    <div class="question">
      <input name="intermediate" type="checkbox" value="3" />
      <label>I am usually consistent with drop shots and dink shots</label>
    </div>
    <div class="question">
      <input name="intermediate" type="checkbox" value="4" />
      <label>I almost always play at the non-volley line</label>
    </div>
    <div class="question">
      <input name="intermediate" type="checkbox" value="5" />
      <label>With a good partner I can cover almost any shot</label>
    </div>
    <div class="question">
      <input name="intermediate" type="checkbox" value="6" />
      <label>I try to be patient &amp; wait for the opening</label>
    </div>
  </div>

  <div class="questions questions--advanced">
    <div class="question">
      <input name="advanced" type="checkbox" value="1" />
      <label>I can consistently convert a hard shot to a soft shot</label>
    </div>
    <div class="question">
      <input name="advanced" type="checkbox" value="2" />
      <label>I am almost always patient &amp; wait for the opening</label>
    </div>
    <div class="question">
      <input name="advanced" type="checkbox" value="3" />
      <label>I rarely make unforced errors</label>
    </div>
    <div class="question">
      <input name="advanced" type="checkbox" value="4" />
      <label>I consistently use power &amp; finesse to my advantage</label>
    </div>
    <div class="question">
      <input name="advanced" type="checkbox" value="5" />
      <label>I can easily sustain a rally of 40 or more shots</label>
    </div>
    <div class="question">
      <input name="advanced" type="checkbox" value="6" />
      <label>I have competed in tournaments at the 4.5 level or higher</label>
    </div>
  </div>

  <div class="button button--next">
    <input type="submit" name="op" value="Continue" />
  </div>
</form>
<div class="rating--results"></div>
</div>

<script type="text/javascript">
const levelsMap = {
  'newbie':       'Cucumber', // 2.0,
  'beginner':     'Gherkin', // 2.5,
  'novice':       'Sweet Pickle', // 3.0,
  'intermediate': 'Bread and Butter', // 3.5,
  'advanced':     'Dill', // 4.0,
  'expert':       'Sour Pickle', // 4.5+,
};
const levels = Object.keys(levelsMap);

// Make the first level visible.
document.querySelector('.questions').style.display = 'block';

/**
 * Displays a rating to the user.
 */
const displayResult = (rating) => {
  const message = `<span class="rating--message">Your rating is</span> <span class="rating--result">${rating}</span>`;
  document.querySelector('.rating--results').innerHTML = message;
  document.querySelector('.rating--result').scrollIntoView();
};

document.getElementById('rating--form').addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  // Combine the flat results into a structured array keyed by level.
  const results = {};
  for (const [key, entry] of data.entries()) {
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
  if (key === 'expert' || levels.indexOf(key) + visible < levels.length) {
    displayResult(levelsMap[key]);
  }
  else {
    // Show the next section.
    const nextLevel = document.querySelector('.questions--' + key);
    nextLevel.style.display = 'block';
    // Set focus to the first input of the new section.
    nextLevel.querySelector('input').focus();
    // Clear any previously displayed results.
    document.querySelector('.rating--results').innerHTML = '';
  }

});
</script>
