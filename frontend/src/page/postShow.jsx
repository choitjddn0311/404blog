import React, {use, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostShow = () => {
    const {title} = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchPost = async () => {
    //         try {
    //             const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts/${id}`);
    //             setPost(res.data);
    //         } catch {
    //             setError('포스트를 불러오는데 오류가 발생했습니다');
    //             setTimeout(() => {
    //                 window.location.reload();
    //             },500);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchPost();
    // }, [id]);

        useEffect(() => {
      const fetchPost = async () => {
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts/title/${encodeURIComponent(title)}`);
          setPost(res.data);
        } catch (err) {
          setError('포스트를 불러오는데 오류가 발생했습니다');
        } finally {
          setLoading(false);
        }
      };
      fetchPost();
    }, [title]);



    if(loading) {
        return (
            <>
                <p>로딩중</p>
            </>
        )
    }
    if(error) {
        return (
            <>
                <p>{error}</p>
            </>
        )
    }
    if(!post) {
        return (
            <>
                <p>포스트가 없습니다.</p>
            </>
        )
    }

    return(
        <>
            <div>
                <h2>{post.title}</h2>
                <p>작성자: {post.id}</p>
                <p>글: {post.content}</p>
            </div>
        </>
    )
};

export default PostShow;