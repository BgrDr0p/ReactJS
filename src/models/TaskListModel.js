import { observable, computed, action } from 'mobx';
import TaskModel from './TaskModel';


export default class TaskListModel {

    @observable task = [];

    @computed
    get unfinishedTasksCount() {
        return this.task.filter( task => task.completed).length;
    }

    @action
    addTask(name){

        this.tasks.push(new TaskModel(name));
    }
}