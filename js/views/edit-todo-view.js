Todos.EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});
// Registers the component with handlebar to create a helper
Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);