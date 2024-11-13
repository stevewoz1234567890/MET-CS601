document.getElementById('formItems').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Clear previous error messages
    document.getElementById('firstNameError').innerText = '';
    document.getElementById('lastNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('packageError').innerText = '';
    document.getElementById('subscribeError').innerText = '';

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const subscribe = document.getElementById('subscribe').checked;

    // Validate first and last names
    const nameValidation = /^(?=.*[A-Za-z].*[A-Za-z])[A-Za-z0-9]*$/;
    const isFirstNameValid = nameValidation.test(firstName);
    const isLastNameValid = nameValidation.test(lastName);

    // Validate package selection without using Array
    const packageOptions = document.getElementsByName('package');
    let packageSelected = false;

    // Check each radio button for selection
    for (let i = 0; i < packageOptions.length; i++) {
        if (packageOptions[i].checked) {
            packageSelected = true;
            break; // Exit the loop if a checked option is found
        }
    }

    // Collect errors
    let hasErrors = false;

    if (!firstName) {
        document.getElementById('firstNameError').innerText = "First name is required.";
        hasErrors = true;
    } else if (!isFirstNameValid) {
        document.getElementById('firstNameError').innerText = "First name must contain at least 2 alphabetic characters.";
        hasErrors = true;
    }

    if (!lastName) {
        document.getElementById('lastNameError').innerText = "Last name is required.";
        hasErrors = true;
    } else if (!isLastNameValid) {
        document.getElementById('lastNameError').innerText = "Last name must contain at least 2 alphabetic characters.";
        hasErrors = true;
    }

    if (!packageSelected) {
        document.getElementById('packageError').innerText = "You must select a package.";
        hasErrors = true;
    }

    if (!subscribe) {
        document.getElementById('subscribeError').innerText = "You must confirm your subscription.";
        hasErrors = true;
    }

    // Display summary if no errors
    if (!hasErrors) {
        let selectedPackage = "None"; // Default value
        for (let i = 0; i < packageOptions.length; i++) {
            if (packageOptions[i].checked) {
                selectedPackage = packageOptions[i].value; // Get the value of the selected package
                break; // Exit loop once the checked option is found
            }
        }

        const summaryText = `Thank you, ${firstName} ${lastName}, for subscribing! 
        Your email ${email} is registered with our ${selectedPackage} package.`;
        
        document.getElementById('summaryItem').innerText = summaryText;
        document.getElementById('summaryItem').style.display = "block"; // Show the summary
        document.getElementById('formItems').style.display = "none"; // Hide the form
    }
});
