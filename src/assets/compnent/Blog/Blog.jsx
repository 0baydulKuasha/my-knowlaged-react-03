import cover from '../../images/1.jpg'
const Blog = ({ blog }) => {
    const {id,cover, title, author, author_image, posted_date, reading_time , hashtags } = blog;
    return (
        <div>
            <img src={cover} alt="" />
            <div className='flex  justify-between '>
                <div className='flex '>
                    <div>
                        <img className='w-24 p-4' src={author_image} alt="" />
                    </div>
                    <div className='m-auto  '>
                        <h1> {author} </h1>
                        <p> {posted_date} </p>
                    </div>
                    
                </div>
                <div>
                    <h2 className='m-auto text-end'> {reading_time} </h2>
                </div>
            </div>
            <h3> Title:{title} </h3>
            <h3> {hashtags} </h3>
        </div>
    );
};

export default Blog;








