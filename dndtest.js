function _(id){
   return document.getElementById(id);	
}

var droppedIn = false;

function drag_start(event) {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text", event.target.getAttribute('id') );
}


function drag_drop(event) {
    event.preventDefault(); /* Prevent undesirable default behavior while dropping */
    var elem_id = event.dataTransfer.getData("text");
    event.target.appendChild( _(elem_id) );
    _(elem_id).removeAttribute("draggable");
    _(elem_id).style.cursor = "default";
    droppedIn = true;
}

function drag_end(event) {
	droppedIn = false;
}


// ********important for API CALLS *************
// function readDropZone(){
//     for(var i=0; i < _("drop_zone").children.length; i++){
//         alert(_("drop_zone").children[i].id+" is in the drop zone");
//     }
//     /* Run Ajax request to pass any data to your server */
// }