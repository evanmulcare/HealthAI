import React, { useState, useEffect } from "react";
import { signUpWithEmailAndPasswordAsync } from "../../Contexts/actionCreators/authActionCreator";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import Select from "react-select";
import { getUsers } from "../../Contexts/actionCreators/ userActionCreator";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

// Used in the login screen.
const RegisterForm = () => {
  const [fileURL, setfileURL] = useState("");
  const [logoFile, setLogoFile] = useState(null);
  const permissionsOptions = ["doctor", "patient"];
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [phone, setPhone] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const selectUsers = (state) => state.users.users;
  const userData = useSelector(selectUsers);
  const doctorData = userData.filter((user) => user.role === "doctor");

  const handlePhone = (phone) => {
    setPhone(phone);
    setInput({
      ...input,
      phone: phone,
    });
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const isValidImageFile = (file) => {
    const acceptedTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
    return acceptedTypes.includes(file.type);
  };

  const handleLogoFileChange = (e) => {
    const file = e.target.files[0];
    if (file && isValidImageFile(file)) {
      setLogoFile(file);
      setfileURL(logoFile);
    } else {
      toast.error("Invalid image file type.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const doctorOptions = doctorData.map((element) => ({
    value: element.docId,
    label: element.firstName + " " + element.lastName,
    logoPicture: element.profileimg,
  }));

  const handleDoctorSelect = (selectedOption) => {
    setSelectedDoctor(selectedOption);
    setInput({
      ...input,
      doctor: selectedOption.value,
    });
  };

  const [input, setInput] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    permissions: "doctor" /*,
    doctor:  '',*/,
  });

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + logoFile.name;
      const storageRef = ref(storage, `/User images/${name}`);

      const uploadTask = uploadBytesResumable(storageRef, logoFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          toast.info(`Uploading File: ${progress}%`);
        },
        (error) => {
          toast.error("Error: " + error, {
            position: "top-center",
            autoClose: 3000,
          });
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              setfileURL(downloadURL);
            })
            .catch((error) => {
              toast.error("Error: " + error, {
                position: "top-center",
                autoClose: 3000,
              });
            });
        }
      );
    };

    logoFile && uploadFile();
  }, [logoFile]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (input.password === input.confirmPassword)
        dispatch(
          signUpWithEmailAndPasswordAsync(
            input.email,
            input.phone,
            input.password,
            input.firstName,
            input.lastName,
            input.permissions,
            fileURL,
            input.doctor
          )
        );
      else {
        // Error toast.
        toast.error("Confirmed password must match password.", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error registering and logging in:", error);

      toast.error("Unexpected error registering and logging in.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="w-full max-w-md py-5">
      <p className="mb-4 text-lg font-semibold text-center text-gray-500">
        New user? Sign up here!
      </p>
      <form onSubmit={handleRegister}>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              First Name
            </label>
            <input
              onChange={handleChange}
              name="firstName"
              value={input.firstName}
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              required
            />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              Last Name
            </label>
            <input
              onChange={handleChange}
              name="lastName"
              value={input.lastName}
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              Email Address
            </label>
            <input
              onChange={handleChange}
              name="email"
              value={input.email}
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="text"
              placeholder="person.name@email.com"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              Phone Number
            </label>
            <PhoneInput
              international
              onChange={handlePhone}
              name="phone"
              value={phone}
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none phone focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-phone"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              Password
            </label>
            <input
              onChange={handleChange}
              name="password"
              value={input.password}
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="strong password"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              Confirm Password
            </label>
            <input
              onChange={handleChange}
              name="confirmPassword"
              value={input.confirmPassword}
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="confirm password"
              required
            />
          </div>
        </div>

        {/*
        <div className='w-full'>
          <label className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'>
            User Role
          </label>
          <select
            onChange={handleChange}
            name='permissions'
            value={input.permissions}
            className='block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-permissions'
            required
          >
            <option value=''>Select Permissions</option>
            {permissionsOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {input.permissions === 'patient' && (

        <div className='mb-6'>
          <label className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'>
            Doctor
          </label>
          <Select
            options={doctorOptions}
            value={selectedDoctor}
            onChange={handleDoctorSelect}
            formatOptionLabel={({ label, logoPicture }) => (
              <div className="flex items-center">
                <div className="w-10 h-10 overflow-hidden">
                  <img
                    src={logoPicture}
                    alt={`${label}'s profile`}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className='ml-2'>
                  <div>{label}</div>
                </div>
              </div>
            )}
            className="form-input over"
            required
          />
        </div>
        )}
        */}

        <div className="flex items-center mt-5">
          <div className="relative w-32 h-32 overflow-hidden bg-gray-300 rounded-full">
            {logoFile ? (
              <div className="flex items-center justify-center h-full">
                <img
                  src={URL.createObjectURL(logoFile)}
                  alt="Logo Preview"
                  className="object-cover w-auto h-32 max-h-32"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-full"></div>
            )}
          </div>
          <div className="ml-5">
            <label className="block mx-auto mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              Upload a profile picture
            </label>
            <input
              type="file"
              id="file"
              onChange={handleLogoFileChange}
              accept=".png, .jpg, .jpeg, .gif"
              className="block mx-auto mb-2 text-xs font-bold tracking-wide text-gray-400 form-input"
            />
          </div>
        </div>

        <button
          onClick={() => handleRegister}
          className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
