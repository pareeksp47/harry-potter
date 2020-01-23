import React from 'react';
import logo from '../logo.svg';
import gryffindor from '../gryffindor.png';
import hogwarts from '../hogwarts.jpg';
import hufflepuff from '../huffulpuff.jpg';
import ravenclaw from '../ravenclaw.jpg';
import slytherin from '../slytherin.png';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';
import {
  Box, makeStyles, AppBar, Toolbar, IconButton, Button, Container, Grid, Typography, Paper, Card,
  CardActionArea, CardMedia, CardContent, CardActions, CardHeader, Avatar, Collapse
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Student Name', minWidth: 170 },
  { id: 'point', label: 'Point', minWidth: 100 },
  { id: 'editPoint', label: 'Edit Point', width: 50 }
  // {
  //   id: 'population',
  //   label: 'Population',
  //   minWidth: 170,
  //   align: 'right',
  //   format: value => value.toLocaleString(),
  // },
  // {
  //   id: 'size',
  //   label: 'Size\u00a0(km\u00b2)',
  //   minWidth: 170,
  //   align: 'right',
  //   format: value => value.toLocaleString(),
  // },
  // {
  //   id: 'density',
  //   label: 'Density',
  //   minWidth: 170,
  //   align: 'right',
  //   format: value => value.toFixed(2),
  // },
];

function createData(name, point) {
  return { name, point };
}

const rows = [
  createData('Harry', 14),
  createData('John', 24),
  createData('John', 12),
  createData('John', 13),
  createData('John', 45),
  createData('John', 34),
  createData('John', 14),
  createData('John', 15),
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 3,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    height: 280,
    width: 500,
  },
  control: {
    padding: theme.spacing(2),
  },
  hufflepuff: {
    //backgroundImage: `url(${logo})`,
    height: 280,
    backgroundPosition: 'center',
    filter: 9,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  card: {
    maxWidth: 500,
  },
  media: {
    height: 150,
    margin: 50,
    padding: 10,
    paddingTop: '50.25%', // 16:9
    //backgroundImage: `url(${logo})`,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  tableRoot:{
    width: '100%',
  },
  tableContainer: {
    maxHeight: 440,
  },
}))

const App = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container className={classes.app} maxWidth='lg' >
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              Hogwarts
            </Typography>
            <Button color="inherit" align="right">Add Student/Professor</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box m={3} p={2}>
        <Grid container spacing={4} p={2}>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={gryffindor} title="Hufflepuff" />
              <CardContent>
                <Typography variant="h2" color="textSecondary" component="h1"> Gryffindor </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
                  onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Paper className={classes.tableRoot}>
                    <TableContainer className={classes.tableContainer}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            {columns.map(column => (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}>
                                {column.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {columns.map(column => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell key={column.id} align={column.align}>
                                      {column.format && typeof value === 'number' ? column.format(value) : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 20]} component="div" count={rows.length}
                      rowsPerPage={rowsPerPage} page={page} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                  </Paper>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={hufflepuff}
                title="Hufflepuff"
              />
              <CardContent>
                <Typography variant="h2" color="textSecondary" component="h1"> Hufflepuff </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
                  onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
          </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat.Saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                    minutes more. (Discard any mussels that don’t open.)
          </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={ravenclaw}
                title="Hufflepuff"
              />
              <CardContent>
                <Typography variant="h2" color="textSecondary" component="h1"> Ravenclaw </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
                  onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={slytherin}
                title="Hufflepuff"
              />
              <CardContent>
                <Typography variant="h2" color="textSecondary" component="h1"> Slytherin </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
                  onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
          </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat.Saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                    minutes more. (Discard any mussels that don’t open.)
          </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
    
  );
}

export default App;
