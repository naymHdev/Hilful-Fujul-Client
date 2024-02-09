import { FaFacebook, FaUserEdit, FaWhatsapp } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import DasTitle from "../../Hooks/DasTitle";
import useVolunteer from "../../Hooks/useVolunteer";
import PrivateAxios from "../../Hooks/PrivateAxios";
import toast from "react-hot-toast";

const AddVolunteers = () => {
  const [volunteer, refetch] = useVolunteer();

  const handelDelete = async (id) => {
    await PrivateAxios.delete(`/joinVolunteer/${id}`)
      .then((res) => {
        if (res.data?.deletedCount === 1) {
          toast.success("Deleted Success!");
          refetch();
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <DasTitle
        title="our excellent volunteers"
        details="We exist for non-profits, social enterprises, community groups, activists"
      />
      <section>
        <div className="overflow-x-auto mt-3">
          <table className="table">
            {/* head */}
            <thead className=" text-xl text-white bg-slate-700 rounded-md w-full">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name({volunteer?.length})</th>
                <th>Image</th>
                <th>Email</th>
                <th>Age</th>
                <th>Birth</th>
                <th>National Id</th>
                <th>Facebook Id</th>
                <th>Whatsapp</th>
                <th>Current Address</th>
                <th>Permanent Address</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody className=" bg-slate-500 text-white">
              {/* row 1 */}
              {volunteer?.map((man, index) => (
                <tr key={man._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{man?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={man?.volunteersImage} alt="image" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{man?.email}</p>
                  </td>
                  <td>{man?.age} Year Old</td>
                  <td>{man?.birthDate}</td>
                  <td>{man?.nationalId}</td>
                  <th className="">
                    <a href={man?.facebookId} target="_blank" rel="noreferrer">
                      <FaFacebook className=" text-2xl text-sky-400" />
                    </a>
                  </th>
                  <th className=" flex items-center gap-1">
                    <FaWhatsapp className=" text-2xl text-sky-400" />
                    <p>{man?.whatsApp}</p>
                  </th>
                  <th>{man?.currentAddress}</th>
                  <th>{man?.permanentAddress}</th>
                  <td>
                    <div className=" text-2xl flex items-center gap-8">
                      <p>
                        <FaUserEdit className=" text-green-500 hover:cursor-pointer" />
                      </p>
                      <p onClick={() => handelDelete(man._id)}>
                        <RiDeleteBin6Line className=" text-red-700 hover:cursor-pointer" />
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AddVolunteers;
