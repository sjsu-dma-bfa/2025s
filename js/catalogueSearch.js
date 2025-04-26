// Function to filter the catalog based on search input and tags
function filterCatalog(searchInput) {
    // const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const catalogItems = document.querySelectorAll('.individual_artwork_display');
    
    // console.log(searchInputTest.toLowerCase() + " | " + searchInput);
    
    catalogItems.forEach(item => {
        // console.log(item.getAttribute('data-tags'));
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




// Animated Logo at the top
// Logo only appears after the viewer has scrolled down and then back up

const img = document.getElementById('logo');
let hasScrolledDown = false;
let hasAnimated = false;

// Helper to check if element is in viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > 100) { // arbitrary scroll down detection
    hasScrolledDown = true;
  }

  if (hasScrolledDown && !hasAnimated && isInViewport(img)) {
    img.classList.add('fade-in');
    hasAnimated = true;
  }
});

