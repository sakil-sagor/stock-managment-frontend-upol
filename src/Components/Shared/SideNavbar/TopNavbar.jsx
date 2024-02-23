import { NavLink } from "react-router-dom";


const TopNavbar = ({ routes }) => {
    return (
        <div>
            <div>

                <ul className='  flex bg-blue-600 justify-center rounded ' >
                    {
                        routes.map(route => (


                            <li key={route.id} className='  border-x-2 teacher-nav '>
                                <NavLink to={route?.path} className='block py-2  px-12  hover:bg-blue-800 '>
                                    <span className=" block text-white"  >{route?.name}</span>
                                </NavLink>
                            </li>
                        ))
                    }

                </ul>



            </div>
        </div>
    );
};

export default TopNavbar;