import React, {useState, useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/activityForm.css'
import { useSelector, useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { createPost, updatePost } from '../actions/posts';
import Dashboard from './Dashboard';

const ActivityForm = ({ currentId, setCurrentId, posts, post, postData, setPostData }) => {
//     const [postData, setPostData] = useState({ activity: '', date: '', name: '', duration: '', description: '' });
    
//   const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();


  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    // setPostData({ activity: '', date: '', name: '', duration: '', description: '' });
  };
  const history= useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
   }
    

    return (
        <>
  {/* <a classNameName="logo-style" href="#" >fitrack</a>  */}
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                
                <div className="box">
                    <h2>Activity Form</h2>
                    <form onSubmit={handleSubmit}>

                     <div className="form-group">
                                <label htmlFor="name">Name</label>
                                
                                <input type="text" className="form-control" minLength="4" placeholder="Enter your name"
                                value={postData.name} onChange={(e)=> setPostData({ ...postData, name: e.target.value })} required /> 
                            </div>
                            <div className="form-group">
                              
                                <label htmlFor="description">Description</label>
                                <textarea id="description" rows="6" minLength="10" maxLength="120" className="form-control" 
                                placeholder="Enter description"  value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} required></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="activity">Select Activity</label>
                                <select className="form-control" id="activity" value={postData.activity} onChange={(e) => setPostData({ ...postData, activity: e.target.value })}>
                                    <option>Run</option>
                                    <option>Bicycle</option>
                                    <option>Ride</option>
                                    <option>Swim</option>
                                    <option>Walk</option>
                                    <option>Hike</option>
                                    {/* {Add.map((exercise, key) => <option key={key} value={key}>{exercise}</option>)} */}
                                  </select>
                                  {/* type="time" step="0.001" id="duration" name="duration" min="1" max="12"  */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="duration">Duration</label>
                                <input type='number'
                                value={postData.duration} onChange={(e) => setPostData({ ...postData, duration: e.target.value })} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="datee">Date</label>
                                <input type="number" id="datee" value={postData.date} onChange={(e) => setPostData({ ...postData, date: e.target.value })} required/>
                            </div>
                            <div className="row btn-create justify-content-center">
                            <button type="submit" className="btn btn-danger submit-button" onClick={clear} >Create</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
        </div>
       
    
 
        
        </>
    )
}

export default ActivityForm