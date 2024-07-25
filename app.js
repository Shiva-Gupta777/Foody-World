$(document).ready(function(){
    $(".food-slider").slick({

    });
});


document.addEventListener('DOMContentLoaded', function() {
    var stars = document.querySelectorAll('.star-rating .fa');
    var ratingInput = document.getElementById('rating');

    stars.forEach(function(star) {
        star.addEventListener('click', function() {
            var rating = this.getAttribute('data-rating');
            ratingInput.value = rating;
            updateStars(rating);
        });

        star.addEventListener('mouseover', function() {
            var rating = this.getAttribute('data-rating');
            updateStars(rating);
        });

        star.addEventListener('mouseout', function() {
            var rating = ratingInput.value;
            updateStars(rating);
        });
    });

    function updateStars(rating) {
        stars.forEach(function(star) {
            if (star.getAttribute('data-rating') <= rating) {
                star.classList.add('checked');
            } else {
                star.classList.remove('checked');
            }
        });
    }
});
