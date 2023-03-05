import styled from '@emotion/styled';

export const ImageGal = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ImageIt = styled.li`
  margin-top: 20px;
  border-radius: 2px;
  :hover {
    transform: scale(1.3);
    cursor: zoom-in;
  }
`;

export const ImageGalleryItem_image = styled.img`
  box-shadow: 0 8px 10px 2px rgb(0 0 0 / 25%);
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
