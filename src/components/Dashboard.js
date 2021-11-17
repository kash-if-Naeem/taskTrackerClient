import React, {useState, useEffect} from 'react'
import "../assets/dashboard.css"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { getPosts } from '../actions/posts';
import Form from './ActivityForm';
import { counterPost, deletePost, getPosts } from '../actions/posts';
import ActivityForm from './ActivityForm';


const Dashboard = () => {
    // const activities = useSelector(state=> state)
    const dispatch = useDispatch();
    
    const [currentId, setCurrentId] = useState(0);
    const posts = (state) => state.posts
    
    useEffect(() => {
        dispatch(getPosts());
      }, [currentId, dispatch]); 
      
      

      const [postData, setPostData] = useState({ activity: '', date: '', name: '', duration: '', description: '' });
    
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

  

    return (
        
        <>
         {/* <!-- Sidebar --> */}
        <input type="checkbox" name="" id="sidebar-toggle"/>
      <div className="sidebar">
        <div className="sidebar-brand">
            <div className="brand-flex">
                <a className="navbar-brand logo-style" href="#">fitrack</a>
                <div className="brand-icons">
                    {/* <!-- <span className="las la-bell"></span> --> */}
                    <span className="las la-user-circle"></span>
                </div>
            </div>
        </div>    

        <div className="sidebar-main">
            <div className="sidebar-user">
            <img src="../assets/user.jpg" placeholder="image"/>
            <div>
                <h3>John Doe</h3>
                <span>johndoe@gmail.com</span>
            </div>
        </div>
        <div className="sidebar-menu">
            <div className="menu-block">
                <div className="menu-head">
                    
                </div>
                <ul>
                    <li><a href="">
                        <span className="la la-home"></span>
                        Home
                    </a></li>
                    <li><a href="">
                        <span className="la la-plus"></span>
                        Add New Activity
                    </a></li>
                    {/* <!-- <li><a href="">
                        <span className="la la-water"></span>
                        Water Tracker
                    </a></li> --> */}
                </ul>
            </div>
        </div>
        </div>
        </div>
        
         <div className="main-content">
         <header>
             <div className="menu-toggle">
                 <label for="sidebar-toggle">
             <span className="las la-bars"></span>
         </label>
         </div>
                 {/* <!-- <div className="header-icons">
                     <span className="las la-search"></span>
                     <span className="las la-search"></span>
                     <span className="las la-search"></span>
                 </div> --> */}
            
         </header>
         <main>
             <div className="page-header">
                 <div>
                     <h1> Dashboard </h1>
                     
                 </div>

                 <div className="header-actions">
                     <button><Link to="/add">
                         <span className="las la-plus"></span>
                         Add New Activity
                     </Link>
                     </button>
                     {/* <!-- <button>
                         <span className="las la-file-export"></span>
                         Export 
                     </button> --> */}
                 </div>
             </div>

             <div className="cards">
                 <div className="card-single">
                     <div className="card-flex">
                         <div className="card-info">
                             <div className="card-head">
                                 <span>
                                     Remaining Activities:
                                 </span>
                             </div>
                             <p>3</p>

                         </div>
                         
                     </div>
                 </div>
                 <div className="card-single">
                     <div className="card-flex">
                         <div className="card-info">
                             <div className="card-head">
                                 <span>
                                     Completed Activities:
                                 </span>
                             </div>
                             <p>8</p>

                         </div>
                         
                     </div>
                 </div>
                 <div className="card-single">
                     <div className="card-flex">
                         <div className="card-info">
                             <div className="card-head">
                                 <span>
                                     Total Activities:
                                 </span>
                             </div>
                             <p>11</p>

                         </div>
                         
                     </div>
                 </div>
             </div>

             {/* <!-- second row of cards --> */}
             <div className="heading">
             <h2 className="current">Current Activities</h2>
         </div>

             <div className="cards-two">
                 <div className="card-single">
                     <div className="card-flex">
                         <div className="card-info">
                             <div className="card-head">
                                 <span>
                                     Running:
                                 </span>
                             </div>
                             <p>2 hours</p>
                             <div className="progress-bar">
                                 <progress id="prog" value="32" max="100"> 32% </progress>

                             </div>

                         </div>
                         <div className="card-chart">
                             <a href="./activity-form.html" className="las la-edit"> </a>
                         </div>
                         <div className="card-done">
                             <a href="#" className="las la-check-circle"> </a>
                         </div>

                     </div>
                 </div>
                 <div className="card-single">
                     <div className="card-flex">
                         <div className="card-info">
                             <div className="card-head">
                                 <span>
                                     Cycling:
                                 </span>
                             </div>
                             <p>1 hour</p>
                             <div className="progress-bar">
                                 <progress id="prog" value="100" max="100"> 32% </progress>
                             </div>

                         </div>
                         <div className="card-chart">
                             <a href="./activity-form.html" className="las la-edit"> </a>
                         </div>
                         <div className="card-done">
                             <a href="#" className="las la-check-circle"> </a>
                         </div>

                         
                     </div>
                 </div>
                 <div className="card-single">
                     <div className="card-flex">
                         <div className="card-info">
                             <div className="card-head">
                                 <span>
                                     Swimming
                                 </span>
                             </div>
                             <p>1 hour</p>
                             <div className="progress-bar">
                                 <progress id="prog" value="60" max="100"> 32% </progress>

                             </div>

                         </div>
                         <div className="card-chart">
                           <a href="./activity-form.html" className="las la-edit"> </a>
                         </div>
                         <div className="card-done">
                             <a href="#" className="las la-check-circle"> </a>
                         </div>

                     </div>
                 </div>
                    <div className="card-single">
                     <div className="card-flex">
                         <div className="card-info">
                             <div className="card-head">
                                 <span>
                                     Hiking
                                 </span>
                             </div>
                             <p>1 hour</p>
                             <div className="progress-bar">
                                 <progress id="prog" value="0" max="100"> 32% </progress>

                             </div>

                         </div>
                         <div className="card-chart">
                           <a href="./activity-form.html" className="las la-edit"> </a>
                         </div>
                         <div className="card-done">
                         {/* {posts.map((post) => (
                                <ul>
                                <Dashboard post={post} setCurrentId={setCurrentId} />
                                </ul>
                            ))} */}
                         </div>

                     </div>
                 </div>
                 <div className="card-single">
                     <div className="card-flex">
                         <div className="card-info">
                             <div className="card-head">
                                 <span>
                                     Walk
                                 </span>
                             </div>
                             <p>3 hours</p>
                             <div className="progress-bar">
                                 <progress id="prog" value="10" max="100"> 32% </progress>

                             </div>

                         </div>
                         <div className="card-chart">
                           <a href="./activity-form.html" className="las la-edit"> </a>
                         </div>
                         <div className="card-done">
                             <a href="#" className="las la-check-circle"> </a>
                         </div>

                     </div>
                 </div>
             </div>

         

                {/* <!-- table completed tasks --> */}
                <section id="completed-a">
             <h2 className="sectionMargin">Completed Activities</h2>
             <table className="styled-table">
                 
                 <thead>
                     <tr>
                         <th>#</th>
                         <th>Name</th>
                         <th>Exercise</th>
                         <th>Duration</th>
                         <th>Date</th>
                         
                         
                     </tr>
                 </thead>
                 <tbody>
                     {/* <tr>
                         <td>1</td>
                         <td>Running</td>
                         <td>2</td>
                         <td>10/09/2021</td>
                         
                     </tr> */}
                     {
                         
                             <tr>
                                 <td>1</td>
                                 <td>{postData.name}</td>
                                 <td>{postData.activity}</td>
                                 <td>{postData.duration}</td>
                                 <td>{postData.date}</td>
                             </tr>
                        
                     }
                     {/* <tr className="active-row">
                         <td>2</td>
                         <td>Cycling</td>
                         <td>2</td>
                         <td>11/09/2021</td>
                         
                     </tr>
                     <tr>
                         <td>3</td>
                         <td>Swimming</td>
                         <td>1</td>
                         <td>14/09/2021</td>
                         
                     </tr>
                     <tr className="active-row">
                         <td>4</td>
                         <td>Running</td>
                         <td>2</td>
                         <td>15/09/2021</td>
                         
                     </tr>
                     <tr>
                         <td>5</td>
                         <td>Hiking</td>
                         <td>4</td>
                         <td>20/09/2021</td>
                         
                     </tr>
                     <tr className="active-row">
                         <td>6</td>
                         <td>Walking</td>
                         <td>3</td>
                         <td>23/09/2021</td>
                        
                     </tr>
                     <tr>
                         <td>7</td>
                         <td>Running</td>
                         <td>1</td>
                         <td>30/09/2021</td>
                        
                     </tr>
                     <tr className="active-row">
                         <td>8</td>
                         <td>Swimming</td>
                         <td>1</td>
                         <td>05/10/2021</td>
                         
                     </tr>
                      */}
                 
                 </tbody>
             </table>
         </section>
         <ActivityForm currentId={currentId} setCurrentId={setCurrentId} posts={posts} postData={postData} setPostData={setPostData} post={post} />
         </main>
         </div>
         </>
     
        
    )
}

export default Dashboard
