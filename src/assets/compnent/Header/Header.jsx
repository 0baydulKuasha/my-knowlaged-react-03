import photo from '../../images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between  text-center px-6  my-4  border-b-2'>
            <h2 className='my-3 '>Knowledge Cafe</h2>
            <img src={photo} alt="" />
        </header>
    );
};

export default Header;