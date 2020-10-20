// import { Todo } from ".";
import { Todo } from './index';

export class TodoList {

    constructor() {
        // this.todos = [];
        this.cargarLocalStore();
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage(); 
    }

    eliminaTodo( id ) {
       this.todos = this.todos.filter( todo => todo.id != id );
       this.guardarLocalStorage();
       
    }

    marcarCompletado( id ) {

        for ( const todo of this.todos ){

            console.log(id, todo.id);

            if( todo.id == id ) {
                
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados() {
        
        this.todos = this.todos.filter( todo => !todo.completado )
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify( this.todos ) );


    }

    cargarLocalStore(){

        this.todos = (localStorage.getItem('todo') ) 
                        ? this.todos = JSON.parse (localStorage.getItem('todo') ) 
                        : []; 



        this.todos = this.todos.map( Todo.fromJson );
        // if( localStorage.getItem('todo') ) {

        //     this.todos = JSON.parse (localStorage.getItem('todo') );

        // }else {
        //     this.todos = [];
            
        // }

    }

}