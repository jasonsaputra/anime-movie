"use client"

import React from 'react';
import Image from "next/image";

const Banner = ({ data }) => {
  console.log("Anime Data in Banner:", data);

  return (
    <div className="banner-container" style={{ position: 'relative', height: '500px', backgroundColor: '#000' }}>
      <img
        src={data?.images.webp.large_image_url}
        alt={data?.images.jpg.large_image_url}
        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
      />
      <div className="banner-content"
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          zIndex: 2,
          color: '#fff',
          maxWidth: '600px',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', colo: "#fff" }}>{data?.title}</h1>
        <div style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
          <span
            style={{
              padding: '5px 10px',
              backgroundColor: '#444',
              borderRadius: '5px',
              fontSize: '0.8rem',
            }}
          >
            ⭐ 8.84
          </span>
          <span
            style={{
              padding: '5px 10px',
              backgroundColor: '#444',
              borderRadius: '5px',
              fontSize: '0.8rem',
            }}
          >
            PG-13
          </span>
          <span
            style={{
              padding: '5px 10px',
              backgroundColor: '#444',
              borderRadius: '5px',
              fontSize: '0.8rem',
            }}
          >
            Award Winning
          </span>
          <span
            style={{
              padding: '5px 10px',
              backgroundColor: '#444',
              borderRadius: '5px',
              fontSize: '0.8rem',
            }}
          >
            Drama
          </span>
          <span
            style={{
              padding: '5px 10px',
              backgroundColor: '#444',
              borderRadius: '5px',
              fontSize: '0.8rem',
            }}
          >
            Supernatural
          </span>
        </div>
        <p>
          Mitsuha Miyamizu, a high school girl in a rural town, and Taki Tachibana, a high school boy in Tokyo, wake up in each other's bodies one day. They try to find each other and learn more about each other's lives.
        </p>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#e50914',
            border: 'none',
            borderRadius: '5px',
            color: '#fff',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Read More
        </button>
      </div>
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
          zIndex: 1,
        }}
      ></div>
    </div>
  );
};

export default Banner;
