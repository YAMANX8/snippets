/**
   * Positions elem relative to anchor as said in position.
   *
   * @param {Node} anchor     Anchor element for positioning
   * @param {string} position One of: top/right/bottom
   * @param {Node} elem       Element to position
   *
   * Both elements: elem and anchor must be in the document
   */
function positionAt(anchor, position, elem) {
    // ... your code ...
    let cords = anchor.getBoundingClientRect();
    switch (position) {
        case "top":
            elem.style.top = `${cords.y - elem.offsetHeight}px`;
            elem.style.left = `${cords.left}px`;
            break;
        case "right":
            elem.style.top = `${cords.y}px`;
            elem.style.left = `${cords.right}px`;
            break;
        case "bottom":
            elem.style.top = `${cords.bottom}px`;
            elem.style.left = `${cords.left}px`;
            break;

        default:
            elem.style.top = `${cords.top}px`;
            elem.style.left = `${cords.left - elem.offsetWidth}px`;
            break;
    }

    console.log(cords);
}

/**
 * Shows a note with the given html at the given position
 * relative to the anchor element.
 */
function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('.bq');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "left", "note at the left");
showNote(blockquote, "bottom", "note below");