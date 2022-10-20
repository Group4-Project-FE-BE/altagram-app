import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";

function EditProfile() {
  const urlApi = "https://virtserver.swaggerhub.com/Group4-Project-FE-BE/openapi_project2_team4/1.0.0/users";
  const [profiles, setProfile] = useState([]);
  const navigate = useNavigate();

  
  const getProfile = async () => {
    await axios
      .get(urlApi, {
        headers: { Authorization: "Bearer " },
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleEdit = (data) => {
    navigate(`/editprofile/${data.id}`, {
      state: {
        id: data.id,
        username: data.username,
        name: {
          firstname: data.name.firstname,
          lastname: data.name.lastname,
        },
        email: data.email,
        phone: data.phone,
        gender: {
          female: data.gender.female,
          male: data.gender.male,
        },
        location: data.location,
        bio: data.bio,
        password: {
          newpassword: data.password.newpassword,
          confirmpassword: data.password.confirmpassword,
        },
      },
    });
  };
  const handleCreate = (data) => {
    navigate(`/create ${data.id}`, {
      state: {
        id: data.id,
      },
    });
  };

  const handleUser = (data) => {
    navigate(`/user/${data.id}`, {
      state: {
        id: data.id,
      },
    });
  };
  const handleRemove = (data) => {};

  return (
    <>
      <section>
        <Container className="my-5 px-auto rounded border-main justify-center align-items-center">
          <div className="row mx-auto">
            <Profile
              username={profiles.username}
              key={profiles.id}
              onClickEdit={() => handleEdit(profiles)}
              onClickCreate={() => handleCreate(profiles)}
              onClickuser={() => handleUser(profiles)}
              onClickRemove={() => handleRemove(profiles)}
            />
            ;
          </div>
        </Container>
      </section>
    </>
  );
}

export default EditProfile;
