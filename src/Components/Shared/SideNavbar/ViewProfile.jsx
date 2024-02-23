

import AdminArea from "../../../Components/DashboardComponents/AdminArea/AdminArea";
import { TeacherState } from "../../../contexts/TeacherProvider";



const ViewProfile = () => {
    const { teacher } = TeacherState()

    return (
        <div className="pb-24 pt-4">

            <div className=" mx-auto px-2 lg:pl-16 capitalize">
                <div >
                    <p className="font-bold ">Role: <button className="bg-green-600 px-3 py-1 capitalize rounded-2xl mt-4 text-white">{teacher?.role}</button> </p>
                    {/* <h1 className="text-indigo-900 font-semibold text-2xl mb-6 ml-4">Admin Profile</h1> */}
                </div>
                {/* <hr /> */}

                <div className="my-6 ">


                    <AdminArea></AdminArea>
                </div>

            </div>

        </div>
    );
};

export default ViewProfile; 