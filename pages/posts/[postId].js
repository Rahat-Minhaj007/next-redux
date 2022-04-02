import { useRouter } from 'next/router';
import React from 'react';

const PostDetail = () => {
    const router = useRouter();
    const postId = router.query.postId
    return (
        <div>
            <h1> Post {postId} Details Page</h1>
        </div>
    );
};

export default PostDetail;