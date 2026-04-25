function projectSelected() {
    const projectsSelect = document.getElementById('projects');

    frameRate(60);


    keyPressedScript = function() {};

    if (projectsSelect.value === 'bouncables') {
        setupScript = setupBouncables;
        drawScript = drawBouncables;

    } else if (projectsSelect.value === 'flags') {
        setupScript = function() {};
        drawScript = drawFlags;

    } else if (projectsSelect.value === 'snake') {
        keyPressedScript = keyPressedSnake;
        setupScript = setupSnake;
        drawScript = drawSnake;
        frameRate(3);

    }

    setupScript();
}