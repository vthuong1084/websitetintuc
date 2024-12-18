import * as React from "react";
import "./datatables.css";
import { DataGrid , TableRow, TableCell} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAPI } from "../../services/api";

const Datatable = ({ name, userRows , userColumns = [] }) => {
    const [data, setData] = useState(userRows);
    const navigate = useNavigate();
    let svClass;

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
        if(name === "Role"){
           svClass = "AutRoleService"; 
           const api = { "svClass": svClass, "svName": "SVDel", "roleDTO": { "id": id } };
           console.log(api)
           getAPI(api)
             .then(response => {
               const updatedData = data.filter(user => user.id !== id);
               setData(updatedData);
               console.log(updatedData);
               navigate("/admin")
             })
             .catch(error => {
               console.error('Error deleting user:', error);
             });

        }else if(name === "Category"){
            svClass = "TpyCategoryService";
            const api = { "svClass": svClass, "svName": "SVDel", "categoryDTO": { "id": id } };
            console.log(api)
            getAPI(api)
              .then(response => {
                const updatedData = data.filter(user => user.id !== id);
                setData(updatedData);
                console.log(updatedData);
               navigate("/admin")
              })
              .catch(error => {
                console.error('Error deleting user:', error);
              });
        }
       
    };
    const handleView = (id) => {
        if(name === "Role"){
            navigate(`/admin/role/${id}`)
        }else if(name === "Category"){
            navigate(`/admin/category/${id}`)
        }
        
    };
    
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                       
                            <div className="viewButton"  onClick={() => handleView(params.row.id)}>View</div>
                        
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <p>{name}</p>
            <DataGrid
                className="datagrid"
                columns={userColumns.concat(actionColumn)}
                rows={userRows}
                initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;

