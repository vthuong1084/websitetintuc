import React, { useState, useEffect }  from 'react';
import {getAPI , saveFileAPI} from '../../../services/api';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import { useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import '../../../assets/bootstrap-5.3.1-dist/css/bootstrap.min.css';
import ReactQuill, {Quill} from 'react-quill';
import '../../../../node_modules/react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';

const svClass = "NsoPostService";
const svName = "SVNew";

const Post = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [shortdescription, setShortdescription] = useState('');
    const [category, setCategory] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [content01, setContent01] = useState('');
    const [categories, setCategories] = useState([]);
    const { id } = useParams();
  
    // const api = {"svClass" : "TpyCategoryService", "svName" : "SVList"}
    // useEffect(() => {
    //   const req_categories = async () => {
    //     const response = await getAPI(api);
    //     setCategories(response.data);
    //   }
  
    //   req_categories();
    // },[])
    useEffect(() => {
        const fetchData = async () => {

        const api = {"svClass" : "TpyCategoryService", "svName" : "SVList"}
        const response = await getAPI(api);
        setCategories(response.data);
        const getUser = { "svClass": svClass, "svName": "SVGet" , postDTO : {"id": id}};
          try {
            const response = await getAPI(getUser);
            console.log(response.data.avatar);
             // setData(response.data);
              setTitle(response.data.title);
              setShortdescription(response.data.shortdescription);
              setCategory(response.data.category);
              setThumbnail(response.data.thumbnail);
              setContent01(response.data.content01);
             
          } catch (error) {

          }
        }
        fetchData();
      }, []); 
    const handleChange = () =>{
        console.log("submit");
        const selectedFile = document.getElementById('input-file').files[0];
       
        if (selectedFile) {
        saveFileAPI(selectedFile).then(saveFileResponse => {
             setThumbnail(saveFileResponse.data); 
            console.log("path: " + saveFileResponse.data);
            const api ={"svClass": svClass, "svName": "SVMod", "postDTO" : {"id": id,title,"thumbnail": saveFileResponse.data,"status01": "1",shortdescription,content01,category }};
            console.log("api: " , api);
            getAPI(api).then(getAPIResponse => {
                console.log("user: ", getAPIResponse.data);
                navigate(`/admin/posts`);
            }).catch(getAPIError => {
                console.error("Error calling getAPI: ", getAPIError);
            });
        }).catch(saveFileError => {
            console.error("Error calling saveFileAPI: ", saveFileError);
        });
    } else {
        const api = {"svClass": svClass, "svName": svName, "postDTO" : {"id": id,title,"status01": "1","thumbnail": thumbnail,shortdescription,content01 ,category}};
        console.log("api: " , api);
        getAPI(api).then(getAPIResponse => {
            console.log("user: ", getAPIResponse.data);
            navigate(`/admin/posts`);
        }).catch(getAPIError => {
            console.error("Error calling getAPI: ", getAPIError);
        });

    }
  }


    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
         const thumbnail = URL.createObjectURL(selectedFile);
          setThumbnail(thumbnail);
          console.log(thumbnail);
        }
      };

     
  return (
    <div className="container">
    <div className="main-body">
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                            <img src={thumbnail} onChange={(e) => setThumbnail()} alt="img" className="rounded-circle p-1 bg-primary" width="210"/>
                            <div className="mt-3">
                                <h4>{title}</h4>
                                <input type='file'
                                onChange={handleFileChange}
                                id='input-file'
                                accept="image/*"
                                className="btn btn-primary"
                                style={{
                                width: '36%',
                                backgroundColor: '#4caf50',
                                color: '#fff',
                                }}></input> 
                                
                            </div>
                        </div>
                        <hr className="my-4"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-body">

                    <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Title</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" value={title}  onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                        </div>

                       <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Category</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                style={{ width:'100%' , height: '70%'}}
                                >
                                {
                                categories.map((item) => (
                                    <MenuItem value={item.id}>{item.name}</MenuItem>
                                ))
                                }
                            </Select>
                           </div>
                        </div>
                    
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Shortdescription</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" value={shortdescription}  onChange={(e) => setShortdescription(e.target.value)}/>
                            </div>
                        </div>
                    </div> 
                
                             
                </div>
                
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="d-flex align-items-center mb-3">Content</h5>
                               
                                    <FormGroup controlId="editor">
                                        <ReactQuill
                                            value={content01}
                                            onChange={(value) => setContent01(value)}
                                            placeholder={"Enter new content here..."}
                                            style={{height: "300px"}}
                                        />
                                        </FormGroup>
                            </div>
                            <div className="row">
                            <div className="col-sm-9 text-secondary">
                                <input type="button" className="btn btn-primary px-2" value="Save"  style={{width: 60, marginTop: '10%', marginLeft: '60%'}}   onClick={() => handleChange()} />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
};
export default Post