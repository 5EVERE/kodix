import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
interface dataInit {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
const NewPostSection: React.FC = () => {
  const [data, setData] = useState<dataInit[]>([]);
  const [moreData, setMoreData] = useState<boolean>(false);
  const navigate = useNavigate();
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

  const showMoreData = function (): void {
    setMoreData(true);
  };
  const hideMoreData = function (): void {
    setMoreData(false);
  };

  return (
    <Box
      sx={{
        width: '100%',
        borderBottom: '1px solid #ddd',
        paddingBottom: '80px',
      }}
    >
      <section
        style={{ padding: '20px', margin: '0 100px', backgroundColor: '#fff' }}
      >
        <Box sx={{ marginBottom: '50px' }}>
          <Typography
            variant="h2"
            sx={{ fontSize: '4rem', color: '#000', fontWeight: 'bold' }}
          >
            New Post
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: '1rem', color: '#888', marginTop: '30px' }}
          >
            Velit officia consequat duis enim velit mollit.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {data
            .filter((_, index) => (!moreData ? index < 10 : index < 30))
            .map((some: dataInit, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    maxWidth: '90%',
                    marginBottom: '40px',
                  }}
                  key={some.id}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '160px',
                      maxWidth: '1000px',
                      backgroundColor: '#ddd',
                      marginBottom: '10px',
                      backgroundImage: `url(${some.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      cursor: 'pointer',
                      borderRadius: '10px',
                    }}
                    onClick={() => navigate(`/${some.id}`, { state: some })}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.875rem',
                      color: '#888',
                      marginBottom: '5px',
                    }}
                  >
                    November 10, 2024
                  </Typography>
                  <Typography
                    variant="h6"
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
                    {some.title + some.title + some.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
        </Grid>

        <Box
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
        >
          {!moreData ? (
            <Button
              variant="contained"
              sx={{
                width: '200px',
                height: '48px',
                backgroundColor: '#f2f4fc',
                color: '#007bff',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#ccc',
                },
              }}
              onClick={showMoreData}
            >
              Load more posts
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                width: '200px',
                height: '48px',
                backgroundColor: '#f2f4fc',
                color: '#007bff',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#ccc',
                },
              }}
              onClick={hideMoreData}
            >
              Back
            </Button>
          )}
        </Box>
      </section>
    </Box>
  );
};

export default NewPostSection;
