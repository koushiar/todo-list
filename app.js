function addTodoItem() {
  var todoItem = $("#new-todo-item").val();
  $("#todo-list").append("<li><input type='checkbox'" + 
                         " name='todo-item-done'" + 
                         " class='todo-item-done'"+ 
                         " value='" + todoItem + "' /> " + 
                         todoItem +
                         " <button class='todo-item-delete'>"+
                         "Delete</button></li>");
  
 $("#new-todo-item").val("");
}

function deleteTodoItem(e, item) {
  e.preventDefault();
  $(item).parent().fadeOut('slow', function() { 
    $(item).parent().remove();
  });
}

                           
function completeTodoItem() {  
  $(this).parent().toggleClass("strike");
}


$(function() {
 
   $("#add-todo-item").on('click', function(e){
     e.preventDefault();
     addTodoItem()
   });
  

  $("#todo-list").on('click', '.todo-item-delete', function(e){
    var item = this; 
    deleteTodoItem(e, item)
  })
  
  $(document).on('click', ".todo-item-done", completeTodoItem)

});
