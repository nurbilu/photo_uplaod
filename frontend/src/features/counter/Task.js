import React, { useState , useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTaskAsync } from './taskSlice';
import axios from 'axios';
import { fetchTasksAsync ,deleteTaskAsync,updateTaskAsync} from './taskSlice';
export function Task() {
    const MY_SERVER = "http://127.0.0.1:8000";
    // const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    
    const [img, setimg] = useState(null)
    const [tasks, settasks] = useState([])
    

    const addstudent = () => {
        const formData = new FormData();
        formData.append("title", title);

        formData.append("description", content);
        formData.append("image", img);
        console.log(formData);
        dispatch(addTaskAsync(formData))
    };
    const handleImgUpl = (files) => {
        setimg(files[0])
    }
    const loadData = async () => {
        // Fetch data from your server and update the tasks state
        const response = await axios.get(`${MY_SERVER}/get_all_images`);
        settasks(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);

    const updateTask = (taskId, updatedData) => {
        dispatch(updateTaskAsync({ id: taskId, ...updatedData }));
    };

    // Existing useEffect for loadData
    useEffect(() => {
        dispatch(fetchTasksAsync());
    }, [dispatch]);
    return (
        <div className="App">
            {       
                tasks.map(task => <div onChange={loadData}>
                    {task.title},
                    {task.description}
                    <img alt='' style={{ width: "200px" }} src={MY_SERVER + '/static/images/' + task.image } />
                    <button onClick={() => dispatch(deleteTaskAsync(task.id))}>Delete</button>
                    <button onClick={() => updateTask(task.id, { title: 'Updated Title' })}>Update</button>
                </div>
                )
            }
            <button onClick={() => addstudent()}>Add</button>
            title:<input onChange={(e) => settitle(e.target.value)} />
            content:<input onChange={(e) => setcontent(e.target.value)} />
            spic:<input type="file" onChange={(e) => handleImgUpl(e.target.files)} />
        </div>
    );
}