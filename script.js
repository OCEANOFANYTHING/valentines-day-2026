document.addEventListener('DOMContentLoaded', () => {
    const envelopeContainer = document.getElementById('envelope-container');
    const letterContainer = document.getElementById('letter-container');
    const typewriterText = document.getElementById('typewriter-text');
    const questionSection = document.getElementById('question-section');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const celebrationContainer = document.getElementById('celebration-container');
    const heartsContainer = document.getElementById('hearts-container');

    // Initialize Background Hearts
    createBackgroundHearts();

    // The Love Letter
    const letterContent = `Dear Sokhi,
Have you ever noticed the time we are together? yes its just 1 month and some days. still its hard to believe to think that how close we get in these few days. After my last breakup, I thought I would never be able to love anyone ever again, because there was no cause to love someone if they didn't even care about me. But suddenly, like a charm, like a tale of Alexander Duma, like a Hand Made Sculpture of a Greek God, like a flow of wind in the wind chime of my mind, like a dragonfly on a sunset of a day of late spring, like a musketeer of the king of france, you came in my life, making me realise how amazing love can be. 
Maybe I have a very bad temper, which sometimes gets worse. But I know, if you are with me, I will surely overcome it.
After you came into my life, I smiled properly again. No, I'm not bluffing or anything, it's true. The thing is, sometimes when I show love,e you may get a bit overwhelmed, and there will also be times when you think I do not love you at all. But I am like this, I can never be like the world sees me infront of you. Maybe I act bold, macho, and aesthetic as fuck in front of the world, which I actually am, but for the rest of the world. But for you i became a little baby who just loves to be with you.
Now, my next goal is to grow the startup and marry you. Please answer the question honestly and from the heart.`;

    // 1. Open Envelope
    const envelope = document.getElementById('envelope');

    envelopeContainer.addEventListener('click', () => {
        // Prevent double clicks
        if (envelope.classList.contains('open')) return;

        envelope.classList.add('open');

        // Wait for flap to open (0.6s) then fade out envelope and show letter
        setTimeout(() => {
            envelopeContainer.classList.add('fade-out');
            letterContainer.classList.remove('hidden');

            // Wait for envelope fade out (1s) and letter unfold (1s)
            setTimeout(() => {
                envelopeContainer.classList.add('hidden'); // Fully remove from layout
                letterContainer.style.opacity = '1';
                startTypewriter(letterContent);
            }, 800); // Start slightly before fade out ends for smoother transition
        }, 800);
    });

    // 2. Typewriter Effect
    function startTypewriter(text) {
        let i = 0;
        const speed = 30; // ms per char

        function type() {
            if (i < text.length) {
                typewriterText.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);

                // Auto scroll to bottom
                const paper = document.querySelector('.paper');
                paper.scrollTop = paper.scrollHeight;
            } else {
                // Typing finished
                showQuestion();
            }
        }
        type();
    }

    function showQuestion() {
        questionSection.classList.remove('hidden');
        setTimeout(() => {
            questionSection.style.opacity = '1';
        }, 100);
    }

    // 3. User Interaction
    btnYes.addEventListener('click', () => {
        letterContainer.classList.add('hidden');
        celebrationContainer.classList.remove('hidden');

        // Add brighter background
        document.body.style.background = 'linear-gradient(135deg, #fdfbfb 0%, #ffe6eb 100%)';

        createHearts();
    });

    btnNo.addEventListener('click', () => {
        // Disappear smoothly
        btnNo.style.transition = 'all 0.5s ease';
        btnNo.style.opacity = '0';
        btnNo.style.transform = 'scale(0.5)';

        setTimeout(() => {
            btnNo.style.display = 'none';
        }, 500);

        // Playful micro-animation on Yes button
        btnYes.style.transform = 'scale(1.2)';
        setTimeout(() => {
            btnYes.style.transform = 'scale(1)';
        }, 300);
    });

    function createHearts() {
        // Burst of hearts
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('floating-heart');
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.fontSize = (Math.random() * 30 + 10) + 'px';
                heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
                celebrationContainer.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }, i * 100);
        }

        // Continuous flow
        setInterval(() => {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
            celebrationContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, 300);
    }
    function createBackgroundHearts() {
        const colors = ['#d66574', '#f8838e', '#bd597a', '#d2738b', '#aaaaaa'];
        const container = document.querySelector('.container');

        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('bg-heart');
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
            heart.style.animationDelay = (Math.random() * 5) + 's';

            container.appendChild(heart);
        }
    }
});
