import DasTitle from "../../Hooks/DasTitle";
import useChairman from "../../Hooks/useChairman";
import ChairmanForm from "./ChairmanForm";
import { FaFacebook, FaTwitter, FaUserEdit, FaWhatsapp } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddChairman = () => {
  const [chairman] = useChairman();
  //   console.log(chairman);

  return (
    <>
      <DasTitle
        title="our excellent volunteers"
        details="We exist for non-profits, social enterprises, community groups, activists"
      />
      <div className="flex justify-end">
        <ChairmanForm />
      </div>
      <section>
        <div className="overflow-x-auto mt-3">
          <table className="table">
            {/* head */}
            <thead className=" text-xl text-white bg-slate-700 rounded-md">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Image</th>
                <th>Role</th>
                <th>WhatsApp</th>
                <th>Email</th>
                <th>Social Media</th>
                <th>Modified</th>
              </tr>
            </thead>
            <tbody className=" bg-slate-500 text-white">
              {/* row 1 */}
              {chairman?.map((man, index) => (
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
                        <img src={man?.image} alt="image" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{man?.role}</p>
                  </td>
                  <td className=" flex items-center gap-2">
                    <FaWhatsapp className=" text-xl text-green-400" />
                    +880{man?.whatsApp}
                  </td>
                  <th>
                    <p>{man?.email}</p>
                  </th>
                  <th className=" flex items-center gap-8">
                    <a href={man?.facebookId} target="_blank" rel="noreferrer">
                      <FaFacebook className=" text-xl text-sky-400" />
                    </a>
                    <a href={man?.twitter} target="_blank" rel="noreferrer">
                      <FaTwitter className=" text-xl text-sky-400" />
                    </a>
                  </th>
                  {/* <td className=" text-2xl flex items-center gap-8">
                    <p><FaUserEdit className=" text-yellow-500" /></p>
                    <p><RiDeleteBin6Line className=" text-red-700" /></p>
                  </td> */}
                  <td>
                    <div className=" text-2xl flex items-center gap-8">
                      <p>
                        <FaUserEdit className=" text-green-500" />
                      </p>
                      <p>
                        <RiDeleteBin6Line className=" text-red-700" />
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

export default AddChairman;
