import React, {useContext, useEffect, useState, useMemo } from "react";
import ButtonAppBar from '../../components/Header';
import spinnerLoading from '../../assets/spinner.gif';
import './styles.css'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";

const AuhtorPage = () => {
  const [listAuthors, setListAuthors] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await (
      await fetch("https://fakerapi.it/api/v1/texts?_quantity=2&_characters=150")
    ).json();
    setListAuthors(response);
    setLoading(false);
  };
  
  if(loading){
    return (
      <>
        <ButtonAppBar />
        <div className="loading"><img src={spinnerLoading} /></div>
      </>
    )
  }

  const useStyles = makeStyles(()=>({
    link:{
      textDecoration:"none",
      color: "blue",
      fontSize: "20px",
    },
    icon:{
      color: "white"
    }
  }));
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
       <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}z>
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact">Contact</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about">Faq</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>

      <div className="container" id="table-authors">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Autor</th>
              <th>Content</th>
            </tr>
          </thead>

          <tbody>
            {listAuthors.data?.map((item , index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
};

export default AuhtorPage;
