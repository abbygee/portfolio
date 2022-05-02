function myFunction() {
    /* Get the text field */
    let copyText = document.getElementById("email-text");

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.textContent);
}