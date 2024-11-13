import React from 'react';
import { Box, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

const PostInformation: React.FC = () => {
  const location = useLocation();
  const boxData = location.state;

  return (
    <Box
      sx={{
        padding: '40px 100px',
        backgroundColor: '#fff',
        width: '70%',
        margin: '0 auto',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: '#888',
          textAlign: 'center',
          marginBottom: '10px',
          fontSize: '0.875rem',
        }}
      >
        November 12, 2024
      </Typography>

      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '50px',
        }}
      >
        {boxData.title}
      </Typography>
      <Box
        sx={{
          position: 'fixed',
          left: '100px',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: '20px',
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: '#333', fontWeight: 'bold', marginBottom: '10px' }}
          >
            Share
          </Typography>
          <Facebook
            sx={{
              color: '#3b5998',
              fontSize: '30px',
              marginBottom: '10px',
              cursor: 'pointer',
            }}
          />
          <Twitter
            sx={{
              color: '#1da1f2',
              fontSize: '30px',
              marginBottom: '10px',
              cursor: 'pointer',
            }}
          />
          <Instagram
            sx={{
              color: '#e1306c',
              fontSize: '30px',
              marginBottom: '10px',
              cursor: 'pointer',
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '507px',
          backgroundColor: '#ddd',
          marginBottom: '50px',
          backgroundImage: `url(${boxData.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Typography
        variant="h6"
        sx={{
          color: '#333',
          fontWeight: 'bold',
          marginBottom: '40px',
          padding: '0 40px',
        }}
      >
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#666',
          marginBottom: '40px',
          padding: '0 40px',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo
        aliquid cupiditate quaerat maxime. Dolor deserunt placeat inventore et
        facilis, laudantium est at tenetur explicabo rem accusamus eligendi!
        Eum, ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis, accusamus velit. Dolorem dolor voluptates quasi suscipit!
        Officiis atque minima delectus. Repudiandae, nesciunt! Velit, eligendi?
        Soluta accusantium libero repellat a nam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quae, officia? Ipsa, deleniti doloribus.
        Ullam cum repellendus assumenda odio explicabo, inventore ea voluptatum
        laudantium nam perspiciatis sint qui distinctio et quo. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ipsa est atque repellat.
        Beatae ad aperiam, deserunt vero commodi debitis, sit, hic corrupti
        optio ut iste est numquam voluptates aspernatur possimus! Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Dignissimos quo eligendi
        assumenda necessitatibus, excepturi illum temporibus. Iure unde
        architecto, error quisquam vitae esse tempore quidem optio laudantium,
        impedit doloribus asperiores!
      </Typography>
      <Box
        sx={{
          maxWidth: '100%',
          margin: '0 auto',
          height: '100px',
          backgroundColor: '#B1E5FC',
          color: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.0rem',
          marginBottom: '40px',
          alignSelf: 'center',
          padding: '0 25px',
          fontStyle: 'oblique',
          fontWeight: 'bold',
        }}
      >
        “There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour”
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: '#666',
          marginBottom: '100px',
          padding: '0 40px',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo
        aliquid cupiditate quaerat maxime. Dolor deserunt placeat inventore et
        facilis, laudantium est at tenetur explicabo rem accusamus eligendi!
        Eum, ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis, accusamus velit. Dolorem dolor voluptates quasi suscipit!
        Officiis atque minima delectus. Repudiandae, nesciunt! Velit, eligendi?
        Soluta accusantium libero repellat a nam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quae, officia? Ipsa, deleniti doloribus.
        Ullam cum repellendus assumenda odio explicabo, inventore ea voluptatum
        laudantium nam perspiciatis sint qui distinctio et quo. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ipsa est atque repellat.
        Beatae ad aperiam, deserunt vero commodi debitis, sit, hic corrupti
        optio ut iste est numquam voluptates aspernatur possimus! Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Dignissimos quo eligendi
        assumenda necessitatibus, excepturi illum temporibus. Iure unde
        architecto, error quisquam vitae esse tempore quidem optio laudantium,
        impedit doloribus asperiores!
      </Typography>
    </Box>
  );
};

export default PostInformation;
