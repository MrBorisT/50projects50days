const panels = document.querySelectorAll('.panel');

let activePanel = 0;

panels.forEach((panel, idx) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
    activePanel = idx;
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};

window.addEventListener(
  'keydown',
  (event) => {
    switch (event.code) {
      case 'ArrowRight':
        if (activePanel < panels.length - 1) {
          panels[activePanel].classList.remove('active');
          panels[activePanel + 1].classList.add('active');
          activePanel++;
        }
        break;
      case 'ArrowLeft':
        if (activePanel > 0) {
          panels[activePanel].classList.remove('active');
          panels[activePanel - 1].classList.add('active');
          activePanel--;
        }
        break;
      default:
        break;
    }
  },
  false
);
