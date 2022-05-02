window.onscroll = function() {headerScroll()};

function headerScroll() {
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  
    if (scrollTop > 0 && scrollTop < 60) {
        document.querySelector('#for-banner').style.opacity = '1';
    }
    if (scrollTop > 60 && scrollTop < 5000) {
        document.querySelector('#for-banner').style.opacity = '0';
    }
    if (scrollTop > 0 && scrollTop < 129) {
        document.querySelector('hb').style.backgroundColor = 'transparent';
    }
    if (scrollTop > 130 && scrollTop < 5000) {
        document.querySelector('hb').style.backgroundColor = 'var(--blue)';
    }
}
