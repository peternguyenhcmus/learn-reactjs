import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
   
};

function TodoFeature(props) {

   const todoList = [
      {
         id: 1,
         title: 'Hao',
      },
      {
         id: 2,
         title: 'Nguyen',
      },
      {
         id: 3,
         title: 'Anh',
      },
   ]

   return (
      <div>
         <h3>Todo List</h3>
         <TodoList todoList={todoList}/>
      </div>
   );
}

export default TodoFeature;