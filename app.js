// Check if the browser supports the Web Speech API
if (!('webkitSpeechRecognition' in window)) {
    alert("Your browser doesn't support the Web Speech API. Please use Chrome or Edge.");
} else {
    // Create a new instance of SpeechRecognition
    const recognition = new webkitSpeechRecognition();

    // Set properties
    recognition.continuous = false; // Capture only one result
    recognition.interimResults = false; // Get the final result, not partial results
    recognition.lang = 'en-US'; // Set the language to English

    // Start button click event
    document.getElementById('start-btn').onclick = () => {
        recognition.start(); // Start listening
    };

    // Handle the result when speech is detected
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript; // Get the speech result
        document.getElementById('result').innerText = `You said: ${transcript}`;
    };

    // Handle any errors
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };

    // Log when the speech recognition service starts or ends
    recognition.onstart = () => {
        console.log('Speech recognition started');
    };
    recognition.onend = () => {
        console.log('Speech recognition ended');
    };
}
