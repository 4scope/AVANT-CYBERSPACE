// scroll event

window.addEventListener('scroll', function(){
    this.document.querySelector('nav').classList.toggle('scroll', window.scrollY > 10)
})

const allP_active = document.getElementsByClassName('allp_active')[0]; // Get the first element with class 'allp_active'
const twoDp_active = document.getElementsByClassName('2dp_active')[0];
const mP_active = document.getElementsByClassName('mp_active')[0];
const threeDP_active = document.getElementsByClassName('3dp_active')[0];
const wubP_active = document.getElementsByClassName('webp_active')[0];

// Get the <select> element
const categorySelect = document.getElementById('category-select');

// Add a 'change' event listener to it
categorySelect.addEventListener('change', function() {
    // Get the selected option
    const selectedOption = categorySelect.options[categorySelect.selectedIndex];
    
    // Get the id of the selected option
    const selectedId = selectedOption.id;

    // Hide all initially
    allP_active.classList.add('pg-none');
    twoDp_active.classList.add('pg-none');
    mP_active.classList.add('pg-none');
    threeDP_active.classList.add('pg-none');
    wubP_active.classList.add('pg-none');

    // Perform actions based on the selected id
    switch (selectedId) {
        case 'allp':
            allP_active.classList.remove('pg-none');
            break;
        case '2dp':
            twoDp_active.classList.remove('pg-none');
            break;
        case 'mp':
            mP_active.classList.remove('pg-none');
            break;
        case '3dp':
            threeDP_active.classList.remove('pg-none');
            break;
        case 'webp':
            wubP_active.classList.remove('pg-none');
            break;
        default:
            // Default action if needed
            break;
    }
});

