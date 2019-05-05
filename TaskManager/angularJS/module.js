angular.module("TaskManager", ['ngDragDrop']).controller("TaskManagerCtrl", function ($scope) {

    $scope.kindOftaskFlag = ""; //this flag define which task will plus/delete

    // $scope.toDo =[{title: 'tastToDO1', description: 'deascription1'},{title: 'tastToDO2', description: 'deascription2'},{title: 'tastToDO3', description: 'deascription3'}]//toDoModel.read();
    // $scope.inProcess = [{title: 'inProcess1', description: 'deascription1'},{title: 'inProcess2', description: 'deascription2'}];//inProcessModel.read();
    // $scope.done =[{title: 'done1', description: 'deascription1'},{title: 'done2', description: 'deascription2'}] //doneModel.read();

    $scope.toDo = toDoModel.read();
    $scope.inProcess = inProcessModel.read();
    $scope.done = doneModel.read();

    $scope.kindOfTask = "";

    $scope.dropCallback = function() {
        console.log("it works !!!!!!")
        toDoModel.date=$scope.toDo;
        toDoModel.save();
        inProcessModel.date=$scope.inProcess;
        inProcessModel.save();
        doneModel.date=$scope.done;
        doneModel.save();
    };

    $scope.defineTask = function (event, task) {

        if (event.target.parentNode.id) {
            console.log(event.target.parentNode.id);
            $scope.kindOfTask = event.target.parentNode.id
        } else if (event.target.parentNode.parentNode.parentNode.id) {
            console.log(event.target.parentNode.parentNode.parentNode.id);
            $scope.kindOfTask = event.target.parentNode.parentNode.parentNode.id;
        }
        $scope.task = task;
        // console.log($scope.task);
    };

    $scope.addTask = function () {
        switch ($scope.kindOfTask) {
            case 'plusToDo':
                toDoModel.addItem($scope.taskTitle, $scope.taskDescription);
                toDoModel.save();
                break;
            case 'plusInProcess':
                inProcessModel.addItem($scope.taskTitle, $scope.taskDescription);
                inProcessModel.save();
                break;
            case 'plusDone':
                doneModel.addItem($scope.taskTitle, $scope.taskDescription);
                doneModel.save();
                break;
        }
    }

    $scope.removeTask = function () {
        switch ($scope.kindOfTask) {
            case 'plusToDo':
                toDoModel.removeItem($scope.task.id);
                toDoModel.save();
                break;
            case 'plusInProcess':
                inProcessModel.removeItem($scope.task.id);
                inProcessModel.save();
                break;
            case 'plusDone':
                doneModel.removeItem($scope.task.id);
                doneModel.save();
                break;
        }
    }
});