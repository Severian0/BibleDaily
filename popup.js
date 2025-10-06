document.addEventListener('DOMContentLoaded', function () {
    const bibleVerseElement = document.getElementById('bible-verse');
    const missalArtElement = document.getElementById('missal-art');
    const fullReadingLink = document.getElementById('full-reading-link');

    // Function to fetch a Bible verse using the provided API
    function fetchBibleVerse() {
        
        const apiUrl = "https://labs.bible.org/api/?passage=random&type=json";

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                
                if (data && data.length > 0) {
                    const verse = data[0];
                    const verseText = `${verse.bookname} ${verse.chapter}:${verse.verse} - ${verse.text}`;

                    bibleVerseElement.textContent = verseText;

                    const fullLink = `https://www.biblegateway.com/passage/?search=${verse.bookname}+${verse.chapter}:${verse.verse}&version=NRSVCE`;
                    fullReadingLink.href = fullLink;
                }
            })
            .catch(error => {
                console.error('Error fetching Bible verse:', error);
                bibleVerseElement.textContent = "Sorry, an error occurred while fetching the verse.";
            });
    }

    // Fetch and display a random Bible verse
    fetchBibleVerse();

    // missal art
    const missalArts = ["art/art1.jpg", "art/art2.jpg","art/art3.jpg","art/art4.jpg"];  // Replace with actual images
    const randomArt = missalArts[Math.floor(Math.random() * missalArts.length)];
    missalArtElement.src = randomArt;
});
