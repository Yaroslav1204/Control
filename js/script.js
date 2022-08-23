

document.addEventListener('DOMContentLoaded', function() {
    var elems1 = document.querySelectorAll('.sidenav');
    var instances1 = M.Sidenav.init(elems1, {});

    
    var instance = M.Tabs.init(el, {});

    var elems2 = document.querySelectorAll('.parallax');
    var instances2 = M.Parallax.init(elems2, {});

  });