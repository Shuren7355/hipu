        function toggleVisibility(id) {
            var content = document.getElementById(id);
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
        function updateClock() {
            const clockElement = document.getElementById('clock');
            const currentTime = new Date();
            let hours = currentTime.getHours();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12; // Convert to 12-hour format

            const minutes = currentTime.getMinutes().toString().padStart(2, '0');
            const seconds = currentTime.getSeconds().toString().padStart(2, '0');

            const timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
            clockElement.innerText = timeString;

            const glowingAlphabets = (hours + minutes + seconds + ampm).toUpperCase();
            applyGlow(clockElement, glowingAlphabets);
        }

        function applyGlow(element, glowingText) {
            const letters = element.innerText.split('');

            letters.forEach((letter, index) => {
                if (glowingText.includes(letter)) {
                    element.classList.add('glow');
                } else {
                    element.classList.remove('glow');
                }
            });
        }

        setInterval(updateClock, 1000);