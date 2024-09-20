import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

function Client({backend}) {
    const location = useLocation();
    const {tab} = location.state || "";

    const [key, setKey] = useState('');
    const [loading, setLoading] = useState(false);

    // For Faq,
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [catogery, setCatogery] = useState('');

    // For Client || Services 
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
  
    // async function UploadImg(e) {
    //     const files = e.target.files;
    //     const file = files[0];
    
    //     if (file && file.type.startsWith("image/")) {
    //       setKey(file);
    //     } else {
    //       setImage("couldn't upload, please upload image!");
    //     }
    //   }

        const uploadImage = async (e) => {
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
            setImageUrl(response.data.secure_url);
          } catch (error) {
            console.error('Error uploading image:', error);
          }
       };     

// const CldImage = (image) => {
//   const cld = new Cloudinary({ cloud: { cloudName: 'dozknak00' } });
  
//   // Use this sample image or upload your own via the Media Explorer
//   const img = cld
//         .image('image')
//         .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
//         .quality('auto')
//         .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

//   return (<AdvancedImage cldImg={img}/>);
// };


//       async function PostImage(string) {
//         let url = `https://api.imgbb.com/1/upload?key=205b43fdaf7fa938b57fa8ab143d8685`;
//         const data = new FormData();
//         data.append("image", string);
//         try {
//           const response = await axios.post(url, data);
//           if (response.status !== 200) {
//             console.log("error");
//             return;
//           }
//           console.log(response.data.data.url);
//           setImage(response.data.data.url);
//         } catch {
//           console.log("error");
//         }
//       }
    
//       if (key) {
//         PostImage(key);
//       }

    const uploadFaq = async () => {
        try {
          setLoading(true);
          const response = await axios.post(`${backend}/createFaq`, {
            question: question,
            answer: answer,
            catogery: catogery,
          });
          console.log(response);
          if (response.statusText === 'OK') {
              setLoading(false);
            window.history.back();
          }
        } catch (error) {
          console.log(error);
        }
      };

      const uploadServices = async () => {
        try {
          setLoading(true);
          const response = await axios.post(`${backend}/createServices`, {
            name: name,
            image: imageUrl
          });
          console.log(response);
          if (response.statusText === 'OK') {
              setLoading(false);
            window.history.back();
          }
        } catch (error) {
          console.log(error);
        }
      };

      const uploadClient = async () => {
        try {
          setLoading(true);
          const response = await axios.post(`${backend}/createClient`, {
            name: name,
            image: imageUrl
          });
          console.log(response);
          if (response.statusText === 'OK') {
              setLoading(false);
            window.history.back();
          }
        } catch (error) {
          console.log(error);
        }
      };
    
    const handleClick = async (e) => {
        e.preventDefault();
        if (loading) return;

        if (tab === "Faq") {
            uploadFaq();
        }
        else if (tab === "Clients") {
            uploadClient();
        }
        else if (tab === "Services") {
            uploadServices();
        }
    }
  return (
    <div className='main'>
    <div className="back glow" onClick={() => window.history.back()}>Back</div>
    <h1>Add Data for {tab}</h1>
    <div className="center">
        <form>
    {tab === "Services" && (<>
        <input type="text" placeholder='Name' required value={name} onChange={(e) => setName(e.target.value)}/>
            {imageUrl !== "" ? 
            (
                <div className="imgCont">
                    <img src={imageUrl} alt="uploaded" className="uploadedImage" />
                        <h3>Image uploaded Successfully!!</h3>
                  </div>
                ) : ( 
                    <input
                    onChange={(e) => uploadImage(e)} 
                    accept="image/*" type="file" />
                )}
          {uploadProgress > 0 && <progress value={uploadProgress} color='orange' max="100">{uploadProgress}%</progress>}
        </>)}
      {tab === "Clients" && (<>
        <input type="text" placeholder='Name' required value={name} onChange={(e) => setName(e.target.value)}/>
        {imageUrl !== "" ? 
            (
                <div className="imgCont">
                    <img src={imageUrl} alt="uploaded" className="uploadedImage" />
                        <h3>Image uploaded Successfully!!</h3>
                  </div>
                ) : ( 
                    <input
                    onChange={(e) => uploadImage(e)} 
                    accept="image/*" type="file" />
                )}
          {uploadProgress > 0 && <progress value={uploadProgress} color='orange' max="100">{uploadProgress}%</progress>}
      </>
      )}
            {tab==="Faq" && (
                <>
                <input type="text" placeholder='Question' required value={question} onChange={(e) => setQuestion(e.target.value)}/>
                <input type="text" placeholder='Answer' required value={answer} onChange={(e) => setAnswer(e.target.value)}/>
               <select
               required
               value={catogery}
               onChange={(e) => setCatogery(e.target.value)}
               >
                <option value={""}>Please select catogery</option>
                <option value={"catering"}>Catering</option>
                <option value={"decor"}>Decor</option>
               </select>
            </>)}
            <button className="glow"
            onClick={(e) => handleClick(e)}
            >
                {loading ? "Uploading..." : "Add Data"}
            </button>
        </form>
    </div>
</div>
  )
}

export default Client