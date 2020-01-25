import React, { Component } from 'react';
import { red } from '@material-ui/core/colors';
import gryffindor from '../gryffindor.png';
import './Header.css';
import { Typography, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
// const styles = theme => ({
//     root: {
//       flexGrow: 3,
//     },
//     form_root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//         color: red,
//       flexGrow: 1,
//     },
//     paper: {
//       height: 280,
//       width: 500,
//     },
//     control: {
//       padding: theme.spacing(2),
//     },
//     hufflepuff: {
//       //backgroundImage: `url(${logo})`,
//       height: 280,
//       backgroundPosition: 'center',
//       filter: 9,
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat'
//     },
//     card: {
//       maxWidth: 500,
//     },
//     media: {
//       height: 150,
//       margin: 50,
//       padding: 10,
//       paddingTop: '50.25%', // 16:9
//     },
//     expand: {
//       transform: 'rotate(0deg)',
//       marginLeft: 'auto',
//       transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: 'rotate(180deg)',
//     },
//     avatar: {
//       backgroundColor: red[500],
//     },
//     tableRoot: {
//       width: '100%',
//     },
//     tableContainer: {
//       maxHeight: 440,
//     },
//     modal_paper: {
//       position: 'absolute',
//       width: 400,
//       backgroundColor: theme.palette.background.paper,
//       border: '2px solid #000',
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
//     },
//   });

// //   const classes = useStyles()


class Gryffindor extends Component {
      constructor() {
        super();
      }

    //   state = {
    //     renderedResponse: ''
    //   }

    //   getResponse = async() => {
    //     const response = await fetch('/api/getStudents');
    //     const body = await response.json();
    // 	console.log("body");
    //     if (response.status !== 200) throw Error(body.message);
    //     return body;
    //   }

    //   componentDidMount() {
    //     this.getResponse()
    //       .then(res => {
    //         const someData = res.students[0].firstname;
    //         this.setState({ renderedResponse: someData });
    //       })
    //   }

    render() {
        let bgImgGryffindor = {
            backgroundImage: `url(${gryffindor})`,
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'red',
      
          }
        return (
            <>
                <Grid item xs={6}>
                    <Card className="card">
                        <CardMedia title="Gryffindor" className="cardMediaImg" image={gryffindor} />
                        <CardContent>
                            <Typography variant="h2" color="textSecondary" component="h1"> Gryffindor </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Grid item xs>
                                <Typography gutterBottom variant="h4"> Toothbrush </Typography>
                                <Typography gutterBottom variant="h6"> 23 </Typography>
                            </Grid>
                            {/* <IconButton className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
                                onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more" >
                                <ExpandMoreIcon />
                            </IconButton> */}
                        </CardActions>
                        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
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
                        </Collapse> */}
                    </Card>
                </Grid>
            </>
        );
    }
}

export default Gryffindor;