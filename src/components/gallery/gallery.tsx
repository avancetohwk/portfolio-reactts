import * as React from 'react';
import Masonry from 'react-masonry-component';
import useFirestore from '../../hooks/useFirestore';
import './gallery.scss'


const imagesLoadedOptions = { background: '.my-bg-image-el' }

const PHOTOS = [
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/06/14/03/09/women-5296386_960_720.jpg",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/06/14/11/23/wanderer-5297457_960_720.jpg",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/06/18/18/53/the-cliffs-5314651_960_720.jpg",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/06/19/09/16/fantasy-5316369_960_720.jpg",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/06/18/09/42/flowers-5312741_960_720.jpg",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/06/20/10/26/plant-5320443_960_720.jpg",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/02/25/19/16/stawberry-4879794_960_720.jpg",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/12/11/15/12/dogs-4688586_960_720.jpg",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/05/26/10/54/strawberries-3431122_960_720.jpg",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/10/18/16/08/wolf-2864647_960_720.jpg",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_960_720.jpg",
    },
  ];

  const masonryOptions = {
    fitWidth: true,
    // columnWidth: 300,
    // gutter: 30,
    itemSelector: ".photo-item",
  };

const Gallery: React.FC = ()=>{    

  const {docs} = useFirestore('images');
  console.log(docs)
  const childElements = docs.map(function(element){
      return (
          <li className="photo-item">
              <img src={element.url} />
          </li>
      );
  });

  return (
      <Masonry
          className={'photo-list'} // default ''
          elementType={'div'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          //imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
          {childElements}
      </Masonry>
  );
    
}

export default Gallery;
