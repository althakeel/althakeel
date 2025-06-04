import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function QuiltedImageList() {
  return (
    <Box sx={{ mt: 7, mb: 9 }}> {/* Equal spacing top and bottom */}
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom
        sx={{mb:5}}
      >
        Our Brands Portfolio
      </Typography>

      <ImageList
        sx={{
          width: '100%',
          maxWidth: 1200,
          mx: 'auto', // centers the list
          gap: 8, // consistent gaps between images
        }}
        variant="quilted"
        cols={4}
        rowHeight={150}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              srcSet={`${item.img}?w=${150 * (item.cols || 1)}&h=${150 * (item.rows || 1)}&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=${150 * (item.cols || 1)}&h=${150 * (item.rows || 1)}&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                // borderRadius: 4
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748861813/1_morb4h.webp',
    title: 'Leather Jackets',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748861830/3_ntjgre.webp',
    title: 'Wrist Watch',
  },
  {
    img: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748861890/9_xa2r8a.webp',
    title: 'Clothes Rack',
  },
  {
    img: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748861876/8_vahllc.webp',
    title: 'Jumping Pose',
    cols: 2,
  },
  {
    img: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748861816/2_mqfiwc.webp',
    title: 'Luxury Watch',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748861835/4_cnp8ej.webp',
    title: 'Fashion Shopper',
  },
  {
    img: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748861839/5_q33pxz.webp',
    title: 'Shoe Shop',
  },
  {
    img: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748861853/7_vkjtu8.webp',
    title: 'Perfume',
  },
  {
    img: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748861844/6_agcutd.webp',
    title: 'Sneakers',
  },
];
