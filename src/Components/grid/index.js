import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

const tileData = [
  {
    img: 'http://www.roshfrans.com/wp-content/uploads/2015/06/taller.jpg',
    title: 'Image',
    author: 'author',
 },{
  img: 'http://www.roshfrans.com/wp-content/uploads/2015/06/taller.jpg',
  title: 'Image',
  author: 'author',
},{
  img: 'http://www.roshfrans.com/wp-content/uploads/2015/06/taller.jpg',
  title: 'Image',
  author: 'author',
},{
  img: 'http://www.roshfrans.com/wp-content/uploads/2015/06/taller.jpg',
  title: 'Image',
  author: 'author',
},{
  img: 'http://www.roshfrans.com/wp-content/uploads/2015/06/taller.jpg',
  title: 'Image',
  author: 'author',
},{
  img: 'http://www.roshfrans.com/wp-content/uploads/2015/06/taller.jpg',
  title: 'Image',
  author: 'author',
},{
  img: 'http://www.roshfrans.com/wp-content/uploads/2015/06/taller.jpg',
  title: 'Image',
  author: 'author',
},{
  img: 'http://www.roshfrans.com/wp-content/uploads/2015/06/taller.jpg',
  title: 'Image',
  author: 'author',
},{
  img: 'http://www.roshfrans.com/wp-content/uploads/2015/06/taller.jpg',
  title: 'Image',
  author: 'author',
},]
 
function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight='380' className={classes.gridList} cols={1.1}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);