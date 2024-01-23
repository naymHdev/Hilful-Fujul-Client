/* eslint-disable react/prop-types */

const DasTitle = ({title, details}) => {
    return (
        <div className=" space-y-1 py-5">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p>{details}</p>
        </div>
    );
};

export default DasTitle;