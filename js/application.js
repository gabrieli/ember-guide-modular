window.Todos = Ember.Application.create();

//indicate which adapter to use basically
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();