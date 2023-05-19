import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2% 5%;
  padding: 20px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  gap: 10%;

  .movie-detail {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5%;
  }
  
  .poster-content {
    flex-basis: 30%;
    max-width: 30%;
  }

  .movie-content {
    flex-basis: 60%;
    max-width: 60%;
  }

  .detail-buttons {
    display: flex;
    gap: 10px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  max-width: 100%;
  border-radius: 10px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 5px;
`;

export const Tagline = styled.p`
  font-size: 18px;
  color: #888;
  margin-bottom: 10px;
`;

export const Overview = styled.p`
  margin-bottom: 20px;
`;

export const Metadata = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const OfficialWebsite = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const RecommendationsContainer = styled.div`
  width: 100%;
  overflow: scroll;
`