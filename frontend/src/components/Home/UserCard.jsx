import React, { useRef, useState, useEffect } from "react";
import { Recycle, CloudCog, Leaf, Pencil, SaveAll, User } from "lucide-react";
import { gsap } from "gsap";
import CountUp from "react-countup";

const UserCard = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("Pranab Bhowmik");
  const [address, setAddress] = useState("Simulia Tamluk, WB 721649");
  const [profilePic, setProfilePic] = useState(null);

  const fileInputRef = useRef();
  const editRef = useRef();

  const stats = {
    recycle: 3.5,
    carbon: 5.2,
    points: 5287,
  };

  useEffect(() => {
    if (editMode) {
      gsap.fromTo(
        editRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [editMode]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfilePic(imageURL);
    }
  };

  return (
    <div className="max-w-md mt-4 bg-[#8941F2] rounded-[30px] p-5 mx-2 text-white shadow-lg">
      {/* Header */}
      <div className="bg-white rounded-full px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {editMode ? (
            <div
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
              onClick={() => fileInputRef.current.click()}
            >
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <User className="text-black w-5 h-5" />
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          ) : profilePic ? (
            <img
              src={profilePic}
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="text-black w-5 h-5" />
            </div>
          )}

          <div>
            {editMode ? (
              <div ref={editRef}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-sm font-semibold text-black rounded px-2 py-1 w-full"
                />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="text-xs text-black rounded px-2 py-1 w-full mt-1"
                />
              </div>
            ) : (
              <>
                <h2 className="text-sm font-semibold text-black">{name}</h2>
                <p className="text-xs text-gray-600">{address}</p>
              </>
            )}
          </div>
        </div>

        <div
          onClick={() => setEditMode(!editMode)}
          className="bg-gray-100 hover:bg-gray-200 rounded-full p-1 cursor-pointer transition"
        >
          {editMode ? (
            <SaveAll className="w-4 h-4 text-black" />
          ) : (
            <Pencil className="w-4 h-4 text-black" />
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mt-6 text-center">
        <div className="bg-black/90 rounded-2xl py-4 px-2">
          <Recycle className="mx-auto text-white w-5 h-5" />
          <h3 className="text-lg font-semibold text-white mt-1">
            <CountUp end={stats.recycle} decimals={1} duration={3} /> kg
          </h3>
          <p className="text-xs text-gray-300">Recycle</p>
        </div>
        <div className="bg-black/90 rounded-2xl py-4 px-2">
          <CloudCog className="mx-auto text-white w-5 h-5" />
          <h3 className="text-lg font-semibold text-white mt-1">
            <CountUp end={stats.carbon} decimals={1} duration={3} /> g
          </h3>
          <p className="text-xs text-gray-300">Carbon</p>
        </div>
        <div className="bg-black/90 rounded-2xl py-4 px-2">
          <Leaf className="mx-auto text-white w-5 h-5" />
          <h3 className="text-lg font-semibold text-white mt-1">
            <CountUp end={stats.points} duration={2} />
          </h3>
          <p className="text-xs text-gray-300">Points</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
