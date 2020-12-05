class Day {
  constructor(dayNumber) {
    this.day = dayNumber;
  }

  result1 = () => { }

  result2 = () => { }

  printResults() {
    // Initialize DOM elements
    const main = document.querySelector('main');
    const section = document.createElement('section');
    const header = document.createElement('h3');
    const resultsWrapper = document.createElement('p');
    const result1 = document.createElement('span');
    const result2 = document.createElement('span');

    // Fill with content
    header.innerHTML = `Day ${this.day}`;
    result1.innerHTML = `Result of part I: <span class="result">${this.result1() || 'not found'}</span>`;
    result2.innerHTML = `Result of part II: <span class="result">${this.result2() || 'not found'}</span>`;

    // Append to document
    section.appendChild(header);
    resultsWrapper.appendChild(result1);
    resultsWrapper.appendChild(result2);
    section.appendChild(resultsWrapper);
    main.appendChild(section);
  }
}