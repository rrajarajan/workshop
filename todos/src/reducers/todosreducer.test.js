import todos from "./todos";

describe("Todos Reducer unit test", () => {
    it("should return and empty error when initial state and action is undefined", ()=> {
        //return a empty array if undefined
        expect(todos(undefined, {})).toEqual([])
    })
    it("should update initial state by adding 1 Todo item to the list", ()=> {
        //return a empty array if undefined
        const initialState = [];        
        const addTodoAction = {
            type: "ADD_TODO",
            id: 1,
            text: "buy milk",           
        }
        expect(todos(initialState, addTodoAction)).toEqual([{
            completed: false,
            id: 1,
            text: "buy milk"
        }])
    })  
    it("should update initial state by adding second Todo item to the list", ()=> {
        const initialState = [
            {
                id: 1,
                text: "buy milk",  
                completed: false         
            }
        ];
        const addTodoAction = {
            type: "ADD_TODO",
            id: 2,
            text: "go shopping",           
        }        
        expect(todos(initialState, addTodoAction)).toEqual([
            {
                completed: false,
                id: 1,
                text: "buy milk"
            },
            {
                completed: false,
                id: 2,
                text: "go shopping"
            }            
        ])
    })
    it("should toggle incomplete todo to complete", ()=> {
        const initialState = [
            {
                id: 1,
                text: "buy milk",  
                completed: false         
            }
        ];
        const toggleTodoAction = {
            type: "TOGGLE_TODO",
            id: 1,    
        }        
        expect(todos(initialState, toggleTodoAction)).toEqual([
            {
                completed: true,
                id: 1,
                text: "buy milk"
            }          
        ])
    })           
});