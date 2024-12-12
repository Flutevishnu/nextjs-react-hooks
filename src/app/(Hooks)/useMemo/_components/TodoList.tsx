'use client'
import { useMemo, useState } from "react";

function createTodos() {
    const todos = []
    for (let i=0; i<10; i++) {
        todos.push({
            id:i,
            text: "Todo " + (i+1),
            completed: Math.random() > 0.5
        });
    }
    return todos
}


type Todo = 
    {
        id:number,
        text: string,
        completed: boolean
    }

type TodoList = Todo[]
const todos: TodoList = createTodos();

function filterTodos(todos: TodoList, tab:string) {
    console.log('[ARTIFICIALLY SLOW] Filtering ' + todos.length + ' todos for "' + tab + '" tab.');
    let startTime = performance.now();
    while(performance.now() - startTime < 500) {

    }

    return (
        todos.filter(todo => {
            if (tab === 'all') {
                return true;
            }
            else if (tab === 'active') {
                return !todo.completed;
            }
            else if (tab === "completed") {
                return todo.completed
            }
        })
    )
}

function TodoList({todos, theme, tab}: {todos: TodoList, theme:string, tab: string}) {
    const visibleTodos = useMemo(
        () => filterTodos(todos, tab),
        [todos, tab]
    )
    return (
        <div className={theme}>
            <ul>
                <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
                {visibleTodos.map(todo => (
                <li key={todo.id}>
                    {todo.completed ?
                    <s>{todo.text}</s> :
                    todo.text
                    }
                </li>
                ))}
            </ul>
        </div>
    )
}

export default function UseMemoExample(){
    const [tab, setTab] = useState('all');
    const [isDark, setIsDark] = useState(false)
    return (
        <>
        <div>
        <div className="flex flex-row gap-2 ">
        <button onClick={() => setTab('all')}>
            All
          </button>
          <button onClick={() => setTab('active')}>
            Active
          </button>
          <button onClick={() => setTab('completed')}>
            Completed
          </button>
        </div>
          
          <br />
          <label>
            <input
              type="checkbox"
              checked={isDark}
              onChange={e => setIsDark(e.target.checked)}
            />
            Dark mode
          </label>
          <hr />
          <TodoList
            todos={todos}
            tab={tab}
            theme={isDark ? 'dark' : 'light'}
          />
        </div>
        
        </>
      );
}