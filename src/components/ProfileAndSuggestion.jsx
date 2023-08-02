import { useFetchMain } from "../hooks/useFetchMain";

import profile from "../assets/profile1.jpg";

import "../styles/profile.css";

function ProfileAndSuggestion() {
  const { data } = useFetchMain();

  return (
    <div className="container_profile">
      <div className="container_profile_p">
        <img src={profile} alt="Profile" />
        <div className="profile_data">
          <h1>brand_liz.888</h1>
          <p>Brand Vargas Lis</p>
        </div>
        <p className="change">Cambiar</p>
      </div>
      <div className="suggestion">
        <h2>Sugerencias para ti</h2>
        <p className="todos">Ver todo</p>
      </div>
      {data &&
        data.splice(0, 6).map((story, index) => {
          return (
            <div key={index} className="container_profile_info">
              <img src={story.image} alt={story.name} />
              <div className="container_profile_data">
                <h1>{story.name}</h1>
                <p>Rick Sanchez y 2 más siguen esta cuenta</p>
              </div>
              <p className="seguir">Seguir</p>
            </div>
          );
        })}
    </div>
  );
}

export default ProfileAndSuggestion;
