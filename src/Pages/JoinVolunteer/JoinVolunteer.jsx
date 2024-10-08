import volunteer from "../../../src/assets/JoinVolunteer.jpg";
import IsBanner from "../../Hooks/IsBanner";
import VolunteerForm from "./VolunteerForm";

const JoinVolunteer = () => {
  return (
    <>
      <div className=" px-4 md:px-6 lg:px-10 max-w-7xl mx-auto  mt-20 md:mt-24 pb-6">
        <IsBanner
          image={volunteer}
          headerTitle="পরিবর্তনের সহযোদ্ধা হোন"
          description=" মানবতার সেবায় স্বেচ্ছাসেবক হিসাবে আমাদের সাথে যুক্ত হন। সমাজের
              উন্নতির জন্য একসঙ্গে কাজ করুন। আমাদের সমাজের জন্য আপনার সময় ও
              শক্তি উৎসর্গ করে প্রকৃত পরিবর্তনের অংশীদার হন। স্বেচ্ছাসেবক হিসেবে
              কাজ করার মাধ্যমে আপনি অন্যদের পাশে দাঁড়াতে পারেন এবং তাদের জীবনে
              প্রভাব ফেলতে পারেন। আমাদের প্রোগ্রামে যুক্ত হয়ে, আপনি শুধু যে
              সমাজের উন্নতি করবেন তা নয়, আপনার নিজের দক্ষতা ও অভিজ্ঞতাকেও
              সমৃদ্ধ করবেন। নিজের ভেতরের মানবতাকে আবিষ্কার করুন এবং স্বেচ্ছাসেবী
              হয়ে সমাজের জন্য একটি ইতিবাচক পরিবর্তন আনুন।"
        />
        <VolunteerForm />
      </div>
    </>
  );
};

export default JoinVolunteer;
