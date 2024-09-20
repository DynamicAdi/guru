import { useEffect, useState } from "react";
import "./dashboard.scss";
import { RiAdminLine } from "react-icons/ri";
import {
  IoFastFoodOutline,
  IoLogOutOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { readData } from "../../funcs/useFetch";

import { FaRegEdit, FaRegTrashAlt, FaSpinner } from "react-icons/fa";
import {CiCircleList, CiCircleQuestion, CiUser} from "react-icons/ci"
import axios from "axios";
import { GoListUnordered } from "react-icons/go";
import { GiHotMeal } from "react-icons/gi";
import { Link } from "react-router-dom";

function Dashboard({logout, backend}) {
  // const backend = "http://localhost:8080";
  const tabs = [
    { title: "Admins", icon: RiAdminLine },
    { title: "Foods", icon: IoFastFoodOutline },
    { title: "Orders", icon: GoListUnordered },
    { title: "Corporate", icon: GiHotMeal },
    { title: "Clients", icon: CiUser},
    { title: "Services", icon: CiCircleList},
    { title: "Faq", icon: CiCircleQuestion}

  ];
  const [activeTab, setActiveTab] = useState(tabs[2].title);
  const { data = [], isLoading, error, reFetch } = readData(backend, activeTab);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [isVeg, setIsVeg] = useState();
  const [isPopular, setIsPoupular] = useState();
  const [description, setDescription] = useState("");
  const [catogery, setCatogery] = useState("");
  const [catogeries, setCatogeries] = useState("");
  const [createCatogery, setCreateCatogery] = useState(false);

  const [admin, setAdmin] = useState(false);
  const [role, setRole] = useState('admin');

  const [image, setImage] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);


  const [create, setCreate] = useState(false);
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);

  const keys =
    data && data.length > 0
      ? Object.keys(data[0]).filter(
          (key) => key !== "_id" && key !== "__v" && key !== "orders" && key !== "status"
        )
      : [];

  useEffect(() => {
    reFetch();
  }, [activeTab]);

  const handleEdit = async (action, id) => {
    let url = `${backend}/search`;
    let METHOD = "POST";
    try {
      setLoading(true);
      if (action === "delete") {
        url = `${backend}/delete`;
      }
      if (action === "edit") {
        url = `${backend}/search`;
      }
      if (action === "update") {
        url = `${backend}/update`;
        METHOD = "PUT";
      }

      const response = await axios.request({
        method: METHOD,
        url: url,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          endpoint: activeTab,
          id: id,
          data: {
            name: name,
            price: price,
            rating: rating,
            isVeg: isVeg,
            image: image,
            description: description,

          },
        },
      });

      setName(response.data.name);
      setEmail(response.data.email);
      setPassword(response.data.password);
      setPrice(response.data.price);
      setRating(response.data.rating);
      setIsVeg(response.data.isVeg);
      setImage(response.data.image);
      setDescription(response.data.description);
      setCatogery(response.data.catogery);

      setLoading(false);
      // setVisible(true)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(`${backend}/update`, {
        id: id,
        name: name,
        description: description,
        price: price,
        image: image,
        rating: rating,
        isVeg: isVeg,
        catogery: catogery,
        isPopular: isPopular,
      });
      console.log("Item updated:", response.data);
      setVisible(false);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleUserUpdate = async (id) => {
    const response = await axios.put(`${backend}/users/update`, {
      id: id,
      name: name,
      email: email,
      password: password,
      role: role,
    });
    console.log("User updated:", response.data);
    setVisible(false);
  };

  const getCatogery = async (action, id) => {
    let url = "";
    let method = "GET";
    if (id==="" || catogery === "" || image === "") {
      alert("Please fill all the details")
      return null
    }
    if (action === "read") {
      (url = `${backend}/catogery`), (method = "GET");
    } else if (action === "create") {
      (url = `${backend}/catogery/create`), (method = "POST");
    } else if (action === "delete") {
      url = `${backend}/catogery/delete`;
      method = "DELETE";
    } else if (action === "update") {
      (url = `${backend}/catogery/update`), (method = "PUT");
    }

    const options = {
      method: method,
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id: id,
        image: image,
        name: catogery,
      },
    };
    setLoading(true);
    const response = await axios.request(options);
    setCatogeries(response.data);
    setLoading(false);
  };


  const handleCreate = async () => {

    try {
      setLoading(true);
      const response = await axios.post(`${backend}/createFood`, {
        name: name,
        description: description,
        price: price,
        image: image,
        rating: rating,
        isVeg: isVeg,
        catogery: catogery,
        isPopular: isPopular,
      });
      console.log("Item created:", response.data);
      setLoading(false);
      setVisible(false);
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  const UploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'my_unsigned_preset');

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dozknak00/image/upload`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(progress);
          },
        }
      );
      console.log(response.data.secure_url);
      setImage(response.data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
 }; 

  const handleStatus = async (id, value) => {
      const requst = await axios.put(`${backend}/status`, {
        id: id,
        status: value,
      })

      console.log(requst.data)
  }

  return (
    <>
    {activeTab === "Clients"|| activeTab==="Faq" || activeTab==="Services" || activeTab=== "Corporate" ? (
      <div className="upper">
        <div className="btns">
        <Link to={'/dashboard/add/form'} state={{ tab: activeTab }}>
          <button>Add Data</button>
        </Link>
        </div>
      </div>
      ) : null }
    <div className="container" style={activeTab==='Admins' || activeTab==='Orders' ? {marginTop: '2%'} : {marginTop: '0%'} }>
      
      {createCatogery ? (
        <div className="visible userEd create">
          <h1>
            Create Catogery{" "}
            <IoCloseOutline
              className="icons"
              onClick={() => {
                setVisible(false), setCreateCatogery(false);
              }}
            />
          </h1>
          <form className="form">
          {image !== "" ? (
                  <div className="imgCont">
                    {create ? (
                      <h3>Image uploaded Successfully!!</h3>
                    ) : (
                      <input
                        onChange={UploadImage}
                        style={{ width: "60%", height: "6rem" }}
                        accept="image/*"
                        type="file"
                      />
                    )}
                    <img src={image} alt="uploaded" className="uploadedImage" />
                  </div>
                ) : (
                  <input onChange={UploadImage} accept="image/*" type="file" />
                )}

            <input
              type="text"
              value={catogery}
              placeholder="Catogery Name"
              onChange={(e) => setCatogery(e.target.value)}
            />
            <button onClick={loading ? () => {} : () => getCatogery("create")}>{loading ? "Loading..." : "Create"}</button>
          </form>
        </div>
      ) : (
        ""
      )}
      {visible || create || update || createCatogery ? (
        <>
          <div className="dark"></div>
          {create || (update && activeTab === "Foods") ? (
            <div className="visible">
              <h1>
                {create ? "Create Data" : "Update Data"}
                <IoCloseOutline
                  className="icons"
                  onClick={() => {
                    setCreate(false), setUpdate(false), setVisible(false);
                      setName(""),
                      setPrice(""),
                      setRating(""),
                      setIsVeg(''),
                      setDescription("");
                      setImage(""),
                      setCatogery("");
                  }}
                />
              </h1>
              <form className="form">
                <input
                  type="text"
                  placeholder="Food name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <input
                  type="number"
                  max={5}
                  min={0}
                  placeholder="Rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />

                <select
                  name="isVeg"
                  value={isVeg}
                  onChange={(e) => setIsVeg(e.target.value)}
                >
                  <option value="">Veg?</option>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
                <select
                  name="isPopular"
                  value={isPopular}
                  onChange={(e) => setIsPoupular(e.target.value)}
                >
                  <option value="">Popular</option>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
                <select
                  name="catogery"
                  value={catogery}
                  defaultValue={catogery}
                  onChange={(e) => setCatogery(e.target.value)}
                >
                  <option>Catogery</option>
                  {catogeries.length > 0 &&
                    catogeries.map((catogery) => (
                      <option key={catogery._id} value={catogery.name}>
                        {catogery.name}
                      </option>
                    ))}
                </select>
                {image !== "" ? (
                  <div className="imgCont">
                    {create ? (
                      <h3>Image uploaded Successfully!!</h3>
                    ) : (
                      <input
                        onChange={() => UploadImage(e)}
                        style={{ width: "60%", height: "6rem" }}
                        accept="image/*"
                        type="file"
                      />
                    )}
                    <img src={image} alt="uploaded" className="uploadedImage" />
                  </div>
                ) : (
                  <input onChange={() => UploadImage(e)}
                  accept="image/*" type="file" />
                )}
                <textarea
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                {create && (
                  <button style={loading ? {cursor: 'not-allowed', opacity: 0.5} : {cursor: 'pointer', opacity: 1}} onClick={loading ? () => {} : handleCreate}>
                    {loading ? "Creating..." : "Create Data"}
                  </button>
                )}
                {update && (
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleUpdate(id)}
                  >
                    Update Data
                  </button>
                )}
              </form>
            </div>
          ) : activeTab==="Admins" ? (
              <div className="visible userEd">
                <h1>Update Admin Data <IoCloseOutline
                  className="icons"
                  onClick={() => {
                    setCreate(false), setUpdate(false), setVisible(false);
                    setName(""),
                      setPrice(""),
                      setRating(""),
                      setIsVeg(false),
                      setDescription("");
                  }}
                /></h1>
                <form className="form">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <select 
                    onChange={(e) => setRole(e.target.value)}
                    defaultValue={role}
                    >
                      {/* <option>{role}</option> */}
                      <option value="admin">Admin</option>
                      <option value="superAdmin">Super admin</option>
                    </select>
                    {update && (
                      <button
                        style={{ cursor: "pointer" }}
                        onClick={() => handleUserUpdate(id)}
                      >
                        Update Admin
                      </button>
                    )}
  
                </form>
              </div>
          ) : ""}
        </>
      ) : (
        ""
      )}
      {activeTab === "Foods" ? (
        <div className="add">
          <div className="btns">
            <button
              className="btn"
              onClick={() => {
                setCreate(true), getCatogery("read");
              }}
            >
              Add Food +
            </button>
            <button
              className="btn catogery"
              onClick={() => {
                setCreateCatogery(true);
              }}
            >
              Add Catogery +
            </button>
          </div>
        </div>
      )
      : (
        ""
      )}
      <div className="core">
        <div className="left" style={isLoading ? {width: '100%', padding: '0px 2rem'} : {'textAlign': 'center'}}>
          <div className="top">
            <h1>Dashboard</h1>
            <ul>
              {tabs.map((items) => (
                <li
                  key={items.title}
                  className={activeTab === items.title ? "active" : ""}
                  onClick={() => setActiveTab(items.title)}
                >
                  <items.icon /> {items.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="bottom">
            <div className="logout">
              <button onClick={() => logout()}>
                <IoLogOutOutline style={{ transform: "rotate(180deg)" }} />{" "}
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          {isLoading ? (
            <div style={{ textAlign: "center", position: 'absolute', inset: '40%', fontSize: '6rem'}}>Loading</div>
          ) : error ? (
            <div>Error</div>
          ) : data.length > 0 ? (
            <>
              <div className={`content ${activeTab === "Orders" || activeTab==="Corporate" || activeTab==="Foods" ? "max" : ""}`}>
              <div className="header">
                <table className={`${activeTab === "Orders"||activeTab==="Corporate" ? "maxout" : ""}`} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      {keys.map((key) => (
                        <th key={key}>{key}</th>
                      ))}
                      {activeTab !== "Orders" ? (
                        <div className="empty">
                          <h4>Action</h4>
                        </div>
                      ) : (
                        ""
                      )}
                      {activeTab === "Orders" ? (
                        <div className="empty">
                          <h4>Status</h4>
                        </div>
                      ) : (
                        ""
                      )}
                    </tr>
                  </thead>
                </table>
              </div>

                {/* {visible ? create ?  <Create /> : "" : } */}
                <table className={`${activeTab === "Orders"||activeTab==="Corporate" ? "maxout" : ""}`} cellPadding="0" cellSpacing="0" border="0">
                  <tbody>
                    {/* <Suspense fallback={<div>isLoading</div>}>  */}

                    {isLoading ? (
                      <tr>isLoading</tr>
                    ) : error ? (
                      <tr>Error</tr>
                    ) : data.length > 0 ? (
                      <>
                        {data.map((item, index) => (
                          <>
                            <tr>
                              {Object.keys(item)
                                .filter((key) => key !== "_id" && key !== "__v" && key !== "status")
                                .map((key) => {
                                  return (
                                    <>
                                      <td key={key}>
                                        {
                                          <>
                                            {typeof item[key] === "string" &&
                                            item[key].startsWith("http") &&
                                            (item[key].includes(
                                              "googleusercontent"
                                            ) ||
                                              item[key].includes("res.cloudinary.com")) &&
                                            // item[key].includes("googleusercontent")
                                            item[key].slice(0, 50) ? (
                                              <img
                                                src={item[key]}
                                                alt={`Image ${index}`}
                                                style={{
                                                  width: "35px",
                                                  borderRadius: "50px",
                                                  height: "auto",
                                                }}
                                              />
                                            ) : item[key] === true ? (
                                              "Yes"
                                            ) : item[key] === false ? (
                                              "No"
                                            ) : Array.isArray(item[key]) ? (
                                              <Link to={`/dashboard/items`} state={{arry: item[key], img: item.image, tag: item.tags, ttle: item.title}} style={{textDecoration: 'none', color: 'royalblue'}}>
                                                View
                                              </Link>
                                            ) : (
                                              item[key]
                                            )}
                                          </>
                                        }
                                      </td>
                                    </>
                                  );
                                })}
                              {activeTab !== "Orders" 
                              ? (
                                <div className="empty icons">
                                  {loading ? (
                                    <FaSpinner className="spinner" />
                                  ) : (
                                    <>
                                    {activeTab==="Clients" || activeTab==="Services" || activeTab==="Faq" ? (<Link to={'/dashboard/edit'} state={{tab: activeTab, id: item._id, image: item.image, name: item.name, question: item.question, answer: item.answer, catogery: item.catogery}}>                                    <FaRegEdit
                                      className="edit"
                                      size={18}
                                   /></Link>) : (
                                    <FaRegEdit
                                      className="edit"
                                      size={18}
                                      onClick={() => {
                                        {
                                          setVisible(true);
                                          setUpdate(true);
                                          setAdmin(true);
                                          update
                                            ? console.log("nalla")
                                            : handleEdit("edit", item._id),
                                            setId(item._id);
                                        }
                                      }}
                                    />
                                    )}
                                    <FaRegTrashAlt
                                      className="delete"
                                      size={18}
                                      onClick={() => {
                                        handleEdit("delete", item._id);
                                      }}
                                    />
                                  </>
                                  ) 
                                  }
                                </div>
                              ) : (
                                <></>
                              )}
                              {activeTab === "Orders" && (
                                <select 
                                onChange={(e) => {handleStatus(item._id, e.target.value)}}
                                defaultValue={item.status || 'status'}
                                >
                                <option value="ordered">Ordered</option>
                                <option value="contact">Contact</option>
                                <option value="approved">Approved</option>
                                <option value="notApproved">Not Approved</option>
                                <option value="paymentCollected">Payment collected</option>
                                <option value="completed">Completed</option>
                              </select>)
                              }
                            </tr>
                          </>
                        ))}
                      </>
                    ) : (
                      "No Data"
                    )}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            "No Data"
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
