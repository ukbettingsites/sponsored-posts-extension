window.onload = function() {
    var links = document.querySelectorAll("a");

    links.forEach((link) => {
        var rel = link.getAttribute("rel");
        if (rel) {
            if (rel.includes("nofollow")) {
                link.classList.add("highlight-red");
            } else if (rel.includes("ugc")) {
                link.classList.add("highlight-blue");
            } else if (rel.includes("sponsored")) {
                link.classList.add("highlight-green");
            }
        }

        link.onmouseover = function() {
            var tooltip = document.createElement("span");
            tooltip.className = "tooltip";
            tooltip.innerText = link.href;
            link.appendChild(tooltip);
        };

        link.onmouseout = function() {
            var tooltip = link.querySelector(".tooltip");
            if (tooltip) link.removeChild(tooltip);
        };
    });
};
