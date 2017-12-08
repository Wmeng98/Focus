
angular.module('focus-app').service('todoStorage', function ($q) {
    var _this = this;
    this.data = [];

    this.findAllOnList = function(callback) {
        chrome.storage.sync.get('todo', function(keys) {
            if (keys.todo != null) {
                _this.data = keys.todo;
                for (var i=0; i<_this.data.length; i++) {
                    _this.data[i]['id'] = i + 1;
                }
                console.log(_this.data);
                callback(_this.data);
            }
        });
    }

    this.sync = function() {
        chrome.storage.sync.set({todo: this.data}, function() {
            console.log('Data is stored in Chrome storage');
        });
    }

    this.addToList = function (newContent) {
        var ID = this.data.length + 1;
        var todo = {
            id: ID,
            content: newContent,
            completed: false,
            createdAt: new Date()
        };
        this.data.push(todo);
        this.sync();
    }

    this.removeFromList = function(todo) {
        this.data.splice(this.data.indexOf(todo), 1);
        this.sync();
    }

    this.removeAllFromList = function() {
        this.data = [];
        this.sync();
    }

});
