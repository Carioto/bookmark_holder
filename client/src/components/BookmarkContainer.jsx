import '../style/BookmarkContainer.css'
import Auth from '../utils/auth';
import BookmarkCat from './BookmarkCat';
import { useQuery } from "@apollo/client";
import {GET_A_USERS_BOOKMARKS} from '../utils/queries';

export default function BookmarkContainer(){
    const userId = Auth.getProfile().data._id;
    
    const { loading, data } = useQuery(GET_A_USERS_BOOKMARKS, {variables:{username:userId}});
    

    const userName = Auth.getProfile().data.username;

  //DONT FORGET THIS THIS SCREWED YOU UP FOR HALF A DAY  
    if(!loading){
    
        return (

        <>
    


        <div className="bmContainer">
            <p className='text-center userHead'>You are logged in as:</p>
            <h3 className='text-center userBott'>{userName}</h3>
           
            <BookmarkCat  props={{data, userName}}/>

           
        </div>
        
        </>
    )}


}