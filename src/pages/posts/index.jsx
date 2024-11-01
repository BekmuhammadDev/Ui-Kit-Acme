
import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/reducers/postsSlice';

const index = () => {

    const {status}=useSelector((state)=>state.posts);
    const {error}=useSelector((state)=>state.posts);
    const {posts}= useSelector((state)=>state.posts);

    console.log(status,error,posts );
    

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchPosts());
    },[dispatch])


    if(status==='loading'){
        return <h1>Loading.....</h1>
    }

    if(status==='failed'){
        return <h1>Error:{error}</h1>
    }



    return (
        <div>
            <ul>
                {
                    posts.map((post)=>(
                        <li className='p-4 border m-3' key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default index;