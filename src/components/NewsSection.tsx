import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
interface dataInit {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
const NewsSection: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<dataInit[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async function (): Promise<void> {
    await fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response: any) => response.json())
      .then((data: dataInit[]) => setData(data))
      .catch((err: string) => {
        console.log(err);
      });
  };

  return (
    <Box sx={{ width: '100%', borderBottom: '1px solid #ddd' }}>
      <section
        style={{
          padding: '20px',
          margin: '0 100px',
          backgroundColor: '#fff',
        }}
      >
        <Box sx={{ marginBottom: '50px' }}>
          <Typography
            variant="h6"
            sx={{ color: '#007bff', fontWeight: 'bold' }}
          >
            NEWS & ARTICLE
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: '4rem',
              color: '#000',
              fontWeight: 'bold',
              
            }}
          >
            Blog & Article
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          {data
            .filter((_, i) => i === 0)
            .map((some: dataInit, index: number) => (
              <Box
                sx={{
                  flex: 1,
                  maxWidth: '585px',
                  width: '100%',
                  cursor: 'pointer',
                }}
                key={some.id}
                onClick={() => navigate(`/${some.id}`, { state: some })}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '330px',
                    backgroundColor: '#ddd',
                    marginBottom: '10px',
                    backgroundImage: `url(${some.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '10px',
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.875rem',
                    color: '#888',
                    marginBottom: '5px',
                  }}
                >
                  November 12, 2024
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: '1.25rem',
                    color: '#333',
                    fontWeight: 'bold',
                    marginBottom: '5px',
                  }}
                >
                  {some.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: '1rem', color: '#555' }}
                >
                  This is a brief description of the main article. It covers
                  some essential points about the topic discussed.
                </Typography>
              </Box>
            ))}

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              flexBasis: '40%',
            }}
          >
            {data
              .filter((_, index) => index >= 1 && index < 4)
              .map((some: dataInit, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate(`/${some.id}`, { state: some })}
                >
                  <Box
                    sx={{
                      width: '400px',
                      height: '160px',
                      backgroundColor: '#ddd',
                      backgroundImage: `url(${some.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      marginRight: '20px',
                      borderRadius: '10px',
                    }}
                  ></Box>
                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '0.875rem',
                        color: '#888',
                        marginBottom: '5px',
                      }}
                    >
                      November 11, 2024
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: '1rem',
                        color: '#333',
                        fontWeight: 'bold',
                      }}
                    >
                      {some.title}
                    </Typography>
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>
      </section>
    </Box>
  );
};

export default NewsSection;
