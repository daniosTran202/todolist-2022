import React from 'react';
import { toast } from 'react-toastify';
import '../styles/global.scss';
import {Button} from 'react-bootstrap';
import { BsPlusLg } from "react-icons/bs";

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }


    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error(`Missing title's Todo!`)
            return;
            //if(undefined/null/empty) => false
        }

        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }

        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input style={{outline:"none"}} placeholder="Enter task " type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <Button type="button" className="add"
                    onClick={() => this.handleAddTodo()}
                > <BsPlusLg /> </Button>
            </div>
        )
    }

}

export default AddTodo;