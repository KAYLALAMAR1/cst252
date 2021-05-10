$( function() {
  $( "#draggable" ).draggable();
  $( "#draggable1" ).draggable();
  $( "#draggable2" ).draggable();
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" );
    }
  });
} );
