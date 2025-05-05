import React,{ useState , useReducer, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";

import '../../resources/css/Homepage.css';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';


type taskItem = {

    id : null , 
    taskName : string, 
    createdOn : Date

}



const myreducerVar = (taskVar : taskItem ,action : any) =>{

    switch(action.type){
        case 'AddTask' : 
            return {...taskVar , taskName : action.payload};
        case 'clear' : 
            return {    id : null , taskName : '', createdOn : new Date()};
        default : 
            throw new Error();
    }

}





function Homepage(props:any){

    const [clicked, setClicked] = useState(false);
    const [count, setCount] = useState(0);
    const [taskVar, dispatch] = useReducer(myreducerVar ,{id : null , taskName : 'Sample Task', createdOn : new Date()});
    const [finalTaskList , setFinalTaskList] = useState<taskItem[]>([]); 
    const [draftFinalTaskList , setDraftFinalTaskList] = useState<taskItem[]>([]); 
    


    const handleClick = () =>{
        if(clicked){
            setClicked(false);
        } else {
            setClicked(true);
        }
        
    }



    const incrementCount = () =>{
        setCount(count+1);
    }

    const fetchTasksFromDB = async() : Promise<taskItem[]> => {
        const response = await axios.get<taskItem[]>('http://localhost:8081/getAllTasks');
        alert(response.data[0].taskName);
        setFinalTaskList(response.data);
        return response.data;
    }

    useEffect(() => {
        fetchTasksFromDB();
      }, []);

      const submitTask = () => {

        if(taskVar.taskName == ''){
            alert ("Are you mad ? How can a task be empty");
            return;
        }

        setDraftFinalTaskList([...draftFinalTaskList , taskVar]);
        axios.post('http://localhost:8081/storeTasks', draftFinalTaskList)
        .then(response => {
          console.log('Successfully posted task:', response.data);
          setFinalTaskList(response.data);
        })
        .catch(error => {
          console.error('Failed to post task:', error);
        });
        dispatch({type:'clear'});

    }
    
    return (

        <div>

            This is the Homepage. Try not to mess with <Button variant={clicked ? 'contained' : 'text'} onClick={handleClick} > Stop All </Button>
            <br/><Button variant={clicked ? 'contained' : 'text'} onClick={incrementCount} > Increment my count </Button>
            <br/>My Count is {count}
            <br/> <TextField id="outlined-basic" label="Add Task" variant="outlined" onChange={(e) => dispatch({type:'AddTask' , payload : e.target.value})}/>
            <br/> <table border={1}><tr><td colSpan={3}> DRAFT Task</td></tr><tr><td>S.No</td><td>TaskName</td><td>Added On</td></tr>
            {draftFinalTaskList.map((item)=>(
                <tr><td>{item.id}</td><td>{item.taskName}</td><td>{item.createdOn.toDateString()}</td></tr>

            ))}
            
            </table>

            <br/><br/><center><Button onClick={submitTask}>SUBMIT To TASK</Button></center>
            <br/><center>

            <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finalTaskList.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.taskName}</TableCell>
              <TableCell>{new Date(item.createdOn).toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



            </center>

        </div>

    );
}

export default Homepage;