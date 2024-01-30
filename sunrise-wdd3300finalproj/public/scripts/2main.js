



function createHeader() {
    const header = document.getElementById('header-main');
    const headerContent = document.createElement('h1');
    headerContent.textContent = 'Dynamic Header';
    header.appendChild(headerContent);
}

// Function to create dynamic footer
function createFooter() {
    const footer = document.getElementById('footer');
    const footerContent = document.createElement('p');
    footerContent.textContent = 'Dynamic Footer &copy; 2024';
    footer.appendChild(footerContent);
}


// Call functions to create header and footer
createHeader();
createFooter();