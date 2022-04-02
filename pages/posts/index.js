import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { allPostAction } from '../../components/store/action/allPostAction';
import { wrapper } from '../../components/store/store';

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res, ...rest }) => {
    await store.dispatch(allPostAction())
})

const Posts = () => {

    const postsData = useSelector((state) => state?.getAllPostList)

    return (
        <div>

            {postsData?.loading && <h4 className="text-center text-primary">Loading...</h4>}
            {postsData?.error && <div className="container"><h4 className="text-center bg-danger text-light fw-bold p-4 my-3">{postsData?.error}</h4></div>}
            {(!postsData?.loading && !postsData?.error) && <div className='container'>
                <div className="">
                    <div className='row d-flex justify-content-center'>
                        {
                            postsData?.getPostList?.map((item, index) => (
                                <div className='card col-md-3 g-5 mx-4 border-0 shadow round-1' key={item?.id}>
                                   
                                    <div className='card-body'>
                                        <h4>{item.title}</h4>
                                        <p>{item?.body}</p>
                                        <Link href={`/posts/${item?.id}`}>
                                            <a className="btn btn-info text-light">Details</a>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>}

        </div >
    );
};

export default Posts;
