import { Pagination } from "antd";
import useGallery from "../../Hooks/useGallery";
import GalleryCard from "./GalleryCard";
import { useState } from "react";

const Gallery = () => {
  const [isGallery] = useGallery();
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const images = isGallery?.slice(startIndex, endIndex);

  const handelPageCount = (page) => {
    setPage(page);
  };

  return (
    <>
      <div className="primary-width grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-8">
        {images?.map((itm) => (
          <GalleryCard key={itm._id} itm={itm} />
        ))}
      </div>
      <div className=" mt-5 flex items-end justify-end px-8">
        <Pagination
          className="mt-5"
          current={page}
          pageSize={itemsPerPage}
          total={isGallery?.length}
          onChange={handelPageCount}
          showSizeChanger={false}
          showQuickJumper={false}
          itemRender={(item, type, originalElement) => (
            <li key={item.key} className="custom-bg text-white">
              {originalElement}
            </li>
          )}
        />
      </div>
    </>
  );
};

export default Gallery;
