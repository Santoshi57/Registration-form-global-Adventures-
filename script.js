document.addEventListener('DOMContentLoaded', function () {
    const travelForm = document.getElementById('travelForm');
    const nextButton = document.getElementById('nextButton');
    const nextButton2 = document.getElementById('nextButton2');
    const prevButton = document.getElementById('prevButton');
    const prevButton2 = document.getElementById('prevButton2');
    const personalInfoSection = document.getElementById('personalInfoSection');
    const travelPrefsSection = document.getElementById('travelPrefsSection');
    const budgetAccommodationSection = document.getElementById('budgetAccommodationSection');

    // Hide all form sections except the first one
    const formSections = document.querySelectorAll('.formSection');
    formSections.forEach(section => {
        if (section !== personalInfoSection) {
            section.style.display = 'none';
        }
    });

    // Function to validate and navigate to the next section
    function goToNextSection(currentSection, nextSection) {
        // Perform basic validation before proceeding to the next section
        if (validateSection(currentSection)) {
            currentSection.style.display = 'none';
            nextSection.style.display = 'block';
        }
    }

    // Function to validate a form section (e.g., required fields)
    function validateSection(section) {
        const inputs = section.querySelectorAll('input, select, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (input.required && !input.value.trim()) {
                isValid = false;
                // You can add more complex validation logic or UI feedback here if needed
            }
        });

        return isValid;
    }

    // Event listener for Next button in Personal Information section
    nextButton.addEventListener('click', function () {
        goToNextSection(personalInfoSection, travelPrefsSection);
    });

    // Event listener for Next button in Travel Preferences section
    nextButton2.addEventListener('click', function () {
        goToNextSection(travelPrefsSection, budgetAccommodationSection);
    });

    // Event listener for Previous button in Travel Preferences section
    prevButton.addEventListener('click', function () {
        travelPrefsSection.style.display = 'none';
        personalInfoSection.style.display = 'block';
    });

    // Event listener for Previous button in Budget and Accommodation section
    prevButton2.addEventListener('click', function () {
        budgetAccommodationSection.style.display = 'none';
        travelPrefsSection.style.display = 'block';
    });

    // Event listener for form submission
    travelForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Validate the final section before submitting
        if (validateSection(budgetAccommodationSection)) {
            // Simulate form submission for demonstration
            console.log('Form submitted successfully!');
            console.log('FormData:', new FormData(travelForm));

            // Reset form or redirect user after successful submission
            travelForm.reset(); // Reset form fields
            personalInfoSection.style.display = 'block'; // Show the first section
        } else {
            // If final section validation fails, you can provide feedback to the user
            console.log('Please fill out all required fields.');
            // You can implement more detailed error handling or UI feedback here
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('travelForm');

    form.addEventListener('submit', function(event) {
        const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');

        let isValid = true;
        requiredFields.forEach(function(field) {
            if (!field.value.trim()) {
                isValid = false;
            }
        });

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
            alert('Please fill out all required fields before submitting.');
        }
    });
});
