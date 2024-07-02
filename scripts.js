document.addEventListener("DOMContentLoaded", function() {
    const banana = document.getElementById("banana");

    banana.addEventListener("mouseenter", function() {
        this.src = "images/banana-peeled.png";
    });

    banana.addEventListener("mouseleave", function() {
        this.src = "images/banana.png";
    });
});

function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#banana')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
