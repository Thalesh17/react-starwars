import React from "react";
import { StarwarType } from "../../types/starwar";
import "./styles.css";

type StarwarProps = {
  starwar: StarwarType;
};
enum genderEnum {
  male = "Masculino",
  female = "Feminino"
}

export const Starwar: React.FC<StarwarProps> = ({ starwar }) => {
  const getDescriptionGender = (gender: string) => {
    return genderEnum[gender] || "Não possui";
  };

  return (
    <div className="starwar-user">
      <h3 style={{ color: starwar.eye_color }} className="starwar-name">
        {starwar.name}
      </h3>
      <div className="starwar-language">
        <h5>{getDescriptionGender(starwar.gender)}</h5>
      </div>
      <div className="starwar-info">
        <div className="starwar-desc">
          <h5>Altura:</h5>
          <h5>{starwar.height}</h5>
        </div>
        <div className="starwar-desc">
          <h5>Massa:</h5>
          <h5> {starwar.mass}</h5>
        </div>
        <div className="starwar-desc">
          <h5>Cor dos olhos</h5>
          <h5>{starwar.eye_color}</h5>
        </div>
      </div>
      <small className="update-starwar">Criado em {starwar.created}</small>
      <div className="buttons">
        <button className="primary">Remover</button>
      </div>
    </div>
  );
};
