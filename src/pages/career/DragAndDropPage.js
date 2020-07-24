import React from 'react';
import {
  withStyles,
  Paper,
  Box,
  Typography,
} from '@material-ui/core';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import StarProgressBar from '../../components/StarProgressBar';
import NextButton from '../../components/NextButton';

const styles = {
  content: {
    width: '80vw',
    margin: 'auto',
    borderSpacing: 'auto',
    padding: '4vw'
  },
  board: {
    width: '80%',
    height: '100%',
    marginLeft: '10%',
    justifyContent: 'center'
  }
}

const grid = 8;

class DragAndDropPage extends React.Component {
  constructor(props) {
    super(props);
    this.words = ["Sports", "Music", "Crafting", "Puzzles", "Reading", "Writing", "Gardening", "Cooking"]
    this.state = {
      items: this.words.map((w, index) => ({
        id: `word-${index}`,
        content: w
      })),
      selected: []
    };
  }

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
    droppable: 'items',
    droppableSelected: 'selected'
  };

  getList(id) {
    return this.state[this.id2List[id]]
  }

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = this.reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === 'droppableSelected') {
        state = { selected: items };
      }

      this.setState(state);
    } else {
      const result = this.move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.setState({
        items: result.droppable,
        selected: result.droppableSelected
      });
    }
  };

  // a little function to help us with reordering the result
  reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  /**
   * Moves an item from one list to another list.
   */
  move(source, destination, droppableSource, droppableDestination) {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };


  getItemStyle(isDragging, isSelectedDroppable, draggableStyle) {
    const background = isSelectedDroppable ? 'white' : 'mediumaquamarine';
    const fontColor = isSelectedDroppable ? 'mediumaquamarine' : 'white';
    return {
      // some basic styles to make the items look a bit nicer
      userSelect: 'none',
      width: '10rem',
      height: '10rem',
      color: fontColor,
      fontSize: '2em',
      padding: grid * 2,
      margin: grid * 2,

      // change background colour if dragging
      background: background,

      // styles we need to apply on draggables
      ...draggableStyle
    };
  }

  getListStyle(isDraggingOver, isSelectedDroppable) {
    const background = isSelectedDroppable
      ? 'mediumaquamarine'
      : 'white';
    return {
      background: background,
      display: 'flex',
      padding: grid,
      overflow: 'auto',
      'min-height': '20vh'
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Paper className={classes.content} elevation={3}>
          <Box>
            <Typography variant="h4" >
              {"Interests"}
            </Typography>
            <Typography variant="body2" >
              {"We all find some activities or topics more interesting than others. Your interests and the way you like to work are important aspects to consider when deciding on a career path."}
            </Typography>
            <Typography variant="body2" >
              {"Drag and drop your favorite acitivies onto the green area: "}
            </Typography>
            <Box className={classes.board}>
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable" direction="horizontal">
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      style={this.getListStyle(snapshot.isDraggingOver, false)}>
                      {this.state.items.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={this.getItemStyle(
                                snapshot.isDragging,
                                false,
                                provided.draggableProps.style
                              )}>
                              {item.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
                <Droppable droppableId="droppableSelected" direction="horizontal">
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      style={this.getListStyle(snapshot.isDraggingOver, true)}>
                      {this.state.selected.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={this.getItemStyle(
                                snapshot.isDragging,
                                true,
                                provided.draggableProps.style
                              )}>
                              {item.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </Box>
          </Box>
          <br />
          <NextButton link="/jabc/career/selection" />
        </Paper>
        <StarProgressBar currStars={1} maxStars={5} />


      </React.Fragment >
    )
  }
}

export default withStyles(styles)(DragAndDropPage);
