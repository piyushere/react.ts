import React from 'react';

interface TodoModel {
  value: string;
  id: number;
  done: boolean;
}

enum TodoStates {
  done = 'done',
  edit = 'edit',
  add = 'add',
}

interface TodoAction {
  type: TodoStates;
  payload: TodoModel;
}

const TodoItem = ({
  item,
  dispatch,
}: {
  item: TodoModel;
  dispatch: React.Dispatch<TodoAction>;
}) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <input
        type="checkbox"
        checked={item.done}
        onChange={(event) =>
          dispatch({
            type: TodoStates.done,
            payload: { ...item, done: event.target.checked },
          })
        }
      />
      <h3 className="text-lg">{item.value}</h3>
      <button
        type="button"
        onClick={() => dispatch({ type: TodoStates.edit, payload: item })}
      >
        edit{' '}
      </button>
    </div>
  );
};

const Todos = () => {
  const [todos, dispatch] = React.useReducer(
    (state: TodoModel[], action: TodoAction) => {
      const draftState = [...state];
      switch (action.type) {
        case TodoStates.done: {
          const { payload } = action;
          const toModify = draftState.find((todo) => todo.id === payload.id);
          if (toModify) toModify.done = payload.done;
          return draftState;
        }
        case TodoStates.add: {
          const { payload } = action;
          draftState.push(payload);
          return draftState;
        }
        case TodoStates.edit: {
          const { payload } = action;
          const toModify = draftState.find((todo) => todo.id === payload.id);
          if (toModify) toModify.value = payload.value;
          return draftState;
        }
        default:
          return draftState;
      }
    },
    []
  );

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => {
            const newItem: TodoModel = {
              value: 'new todo',
              id: todos.length,
              done: false,
            };
            dispatch({ type: TodoStates.add, payload: newItem });
          }}
        >
          Add new
        </button>
      </div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} dispatch={dispatch} item={todo} />
      ))}
    </div>
  );
};

export default Todos;
