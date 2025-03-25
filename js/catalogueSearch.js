// Function to filter the catalog based on search input and tags
function filterCatalog(searchInput) {
    // const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const catalogItems = document.querySelectorAll('.individual_artwork_display');
    
    // console.log(searchInputTest.toLowerCase() + " | " + searchInput);
    
    catalogItems.forEach(item => {
        console.log(item.getAttribute('data-tags'));
        const tags = item.getAttribute('data-tags').toLowerCase();
        if (tags.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Add click event for tags to search by specific tag
const tagButtons = document.querySelectorAll('.tag');
tagButtons.forEach(tagButton => {
    tagButton.addEventListener('click', function() {
        const tag = this.getAttribute('data-tag');
        // document.getElementById('searchBar').value = tag;
        filterCatalog(tag.toLowerCase());  // Filter based on the clicked tag
    });
});