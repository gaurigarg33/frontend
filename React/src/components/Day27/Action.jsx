import { adding_item , deleting_item ,delete_all} from "./ActionType";

const addItem27=(item)=>{
    return{
        type: adding_item,
        payload:item,
    };
};
const delItem27=(id)=>{
    return{
        type:deleting_item,
        payload:id,
    }
};

const deleteALL27=()=>{
    return{
        type:delete_all,
    }
}
export {addItem27 , delItem27 , deleteALL27};