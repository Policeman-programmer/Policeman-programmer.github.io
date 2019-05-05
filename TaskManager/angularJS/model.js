var toDoModel = (function () {
    var _toDo = [];

    function _addItem(title, description) {
        _toDo.push({
            id: getCurrentId(),
            title: title,
            description: description,
            date: new Date().toLocaleTimeString()
        });
    }

    function _removeItem(id) {
        _toDo.forEach(function (e, index) { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if (e.id == id) {
                _toDo.splice(index, 1);
            }
        })
    }

    function getCurrentId() {
        if (!_toDo || _toDo.length === 0) return 0;
        else return _toDo[_toDo.length - 1].id++;
    }

    function _save() {
        window.localStorage["toDoTask"] = JSON.stringify(_toDo, function (key, val) {
            if (key == '$$hashKey') {
                return undefined;
            }
            return val;
        });
    }

    function _read() {
        var temp = window.localStorage["toDoTask"]
        if (!temp) _toDo = [];
        else _toDo = JSON.parse(temp)

        return _toDo;
    }

    return {
        date: _toDo,
        addItem: _addItem,
        removeItem: _removeItem,
        save: _save,
        read: _read
    }
})();

var inProcessModel = (function () {
    var _inProcess = [];

    function _addItem(title, description, date = new Date().toLocaleTimeString()) {
        _inProcess.push({
            id: getCurrentId(),
            title: title,
            description: description,
            date: date
        });
    }

    function _removeItem(id) {
        _inProcess.forEach(function (e, index) { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if (e.id == id) {
                _inProcess.splice(index, 1);
            }
        })
    }

    function getCurrentId() {
        if (!_inProcess || _inProcess.length === 0) return 0;
        else return _inProcess[_inProcess.length - 1].id++;
    }

    function _save() {
        window.localStorage["inProcessTask"] = JSON.stringify(_inProcess, function (key, val) {
            if (key == '$$hashKey') {
                return undefined;
            }
            return val;
        });
    }

    function _read() {
        var temp = window.localStorage["inProcessTask"]
        if (!temp) _inProcess = [];
        else _inProcess = JSON.parse(temp)

        return _inProcess;
    }

    return {
        date: _inProcess,
        addItem: _addItem,
        removeItem: _removeItem,
        save: _save,
        read: _read
    }
})();


var doneModel = (function () {
    var _done = [];

    function _addItem(title, description, date = new Date().toLocaleTimeString()) {
        _done.push({
            id: getCurrentId(),
            title: title,
            description: description,
            date: date
        });
    }

    function _removeItem(id) {
        _done.forEach(function (e, index) { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if (e.id == id) {
                _done.splice(index, 1);
            }
        })
    }

    function getCurrentId() {
        if (!_done || _done.length === 0) return 0;
        else return _done[_done.length - 1].id++;
    }

    function _save() {
        window.localStorage["doneTask"] = JSON.stringify(_done, function (key, val) {
            if (key == '$$hashKey') {
                return undefined;
            }
            return val;
        });
    }

    function _read() {
        var temp = window.localStorage["doneTask"]
        if (!temp) _done = [];
        else _done = JSON.parse(temp)

        return _done;
    }


    return {
        date: _done,
        addItem: _addItem,
        removeItem: _removeItem,
        save: _save,
        read: _read
    }
})();