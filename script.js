// Funktion zum Handling des Kontaktformular-Submits
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Danke für Ihre Nachricht!');
    } else {
        alert('Bitte füllen Sie alle Felder aus.');
    }
});

// Funktionen für Scroll-Events
const toTopBtn = document.getElementById('toTopBtn');
const scrollProgressbar = document.getElementById('scroll-progressbar');

// Event-Listener für das Scrollen
window.addEventListener('scroll', function() {
    // Scroll-Position prüfen, um den "Zurück nach oben"-Button anzuzeigen
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        toTopBtn.style.display = 'block';
    } else {
        toTopBtn.style.display = 'none';
    }

    // Berechnung des Scroll-Fortschritts
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollPosition / pageHeight) * 100;

    // Farbwechsel von Rot nach Grün in sanften Übergängen
    let color;
    if (scrollProgress <= 25) {
        // Von Rot zu Orange
        color = `rgb(${255}, ${Math.floor(scrollProgress * 255 / 25)}, 0)`; // Rot -> Orange
    } else if (scrollProgress <= 50) {
        // Von Orange zu Gelb
        color = `rgb(${255 - Math.floor((scrollProgress - 25) * 255 / 25)}, ${255}, 0)`; // Orange -> Gelb
    } else if (scrollProgress <= 75) {
        // Von Gelb zu Blau
        const blueValue = Math.floor((scrollProgress - 50) * 255 / 25);
        color = `rgb(0, ${255 - blueValue}, ${blueValue})`; // Gelb -> Blau
    } else {
        // Von Blau zu Grün
        const greenValue = Math.floor((scrollProgress - 75) * 255 / 25);
        color = `rgb(0, ${greenValue}, 255)`; // Blau -> Grün
    }

    // Fortschrittsbalken aktualisieren und Farbe setzen
    scrollProgressbar.style.width = scrollProgress + '%';
    scrollProgressbar.style.backgroundColor = color;
});

// "Zurück nach oben"-Button mit sanfter Scroll-Animation
toTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
