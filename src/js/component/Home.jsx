import React, { useState } from "react";

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todolist, setTodolist] = useState([]);

    const deleteElementOnClick = (indexToDelete) => {
        setTodolist(prev => prev.filter((_, index) => index !== indexToDelete))
    }

    return (
        <div className="container">
            <h1>- TO DO LIST - </h1>
            <ul>
                <li>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setTodolist(prev => [...prev, inputValue])
                            }
                        }}
                        value={inputValue}
                        placeholder="What need to be done?"></input>
                </li>
                {
                    todolist.map((todoItem, index) => {
                        return (
                            <section className="d-flex" key={index}>
                                <p>{`${todoItem}`}</p>
                                <button onClick={() => deleteElementOnClick(index)}>
								Delete
								</button>
                            </section>)
                    })

                }

            </ul>
            <div>{`${todolist.length} tasks`}</div>
        </div>
    );
}

export default Home;
