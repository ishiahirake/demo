import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import {
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  makeStyles,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core'

import FolderIcon from '@material-ui/icons/Folder'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5),
    width: '40%'
  },
  paper: {
    padding: theme.spacing(3)
  },
  summary: {
    display: 'flex',
    flexDirection: 'row'
  },
  todoAction: {
    right: 0
  }
}))

function Todo() {
  const [input, setInput] = React.useState('')

  const [todos, setTodos] = React.useState([])
  const [finishedCount, setFinishedCount] = React.useState(0)
  const [cancelledCount, setCancelledCount] = React.useState(0)

  const classes = useStyles()

  function handleAddTodo(event) {
    setTodos([...todos, input])
    setInput('')
  }

  function handleInputValueChange(event) {
    setInput(event.target.value)
  }

  function handleFinishTodo(todo, index) {
    setFinishedCount(finishedCount + 1)
    todos.splice(index, 1)
    setTodos([...todos])
  }

  function handleCancelTodo(todo, index) {
    setCancelledCount(cancelledCount + 1)
    todos.splice(index, 1)
    setTodos([...todos])
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.summary}>
          <Typography variant="body1">已完成 {finishedCount} 件</Typography>
          <Typography style={{ padding: '0 16px' }}> / </Typography>
          <Typography>已取消 {cancelledCount} 件</Typography>
        </div>
        <List>
          {todos.map((todo, index) => {
            return (
              <div key={index}>
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary={todo}
                  />
                  <ListItemSecondaryAction classes={{ root: classes.todoAction }}>
                    <Grid className={classes.todoAction} container spacing={2}>
                      <Grid item>
                        <Button variant="contained"
                          color="secondary"
                          onClick={() => handleCancelTodo(todo, index)}>
                          取消
                      </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained"
                          color="primary"
                          onClick={() => handleFinishTodo(todo, index)}>
                          完成
                      </Button>
                      </Grid>
                    </Grid>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            )
          })}
        </List>
        <Grid container spacing={3} alignItems="flex-end">
          <Grid item md>
            <TextField id="todo-input"
              // variant="outlined"
              label="Todo Input"
              value={input}
              onChange={handleInputValueChange}
              fullWidth
            />
          </Grid>
          <Grid item md={2}>
            <Button variant="contained" color="primary" onClick={handleAddTodo}>添加</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
