import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: 'http://www.riverviewauto.com.sg/images/p1040760.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://21673-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2017/02/List-of-Car-Repair-in-Dubai-Yellow-Pages-Directory.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://www.todoautos.com.pe/portal/images/stories/seguridad/taller-mecanico-auto.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://www.riverviewauto.com.sg/images/p1040760.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://www.riverviewauto.com.sg/images/p1040760.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://www.riverviewauto.com.sg/images/p1040760.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://www.riverviewauto.com.sg/images/p1040760.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://www.riverviewauto.com.sg/images/p1040760.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const GridListExampleSingleLine = () => (
  <div style={styles.root}>
    <GridList cellHeight='380' style={styles.gridList} cols={3.3}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSingleLine;