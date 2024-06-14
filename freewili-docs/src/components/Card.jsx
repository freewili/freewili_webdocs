// src/components/Card.jsx
import React from 'react';
import styles from './Card.module.css'; // Assuming you have a CSS module for styling

const Card = ({ title, description, link, imageUrl }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card}>
    <div className={styles.cardContent}>
      <div className={styles.cardHeader}>
        {imageUrl && <img src={imageUrl} alt={title} className={styles.cardImage} />}
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  </a>
);

export default Card;
