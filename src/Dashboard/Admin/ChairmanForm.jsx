import Button from "../../Components/Button";

const ChairmanForm = () => {
  const handelDetails = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const role = form.role.value;
    const facebookId = form.facebookId.value;
    const whatsApp = form.whatsApp.value;
    const twitter = form.twitter.value;
    const image = form.image.value;
    const details = { name, email, role, facebookId, whatsApp, twitter, image };
    console.log(details);
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <Button
        text="Add Chairman"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      />
      <dialog id="my_modal_4" className="modal backdrop-blur-sm">
        <div className="modal-box w-full bg-slate-300">
          <section>
            <div className=" text-3xl text-green-500 font-medium text-center py-2">
              <h3>Add Details</h3>
            </div>
            <form onSubmit={handelDetails}>
              <div>
                <label className=" label font-bold">Name:</label>
                <input
                  className=" w-full px-1 py-2 rounded-md border"
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="type your name"
                />
              </div>
              <div>
                <label className=" label font-bold">Email:</label>
                <input
                  className=" w-full px-1 py-2 rounded-md border"
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="type your email"
                />
              </div>
              <div>
                <label className=" label font-bold">Role:</label>
                <input
                  className=" w-full px-1 py-2 rounded-md border"
                  type="text"
                  id="role"
                  name="role"
                  required
                  placeholder="type your role"
                />
              </div>
              <div>
                <label className=" label font-bold">FaceBook Id Link:</label>
                <input
                  className=" w-full px-1 py-2 rounded-md border"
                  type="url"
                  id="facebookId"
                  name="facebookId"
                  required
                  placeholder="type your facebook id"
                />
              </div>
              <div>
                <label className=" label font-bold">WhatsApp Number:</label>
                <input
                  className=" w-full px-1 py-2 rounded-md border"
                  type="number"
                  id="whatsApp"
                  name="whatsApp"
                  required
                  placeholder="type your whatsApp number"
                />
              </div>
              <div>
                <label className=" label font-bold">Twitter Id Link:</label>
                <input
                  className=" w-full px-1 py-2 rounded-md border"
                  type="url"
                  id="twitter"
                  name="twitter"
                  required
                  placeholder="type your twitter number"
                />
              </div>
              <div>
                <label className=" label font-bold">Good Quality Image:</label>
                <input
                  className=" w-full px-1 py-2 rounded-md border"
                  type="file"
                  name="image"
                  id="image"
                  required
                  placeholder="add your image"
                />
              </div>
              <div className=" flex py-3 justify-center">
                <Button text="Save Now" />
              </div>
            </form>
          </section>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ChairmanForm;
