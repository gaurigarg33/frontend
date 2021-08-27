import { adding_item , deleting_item , delete_all} from "./ActionType";

const todoReducer =(state=[] , action)=>
{
    if(action.type === adding_item)
    {
        return [...state , action.payload];
    }

    else if(action.type === deleting_item)
    {
        return state.filter((item , index)=> index!==action.payload);
    }

    else if(action.type === delete_all)
    {
        return [];
    }

    return state;
}
export default todoReducer;