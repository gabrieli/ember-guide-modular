Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    },
  },
    remaining: function() {
        console.log('gets here ok');
      return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    inflection: function() {
      var remaining = this.get('remaining');
      return remaining === 1 ? 'item' : 'items';
    }.property('remaining'),
    foo: function () {
        console.log('gets into foo');
        return 'this is foo';
    }.property('newTitle')
});