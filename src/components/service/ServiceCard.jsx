import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

import styles from "../project/ProjectCard.module.css";

const ServiceCard = ({ serviceData, handleRemove }) => {
  function remove(e) {
    e.preventDefault()
    handleRemove(serviceData.id, serviceData.cost)
  }
  
  return (
    <div className={styles.project_card}>
      <h4>{serviceData.name}</h4>
      <p>
        <span>Custo total:</span> R${serviceData.cost}
      </p>
      <p>{serviceData.description}</p>
      <div className={styles.project_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill/>
          Excluir
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
