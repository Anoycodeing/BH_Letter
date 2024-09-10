document.getElementById('card').addEventListener('click', function() {
    // Trigger confetti effect when the card is clicked (and rotated)
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});
