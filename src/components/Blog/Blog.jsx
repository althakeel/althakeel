import React, { useRef, useState, useEffect } from 'react';

const Blog = () => {
  const posts = [
    {
      id: 'post1',
      title: 'Inside al Thakeel: Building a Multi-Brand Ecosystem That Scales',
      description:
        'Explore how al Thakeel manages and nurtures multiple unique brands under one umbrella. This blog post highlights how we ensure quality, innovation, and customer satisfaction while scaling across different e-commerce platforms.',
      image:
        'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748868061/1_z1xjol.webp',
    },
    {
      id: 'post2',
      title: 'How Your Brand Can Grow with al Thakeel: Partner With Us Today',
      description:
        'Looking to expand your reach? Learn how businesses can collaborate with al Thakeel through our "Partner With Us" program. From logistics support to digital marketing, we help brands thrive in competitive online markets.',
      image:
        'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748868063/2_vqwpfa.webp',
    },
    {
      id: 'post3',
      title: 'The Power of Diversified Selling: Why al Thakeel Chooses Multi-Platform E-Commerce',
      description:
        'Discover why al Thakeel embraces a multi-platform strategy for online selling. We discuss the benefits of diversification, from reaching wider audiences to reducing risk, and how this strategy leads to long-term success.',
      image:
        'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748868070/3_roud0b.webp',
    },
    {
      id: 'post4',
      title: 'Success Stories: Brands That Grew with al Thakeel',
      description:
        'See how small and mid-sized businesses have scaled up through their partnership with al Thakeel. This post shares real examples of growth in sales, visibility, and market reach.',
      image:
        'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748868083/4_b7y8ft.webp',
    },
    {
      id: 'post5',
      title: 'What Makes al Thakeel a Unique Partner for Your Business?',
      description:
        'Uncover what sets al Thakeel apart as a strategic business partner. We go beyond distribution—offering expertise in brand positioning, platform optimization, and customer engagement.',
      image:
        'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748868091/5_u1wvxc.webp',
    },
    {
      id: 'post6',
      title: 'From Concept to Customer: How al Thakeel Helps Brands Launch Fast',
      description:
        'Launching a product doesn’t have to take months. Learn how al Thakeel accelerates the go-to-market journey for new and existing brands with fast-track tools, platform access, and operational support.',
      image:
        'https://res.cloudinary.com/dnpwsutir/image/upload/v1748337581/Business_man_is_making_a_speech_in_front_of_a_big_audience_at_a_conference_hall___Premium_AI-generated_image_ur4j3y.jpg',
    },
  ];
  

  const refs = useRef(posts.reduce((acc, post) => {
    acc[post.id] = React.createRef();
    return acc;
  }, {}));

  const [activePost, setActivePost] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const scrollToPost = (id) => {
    refs.current[id].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      style={{
        background: '#f5f5f5',
        fontFamily: 'Poppins, sans-serif',
        padding: isMobile ? '20px 10px' : '40px 20px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '30px',
          boxSizing: 'border-box',
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: isMobile ? '100%' : '250px',
            position: isMobile ? 'relative' : 'sticky',
            top: '20px',
            background: '#fff',
            padding: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            borderRadius: '8px',
            boxSizing: 'border-box',
          }}
        >
          <h3 style={{ marginBottom: '20px', color: '#000', fontSize: '18px' }}>Blog Titles</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#333' }}>
            {posts.map((post) => (
              <li key={post.id} style={{ marginBottom: '12px' }}>
                <button
                  onClick={() => scrollToPost(post.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    color: '#0077b6',
                    textAlign: 'left',
                    fontSize: isMobile ? '14px' : 'inherit',
                    width: '100%',
                  }}
                >
                  {post.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Blog List */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {posts.map((post) => (
            <div
              key={post.id}
              ref={refs.current[post.id]}
              onClick={() => setActivePost(post)}
              style={{
                background: '#fff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '20px',
                alignItems: isMobile ? 'center' : 'flex-start',
                boxSizing: 'border-box',
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                style={{
                  width: isMobile ? '100%' : '160px',
                  height: isMobile ? 'auto' : '100px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  flexShrink: 0,
                }}
              />
              <div>
                <h2 style={{ marginBottom: '10px', fontSize: isMobile ? '16px' : '18px' }}>{post.title}</h2>
                <p style={{ fontSize: '14px', color: '#555' }}>{post.description.substring(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activePost && (
        <div
          onClick={() => setActivePost(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            zIndex: 9999,
            boxSizing: 'border-box',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '10px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '20px',
              alignItems: isMobile ? 'center' : 'flex-start',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={activePost.image}
              alt={activePost.title}
              style={{
                width: isMobile ? '100%' : '300px',
                height: 'auto',
                borderRadius: '8px',
                objectFit: 'cover',
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              <h2 style={{ marginTop: 0, fontSize: isMobile ? '18px' : '22px' }}>{activePost.title}</h2>
              <p style={{ fontSize: '14px', color: '#333', marginTop: '10px' }}>{activePost.description}</p>
              <button
                onClick={() => setActivePost(null)}
                style={{
                  marginTop: '20px',
                  padding: '10px 20px',
                  background: '#0077b6',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  width: isMobile ? '100%' : 'auto',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;