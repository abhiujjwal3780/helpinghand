import CreateTodo from '.CreateTodo';
import Todo from './Todo';

// more on hookrouter https://github.com/Paratron/hookrouter
const Routes = {
    "/": () => <Todo />,
    "/createtodo": () => <CreateTodo />,
};

export default Routes;
