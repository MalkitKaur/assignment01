// Constants for main button query selectors
var noun1 = document.querySelector("#noun1");
var verb = document.querySelector("#verb");
var adjective = document.querySelector("#adjective");
var noun2 = document.querySelector("#noun2");
var setting = document.querySelector("#setting");
var studentId = document.querySelector("#studentId");

// Constants for p tag to display query selectors
var choosenNoun1 = document.querySelector("#choosenNoun1");
var choosenVerb = document.querySelector("#choosenVerb");
var choosenAdjective = document.querySelector("#choosenAdjective");
var choosenNoun2 = document.querySelector("#choosenNoun2");
var choosenSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
var playback = document.querySelector("#playback");
var random = document.querySelector("#random");
var reset = document.querySelector("#reset");
var story = document.querySelector("#story");

// Variables for pre-defined arrays
var noun1Selection = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verbSelection = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectiveSelection = ["a funny", "scary", "a goofy", "a slimy", "a barking", "a fat"];
var noun2Selection = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settingSelection = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
var countNoun1 = 0;
var countVerb = 0;
var countAdjective = 0;
var countNoun2 = 0;
var countSetting = 0;

// Function to display student information
function displayStudentInfo() {
    studentDisplay.textContent = "200543614 || Malkit Kaur";
}

// Functions to handle button clicks for selecting words
function noun1_on_click() {
    // Get the array element and display it
    var selectedNoun1 = noun1Selection[countNoun1];
    choosenNoun1.textContent = selectedNoun1;

    // Increment the count setting
    if (countNoun1 < noun1Selection.length - 1) {
        countNoun1++;
    } else {
        countNoun1 = 0;
    }
}

function verb_on_click() {
    // Get the array element and display it
    var selectedVerb = verbSelection[countVerb];
    choosenVerb.textContent = selectedVerb;

    // Increment the count setting
    if (countVerb < verbSelection.length - 1) {
        countVerb++;
    } else {
        countVerb = 0;
    }
}

function adjective_on_click() {
    // Get the array element and display it
    var selectedAdjective = adjectiveSelection[countAdjective];
    choosenAdjective.textContent = selectedAdjective;

    // Increment the count setting
    if (countAdjective < adjectiveSelection.length - 1) {
        countAdjective++;
    } else {
        countAdjective = 0;
    }
}

function noun2_on_click() {
    // Get the array element and display it
    var selectedNoun2 = noun2Selection[countNoun2];
    choosenNoun2.textContent = selectedNoun2;

    // Increment the count setting
    if (countNoun2 < noun2Selection.length - 1) {
        countNoun2++;
    } else {
        countNoun2 = 0;
    }
}

function setting_on_click() {
    // Get the array element and display it
    var selectedSetting = settingSelection[countSetting];
    choosenSetting.textContent = selectedSetting;

    // Increment the count setting
    if (countSetting < settingSelection.length - 1) {
        countSetting++;
    } else {
        countSetting = 0;
    }
}

// Concatenate the user story and display
function playback_on_click() {
    var userStory =
        choosenNoun1.textContent + " " +
        choosenVerb.textContent + " " +
        choosenAdjective.textContent + " " +
        choosenNoun2.textContent + " " +
        choosenSetting.textContent;
    story.textContent = userStory;
}

// Helper function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Generate and display a random story
function random_on_click() {
    var randomNoun1 = getRandomElement(noun1Selection);
    var randomVerb = getRandomElement(verbSelection);
    var randomAdjective = getRandomElement(adjectiveSelection);
    var randomNoun2 = getRandomElement(noun2Selection);
    var randomSetting = getRandomElement(settingSelection);

    // Set the text content of the corresponding elements
    choosenNoun1.textContent = randomNoun1;
    choosenVerb.textContent = randomVerb;
    choosenAdjective.textContent = randomAdjective;
    choosenNoun2.textContent = randomNoun2;
    choosenSetting.textContent = randomSetting;

    // Update the story text
    var randomStory =
        randomNoun1 + " " +
        randomVerb + " " +
        randomAdjective + " " +
        randomNoun2 + " " +
        randomSetting;
    story.textContent = randomStory;

    // Clear the student ID
    studentDisplay.textContent = "";
}

// Reset the story
function reset_story() {
    choosenNoun1.textContent = "";
    choosenVerb.textContent = "";
    choosenAdjective.textContent = "";
    choosenNoun2.textContent = "";
    choosenSetting.textContent = "";
    story.textContent = "";
    studentDisplay.textContent = "";

    // Reset the count variables
    countNoun1 = 0;
    countVerb = 0;
    countAdjective = 0;
    countNoun2 = 0;
    countSetting = 0;
}

// Event listeners for main buttons
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

// Event listener for "Show Story" button
playback.addEventListener("click", playback_on_click);

// Event listener for "Random Story" button
random.addEventListener("click", random_on_click);

// Event listener for "Student Info" button
studentID.addEventListener("click", displayStudentInfo);

// Event listener for "Reset Story" button
reset.addEventListener("click", reset_story);
